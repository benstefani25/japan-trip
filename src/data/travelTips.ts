export interface TipSection {
  title: string;
  icon: string;
  content: TipItem[];
}

export interface TipItem {
  heading: string;
  text: string;
}

export const travelTips: TipSection[] = [
  {
    title: "Transportation",
    icon: "train",
    content: [
      {
        heading: "IC Cards (Suica/Pasmo)",
        text: "Pick up a Suica or Pasmo card at any JR or Metro station kiosk — they work identically across all transit in Tokyo and most of Japan. Load them with cash at any station ticket machine or convenience store. Beyond trains and buses, IC cards work at vending machines, convenience stores, coin lockers, and many restaurants. You can also use a mobile Suica through Apple Wallet or Google Pay, which lets you reload directly from your phone without needing a physical card.",
      },
      {
        heading: "Train System",
        text: "Tokyo's rail network is split between JR (Japan Railways), Tokyo Metro, Toei Subway, and several private lines like Keio and Odakyu. Transfers between different operators may require passing through fare gates and tapping your IC card again. Station signs are color-coded by line and include both Japanese and English — look for the line color and station number (e.g., G-09 for Ginza Line). Google Maps is your best friend for navigating transit: it gives you exact platform numbers, train departure times, and transfer instructions in real time.",
      },
      {
        heading: "Shinkansen (Bullet Train)",
        text: "The Shinkansen has both reserved and unreserved seating cars. Reserved seats guarantee you a spot and can be booked at ticket counters, ticket machines, or through the SmartEX app. Unreserved cars (jiyuuseki) are first-come, first-served — arrive 15-20 minutes early during peak times. Platform displays show car numbers and where to line up. Overhead racks fit most carry-on luggage, but oversized bags (over 160cm total dimensions) require a free reservation for luggage space behind the last row of seats.",
      },
      {
        heading: "Taxis & GO App",
        text: "Taxis in Japan are clean, safe, and metered — no need to negotiate fares. The rear left door opens and closes automatically. Download the GO Taxi app before the trip — it's Japan's main ride-hailing app (like Uber) and works with credit cards. Set it up before departure. For your group of four, taxis make great sense for early 'beat the crowd' mornings — you split the fare four ways and save 30+ minutes vs. trains with transfers. Specific mornings to taxi: Fushimi Inari (Apr 26, ~15 min), Arashiyama (Apr 27, ~20 min), Kinkaku-ji (Apr 28, ~20 min vs. slow buses). You can also have your hotel arrange taxis the night before for early pickups. Late-night surcharge (20%) applies 10 PM - 5 AM.",
      },
      {
        heading: "Walking & Escalator Etiquette",
        text: "Japan drives on the left side of the road, which means pedestrian traffic also tends to flow on the left. Always look right first when crossing streets. On escalators in Tokyo, stand on the left and walk on the right — but in Osaka and Kyoto this is reversed (stand on the right, walk on the left). Sidewalks can get crowded in city centers, so try to keep pace with foot traffic and avoid stopping abruptly. Cycling is also popular and bikes often share the sidewalk, so stay alert.",
      },
    ],
  },
  {
    title: "Money & Payments",
    icon: "wallet",
    content: [
      {
        heading: "Cash Culture",
        text: "Despite Japan's high-tech reputation, it remains a surprisingly cash-heavy society. Many small restaurants, ramen shops, street food vendors, shrines, and local businesses only accept cash. It's a good idea to carry at least ¥10,000-¥20,000 in cash at all times, especially when venturing outside major tourist areas. Coins come in denominations of ¥1, ¥5, ¥10, ¥50, ¥100, and ¥500 — you'll accumulate them fast, so bring a coin purse.",
      },
      {
        heading: "Getting Yen",
        text: "The easiest way to withdraw yen is from 7-Eleven ATMs (look for the Seven Bank logo) — they reliably accept international Visa, Mastercard, and most foreign bank cards with English-language menus. Japan Post ATMs are another good option. Airport currency exchange counters are convenient on arrival but typically offer slightly worse rates. Avoid exchanging money at hotels, as their rates are usually the least favorable. Withdraw larger amounts at once to minimize per-transaction ATM fees.",
      },
      {
        heading: "Tipping",
        text: "Do NOT tip anywhere in Japan — not at restaurants, hotels, taxis, hair salons, or bars. Tipping is not part of Japanese culture and can actually cause confusion or even be considered rude, as it may imply the worker's salary is insufficient. Excellent service is the standard expectation, not something that warrants extra payment. If you try to leave a tip, staff will likely chase you down to return the money. The best way to show appreciation is a sincere thank you: \"arigatou gozaimasu.\"",
      },
      {
        heading: "Credit Cards",
        text: "Credit card acceptance has improved significantly in recent years, especially at larger retailers, department stores, hotels, and chain restaurants. Visa and Mastercard have the widest acceptance, followed by American Express. JCB is a Japanese brand and works well domestically. Contactless payments (Apple Pay, Google Pay) are increasingly common at convenience stores and major chains. However, always have cash as a backup — many izakayas, small eateries, and local shops remain cash-only.",
      },
      {
        heading: "Tax-Free Shopping",
        text: "Foreign tourists can shop tax-free (saving the 10% consumption tax) at stores displaying the \"Tax Free\" or \"Japan Tax-Free Shop\" sign. You must spend at least ¥5,000 (before tax) at a single store in one day to qualify. Bring your passport — the store will attach a record to it or register it electronically. Consumable goods (food, cosmetics, drinks) and general items (clothing, electronics) may be calculated separately. Tax-free items must leave Japan unopened in some cases, so check the specific store's policy.",
      },
    ],
  },
  {
    title: "Etiquette",
    icon: "heart",
    content: [
      {
        heading: "Shoes Off",
        text: "Removing your shoes before entering is a deeply rooted custom in Japan. Always take off your shoes at temples, traditional ryokan inns, many restaurants (especially those with tatami mat seating), some fitting rooms, and any private home. Look for a genkan (entryway step), a shoe rack, or rows of slippers as visual cues. Slip-on shoes make this process much easier. Dedicated toilet slippers are often provided near restrooms — remember to swap back to the regular slippers when you leave the bathroom.",
      },
      {
        heading: "Chopstick Rules",
        text: "There are several important chopstick taboos to know. Never stick chopsticks upright in a bowl of rice — this resembles a funeral ritual offering for the dead. Never pass food directly from your chopsticks to someone else's, as this also mimics a funeral ceremony. Don't point at people or things with your chopsticks, don't drag dishes toward you with them, and don't hover over dishes while deciding what to pick up (called \"mayoibashi\"). When not in use, rest chopsticks on the provided chopstick rest (hashioki) or across the top of your bowl.",
      },
      {
        heading: "Quiet on Trains",
        text: "Trains in Japan are remarkably quiet. Set your phone to silent mode (called \"manner mode\" in Japan) and never take phone calls on the train — step off at the next station if you must answer. Conversations between passengers should be kept to a quiet volume. Near priority seats, you may see signs asking passengers to turn off their phones entirely to avoid interference with medical devices. Eating on local commuter trains is generally frowned upon, though it's acceptable on long-distance Shinkansen and limited express trains.",
      },
      {
        heading: "Trash & Cleanliness",
        text: "Japan's streets are famously clean despite having very few public trash cans — a result of everyone carrying their own trash. Bring a small plastic bag in your daypack for wrappers, bottles, and other waste. You can dispose of trash at convenience stores (which have bins by the entrance), at train stations, and at vending machines (which have recycling bins attached). Japan sorts trash carefully: burnable, non-burnable, PET bottles, cans, and glass all go in separate bins. Follow the labels and pictograms on any bins you find.",
      },
      {
        heading: "Bowing",
        text: "Bowing is a fundamental part of Japanese communication. As a tourist, a slight bow of the head (about 15 degrees) is appropriate for casual greetings, saying thank you, or showing appreciation — you don't need to do deep formal bows. It's common to see people bow while talking on the phone without even thinking about it. If someone bows to you, a small bow in return is a respectful acknowledgment. Don't worry about getting the exact angle right — the gesture itself is what matters, and locals appreciate the effort.",
      },
      {
        heading: "Queuing",
        text: "Japanese people are exceptionally orderly when it comes to lining up. Whether it's at train platforms (follow the painted floor markings), bus stops, restaurants, or tourist attractions, always join the end of the queue and wait your turn. Cutting in line is considered extremely rude. At train stations, passengers line up on both sides of the doors and wait for everyone to exit before boarding. Popular restaurants often have long queues — this is usually a sign the food is excellent, and the wait is almost always worth it.",
      },
    ],
  },
  {
    title: "Connectivity",
    icon: "wifi",
    content: [
      {
        heading: "Pocket WiFi",
        text: "Portable WiFi routers (pocket WiFi) are one of the most popular connectivity options for tourists. You can rent them online before your trip and pick them up at the airport on arrival, or have them shipped to your hotel. They provide fast, reliable 4G/5G coverage nearly everywhere in Japan, including rural areas. Most devices support 5-10 simultaneous connections, making them great for traveling in groups. Battery life is typically 8-12 hours. Return is easy — just drop the device in the prepaid return envelope at the airport post box.",
      },
      {
        heading: "eSIM",
        text: "An eSIM is the easiest and most hassle-free option for staying connected. Purchase one before your departure through providers like Ubigi, Airalo, or Holafly — setup takes just a few minutes through your phone's settings. Most eSIM plans offer data-only service (no phone number for calls), which is usually sufficient since you can use messaging apps for communication. Activate it when you land and you'll have immediate connectivity. Make sure your phone is eSIM-compatible and carrier-unlocked before purchasing. Plans typically range from 1 GB to unlimited data for various trip durations.",
      },
      {
        heading: "Free WiFi",
        text: "Free WiFi is available at most convenience stores (7-Eleven, FamilyMart, Lawson), major train stations, airports, and many cafes like Starbucks and Doutor. Look for the \"Japan Connected-free Wi-Fi\" app, which aggregates many free hotspots into a single login. However, free WiFi can be slow, unreliable, and sometimes requires registration with an email address. It's fine for quick searches or messaging, but don't rely on it as your primary internet source — a pocket WiFi or eSIM is much more dependable for navigation and real-time travel needs.",
      },
      {
        heading: "Google Maps & Offline Maps",
        text: "Google Maps works exceptionally well in Japan — it provides accurate transit directions, walking routes, real-time train schedules, and even indoor navigation for major stations. It's by far the most useful app you'll have on your trip. Download offline maps for your key areas (Tokyo, Kyoto, Osaka) before departure as a backup in case you lose connectivity in subway tunnels or rural areas. Apple Maps also works well in Japan as an alternative. Consider downloading the Navitime or Yahoo! Japan Transit apps for additional transit routing options that sometimes find faster connections.",
      },
    ],
  },
  {
    title: "Emergency Info",
    icon: "alert-triangle",
    content: [
      {
        heading: "Police",
        text: "Dial 110 for police emergencies. Operators can connect you to an English-speaking interpreter if needed — say \"English, please\" clearly. For non-emergencies, visit the nearest koban (police box) — these small police stations are found on almost every major street corner and near train stations. Officers at koban can help with directions, lost items, and minor incidents. Japan is one of the safest countries in the world, but keep the emergency number saved in your phone just in case. Police response times are typically very fast, especially in urban areas.",
      },
      {
        heading: "Fire & Ambulance",
        text: "Dial 119 for fire emergencies and ambulance services. When the operator answers, say \"kyuukyuu\" (救急) for ambulance or \"kaji\" (火事) for fire. English support is available in major cities. Ambulance service in Japan is free of charge, but hospital treatment costs still apply. If you or someone nearby needs medical attention, don't hesitate to call — response times are generally under 10 minutes in urban areas. You can also ask hotel staff or nearby convenience store clerks to call on your behalf if you're unsure about the language.",
      },
      {
        heading: "US Embassy Tokyo",
        text: "The U.S. Embassy in Tokyo is located at 1-10-5 Akasaka, Minato-ku, Tokyo 107-8420. The main phone number is 03-3224-5000 (from within Japan) or +81-3-3224-5000 (international). For after-hours emergencies involving U.S. citizens, call the same number and follow the prompts for emergency assistance. The embassy can help with lost or stolen passports, emergency financial assistance, arrests, and other crises. Register your trip with the Smart Traveler Enrollment Program (STEP) at travel.state.gov before departure for alerts and easier consular assistance.",
      },
      {
        heading: "Travel Insurance",
        text: "Keep your travel insurance policy number, the insurance company's 24-hour emergency hotline, and your claim reference information easily accessible on your phone — take screenshots or save them to your notes app so you can access them without internet. Ensure your policy covers medical treatment in Japan, emergency evacuation, trip interruption, and lost luggage. Medical costs at Japanese hospitals can be expensive for uninsured foreigners. If you need to visit a hospital, contact your insurance provider first if possible, as many have direct billing arrangements with major Japanese hospitals.",
      },
      {
        heading: "Hospitals & Medical Help",
        text: "If you need a hospital, say \"byouin\" (病院) and locals will help point you in the right direction. Most major hospitals in Tokyo, Osaka, and Kyoto have English-speaking staff or access to medical interpreters. The AMDA International Medical Information Center (03-6233-9266) provides free multilingual medical consultations and can help you locate an appropriate English-friendly hospital or clinic. Pharmacies (called \"yakkyoku\") are widely available for minor ailments — look for the green cross sign. Common over-the-counter medications may have different dosages than what you're used to, so ask the pharmacist for guidance.",
      },
      {
        heading: "Lost Items",
        text: "Japan has an extraordinary culture of returning lost items. If you lose something on a train, go to the station's lost and found office (wasuremono center) — there's a very high chance it's been turned in. JR East has an online lost property search system in English. Items lost on the street are often brought to the nearest koban (police box). For items lost in taxis, contact the taxi company (your hotel can help with this). Keep a photo of important belongings like your wallet and bag on your phone to help describe lost items. Most lost items are held for 3-6 months before being disposed of, so you have time to file a claim even after leaving Japan.",
      },
    ],
  },
  {
    title: "Pre-Trip Booking Checklist",
    icon: "clipboard",
    content: [
      {
        heading: "Reservations Still Needed",
        text: "☐ Book farewell sushi omakase for May 2 evening (Sushi Nishizaki, Sushi Yasumitsu, or Onodera Toryumon). ☐ Book Shibuya Sky tickets for Apr 30 (sells out during Golden Week). ☐ Plan intentional unagi meal in Asakusa for May 1 lunch (Unatoto or Obana). ☐ Book Yakiniku Jumbo Hanare if going (check monthly reservation release dates on their website — extremely competitive during Golden Week). ☐ Book private tour for Nijo Castle (via MagicalTrip, Klook, or hotel concierge). ☐ Consider private tour for Fushimi Inari.",
      },
      {
        heading: "Apps to Download Before Trip",
        text: "☐ GO Taxi App — Japan's main ride-hailing app. Set up with credit card before departure. Essential for early morning temple visits. ☐ SmartEX — for booking Shinkansen tickets (works with non-Japanese credit cards). ☐ Google Maps — download offline maps for Tokyo and Kyoto. ☐ Suica/Pasmo — set up mobile IC card through Apple Wallet or Google Pay.",
      },
      {
        heading: "Other Reminders",
        text: "☐ Book taxi for Apr 27 Arashiyama morning (via hotel night before or GO app). ☐ Have a rain swap plan for Arashiyama (Apr 27) — swap with Apr 28 indoor activities if needed. ☐ Visit the free Tokyo Metropolitan Government Building observation deck one evening — it's literally next door to the Keio Plaza Hotel. ☐ Remember to order the beef rice (takikomi gohan) at time of reservation if booking Jumbo Hanare.",
      },
      {
        heading: "Private Tour Recommendations",
        text: "Nijo Castle benefits most from a guide — they explain the nightingale floors, Tokugawa history, and painted screen meanings. Without context it's a beautiful building; with a guide it's a history lesson that comes alive. Fushimi Inari with a guide takes you to sections most tourists never see (including the secret bamboo grove). Book through MagicalTrip, Klook, or ask your hotel concierge.",
      },
    ],
  },
];
