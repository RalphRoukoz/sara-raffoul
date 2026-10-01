import Link from "next/link";
import { profile } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-10 md:grid-cols-4 md:px-8">
        <p className="display text-2xl">
          <Link href="/" className="cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink">
            {profile.name}
          </Link>
        </p>
        <p className="text-sm text-muted">
          {profile.role}
          <br />
          {profile.place}
        </p>
        <p className="text-sm">
          <a className="cursor-pointer underline decoration-line underline-offset-4 transition-colors duration-200 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <br />
          <a className="cursor-pointer underline decoration-line underline-offset-4 transition-colors duration-200 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink" href={profile.phoneHref}>
            {profile.phone}
          </a>
        </p>
        <p className="kicker text-muted md:text-right">Sheet 00 · Portfolio</p>
      </div>
    </footer>
  );
}
