import Link from "next/link";

export default function NotFound() {
  return (
    <main id="content" className="mx-auto flex min-h-[60vh] max-w-[1440px] flex-col justify-center px-5 py-24 md:px-10">
      <p className="kicker text-accent">Sheet missing</p>
      <h1 className="display mt-4 text-5xl md:text-7xl">This page is not on the drawing set.</h1>
      <Link
        href="/"
        className="mt-8 inline-flex min-h-11 w-fit cursor-pointer items-center border border-ink px-5 kicker transition-colors duration-200 hover:bg-ink hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
      >
        Return to the index
      </Link>
    </main>
  );
}
