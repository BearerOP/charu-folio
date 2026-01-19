import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Charuvind Mamodiya - Video Editor Portfolio",
    short_name: "Charuvind's Portfolio",
    description:
      "Professional video editor with 5 years of experience in fashion, gaming, and hospitality content creation. Expert in Premiere Pro, DaVinci Resolve, and color grading.",
    start_url: "/",
    id: "/",
    scope: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#6b9ff3",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
    categories: ["portfolio", "video-editing", "creative"],
    orientation: "any",
    dir: "ltr",
    lang: "en-US",
  };
}