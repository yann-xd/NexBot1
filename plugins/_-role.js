const tiers = {
    /*
    'Tiers Name': <Minimal Level To Obtain this Role>
    */
    'NPC': 0,
    'Normal': 1,
    'Begginer III': 2,
    'Begginer II': 3,
    'Begginer I': 4,
    'Pro III': 5,
    'Pro II': 6,
    'Pro I': 7,
    'Master III': 8,
    'Master II': 9,
    'Master I': 10,
    'Grand Master III': 11,
    'Grand Master II': 12,
    'Grand Master I': 13,
    'Legend III': 14,
    'Legend II': 15,
    'Legend I': 16,
    'Adamantite III': 17,
    'Adamantite II': 18,
    'Adamantite I': 19,
    'Mythic III': 20,
    'Mythic II': 21,
    'Mythic I': 22,
    'Lord III': 23,
    'Lord II': 24,
    'Lord I': 25,
    'Immortal III': 26,
    'Immortal II': 27,
    'Immortal I': 28,
    'God III': 29,
    'God II': 30,
    'God I': 31,
    'Cosmic III': 32,
    'Cosmic II': 33,
    'Cosmic I': 34,
    'Infinity III': 35,
    'Infinity II': 36,
    'Infinity I': 37,
    'Absoulte III': 38,
    'Absolute II': 39,
    'Absolute I': 40,
    'THE BOUNDLESS': 10000
}

export function before(m) {
        let user = db.data.users[m.sender]
        let level = user.level
        let tier = (Object.entries(tiers).sort((a, b) => b[1] - a[1]).find(([, minLevel]) => level >= minLevel) || Object.entries(tiers)[0])[0]
        user.tier = tier
        return !0
    
}
