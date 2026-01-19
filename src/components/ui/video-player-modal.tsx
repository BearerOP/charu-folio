"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Play, Pause, Volume2, VolumeX, Maximize, Minimize } from "lucide-react";

interface VideoPlayerModalProps {
    isOpen: boolean;
    onClose: () => void;
    videoUrl: string;
    title: string;
    category: string;
}

export function VideoPlayerModal({
    isOpen,
    onClose,
    videoUrl,
    title,
    category,
}: VideoPlayerModalProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [showControls, setShowControls] = useState(true);
    const [canClose, setCanClose] = useState(false);
    const controlsTimeoutRef = useRef<NodeJS.Timeout>();

    // Handle escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape" && canClose) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
            document.body.style.overflow = "hidden";

            // Allow closing after a short delay to prevent immediate close
            const timer = setTimeout(() => setCanClose(true), 150);

            return () => {
                clearTimeout(timer);
                document.removeEventListener("keydown", handleEscape);
                document.body.style.overflow = "unset";
                setCanClose(false);
            };
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, onClose, canClose]);

    // Auto-hide controls
    useEffect(() => {
        if (showControls && isPlaying) {
            controlsTimeoutRef.current = setTimeout(() => {
                setShowControls(false);
            }, 3000);
        }

        return () => {
            if (controlsTimeoutRef.current) {
                clearTimeout(controlsTimeoutRef.current);
            }
        };
    }, [showControls, isPlaying]);

    // Video event handlers
    const handlePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleMuteToggle = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const handleFullscreen = () => {
        if (!document.fullscreenElement) {
            videoRef.current?.requestFullscreen();
            setIsFullscreen(true);
        } else {
            document.exitFullscreen();
            setIsFullscreen(false);
        }
    };

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            setCurrentTime(videoRef.current.currentTime);
        }
    };

    const handleLoadedMetadata = () => {
        if (videoRef.current) {
            setDuration(videoRef.current.duration);
        }
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        const time = parseFloat(e.target.value);
        if (videoRef.current) {
            videoRef.current.currentTime = time;
            setCurrentTime(time);
        }
    };

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, "0")}`;
    };

    const handleMouseMove = () => {
        setShowControls(true);
        if (controlsTimeoutRef.current) {
            clearTimeout(controlsTimeoutRef.current);
        }
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm"
                    onClick={(e) => {
                        if (canClose) {
                            onClose();
                        }
                    }}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-6xl mx-4"
                        onClick={(e) => e.stopPropagation()}
                        onMouseMove={handleMouseMove}
                    >
                        {/* Close button */}
                        <button
                            onClick={onClose}
                            className="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors z-10"
                        >
                            <X size={32} />
                        </button>

                        {/* Video title */}
                        <div className="absolute -top-12 left-0 text-white z-10">
                            <h2 className="text-xl font-bold">{title}</h2>
                            <p className="text-sm text-white/60">{category}</p>
                        </div>

                        {/* Video container */}
                        <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl">
                            <video
                                ref={videoRef}
                                src={videoUrl}
                                className="w-full h-auto max-h-[80vh] object-contain"
                                onTimeUpdate={handleTimeUpdate}
                                onLoadedMetadata={handleLoadedMetadata}
                                onClick={handlePlayPause}
                            />

                            {/* Custom controls overlay */}
                            <AnimatePresence>
                                {showControls && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4"
                                    >
                                        {/* Progress bar */}
                                        <input
                                            type="range"
                                            min="0"
                                            max={duration || 0}
                                            value={currentTime}
                                            onChange={handleSeek}
                                            className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer mb-3 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-0"
                                        />

                                        {/* Controls */}
                                        <div className="flex items-center justify-between text-white">
                                            <div className="flex items-center gap-4">
                                                <button
                                                    onClick={handlePlayPause}
                                                    className="hover:scale-110 transition-transform"
                                                >
                                                    {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                                                </button>

                                                <button
                                                    onClick={handleMuteToggle}
                                                    className="hover:scale-110 transition-transform"
                                                >
                                                    {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                                                </button>

                                                <span className="text-sm">
                                                    {formatTime(currentTime)} / {formatTime(duration)}
                                                </span>
                                            </div>

                                            <button
                                                onClick={handleFullscreen}
                                                className="hover:scale-110 transition-transform"
                                            >
                                                {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
                                            </button>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Play button overlay (when paused) */}
                            {!isPlaying && (
                                <motion.button
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.8, opacity: 0 }}
                                    onClick={handlePlayPause}
                                    className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors"
                                >
                                    <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center hover:scale-110 transition-transform">
                                        <Play size={32} className="text-black ml-1" fill="black" />
                                    </div>
                                </motion.button>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
