"use client";

import type { ItineraryDay } from "@/data/itinerary";

interface DaySelectorProps {
  days: ItineraryDay[];
  selectedDay: number;
  onSelectDay: (dayNumber: number) => void;
}

export function DaySelector({ days, selectedDay, onSelectDay }: DaySelectorProps) {
  return (
    <div className="sticky top-0 md:top-14 z-40 bg-washi/95 backdrop-blur-sm border-b border-stone-light">
      <div className="max-w-3xl mx-auto">
        <div className="flex gap-1 overflow-x-auto day-scroll px-4 py-2">
          {days.map((day) => {
            const isActive = day.dayNumber === selectedDay;
            const dateObj = new Date(day.date + "T00:00:00");
            const monthDay = dateObj.toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            });
            const weekday = dateObj.toLocaleDateString("en-US", {
              weekday: "short",
            });

            return (
              <button
                key={day.dayNumber}
                onClick={() => onSelectDay(day.dayNumber)}
                className={`flex flex-col items-center px-3 py-1.5 rounded-lg transition-all flex-shrink-0 min-w-[60px] ${
                  isActive
                    ? "bg-crimson text-white shadow-sm"
                    : "hover:bg-stone-light text-ink-light"
                }`}
              >
                <span className="text-[10px] font-medium uppercase tracking-wider opacity-80">
                  {weekday}
                </span>
                <span className="text-sm font-semibold">{monthDay}</span>
                <span className="text-[10px] opacity-70">Day {day.dayNumber}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
