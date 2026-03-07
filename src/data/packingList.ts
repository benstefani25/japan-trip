export interface PackingItem {
  name: string;
  packed: boolean;
  notes?: string;
}

export interface PackingCategory {
  category: string;
  icon: string;
  items: PackingItem[];
}

export const packingList: PackingCategory[] = [
  {
    category: 'Essentials',
    icon: '📋',
    items: [
      { name: 'Passport', packed: false, notes: 'Verify expiration date is at least 6 months past May 3. Japan allows 90-day visa-free stays for US citizens.' },
      { name: 'Wallet (with cash & cards)', packed: false, notes: 'Notify your bank/credit card company of travel dates. Bring at least $200 USD equivalent in yen for arrival.' },
      { name: 'Phone', packed: false, notes: 'Set up an international plan or rent a pocket Wi-Fi. Download Google Translate offline Japanese pack.' },
      { name: 'Phone charger & cable', packed: false },
      { name: 'Travel insurance documents', packed: false, notes: 'Print a copy and save a digital version. Include emergency contact numbers.' },
      { name: 'Printed copies of reservations', packed: false, notes: 'Hotels, flights, restaurant bookings. Some places in Japan still prefer printed confirmations.' },
      { name: 'Copies of passport (physical & digital)', packed: false, notes: 'Keep a photocopy separate from your passport. Email a scan to yourself as backup.' },
      { name: 'Boarding passes / mobile check-in', packed: false, notes: 'United app for mobile boarding passes. Screenshot as backup.' },
    ],
  },
  {
    category: 'Clothing',
    icon: '👕',
    items: [
      { name: 'Light layers (t-shirts, long sleeves)', packed: false, notes: 'Late April in Japan is 60-75°F (15-24°C). Mornings and evenings are cooler.' },
      { name: 'Comfortable walking shoes', packed: false, notes: 'You will walk 15,000-25,000 steps/day. Break them in before the trip. Slip-on style is ideal for temples.' },
      { name: 'Rain jacket or compact umbrella', packed: false, notes: 'Late April can have rainy spells. A packable rain jacket is more practical than an umbrella for all-day sightseeing.' },
      { name: 'Temple-appropriate clothing', packed: false, notes: 'Shoulders and knees should be covered at some shrines/temples. No revealing tops.' },
      { name: 'Light scarf or shawl', packed: false, notes: 'Versatile — use as a cover-up at temples, warmth on cool evenings, or pillow on the plane.' },
      { name: 'Socks (extra pairs)', packed: false, notes: 'You remove shoes frequently at temples, restaurants, and ryokan. Clean socks are a must.' },
      { name: 'Sleepwear', packed: false, notes: 'Hotels often provide yukata (light robes) but bring your own if preferred.' },
      { name: 'Light jacket or hoodie', packed: false, notes: 'Evenings can drop to the mid-50s°F. Useful for air-conditioned trains and restaurants.' },
    ],
  },
  {
    category: 'Tech',
    icon: '🔌',
    items: [
      { name: 'Power adapter (Type A)', packed: false, notes: 'Japan uses Type A plugs — same as the US. No adapter needed for standard US plugs. Voltage is 100V (most modern chargers handle this).' },
      { name: 'Portable battery pack', packed: false, notes: 'At least 10,000mAh recommended. Heavy phone use for maps, translation, and photos drains battery fast.' },
      { name: 'Earbuds / headphones', packed: false, notes: 'Essential for long Shinkansen rides and flights. Noise-canceling recommended.' },
      { name: 'Camera', packed: false, notes: 'Optional if your phone camera is sufficient. Bring extra memory cards if using a dedicated camera.' },
      { name: 'Phone mount / tripod', packed: false, notes: 'Compact tripod for group photos. Selfie sticks are banned at many temples and museums.' },
      { name: 'Charging cables (Lightning/USB-C)', packed: false, notes: 'Bring one for each device. Consider a multi-port USB charger to save outlet space.' },
    ],
  },
  {
    category: 'Health',
    icon: '💊',
    items: [
      { name: 'Prescription medications', packed: false, notes: 'Bring enough for the full trip plus a few extra days. Keep in original labeled containers. Some medications are restricted in Japan — check customs rules.' },
      { name: 'Health insurance card', packed: false, notes: 'Carry your card plus the international claims phone number. Most Japanese hospitals require upfront payment.' },
      { name: 'Hand sanitizer', packed: false, notes: 'Useful on trains and at street food stalls.' },
      { name: 'Sunscreen', packed: false, notes: 'SPF 30+ recommended. Late April sun can be strong, especially at outdoor temples and gardens.' },
      { name: 'Band-aids / blister pads', packed: false, notes: 'Blisters are the #1 trip complaint. Bring moleskin or hydrocolloid blister pads for heavy walking days.' },
      { name: 'Allergy medication', packed: false, notes: 'Late April overlaps with Japanese cedar pollen season. Antihistamines recommended even if you don\'t normally have allergies.' },
      { name: 'Pain relievers (ibuprofen, acetaminophen)', packed: false, notes: 'Ibuprofen is harder to find in Japan. Bring your own supply.' },
      { name: 'Motion sickness medication', packed: false, notes: 'Helpful for long flights and winding bus rides.' },
    ],
  },
  {
    category: 'Japan-Specific',
    icon: '🇯🇵',
    items: [
      { name: 'Coin purse', packed: false, notes: 'Japan is still cash-heavy at small shops, vending machines, and temples. You will accumulate a lot of 100-yen and 500-yen coins.' },
      { name: 'Small towel / handkerchief', packed: false, notes: 'Most public restrooms in Japan do not have paper towels or hand dryers. Carry a small hand towel — locals always do.' },
      { name: 'Foldable tote bag', packed: false, notes: 'Plastic bags cost extra in Japan. A compact tote is perfect for souvenirs, groceries, and convenience store runs.' },
      { name: 'Ziplock bags for trash', packed: false, notes: 'Public trash cans are rare in Japan. Carry a bag to hold your trash until you find a bin (usually at convenience stores).' },
      { name: 'Pocket tissues', packed: false, notes: 'Useful as a substitute for napkins (not always provided) and for restrooms. Often handed out free near train stations.' },
      { name: 'IC card (Suica / Pasmo) or mobile Suica', packed: false, notes: 'Rechargeable transit card for trains, buses, and convenience stores. Set up mobile Suica on iPhone before arriving.' },
      { name: 'Pocket Wi-Fi or eSIM', packed: false, notes: 'Reserve a pocket Wi-Fi for pickup at Narita, or install an eSIM (Ubigi, Airalo) before departure. Essential for Google Maps navigation.' },
    ],
  },
];
