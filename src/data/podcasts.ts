export interface PodcastEpisode {
  dayNumber: number;
  title: string;
  date: string;
  description: string;
  duration: string;
  audioSrc: string;
  transcript: string;
}

export const podcastEpisodes: PodcastEpisode[] = [
  // ===== DAY 1 =====
  {
    dayNumber: 1,
    title: 'Day 1: Welcome to Tokyo',
    date: '2026-04-24',
    description: 'Arrival at Haneda, luggage forwarding, settling into Ginza, and your first dinner in Japan.',
    duration: '6:30',
    audioSrc: '/audio/day-1-arrival-tokyo.mp3',
    transcript: `Good morning — or should I say, good afternoon! Welcome to Japan. You made it. After that long flight from Chicago, you're about to step off the plane at Haneda Airport and into one of the most extraordinary cities on Earth.

Today is Day 1, Friday April 24th, and we're keeping things intentionally light. You've just crossed the Pacific, you're running on airplane sleep, and your body has no idea what time it is. That's completely fine. Today is about landing softly, getting settled, and having one great meal.

Here's what's happening: Once you clear immigration and customs at Haneda — which is usually pretty smooth, especially if you have your Visit Japan Web QR code ready — your first stop is the Yamato Transport counter in Terminal 3. This is the luggage forwarding service called takkyubin, and it's one of those things that makes Japan incredible. You're going to ship your big bags directly to The Blossom Kyoto, where they'll be waiting for you when you check in tomorrow. All you need to keep is a carry-on with tonight's essentials — a change of clothes, toiletries, chargers, whatever you need for one night. This has been pre-arranged with the hotel, so the staff at the Yamato counter will handle the forms. It typically costs about 2,000 to 3,000 yen per bag.

With just your carry-ons, getting into the city is a breeze. Take the Keikyu Line from Haneda to Shinagawa Station — that's about 15 minutes — then hop on the JR Yamanote Line one stop to Tokyo Station. Your hotel, the Daiwa Roynet Tokyo Kyobashi PREMIER, is a short walk from Tokyo Station's Yaesu exit. It's a sleek, modern hotel perfectly sandwiched between Tokyo Station and the Ginza district.

Once you check in, take it easy. If you're feeling up for it, the Ginza neighborhood is right at your doorstep — a 10-minute walk south. Ginza is Tokyo's most prestigious district, all wide boulevards, flagship department stores, and incredible restaurants tucked into the side streets. But honestly, don't feel any pressure to explore today. Rest if you need to.

The one thing that IS locked in tonight: dinner at 7 PM at Rare Tendon Ginza Mitsuyoshi. This reservation is under Ben's name. Tendon is a classic Japanese comfort food — a bowl of perfectly fried tempura over fluffy rice, drizzled with a sweet-savory tare sauce. It's the ideal first meal in Japan: satisfying, approachable, and absolutely delicious. The tempura here is incredibly light — none of that heavy, greasy batter. Just a delicate, crispy shell around whatever seasonal ingredients they're featuring.

After dinner, I'd suggest a gentle stroll back to the hotel through the Ginza backstreets. The side streets off the main boulevard have a completely different character at night — small bars glowing through frosted glass, the hum of conversation, maybe the clink of sake cups. It's a beautiful way to take in your first taste of Tokyo without overdoing it.

The most important thing today: don't fight the jet lag too hard. Stay up until a reasonable hour — 9 or 10 PM — then let yourself sleep. Tomorrow is a big day: Tsukiji Market in the morning, then the Shinkansen bullet train to Kyoto. You'll want your energy.

Welcome to Japan. You're going to love it here. Get some rest tonight — the adventure starts for real tomorrow.`,
  },

  // ===== DAY 2 =====
  {
    dayNumber: 2,
    title: 'Day 2: Tsukiji, Shinkansen & Kyoto',
    date: '2026-04-25',
    description: 'Tsukiji market grazing, bullet train to Kyoto, Gion geisha tour, and Pontocho dinner.',
    duration: '8:00',
    audioSrc: '/audio/day-2-tsukiji-shinkansen-kyoto.mp3',
    transcript: `Good morning, Day 2! Today is a big one — you're going from Tokyo to Kyoto, and the journey itself is part of the adventure.

Let's start with breakfast, because today you're having one of the best breakfasts of the entire trip: Tsukiji Outer Market. Now, the famous inner wholesale fish market moved to Toyosu a few years back, but the outer market? Still absolutely thriving. It's a vibrant, bustling maze of food stalls, tiny restaurants, and vendors who've been here for generations.

The plan is to get there around 8 AM and just graze. This isn't a sit-down-and-order situation — you're going to wander the narrow lanes, following your nose. Here's what to look for: tamagoyaki, those beautiful rolled Japanese omelets cooked fresh on the griddle — sweet, fluffy, perfect. Tsukiji Yamazaki is famous for these. Grilled scallops with soy butter from the seafood stalls. Fresh uni (sea urchin) in a cup from Marukyu. Wagyu beef skewers. Fresh sashimi on sticks. This is eating at its most joyful — just pointing at things that look amazing and trying them.

A couple of practical notes: many stalls are cash only, so make sure you've got small bills and coins. And the best stalls are often tucked one or two lanes deep — don't just stick to the main drag.

By around 10:30, wrap up at Tsukiji and head to Tokyo Station. You've got a 12:30 PM Shinkansen to Kyoto. Now, the Shinkansen — the bullet train — is one of those things that just works in Japan at a level that's hard to comprehend. It departs on time to the second. It's smooth, quiet, and fast — 285 kilometers per hour. The ride takes about 2 hours and 15 minutes.

Before you board, grab ekiben — train bento boxes — from the shops in Tokyo Station. This is a beloved Japanese travel tradition, and the station has an incredible selection. Beautifully packaged boxes with everything from grilled eel to wagyu to seasonal vegetables. Here's a key tip: book seats on the right side of the train — E seats. About 45 minutes into the ride, if the weather cooperates, you'll see Mount Fuji appear through the window. It's one of those moments.

You'll arrive at Kyoto Station around 2:44 PM. The Blossom Kyoto, your hotel for the next four nights, is near Shijo-Karasuma — one of Kyoto's main intersections. The reservation is under Marge's name. Your forwarded luggage from Haneda should already be at the front desk waiting. Unpack, freshen up, and get ready for the evening.

At 5:30 PM you have the Kyoto Geisha Walking Tour of the Gion District. This is a guided tour through one of the most fascinating neighborhoods in Japan. Gion is the historic geisha district, and your guide will walk you through the atmospheric streets where geiko — that's the Kyoto word for geisha — and maiko, their apprentices, still live and work. You'll hear stories about the tradition, the years of training, the art forms they master, and the complex social customs of what's called the "flower and willow world." The evening timing is intentional — this is when geiko and maiko are heading to their appointments, so you have the best chance of spotting them in their stunning kimono and elaborate hair ornaments.

After the tour, walk to Pontocho for dinner. Pontocho is one of Kyoto's most magical streets — a narrow, lantern-lit alley running parallel to the Kamogawa River. Walk the full length before choosing a restaurant. What you're looking for is a place with riverside seating — many restaurants here have wooden terraces extending over the water called yuka. Sitting over the river, lanterns glowing, the evening air cooling down... this is Kyoto at its most atmospheric. Watch for seasonal specials featuring kyo-yasai — Kyoto's famous heirloom vegetables.

You've just traveled from one of the world's great modern cities to one of its most beautiful historic ones, all in a single day. Get some rest — Kyoto's temples are waiting tomorrow.`,
  },

  // ===== DAY 3 =====
  {
    dayNumber: 3,
    title: 'Day 3: Golden Pavilion, Tea Ceremony & Gion',
    date: '2026-04-26',
    description: 'Kinkaku-ji at opening, Ryoan-ji rock garden, MAIKOYA tea ceremony, Kiyomizu-dera, and Yakiniku Daichan.',
    duration: '8:30',
    audioSrc: '/audio/day-3-kinkakuji-tea-gion.mp3',
    transcript: `Good morning, Day 3! It's Sunday in Kyoto, and today is packed with some of the most iconic experiences of the entire trip. Temples, a tea ceremony, atmospheric lanes, and an incredible dinner. Let's get into it.

First up: Kinkaku-ji, the Golden Pavilion, at 9 AM sharp. This is one of the most famous images in all of Japan — a three-story Zen temple completely sheathed in gold leaf, sitting beside a perfectly still mirror pond that reflects it like a painting. The story behind it is wild: it was originally built in 1397 as a retirement villa for the shogun Ashikaga Yoshimitsu, who was so powerful he basically ran the country from here while officially "retired." The building has been destroyed and rebuilt multiple times — most recently in 1950, when a disturbed monk set it on fire. Yukio Mishima wrote an entire novel about that incident. The current structure was rebuilt in 1955 and re-gilded in 2003, so the gold is dazzling.

You need to be there at opening because by 10 AM on a Sunday it's absolutely packed with tour groups. In that first hour, you might actually get a moment of quiet contemplation. Budget about 45-60 minutes. The admission ticket is a beautiful calligraphy charm — keep it as a souvenir.

From Kinkaku-ji, it's a quick 10-minute bus ride to Ryoan-ji. If Kinkaku-ji is about spectacle, Ryoan-ji is about subtlety. This temple is home to the most famous rock garden in Japan — maybe the world. Fifteen stones arranged on a bed of raked white gravel. That's it. And yet people have been staring at it and debating its meaning for 500 years. Here's the trick: no matter where you sit on the viewing platform, you can never see all 15 stones at once. At least one is always hidden. Some say it represents islands in an ocean, others see it as a tiger carrying cubs across a river. Sit on the wooden veranda for a while and just let it be what it is. The surrounding grounds also have a beautiful moss garden and reflective pond.

You have a break midday — grab lunch in the Gion area. There are great options along the side streets off Shijo-dori. Try yudofu — hot tofu in a light broth — which is a Kyoto specialty, or look for an obanzai set, which is traditional Kyoto home-style cooking.

At 2 PM, it's time for the Kimono Tea Ceremony at MAIKOYA Gion Kiyomizu. This is special. You'll be dressed in a traditional kimono, then guided through a proper tea ceremony — the preparation of matcha, the precise movements, the etiquette, the philosophy behind it. Tea ceremony isn't just about drinking tea; it's rooted in Zen Buddhism and the concept of ichigo ichie — "one time, one meeting" — the idea that every encounter is unique and should be treasured. The wagashi — traditional sweets served with the tea — are beautiful little works of art, usually shaped like seasonal flowers or fruits. Don't worry about making mistakes — the hosts are warm and patient.

After the ceremony, head to Kiyomizu-dera. This is one of Kyoto's great temples, perched on a mountainside with a massive wooden stage jutting out over the forested hillside. "Kiyomizu" means "pure water" — named for the Otowa waterfall that flows through the temple grounds. The temple was founded in 778, making it older than Kyoto itself as a capital. Afternoon crowds thin before the 6 PM closing, so you'll have a better experience than the morning rush.

Walk down through Sannenzaka and Ninenzaka — stone-paved lanes with traditional wooden shops, tea houses, and ceramic stores. These preservation district lanes are some of the most photographed streets in Japan. They flow naturally downhill toward Gion and Hanamikoji Street, where the wooden machiya townhouses glow with lantern light in the evening.

Now, the grand finale of the day: dinner at Yakiniku Daichan at 6:15 PM. This is a confirmed reservation — confirmation number 27DJDA, under Phoebe's name, party of 4. This is a chef's choice yakiniku course, meaning premium cuts of meat selected by the chef, grilled tableside. Important note: the restaurant asks that guests not wear strong perfumes or fabric softeners — they're serious about the dining atmosphere. Phone is 075-585-4214 if you need it. This is going to be an incredible meal — let the chef guide you through the best cuts of the evening.

What a day. Golden temples, contemplative rock gardens, the grace of a tea ceremony, and one of Kyoto's best dinners. Sleep well — tomorrow you're heading to the magical bamboo groves of Arashiyama.`,
  },

  // ===== DAY 4 =====
  {
    dayNumber: 4,
    title: 'Day 4: Arashiyama',
    date: '2026-04-27',
    description: 'Bamboo grove at dawn, Tenryu-ji zen garden, monkey park, Togetsukyo Bridge, and Jojakko-ji.',
    duration: '7:30',
    audioSrc: '/audio/day-4-arashiyama.mp3',
    transcript: `Good morning — and I mean EARLY morning. It's Day 4, Monday April 27th, and today is all about Arashiyama, one of the most beautiful areas in all of Kyoto. But here's the thing: the magic of Arashiyama lives and dies by your timing. You need to be there before the crowds, and that means an early start.

The bamboo grove. This is it. Thousands of towering bamboo stalks soaring straight up around you, filtering the light into this ethereal green glow. The sound of bamboo creaking and swaying in the wind is hypnotic. Here's the reality though: by 9 AM, tour buses arrive and this narrow path becomes shoulder-to-shoulder tourists. The difference between arriving at 6:30 AM and 9:30 AM is the difference between a transcendent experience and a frustrating one. So set that alarm.

Take the JR Sagano Line from Kyoto Station — it's only 15 minutes to Saga-Arashiyama Station, then a 10-minute walk to the grove. The path through the bamboo is actually quite short, about 500 meters, but in the early morning stillness you can take your time, pause, listen, and actually feel the place.

The bamboo path exits right near the north gate of Tenryu-ji Temple, which opens at 8:30 AM — perfect timing. Tenryu-ji is a UNESCO World Heritage Site and the most important temple in Arashiyama. The star here is the Sogen-chi Pond Garden, designed in the 14th century by the legendary monk Muso Soseki. It's a masterpiece of "borrowed scenery" — shakkei — where the garden is designed so that the Arashiyama mountains behind it become part of the composition. Sit on the wooden veranda of the main hall and take it in. This is one of those moments where everything — the pond, the carefully placed rocks, the pines, the mountains — comes together into something that feels much larger than its parts.

After Tenryu-ji, coffee. And not just any coffee: % Arabica Kyoto Arashiyama, one of the most famous specialty coffee shops in the world, right on the riverbank overlooking the Oi River and Togetsukyo Bridge. Get there before 10 AM and the line should be manageable.

Next: Arashiyama Monkey Park Iwatayama. This is a 20-minute hike up the mountainside to a park where about 120 wild Japanese macaques roam freely. The monkeys are accustomed to visitors and you can observe them up close — grooming each other, playing, lounging around with that wonderful monkey insouciance. There's a building at the top where you can feed them apple slices and peanuts through a wire fence. But the real payoff is the view from the top — all of Kyoto spread out below you. Wear good shoes for the hike, and don't make direct eye contact with the monkeys or show your teeth — they read that as aggression.

Come back down and walk across Togetsukyo Bridge — the "Moon Crossing Bridge." This is the iconic landmark of Arashiyama, a wooden-railed bridge spanning the Oi River with the forested mountains as a backdrop. It's one of the most photographed bridges in Japan.

For lunch, you've got great options right in the area. Arashiyama Yoshimura does beautiful handmade soba noodles with a view of the bridge and river. Or just graze the shopping street stalls — croquettes, matcha treats, grilled mochi, yuba.

In the afternoon, visit Jojakko-ji Temple — a mossy, peaceful hillside temple that feels like a secret garden. It's a short walk from the bamboo grove but gets far fewer visitors. The moss-covered stone stairways and the multi-story pagoda with views over the valley are beautiful.

Head back to the hotel in the late afternoon. For dinner, you've got several options walking distance from The Blossom Kyoto — ramen at Men-ya Inoichi, Italian-Japanese fusion at Bigoli, or cocktails and food at L'Escamoteur. Nothing is pre-booked tonight, so go with your mood.

Today was about experiencing Kyoto's natural beauty — bamboo, mountains, rivers, and monkeys. Tomorrow is the other side of Kyoto: the spiritual power of Fushimi Inari's thousand gates. Another early morning. Worth every minute. Rest up.`,
  },

  // ===== DAY 5 =====
  {
    dayNumber: 5,
    title: 'Day 5: Fushimi Inari & Philosopher\'s Path',
    date: '2026-04-28',
    description: 'Sunrise at Fushimi Inari, Nishiki Market grazing, and an afternoon along the Philosopher\'s Path.',
    duration: '7:00',
    audioSrc: '/audio/day-5-fushimi-inari-philosophers-path.mp3',
    transcript: `Good morning, Day 5. Another early alarm — and I promise this is the last 6 AM wake-up of the trip. But this one might be the most worth it of all.

Fushimi Inari Taisha. If you've seen any image of Japan, you've seen this place — thousands of vermillion torii gates creating a vivid orange tunnel winding up a forested mountainside. There are over 10,000 gates here, each one donated by a business or individual praying for prosperity. Every gate is inscribed with the donor's name and the date of donation — some going back centuries.

The shrine is dedicated to Inari, the Shinto god of rice, sake, and business success. The fox statues you'll see everywhere are Inari's messengers — they're not the god, they're the divine couriers. You'll notice the foxes often hold a key in their mouths — that's the key to the rice granary, symbolizing abundance.

Here's the deal with timing: sunrise in late April is around 5:15 AM, and the shrine is open 24/7. By 9 AM the crowds are brutal — we're talking hundreds of people trying to take photos in narrow gate tunnels. At 6 AM? You might have entire stretches to yourself. The most photogenic section is the first 20 minutes of the trail where the gates are packed tightly together. The full loop to the summit takes 2-3 hours, but you don't have to do the whole thing — go as far as feels right and turn back.

Getting there is dead simple: JR Nara Line from Kyoto Station to Inari Station, 5 minutes, 150 yen. The shrine entrance is literally steps from the station exit.

After the hike, reward yourself at Vermillion Cafe, an artisan coffee spot near the shrine that opens at 8:30 AM. It's got a beautiful setting overlooking a tree-ringed pond — perfect for decompressing after the climb.

By mid-morning, head to Nishiki Market. You were here briefly on Day 3 for the Gion area, but today you're hitting Kyoto's 400-year-old "Kitchen of Kyoto" properly. It's a five-block covered arcade packed with stalls selling everything from fresh tofu and pickles to grilled seafood and matcha sweets. Morning is when all the stalls are open and the energy is at its best. Graze your way through for a late breakfast or early lunch. Don't miss: tamagoyaki, Kyoto pickles, fresh yuba (tofu skin), soy milk donuts from Konnamonja, and the knife shop Aritsugu, which has been forging blades for over 400 years.

This afternoon is the Philosopher's Path — Tetsugaku no Michi — a beautiful 2-kilometer canal-side walkway lined with cherry trees. In late April, some late-blooming varieties may still be flowering. The path connects two of Kyoto's great temples: Nanzen-ji in the south and Ginkaku-ji — the Silver Pavilion — in the north.

Nanzen-ji is remarkable. The massive sanmon gate is one of the largest in Japan, and behind the temple you'll find a striking brick aqueduct — a piece of Meiji-era engineering that's somehow become one of the most photogenic spots in Kyoto. Ginkaku-ji, despite its name, was never actually covered in silver — the shogun who built it ran out of money. But the meticulously raked sand garden, designed to reflect moonlight, and the lush moss garden on the hillside are extraordinary in their own right.

One important logistical note for today: ship your luggage from The Blossom Kyoto front desk to Keio Plaza Hotel Tokyo via Yamato Transport. This is the second leg of the takkyubin forwarding — the front desk staff can help with the forms. Your bags will arrive at the Tokyo hotel tomorrow for check-in. Pack a carry-on with what you need for tonight and tomorrow's Shinkansen ride.

Tonight is your farewell Kyoto dinner. Nothing is pre-booked, so go with your heart. Unafuji for excellent unagi is right near the hotel. Men-ya Inoichi if you haven't done ramen yet. Or walk back to Pontocho for one last riverside dinner. Whatever you choose, savor it — tomorrow you leave this beautiful city for Tokyo.

Four days in Kyoto. Temples, bamboo forests, geisha streets, matcha everything. It goes fast. Enjoy this last evening.`,
  },

  // ===== DAY 6 =====
  {
    dayNumber: 6,
    title: 'Day 6: Kyoto to Tokyo — Shinjuku Nights',
    date: '2026-04-29',
    description: 'Shinkansen to Tokyo, settling into Shinjuku, Omoide Yokocho, Nigirite dinner, and Golden Gai.',
    duration: '7:30',
    audioSrc: '/audio/day-6-kyoto-to-tokyo-shinjuku.mp3',
    transcript: `Good morning, Day 6! Today marks a big transition — you're saying goodbye to Kyoto's temples and quiet beauty, and hello to the electric, neon-lit intensity of Tokyo. Also: Golden Week officially starts today.

A quick word about Golden Week. April 29th through May 5th is one of Japan's biggest holiday periods — a cluster of national holidays that gives most of the country a full week off. That means: bigger crowds at attractions, busier trains, and a festive energy everywhere. Your dinner reservations become even more important — the restaurants are confirmed, so do not skip or show up late. Early mornings remain your secret weapon for avoiding the worst crowds.

Check out of The Blossom Kyoto and head to Kyoto Station for the 12:01 PM Shinkansen to Tokyo. Reserved seats are essential during Golden Week — these trains fill up. You'll arrive at Tokyo Station around 2:15 PM.

Your home for the next four nights is the Keio Plaza Hotel in Shinjuku — one of Tokyo's iconic hotels, right in the heart of the west Shinjuku skyscraper district. Your forwarded luggage from Kyoto should be waiting at the front desk. The hotel is about a 5-minute walk from Shinjuku Station's west exit.

Once you're settled, get out and explore the neighborhood. Shinjuku west side has a completely different feel from the neon-drenched east side — it's all towering office buildings, wide streets, and surprisingly good restaurants tucked into their bases. Grab a specialty coffee. I'd recommend 4/4 Seasons Coffee near Shinjuku Gyoen for exceptional pour-overs, or Paul Bassett on the west side of the station — the cafe of a World Barista Champion. For a completely different vibe, try Coffee Seibu — a kissaten (traditional Japanese coffee house) with 1960s decor and siphon-brewed coffee. It's like stepping into a time machine.

Around 5 PM, head to Omoide Yokocho — "Memory Lane." It's literally one minute from Shinjuku Station's west exit. This is a row of tiny yakitori and seafood stalls crammed under the train tracks, basically unchanged since the postwar era. The smoke, the tiny stools, the sizzle of skewers, the cold beer, the rumble of trains overhead — it is ATMOSPHERE. Good stalls to try: Tachan for seafood, Torobako for grilled fish in a slightly calmer setting. Most places are cash only, and some have a small table charge around 500 yen. But keep it light — you've got a big dinner coming.

At 6:45 PM sharp: Nigirite. This is your sushi dinner in Shinjuku, walking distance from both the hotel and Omoide Yokocho. Confirmation number 9XD6GD, under Phoebe's name, party of 4. Phone 03-6908-5178. Arrive by 6:45 — Japanese restaurants take reservation times very seriously. This is going to be a beautiful meal.

After dinner, around 8:30 PM, walk five minutes to Golden Gai. This is one of the most unique drinking experiences in the world — over 200 tiny bars packed into six narrow alleys. Each bar seats maybe 5-10 people and has its own personality. Some are jazz bars. Some are punk bars. Some are themed around cinema or literature. The idea is to peek in, pick one that looks interesting, have a drink or two, chat with the bartender, then move to the next one. Some bars charge a small cover (500-1000 yen), and some don't welcome tourists — look for signs or English menus. Don't try to squeeze into a full bar — just move on.

Welcome to Tokyo, round two. This is a completely different experience from your first night in Ginza — Shinjuku is louder, wilder, more alive. Embrace it. You've earned these nights. Sleep well — tomorrow is a full walking day through some of Tokyo's coolest neighborhoods.`,
  },

  // ===== DAY 7 =====
  {
    dayNumber: 7,
    title: 'Day 7: Harajuku to Shibuya — The Long Walk',
    date: '2026-04-30',
    description: 'One continuous south-flowing route through Harajuku, Daikanyama, Nakameguro, and Shibuya.',
    duration: '7:00',
    audioSrc: '/audio/day-7-harajuku-shibuya.mp3',
    transcript: `Good morning, Day 7! Thursday April 30th. Today is designed as one beautiful, continuous walk flowing south through four of Tokyo's coolest neighborhoods. No backtracking. No doubling back. Just a natural drift from Harajuku's creative energy through Daikanyama's refined calm, along Nakameguro's canal, and into Shibuya's electric intensity.

Start at Omotesando Station around 9:30 AM. Rather than hitting Takeshita Street head-on — which is pure sensory overload, especially during Golden Week — begin in the Ura-Harajuku backstreets. "Ura" means "behind" or "hidden," and this is where the real Harajuku lives. Independent designers, tiny cafes, and vintage shops that the tourists on the main drag never find. Cat Street is the spine of this area — a pedestrian lane running from Harajuku toward Shibuya, lined with indie boutiques and excellent coffee. The Roastery by Nozy Coffee is a great first stop for specialty roasts.

For vintage clothing — which Harajuku does better than almost anywhere in the world — look for Flamingo, RagTag, and Kinji along Cat Street. Japanese vintage shops are meticulously curated: everything is clean, organized by era and style, and priced fairly. You can find incredible vintage denim, leather jackets, and Japanese streetwear pieces you'll never see at home.

Give Takeshita Street a peek for the spectacle — it's a narrow lane packed with colorful shops, crepe stands, and kawaii culture at maximum volume — but the backstreets are genuinely better for your group.

For lunch, you've got options along the route. Uogashi Nihon-ichi is a standing sushi bar — fresh, fast, and affordable at around 1,200-2,000 yen. They have an English menu. Or if you want the fun of conveyor belt sushi, try Mawari Sushi in Shibuya PARCO where you order via tablet.

After lunch, continue south to Daikanyama — about a 15-minute walk or one train stop from Shibuya. Daikanyama is Tokyo's answer to Brooklyn: tree-lined streets, curated boutiques, and one of the world's most beautiful bookstores. Daikanyama T-Site, designed by Klein Dytham architecture, is three interlinked buildings housing Tsutaya Books, a music lounge, and a stationery floor that will make you want to buy every notebook. Even if you're not a bookstore person, the architecture alone is worth the visit.

Nearby, Log Road Daikanyama is a former rail track turned open-air pedestrian lane with a craft brewery, coffee, and outdoor seating. And Kyu Asakura House is a hidden gem — a 100-year-old wooden residence with a traditional garden, just 100 yen to enter.

From Daikanyama, walk 10 minutes to Nakameguro along the Meguro River. This canal-side promenade is one of Tokyo's loveliest walks — lined with cafes, independent shops, and a green canopy overhead. Onibus Coffee, in a cozy wooden building right along the canal, is one of Tokyo's best specialty roasters. Nakameguro Koukashita — 700 meters of shops and bars built under the elevated train tracks — is worth exploring too.

Continue south to Shibuya. If you've been walking all day, it's also just one stop on the Tokyu Toyoko Line. Walk through the Shibuya Scramble Crossing — the world's busiest pedestrian intersection, where up to 3,000 people cross simultaneously. It's mesmerizing.

Dinner tonight is at 6:30 PM: Hikiniku to Come in Shibuya. Confirmation number UGHWQ5, under Phoebe's name. Phone 03-6455-2959. Arrive by 6:40. This place is famous for one thing done perfectly: hamburger steak with unlimited fresh rice cooked in a clay pot. The meat patties are grilled right in front of you. The rice is the real star — cooked in small batches and refilled constantly. One note: customers not eating are asked not to use seats, so everyone at the table orders.

What a day of walking. You've just threaded through four of Tokyo's most distinctive neighborhoods in one seamless route. Your feet will be tired. Your camera roll will be full. Rest up — tomorrow is teamLab and Ginza.`,
  },

  // ===== DAY 8 =====
  {
    dayNumber: 8,
    title: 'Day 8: teamLab, Ginza & Roppongi Nights',
    date: '2026-05-01',
    description: 'Immersive digital art at teamLab, Ginza exploring, PST pizza, and Andaz rooftop cocktails.',
    duration: '7:30',
    audioSrc: '/audio/day-8-teamlab-ginza-roppongi.mp3',
    transcript: `Good morning, Day 8! Friday May 1st. Today has a fantastic arc — immersive digital art in the morning, Tokyo's most prestigious district in the afternoon, and one of the best views in the city to cap the night.

First up at 8:30 AM: teamLab Borderless at Azabudai Hills. This is not a museum in any traditional sense. It's more like falling into a living dream. You enter a dark space and wander through rooms where digital artworks flow across walls, ceilings, and floors, responding to your presence. Flowers bloom under your feet and scatter when you step on them. Waterfalls of light cascade down walls and merge into rivers that flow between rooms. The artworks have no boundaries — they literally "border-less" — flowing from one room to the next, blending and transforming. Some rooms are kaleidoscopic infinity mirrors. Some are fields of floating lanterns that change color as you approach.

A few tips: wear white or light-colored clothing, because the projections look incredible reflected on you — you become part of the art. The museum is intentionally maze-like and dark, so embrace getting lost. And don't miss the EN Tea House inside, where you order tea and digital flowers bloom inside your bowl as you drink. It's magical. Plan about 2-2.5 hours.

After teamLab, take the train to Ginza — about 10 minutes from Kamiyacho Station. Ginza is Tokyo's most prestigious district: wide boulevards, flagship department stores, world-class galleries, and some of the best restaurants in the city tucked into side streets.

For lunch, you've got incredible sushi options. Sushi Ginza Onodera Toryumon is a standing sushi bar — same high-quality fish as the main Onodera restaurant at a fraction of the price. Nemuro Hanamaru in Tokyu Plaza Ginza is a popular conveyor belt spot but can have long waits. Or hit the depachika — the basement food halls in Mitsukoshi Ginza or Ginza Six. Japanese department store basements are mind-blowing: rows of beautifully packaged bento boxes, wagashi sweets, pastries, and every kind of prepared food you can imagine. You could easily assemble an incredible grazing lunch here.

Café de l'Ambre is a legendary kissaten — a traditional Japanese coffee house — that's been roasting since 1948. They specialize in aged beans, some stored for decades. It's a Tokyo institution and worth a stop.

If you have time and energy, Hamarikyu Gardens is a 10-minute walk south from Ginza. It's a stunning Edo-era garden on Tokyo Bay with a tidal seawater pond, a tea house on the water where you can sip matcha, and the modern Tokyo skyline as a dramatic backdrop. Thirty minutes here is deeply refreshing.

Head back to the Keio Plaza around 4:30 to rest and change for the evening.

Dinner at 6:30 PM: PST Roppongi — Pizza Studio Tamaki. This is one of Tokyo's best pizza restaurants, run by a Japanese pizzaiolo who trained in Naples. The dough is exceptional — light, charred, and chewy. The margherita is the benchmark, but their seasonal specials are creative and excellent.

After dinner, walk to the Andaz Tokyo Rooftop Bar at Toranomon Hills — it's in the same neighborhood, no backtracking needed. The bar is on the 52nd floor with panoramic views and Tokyo Tower lit up right in front of you. It's walk-in only, no reservations. If there's a Golden Week wait at the rooftop, the 51st floor lounge is also beautiful and often has more availability.

Sipping a cocktail, 52 stories up, with Tokyo glittering to the horizon in every direction — that's how you end Day 8. Enjoy every minute of it.`,
  },

  // ===== DAY 9 =====
  {
    dayNumber: 9,
    title: 'Day 9: Asakusa, Yanaka, Sumo & Omakase',
    date: '2026-05-02',
    description: 'Early Senso-ji, Nezu Shrine azaleas, Yanaka old town, sumo experience, and Manten Sushi omakase.',
    duration: '8:00',
    audioSrc: '/audio/day-9-asakusa-yanaka-sumo-omakase.mp3',
    transcript: `Good morning, Day 9! Saturday May 2nd. This is a spectacular day — your last full day in Japan, and it covers everything from ancient temples to sumo wrestling to what might be the best meal of the entire trip.

Start early: Senso-ji Temple in Asakusa by 7 AM. This is Tokyo's oldest temple, founded in 645 AD — that's over 1,300 years ago. The story goes that two fishermen pulled a golden statue of Kannon, the goddess of mercy, from the Sumida River, and the temple was built to enshrine it. The original statue is said to still be inside the main hall, though it's never been publicly displayed.

The Kaminarimon — Thunder Gate — with its massive red lantern is one of the most iconic images of Tokyo. In the early morning, before the crowds, it's genuinely serene. The Nakamise shopping street leading to the temple won't have its stalls fully open yet, but the temple grounds are beautiful in the quiet morning light. Draw an omikuji fortune slip while you're there — if you get a bad fortune, just tie it to the wire rack to leave the bad luck behind.

From Asakusa, take the Ginza Line to Ueno and walk through Ueno Park on the way to Nezu. Shinobazu Pond is covered in lotus — adding 20-30 minutes for this walk is effortless and highly recommended.

Nezu Shrine is the highlight of the morning, and the timing is perfect. The Tsutsuji Matsuri — the azalea festival — should be in full bloom right now. We're talking about 3,000 azalea bushes cascading down a hillside garden in waves of pink, red, white, and purple. It's one of the most beautiful natural displays in all of Tokyo, and yet most tourists never visit because it's slightly off the beaten path. The shrine itself dates to 1706, and there's a series of small vermillion torii gates winding through the garden that echo Fushimi Inari on a miniature, intimate scale.

From Nezu, walk north into the Yanaka neighborhood. This is one of the few areas of Tokyo that survived the WWII firebombing, and it feels like stepping back in time. Narrow lanes wind past wooden houses, tiny neighborhood temples, cat statues, and local shops that haven't changed in decades. Yanaka Ginza is the heart of it — a sloping shopping street with family-run shops selling handmade crafts, fresh croquettes, menchi-katsu (fried ground meat cutlets), and traditional sweets. The neighborhood is known as a "cat town" — look for cat motifs everywhere. Try Yanaka Coffee for an excellent pour-over from their small roaster.

Head back to the Shinjuku area for lunch and some rest. Save your energy — the afternoon and evening are big.

At 3 PM: Shinjuku Sumo Club. This is under Phoebe's name. Sumo is Japan's national sport and one of its oldest traditions, dating back over 1,500 years to Shinto rituals. The ring, the salt-throwing purification, the elaborate pre-match stomping and staring — every element is steeped in ceremony. This experience will give you an up-close understanding of the sport and the incredible athletes who practice it.

And then, the grand finale: dinner at 7 PM at Manten Sushi in Nihonbashi. This is an omakase experience — you sit at the counter and the chef serves you the best fish of the day, piece by piece, in the order he chooses. Confirmation number 24WGFU, under Ben's name, party of 4. Phone 03-3277-6045.

This is the real deal. A few important notes from the restaurant: those who cannot eat seafood or raw fish will be refused entry. No birthday plates, no cakes, no baby chairs, no children's menu. This is a serious sushi counter and they want every guest fully engaged in the experience. Respect the format — watch the chef work, appreciate each piece, and savor the progression from lighter to richer fish.

This might be the most memorable meal of the trip. Your last full night in Japan. Make it count.`,
  },

  // ===== DAY 10 =====
  {
    dayNumber: 10,
    title: 'Day 10: Farewell, Tokyo',
    date: '2026-05-03',
    description: 'A peaceful final morning, last-minute shopping, and heading home.',
    duration: '5:30',
    audioSrc: '/audio/day-10-farewell-tokyo.mp3',
    transcript: `Good morning for the last time. Day 10. Sunday May 3rd. It's your final morning in Japan, and the goal today is simple: soak in whatever you love most, pick up any last souvenirs, and get to the airport with time to spare.

You don't need to rush today. Your flight from Haneda isn't until 5:15 PM, so you have a real morning to enjoy.

Here are your options — pick based on your mood:

Shinjuku Gyoen is my top recommendation. It's one of the finest gardens in Tokyo, and it's a 5-minute walk from the Keio Plaza. Opens at 9 AM, costs 500 yen. In early May you'll catch late-blooming yaezakura cherry blossoms (the fluffy, multi-petaled variety), roses starting to come in, wisteria hanging in purple curtains, and the gorgeous French formal garden. It's a beautiful, peaceful way to say goodbye to Tokyo. The Japanese traditional garden section, with its ponds and tea houses, is particularly special in the morning light. This garden was originally built for the Naito feudal lord in the Edo period, then became an Imperial garden, and finally opened to the public after World War II. It's survived fires, wars, and centuries of change — a reminder that beauty endures.

Or — if there's a neighborhood that called to you during the trip, go back. Nakameguro for a quiet canal-side coffee. Yanaka for one more wander through those lanes. Ginza for a final stroll through the backstreets. There's no wrong choice.

Check out of the Keio Plaza by 11 AM. The front desk can hold your luggage briefly if needed. For a last lunch, the area around Shinjuku Station has endless options, or grab something to take with you. Tokyo Station's underground shopping area is also incredible for a final meal — Ramen Street has a lineup of the best ramen shops in the country, and the bento and sweet shops are perfect for picking up edible souvenirs.

Speaking of souvenirs — if you haven't gotten your omiyage (gifts to bring home), now's the time. Japanese gift-giving culture means that beautifully packaged sweets and snacks are everywhere and they make perfect souvenirs. Tokyo Banana is the classic, but there are hundreds of options. KitKat makes Japan-exclusive flavors. Department store basements (depachika) have exquisitely packaged wagashi. Tokyo Station's Gransta underground area has it all in one place.

Around 2 PM, head to Haneda Airport. From the Keio Plaza, you can take the Limousine Bus from the Shinjuku Expressway Bus Terminal (Basuta Shinjuku) — about a 5-minute walk from the hotel, 85 minutes to Haneda with traffic. Or take the train: JR to Shinagawa, then the Keikyu Line to Haneda, about an hour total. Today is Constitution Memorial Day — part of Golden Week — so the airport will be busy. Give yourself plenty of buffer time.

At the airport, don't forget to spend any remaining yen. The duty-free shops at Haneda are excellent — great Japanese snacks, sake, whisky, and last-minute gifts. Your IC card (Suica or Pasmo) can also be used at airport shops to burn off the balance.

Your flight departs at 5:15 PM and arrives in Chicago the same day around 3:45 PM local time — the magic of crossing the date line in the other direction.

Ten days. Three cities. Temples, bamboo groves, bullet trains, sumo, geisha streets, the best food you've ever eaten, and a thousand moments you didn't expect. Japan has a way of staying with you long after you leave — the precision, the beauty, the kindness of strangers, the way even a simple bowl of noodles can feel like a revelation.

Thank you for letting me be your guide. Safe travels home. And start planning the next one — because everyone comes back to Japan.

Sayonara.`,
  },
];
