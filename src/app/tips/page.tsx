"use client";

import { useState } from "react";
import { packingList } from "@/data/packingList";
import { phrases } from "@/data/phrases";
import { travelTips } from "@/data/travelTips";
import {
  CheckSquare,
  Square,
  ChevronDown,
  ChevronUp,
  Volume2,
  Train,
  Wallet,
  Heart,
  Wifi,
  AlertTriangle,
  Luggage,
  Languages,
  BookOpen,
} from "lucide-react";

const tipIcons: Record<string, typeof Train> = {
  train: Train,
  wallet: Wallet,
  heart: Heart,
  wifi: Wifi,
  "alert-triangle": AlertTriangle,
};

type TabType = "packing" | "phrases" | "tips";

export default function TipsPage() {
  const [activeTab, setActiveTab] = useState<TabType>("tips");
  const [packedItems, setPackedItems] = useState<Record<string, boolean>>({});
  const [expandedCategories, setExpandedCategories] = useState<
    Record<string, boolean>
  >({});
  const [expandedPhraseCategory, setExpandedPhraseCategory] = useState<string>(
    phrases[0]?.category || ""
  );

  const togglePacked = (categoryIdx: number, itemIdx: number) => {
    const key = `${categoryIdx}-${itemIdx}`;
    setPackedItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const totalItems = packingList.reduce(
    (sum, cat) => sum + cat.items.length,
    0
  );
  const packedCount = Object.values(packedItems).filter(Boolean).length;

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="font-serif text-2xl font-bold text-ink">Travel Tips</h1>
        <p className="text-sm text-ink-light mt-1">
          Everything you need for the trip
        </p>
      </div>

      {/* Sub-tabs */}
      <div className="flex gap-1 mb-6 p-1 bg-white rounded-xl border border-stone-light">
        {[
          { key: "tips" as TabType, label: "Practical Info", icon: BookOpen },
          { key: "phrases" as TabType, label: "Phrases", icon: Languages },
          { key: "packing" as TabType, label: "Packing", icon: Luggage },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-sm font-medium transition-all ${
              activeTab === tab.key
                ? "bg-crimson text-white shadow-sm"
                : "text-ink-light hover:text-ink"
            }`}
          >
            <tab.icon size={15} />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Practical Tips Tab */}
      {activeTab === "tips" && (
        <div className="space-y-4">
          {travelTips.map((section) => {
            const Icon = tipIcons[section.icon] || BookOpen;
            const isExpanded = expandedCategories[section.title] !== false;

            return (
              <div key={section.title} className="card overflow-hidden">
                <button
                  onClick={() => toggleCategory(section.title)}
                  className="w-full flex items-center justify-between p-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-crimson/10 text-crimson">
                      <Icon size={18} />
                    </span>
                    <h2 className="font-serif text-lg font-semibold text-ink">
                      {section.title}
                    </h2>
                  </div>
                  {isExpanded ? (
                    <ChevronUp size={18} className="text-ink-light" />
                  ) : (
                    <ChevronDown size={18} className="text-ink-light" />
                  )}
                </button>

                {isExpanded && (
                  <div className="px-4 pb-4 space-y-3">
                    {section.content.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-lg bg-washi"
                      >
                        <h3 className="text-sm font-semibold text-ink mb-1">
                          {item.heading}
                        </h3>
                        <p className="text-sm text-ink-light leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Phrases Tab */}
      {activeTab === "phrases" && (
        <div className="space-y-3">
          {phrases.map((category) => {
            const isExpanded = expandedPhraseCategory === category.category;

            return (
              <div key={category.category} className="card overflow-hidden">
                <button
                  onClick={() =>
                    setExpandedPhraseCategory(
                      isExpanded ? "" : category.category
                    )
                  }
                  className="w-full flex items-center justify-between p-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{category.icon}</span>
                    <h2 className="font-serif text-lg font-semibold text-ink">
                      {category.category}
                    </h2>
                    <span className="text-xs text-ink-light">
                      {category.phrases.length} phrases
                    </span>
                  </div>
                  {isExpanded ? (
                    <ChevronUp size={18} className="text-ink-light" />
                  ) : (
                    <ChevronDown size={18} className="text-ink-light" />
                  )}
                </button>

                {isExpanded && (
                  <div className="px-4 pb-4 space-y-2">
                    {category.phrases.map((phrase, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-lg bg-washi border border-stone-light/50"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1">
                            <p className="text-sm font-semibold text-ink">
                              {phrase.english}
                            </p>
                            <p className="text-lg text-crimson mt-1 font-medium">
                              {phrase.japanese}
                            </p>
                            <p className="text-sm text-ink-light mt-0.5 italic">
                              {phrase.romaji}
                            </p>
                          </div>
                          <div className="flex items-center gap-1 mt-1 text-xs text-sage bg-sage/10 px-2 py-1 rounded-full flex-shrink-0">
                            <Volume2 size={11} />
                            {phrase.pronunciation}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Packing Tab */}
      {activeTab === "packing" && (
        <div>
          {/* Progress bar */}
          <div className="card p-4 mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-ink">
                Packing Progress
              </span>
              <span className="text-sm text-ink-light">
                {packedCount} / {totalItems} items
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-stone-light overflow-hidden">
              <div
                className="h-full bg-crimson rounded-full transition-all duration-300"
                style={{
                  width: `${totalItems > 0 ? (packedCount / totalItems) * 100 : 0}%`,
                }}
              />
            </div>
          </div>

          <div className="space-y-3">
            {packingList.map((category, catIdx) => {
              const catPacked = category.items.filter(
                (_, itemIdx) => packedItems[`${catIdx}-${itemIdx}`]
              ).length;

              return (
                <div key={category.category} className="card overflow-hidden">
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{category.icon}</span>
                        <h2 className="font-serif text-lg font-semibold text-ink">
                          {category.category}
                        </h2>
                      </div>
                      <span className="text-xs text-ink-light">
                        {catPacked}/{category.items.length}
                      </span>
                    </div>

                    <div className="space-y-1">
                      {category.items.map((item, itemIdx) => {
                        const isPacked =
                          packedItems[`${catIdx}-${itemIdx}`] || false;

                        return (
                          <button
                            key={itemIdx}
                            onClick={() => togglePacked(catIdx, itemIdx)}
                            className={`w-full flex items-start gap-3 p-2 rounded-lg text-left transition-colors ${
                              isPacked
                                ? "bg-green-50"
                                : "hover:bg-washi"
                            }`}
                          >
                            {isPacked ? (
                              <CheckSquare
                                size={18}
                                className="text-green-600 mt-0.5 flex-shrink-0"
                              />
                            ) : (
                              <Square
                                size={18}
                                className="text-stone mt-0.5 flex-shrink-0"
                              />
                            )}
                            <div className="flex-1">
                              <span
                                className={`text-sm ${
                                  isPacked
                                    ? "text-ink-light line-through"
                                    : "text-ink"
                                }`}
                              >
                                {item.name}
                              </span>
                              {item.notes && (
                                <p className="text-xs text-ink-light/70 mt-0.5 leading-relaxed">
                                  {item.notes}
                                </p>
                              )}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
