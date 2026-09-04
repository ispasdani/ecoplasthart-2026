import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { ButtonLink } from "@/components/ui/button";
import { Container, Section, SectionHeader } from "@/components/ui/layout";
import { MediaCaption, MediaTile } from "@/components/ui/media";
import { Reveal, RevealItem, Stagger } from "@/components/ui/reveal";
import { serviceIcons, serviceVideos } from "@/lib/site/icons";
import type { ServiceNavItem } from "@/lib/site/nav";
import type { Messages } from "@/messages/ro";

/**
 * Bento grid of service tiles: two wide cards on the first row, four compact
 * cards on the second — mirroring the reference design's solutions section.
 */
export function ServicesShowcase({
  dict,
  services,
  servicesHref,
}: {
  dict: Messages;
  services: ServiceNavItem[];
  servicesHref: string;
}) {
  const t = dict.home.services;
  const [first, second, ...rest] = services;

  return (
    <Section tone="surface" space="lg">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow={t.eyebrow}
            heading={t.heading}
            intro={t.intro}
            action={
              <ButtonLink
                href={servicesHref}
                variant="secondary"
                size="sm"
                trailingIcon="arrow"
              >
                {dict.common.seeAllServices}
              </ButtonLink>
            }
          />
        </Reveal>

        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {[first, second].map((service, i) => (
            <RevealItem key={service.slug} className="lg:col-span-6">
              <ServiceTile
                service={service}
                variant={i}
                size="lg"
                className="h-[17rem] sm:h-[19rem]"
              />
            </RevealItem>
          ))}

          {rest.map((service, i) => (
            <RevealItem key={service.slug} className="lg:col-span-3">
              <ServiceTile
                service={service}
                variant={i + 2}
                size="sm"
                className="h-[15rem]"
              />
            </RevealItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}

function ServiceTile({
  service,
  variant,
  size,
  className,
}: {
  service: ServiceNavItem;
  variant: number;
  size: "sm" | "lg";
  className?: string;
}) {
  const Icon = serviceIcons[service.slug];

  return (
    <Link href={service.href} className="group/tile block h-full">
      <MediaTile
        icon={Icon}
        video={serviceVideos[service.slug]}
        variant={variant}
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className={className}
      >
        <div className="relative flex h-full flex-col">
          <span
            aria-hidden
            className="absolute right-4 top-4 grid size-8 place-items-center rounded-full border border-white/25 text-white transition-all duration-200 group-hover/tile:border-white group-hover/tile:bg-white group-hover/tile:text-ink"
          >
            <ArrowUpRight className="size-4" />
          </span>
          <MediaCaption
            title={service.name}
            body={service.desc}
            size={size === "lg" ? "md" : "sm"}
          />
        </div>
      </MediaTile>
    </Link>
  );
}
