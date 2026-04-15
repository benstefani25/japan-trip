"use client";

import { useState } from "react";
import { itinerary } from "@/data/itinerary";
import { podcastEpisodes } from "@/data/podcasts";
import { DaySelector } from "@/components/DaySelector";
import { DayHeader } from "@/components/DayHeader";
import { ActivityCard } from "@/components/ActivityCard";
import { PodcastPlayer } from "@/components/PodcastPlayer";

export default function ItineraryPage() {
  const [selectedDay, setSelectedDay] = useState(1);
  const day = itinerary.find((d) => d.dayNumber === selectedDay) || itinerary[0];
  const podcast = podcastEpisodes.find((ep) => ep.dayNumber === selectedDay);

  return (
    <div>
      {/* Site header */}
      <div className="px-4 pt-4 pb-2 md:hidden">
        <h1 className="font-serif text-xl font-bold text-ink tracking-wide">
          Japan 2026
        </h1>
        <p className="text-xs text-ink-light">
          April 24 – May 3 · Tokyo, Kyoto &amp; Tokyo
        </p>
      </div>

      {/* Day selector strip */}
      <DaySelector
        days={itinerary}
        selectedDay={selectedDay}
        onSelectDay={setSelectedDay}
      />

      {/* Day content */}
      <div className="max-w-3xl mx-auto px-4 py-6">
        <DayHeader day={day} />

        {/* Podcast player */}
        {podcast && <PodcastPlayer episode={podcast} />}

        {/* Timeline */}
        <div className="space-y-4 relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-stone hidden sm:block" />

          {day.entries.map((entry, index) => (
            <div key={index} className="relative">
              {/* Timeline dot */}
              <div className="absolute left-[15px] top-5 w-[9px] h-[9px] rounded-full border-2 border-crimson bg-white z-10 hidden sm:block" />

              <div className="sm:pl-10">
                <ActivityCard entry={entry} />
              </div>
            </div>
          ))}
        </div>

        {/* Day navigation */}
        <div className="flex justify-between items-center mt-8 pt-4 border-t border-stone-light">
          <button
            onClick={() => setSelectedDay(Math.max(1, selectedDay - 1))}
            disabled={selectedDay === 1}
            className="text-sm font-medium text-crimson disabled:text-stone disabled:cursor-not-allowed hover:text-crimson-dark transition-colors"
          >
            &larr; Previous Day
          </button>
          <span className="text-xs text-ink-light">
            Day {day.dayNumber} of {itinerary[itinerary.length - 1].dayNumber}
          </span>
          <button
            onClick={() =>
              setSelectedDay(Math.min(itinerary[itinerary.length - 1].dayNumber, selectedDay + 1))
            }
            disabled={selectedDay === itinerary[itinerary.length - 1].dayNumber}
            className="text-sm font-medium text-crimson disabled:text-stone disabled:cursor-not-allowed hover:text-crimson-dark transition-colors"
          >
            Next Day &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}
