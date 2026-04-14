"use client";

import {
  Clock,
  MapPin,
  Timer,
  Lightbulb,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Utensils,
  Compass,
  Banknote,
  Ticket,
  Phone,
} from "lucide-react";
import { useState } from "react";
import type { ItineraryEntry, CuratedPick, ReservationDetails } from "@/data/itinerary";

function getCategoryTag(category: string) {
  const map: Record<string, string> = {
    Temple: "tag-temple",
    Shrine: "tag-shrine",
    Garden: "tag-garden",
    Restaurant: "tag-restaurant",
    Market: "tag-market",
    Activity: "tag-activity",
    Transit: "tag-transit",
    Hotel: "tag-hotel",
    Cafe: "tag-cafe",
    Bar: "tag-bar",
    "Exploration Zone": "tag-exploration",
    "Free Time": "tag-free-time",
  };
  return map[category] || "tag-activity";
}

function PriceRange({ range }: { range: string }) {
  const count = range.length;
  return (
    <span className="flex items-center gap-0.5 text-sm">
      {[1, 2, 3, 4].map((i) => (
        <span key={i} className={i <= count ? "price-active" : "price-inactive"}>
          ¥
        </span>
      ))}
    </span>
  );
}

function ReservationBadge({ details }: { details: ReservationDetails }) {
  return (
    <div className="reservation-badge mt-3 p-2.5 rounded-lg bg-crimson/5 border border-crimson/20">
      <div className="flex items-center gap-1.5 mb-1">
        <Ticket size={13} className="text-crimson flex-shrink-0" />
        <span className="text-xs font-semibold text-crimson uppercase tracking-wide">
          Reservation
        </span>
      </div>
      <div className="space-y-0.5">
        {details.confirmationNumber && (
          <p className="text-xs text-ink">
            <span className="font-medium">Conf#:</span>{" "}
            <span className="font-mono">{details.confirmationNumber}</span>
          </p>
        )}
        {details.bookedUnder && (
          <p className="text-xs text-ink">
            <span className="font-medium">Under:</span> {details.bookedUnder}
          </p>
        )}
        {details.partySize && (
          <p className="text-xs text-ink">
            <span className="font-medium">Party:</span> {details.partySize}
          </p>
        )}
        {details.phone && (
          <a
            href={`tel:${details.phone}`}
            className="flex items-center gap-1 text-xs text-crimson hover:text-crimson-dark transition-colors"
          >
            <Phone size={11} />
            {details.phone}
          </a>
        )}
        {details.notes && (
          <p className="text-xs text-ink-light mt-1">{details.notes}</p>
        )}
      </div>
    </div>
  );
}

function CuratedPickCard({ pick }: { pick: CuratedPick }) {
  return (
    <div className="flex-shrink-0 w-56 card p-3">
      <h4 className="font-semibold text-sm text-ink">{pick.name}</h4>
      {pick.nameJa && (
        <p className="text-xs text-ink-light mt-0.5">{pick.nameJa}</p>
      )}
      <p className="text-xs text-ink-light mt-1.5 line-clamp-2">
        {pick.description}
      </p>
      {pick.whatToOrder && (
        <div className="flex items-start gap-1 mt-1.5">
          <Utensils size={11} className="text-gold mt-0.5 flex-shrink-0" />
          <p className="text-xs text-gold-light font-medium">
            {pick.whatToOrder}
          </p>
        </div>
      )}
    </div>
  );
}

export function ActivityCard({ entry }: { entry: ItineraryEntry }) {
  const [expanded, setExpanded] = useState(false);

  if (entry.type === "exploration-zone" || entry.isExplorationZone) {
    return <ExplorationZoneCard entry={entry} />;
  }

  if (entry.type === "free-time") {
    return <FreeTimeCard entry={entry} />;
  }

  if (entry.type === "transit") {
    return <TransitCard entry={entry} />;
  }

  return (
    <div className="card overflow-hidden animate-in">
      <div className="p-4">
        {/* Time + Category */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            {entry.time && (
              <span className="flex items-center gap-1 text-sm font-medium text-ink">
                <Clock size={14} className="text-crimson" />
                {entry.time}
                {entry.endTime && ` – ${entry.endTime}`}
              </span>
            )}
          </div>
          <span className={`tag ${getCategoryTag(entry.category)}`}>
            {entry.category}
          </span>
        </div>

        {/* Name */}
        <h3 className="font-serif text-lg font-semibold text-ink leading-snug">
          {entry.name}
        </h3>
        {entry.nameJa && (
          <p className="text-sm text-ink-light mt-0.5">{entry.nameJa}</p>
        )}

        {/* Description */}
        <p className="text-sm text-ink-light mt-2 leading-relaxed">
          {entry.description}
        </p>

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-3 mt-3 text-sm text-ink-light">
          {entry.neighborhood && (
            <span className="flex items-center gap-1">
              <MapPin size={13} className="text-sage" />
              {entry.neighborhood}
            </span>
          )}
          {entry.duration && (
            <span className="flex items-center gap-1">
              <Timer size={13} className="text-sage" />
              {entry.duration}
            </span>
          )}
          {entry.priceRange && <PriceRange range={entry.priceRange} />}
        </div>

        {/* Tips */}
        {entry.tips && (
          <div className="flex items-start gap-1.5 mt-3 p-2.5 rounded-lg bg-washi">
            <Lightbulb size={14} className="text-gold mt-0.5 flex-shrink-0" />
            <p className="text-xs text-ink-light leading-relaxed">
              {entry.tips}
            </p>
          </div>
        )}

        {/* Reservation badge */}
        {entry.reservationDetails && (
          <ReservationBadge details={entry.reservationDetails} />
        )}

        {/* Expandable details */}
        {(entry.address || entry.mapsLink || entry.menuLink) && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 mt-3 text-xs font-medium text-crimson hover:text-crimson-dark transition-colors"
          >
            {expanded ? "Less details" : "More details"}
            {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
        )}

        {expanded && (
          <div className="mt-2 space-y-2 animate-in">
            {entry.address && (
              <a
                href={entry.mapsLink || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(entry.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-ink-light hover:text-crimson transition-colors"
              >
                <MapPin size={12} />
                {entry.address}
                <ExternalLink size={10} />
              </a>
            )}
            {entry.menuLink && (
              <a
                href={entry.menuLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-crimson hover:text-crimson-dark transition-colors"
              >
                <Utensils size={12} />
                View menu
                <ExternalLink size={10} />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function ExplorationZoneCard({ entry }: { entry: ItineraryEntry }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="exploration-zone rounded-xl overflow-hidden animate-in">
      <div className="p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            {entry.time && (
              <span className="flex items-center gap-1 text-sm font-medium text-ink">
                <Clock size={14} className="text-crimson" />
                {entry.time}
                {entry.endTime && ` – ${entry.endTime}`}
              </span>
            )}
          </div>
          <span className="tag tag-exploration">
            <Compass size={11} className="mr-1" />
            Exploration Zone
          </span>
        </div>

        <h3 className="font-serif text-lg font-semibold text-ink leading-snug">
          {entry.name}
        </h3>
        {entry.nameJa && (
          <p className="text-sm text-ink-light mt-0.5">{entry.nameJa}</p>
        )}
        <p className="text-sm text-ink-light mt-2 leading-relaxed">
          {entry.description}
        </p>

        {/* How to approach */}
        {entry.howToApproach && (
          <div className="flex items-start gap-1.5 mt-3 p-2.5 rounded-lg bg-white/60">
            <Compass size={14} className="text-gold mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs font-semibold text-ink mb-0.5">
                How to explore
              </p>
              <p className="text-xs text-ink-light leading-relaxed">
                {entry.howToApproach}
              </p>
            </div>
          </div>
        )}

        {/* Practical notes */}
        {entry.practicalNotes && (
          <div className="flex items-start gap-1.5 mt-2 p-2.5 rounded-lg bg-white/60">
            <Banknote size={14} className="text-sage mt-0.5 flex-shrink-0" />
            <p className="text-xs text-ink-light leading-relaxed">
              {entry.practicalNotes}
            </p>
          </div>
        )}

        {/* Curated picks */}
        {entry.curatedPicks && entry.curatedPicks.length > 0 && (
          <div className="mt-3">
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-1 text-xs font-semibold text-crimson mb-2"
            >
              Curated picks ({entry.curatedPicks.length})
              {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
            {expanded && (
              <div className="flex gap-3 overflow-x-auto day-scroll pb-2">
                {entry.curatedPicks.map((pick, i) => (
                  <CuratedPickCard key={i} pick={pick} />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Reservation badge */}
        {entry.reservationDetails && (
          <ReservationBadge details={entry.reservationDetails} />
        )}

        {/* Location link */}
        {entry.address && (
          <a
            href={entry.mapsLink || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(entry.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 mt-3 text-xs text-ink-light hover:text-crimson transition-colors"
          >
            <MapPin size={12} />
            {entry.neighborhood || entry.address}
            <ExternalLink size={10} />
          </a>
        )}
      </div>
    </div>
  );
}

function FreeTimeCard({ entry }: { entry: ItineraryEntry }) {
  return (
    <div className="card overflow-hidden animate-in border-dashed">
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          {entry.time && (
            <span className="flex items-center gap-1 text-sm font-medium text-ink-light">
              <Clock size={14} className="text-slate" />
              {entry.time}
              {entry.endTime && ` – ${entry.endTime}`}
            </span>
          )}
          <span className="tag tag-free-time">Free Time</span>
        </div>
        <h3 className="font-serif text-base font-medium text-ink-light">
          {entry.name}
        </h3>
        <p className="text-sm text-ink-light/70 mt-1.5 leading-relaxed">
          {entry.description}
        </p>
      </div>
    </div>
  );
}

function TransitCard({ entry }: { entry: ItineraryEntry }) {
  return (
    <div className="card overflow-hidden animate-in bg-gradient-to-r from-indigo-50 to-blue-50 border-indigo-100">
      <div className="p-4">
        <div className="flex items-center justify-between mb-1">
          {entry.time && (
            <span className="flex items-center gap-1 text-sm font-medium text-ink">
              <Clock size={14} className="text-indigo-500" />
              {entry.time}
            </span>
          )}
          <span className="tag tag-transit">Transit</span>
        </div>
        <h3 className="font-semibold text-ink">{entry.name}</h3>
        <p className="text-sm text-ink-light mt-1">{entry.description}</p>
        {entry.duration && (
          <span className="flex items-center gap-1 mt-2 text-xs text-ink-light">
            <Timer size={12} />
            {entry.duration}
          </span>
        )}
        {entry.tips && (
          <div className="flex items-start gap-1.5 mt-2 p-2 rounded-lg bg-white/60">
            <Lightbulb size={13} className="text-gold mt-0.5 flex-shrink-0" />
            <p className="text-xs text-ink-light">{entry.tips}</p>
          </div>
        )}
      </div>
    </div>
  );
}
