"use client";

import { useState, useMemo, useEffect } from "react";
import { diningGuide, type DiningSpot } from "@/data/dining";
import {
  MapPin,
  ExternalLink,
  Utensils,
  Search,
  X,
  SlidersHorizontal,
  Plus,
  Trash2,
} from "lucide-react";

const typeFilters = [
  "All",
  "Restaurant",
  "Cafe",
  "Bar",
  "Street Food",
  "Dessert",
  "Bakery",
];

const cuisineFilters = [
  "Sushi / Omakase",
  "Ramen",
  "Wagyu / Yakiniku",
  "Tempura",
  "Udon / Soba",
  "Unagi",
  "Gyoza",
  "Tonkatsu",
  "Kaiseki",
  "Izakaya / Small Plates",
  "Western / Fusion",
  "Coffee / Kissaten",
  "Cocktails / Whisky",
  "Pizza / Italian",
];

const cityFilters = ["All", "Tokyo", "Kyoto"];

function PriceRange({ range }: { range: string }) {
  const count = range.length;
  return (
    <span className="flex items-center gap-0.5 text-sm">
      {[1, 2, 3, 4].map((i) => (
        <span
          key={i}
          className={i <= count ? "text-gold" : "text-stone"}
        >
          ¥
        </span>
      ))}
    </span>
  );
}

function ReservationBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    Reserved: "bg-green-100 text-green-800",
    "Reservation Recommended": "bg-amber-100 text-amber-800",
    "Walk-in OK": "bg-blue-100 text-blue-800",
    "First-Come First-Served": "bg-purple-100 text-purple-800",
  };
  return (
    <span
      className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${colors[status] || "bg-gray-100 text-gray-700"}`}
    >
      {status}
    </span>
  );
}

const CUSTOM_SPOTS_KEY = "japan-trip-custom-spots";

function loadCustomSpots(): DiningSpot[] {
  if (typeof window === "undefined") return [];
  try {
    const stored = localStorage.getItem(CUSTOM_SPOTS_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function saveCustomSpots(spots: DiningSpot[]) {
  localStorage.setItem(CUSTOM_SPOTS_KEY, JSON.stringify(spots));
}

interface AddSpotFormProps {
  onAdd: (spot: DiningSpot) => void;
  onClose: () => void;
}

function AddSpotForm({ onAdd, onClose }: AddSpotFormProps) {
  const [name, setName] = useState("");
  const [nameJa, setNameJa] = useState("");
  const [type, setType] = useState<DiningSpot["type"]>("restaurant");
  const [cuisine, setCuisine] = useState("");
  const [city, setCity] = useState<"Tokyo" | "Kyoto">("Tokyo");
  const [neighborhood, setNeighborhood] = useState("");
  const [description, setDescription] = useState("");
  const [whatToOrder, setWhatToOrder] = useState("");
  const [priceRange, setPriceRange] = useState<DiningSpot["priceRange"]>("¥¥");
  const [reservationStatus, setReservationStatus] =
    useState<DiningSpot["reservationStatus"]>("Walk-in OK");
  const [mapsLink, setMapsLink] = useState("");
  const [website, setWebsite] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !neighborhood) return;

    const spot: DiningSpot = {
      id: `custom-${Date.now()}`,
      name,
      nameJa: nameJa || undefined,
      type,
      cuisineStyle: cuisine
        .split(",")
        .map((c) => c.trim())
        .filter(Boolean),
      city,
      neighborhood,
      description: description || `A ${type} in ${neighborhood}, ${city}.`,
      whatToOrder: whatToOrder || undefined,
      priceRange,
      reservationStatus,
      mapsLink: mapsLink || undefined,
      website: website || undefined,
      tags: [
        type,
        city.toLowerCase(),
        neighborhood.toLowerCase(),
        ...cuisine
          .split(",")
          .map((c) => c.trim().toLowerCase())
          .filter(Boolean),
      ],
    };

    onAdd(spot);
  };

  return (
    <div className="card p-4 mb-4 animate-in border-2 border-crimson/20">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-serif text-lg font-semibold text-ink">
          Add New Spot
        </h3>
        <button
          onClick={onClose}
          className="text-ink-light hover:text-ink transition-colors"
        >
          <X size={18} />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        {/* Row 1: Name + Japanese name */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-xs font-medium text-ink-light block mb-1">
              Name *
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Sushi Saito"
              required
              className="w-full px-3 py-2 rounded-lg bg-white border border-stone-light text-sm text-ink placeholder:text-slate focus:outline-none focus:ring-2 focus:ring-crimson/20 focus:border-crimson"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-ink-light block mb-1">
              Japanese Name
            </label>
            <input
              type="text"
              value={nameJa}
              onChange={(e) => setNameJa(e.target.value)}
              placeholder="e.g. 鮨さいとう"
              className="w-full px-3 py-2 rounded-lg bg-white border border-stone-light text-sm text-ink placeholder:text-slate focus:outline-none focus:ring-2 focus:ring-crimson/20 focus:border-crimson"
            />
          </div>
        </div>

        {/* Row 2: Type + City + Neighborhood */}
        <div className="grid grid-cols-3 gap-3">
          <div>
            <label className="text-xs font-medium text-ink-light block mb-1">
              Type *
            </label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value as DiningSpot["type"])}
              className="w-full px-3 py-2 rounded-lg bg-white border border-stone-light text-sm text-ink focus:outline-none focus:ring-2 focus:ring-crimson/20"
            >
              <option value="restaurant">Restaurant</option>
              <option value="cafe">Cafe</option>
              <option value="bar">Bar</option>
              <option value="street-food">Street Food</option>
              <option value="dessert">Dessert</option>
              <option value="bakery">Bakery</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-medium text-ink-light block mb-1">
              City *
            </label>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value as "Tokyo" | "Kyoto")}
              className="w-full px-3 py-2 rounded-lg bg-white border border-stone-light text-sm text-ink focus:outline-none focus:ring-2 focus:ring-crimson/20"
            >
              <option value="Tokyo">Tokyo</option>
              <option value="Kyoto">Kyoto</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-medium text-ink-light block mb-1">
              Neighborhood *
            </label>
            <input
              type="text"
              value={neighborhood}
              onChange={(e) => setNeighborhood(e.target.value)}
              placeholder="e.g. Ginza"
              required
              className="w-full px-3 py-2 rounded-lg bg-white border border-stone-light text-sm text-ink placeholder:text-slate focus:outline-none focus:ring-2 focus:ring-crimson/20 focus:border-crimson"
            />
          </div>
        </div>

        {/* Row 3: Cuisine tags */}
        <div>
          <label className="text-xs font-medium text-ink-light block mb-1">
            Cuisine / Style (comma-separated)
          </label>
          <input
            type="text"
            value={cuisine}
            onChange={(e) => setCuisine(e.target.value)}
            placeholder="e.g. Sushi, Omakase"
            className="w-full px-3 py-2 rounded-lg bg-white border border-stone-light text-sm text-ink placeholder:text-slate focus:outline-none focus:ring-2 focus:ring-crimson/20 focus:border-crimson"
          />
        </div>

        {/* Row 4: Description */}
        <div>
          <label className="text-xs font-medium text-ink-light block mb-1">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="What makes this place special?"
            rows={2}
            className="w-full px-3 py-2 rounded-lg bg-white border border-stone-light text-sm text-ink placeholder:text-slate focus:outline-none focus:ring-2 focus:ring-crimson/20 focus:border-crimson resize-none"
          />
        </div>

        {/* Row 5: What to order */}
        <div>
          <label className="text-xs font-medium text-ink-light block mb-1">
            What to Order
          </label>
          <input
            type="text"
            value={whatToOrder}
            onChange={(e) => setWhatToOrder(e.target.value)}
            placeholder="e.g. The omakase lunch set"
            className="w-full px-3 py-2 rounded-lg bg-white border border-stone-light text-sm text-ink placeholder:text-slate focus:outline-none focus:ring-2 focus:ring-crimson/20 focus:border-crimson"
          />
        </div>

        {/* Row 6: Price + Reservation + Links */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-xs font-medium text-ink-light block mb-1">
              Price Range
            </label>
            <select
              value={priceRange}
              onChange={(e) =>
                setPriceRange(e.target.value as DiningSpot["priceRange"])
              }
              className="w-full px-3 py-2 rounded-lg bg-white border border-stone-light text-sm text-ink focus:outline-none focus:ring-2 focus:ring-crimson/20"
            >
              <option value="¥">¥ (Budget)</option>
              <option value="¥¥">¥¥ (Moderate)</option>
              <option value="¥¥¥">¥¥¥ (Upscale)</option>
              <option value="¥¥¥¥">¥¥¥¥ (Splurge)</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-medium text-ink-light block mb-1">
              Reservation
            </label>
            <select
              value={reservationStatus}
              onChange={(e) =>
                setReservationStatus(
                  e.target.value as DiningSpot["reservationStatus"]
                )
              }
              className="w-full px-3 py-2 rounded-lg bg-white border border-stone-light text-sm text-ink focus:outline-none focus:ring-2 focus:ring-crimson/20"
            >
              <option value="Walk-in OK">Walk-in OK</option>
              <option value="Reservation Recommended">
                Reservation Recommended
              </option>
              <option value="Reserved">Reserved</option>
              <option value="First-Come First-Served">
                First-Come First-Served
              </option>
            </select>
          </div>
        </div>

        {/* Row 7: Links */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-xs font-medium text-ink-light block mb-1">
              Google Maps Link
            </label>
            <input
              type="url"
              value={mapsLink}
              onChange={(e) => setMapsLink(e.target.value)}
              placeholder="https://maps.google.com/..."
              className="w-full px-3 py-2 rounded-lg bg-white border border-stone-light text-sm text-ink placeholder:text-slate focus:outline-none focus:ring-2 focus:ring-crimson/20 focus:border-crimson"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-ink-light block mb-1">
              Website
            </label>
            <input
              type="url"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              placeholder="https://..."
              className="w-full px-3 py-2 rounded-lg bg-white border border-stone-light text-sm text-ink placeholder:text-slate focus:outline-none focus:ring-2 focus:ring-crimson/20 focus:border-crimson"
            />
          </div>
        </div>

        {/* Submit */}
        <div className="flex gap-2 pt-1">
          <button
            type="submit"
            className="flex-1 py-2.5 rounded-lg bg-crimson text-white text-sm font-medium hover:bg-crimson-dark transition-colors"
          >
            Add Spot
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2.5 rounded-lg border border-stone-light text-sm text-ink-light hover:text-ink transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default function FoodPage() {
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedCuisines, setSelectedCuisines] = useState<string[]>([]);
  const [selectedCity, setSelectedCity] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState("default");
  const [showAddForm, setShowAddForm] = useState(false);
  const [customSpots, setCustomSpots] = useState<DiningSpot[]>([]);

  // Load custom spots from localStorage on mount
  useEffect(() => {
    setCustomSpots(loadCustomSpots());
  }, []);

  const allSpots = useMemo(
    () => [...diningGuide, ...customSpots],
    [customSpots]
  );

  const handleAddSpot = (spot: DiningSpot) => {
    const updated = [...customSpots, spot];
    setCustomSpots(updated);
    saveCustomSpots(updated);
    setShowAddForm(false);
  };

  const handleDeleteCustomSpot = (id: string) => {
    const updated = customSpots.filter((s) => s.id !== id);
    setCustomSpots(updated);
    saveCustomSpots(updated);
  };

  const toggleCuisine = (cuisine: string) => {
    setSelectedCuisines((prev) =>
      prev.includes(cuisine)
        ? prev.filter((c) => c !== cuisine)
        : [...prev, cuisine]
    );
  };

  const filtered = useMemo(() => {
    let results = [...allSpots];

    // Search
    if (search) {
      const q = search.toLowerCase();
      results = results.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.nameJa?.toLowerCase().includes(q) ||
          s.neighborhood.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q) ||
          s.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    // Type filter
    if (selectedType !== "All") {
      const typeMap: Record<string, string> = {
        Restaurant: "restaurant",
        Cafe: "cafe",
        Bar: "bar",
        "Street Food": "street-food",
        Dessert: "dessert",
        Bakery: "bakery",
      };
      results = results.filter((s) => s.type === typeMap[selectedType]);
    }

    // Cuisine filter — match any term from the filter label against cuisineStyle
    if (selectedCuisines.length > 0) {
      results = results.filter((s) =>
        selectedCuisines.some((filterLabel) => {
          const terms = filterLabel.split(" / ").map((t) => t.trim());
          return terms.some((term) =>
            s.cuisineStyle.some(
              (style) =>
                style.toLowerCase().includes(term.toLowerCase()) ||
                term.toLowerCase().includes(style.toLowerCase())
            )
          );
        })
      );
    }

    // City filter
    if (selectedCity !== "All") {
      results = results.filter((s) => s.city === selectedCity);
    }

    // Sort
    if (sortBy === "price-low") {
      results.sort((a, b) => a.priceRange.length - b.priceRange.length);
    } else if (sortBy === "price-high") {
      results.sort((a, b) => b.priceRange.length - a.priceRange.length);
    } else if (sortBy === "neighborhood") {
      results.sort((a, b) => a.neighborhood.localeCompare(b.neighborhood));
    }

    return results;
  }, [search, selectedType, selectedCuisines, selectedCity, sortBy, allSpots]);

  const activeFilterCount =
    (selectedType !== "All" ? 1 : 0) +
    selectedCuisines.length +
    (selectedCity !== "All" ? 1 : 0);

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-serif text-2xl font-bold text-ink">
            Food &amp; Drinks Guide
          </h1>
          <p className="text-sm text-ink-light mt-1">
            {allSpots.length} curated spots across Tokyo &amp; Kyoto
            {customSpots.length > 0 && (
              <span className="text-crimson"> · {customSpots.length} custom</span>
            )}
          </p>
        </div>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
            showAddForm
              ? "bg-crimson text-white"
              : "bg-white border border-stone-light text-ink-light hover:text-crimson hover:border-crimson"
          }`}
        >
          <Plus size={16} />
          Add Spot
        </button>
      </div>

      {/* Add form */}
      {showAddForm && (
        <AddSpotForm onAdd={handleAddSpot} onClose={() => setShowAddForm(false)} />
      )}

      {/* Search */}
      <div className="relative mb-4">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-light"
        />
        <input
          type="text"
          placeholder="Search restaurants, cuisine, neighborhood..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-9 pr-9 py-2.5 rounded-xl bg-white border border-stone-light text-sm text-ink placeholder:text-slate focus:outline-none focus:ring-2 focus:ring-crimson/20 focus:border-crimson transition-all"
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-light hover:text-ink"
          >
            <X size={16} />
          </button>
        )}
      </div>

      {/* Filter toggle + quick filters */}
      <div className="flex items-center gap-2 mb-3">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={`filter-chip ${showFilters || activeFilterCount > 0 ? "active" : ""}`}
        >
          <SlidersHorizontal size={14} />
          Filters
          {activeFilterCount > 0 && (
            <span className="ml-1 bg-white/20 text-[10px] rounded-full px-1.5">
              {activeFilterCount}
            </span>
          )}
        </button>

        <div className="flex gap-1.5 overflow-x-auto day-scroll">
          {typeFilters.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`filter-chip ${selectedType === type ? "active" : ""}`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Expanded filters */}
      {showFilters && (
        <div className="card p-4 mb-4 animate-in">
          {/* City */}
          <div className="mb-3">
            <h3 className="text-xs font-semibold text-ink mb-2 uppercase tracking-wider">
              City
            </h3>
            <div className="flex gap-1.5">
              {cityFilters.map((city) => (
                <button
                  key={city}
                  onClick={() => setSelectedCity(city)}
                  className={`filter-chip ${selectedCity === city ? "active" : ""}`}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>

          {/* Cuisine */}
          <div className="mb-3">
            <h3 className="text-xs font-semibold text-ink mb-2 uppercase tracking-wider">
              Cuisine / Style
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {cuisineFilters.map((cuisine) => (
                <button
                  key={cuisine}
                  onClick={() => toggleCuisine(cuisine)}
                  className={`filter-chip ${selectedCuisines.includes(cuisine) ? "active" : ""}`}
                >
                  {cuisine}
                </button>
              ))}
            </div>
          </div>

          {/* Sort */}
          <div>
            <h3 className="text-xs font-semibold text-ink mb-2 uppercase tracking-wider">
              Sort by
            </h3>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm border border-stone-light rounded-lg px-3 py-1.5 bg-white text-ink focus:outline-none focus:ring-2 focus:ring-crimson/20"
            >
              <option value="default">Recommended</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="neighborhood">By Neighborhood</option>
            </select>
          </div>

          {/* Clear */}
          {activeFilterCount > 0 && (
            <button
              onClick={() => {
                setSelectedType("All");
                setSelectedCuisines([]);
                setSelectedCity("All");
                setSortBy("default");
              }}
              className="mt-3 text-xs text-crimson font-medium hover:text-crimson-dark"
            >
              Clear all filters
            </button>
          )}
        </div>
      )}

      {/* Results count */}
      <p className="text-xs text-ink-light mb-4">
        Showing {filtered.length} of {allSpots.length} spots
      </p>

      {/* Results */}
      <div className="space-y-3">
        {filtered.map((spot) => {
          const isCustom = spot.id.startsWith("custom-");
          return (
            <div key={spot.id} className={`card overflow-hidden animate-in ${isCustom ? "border-crimson/20 border-2" : ""}`}>
              <div className="p-4">
                {/* Header row */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-serif text-lg font-semibold text-ink leading-snug">
                        {spot.name}
                      </h3>
                      {isCustom && (
                        <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full bg-crimson/10 text-crimson">
                          CUSTOM
                        </span>
                      )}
                    </div>
                    {spot.nameJa && (
                      <p className="text-xs text-ink-light mt-0.5">
                        {spot.nameJa}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <PriceRange range={spot.priceRange} />
                    {isCustom && (
                      <button
                        onClick={() => handleDeleteCustomSpot(spot.id)}
                        className="text-ink-light hover:text-crimson transition-colors"
                        title="Remove custom spot"
                      >
                        <Trash2 size={14} />
                      </button>
                    )}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {spot.cuisineStyle.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="tag tag-restaurant"
                    >
                      {tag}
                    </span>
                  ))}
                  <ReservationBadge status={spot.reservationStatus} />
                </div>

                {/* Description */}
                <p className="text-sm text-ink-light mt-2 leading-relaxed">
                  {spot.description}
                </p>

                {/* What to order */}
                {spot.whatToOrder && (
                  <div className="flex items-start gap-1.5 mt-2">
                    <Utensils
                      size={12}
                      className="text-gold mt-0.5 flex-shrink-0"
                    />
                    <p className="text-xs text-ink-light">
                      <span className="font-medium text-gold">Order:</span>{" "}
                      {spot.whatToOrder}
                    </p>
                  </div>
                )}

                {/* Meta */}
                <div className="flex flex-wrap items-center gap-3 mt-3 text-xs text-ink-light">
                  <span className="flex items-center gap-1">
                    <MapPin size={12} className="text-sage" />
                    {spot.neighborhood}, {spot.city}
                  </span>
                  {spot.hours && <span>{spot.hours}</span>}
                  {spot.itineraryDay !== undefined && (
                    <span className="text-crimson font-medium">
                      Day {spot.itineraryDay}
                    </span>
                  )}
                </div>

                {/* Links */}
                {(spot.mapsLink || spot.website) && (
                  <div className="flex gap-3 mt-3">
                    {spot.mapsLink && (
                      <a
                        href={spot.mapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs text-crimson hover:text-crimson-dark transition-colors"
                      >
                        <MapPin size={12} />
                        Map
                        <ExternalLink size={10} />
                      </a>
                    )}
                    {spot.website && (
                      <a
                        href={spot.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs text-crimson hover:text-crimson-dark transition-colors"
                      >
                        Website
                        <ExternalLink size={10} />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-ink-light text-sm">
              No spots match your filters.
            </p>
            <button
              onClick={() => {
                setSearch("");
                setSelectedType("All");
                setSelectedCuisines([]);
                setSelectedCity("All");
              }}
              className="mt-2 text-sm text-crimson font-medium"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
