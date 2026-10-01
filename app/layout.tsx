import type { Metadata } from "next";
import { Cinzel, Josefin_Sans } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { profile } from "@/lib/content";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-josefin",
  display: "swap",
});

const description =
  "Portfolio of Sarah Raffoul, interior designer in Fanar, Lebanon. Academic work from the Architecture Department at USEK: a sports centre, a living room in three cameras, and a bedroom.";

export const metadata: Metadata = {
  metadataBase: new URL("https://sara-rafful.vercel.app"),
  title: {
    default: "Sarah Raffoul — Interior Architecture",
    template: "%s — Sarah Raffoul",
  },
  description,
  openGraph: {
    title: "Sarah Raffoul — Interior Architecture",
    description,
    url: "https://sara-rafful.vercel.app",
    siteName: "Sarah Raffoul",
    locale: "en_LB",
    type: "website",
    images: [
      {
        url: "/images/bedroom.jpg",
        width: 1920,
        height: 1080,
        alt: "Bedroom interior with oak, linen, and a full-height window",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarah Raffoul — Interior Architecture",
    description,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "Interior Designer",
  email: profile.email,
  telephone: "+96170560261",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Fanar",
    addressCountry: "LB",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Holy Spirit University of Kaslik",
  },
  knowsLanguage: ["en", "ar", "fr"],
  url: "https://sara-rafful.vercel.app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cinzel.variable} ${josefin.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[90] focus:bg-ink focus:px-4 focus:py-3 focus:text-paper"
        >
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
