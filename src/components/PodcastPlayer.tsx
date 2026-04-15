"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import {
  Play,
  Pause,
  Headphones,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import type { PodcastEpisode } from "@/data/podcasts";

function formatTime(seconds: number): string {
  if (!isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function PodcastPlayer({ episode }: { episode: PodcastEpisode }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isTranscriptOpen, setIsTranscriptOpen] = useState(false);
  const [audioError, setAudioError] = useState(false);

  useEffect(() => {
    // Reset state when episode changes
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);
    setAudioError(false);
    setIsTranscriptOpen(false);
  }, [episode.dayNumber]);

  const handleTimeUpdate = useCallback(() => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  }, []);

  const handleLoadedMetadata = useCallback(() => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  }, []);

  const handleEnded = useCallback(() => {
    setIsPlaying(false);
  }, []);

  const handleError = useCallback(() => {
    setAudioError(true);
    setIsPlaying(false);
  }, []);

  const togglePlay = () => {
    if (!audioRef.current || audioError) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(() => {
        setAudioError(true);
        setIsPlaying(false);
      });
      setIsPlaying(true);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="podcast-player card overflow-hidden animate-in mb-4">
      <audio
        ref={audioRef}
        src={episode.audioSrc}
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
        onError={handleError}
      />

      <div className="p-4">
        {/* Header row */}
        <div className="flex items-center gap-2 mb-2">
          <Headphones size={14} className="text-crimson" />
          <span className="text-xs font-semibold text-crimson uppercase tracking-wide">
            Morning Podcast
          </span>
          <span className="text-xs text-ink-light ml-auto">
            {episode.duration}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-base font-semibold text-ink leading-snug">
          {episode.title}
        </h3>
        <p className="text-xs text-ink-light mt-1">{episode.description}</p>

        {/* Player controls */}
        <div className="flex items-center gap-3 mt-3">
          {/* Play/Pause button */}
          <button
            onClick={togglePlay}
            disabled={audioError}
            className="podcast-play-btn flex items-center justify-center w-10 h-10 rounded-full bg-crimson text-white hover:bg-crimson-dark disabled:bg-stone disabled:cursor-not-allowed transition-colors flex-shrink-0"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
          </button>

          {/* Progress bar + time */}
          <div className="flex-1 min-w-0">
            <div className="podcast-progress-wrapper">
              <input
                type="range"
                min={0}
                max={duration || 0}
                step={0.1}
                value={currentTime}
                onChange={handleSeek}
                disabled={audioError}
                className="podcast-range w-full"
                style={{ "--progress": `${progress}%` } as React.CSSProperties}
              />
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-[10px] text-ink-light font-mono">
                {formatTime(currentTime)}
              </span>
              <span className="text-[10px] text-ink-light font-mono">
                {formatTime(duration)}
              </span>
            </div>
          </div>
        </div>

        {/* Audio coming soon notice */}
        {audioError && (
          <p className="text-xs text-stone mt-2 italic">
            Audio coming soon — read the transcript below!
          </p>
        )}

        {/* Transcript toggle */}
        <button
          onClick={() => setIsTranscriptOpen(!isTranscriptOpen)}
          className="flex items-center gap-1 mt-3 text-xs font-medium text-crimson hover:text-crimson-dark transition-colors"
        >
          {isTranscriptOpen ? "Hide transcript" : "Read transcript"}
          {isTranscriptOpen ? (
            <ChevronUp size={14} />
          ) : (
            <ChevronDown size={14} />
          )}
        </button>

        {/* Transcript content */}
        {isTranscriptOpen && (
          <div className="podcast-transcript mt-3 p-4 rounded-lg bg-washi animate-in">
            {episode.transcript.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-sm text-ink leading-relaxed mb-3 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
