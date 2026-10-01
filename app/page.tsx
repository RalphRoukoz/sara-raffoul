import Image from "next/image";
import Link from "next/link";
import { profile, projects } from "@/lib/content";

const rails = [
  { href: "#cover", label: "Cover" },
  { href: "#work", label: "Work" },
  { href: "#practice", label: "Practice" },
  { href: "#contact", label: "Contact" },
];

export default function HomePage() {
  const [sports, living, bedroom] = projects;

  return (
    <main id="content">
      <div className="mx-auto grid max-w-[1440px] lg:grid-cols-[4.75rem_minmax(0,1fr)]">
        <nav className="sticky top-24 hidden h-fit flex-col gap-6 px-2 py-10 lg:flex" aria-label="On this page">
          {rails.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className="group flex min-h-11 cursor-pointer flex-col items-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
            >
              <span className="display text-sm text-accent">0{index + 1}</span>
              <span className="kicker text-muted transition-colors duration-200 [writing-mode:vertical-rl] group-hover:text-ink">
                {item.label}
              </span>
            </a>
          ))}
        </nav>

        <div className="min-w-0">
          <section id="cover" className="scroll-mt-24 border-b border-line px-5 py-12 md:px-10 md:py-16">
            <div className="grid items-end gap-12 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <p className="kicker rise text-accent">Interior architecture</p>
                <h1 className="display rise rise-2 mt-6 text-[clamp(4.25rem,11vw,8.4rem)]">
                  Sarah
                  <br />
                  Raffoul
                </h1>
                <p className="rise rise-3 mt-8 max-w-md text-lg text-muted">
                  Design and Applied Arts, Architecture Department at the Holy Spirit University of Kaslik. Based in Fanar.
                </p>
                <dl className="rise rise-4 mt-10 grid grid-cols-2 border border-line sm:grid-cols-4">
                  {[
                    ["Drawing", "Portfolio"],
                    ["Sheet", "00"],
                    ["Place", "Fanar"],
                    ["Years", "2020–2023"],
                  ].map(([label, value]) => (
                    <div key={label} className="border-line px-3 py-3 sm:border-l sm:first:border-l-0">
                      <dt className="kicker text-muted">{label}</dt>
                      <dd className="mt-2 text-sm">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <figure className="rise rise-3 lg:col-span-5">
                <div className="bg-plaster">
                  <Image
                    src="/images/portrait.jpg"
                    alt="Portrait of Sarah Raffoul, seated, with long brown hair and a black top"
                    width={1145}
                    height={1374}
                    priority
                    className="h-auto w-full"
                    sizes="(min-width: 1024px) 38vw, 100vw"
                  />
                </div>
                <figcaption className="mt-3 flex justify-between gap-4 kicker text-muted">
                  <span>Portrait</span>
                  <span>Fanar</span>
                </figcaption>
              </figure>
            </div>
          </section>

          <section id="work" className="scroll-mt-24 px-5 py-16 md:px-10 md:py-24">
            <div className="flex items-end justify-between gap-6 border-b border-line pb-4">
              <h2 className="display text-4xl md:text-5xl">Selected work</h2>
              <p className="kicker text-muted">Three sheets</p>
            </div>
            <ul className="mt-2">
              {projects.map((project) => (
                <li key={project.slug} className="border-b border-line">
                  <Link
                    href={`/work/${project.slug}`}
                    className="group grid cursor-pointer grid-cols-[auto_1fr] items-center gap-5 py-5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink sm:grid-cols-[4.5rem_minmax(0,1fr)_11rem_auto] sm:gap-8"
                  >
                    <span className="display text-3xl text-accent sm:text-4xl">{project.index}</span>
                    <span>
                      <span className="display block text-3xl transition-colors duration-200 group-hover:text-accent sm:text-4xl">
                        {project.title}
                      </span>
                      <span className="mt-1 block text-sm text-muted">{project.kind}</span>
                    </span>
                    <span className="col-span-2 hidden text-sm text-muted sm:col-span-1 sm:block">{project.summary}</span>
                    <span className="kicker col-span-2 text-accent sm:col-span-1 sm:text-right">View sheet</span>
                  </Link>
                </li>
              ))}
            </ul>

            <article className="mt-16 grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
              <Link
                href={`/work/${sports.slug}`}
                className="group cursor-pointer lg:col-span-7 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
              >
                <span className="block overflow-hidden bg-plaster">
                  <Image
                    src={sports.cover}
                    alt={sports.coverAlt}
                    width={sports.coverWidth}
                    height={sports.coverHeight}
                    className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    sizes="(min-width: 1024px) 55vw, 100vw"
                  />
                </span>
              </Link>
              <div className="lg:col-span-5">
                <p className="kicker text-accent">Sheet 01</p>
                <h3 className="display mt-3 text-4xl md:text-5xl">{sports.title}</h3>
                <p className="mt-5 text-muted">{sports.statement}</p>
                <Link
                  href={`/work/${sports.slug}`}
                  className="mt-8 inline-flex min-h-11 cursor-pointer items-center border border-ink px-5 kicker transition-colors duration-200 hover:bg-ink hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
                >
                  Open the drawings
                </Link>
              </div>
            </article>

            <div className="mt-8 grid items-end gap-8 md:grid-cols-2">
              {[living, bedroom].map((project) => (
                <Link
                  key={project.slug}
                  href={`/work/${project.slug}`}
                  className="group cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
                >
                  <span className="block overflow-hidden bg-plaster">
                    <Image
                      src={project.cover}
                      alt={project.coverAlt}
                      width={project.coverWidth}
                      height={project.coverHeight}
                      className={`w-full object-cover transition-transform duration-500 group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100 ${project.slug === "bedroom" ? "aspect-video" : "aspect-[4/5]"}`}
                      sizes="(min-width: 768px) 45vw, 100vw"
                    />
                  </span>
                  <span className="mt-4 flex items-baseline justify-between gap-4">
                    <span>
                      <span className="kicker text-accent">Sheet {project.index}</span>
                      <span className="display mt-1 block text-3xl">{project.title}</span>
                    </span>
                    <span className="kicker text-muted">{project.kind}</span>
                  </span>
                </Link>
              ))}
            </div>
          </section>

          <section id="practice" className="scroll-mt-24 border-t border-line bg-plaster/60 px-5 py-16 md:px-10 md:py-24">
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="kicker text-accent">Practice</p>
                <h2 className="display mt-4 text-4xl md:text-6xl">Trained on the plan, and on the room.</h2>
              </div>
              <div className="space-y-6 text-muted lg:col-span-7 lg:pt-10">
                <p>
                  Sarah Raffoul studied in the Architecture Department at USEK — Université Saint-Esprit de Kaslik — and graduated in 2023 with a BA in Design and Applied Arts. The work here is from that training: a building organised by noise and quiet, and two interiors studied as materials, light, and view.
                </p>
                <p>
                  She works in English, Arabic, and French. Alongside the drawings she has spent time explaining things in public: content at BlackBox AI, and marketing at Keni Cosmetics. The same care shows up when a plan has to be read by someone who did not draw it.
                </p>
                <p>
                  In 2020 she assisted Arc En Ciel with recovery work after the Beirut explosion. Earlier, she contributed to Action Against Hunger.
                </p>
              </div>
            </div>
            <dl className="mt-14 grid border border-line bg-paper sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Education", "BA Design and Applied Arts, USEK, 2020–2023"],
                ["School", "French Baccalaureate, Institut Moderne du Liban"],
                ["Languages", "English, Arabic, French"],
                ["Place", "Fanar, Lebanon"],
              ].map(([label, value]) => (
                <div key={label} className="border-b border-line p-5 last:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0">
                  <dt className="kicker text-accent">{label}</dt>
                  <dd className="mt-3 text-sm leading-relaxed">{value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section id="contact" className="scroll-mt-24 px-5 py-16 md:px-10 md:py-24">
            <p className="kicker text-accent">Contact</p>
            <h2 className="display mt-4 max-w-4xl text-4xl md:text-6xl">For a studio, a junior role, or a conversation about a room.</h2>
            <div className="mt-10 flex flex-col gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex min-h-11 w-fit cursor-pointer items-center text-2xl underline decoration-line underline-offset-8 transition-colors duration-200 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink md:text-4xl"
              >
                {profile.email}
              </a>
              <a
                href={profile.phoneHref}
                className="inline-flex min-h-11 w-fit cursor-pointer items-center text-xl text-muted underline decoration-line underline-offset-8 transition-colors duration-200 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
              >
                {profile.phone}
              </a>
              <p className="kicker text-muted">{profile.place}</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
