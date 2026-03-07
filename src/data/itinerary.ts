export interface HotelInfo {
  name: string;
  address: string;
  checkIn?: string;
  checkOut?: string;
}

export interface CuratedPick {
  name: string;
  nameJa?: string;
  description: string;
  whatToOrder?: string;
  photo?: string;
}

export interface ItineraryEntry {
  time?: string;
  endTime?: string;
  type: 'activity' | 'meal' | 'transit' | 'exploration-zone' | 'free-time' | 'hotel';
  name: string;
  nameJa?: string;
  category: string;
  neighborhood?: string;
  address?: string;
  lat?: number;
  lng?: number;
  photo?: string;
  description: string;
  tips?: string;
  duration?: string;
  priceRange?: string;
  reservationId?: string;
  menuLink?: string;
  mapsLink?: string;
  isExplorationZone?: boolean;
  curatedPicks?: CuratedPick[];
  howToApproach?: string;
  practicalNotes?: string;
}

export interface ItineraryDay {
  date: string;
  dayNumber: number;
  dayOfWeek: string;
  title: string;
  city: string;
  hotel?: HotelInfo;
  entries: ItineraryEntry[];
}

export const itinerary: ItineraryDay[] = [
  // ===== DAY 0 — April 23 (Wednesday): Departure =====
  {
    date: '2026-04-23',
    dayNumber: 0,
    dayOfWeek: 'Wednesday',
    title: 'Departure from Chicago',
    city: 'Chicago',
    entries: [
      {
        type: 'transit',
        name: 'Depart Chicago O\'Hare (ORD)',
        category: 'Flight',
        neighborhood: "O'Hare",
        address: '10000 W O\'Hare Ave, Chicago, IL 60666',
        lat: 41.9742,
        lng: -87.9073,
        description:
          'Board your United Airlines flight from Chicago O\'Hare International Airport bound for Tokyo. The overnight transpacific flight covers roughly 6,300 miles and takes approximately 13-14 hours. Get comfortable, set your watch ahead, and try to sleep on the plane to ease the jet lag transition.',
        tips: 'Arrive at least 3 hours before departure for international flights. Pack essentials (charger, neck pillow, eye mask, compression socks) in your carry-on. Download offline maps of Tokyo and Kyoto before takeoff.',
        duration: '~14 hours',
        mapsLink: 'https://www.google.com/maps/place/O\'Hare+International+Airport/@41.9742,-87.9073,15z',
      },
    ],
  },

  // ===== DAY 1 — April 24 (Thursday): Arrival in Tokyo =====
  {
    date: '2026-04-24',
    dayNumber: 1,
    dayOfWeek: 'Thursday',
    title: 'Arrival in Tokyo',
    city: 'Tokyo',
    hotel: {
      name: 'Daiwa Roynet Hotel Tokyo Kyobashi PREMIER',
      address: '3-3-5 Kyobashi, Chuo-ku, Tokyo 104-0031',
      checkIn: '14:00',
      checkOut: '11:00',
    },
    entries: [
      {
        type: 'transit',
        name: 'Arrive Tokyo',
        category: 'Flight Arrival',
        neighborhood: 'Narita / Haneda',
        address: 'Narita International Airport, Narita, Chiba',
        lat: 35.7647,
        lng: 140.3864,
        description:
          'Welcome to Japan! Clear immigration and customs, then pick up your pocket Wi-Fi or activate your eSIM. If arriving at Narita, take the Narita Express (N\'EX) to Tokyo Station (~60 minutes). If arriving at Haneda, the monorail or Keikyu Line will get you into the city in under 30 minutes.',
        tips: 'Have your Visit Japan Web QR code ready on your phone for a faster immigration process. Pick up a Suica or Pasmo IC card at the airport for seamless transit throughout the trip. Exchange some yen at the airport or withdraw from a 7-Eleven ATM.',
        duration: '1-2 hours (immigration + transit)',
        mapsLink: 'https://www.google.com/maps/place/Narita+International+Airport/@35.7647,140.3864,15z',
      },
      {
        type: 'hotel',
        name: 'Check in at Daiwa Roynet Hotel Tokyo Kyobashi PREMIER',
        nameJa: 'ダイワロイネットホテル東京京橋プレミア',
        category: 'Hotel',
        neighborhood: 'Kyobashi',
        address: '3-3-5 Kyobashi, Chuo-ku, Tokyo 104-0031',
        lat: 35.6766,
        lng: 139.7708,
        description:
          'A modern and stylish hotel in the Kyobashi district, perfectly positioned between Tokyo Station and Ginza. The PREMIER line offers upgraded rooms with refined interiors, excellent city views, and a location that makes exploring central Tokyo effortless. Drop your bags and freshen up before heading out.',
        tips: 'The hotel is a short walk from Tokyo Station (Yaesu exit) and Kyobashi Station. If you arrive before check-in time, the front desk will store your luggage so you can start exploring right away.',
        mapsLink: 'https://www.google.com/maps/place/Daiwa+Roynet+Hotel+Tokyo+Kyobashi+PREMIER/@35.6766,139.7708,17z',
      },
      {
        time: '15:00',
        endTime: '18:00',
        type: 'exploration-zone',
        name: 'Explore Ginza',
        nameJa: '銀座',
        category: 'Neighborhood Exploration',
        neighborhood: 'Ginza',
        address: 'Ginza, Chuo-ku, Tokyo',
        lat: 35.6717,
        lng: 139.7649,
        description:
          'Ginza is Tokyo\'s most prestigious shopping and dining district, a dazzling grid of wide boulevards, flagship department stores, and world-class galleries. On weekends the main Chuo-dori avenue becomes a pedestrian paradise. Even on a weekday afternoon the energy is palpable. Let the jet lag melt away as you stroll past the iconic Wako clock tower, browse the multi-floor wonderland of Ginza Six, or step into one of the many art galleries tucked into side streets.',
        isExplorationZone: true,
        howToApproach:
          'Start at the Ginza 4-chome intersection (the heart of the district) and wander outward. Walk south toward Shinbashi for a grittier, more local feel, or north toward Yurakucho for the atmospheric yakitori stalls under the train tracks.',
        practicalNotes:
          'Most department stores open at 10:00 or 11:00 and close around 20:00. The side streets (especially around Ginza 6-8 chome) hide incredible small restaurants. Ginza is very walkable and flat.',
        tips: 'Don\'t miss the basement food halls (depachika) in Mitsukoshi or Ginza Six for beautiful bento boxes, wagashi sweets, and high-end food souvenirs.',
        duration: '2-3 hours',
        mapsLink: 'https://www.google.com/maps/place/Ginza,+Chuo+City,+Tokyo/@35.6717,139.7649,16z',
        curatedPicks: [
          {
            name: 'Ginza Six',
            nameJa: 'ギンザ シックス',
            description:
              'A striking modern shopping complex with luxury brands, an art-filled interior, a rooftop garden with views, and an extraordinary basement food floor.',
          },
          {
            name: 'Itoya Stationery',
            nameJa: '伊東屋',
            description:
              'A 12-story temple to stationery lovers. Japanese pens, paper, washi tape, and beautifully crafted notebooks across every floor.',
          },
          {
            name: 'Hakuhinkan Toy Park',
            nameJa: '博品館トイパーク',
            description:
              'A massive multi-floor toy store packed with Japanese toys, games, puzzles, and novelties you won\'t find anywhere else.',
          },
        ],
      },
      {
        time: '19:00',
        endTime: '21:00',
        type: 'meal',
        name: 'Dinner in Ginza / Kyobashi',
        category: 'Dinner',
        neighborhood: 'Ginza / Kyobashi',
        lat: 35.6740,
        lng: 139.7680,
        description:
          'For your first dinner in Japan, keep it approachable and satisfying. The Kyobashi and Ginza area is packed with incredible restaurants at every price point. Try a tonkatsu set meal, a steaming bowl of ramen, or a conveyor belt sushi spot. This is your warm-up meal — save the elaborate omakase for later in the trip.',
        tips: 'Look for restaurants displaying plastic food models (shokuhin sampuru) in their windows. They make ordering easy even without Japanese. Dinner service typically starts around 17:00-18:00 and many places have last order by 21:00.',
        priceRange: '$$',
        mapsLink: 'https://www.google.com/maps/place/Kyobashi,+Chuo+City,+Tokyo/@35.6740,139.7680,16z',
      },
    ],
  },

  // ===== DAY 2 — April 25 (Friday): Tsukiji & Shinkansen to Kyoto =====
  {
    date: '2026-04-25',
    dayNumber: 2,
    dayOfWeek: 'Friday',
    title: 'Tsukiji & Shinkansen to Kyoto',
    city: 'Tokyo / Kyoto',
    hotel: {
      name: 'The Blossom Kyoto',
      address: '587 Ichinosencho, Shimogyo-ku, Kyoto 600-8233',
      checkIn: '15:00',
      checkOut: '11:00',
    },
    entries: [
      {
        time: '07:30',
        endTime: '10:00',
        type: 'exploration-zone',
        name: 'Tsukiji Outer Market',
        nameJa: '築地場外市場',
        category: 'Market / Food',
        neighborhood: 'Tsukiji',
        address: '4-16-2 Tsukiji, Chuo-ku, Tokyo 104-0045',
        lat: 35.6654,
        lng: 139.7707,
        description:
          'While the inner wholesale market relocated to Toyosu, the Tsukiji Outer Market remains a vibrant, bustling maze of food stalls, kitchenware shops, and tiny restaurants. This is one of the best street food experiences in Tokyo. Wander the narrow lanes sampling tamagoyaki (rolled omelet), fresh sashimi on sticks, grilled scallops, wagyu beef skewers, and matcha treats. The energy is infectious, the smells intoxicating, and the quality of food is exceptional.',
        isExplorationZone: true,
        howToApproach:
          'Enter from the main Harumi-dori side and zigzag through the inner lanes. Don\'t stick to just the main drag — the best stalls are often tucked one or two lanes deep. Eat as you go; this is a grazing experience, not a sit-down meal.',
        practicalNotes:
          'Most stalls open between 5:00-7:00 AM and close by early afternoon. Go early to avoid the worst crowds. Many stalls are cash only. Bring small bills and coins. Some stalls close on Sundays and Wednesdays.',
        tips: 'Arrive as early as your jet-lagged body allows. By 9:00 AM the crowds become dense. Eat breakfast here instead of at the hotel — it is vastly superior.',
        duration: '2-2.5 hours',
        priceRange: '$ - $$',
        mapsLink: 'https://www.google.com/maps/place/Tsukiji+Outer+Market/@35.6654,139.7707,17z',
        curatedPicks: [
          {
            name: 'Tsukiji Yamazaki',
            nameJa: '築地山長',
            description: 'Famous for their tamagoyaki (Japanese rolled omelet) cooked fresh on the griddle right in front of you. Sweet, fluffy, and perfect.',
            whatToOrder: 'Tamagoyaki on a stick (150-200 yen)',
          },
          {
            name: 'Tsukiji Sano',
            nameJa: '築地さの',
            description: 'Fresh grilled seafood on skewers — giant scallops, crab legs, and wagyu beef at reasonable prices.',
            whatToOrder: 'Grilled hotate (scallop) with soy butter',
          },
          {
            name: 'Marukyu',
            nameJa: '丸久',
            description: 'Specializes in fresh uni (sea urchin) and ikura (salmon roe) served in small cups or on rice.',
            whatToOrder: 'Uni cup or uni-ikura combo',
          },
        ],
      },
      {
        time: '11:30',
        endTime: '13:45',
        type: 'transit',
        name: 'Shinkansen to Kyoto',
        nameJa: '東海道新幹線',
        category: 'Bullet Train',
        neighborhood: 'Tokyo Station / Kyoto Station',
        address: '1-9-1 Marunouchi, Chiyoda-ku, Tokyo (Tokyo Station)',
        lat: 35.6812,
        lng: 139.7671,
        description:
          'Board the legendary Tokaido Shinkansen from Tokyo Station to Kyoto Station. The Nozomi is the fastest service, covering the 476 km in approximately 2 hours and 15 minutes. This is one of the iconic travel experiences on earth — gliding silently at 285 km/h past rice paddies, suburbs, and if the skies are clear, a breathtaking view of Mount Fuji on the right side of the train (seats on the E side, rows D/E).',
        tips: 'Reserve seats on the right side (E side) of the train for the best chance of a Mount Fuji view (about 40-50 minutes into the journey). Buy an ekiben (station bento box) at Tokyo Station before boarding — the Gransta underground shopping area has incredible options. Keep your ticket; you\'ll need it to exit at Kyoto.',
        duration: '~2h 15m',
        priceRange: '$$$',
        mapsLink: 'https://www.google.com/maps/place/Tokyo+Station/@35.6812,139.7671,17z',
      },
      {
        time: '14:00',
        endTime: '15:00',
        type: 'hotel',
        name: 'Check in at The Blossom Kyoto',
        nameJa: 'ザ ブラッサム 京都',
        category: 'Hotel',
        neighborhood: 'Shimogyo-ku (near Kyoto Station)',
        address: '587 Ichinosencho, Shimogyo-ku, Kyoto 600-8233',
        lat: 35.0036,
        lng: 135.7556,
        description:
          'The Blossom Kyoto is a refined, contemporary hotel with a distinctly Japanese aesthetic, located within walking distance of Kyoto Station. The rooms feature tatami-inspired design touches, deep soaking tubs, and a calm atmosphere that provides a perfect base for your four nights in Kyoto. The lobby lounge often offers complimentary tea.',
        tips: 'The hotel is about a 7-minute walk from Kyoto Station\'s central exit. If you arrive before check-in, drop your bags and head out to explore.',
        mapsLink: 'https://www.google.com/maps/place/The+Blossom+Kyoto/@35.0036,135.7556,17z',
      },
      {
        time: '17:00',
        endTime: '21:00',
        type: 'exploration-zone',
        name: 'Pontocho Alley & Kawaramachi',
        nameJa: '先斗町・河原町',
        category: 'Neighborhood Exploration',
        neighborhood: 'Pontocho / Kawaramachi',
        address: 'Pontocho, Nakagyo-ku, Kyoto',
        lat: 35.0048,
        lng: 135.7710,
        description:
          'Pontocho is one of Kyoto\'s most atmospheric streets — a narrow, lantern-lit alley running parallel to the Kamogawa River, lined with traditional machiya townhouses converted into restaurants, bars, and tea houses. In the evening the warm glow of paper lanterns transforms the cobblestone path into something utterly magical. Nearby Kawaramachi is Kyoto\'s main shopping and nightlife strip, offering a more modern contrast.',
        isExplorationZone: true,
        howToApproach:
          'Walk from one end of Pontocho to the other (it\'s about 600 meters). Peek into the alleyways branching off to the Kamogawa riverside — many restaurants have outdoor terraces (kawayuka) over the river in warmer months. Then cross over to Kawaramachi-dori for shops and more casual dining.',
        practicalNotes:
          'Pontocho restaurants can be pricey — look for places with menus displayed outside to check prices. The riverside terraces (kawadoko/kawayuka) typically open in May but some start in late April. Kawaramachi has everything from fast fashion to izakayas.',
        tips: 'Don\'t be intimidated by the unmarked doors in Pontocho. If a place has a menu posted, it\'s welcoming walk-ins. Reservations are recommended for the more popular spots, especially on weekends.',
        duration: '3-4 hours',
        priceRange: '$$ - $$$$',
        mapsLink: 'https://www.google.com/maps/place/Pontocho/@35.0048,135.7710,17z',
        curatedPicks: [
          {
            name: 'Pontocho Alley',
            nameJa: '先斗町',
            description: 'The alley itself is the attraction. Walk slowly, absorb the atmosphere, and pick a restaurant that catches your eye.',
          },
          {
            name: 'Kamogawa River',
            nameJa: '鴨川',
            description: 'Walk along the riverbank at dusk. Locals sit on the banks, couples stroll, and the Higashiyama mountains form a gorgeous backdrop.',
          },
        ],
      },
    ],
  },

  // ===== DAY 3 — April 26 (Saturday): Eastern Kyoto =====
  {
    date: '2026-04-26',
    dayNumber: 3,
    dayOfWeek: 'Saturday',
    title: 'Eastern Kyoto',
    city: 'Kyoto',
    hotel: {
      name: 'The Blossom Kyoto',
      address: '587 Ichinosencho, Shimogyo-ku, Kyoto 600-8233',
    },
    entries: [
      {
        time: '06:30',
        endTime: '08:30',
        type: 'activity',
        name: 'Fushimi Inari Shrine',
        nameJa: '伏見稲荷大社',
        category: 'Shrine',
        neighborhood: 'Fushimi',
        address: '68 Fukakusa Yabunouchicho, Fushimi-ku, Kyoto 612-0882',
        lat: 35.0328,
        lng: 135.7723,
        description:
          'The most iconic shrine in all of Japan, famous for its seemingly infinite corridor of thousands of vermillion torii gates winding up the forested slopes of Mount Inari. The shrine is dedicated to Inari, the Shinto god of rice and prosperity, and the gates have been donated by businesses and individuals over centuries. Walking through the tunnels of orange gates with dappled forest light filtering through is a genuinely transcendent experience. The full hike to the summit takes about 2-3 hours, but even walking the first section is extraordinary.',
        tips: 'Start as early as possible — by 6:30 AM you can have the lower gates almost to yourself. The crowds become intense by 9:00 AM, especially on weekends. The full loop to the summit is about 4 km with steady elevation gain. Wear comfortable shoes. There are small tea houses and rest stops along the trail.',
        duration: '1.5-3 hours (depending on how far you hike)',
        priceRange: 'Free',
        mapsLink: 'https://www.google.com/maps/place/Fushimi+Inari-taisha/@35.0328,135.7723,16z',
      },
      {
        time: '09:30',
        endTime: '11:00',
        type: 'activity',
        name: 'Kiyomizu-dera Temple',
        nameJa: '清水寺',
        category: 'Temple',
        neighborhood: 'Higashiyama',
        address: '1-294 Kiyomizu, Higashiyama-ku, Kyoto 605-0862',
        lat: 35.0049,
        lng: 135.7850,
        description:
          'One of Kyoto\'s most celebrated temples, perched on a hillside with a massive wooden stage that juts out over the valley below. The main hall\'s veranda offers sweeping panoramic views of Kyoto\'s eastern hills and the city beyond. The temple complex includes the Otowa Waterfall, where visitors drink from three streams said to grant longevity, academic success, or love. The approach streets (Matsubara-dori and Gojozaka) are lined with pottery shops, tea houses, and souvenir stalls that are attractions in themselves.',
        tips: 'The temple opens at 6:00 AM. Arriving before 8:00 AM means significantly fewer crowds. The famous wooden stage was recently restored and is stunning. Walk around to the pagoda viewpoint for the classic photo with the main hall in the background.',
        duration: '1-1.5 hours',
        priceRange: '$ (400 yen admission)',
        mapsLink: 'https://www.google.com/maps/place/Kiyomizu-dera/@35.0049,135.785,16z',
      },
      {
        time: '11:00',
        endTime: '13:00',
        type: 'activity',
        name: 'Higashiyama Walking Path',
        nameJa: '東山散策（二年坂・三年坂）',
        category: 'Historic Walking Route',
        neighborhood: 'Higashiyama',
        address: 'Ninenzaka, Higashiyama-ku, Kyoto',
        lat: 35.0003,
        lng: 135.7808,
        description:
          'Descend from Kiyomizu-dera through the enchanting preserved streets of Ninenzaka and Sannenzaka — two gently sloping stone-paved lanes lined with traditional wooden machiya houses, now home to tea rooms, ceramic shops, and small museums. This is old Kyoto at its most photogenic. The atmosphere is like stepping into a woodblock print. Along the way you will pass Yasaka Pagoda, one of the most iconic silhouettes in Kyoto, standing tall against the hillside.',
        tips: 'According to local superstition, if you trip on Sannenzaka you will have three years of bad luck, and two years on Ninenzaka. Watch your step on the stone stairs! There is a hidden Starbucks in a renovated machiya on Ninenzaka — worth popping in just to see the interior.',
        duration: '1.5-2 hours',
        priceRange: 'Free (shopping extra)',
        mapsLink: 'https://www.google.com/maps/place/Ninen-zaka/@35.0003,135.7808,17z',
      },
      {
        time: '13:00',
        endTime: '14:00',
        type: 'meal',
        name: 'Lunch in Higashiyama',
        category: 'Lunch',
        neighborhood: 'Higashiyama',
        lat: 35.0020,
        lng: 135.7790,
        description:
          'After a morning of walking, refuel in the Higashiyama area. The neighborhood is full of small restaurants serving Kyoto-style cuisine. Try yudofu (simmered tofu, a Kyoto specialty), obanzai (traditional Kyoto home cooking served as small plates), or a simple but excellent udon or soba set.',
        tips: 'Look for restaurants along Ninenzaka or one street back from the tourist lanes for better prices and more authentic options. Lunch sets (teishoku) offer the best value.',
        priceRange: '$-$$',
        mapsLink: 'https://www.google.com/maps/place/Higashiyama+Ward,+Kyoto/@35.002,135.779,16z',
      },
      {
        time: '14:30',
        endTime: '17:00',
        type: 'exploration-zone',
        name: 'Gion District',
        nameJa: '祇園',
        category: 'Historic District',
        neighborhood: 'Gion',
        address: 'Gion, Higashiyama-ku, Kyoto',
        lat: 35.0037,
        lng: 135.7756,
        description:
          'Kyoto\'s most famous geisha district, where the traditions of the geiko and maiko are still very much alive. Wander along Hanamikoji-dori, the main street lined with exclusive ochaya (tea houses) fronted by bamboo screens and noren curtains. Cross over to Shirakawa Canal, where willow trees drape over the water and stone bridges create one of the most romantic scenes in Japan. In the early evening, you might spot a geiko or maiko hurrying between appointments — a fleeting, unforgettable sight.',
        isExplorationZone: true,
        howToApproach:
          'Walk south along Hanamikoji-dori from Shijo-dori. Then loop around via the backstreets to Shirakawa Canal (Shirakawa Minami-dori). The smaller side streets between Hanamikoji and the canal are where the magic really lives — quiet, atmospheric, and uncrowded.',
        practicalNotes:
          'Photography is restricted on parts of Hanamikoji-dori. Signs are posted. Never chase, block, or touch a geiko or maiko. Many of the tea houses along Hanamikoji are invitation-only, but there are public-facing restaurants and cafes in the area.',
        tips: 'Visit Kennin-ji Temple at the southern end of Hanamikoji — it is one of Kyoto\'s oldest Zen temples and is usually much less crowded than the big-name sites. The twin dragon ceiling painting is spectacular.',
        duration: '2-3 hours',
        priceRange: 'Free (dining extra)',
        mapsLink: 'https://www.google.com/maps/place/Gion,+Higashiyama+Ward,+Kyoto/@35.0037,135.7756,16z',
        curatedPicks: [
          {
            name: 'Hanamikoji-dori',
            nameJa: '花見小路通',
            description: 'The iconic main street of Gion, lined with traditional wooden machiya tea houses and restaurants behind bamboo fences.',
          },
          {
            name: 'Shirakawa Canal',
            nameJa: '白川',
            description: 'A dreamy canal scene with willow trees, stone bridges, and traditional architecture reflected in the water. Stunning at dusk.',
          },
          {
            name: 'Kennin-ji Temple',
            nameJa: '建仁寺',
            description: 'The oldest Zen temple in Kyoto. Famous for its Twin Dragons ceiling painting, beautiful rock garden, and Wind and Thunder God screen.',
            whatToOrder: 'Admission is around 600 yen and well worth it.',
          },
        ],
      },
      {
        time: '18:30',
        endTime: '20:30',
        type: 'meal',
        name: 'Dinner in Gion',
        category: 'Dinner',
        neighborhood: 'Gion',
        lat: 35.0040,
        lng: 135.7750,
        description:
          'Settle into the Gion area for a memorable evening meal. Options range from refined kaiseki (multi-course Japanese haute cuisine) to hearty izakaya fare. The backstreets of Gion hide dozens of intimate restaurants with just a handful of counter seats, where you can watch the chef prepare each course.',
        tips: 'For a special experience, look for small counter-seat kaiseki restaurants that offer a condensed course at a more approachable price point. Reservations are recommended for popular spots. Some restaurants accept only cash.',
        priceRange: '$$-$$$$',
        mapsLink: 'https://www.google.com/maps/place/Gion,+Higashiyama+Ward,+Kyoto/@35.004,135.775,16z',
      },
    ],
  },

  // ===== DAY 4 — April 27 (Sunday): Arashiyama & Western Kyoto =====
  {
    date: '2026-04-27',
    dayNumber: 4,
    dayOfWeek: 'Sunday',
    title: 'Arashiyama & Western Kyoto',
    city: 'Kyoto',
    hotel: {
      name: 'The Blossom Kyoto',
      address: '587 Ichinosencho, Shimogyo-ku, Kyoto 600-8233',
    },
    entries: [
      {
        time: '07:00',
        endTime: '08:30',
        type: 'activity',
        name: 'Arashiyama Bamboo Grove',
        nameJa: '嵐山竹林の小径',
        category: 'Natural Landmark',
        neighborhood: 'Arashiyama',
        address: 'Sagatenryuji Susukinobabacho, Ukyo-ku, Kyoto 616-8385',
        lat: 35.0173,
        lng: 135.6713,
        description:
          'Walk through a towering corridor of bamboo that stretches skyward, their slender stalks swaying gently and creating an ethereal rustling soundtrack. The path winds through the grove for several hundred meters, and when the light filters through the dense canopy it creates an otherworldly green glow. This is one of the most photographed spots in Japan for good reason — it genuinely feels like stepping into another realm.',
        tips: 'Arrive by 7:00 AM or earlier. This is non-negotiable if you want to experience the grove without being shoulder-to-shoulder with tour groups. By 9:00 AM the path becomes extremely crowded and the magic is diminished. Early morning light through the bamboo is extraordinary.',
        duration: '30-45 minutes for the walk',
        priceRange: 'Free',
        mapsLink: 'https://www.google.com/maps/place/Arashiyama+Bamboo+Grove/@35.0173,135.6713,17z',
      },
      {
        time: '08:30',
        endTime: '09:15',
        type: 'meal',
        name: '% Arabica Arashiyama',
        nameJa: 'アラビカ 嵐山',
        category: 'Coffee',
        neighborhood: 'Arashiyama',
        address: '3-47 Sagatenryuji Susukinobabacho, Ukyo-ku, Kyoto',
        lat: 35.0148,
        lng: 135.6778,
        description:
          'One of the most beautifully situated coffee shops in the world. This minimalist cafe sits right on the banks of the Hozu River with a view of Togetsukyo Bridge and the Arashiyama mountains. The coffee is exceptional — they roast their own beans and the baristas are serious about their craft. The combination of world-class coffee and that view makes this a transcendent morning caffeine experience.',
        tips: 'The line can get long later in the morning but moves quickly. Order a latte or pour-over and take it to the riverside to enjoy with the view. The logo is iconic and the cup makes a great photo.',
        duration: '20-30 minutes',
        priceRange: '$',
        mapsLink: 'https://www.google.com/maps/place/%25+Arabica+Kyoto+Arashiyama/@35.0148,135.6778,17z',
      },
      {
        time: '09:30',
        endTime: '11:30',
        type: 'activity',
        name: 'Monkey Park Iwatayama or Tenryu-ji Temple',
        nameJa: '嵐山モンキーパーク岩田山 / 天龍寺',
        category: 'Activity / Temple',
        neighborhood: 'Arashiyama',
        address: '8 Genrokuzancho, Arashiyama, Nishikyo-ku, Kyoto',
        lat: 35.0102,
        lng: 135.6745,
        description:
          'Two excellent options depending on your mood. Monkey Park Iwatayama: a 20-minute uphill hike through the forest to a hilltop where over 100 wild Japanese macaques roam freely. You can feed them from inside a shelter while enjoying panoramic views of Kyoto. It\'s charming, interactive, and the views alone are worth the climb. Tenryu-ji Temple: a UNESCO World Heritage Site with one of the finest landscape gardens in Japan. The Sogenchi Garden, designed by the legendary Muso Soseki in the 14th century, artfully incorporates the Arashiyama mountains as borrowed scenery (shakkei).',
        tips: 'Monkey Park: the hike up is moderate but involves stairs. The monkeys are wild but accustomed to humans. Don\'t make direct eye contact or show your teeth (they interpret it as aggression). Tenryu-ji: enter through the north gate to access the garden and exit toward the Bamboo Grove.',
        duration: '1.5-2 hours',
        priceRange: '$ (550 yen for Monkey Park, 500 yen for Tenryu-ji garden)',
        mapsLink: 'https://www.google.com/maps/place/Iwatayama+Monkey+Park/@35.0102,135.6745,16z',
      },
      {
        time: '11:30',
        endTime: '13:00',
        type: 'activity',
        name: 'Togetsukyo Bridge Area',
        nameJa: '渡月橋',
        category: 'Scenic Landmark',
        neighborhood: 'Arashiyama',
        address: 'Togetsukyo Bridge, Arashiyama, Ukyo-ku, Kyoto',
        lat: 35.0131,
        lng: 135.6778,
        description:
          'The graceful Togetsukyo ("Moon Crossing") Bridge spans the Hozu River and is the defining landmark of Arashiyama. The wooden railing bridge set against the forested mountains is one of Kyoto\'s most beloved views, changing character with every season. Walk across, linger along the riverbanks, and take in the scene. The area around the bridge has plenty of small shops and food stalls perfect for a leisurely lunch.',
        tips: 'Walk to the middle of the bridge for the best views in both directions. The south bank of the river is generally less crowded and offers good perspectives of the bridge with the mountains behind.',
        duration: '1-1.5 hours (including lunch)',
        priceRange: 'Free',
        mapsLink: 'https://www.google.com/maps/place/Togetsukyo+Bridge/@35.0131,135.6778,17z',
      },
      {
        time: '13:00',
        endTime: '14:00',
        type: 'meal',
        name: 'Lunch in Arashiyama',
        category: 'Lunch',
        neighborhood: 'Arashiyama',
        lat: 35.0145,
        lng: 135.6770,
        description:
          'Arashiyama\'s main street near the bridge is lined with restaurants and street food vendors. Try warabi mochi (a jelly-like mochi dusted with kinako powder), yuba (tofu skin, a Kyoto delicacy), or a matcha soft serve from one of the many green tea shops. For a sit-down meal, look for a soba or udon restaurant with river views.',
        tips: 'The restaurants directly on the main tourist drag tend to be overpriced. Walk one block back for better value and quality.',
        priceRange: '$-$$',
        mapsLink: 'https://www.google.com/maps/place/Arashiyama/@35.0145,135.677,16z',
      },
      {
        time: '19:00',
        endTime: '21:00',
        type: 'meal',
        name: 'Dinner in Central Kyoto',
        category: 'Dinner',
        neighborhood: 'Central Kyoto',
        lat: 35.0040,
        lng: 135.7690,
        description:
          'Head back to central Kyoto for dinner. The area around Shijo-Karasuma and Kawaramachi offers endless options. Consider trying a Kyoto-style izakaya for obanzai (traditional Kyoto home cooking), or seek out a yakitori spot for perfectly grilled chicken skewers paired with cold Japanese beer.',
        tips: 'Kyoto restaurants tend to close earlier than Tokyo. Aim to be seated by 19:30 at the latest. Many places have last order at 20:30 or 21:00.',
        priceRange: '$$',
        mapsLink: 'https://www.google.com/maps/place/Kawaramachi,+Kyoto/@35.004,135.769,16z',
      },
    ],
  },

  // ===== DAY 5 — April 28 (Monday): Kyoto Cultural Day =====
  {
    date: '2026-04-28',
    dayNumber: 5,
    dayOfWeek: 'Monday',
    title: 'Kyoto Cultural Day',
    city: 'Kyoto',
    hotel: {
      name: 'The Blossom Kyoto',
      address: '587 Ichinosencho, Shimogyo-ku, Kyoto 600-8233',
    },
    entries: [
      {
        time: '09:00',
        endTime: '10:30',
        type: 'activity',
        name: 'Kinkaku-ji (Golden Pavilion)',
        nameJa: '金閣寺（鹿苑寺）',
        category: 'Temple',
        neighborhood: 'Kita-ku',
        address: '1 Kinkakujicho, Kita-ku, Kyoto 603-8361',
        lat: 35.0394,
        lng: 135.7292,
        description:
          'The Golden Pavilion is one of the most stunning sights in Japan: a three-story Zen Buddhist temple completely covered in gold leaf, reflected in the mirror-still waters of Kyokochi Pond. Originally built as a retirement villa for Shogun Ashikaga Yoshimitsu in 1397, the pavilion and its surrounding gardens represent the height of Muromachi-period refinement. Every angle reveals a different composition, and the reflection on a calm day is breathtaking. The surrounding strolling garden is meticulously maintained and beautiful in its own right.',
        tips: 'Arrive right when it opens at 9:00 AM. The first 30 minutes are the most peaceful. The ticket is a beautiful calligraphy charm (ofuda) — keep it as a souvenir. The best photo spot is immediately upon entering, at the edge of the pond. A second, less-known vantage point is from the hillside path behind the pavilion.',
        duration: '1-1.5 hours',
        priceRange: '$ (400 yen admission)',
        mapsLink: 'https://www.google.com/maps/place/Kinkaku-ji/@35.0394,135.7292,17z',
      },
      {
        time: '11:00',
        endTime: '12:30',
        type: 'activity',
        name: 'Tea Ceremony Experience',
        nameJa: '茶道体験',
        category: 'Cultural Experience',
        neighborhood: 'Central Kyoto',
        lat: 35.0116,
        lng: 135.7681,
        description:
          'Participate in a traditional Japanese tea ceremony (chado or sado), one of the most refined cultural practices in Japan. In a serene tatami room, a tea master will guide you through the ritualized preparation and drinking of matcha. Every movement — from the way the tea bowl is turned to the placement of the whisk — carries meaning accumulated over centuries of practice. This is meditation in motion, and tasting the frothy, vibrant green matcha paired with a delicate wagashi sweet is a sensory highlight of any visit to Kyoto.',
        tips: 'Several venues in central Kyoto offer English-language tea ceremony experiences lasting 45-75 minutes. Book in advance, especially during peak season. Wear socks (you will remove your shoes). Sitting in seiza (kneeling) can be uncomfortable — most hosts now offer chairs as an alternative. Let the experience wash over you; there is no wrong way to receive tea as a guest.',
        duration: '1-1.5 hours',
        priceRange: '$$ (typically 2,000-5,000 yen)',
        mapsLink: 'https://www.google.com/maps/place/Kyoto/@35.0116,135.7681,14z',
      },
      {
        time: '13:00',
        endTime: '16:00',
        type: 'exploration-zone',
        name: 'Nishiki Market',
        nameJa: '錦市場',
        category: 'Market / Food',
        neighborhood: 'Nakagyo-ku',
        address: 'Nishiki Market, Nakagyo-ku, Kyoto 604-8054',
        lat: 35.0050,
        lng: 135.7649,
        description:
          'Known as "Kyoto\'s Kitchen," Nishiki Market is a covered shopping street stretching about 400 meters with over 100 shops and stalls that have served the city for over 400 years. This is where Kyoto chefs shop and where travelers can taste the best of Kyoto\'s culinary traditions. Stalls sell tsukemono (pickled vegetables in stunning variety), fresh tofu, yuba, mochi, grilled seafood, Japanese knives, ceramics, and seasonal specialties. The energy is lively but the pace is more refined than Tsukiji — this is Kyoto, after all.',
        isExplorationZone: true,
        howToApproach:
          'Enter from the east end (near Teramachi-dori) and work your way west. Walk the entire length first to get a sense of the offerings, then double back to the stalls that caught your eye. Graze as you go — buy small portions from multiple stalls rather than one big meal.',
        practicalNotes:
          'The market is open roughly 9:00 AM to 5:00 PM, though some shops close earlier. Some stalls have implemented rules against eating while walking (tabearuki) — look for small standing counters near each stall. Cash is still preferred at many stalls, though card acceptance is growing.',
        tips: 'Don\'t miss the tamago (dashimaki) specialists, the tsukemono (pickle) shops where you can taste before buying, or the sesame shop where they grind fresh goma. Japanese kitchen knives make excellent souvenirs — Aritsugu has been selling them since 1560.',
        duration: '2-3 hours',
        priceRange: '$ - $$',
        mapsLink: 'https://www.google.com/maps/place/Nishiki+Market/@35.005,135.7649,17z',
        curatedPicks: [
          {
            name: 'Aritsugu',
            nameJa: '有次',
            description: 'One of the most renowned knife shops in Japan, operating since 1560. The hand-forged knives are works of art and functional tools that will last a lifetime.',
            whatToOrder: 'A petty knife or santoku knife — they will engrave your name in Japanese.',
          },
          {
            name: 'Nishiki Tsukemono Stalls',
            description: 'Multiple stalls selling Kyoto-style pickled vegetables in dazzling arrays of colors and flavors. Free tastings at most. Shibazuke (purple shiso pickled eggplant) is a Kyoto signature.',
            whatToOrder: 'Shibazuke and senmaizuke (thin-sliced pickled turnip)',
          },
          {
            name: 'Konnamonjya',
            nameJa: 'こんなもんじゃ',
            description: 'A tofu donut shop connected to a traditional tofu maker. The donuts are light, not too sweet, and made with fresh soymilk.',
            whatToOrder: 'Tofu donuts and fresh soymilk',
          },
        ],
      },
      {
        time: '18:30',
        endTime: '21:00',
        type: 'meal',
        name: 'Dinner in Kawaramachi / Pontocho',
        category: 'Dinner',
        neighborhood: 'Kawaramachi / Pontocho',
        lat: 35.0050,
        lng: 135.7700,
        description:
          'Your last evening in Kyoto. Make it count with a return to the Kawaramachi or Pontocho area, or try somewhere new. Consider splurging on a multi-course kaiseki dinner to experience Kyoto\'s culinary pinnacle — dishes composed with artistic precision, reflecting the season in every ingredient and presentation. Alternatively, a cozy riverside izakaya with cold sake and grilled yakitori is an equally perfect way to close your Kyoto chapter.',
        tips: 'If you want kaiseki, book well in advance. Many excellent kaiseki restaurants in Kyoto offer a more affordable lunch kaiseki, but the full evening experience is special. Pontocho riverside terrace dining is particularly magical at night with the lanterns reflected on the Kamogawa.',
        priceRange: '$$-$$$$',
        mapsLink: 'https://www.google.com/maps/place/Kawaramachi,+Kyoto/@35.005,135.77,16z',
      },
    ],
  },

  // ===== DAY 6 — April 29 (Tuesday): Kyoto to Tokyo =====
  {
    date: '2026-04-29',
    dayNumber: 6,
    dayOfWeek: 'Tuesday',
    title: 'Kyoto to Tokyo',
    city: 'Kyoto / Tokyo',
    hotel: {
      name: 'Keio Plaza Hotel Tokyo',
      address: '2-2-1 Nishi-Shinjuku, Shinjuku-ku, Tokyo 160-8330',
      checkIn: '14:00',
      checkOut: '11:00',
    },
    entries: [
      {
        time: '08:00',
        endTime: '10:00',
        type: 'free-time',
        name: 'Relaxed Morning / Remaining Kyoto Sights',
        category: 'Free Time',
        neighborhood: 'Kyoto',
        lat: 35.0116,
        lng: 135.7681,
        description:
          'Use this morning to revisit a favorite spot, catch something you missed, or simply enjoy a slow start. Consider a walk along the Philosopher\'s Path (Tetsugaku no Michi), visiting Nanzen-ji Temple with its massive gate and serene aqueduct, or just savoring one more Kyoto coffee and pastry. This is your farewell to Kyoto — soak it in.',
        tips: 'The Philosopher\'s Path in the morning is peaceful and beautiful, following a canal lined with cherry trees (the blossoms may still linger in late April). Nanzen-ji\'s grounds are free to explore and the brick aqueduct makes for great photos.',
        duration: '2 hours',
        mapsLink: 'https://www.google.com/maps/place/Kyoto/@35.0116,135.7681,14z',
      },
      {
        time: '10:30',
        endTime: '13:00',
        type: 'transit',
        name: 'Shinkansen to Tokyo',
        nameJa: '東海道新幹線',
        category: 'Bullet Train',
        neighborhood: 'Kyoto Station / Tokyo Station',
        address: 'Kyoto Station, Shimogyo-ku, Kyoto',
        lat: 34.9856,
        lng: 135.7584,
        description:
          'Board the Nozomi Shinkansen from Kyoto Station back to Tokyo Station. Grab an ekiben (station bento) and enjoy the reverse journey. If you missed Mount Fuji on the way down, try the left side of the train (A/B seats) heading back to Tokyo.',
        tips: 'Kyoto Station itself is an architectural marvel worth arriving early to explore. The Isetan department store inside has an excellent depachika (basement food hall) for last-minute Kyoto souvenirs and sweets.',
        duration: '~2h 15m',
        priceRange: '$$$',
        mapsLink: 'https://www.google.com/maps/place/Kyoto+Station/@34.9856,135.7584,17z',
      },
      {
        time: '14:00',
        endTime: '15:00',
        type: 'hotel',
        name: 'Check in at Keio Plaza Hotel Tokyo',
        nameJa: '京王プラザホテル',
        category: 'Hotel',
        neighborhood: 'Nishi-Shinjuku',
        address: '2-2-1 Nishi-Shinjuku, Shinjuku-ku, Tokyo 160-8330',
        lat: 35.6906,
        lng: 139.6950,
        description:
          'A grand, established hotel in the heart of West Shinjuku\'s skyscraper district. The Keio Plaza offers spacious rooms (by Tokyo standards), excellent service, and a prime location just minutes from Shinjuku Station. The hotel has multiple restaurants, a pool, and views of the Tokyo skyline. It\'s a solid, reliable base for your four nights of Tokyo exploration.',
        tips: 'Request a higher floor for better views. The hotel is directly connected to Shinjuku Station via underground passages on rainy days. The south tower tends to have better views of the park and city.',
        mapsLink: 'https://www.google.com/maps/place/Keio+Plaza+Hotel+Tokyo/@35.6906,139.695,17z',
      },
      {
        time: '18:00',
        endTime: '21:30',
        type: 'exploration-zone',
        name: 'Shinjuku & Omoide Yokocho',
        nameJa: '新宿・思い出横丁',
        category: 'Neighborhood Exploration',
        neighborhood: 'Shinjuku',
        address: 'Omoide Yokocho, 1 Chome Nishishinjuku, Shinjuku-ku, Tokyo',
        lat: 35.6938,
        lng: 139.6989,
        description:
          'Welcome back to Tokyo with one of its most atmospheric evenings. Omoide Yokocho ("Memory Lane," also irreverently called Piss Alley) is a warren of tiny, smoke-filled yakitori bars and izakayas crammed into narrow alleys next to Shinjuku Station. Each stall seats maybe 6-10 people at a counter, grills blazing, beer flowing, salarymen unwinding. The atmosphere is raw, electric, and utterly authentic. Beyond Omoide Yokocho, Shinjuku at night is a sensory overload of neon, crowds, and energy.',
        isExplorationZone: true,
        howToApproach:
          'Start at Omoide Yokocho (just northwest of Shinjuku Station\'s west exit). Walk through both main alleys, pick a stall that looks lively, sit down, and order yakitori and a beer. After dinner, walk east through the station underpass to Kabukicho and the east side of Shinjuku for the full neon experience.',
        practicalNotes:
          'Many Omoide Yokocho stalls are cash only. Some have a small seating charge (otoshi). Don\'t be intimidated by the tight quarters — point at what the person next to you is eating if you\'re unsure what to order. Stalls typically open from late afternoon until around 23:00 or midnight.',
        tips: 'Order a mix of yakitori varieties — negima (chicken and green onion), tsukune (chicken meatball), and kawa (chicken skin) are classics. Pair with a cold Asahi or highball. Don\'t miss the grilled pork organs if you\'re feeling adventurous.',
        duration: '2-3 hours',
        priceRange: '$-$$',
        mapsLink: 'https://www.google.com/maps/place/Omoide+Yokocho/@35.6938,139.6989,18z',
        curatedPicks: [
          {
            name: 'Omoide Yokocho Yakitori Stalls',
            nameJa: '思い出横丁',
            description: 'Dozens of tiny counters grilling yakitori over charcoal. Pick any stall with open seats — they are all good. The experience is the attraction as much as the food.',
            whatToOrder: 'Assorted yakitori set, cold draft beer, and grilled mochi',
          },
          {
            name: 'Kabukicho',
            nameJa: '歌舞伎町',
            description: 'Tokyo\'s most famous entertainment district. The giant neon signs, Godzilla head peering over a building, and sheer human density make it worth a walkthrough.',
          },
        ],
      },
    ],
  },

  // ===== DAY 7 — April 30 (Wednesday): Tokyo Day 1 =====
  {
    date: '2026-04-30',
    dayNumber: 7,
    dayOfWeek: 'Wednesday',
    title: 'Tokyo Day 1 — Shibuya & Harajuku',
    city: 'Tokyo',
    hotel: {
      name: 'Keio Plaza Hotel Tokyo',
      address: '2-2-1 Nishi-Shinjuku, Shinjuku-ku, Tokyo 160-8330',
    },
    entries: [
      {
        time: '09:00',
        endTime: '10:30',
        type: 'activity',
        name: 'Meiji Shrine',
        nameJa: '明治神宮',
        category: 'Shrine',
        neighborhood: 'Harajuku / Yoyogi',
        address: '1-1 Yoyogikamizonocho, Shibuya-ku, Tokyo 151-8557',
        lat: 35.6764,
        lng: 139.6993,
        description:
          'A vast Shinto shrine set within 170 acres of dense, old-growth forest in the heart of Tokyo. Walking through the towering torii gate and along the wide gravel paths feels like entering a cathedral of nature. The shrine was built in 1920 to honor Emperor Meiji and Empress Shoken, and the surrounding forest was planted by volunteers from across Japan with over 100,000 trees. The contrast between this serene forest and the urban chaos of Harajuku just meters away is startling and wonderful.',
        tips: 'Enter from the main south entrance near Harajuku Station for the full approach experience. Look for the wall of sake barrels (kazaridaru) and wine barrels donated by Burgundy — a beautiful symbol of Japan-France friendship. If you visit on a weekend, you may witness a traditional Shinto wedding procession.',
        duration: '1-1.5 hours',
        priceRange: 'Free',
        mapsLink: 'https://www.google.com/maps/place/Meiji+Jingu/@35.6764,139.6993,15z',
      },
      {
        time: '10:30',
        endTime: '13:00',
        type: 'exploration-zone',
        name: 'Harajuku & Omotesando',
        nameJa: '原宿・表参道',
        category: 'Neighborhood Exploration',
        neighborhood: 'Harajuku',
        address: 'Takeshita-dori, Jingumae, Shibuya-ku, Tokyo',
        lat: 35.6702,
        lng: 139.7026,
        description:
          'Harajuku is Tokyo\'s youth culture epicenter — a kaleidoscope of fashion, street food, and creative energy. Takeshita-dori is the famous narrow street packed with colorful shops, crepe stands, and kawaii culture. A sharp contrast awaits on Omotesando, the tree-lined boulevard often called Tokyo\'s Champs-Elysees, with its architect-designed flagship stores from Prada, Dior, and Tokyu Plaza.',
        isExplorationZone: true,
        howToApproach:
          'Start with Takeshita-dori for the sensory overload, then walk south to the more refined Omotesando boulevard. Duck into the backstreets (Ura-Harajuku) between Takeshita-dori and Omotesando for independent boutiques, vintage shops, and quieter cafes.',
        practicalNotes:
          'Takeshita-dori is extremely crowded on weekends. The street is one-way pedestrian traffic during peak hours. The backstreets of Ura-Harajuku offer a much more chill experience with great independent shops and cafes.',
        tips: 'Don\'t miss the Omotesando Hills shopping complex designed by Tadao Ando, or the Tokyu Plaza Harajuku rooftop with its kaleidoscope mirror entrance.',
        duration: '2-3 hours',
        priceRange: '$-$$$',
        mapsLink: 'https://www.google.com/maps/place/Takeshita+Street/@35.6702,139.7026,17z',
        curatedPicks: [
          {
            name: 'Takeshita-dori',
            nameJa: '竹下通り',
            description: 'The iconic Harajuku street bursting with colorful fashion, crepes, rainbow cotton candy, and youth culture energy. Sensory overload in the best way.',
          },
          {
            name: 'Omotesando',
            nameJa: '表参道',
            description: 'An elegant tree-lined avenue with architecturally stunning flagship stores. The buildings themselves are worth the walk — Prada, Tod\'s, and Dior are standouts.',
          },
          {
            name: 'Cat Street (Kyuuya Kaido)',
            nameJa: 'キャットストリート',
            description: 'A winding backstreet connecting Harajuku and Shibuya, lined with independent boutiques, streetwear shops, cafes, and vintage stores.',
          },
        ],
      },
      {
        time: '13:00',
        endTime: '14:00',
        type: 'meal',
        name: 'Lunch in Harajuku / Shibuya',
        category: 'Lunch',
        neighborhood: 'Harajuku / Shibuya',
        lat: 35.6640,
        lng: 139.6980,
        description:
          'Refuel in the area with endless options. Harajuku is famous for its street food (crepes, takoyaki) but also has excellent sit-down restaurants. For something special, try a Japanese curry house, a gyudon (beef bowl) spot, or seek out the legendary Afuri ramen in nearby Ebisu for their yuzu shio (citrus salt) ramen.',
        tips: 'Shibuya Hikarie or Shibuya Stream both have excellent restaurant floors with a range of cuisines if you want air conditioning and easy choices.',
        priceRange: '$-$$',
        mapsLink: 'https://www.google.com/maps/place/Shibuya/@35.664,139.698,15z',
      },
      {
        time: '14:00',
        endTime: '17:30',
        type: 'activity',
        name: 'Shibuya Exploration',
        nameJa: '渋谷',
        category: 'Neighborhood',
        neighborhood: 'Shibuya',
        address: 'Shibuya Scramble Crossing, Shibuya-ku, Tokyo',
        lat: 35.6595,
        lng: 139.7004,
        description:
          'Shibuya is the beating heart of modern Tokyo. Start at the legendary Shibuya Scramble Crossing — the world\'s busiest pedestrian intersection, where up to 3,000 people cross simultaneously when the lights change. Head up to the Shibuya Sky observation deck (230 meters high) for jaw-dropping 360-degree views, or browse the massive Shibuya 109 department store. Visit the Hachiko statue outside the station, honoring the loyal dog who waited for his owner every day for nearly ten years.',
        tips: 'The Starbucks at the Shibuya Tsutaya building (overlooking the crossing) offers a great vantage point, but expect a line. Shibuya Sky sunset tickets sell out — book in advance. The Mag\'s Park rooftop (free) also offers a good view of the crossing from above.',
        duration: '2-3 hours',
        priceRange: '$-$$$ (Shibuya Sky ~2,000 yen)',
        mapsLink: 'https://www.google.com/maps/place/Shibuya+Crossing/@35.6595,139.7004,17z',
      },
      {
        time: '18:30',
        endTime: '20:30',
        type: 'meal',
        name: 'Hikiniku to Come',
        nameJa: '挽肉と米',
        category: 'Dinner (Confirmed Reservation)',
        neighborhood: 'Shibuya',
        address: 'Shibuya, Tokyo',
        lat: 35.6614,
        lng: 139.7010,
        description:
          'A confirmed reservation at one of Tokyo\'s most talked-about restaurants. Hikiniku to Come ("Minced Meat and Rice") serves one thing and serves it perfectly: freshly ground hamburger patties grilled over charcoal right before your eyes, paired with unlimited bowls of perfectly cooked Japanese rice. The concept is deceptively simple but the execution is extraordinary. The meat is sourced from premium Japanese beef, each patty hand-formed and grilled to a precise medium-rare, and the rice is a revelation — fluffy, fragrant, and endlessly replenishable.',
        tips: 'This reservation is confirmed for 6:30 PM. Arrive on time — they run a tight ship. The meal format is set: you will receive multiple rounds of patties with rice refills. Say "okawari" for more rice. The TKG (tamago kake gohan — raw egg over rice) finish is not to be missed.',
        duration: '1-1.5 hours',
        priceRange: '$$',
        reservationId: 'Confirmed - 6:30 PM',
        mapsLink: 'https://www.google.com/maps/search/Hikiniku+to+Come+Shibuya/@35.6614,139.701,16z',
      },
      {
        time: '20:30',
        endTime: '22:30',
        type: 'free-time',
        name: 'Evening Shibuya Exploration',
        category: 'Free Time',
        neighborhood: 'Shibuya',
        lat: 35.6595,
        lng: 139.7004,
        description:
          'After dinner, soak in Shibuya at night. The neon signs blaze, the crossing pulses with energy, and the surrounding streets come alive. Walk through Center-gai, peek into the music shops and arcades, or find a cozy bar for a nightcap. Nonbei Yokocho ("Drunkard\'s Alley"), a tiny cluster of intimate bars near the station, offers a completely different vibe from the main streets.',
        tips: 'Nonbei Yokocho is Shibuya\'s answer to Golden Gai — tiny bars seating 5-8 people. Some have cover charges, so ask before sitting down.',
        duration: '1-2 hours',
        mapsLink: 'https://www.google.com/maps/place/Shibuya/@35.6595,139.7004,16z',
      },
    ],
  },

  // ===== DAY 8 — May 1 (Thursday): Tokyo Day 2 =====
  {
    date: '2026-05-01',
    dayNumber: 8,
    dayOfWeek: 'Thursday',
    title: 'Tokyo Day 2 — Asakusa, TeamLab & Golden Gai',
    city: 'Tokyo',
    hotel: {
      name: 'Keio Plaza Hotel Tokyo',
      address: '2-2-1 Nishi-Shinjuku, Shinjuku-ku, Tokyo 160-8330',
    },
    entries: [
      {
        time: '09:00',
        endTime: '11:30',
        type: 'activity',
        name: 'Senso-ji Temple & Nakamise-dori',
        nameJa: '浅草寺・仲見世通り',
        category: 'Temple / Shopping Street',
        neighborhood: 'Asakusa',
        address: '2-3-1 Asakusa, Taito-ku, Tokyo 111-0032',
        lat: 35.7148,
        lng: 139.7967,
        description:
          'Tokyo\'s oldest and most visited temple, founded in 628 AD. Approach through the iconic Kaminarimon ("Thunder Gate") with its massive red lantern, then walk the bustling Nakamise-dori shopping street — a 250-meter corridor of stalls selling traditional snacks, souvenirs, fans, and crafts that has been serving visitors for centuries. The temple grounds include the imposing five-story pagoda, the main hall with its dramatic incense cauldron (wave the smoke over yourself for good health), and the serene inner garden.',
        tips: 'Arriving early (before 9:30 AM) lets you experience Nakamise-dori before it reaches peak crowding. Buy fresh ningyo-yaki (custard-filled cakes shaped like dolls) and age-manju (fried sweet buns) from the stalls. Pull an omikuji (fortune slip) at the temple — if you get bad luck (kyo), tie it to the designated rack and leave the bad fortune behind.',
        duration: '2-2.5 hours',
        priceRange: 'Free (temple); $ (shopping/snacks)',
        mapsLink: 'https://www.google.com/maps/place/Senso-ji+Temple/@35.7148,139.7967,17z',
      },
      {
        time: '11:30',
        endTime: '12:30',
        type: 'meal',
        name: 'Lunch in Asakusa',
        category: 'Lunch',
        neighborhood: 'Asakusa',
        lat: 35.7120,
        lng: 139.7940,
        description:
          'Asakusa has wonderful traditional restaurants. Try tempura (the neighborhood is famous for it), unagi (freshly grilled eel over rice), or a steaming bowl of soba noodles. The streets west of Senso-ji have dozens of long-established restaurants that have been perfecting their craft for generations.',
        tips: 'Look for places with lines of Japanese people — they know the good spots. Asakusa is one of the best neighborhoods in Tokyo for traditional tempura. Daikokuya is legendary but always has a long wait; nearby alternatives are equally excellent.',
        priceRange: '$$',
        mapsLink: 'https://www.google.com/maps/place/Asakusa,+Taito+City,+Tokyo/@35.712,139.794,16z',
      },
      {
        time: '14:00',
        endTime: '17:00',
        type: 'activity',
        name: 'TeamLab',
        nameJa: 'チームラボ',
        category: 'Digital Art Museum',
        neighborhood: 'Toyosu / Azabudai',
        address: 'TeamLab Borderless, Azabudai Hills, Minato-ku, Tokyo',
        lat: 35.6599,
        lng: 139.7394,
        description:
          'TeamLab Borderless is a mind-bending immersive digital art museum where massive digital projections flow from room to room, responding to your presence and touch. Waterfalls cascade down walls, flowers bloom and scatter at your feet, and entire rooms transform into infinite universes of light and color. It is unlike anything you have experienced before — part art gallery, part playground, part meditation. Allow yourself to wander, get lost, and be surprised.',
        tips: 'Buy tickets well in advance — they sell out, especially during Golden Week. Wear light-colored clothing (the projections show up beautifully on white). Wear comfortable shoes as you will be walking and standing on mirrors. Avoid short skirts (mirror floors). Budget at least 2-3 hours. The EN Tea House inside serves tea in bowls where digital flowers bloom.',
        duration: '2-3 hours',
        priceRange: '$$ (3,800 yen)',
        mapsLink: 'https://www.google.com/maps/search/TeamLab+Borderless+Tokyo/@35.6599,139.7394,15z',
      },
      {
        time: '19:00',
        endTime: '22:00',
        type: 'exploration-zone',
        name: 'Golden Gai',
        nameJa: '新宿ゴールデン街',
        category: 'Bar District',
        neighborhood: 'Shinjuku',
        address: '1 Chome Kabukicho, Shinjuku-ku, Tokyo 160-0021',
        lat: 35.6940,
        lng: 139.7036,
        description:
          'A legendary labyrinth of roughly 200 tiny bars crammed into six narrow alleys in the shadow of Shinjuku\'s skyscrapers. Each bar is barely bigger than a closet, seating 5-10 people at most, and each has its own personality — from jazz dens to horror-themed hideaways to bars dedicated to a single type of whisky. This is where Tokyo\'s creative class has been drinking since the post-war era: writers, filmmakers, musicians, and misfits. The atmosphere is intimate, slightly chaotic, and completely unique to Tokyo.',
        isExplorationZone: true,
        howToApproach:
          'Walk through all six alleys first to get a feel for the vibe. Many bars have signs or themes visible from outside. If a bar looks appealing and has seats, duck in. Some bars have cover charges (usually 500-1,000 yen) — always ask before sitting down. Don\'t take photos inside without asking, and be respectful of the intimate space.',
        practicalNotes:
          'Some bars are regulars-only or may turn away non-Japanese speakers, but the majority are welcoming to visitors. Cover charges are common and typically include a small snack (otoshi). Drinks are generally 500-1,000 yen each. Cash is essential — almost nowhere takes cards. Most bars open around 19:00-20:00 and stay open until the small hours.',
        tips: 'If you\'re turned away from one bar, don\'t take it personally — just try the next one. The upper floors of some buildings have hidden gems. Ask your bartender for recommendations for the next bar; Golden Gai regulars love sharing their favorites.',
        duration: '2-3 hours',
        priceRange: '$$',
        mapsLink: 'https://www.google.com/maps/place/Golden+Gai/@35.694,139.7036,18z',
        curatedPicks: [
          {
            name: 'Albatross',
            nameJa: 'アルバトロス',
            description: 'A three-story bar (large by Golden Gai standards) with a gothic chandelier-lit interior, welcoming to foreigners, and known for strong cocktails.',
          },
          {
            name: 'Bar Plastic Model',
            description: 'A quirky bar decorated floor to ceiling with assembled plastic models (Gundam, cars, robots). The owner is friendly and the atmosphere is wonderfully nerdy.',
          },
        ],
      },
    ],
  },

  // ===== DAY 9 — May 2 (Friday): Tokyo Day 3 =====
  {
    date: '2026-05-02',
    dayNumber: 9,
    dayOfWeek: 'Friday',
    title: 'Tokyo Day 3 — Flexible Exploration',
    city: 'Tokyo',
    hotel: {
      name: 'Keio Plaza Hotel Tokyo',
      address: '2-2-1 Nishi-Shinjuku, Shinjuku-ku, Tokyo 160-8330',
    },
    entries: [
      {
        time: '09:00',
        endTime: '17:00',
        type: 'free-time',
        name: 'Flexible Day — Choose Your Adventure',
        category: 'Free Time / Exploration',
        neighborhood: 'Various',
        lat: 35.6812,
        lng: 139.7671,
        description:
          'Your final full day in Tokyo is deliberately unstructured — follow your curiosity, revisit a favorite neighborhood, or explore somewhere entirely new. After a week of incredible sights, this is your day to go where the wind takes you. Below are four excellent options, each offering a completely different Tokyo experience.',
        tips: 'Don\'t try to do all four options. Pick one or two that resonate with your mood and energy level. This is your last full day — balance exploration with savoring the moments.',
        duration: 'Full day',
        mapsLink: 'https://www.google.com/maps/place/Tokyo/@35.6812,139.7671,12z',
      },
      {
        time: '09:00',
        endTime: '12:00',
        type: 'activity',
        name: 'Option A: Akihabara',
        nameJa: '秋葉原',
        category: 'Neighborhood',
        neighborhood: 'Akihabara',
        address: 'Akihabara, Taito-ku, Tokyo',
        lat: 35.7023,
        lng: 139.7745,
        description:
          'Tokyo\'s "Electric Town" is the global capital of otaku culture — anime, manga, video games, and electronics. Multi-story arcades with rhythm games and crane machines, shops selling rare figurines and vintage game consoles, maid cafes, and electronics stores stacked to the ceiling. Even if you\'re not into anime, the sheer density of nerd culture is fascinating. Yodobashi Camera Akiba is an 8-floor electronics paradise.',
        tips: 'The retro game stores (Super Potato, Traders) are goldmines for vintage gaming fans. The arcades are incredibly fun — try a rhythm game or purikura (photo booth). Visit on a weekday for slightly fewer crowds.',
        duration: '2-4 hours',
        priceRange: '$-$$',
        mapsLink: 'https://www.google.com/maps/place/Akihabara/@35.7023,139.7745,16z',
      },
      {
        time: '09:00',
        endTime: '12:00',
        type: 'activity',
        name: 'Option B: Ueno Park & Museums',
        nameJa: '上野恩賜公園',
        category: 'Park / Museum',
        neighborhood: 'Ueno',
        address: 'Uenokoen, Taito-ku, Tokyo 110-0007',
        lat: 35.7146,
        lng: 139.7714,
        description:
          'Ueno Park is Tokyo\'s cultural heart, home to the Tokyo National Museum (Japan\'s oldest and largest museum with an incredible collection of Japanese art and artifacts), the National Museum of Western Art (a Le Corbusier-designed UNESCO site), and several other museums. The park itself is beautiful, with a large pond (Shinobazu Pond) covered in lotus flowers, a small zoo, and the Toshogu Shrine hidden among the trees.',
        tips: 'The Tokyo National Museum alone could fill an entire day. If time is limited, focus on the Honkan (Japanese Gallery) for the highlights. Ameyoko market street runs along the south side of the park — a lively, affordable shopping street with street food, dried goods, and clothing stalls.',
        duration: '2-4 hours',
        priceRange: '$ (museum admission ~1,000 yen)',
        mapsLink: 'https://www.google.com/maps/place/Ueno+Park/@35.7146,139.7714,16z',
      },
      {
        time: '09:00',
        endTime: '12:00',
        type: 'activity',
        name: 'Option C: Yanaka',
        nameJa: '谷中',
        category: 'Neighborhood',
        neighborhood: 'Yanaka',
        address: 'Yanaka, Taito-ku, Tokyo',
        lat: 35.7254,
        lng: 139.7672,
        description:
          'One of Tokyo\'s best-kept secrets. Yanaka is a quiet, residential neighborhood that survived the war and earthquakes, preserving a pre-war atmosphere that has vanished from most of Tokyo. Narrow lanes wind past small temples, traditional wooden houses, and independent shops. Yanaka Ginza, the main shopping street, is a charming retro lane with local butchers, bakeries, and craft shops. The area attracts cats, artists, and people who prefer their Tokyo at a slower pace.',
        tips: 'Start at Nippori Station and walk downhill through the Yanaka Cemetery (peaceful, not creepy) toward Yanaka Ginza. The sunset view from the top of the Yanaka Ginza steps (Yuyake Dandan) is beloved by locals. Try a menchi katsu (fried meat croquette) from the shops along the street.',
        duration: '2-3 hours',
        priceRange: '$',
        mapsLink: 'https://www.google.com/maps/place/Yanaka,+Taito+City,+Tokyo/@35.7254,139.7672,16z',
      },
      {
        time: '09:00',
        endTime: '12:00',
        type: 'activity',
        name: 'Option D: Shimokitazawa',
        nameJa: '下北沢',
        category: 'Neighborhood',
        neighborhood: 'Shimokitazawa',
        address: 'Shimokitazawa, Setagaya-ku, Tokyo',
        lat: 35.6615,
        lng: 139.6684,
        description:
          'Tokyo\'s bohemian neighborhood, beloved for its vintage clothing stores, independent coffee shops, small live music venues, and counter-culture vibe. Shimokitazawa (affectionately "Shimokita") feels like a small town within the megacity — the streets are narrow and car-free, the pace is unhurried, and the style is effortlessly cool. It\'s the antidote to Shibuya\'s overwhelming energy.',
        tips: 'The Bonus Track area (a newer development of small independent shops and eateries) is excellent. The vintage and secondhand clothing shops here are some of the best in Tokyo — prices are fair and the selection is curated. Great coffee shops are everywhere.',
        duration: '2-3 hours',
        priceRange: '$-$$',
        mapsLink: 'https://www.google.com/maps/place/Shimokitazawa/@35.6615,139.6684,16z',
      },
      {
        time: '18:30',
        endTime: '21:00',
        type: 'meal',
        name: 'Last Big Dinner — Omakase or Special Meal',
        category: 'Dinner',
        neighborhood: 'Shinjuku / Ginza / Shibuya',
        lat: 35.6812,
        lng: 139.7671,
        description:
          'Your final dinner in Japan deserves to be something extraordinary. Consider an omakase sushi experience where the chef selects and prepares each piece of nigiri before you at the counter, adjusting the menu to the day\'s freshest fish. Alternatively, splurge on a wagyu yakiniku (grilled beef) course, a tempura counter experience, or a multi-course teppanyaki dinner. Whatever you choose, let this meal be a celebration of the incredible food journey you\'ve had across Japan.',
        tips: 'For omakase sushi, Ginza and Roppongi have the highest concentration of excellent options. Budget-friendly omakase exists in Tokyo — look for lunch omakase sets or newer restaurants building their reputation. Book as far in advance as possible. If you can, ask your hotel concierge for a recommendation and reservation assistance.',
        priceRange: '$$$-$$$$',
        mapsLink: 'https://www.google.com/maps/place/Tokyo/@35.6812,139.7671,13z',
      },
    ],
  },

  // ===== DAY 10 — May 3 (Saturday): Departure =====
  {
    date: '2026-05-03',
    dayNumber: 10,
    dayOfWeek: 'Saturday',
    title: 'Departure from Tokyo',
    city: 'Tokyo',
    entries: [
      {
        time: '08:00',
        endTime: '10:00',
        type: 'free-time',
        name: 'Last-Minute Shopping or Breakfast',
        category: 'Free Time',
        neighborhood: 'Shinjuku',
        lat: 35.6900,
        lng: 139.6950,
        description:
          'Squeeze in one final Tokyo morning. Grab breakfast at a local kissaten (retro Japanese coffee shop) for thick toast, a hard-boiled egg, and a perfectly brewed cup of coffee — the most civilized way to start a day. Alternatively, hit Shinjuku Station\'s underground shops for last-minute omiyage (souvenirs and gifts). Tokyo Banana, regional Kit-Kats, and beautifully packaged sweets from depachika make perfect gifts.',
        tips: 'Tokyo Station\'s "Tokyo Character Street" and "First Avenue" are excellent for last-minute character goods and snacks. Don-Quijote (Don Quixote) in Shinjuku is open 24 hours and has everything from snacks to electronics to cosmetics at duty-free prices with your passport.',
        duration: '1-2 hours',
        priceRange: '$-$$',
        mapsLink: 'https://www.google.com/maps/place/Shinjuku/@35.69,139.695,15z',
      },
      {
        time: '10:00',
        endTime: '11:30',
        type: 'transit',
        name: 'Transfer to Airport',
        category: 'Airport Transfer',
        neighborhood: 'Shinjuku to NRT/HND',
        lat: 35.6906,
        lng: 139.6950,
        description:
          'Check out of the Keio Plaza and make your way to the airport. For Narita: take the Narita Express (N\'EX) from Shinjuku Station (~90 minutes). For Haneda: take the Keikyu Line or monorail (~45-60 minutes). Allow extra time for weekend and Golden Week crowds — May 3 is Constitution Memorial Day, a national holiday, so transit may be busier than usual.',
        tips: 'Leave at least 3 hours before your flight for international departures. If you have a Japan Rail Pass, use it for the N\'EX. Keep enough yen for the train fare and any last-minute purchases. You can return your Suica/Pasmo card at the airport for a refund of the deposit.',
        duration: '1-1.5 hours',
        mapsLink: 'https://www.google.com/maps/place/Shinjuku+Station/@35.6906,139.695,16z',
      },
      {
        type: 'transit',
        name: 'Depart Tokyo for Chicago',
        category: 'Flight',
        neighborhood: 'Narita / Haneda',
        address: 'Narita International Airport or Haneda Airport, Tokyo',
        lat: 35.7647,
        lng: 140.3864,
        description:
          'Board your United Airlines flight back to Chicago O\'Hare. The return journey takes approximately 11-12 hours and you will arrive the same calendar day due to crossing the International Date Line. Take one last look at Japan from the window, reflect on an extraordinary 11-day journey, and start planning your return. Sayonara — until next time.',
        tips: 'Do your duty-free shopping at the airport after clearing security. Japanese whisky, cosmetics, and specialty snacks make great last-minute purchases. The airport restaurants are surprisingly excellent — don\'t rush through if you have time for one more bowl of ramen.',
        duration: '~12 hours',
        mapsLink: 'https://www.google.com/maps/place/Narita+International+Airport/@35.7647,140.3864,15z',
      },
    ],
  },
];
