"use client";

import Link from "next/link";
import { useConvexAuth, useMutation, useQuery } from "convex/react";
import { ConvexError } from "convex/values";
import {
  CheckCircle2,
  FileImage,
  FileText,
  FileType2,
  FolderTree,
  HardDrive,
  Loader2,
  Pencil,
  Trash2,
  Upload,
  X,
} from "lucide-react";
import { useMemo, useRef, useState } from "react";
import type { ChangeEvent, DragEvent, FormEvent, ReactNode } from "react";

import {
  ConvexAuthNotice,
  NotSyncedNotice,
} from "@/app/(dashboard)/_components/notices";
import { api } from "@/convex/_generated/api";
import type { Doc, Id } from "@/convex/_generated/dataModel";
import {
  DOCUMENT_CATEGORIES,
  documentCategoryLabel,
} from "@/lib/site/document-categories";

type FileDoc = Doc<"files"> & { url: string | null };

/** Convex storage takes far more than this; the cap just catches mistakes. */
const MAX_BYTES = 20 * 1024 * 1024;

const ACCEPTED_EXTENSIONS = ".pdf,.jpg,.jpeg,.png,.webp,.doc,.docx,.xls,.xlsx";

/**
 * Media library — the upload side of `/certificari`.
 *
 * Admins upload here (`convex/files.ts`: `generateUploadUrl` -> POST the bytes
 * -> `saveFile`) and the file lands on the public certifications page straight
 * away, because `DocumentLibrary` reads the same `files.list` query live.
 * Members see the same list, read-only.
 */
export default function MediaPage() {
  const { isAuthenticated, isLoading: authLoading } = useConvexAuth();

  // `null` = signed in with Clerk but not mirrored into Convex yet.
  const me = useQuery(api.users.current, isAuthenticated ? {} : "skip");
  // Public query — no need to wait for the user row before asking for it.
  const files = useQuery(api.files.list, {});

  const isAdmin = me?.role === "admin";

  const sorted = useMemo(() => sortFiles(files), [files]);
  const totalBytes = sorted.reduce((sum, file) => sum + (file.size ?? 0), 0);
  const categoryCount = new Set(
    sorted.map((file) => file.category?.trim()).filter(Boolean),
  ).size;

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-semibold tracking-tight">
          Bibliotecă media
        </h1>
        <p className="mt-1 max-w-2xl text-sm text-stone-600">
          Documentele încărcate aici apar imediat pe pagina publică{" "}
          <Link
            href="/certificari"
            target="_blank"
            className="font-medium text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
          >
            Certificări
          </Link>
          , grupate după categorie.{" "}
          {isAdmin
            ? "Ca administrator, poți încărca, edita și șterge fișiere."
            : "Doar administratorii pot încărca sau șterge fișiere."}
        </p>
      </header>

      {!authLoading && !isAuthenticated ? (
        <ConvexAuthNotice />
      ) : me === null ? (
        <NotSyncedNotice />
      ) : (
        <>
          {isAdmin ? <UploadPanel /> : null}

          {files === undefined ? (
            <LoadingCard />
          ) : sorted.length === 0 ? (
            <EmptyCard isAdmin={isAdmin} />
          ) : (
            <>
              <div className="grid gap-4 sm:grid-cols-3">
                <StatCard
                  label="Documente"
                  value={String(sorted.length)}
                  icon={FileText}
                />
                <StatCard
                  label="Categorii folosite"
                  value={String(categoryCount)}
                  icon={FolderTree}
                />
                <StatCard
                  label="Spațiu ocupat"
                  value={formatBytes(totalBytes) || "0 B"}
                  icon={HardDrive}
                />
              </div>

              <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white">
                <div className="hidden border-b border-stone-200 bg-stone-50 px-5 py-2.5 text-xs font-medium uppercase tracking-wide text-stone-500 sm:grid sm:grid-cols-[minmax(0,1fr)_11rem_9rem_7rem] sm:gap-4">
                  <span>Document</span>
                  <span>Categorie</span>
                  <span>Încărcat</span>
                  <span className="text-right">Acțiuni</span>
                </div>

                <ul className="divide-y divide-stone-200">
                  {sorted.map((file) => (
                    <li key={file._id}>
                      <FileRow file={file} canEdit={isAdmin} />
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Upload                                                                     */
/* -------------------------------------------------------------------------- */

function UploadPanel() {
  const generateUploadUrl = useMutation(api.files.generateUploadUrl);
  const saveFile = useMutation(api.files.saveFile);

  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState<string>(DOCUMENT_CATEGORIES[0].key);
  const [dragging, setDragging] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [savedTitle, setSavedTitle] = useState<string | null>(null);

  function pickFile(picked: File | undefined) {
    if (!picked) return;

    if (picked.size > MAX_BYTES) {
      setError(
        `Fișierul depășește limita de ${formatBytes(MAX_BYTES)}. Comprimă-l și încearcă din nou.`,
      );
      return;
    }

    setError(null);
    setSavedTitle(null);
    setFile(picked);
    // Only prefill an untouched title, so re-picking a file never overwrites
    // something the admin typed.
    setTitle((current) => current || titleFromFileName(picked.name));
  }

  function reset() {
    setFile(null);
    setTitle("");
    setDescription("");
    setCategory(DOCUMENT_CATEGORIES[0].key);
    if (inputRef.current) inputRef.current.value = "";
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!file || pending) return;

    const trimmedTitle = title.trim();
    if (!trimmedTitle) {
      setError("Dă documentului un titlu — el apare pe site.");
      return;
    }

    setPending(true);
    setError(null);
    setSavedTitle(null);

    try {
      const uploadUrl = await generateUploadUrl();

      const response = await fetch(uploadUrl, {
        method: "POST",
        headers: file.type ? { "Content-Type": file.type } : undefined,
        body: file,
      });

      if (!response.ok) {
        throw new Error(`Upload failed with status ${response.status}`);
      }

      const { storageId } = (await response.json()) as {
        storageId: Id<"_storage">;
      };

      await saveFile({
        storageId,
        title: trimmedTitle,
        description: description.trim() || undefined,
        fileName: file.name,
        contentType: file.type || undefined,
        size: file.size,
        category: category || undefined,
      });

      setSavedTitle(trimmedTitle);
      reset();
    } catch (err) {
      setError(errorMessage(err, "Încărcarea a eșuat. Încearcă din nou."));
    } finally {
      setPending(false);
    }
  }

  function handleDrop(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setDragging(false);
    pickFile(event.dataTransfer.files[0]);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-stone-200 bg-white p-6"
    >
      <h2 className="font-semibold text-stone-900">Încarcă un document</h2>
      <p className="mt-1 text-sm text-stone-600">
        PDF, imagini sau documente Office, până la {formatBytes(MAX_BYTES)}.
      </p>

      <div
        onDragOver={(event) => {
          event.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
        className={`mt-5 rounded-xl border-2 border-dashed px-5 py-8 text-center transition-colors ${
          dragging
            ? "border-emerald-500 bg-emerald-50"
            : "border-stone-300 bg-stone-50"
        }`}
      >
        <input
          ref={inputRef}
          id="file"
          type="file"
          accept={ACCEPTED_EXTENSIONS}
          className="sr-only"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            pickFile(event.target.files?.[0])
          }
        />

        {file ? (
          <div className="flex items-center justify-center gap-3 text-sm">
            <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-emerald-100 text-emerald-800">
              {fileIconFor(file.type)}
            </span>
            <span className="min-w-0 text-left">
              <span className="block truncate font-medium text-stone-900">
                {file.name}
              </span>
              <span className="block text-stone-500">
                {formatBytes(file.size)}
              </span>
            </span>
            <button
              type="button"
              onClick={reset}
              className="shrink-0 rounded-lg p-1.5 text-stone-500 transition-colors hover:bg-stone-200 hover:text-stone-800"
            >
              <X aria-hidden className="size-4" />
              <span className="sr-only">Renunță la fișierul ales</span>
            </button>
          </div>
        ) : (
          <>
            <Upload
              aria-hidden
              className="mx-auto size-6 text-stone-400"
              strokeWidth={1.6}
            />
            <p className="mt-3 text-sm text-stone-600">
              Trage fișierul aici sau{" "}
              <label
                htmlFor="file"
                className="cursor-pointer font-medium text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
              >
                alege-l de pe calculator
              </label>
              .
            </p>
          </>
        )}
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <Field label="Titlu" htmlFor="title">
          <input
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="ex. Certificat ISO 14001"
            className={INPUT_CLASS}
          />
        </Field>

        <Field label="Categorie" htmlFor="category">
          <select
            id="category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className={INPUT_CLASS}
          >
            {DOCUMENT_CATEGORIES.map((option) => (
              <option key={option.key} value={option.key}>
                {option.label}
              </option>
            ))}
            <option value="">Fără categorie</option>
          </select>
        </Field>

        <Field
          label="Descriere (opțional)"
          htmlFor="description"
          className="sm:col-span-2"
        >
          <textarea
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            rows={2}
            placeholder="Un rând despre ce atestă documentul și până când e valabil."
            className={`${INPUT_CLASS} h-auto py-2`}
          />
        </Field>
      </div>

      {error ? (
        <p role="alert" className="mt-4 text-sm text-red-600">
          {error}
        </p>
      ) : null}

      {savedTitle ? (
        <p className="mt-4 flex items-center gap-2 text-sm text-emerald-700">
          <CheckCircle2 aria-hidden className="size-4 shrink-0" />
          „{savedTitle}” este publicat pe pagina Certificări.
        </p>
      ) : null}

      <div className="mt-5">
        <button
          type="submit"
          disabled={!file || pending}
          className="inline-flex h-10 items-center gap-2 rounded-lg bg-emerald-600 px-4 text-sm font-medium text-white transition-colors hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {pending ? (
            <Loader2 aria-hidden className="size-4 animate-spin" />
          ) : (
            <Upload aria-hidden className="size-4" />
          )}
          {pending ? "Se încarcă…" : "Publică documentul"}
        </button>
      </div>
    </form>
  );
}

/* -------------------------------------------------------------------------- */
/* Row                                                                        */
/* -------------------------------------------------------------------------- */

function FileRow({ file, canEdit }: { file: FileDoc; canEdit: boolean }) {
  const updateFile = useMutation(api.files.updateFile);
  const deleteFile = useMutation(api.files.deleteFile);

  const [editing, setEditing] = useState(false);
  const [confirmingDelete, setConfirmingDelete] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [title, setTitle] = useState(file.title);
  const [description, setDescription] = useState(file.description ?? "");
  const [category, setCategory] = useState(file.category ?? "");

  function startEditing() {
    // Re-seed from the document: another admin may have changed it meanwhile.
    setTitle(file.title);
    setDescription(file.description ?? "");
    setCategory(file.category ?? "");
    setError(null);
    setEditing(true);
  }

  async function handleSave(event: FormEvent) {
    event.preventDefault();

    const trimmed = title.trim();
    if (!trimmed) {
      setError("Titlul nu poate fi gol.");
      return;
    }

    setPending(true);
    setError(null);
    try {
      await updateFile({
        fileId: file._id,
        title: trimmed,
        description: description.trim(),
        category,
      });
      setEditing(false);
    } catch (err) {
      setError(errorMessage(err, "Modificările nu au putut fi salvate."));
    } finally {
      setPending(false);
    }
  }

  async function handleDelete() {
    setPending(true);
    setError(null);
    try {
      await deleteFile({ fileId: file._id });
      // On success the row unmounts with the query update — nothing to reset.
    } catch (err) {
      setError(errorMessage(err, "Fișierul nu a putut fi șters."));
      setPending(false);
      setConfirmingDelete(false);
    }
  }

  return (
    <div className="px-5 py-4">
      <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_11rem_9rem_7rem] sm:items-center sm:gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <span
            aria-hidden
            className="grid size-10 shrink-0 place-items-center rounded-lg bg-emerald-50 text-emerald-800"
          >
            {fileIconFor(file.contentType)}
          </span>
          <div className="min-w-0">
            <p className="truncate font-medium text-stone-900">{file.title}</p>
            <p className="truncate text-sm text-stone-500">
              {[file.fileName, formatBytes(file.size)]
                .filter(Boolean)
                .join(" · ")}
            </p>
          </div>
        </div>

        <p className="text-sm text-stone-600">
          {file.category?.trim() ? (
            documentCategoryLabel(file.category.trim())
          ) : (
            <span className="text-stone-400">Fără categorie</span>
          )}
        </p>

        <p className="text-sm text-stone-500">
          <span className="sm:hidden">Încărcat </span>
          {formatDate(file._creationTime)}
        </p>

        <div className="flex items-center gap-1 sm:justify-end">
          {file.url ? (
            <a
              href={file.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-2 py-1.5 text-sm font-medium text-emerald-700 transition-colors hover:bg-emerald-50"
            >
              Vezi
            </a>
          ) : null}

          {canEdit ? (
            <>
              <button
                type="button"
                onClick={() => (editing ? setEditing(false) : startEditing())}
                className="rounded-lg p-1.5 text-stone-500 transition-colors hover:bg-stone-100 hover:text-stone-800"
              >
                <Pencil aria-hidden className="size-4" />
                <span className="sr-only">Editează {file.title}</span>
              </button>
              <button
                type="button"
                onClick={() => setConfirmingDelete(true)}
                className="rounded-lg p-1.5 text-stone-500 transition-colors hover:bg-red-50 hover:text-red-700"
              >
                <Trash2 aria-hidden className="size-4" />
                <span className="sr-only">Șterge {file.title}</span>
              </button>
            </>
          ) : null}
        </div>
      </div>

      {confirmingDelete ? (
        <div className="mt-3 flex flex-wrap items-center gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          <span className="min-w-0">
            Ștergi „{file.title}” definitiv? Dispare și de pe pagina publică.
          </span>
          <div className="ml-auto flex items-center gap-2">
            <button
              type="button"
              onClick={() => setConfirmingDelete(false)}
              disabled={pending}
              className="rounded-lg border border-red-300 px-3 py-1.5 font-medium transition-colors hover:bg-white disabled:opacity-50"
            >
              Renunță
            </button>
            <button
              type="button"
              onClick={handleDelete}
              disabled={pending}
              className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-3 py-1.5 font-medium text-white transition-colors hover:bg-red-700 disabled:opacity-50"
            >
              {pending ? (
                <Loader2 aria-hidden className="size-3.5 animate-spin" />
              ) : null}
              Șterge
            </button>
          </div>
        </div>
      ) : null}

      {editing ? (
        <form
          onSubmit={handleSave}
          className="mt-3 rounded-xl border border-stone-200 bg-stone-50 p-4"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Titlu" htmlFor={`title-${file._id}`}>
              <input
                id={`title-${file._id}`}
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                className={INPUT_CLASS}
              />
            </Field>

            <Field label="Categorie" htmlFor={`category-${file._id}`}>
              <select
                id={`category-${file._id}`}
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                className={INPUT_CLASS}
              >
                {DOCUMENT_CATEGORIES.map((option) => (
                  <option key={option.key} value={option.key}>
                    {option.label}
                  </option>
                ))}
                {/* A value stored before the preset keys existed stays selectable. */}
                {category && !isKnownCategory(category) ? (
                  <option value={category}>{category}</option>
                ) : null}
                <option value="">Fără categorie</option>
              </select>
            </Field>

            <Field
              label="Descriere"
              htmlFor={`description-${file._id}`}
              className="sm:col-span-2"
            >
              <textarea
                id={`description-${file._id}`}
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                rows={2}
                className={`${INPUT_CLASS} h-auto py-2`}
              />
            </Field>
          </div>

          <div className="mt-4 flex items-center gap-2">
            <button
              type="submit"
              disabled={pending}
              className="inline-flex h-9 items-center gap-2 rounded-lg bg-emerald-600 px-3 text-sm font-medium text-white transition-colors hover:bg-emerald-700 disabled:opacity-50"
            >
              {pending ? (
                <Loader2 aria-hidden className="size-3.5 animate-spin" />
              ) : null}
              Salvează
            </button>
            <button
              type="button"
              onClick={() => setEditing(false)}
              disabled={pending}
              className="h-9 rounded-lg px-3 text-sm font-medium text-stone-600 transition-colors hover:bg-stone-200 disabled:opacity-50"
            >
              Renunță
            </button>
          </div>
        </form>
      ) : null}

      {error ? (
        <p role="alert" className="mt-2 text-xs text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Pieces                                                                     */
/* -------------------------------------------------------------------------- */

const INPUT_CLASS =
  "h-10 w-full rounded-lg border border-stone-300 bg-white px-3 text-sm text-stone-900 placeholder:text-stone-400 transition-colors hover:border-stone-400 focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600 disabled:opacity-50";

function Field({
  label,
  htmlFor,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-sm font-medium text-stone-700"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

function StatCard({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: string;
  icon: typeof FileText;
}) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5">
      <div className="flex items-center gap-2 text-sm text-stone-600">
        <Icon aria-hidden className="size-4 text-emerald-700" />
        {label}
      </div>
      <p className="mt-2 text-2xl font-semibold tabular-nums text-stone-900">
        {value}
      </p>
    </div>
  );
}

function LoadingCard() {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-stone-200 bg-white px-5 py-10 text-sm text-stone-500">
      <Loader2 aria-hidden className="size-4 animate-spin" />
      Se încarcă documentele…
    </div>
  );
}

function EmptyCard({ isAdmin }: { isAdmin: boolean }) {
  return (
    <div className="rounded-2xl border border-dashed border-stone-300 bg-white px-5 py-12 text-center">
      <FileText
        aria-hidden
        className="mx-auto size-7 text-stone-400"
        strokeWidth={1.5}
      />
      <h2 className="mt-4 font-semibold text-stone-900">
        Niciun document încărcat
      </h2>
      <p className="mx-auto mt-1 max-w-md text-sm text-stone-600">
        {isAdmin
          ? "Folosește formularul de mai sus. Documentul apare pe pagina Certificări imediat după încărcare."
          : "Un administrator poate încărca primele certificate și autorizații."}
      </p>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Helpers                                                                    */
/* -------------------------------------------------------------------------- */

/** Newest first — the file just uploaded should be the one at the top. */
function sortFiles(files: FileDoc[] | undefined): FileDoc[] {
  if (!files) return [];
  return [...files].sort((a, b) => b._creationTime - a._creationTime);
}

function isKnownCategory(category: string): boolean {
  return DOCUMENT_CATEGORIES.some((option) => option.key === category);
}

/** Returns a rendered icon rather than a component, so the JSX stays static. */
function fileIconFor(contentType?: string) {
  const props = {
    "aria-hidden": true,
    className: "size-4",
    strokeWidth: 1.7,
  } as const;

  if (contentType?.startsWith("image/")) return <FileImage {...props} />;
  if (contentType === "application/pdf") return <FileType2 {...props} />;
  return <FileText {...props} />;
}

/** "Certificat ISO 14001.pdf" -> "Certificat ISO 14001" */
function titleFromFileName(fileName: string): string {
  return fileName
    .replace(/\.[^.]+$/, "")
    .replace(/[_-]+/g, " ")
    .trim();
}

function errorMessage(error: unknown, fallback: string): string {
  // `ConvexError` carries the Romanian message thrown by `convex/files.ts`;
  // anything else (network, storage) is not safe to show verbatim.
  return error instanceof ConvexError ? String(error.data) : fallback;
}

function formatBytes(bytes?: number): string {
  if (!bytes || bytes <= 0) return "";
  const units = ["B", "KB", "MB", "GB"];
  const exponent = Math.min(
    Math.floor(Math.log(bytes) / Math.log(1024)),
    units.length - 1,
  );
  const value = bytes / 1024 ** exponent;
  return `${value >= 10 || exponent === 0 ? Math.round(value) : value.toFixed(1)} ${units[exponent]}`;
}

function formatDate(timestamp: number): string {
  return new Intl.DateTimeFormat("ro-RO", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(timestamp);
}
