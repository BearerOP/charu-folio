"use client";
import React, { useRef, useState } from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { motion, Variants, AnimatePresence } from "motion/react";
import SplitText from "./split-text";
import { CustomButton } from "./custom-button";
import AvatarComponent from "./avatar-comp";
import ContributionsPage from "./graph";
import { TwitterIcon } from "./ui/twitter-icon";
import { MailCheckIcon } from "./ui/mail-icon";
import { GithubIcon } from "./ui/github-icon";
import { LinkedinIcon } from "./ui/linkedin-icon";
import { ArchiveIcon } from "./archive-icon";
import { VolumeIcon } from "./volume-icon";
import { projects } from "@/lib/resume";
import { SpotifyNowPlaying } from "./spotify-live";
import { Badge } from "@/components/ui/badge";


export function ProjectCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [lastHoveredTime, setLastHoveredTime] = useState<number>(0);
  const HOVER_COOLDOWN = 3000; // 3 seconds

  const toggleSound = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/audio/click.mp3");
      audioRef.current.loop = true;
    }

    const audio = audioRef.current;

    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const hoverSound = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/audio/click_min.mp3");
    }

    const audio = audioRef.current;

    audio.pause(); // Stop any ongoing playback
    audio.currentTime = 0; // Reset to the beginning
    audio.play(); // Play instantly
  };

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
        staggerDirection: 1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 25,
      },
    },
  };

  const techStack = [
    { name: "Premiere Pro", icon: PremiereIcon },
    { name: "DaVinci Resolve", icon: DaVinciIcon },
    { name: "After Effects", icon: AfterEffectsIcon },
  ];


  return (
    <div className="w-full pt-8 space-y-6">
      {/* Main Heading Section */}
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row gap-2">
        <div className="flex flex-col gap-1 md:gap-2 items-start justify-center w-full">
          <SplitText
            className="hover:font-thin transition-all duration-700 text-xl md:text-2xl flex items-start w-fit font-sans font-normal text-zinc-500 dark:text-zinc-400"
            description="Hi! I'm Charuvind Mamodiya"
          />
          <SplitText
            className="text-sm md:text-md w-fit font-semibold text-neutral-800/90 dark:text-neutral-200/70 "
            description="22 • Rajasthan, IN • Video Editor"
          />
          <SplitText
            className="text-sm md:text-lg w-fit font-semibold text-neutral-800/90 dark:text-neutral-200/90 "
            description="For the past 5 years, I've been crafting engaging video content for top-tier brands in fashion, gaming, and hospitality sectors. From initial cut to final color grade in DaVinci Resolve and Premiere Pro, I provide a seamless post-production experience."
          />

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-2 mt-3">
            {techStack.map(({ name, icon: Icon }) => (
              <TooltipItem
                key={name}
                content={name}
                lastHoveredTime={lastHoveredTime}
                setLastHoveredTime={setLastHoveredTime}
                hoverCooldown={HOVER_COOLDOWN}
              >
                <Badge
                  variant="secondary"
                  className="rounded-md border border-dashed border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800/50 text-neutral-700 dark:text-neutral-300 px-2 py-0.5 text-xs hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors gap-1.5 font-medium cursor-default"
                >
                  <div className="relative w-3.5 h-3.5 flex-shrink-0">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  {name}
                </Badge>
              </TooltipItem>
            ))}
          </div>
        </div>

        {/* Avatar and Social Links */}
        <div className="flex items-center justify-center w-fit md:min-w-[16rem]">
          <div className="flex flex-col items-center justify-between gap-4 md:mt-4">
            <AvatarComponent />

            {/* Social Links */}
            <motion.div
              className="flex items-center justify-center gap-2"
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              {[
                {
                  name: "Instagram @maddyfps17",
                  href: "https://www.instagram.com/maddyfps17/",
                  icon: <TwitterIcon size={16} />,
                },
                {
                  name: "Email",
                  href: "mailto:max46878@gmail.com",
                  icon: <MailCheckIcon size={16} />,
                },
              ].map(({ name, href, icon }, idx) => (
                <TooltipItem
                  key={idx}
                  content={name}
                  lastHoveredTime={lastHoveredTime}
                  setLastHoveredTime={setLastHoveredTime}
                  hoverCooldown={HOVER_COOLDOWN}
                >
                  <motion.a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    variants={itemVariants as Variants}
                    whileHover={{ scale: 1.15 }}
                    onHoverStart={hoverSound}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="border p-2 transition-all ease-in duration-75 whitespace-nowrap text-center select-none disabled:shadow-none disabled:opacity-50 disabled:cursor-not-allowed gap-x-1 active:shadow-none text-sm leading-5 rounded-xl text-neutral-700 dark:text-white/80 relative overflow-hidden shadow-[inset_0px_4.35px_8.7px_#ffffff99,inset_0px_-4.35px_4px_#cccccc99,0px_7px_11.7px_#00000040] block"
                  >
                    {icon}
                  </motion.a>
                </TooltipItem>
              ))}
            </motion.div>
          </div>
        </div>
      </div>


      {/* Carousel */}
      <div className="max-w-5xl mx-auto">
        <Carousel items={cards} />
      </div>
    </div>
  );
}

// Tooltip Component
function TooltipItem({
  children,
  content,
  lastHoveredTime,
  setLastHoveredTime,
  hoverCooldown
}: {
  children: React.ReactNode;
  content: string;
  lastHoveredTime: number;
  setLastHoveredTime: (time: number) => void;
  hoverCooldown: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    if (isHovered) {
      const isWarm = Date.now() - lastHoveredTime < hoverCooldown;
      const delay = isWarm ? 0 : 800; // 0ms if warm, 800ms if cold

      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay);

      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
      if (isVisible) {
        setLastHoveredTime(Date.now());
      }
    }
  }, [isHovered, lastHoveredTime, hoverCooldown, isVisible, setLastHoveredTime]);

  return (
    <div
      className="relative flex flex-col items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute -top-10 px-2.5 py-1 bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 text-xs font-medium rounded-lg shadow-xl whitespace-nowrap z-50 border border-zinc-800 dark:border-zinc-200"
          >
            {content}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-900 dark:bg-zinc-100 rotate-45 border-r border-b border-zinc-800 dark:border-zinc-200" />
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </div>
  );
}

// Transform resume project data to match the carousel's expected format
const data = projects.map(project => ({
  category: project.category,
  title: project.title,
  src: project.image,
  githubLink: project.githubUrl,
  liveLink: project.liveUrl,
  videoUrl: (project as any).videoUrl, // Add video URL for modal player
  buttonText: (project as any).buttonText, // Optional custom button text
  buttonUrl: (project as any).buttonUrl,   // Optional custom button URL
}));


// Icons - Video Editing Tools
const PremiereIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 240 234" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="234" rx="42" fill="#00005B" />
    <path d="M97.2 93.6C99.12 93.52 101.04 93.52 102.96 93.6C104.88 93.6 106.72 93.84 108.48 94.32C110.32 94.72 112 95.44 113.52 96.48C115.04 97.44 116.32 98.8 117.36 100.56C118.4 102.24 118.92 104.4 118.92 107.04C118.92 109.6 118.36 111.76 117.24 113.52C116.2 115.28 114.8 116.68 113.04 117.72C111.36 118.76 109.44 119.48 107.28 119.88C105.2 120.28 103.08 120.48 100.92 120.48H97.2V93.6ZM85.2 80.64V160.8H97.2V131.04H101.64C106.08 131.04 110.28 130.52 114.24 129.48C118.28 128.36 121.8 126.6 124.8 124.2C127.88 121.72 130.32 118.56 132.12 114.72C133.92 110.88 134.82 106.24 134.82 100.8C134.82 95.84 133.96 91.6 132.24 88.08C130.6 84.56 128.32 81.64 125.4 79.32C122.56 77 119.16 75.28 115.2 74.16C111.32 73.04 107.12 72.48 102.6 72.48C98.64 72.48 94.52 72.64 90.24 72.96C85.96 73.2 82.08 73.44 78.6 73.68V160.8H90.6V80.64H85.2Z" fill="#9999FF" />
    <path d="M156.36 130.44C156.68 133.24 157.52 135.56 158.88 137.4C160.32 139.16 162.08 140.52 164.16 141.48C166.32 142.36 168.64 142.8 171.12 142.8C173.2 142.8 175.16 142.52 176.88 141.96C178.68 141.32 180.08 140.6 181.08 139.8L183.72 150C182.64 150.96 180.96 151.88 178.68 152.76C176.4 153.64 173.48 154.08 169.92 154.08C165.84 154.08 162.24 153.32 159.12 151.8C156.08 150.2 153.52 148.08 151.44 145.44C149.44 142.72 147.92 139.6 146.88 136.08C145.92 132.48 145.44 128.68 145.44 124.68C145.44 120.76 145.96 117.04 147 113.52C148.04 109.92 149.68 106.76 151.92 104.04C154.24 101.24 157.2 99.04 160.8 97.44C164.48 95.84 168.96 95.04 174.24 95.04C178.32 95.04 181.88 95.76 184.92 97.2C188.04 98.56 190.6 100.48 192.6 102.96C194.68 105.44 196.2 108.36 197.16 111.72C198.2 115 198.72 118.6 198.72 122.52C198.72 124.44 198.64 126.16 198.48 127.68C198.32 129.12 198.12 130.08 197.88 130.56H156.36V130.44ZM186.36 120.6C186.36 119.08 186.16 117.48 185.76 115.8C185.36 114.04 184.68 112.44 183.72 110.88C182.76 109.32 181.44 108.04 179.76 107.04C178.16 105.96 176.08 105.42 173.52 105.42C171.04 105.42 168.92 105.96 167.16 107.04C165.4 108.04 163.96 109.32 162.84 110.88C161.8 112.44 161 114.04 160.44 115.8C159.96 117.48 159.6 119.08 159.36 120.6H186.36Z" fill="#9999FF" />
  </svg>
);

const DaVinciIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 240 234" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="234" rx="42" fill="#1A1A1A" />
    <path d="M120 50L170 100L120 150L70 100L120 50Z" fill="#E53935" />
    <path d="M120 70L150 100L120 130L90 100L120 70Z" fill="#F44336" />
    <text x="120" y="200" fontSize="48" fontWeight="bold" fill="#FFFFFF" textAnchor="middle">DV</text>
  </svg>
);

const AfterEffectsIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 240 234" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="234" rx="42" fill="#00005B" />
    <path d="M97.56 107.82L86.1 142.8H109.02L97.56 107.82ZM111.96 154.8H83.16L77.16 172.8H62.16L90.96 87.6H104.16L132.96 172.8H117.96L111.96 154.8Z" fill="#9999FF" />
    <path d="M147.6 141.48C147.92 144.52 148.84 147.08 150.36 149.16C151.96 151.24 154 152.84 156.48 153.96C159.04 155 161.88 155.52 165 155.52C167.48 155.52 169.84 155.2 172.08 154.56C174.32 153.84 176.16 153.04 177.6 152.16L180.96 164.4C179.52 165.52 177.36 166.6 174.48 167.64C171.6 168.76 168 169.32 163.68 169.32C158.88 169.32 154.64 168.44 150.96 166.68C147.36 164.84 144.32 162.4 141.84 159.36C139.44 156.24 137.6 152.68 136.32 148.68C135.12 144.6 134.52 140.28 134.52 135.72C134.52 131.24 135.16 127 136.44 123C137.8 118.92 139.84 115.36 142.56 112.32C145.36 109.2 148.88 106.76 153.12 105C157.44 103.16 162.56 102.24 168.48 102.24C173.28 102.24 177.36 103.04 180.72 104.64C184.16 106.16 187.04 108.32 189.36 111.12C191.76 113.84 193.56 117.08 194.76 120.84C196.04 124.52 196.68 128.6 196.68 133.08C196.68 135.32 196.56 137.32 196.32 139.08C196.08 140.76 195.84 141.84 195.6 142.32H147.6V141.48ZM182.52 130.56C182.52 128.8 182.28 126.92 181.8 124.92C181.32 122.84 180.48 120.92 179.28 119.16C178.08 117.4 176.44 115.96 174.36 114.84C172.36 113.64 169.8 113.04 166.68 113.04C163.64 113.04 161.04 113.64 158.88 114.84C156.72 115.96 154.96 117.4 153.6 119.16C152.32 120.92 151.36 122.84 150.72 124.92C150.16 126.92 149.8 128.8 149.52 130.56H182.52Z" fill="#9999FF" />
  </svg>
);
