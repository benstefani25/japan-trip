import { MapPin, Building2 } from "lucide-react";
import type { ItineraryDay } from "@/data/itinerary";

export function DayHeader({ day }: { day: ItineraryDay }) {
  const dateObj = new Date(day.date + "T00:00:00");
  const monthDay = dateObj.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  return (
    <div className="mb-4">
      {/* Date and City */}
      <div className="flex items-center gap-2 text-sm text-ink-light mb-1">
        <span className="font-medium">
          {day.dayOfWeek}, {monthDay}
        </span>
        <span className="text-stone">·</span>
        <span className="flex items-center gap-1">
          <MapPin size={13} className="text-crimson" />
          {day.city}
        </span>
      </div>

      {/* Title */}
      <h2 className="font-serif text-2xl font-bold text-ink leading-tight">
        {day.title}
      </h2>

      {/* Hotel info */}
      {day.hotel && (
        <div className="mt-3 flex items-start gap-2 p-3 rounded-lg bg-white border border-stone-light">
          <Building2 size={16} className="text-ink-light mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm font-medium text-ink">{day.hotel.name}</p>
            {day.hotel.address && (
              <p className="text-xs text-ink-light mt-0.5">
                {day.hotel.address}
              </p>
            )}
            <div className="flex gap-3 mt-1">
              {day.hotel.checkIn && (
                <span className="text-xs text-sage">
                  Check-in: {day.hotel.checkIn}
                </span>
              )}
              {day.hotel.checkOut && (
                <span className="text-xs text-sage">
                  Check-out: {day.hotel.checkOut}
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
