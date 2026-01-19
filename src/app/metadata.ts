import type { Metadata, Viewport } from "next";

// Viewport configuration
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

// Enhanced metadata configuration
export const metadata: Metadata = {
  metadataBase: new URL("https://maddy.live"),

  title: {
    default: "Charuvind Mamodiya - Professional Video Editor | Premiere Pro, DaVinci Resolve",
    template: "%s | Charuvind Mamodiya",
  },

  description:
    "Professional video editor with 5 years of experience crafting engaging content for fashion, gaming, and hospitality brands. Expert in Premiere Pro, DaVinci Resolve, After Effects, and color grading.",

  keywords: [
    "Charuvind Mamodiya",
    "Video Editor",
    "Professional Video Editor",
    "Premiere Pro",
    "DaVinci Resolve",
    "After Effects",
    "Color Grading",
    "Motion Graphics",
    "Viral Content Creation",
    "Fashion Video Editor",
    "Gaming Video Editor",
    "Hospitality Video Editor",
    "Portfolio",
    "Creative Video Editor",
    "India Video Editor",
    "Content Creator",
  ],

  authors: [
    {
      name: "Charuvind Mamodiya",
      url: "https://maddy.live",
    },
  ],

  creator: "Charuvind Mamodiya",
  publisher: "Charuvind Mamodiya",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://maddy.live",
    siteName: "Charuvind Mamodiya Portfolio",
    title: "Charuvind Mamodiya - Professional Video Editor",
    description:
      "Professional video editor with 5 years of experience in fashion, gaming, and hospitality content. Expert in Premiere Pro, DaVinci Resolve, and color grading.",
    images: [
      {
        url: "https://maddy.live/images/og-twitter.png",
        width: 1200,
        height: 630,
        alt: "Charuvind Mamodiya - Video Editor Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Charuvind Mamodiya - Professional Video Editor",
    description:
      "Professional video editor with 5 years of experience crafting engaging content for fashion, gaming, and hospitality brands.",
    images: ["https://maddy.live/images/og-twitter.png"],
    creator: "@maddyfps17",
    site: "@maddyfps17",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
      },
    ],
  },

  manifest: "/manifest.json",

  verification: {
    google: "xmaUG5cyzz03GizUm6bniYzI2CWZAGswioMrduKg0DE",
  },

  alternates: {
    canonical: "https://maddy.live",
  },

  category: "creative",

  other: {
    "msapplication-TileColor": "#ffffff",
  },
};