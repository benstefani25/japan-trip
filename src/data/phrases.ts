export interface Phrase {
  english: string;
  romaji: string;
  japanese: string;
  pronunciation: string;
}

export interface PhraseCategory {
  category: string;
  icon: string;
  phrases: Phrase[];
}

export const phrases: PhraseCategory[] = [
  {
    category: 'Greetings & Basics',
    icon: '👋',
    phrases: [
      {
        english: 'Hello',
        romaji: 'Konnichiwa',
        japanese: 'こんにちは',
        pronunciation: 'kohn-nee-chee-wah',
      },
      {
        english: 'Good morning',
        romaji: 'Ohayou gozaimasu',
        japanese: 'おはようございます',
        pronunciation: 'oh-hah-yoh goh-zah-ee-mahs',
      },
      {
        english: 'Goodbye',
        romaji: 'Sayounara',
        japanese: 'さようなら',
        pronunciation: 'sah-yoh-nah-rah',
      },
      {
        english: 'Thank you',
        romaji: 'Arigatou gozaimasu',
        japanese: 'ありがとうございます',
        pronunciation: 'ah-ree-gah-toh goh-zah-ee-mahs',
      },
      {
        english: 'Excuse me',
        romaji: 'Sumimasen',
        japanese: 'すみません',
        pronunciation: 'soo-mee-mah-sen',
      },
      {
        english: 'Sorry',
        romaji: 'Gomen nasai',
        japanese: 'ごめんなさい',
        pronunciation: 'goh-men nah-sah-ee',
      },
      {
        english: 'Yes',
        romaji: 'Hai',
        japanese: 'はい',
        pronunciation: 'hah-ee',
      },
      {
        english: 'No',
        romaji: 'Iie',
        japanese: 'いいえ',
        pronunciation: 'ee-eh',
      },
      {
        english: 'Please',
        romaji: 'Onegaishimasu',
        japanese: 'お願いします',
        pronunciation: 'oh-neh-gah-ee-shee-mahs',
      },
    ],
  },
  {
    category: 'Restaurant',
    icon: '🍜',
    phrases: [
      {
        english: 'Table for 4, please',
        romaji: 'Yonin desu',
        japanese: '四人です',
        pronunciation: 'yoh-neen deh-ss',
      },
      {
        english: 'Menu, please',
        romaji: 'Menyuu o kudasai',
        japanese: 'メニューをください',
        pronunciation: 'men-yoo oh koo-dah-sah-ee',
      },
      {
        english: 'This one, please',
        romaji: 'Kore o kudasai',
        japanese: 'これをください',
        pronunciation: 'koh-reh oh koo-dah-sah-ee',
      },
      {
        english: 'Check, please',
        romaji: 'Okaikei onegaishimasu',
        japanese: 'お会計お願いします',
        pronunciation: 'oh-kah-ee-keh oh-neh-gah-ee-shee-mahs',
      },
      {
        english: 'Water, please',
        romaji: 'Omizu kudasai',
        japanese: 'お水ください',
        pronunciation: 'oh-mee-zoo koo-dah-sah-ee',
      },
      {
        english: 'Delicious!',
        romaji: 'Oishii!',
        japanese: 'おいしい！',
        pronunciation: 'oh-ee-shee!',
      },
      {
        english: 'I have allergies',
        romaji: 'Arerugii ga arimasu',
        japanese: 'アレルギーがあります',
        pronunciation: 'ah-reh-roo-gee gah ah-ree-mahs',
      },
      {
        english: 'No pork, please',
        romaji: 'Butaniku nashi de onegaishimasu',
        japanese: '豚肉なしでお願いします',
        pronunciation: 'boo-tah-nee-koo nah-shee deh oh-neh-gah-ee-shee-mahs',
      },
      {
        english: 'I have a reservation under [name]',
        romaji: 'Yoyaku shiteimasu, [name] desu',
        japanese: '予約しています、[name]です',
        pronunciation: 'yoh-yah-koo shee-teh-ee-mahs, [name] deh-ss',
      },
    ],
  },
  {
    category: 'Navigation',
    icon: '🗺️',
    phrases: [
      {
        english: 'Where is...?',
        romaji: '... wa doko desu ka?',
        japanese: '...はどこですか？',
        pronunciation: '... wah doh-koh deh-ss kah?',
      },
      {
        english: 'Train station',
        romaji: 'Eki',
        japanese: '駅',
        pronunciation: 'eh-kee',
      },
      {
        english: 'How do I get to...?',
        romaji: '... e wa dou ikeba ii desu ka?',
        japanese: '...へはどう行けばいいですか？',
        pronunciation: '... eh wah doh ee-keh-bah ee deh-ss kah?',
      },
      {
        english: 'Left',
        romaji: 'Hidari',
        japanese: '左',
        pronunciation: 'hee-dah-ree',
      },
      {
        english: 'Right',
        romaji: 'Migi',
        japanese: '右',
        pronunciation: 'mee-gee',
      },
      {
        english: 'Straight ahead',
        romaji: 'Massugu',
        japanese: 'まっすぐ',
        pronunciation: 'mahs-soo-goo',
      },
      {
        english: 'How far is it?',
        romaji: 'Dono kurai kakarimasuka?',
        japanese: 'どのくらいかかりますか？',
        pronunciation: 'doh-noh koo-rah-ee kah-kah-ree-mahs-kah?',
      },
      {
        english: 'I want to go to...',
        romaji: '... ni ikitai desu',
        japanese: '...に行きたいです',
        pronunciation: '... nee ee-kee-tah-ee deh-ss',
      },
    ],
  },
  {
    category: 'Shopping',
    icon: '🛍️',
    phrases: [
      {
        english: 'How much is this?',
        romaji: 'Kore wa ikura desu ka?',
        japanese: 'これはいくらですか？',
        pronunciation: 'koh-reh wah ee-koo-rah deh-ss kah?',
      },
      {
        english: 'Can I try this on?',
        romaji: 'Shichaku dekimasu ka?',
        japanese: '試着できますか？',
        pronunciation: 'shee-chah-koo deh-kee-mahs kah?',
      },
      {
        english: 'Do you accept credit cards?',
        romaji: 'Kurejitto kaado wa tsukaemasuka?',
        japanese: 'クレジットカードは使えますか？',
        pronunciation: 'koo-reh-jee-toh kah-doh wah tsoo-kah-eh-mahs-kah?',
      },
      {
        english: 'Too expensive',
        romaji: 'Takasugi masu',
        japanese: '高すぎます',
        pronunciation: 'tah-kah-soo-gee mahs',
      },
      {
        english: "I'll take this",
        romaji: 'Kore ni shimasu',
        japanese: 'これにします',
        pronunciation: 'koh-reh nee shee-mahs',
      },
      {
        english: 'Do you have a smaller size?',
        romaji: 'Motto chiisai saizu wa arimasuka?',
        japanese: 'もっと小さいサイズはありますか？',
        pronunciation: 'moht-toh chee-sah-ee sah-ee-zoo wah ah-ree-mahs-kah?',
      },
      {
        english: 'Do you have a larger size?',
        romaji: 'Motto ookii saizu wa arimasuka?',
        japanese: 'もっと大きいサイズはありますか？',
        pronunciation: 'moht-toh oh-kee sah-ee-zoo wah ah-ree-mahs-kah?',
      },
      {
        english: 'Is this tax-free?',
        romaji: 'Menzei dekimasu ka?',
        japanese: '免税できますか？',
        pronunciation: 'men-zeh deh-kee-mahs kah?',
      },
    ],
  },
  {
    category: 'Emergency',
    icon: '🚨',
    phrases: [
      {
        english: 'Help!',
        romaji: 'Tasukete!',
        japanese: '助けて！',
        pronunciation: 'tah-soo-keh-teh!',
      },
      {
        english: 'Hospital',
        romaji: 'Byouin',
        japanese: '病院',
        pronunciation: 'byoh-een',
      },
      {
        english: 'Police',
        romaji: 'Keisatsu',
        japanese: '警察',
        pronunciation: 'keh-sah-tsoo',
      },
      {
        english: "I'm lost",
        romaji: 'Michi ni mayoimashita',
        japanese: '道に迷いました',
        pronunciation: 'mee-chee nee mah-yoh-ee-mah-shee-tah',
      },
      {
        english: 'I need a doctor',
        romaji: 'Isha ga hitsuyou desu',
        japanese: '医者が必要です',
        pronunciation: 'ee-shah gah hee-tsoo-yoh deh-ss',
      },
      {
        english: 'Please call an ambulance',
        romaji: 'Kyuukyuusha o yonde kudasai',
        japanese: '救急車を呼んでください',
        pronunciation: 'kyoo-kyoo-shah oh yohn-deh koo-dah-sah-ee',
      },
      {
        english: 'Police emergency number: 110',
        romaji: 'Hyaku tou ban',
        japanese: '110番',
        pronunciation: 'hyah-koo toh-bahn',
      },
      {
        english: 'Fire & Ambulance number: 119',
        romaji: 'Hyaku juu kyuu ban',
        japanese: '119番',
        pronunciation: 'hyah-koo joo-kyoo-bahn',
      },
    ],
  },
];
