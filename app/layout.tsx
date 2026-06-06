import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import TopNav from "./components/TopNav";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { profile, siteUrl } from "./lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: profile.name,
    template: `%s · ${profile.name}`,
  },
  description: profile.tagline,
  keywords: [
    "Pyare Lal Chauhan",
    "3D Vision",
    "LiDAR",
    "point cloud segmentation",
    "deep learning",
    "geospatial",
    "remote sensing",
    "IISER Bhopal",
    "GeoAI",
  ],
  authors: [{ name: profile.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${profile.name} · ${profile.role}`,
    description: profile.tagline,
    siteName: profile.name,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: profile.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} · ${profile.role}`,
    description: profile.tagline,
    images: ["/og.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: siteUrl,
  jobTitle: "Ph.D. Researcher",
  email: `mailto:${profile.email}`,
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: profile.affiliation.institute,
    url: profile.affiliation.instituteUrl,
  },
  knowsAbout: [
    "3D Computer Vision",
    "LiDAR",
    "Deep Learning",
    "Geospatial Data Science",
    "Remote Sensing",
  ],
  sameAs: [
    profile.socials.googleScholar,
    profile.socials.github,
    profile.socials.linkedin,
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${lora.variable}`}
    >
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-accent-700 focus:px-4 focus:py-2 focus:text-white"
          >
            Skip to content
          </a>
          <TopNav />
          <div className="mx-auto flex max-w-6xl flex-col lg:flex-row">
            <Sidebar />
            <div className="min-w-0 flex-1">
              <main id="main-content">{children}</main>
              <Footer />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
