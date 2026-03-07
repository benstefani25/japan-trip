"use client";

import { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import { itinerary } from "@/data/itinerary";
import { diningGuide } from "@/data/dining";
import { Clock, MapPin, ExternalLink } from "lucide-react";

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);
const Polyline = dynamic(
  () => import("react-leaflet").then((mod) => mod.Polyline),
  { ssr: false }
);

const categoryColors: Record<string, string> = {
  Temple: "#C41E3A",
  Shrine: "#C41E3A",
  Garden: "#16A34A",
  Restaurant: "#B8860B",
  Market: "#E11D48",
  Activity: "#2563EB",
  Transit: "#4F46E5",
  Hotel: "#7C3AED",
  Cafe: "#059669",
  Bar: "#7C3AED",
  "Exploration Zone": "#EA580C",
  "Free Time": "#64748B",
};

function MapContent({
  selectedDay,
  showNearby,
}: {
  selectedDay: number;
  showNearby: boolean;
}) {
  const day = itinerary.find((d) => d.dayNumber === selectedDay);
  if (!day) return null;

  const entries = day.entries.filter((e) => e.lat && e.lng);
  const center: [number, number] =
    entries.length > 0
      ? [entries[0].lat!, entries[0].lng!]
      : day.city === "Kyoto"
        ? [35.0116, 135.7681]
        : [35.6762, 139.7503];

  const routePoints: [number, number][] = entries.map((e) => [e.lat!, e.lng!]);

  // Find nearby dining spots not in the itinerary
  const nearbySpots = showNearby
    ? diningGuide.filter((spot) => {
        if (!spot.lat || !spot.lng) return false;
        if (spot.itineraryDay === selectedDay) return false;
        // Check if within ~2km of any entry
        return entries.some((e) => {
          const dlat = Math.abs(e.lat! - spot.lat!);
          const dlng = Math.abs(e.lng! - spot.lng!);
          return dlat < 0.02 && dlng < 0.02;
        });
      })
    : [];

  return (
    <MapContainer
      center={center}
      zoom={13}
      style={{ height: "100%", width: "100%" }}
      key={`map-${selectedDay}`}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Route line */}
      {routePoints.length > 1 && (
        <Polyline
          positions={routePoints}
          pathOptions={{
            color: "#C41E3A",
            weight: 2,
            opacity: 0.5,
            dashArray: "6, 8",
          }}
        />
      )}

      {/* Activity markers */}
      {entries.map((entry, idx) => (
        <Marker key={idx} position={[entry.lat!, entry.lng!]}>
          <Popup>
            <div className="min-w-[180px]">
              <p className="text-xs font-medium text-gray-500 mb-0.5">
                {entry.time && `${entry.time} · `}
                {entry.category}
              </p>
              <p className="font-semibold text-sm">{entry.name}</p>
              {entry.nameJa && (
                <p className="text-xs text-gray-500">{entry.nameJa}</p>
              )}
              <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                {entry.description}
              </p>
              {entry.mapsLink && (
                <a
                  href={entry.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 mt-1 inline-flex items-center gap-0.5"
                >
                  Open in Google Maps
                </a>
              )}
            </div>
          </Popup>
        </Marker>
      ))}

      {/* Nearby dining spots */}
      {nearbySpots.map((spot) => (
        <Marker
          key={spot.id}
          position={[spot.lat!, spot.lng!]}
          opacity={0.7}
        >
          <Popup>
            <div className="min-w-[180px]">
              <p className="text-xs font-medium text-amber-600 mb-0.5">
                Nearby · {spot.type}
              </p>
              <p className="font-semibold text-sm">{spot.name}</p>
              <p className="text-xs text-gray-600 mt-1">{spot.description}</p>
              {spot.whatToOrder && (
                <p className="text-xs text-amber-700 mt-1">
                  Try: {spot.whatToOrder}
                </p>
              )}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default function MapsPage() {
  const [selectedDay, setSelectedDay] = useState(1);
  const [showNearby, setShowNearby] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const day = itinerary.find((d) => d.dayNumber === selectedDay);

  // Only render map on client
  useState(() => {
    setIsClient(true);
  });

  const entries = useMemo(
    () => day?.entries.filter((e) => e.lat && e.lng) || [],
    [day]
  );

  return (
    <div className="flex flex-col h-[calc(100vh-5rem)] md:h-[calc(100vh-3.5rem)]">
      {/* Header + Day selector */}
      <div className="bg-washi border-b border-stone-light px-4 py-3">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <h1 className="font-serif text-lg font-bold text-ink">
              Trip Map
            </h1>
            <label className="flex items-center gap-1.5 text-xs text-ink-light cursor-pointer">
              <input
                type="checkbox"
                checked={showNearby}
                onChange={(e) => setShowNearby(e.target.checked)}
                className="rounded border-stone accent-crimson"
              />
              Show nearby spots
            </label>
          </div>

          {/* Day selector */}
          <div className="flex gap-1 overflow-x-auto day-scroll">
            {itinerary.map((d) => {
              const isActive = d.dayNumber === selectedDay;
              const dateObj = new Date(d.date + "T00:00:00");
              const label = dateObj.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              });
              return (
                <button
                  key={d.dayNumber}
                  onClick={() => setSelectedDay(d.dayNumber)}
                  className={`flex-shrink-0 px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? "bg-crimson text-white"
                      : "bg-white text-ink-light hover:text-ink border border-stone-light"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="flex-1 relative">
        {isClient && (
          <link
            rel="stylesheet"
            href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          />
        )}
        {isClient ? (
          <MapContent selectedDay={selectedDay} showNearby={showNearby} />
        ) : (
          <div className="flex items-center justify-center h-full bg-stone-light/30">
            <p className="text-ink-light text-sm">Loading map...</p>
          </div>
        )}
      </div>

      {/* Bottom entries list */}
      <div className="bg-white border-t border-stone-light max-h-[30vh] overflow-y-auto">
        <div className="max-w-5xl mx-auto px-4 py-2">
          <p className="text-xs font-medium text-ink-light mb-2">
            {day?.title} · {entries.length} stops
          </p>
          <div className="space-y-1.5">
            {entries.map((entry, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-washi transition-colors"
              >
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0"
                  style={{
                    backgroundColor:
                      categoryColors[entry.category] || "#64748B",
                  }}
                >
                  {idx + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-ink truncate">
                    {entry.name}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-ink-light">
                    {entry.time && (
                      <span className="flex items-center gap-0.5">
                        <Clock size={10} />
                        {entry.time}
                      </span>
                    )}
                    {entry.neighborhood && (
                      <span className="flex items-center gap-0.5">
                        <MapPin size={10} />
                        {entry.neighborhood}
                      </span>
                    )}
                  </div>
                </div>
                {entry.mapsLink && (
                  <a
                    href={entry.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-crimson hover:text-crimson-dark flex-shrink-0"
                  >
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
