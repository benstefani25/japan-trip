"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CalendarDays,
  UtensilsCrossed,
  BookmarkCheck,
  Map,
  Info,
} from "lucide-react";

const tabs = [
  { href: "/", label: "Itinerary", icon: CalendarDays },
  { href: "/food", label: "Food", icon: UtensilsCrossed },
  { href: "/reservations", label: "Bookings", icon: BookmarkCheck },
  { href: "/maps", label: "Maps", icon: Map },
  { href: "/tips", label: "Tips", icon: Info },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile bottom nav */}
      <nav className="bottom-nav md:hidden">
        <div className="flex items-center justify-around px-2 py-1">
          {tabs.map((tab) => {
            const isActive =
              tab.href === "/"
                ? pathname === "/" || pathname.startsWith("/itinerary")
                : pathname.startsWith(tab.href);
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={`flex flex-col items-center gap-0.5 py-1.5 px-3 rounded-lg transition-colors min-w-[64px] ${
                  isActive
                    ? "text-crimson"
                    : "text-ink-light hover:text-ink"
                }`}
              >
                <tab.icon
                  size={22}
                  strokeWidth={isActive ? 2.2 : 1.8}
                />
                <span className="text-[10px] font-medium leading-tight">
                  {tab.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Desktop top nav */}
      <nav className="hidden md:block fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-stone-light z-50">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-14">
          <Link href="/" className="font-serif text-lg font-semibold text-ink tracking-wide">
            Japan 2026
          </Link>
          <div className="flex items-center gap-1">
            {tabs.map((tab) => {
              const isActive =
                tab.href === "/"
                  ? pathname === "/" || pathname.startsWith("/itinerary")
                  : pathname.startsWith(tab.href);
              return (
                <Link
                  key={tab.href}
                  href={tab.href}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "text-crimson bg-crimson/5"
                      : "text-ink-light hover:text-ink hover:bg-stone-light/50"
                  }`}
                >
                  <tab.icon size={16} strokeWidth={isActive ? 2.2 : 1.8} />
                  {tab.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}
