import "./globals.css";
import { Manrope, Instrument_Serif } from "next/font/google";
import { ThemeProvider } from "@/components/themeprovider";
import Footer from "@/components/footer";
import { ScrollToTopButton } from "@/components/scroll-to-top-button";
import { Toaster } from "@/components/ui/sonner";
import { ConditionalSplashLayout } from "@/components/conditional-splash-layout";
import { AnimatedLayout } from "@/components/animated-layout";
import { Analytics } from "@vercel/analytics/next"

// metadata imports
import { metadata, viewport } from "./metadata";
export { metadata, viewport };

// Toast provider
import { ToastProvider } from "@/components/toast-provider";

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument-serif",
});

const manrope = Manrope({ subsets: ["latin"] });

// Enhanced JSON-LD structured data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Charuvind Mamodiya",
  url: "https://maddy.live",
  image: "https://maddy.live/images/og-twitter.png",
  sameAs: [
    "https://www.instagram.com/maddyfps17/",
  ],
  jobTitle: "Professional Video Editor",
  worksFor: {
    "@type": "Organization",
    name: "Edolvmedia",
  },
  description: "Professional video editor with 5 years of experience crafting engaging content for fashion, gaming, and hospitality brands. Expert in Premiere Pro, DaVinci Resolve, and color grading.",
  knowsAbout: [
    "Video Editing",
    "Premiere Pro",
    "DaVinci Resolve",
    "After Effects",
    "Color Grading",
    "Motion Graphics",
    "Viral Content Creation",
    "Fashion Content",
    "Gaming Content",
    "Hospitality Content"
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={instrumentSerif.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${manrope.className} antialiased min-h-screen bg-background`}
      >
        <ConditionalSplashLayout>
          <AnimatedLayout>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem={false}
              disableTransitionOnChange
            >
              {children}
              <Analytics />
              <Toaster richColors closeButton />
              {/* <TextSVG text="bearerop" /> */}
              <ScrollToTopButton />
              <Footer />
            </ThemeProvider>
          </AnimatedLayout>
        </ConditionalSplashLayout>
        <ToastProvider />
      </body>
    </html>
  );
}