import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Gallery } from "@/components/gallery";
import { getProject, projects } from "@/lib/content";

type Params = { slug: string };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: `${project.title} — Sarah Raffoul`,
      description: project.summary,
      images: [{ url: project.cover, width: project.coverWidth, height: project.coverHeight, alt: project.coverAlt }],
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(index + 1) % projects.length];
  const plates = project.shots.filter((shot) => shot.src !== project.cover && !shot.drawing);
  const drawings = project.shots.filter((shot) => shot.drawing);

  return (
    <main id="content">
      <article className="mx-auto max-w-[1440px] px-5 py-10 md:px-10 md:py-16">
        <p className="kicker text-accent">Sheet {project.index}</p>
        <div className="mt-4 grid items-end gap-8 lg:grid-cols-12">
          <h1 className="display text-[clamp(3.5rem,8vw,7rem)] lg:col-span-7">{project.title}</h1>
          <p className="text-lg text-muted lg:col-span-5">{project.kind}</p>
        </div>

        <figure className="mt-10 bg-plaster">
          <Image
            src={project.cover}
            alt={project.coverAlt}
            width={project.coverWidth}
            height={project.coverHeight}
            priority
            className="h-auto w-full"
            sizes="(min-width: 1440px) 1360px, 100vw"
          />
        </figure>

        <div className="mt-12 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2 className="kicker text-muted">Reading</h2>
            <p className="mt-4 text-xl leading-relaxed">{project.statement}</p>
          </div>
          <dl className="grid grid-cols-2 gap-px border border-line bg-line lg:col-span-6">
            {project.facts.map((fact) => (
              <div key={fact.label} className="bg-paper p-4">
                <dt className="kicker text-muted">{fact.label}</dt>
                <dd className="mt-2 text-sm">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {project.legend ? (
          <div className="mt-14">
            <h2 className="kicker text-muted">Légende</h2>
            <ul className="mt-4 grid border border-line sm:grid-cols-2 lg:grid-cols-5">
              {project.legend.map((item) => (
                <li key={item.fr} className="border-b border-line p-4 last:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0">
                  <p className="text-sm">{item.fr}</p>
                  <p className="kicker mt-2 text-accent">{item.en}</p>
                </li>
              ))}
            </ul>
            <p className="mt-4 max-w-3xl text-sm text-muted">
              The ground floor holds reception, the gym, a cafeteria, lockers and changing rooms, a sauna, rest, and physiotherapy. Vertical circulation is drawn for access on each level. The upper floor carries administration, gymnastics, a library, and a void crossed toward the garden.
            </p>
          </div>
        ) : null}

        {project.swatches ? (
          <div className="mt-14">
            <h2 className="kicker text-muted">Palette, read from the view</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {project.swatches.map((swatch) => (
                <li key={swatch.name} className="flex items-center gap-3 border border-line p-3">
                  <span className="h-11 w-11 shrink-0 border border-line" style={{ backgroundColor: swatch.hex }} aria-hidden="true" />
                  <span>
                    <span className="block text-sm">{swatch.name}</span>
                    <span className="block text-sm text-muted">{swatch.note}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {plates.length > 0 ? (
          <div className="mt-16">
            <h2 className="kicker mb-6 text-muted">Plates</h2>
            <Gallery shots={plates} />
          </div>
        ) : null}

        {drawings.length > 0 ? (
          <div className="mt-16">
            <h2 className="kicker mb-6 text-muted">Plan and elevation</h2>
            <p className="mb-6 max-w-2xl text-sm text-muted">
              Reconstructed from the render: the room as a furnished plan, and as an interior elevation of the wall the camera faces.
            </p>
            <Gallery shots={drawings} />
          </div>
        ) : null}

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/#work"
            className="inline-flex min-h-11 cursor-pointer items-center kicker focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
          >
            All sheets
          </Link>
          <Link
            href={`/work/${next.slug}`}
            className="inline-flex min-h-11 cursor-pointer items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
          >
            <span className="kicker text-muted">Next</span>
            <span className="display text-2xl">{next.title}</span>
          </Link>
        </div>
      </article>
    </main>
  );
}
