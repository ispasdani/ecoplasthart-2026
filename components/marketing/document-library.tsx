"use client";

import { useQuery } from "convex/react";
import { Download, FileImage, FileText, FileType2, Loader2 } from "lucide-react";
import { useMemo } from "react";

import { api } from "@/convex/_generated/api";
import { Badge } from "@/components/ui/button";

type DocLabels = {
  documentsIntro: string;
  loading: string;
  uncategorized: string;
  download: string;
  emptyTitle: string;
  emptyBody: string;
  contactEmail: string;
};

/**
 * Live list of the files uploaded through the dashboard (`convex/files.ts`).
 *
 * A Client Component so new uploads appear without a redeploy — the page's
 * marketing copy around it stays server-rendered and static for SEO.
 */
export function DocumentLibrary({ labels }: { labels: DocLabels }) {
  const files = useQuery(api.files.list, {});

  const groups = useMemo(() => {
    if (!files) return [];

    const byCategory = new Map<string, typeof files>();
    for (const file of files) {
      const key = file.category?.trim() || labels.uncategorized;
      const bucket = byCategory.get(key);
      if (bucket) bucket.push(file);
      else byCategory.set(key, [file]);
    }

    // Keep the catch-all bucket last, everything else alphabetical.
    return [...byCategory.entries()].sort(([a], [b]) => {
      if (a === labels.uncategorized) return 1;
      if (b === labels.uncategorized) return -1;
      return a.localeCompare(b);
    });
  }, [files, labels.uncategorized]);

  if (files === undefined) {
    return (
      <div className="flex items-center gap-3 rounded-2xl border border-hairline bg-surface-soft px-6 py-10 text-sm text-steel">
        <Loader2 aria-hidden className="size-4 animate-spin" />
        {labels.loading}
      </div>
    );
  }

  if (files.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-hairline-strong bg-surface-soft px-6 py-12 text-center">
        <FileText aria-hidden className="mx-auto size-7 text-muted" strokeWidth={1.5} />
        <h3 className="mt-4 text-[1.0625rem] font-semibold text-ink">
          {labels.emptyTitle}
        </h3>
        <p className="mx-auto mt-2 max-w-md text-[0.9375rem] leading-relaxed text-slate">
          {labels.emptyBody}
        </p>
        <a
          href={`mailto:${labels.contactEmail}`}
          className="mt-5 inline-block text-sm font-medium text-brand underline underline-offset-4 hover:text-brand-dark"
        >
          {labels.contactEmail}
        </a>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      <p className="text-[0.9375rem] text-slate">{labels.documentsIntro}</p>

      {groups.map(([category, categoryFiles]) => (
        <section key={category}>
          <h3 className="text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-steel">
            {category}
          </h3>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {categoryFiles.map((file) => (
              <li key={file._id}>
                <FileCard
                  title={file.title}
                  description={file.description}
                  contentType={file.contentType}
                  size={file.size}
                  url={file.url}
                  fileName={file.fileName}
                  downloadLabel={labels.download}
                />
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

function FileCard({
  title,
  description,
  contentType,
  size,
  url,
  fileName,
  downloadLabel,
}: {
  title: string;
  description?: string;
  contentType?: string;
  size?: number;
  url: string | null;
  fileName?: string;
  downloadLabel: string;
}) {
  const meta = [extensionOf(contentType, fileName), formatBytes(size)]
    .filter(Boolean)
    .join(" · ");

  const body = (
    <>
      <div className="flex items-start justify-between gap-3">
        <span className="grid size-10 place-items-center rounded-lg bg-brand-soft text-brand">
          {fileIconFor(contentType)}
        </span>
        {url ? (
          <span
            aria-hidden
            className="grid size-8 place-items-center rounded-full border border-hairline text-steel transition-colors group-hover:border-brand group-hover:bg-brand group-hover:text-white"
          >
            <Download className="size-4" />
          </span>
        ) : null}
      </div>

      <h4 className="mt-5 text-[0.9375rem] font-semibold text-ink">{title}</h4>
      {description ? (
        <p className="mt-1.5 line-clamp-3 text-[0.8125rem] leading-relaxed text-slate">
          {description}
        </p>
      ) : null}

      <div className="mt-4 flex items-center gap-2 pt-1">
        {meta ? <Badge>{meta}</Badge> : null}
        {url ? (
          <span className="text-[0.8125rem] font-medium text-brand">
            {downloadLabel}
          </span>
        ) : null}
      </div>
    </>
  );

  if (!url) {
    return (
      <div className="flex h-full flex-col rounded-xl border border-hairline bg-canvas p-5 opacity-60">
        {body}
      </div>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col rounded-xl border border-hairline bg-canvas p-5 transition-all duration-200 hover:border-hairline-strong hover:shadow-e2"
    >
      {body}
    </a>
  );
}

/** Returns a rendered icon rather than a component, so the JSX stays static. */
function fileIconFor(contentType?: string) {
  const props = {
    "aria-hidden": true,
    className: "size-[1.15rem]",
    strokeWidth: 1.7,
  } as const;

  if (contentType?.startsWith("image/")) return <FileImage {...props} />;
  if (contentType === "application/pdf") return <FileType2 {...props} />;
  return <FileText {...props} />;
}

function extensionOf(contentType?: string, fileName?: string): string {
  const fromName = fileName?.split(".").pop();
  if (fromName && fromName.length <= 4) return fromName.toUpperCase();
  if (contentType === "application/pdf") return "PDF";
  if (contentType?.startsWith("image/")) {
    return contentType.slice("image/".length).toUpperCase();
  }
  return "";
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
