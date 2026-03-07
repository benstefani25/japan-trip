"use client";

import { useState } from "react";
import { reservations } from "@/data/reservations";
import {
  Plane,
  Building2,
  Train,
  Ticket,
  UtensilsCrossed,
  Copy,
  Check,
  AlertCircle,
  Calendar,
  Users,
  MapPin,
} from "lucide-react";

const typeIcons: Record<string, typeof Plane> = {
  flight: Plane,
  hotel: Building2,
  train: Train,
  activity: Ticket,
  restaurant: UtensilsCrossed,
};

const typeColors: Record<string, string> = {
  flight: "bg-blue-100 text-blue-700",
  hotel: "bg-purple-100 text-purple-700",
  train: "bg-indigo-100 text-indigo-700",
  activity: "bg-amber-100 text-amber-700",
  restaurant: "bg-rose-100 text-rose-700",
};

const statusColors: Record<string, string> = {
  confirmed: "bg-green-100 text-green-800",
  pending: "bg-yellow-100 text-yellow-800",
  needed: "bg-red-100 text-red-800",
};

const statusLabels: Record<string, string> = {
  confirmed: "Confirmed",
  pending: "Pending",
  needed: "Booking Needed",
};

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-1 text-xs text-crimson hover:text-crimson-dark transition-colors"
      title="Copy confirmation number"
    >
      {copied ? (
        <>
          <Check size={12} />
          Copied
        </>
      ) : (
        <>
          <Copy size={12} />
          Copy
        </>
      )}
    </button>
  );
}

export default function ReservationsPage() {
  const [filterType, setFilterType] = useState("all");

  const filtered =
    filterType === "all"
      ? reservations
      : reservations.filter((r) => r.type === filterType);

  const confirmed = reservations.filter((r) => r.status === "confirmed").length;
  const needed = reservations.filter((r) => r.status === "needed").length;

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="font-serif text-2xl font-bold text-ink">
          Reservations &amp; Bookings
        </h1>
        <p className="text-sm text-ink-light mt-1">
          {confirmed} confirmed · {needed} still needed
        </p>
      </div>

      {/* Quick filters */}
      <div className="flex gap-1.5 overflow-x-auto day-scroll mb-6">
        {[
          { key: "all", label: "All" },
          { key: "flight", label: "Flights" },
          { key: "hotel", label: "Hotels" },
          { key: "train", label: "Trains" },
          { key: "restaurant", label: "Restaurants" },
          { key: "activity", label: "Activities" },
        ].map((f) => (
          <button
            key={f.key}
            onClick={() => setFilterType(f.key)}
            className={`filter-chip ${filterType === f.key ? "active" : ""}`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="space-y-3">
        {filtered.map((res) => {
          const Icon = typeIcons[res.type] || Ticket;
          const dateObj = new Date(res.date + "T00:00:00");
          const formattedDate = dateObj.toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
          });

          return (
            <div key={res.id} className="card overflow-hidden animate-in">
              <div className="p-4">
                {/* Type + Status */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-flex items-center justify-center w-8 h-8 rounded-lg ${typeColors[res.type]}`}
                    >
                      <Icon size={16} />
                    </span>
                    <span className="text-xs font-medium text-ink-light uppercase tracking-wider">
                      {res.type}
                    </span>
                  </div>
                  <span
                    className={`text-[10px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 ${statusColors[res.status]}`}
                  >
                    {res.status === "needed" && <AlertCircle size={10} />}
                    {statusLabels[res.status]}
                  </span>
                </div>

                {/* Name */}
                <h3 className="font-serif text-lg font-semibold text-ink leading-snug">
                  {res.name}
                </h3>

                {/* Date + Time */}
                <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-ink-light">
                  <span className="flex items-center gap-1">
                    <Calendar size={13} className="text-sage" />
                    {formattedDate}
                    {res.time && ` · ${res.time}`}
                  </span>
                  {res.partySize && (
                    <span className="flex items-center gap-1">
                      <Users size={13} className="text-sage" />
                      {res.partySize} guests
                    </span>
                  )}
                </div>

                {/* Confirmation number */}
                {res.confirmationNumber && (
                  <div className="mt-3 flex items-center gap-2 p-2.5 rounded-lg bg-washi">
                    <div className="flex-1">
                      <p className="text-[10px] font-medium text-ink-light uppercase tracking-wider">
                        Confirmation
                      </p>
                      <p className="text-base font-mono font-bold text-ink tracking-wider">
                        {res.confirmationNumber}
                      </p>
                    </div>
                    <CopyButton text={res.confirmationNumber} />
                  </div>
                )}

                {/* Notes */}
                {res.notes && (
                  <p className="text-xs text-ink-light mt-3 leading-relaxed">
                    {res.notes}
                  </p>
                )}

                {/* Address */}
                {res.address && (
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(res.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 mt-2 text-xs text-crimson hover:text-crimson-dark transition-colors"
                  >
                    <MapPin size={12} />
                    {res.address}
                  </a>
                )}

                {/* Day link */}
                <div className="mt-3 pt-2 border-t border-stone-light">
                  <span className="text-xs text-ink-light">
                    Day {res.itineraryDay} of itinerary
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
