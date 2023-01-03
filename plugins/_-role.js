const tiers = {
    /*
    'Tiers Name': <Minimal Level To Obtain this Role>
    */
    'NPC': 0,
    'Normal': 1,
    'Begginer III': 4,
    'Begginer II': 7,
    'Begginer I': 10,
    'Pro III': 13,
    'Pro II': 16,
    'Pro I': 19,
    'Master III': 22,
    'Master II': 25,
    'Master I': 28,
    'Grand Master III': 31,
    'Grand Master II': 34,
    'Grand Master I': 37,
    'Legend III': 40,
    'Legend II': 43,
    'Legend I': 46,
    'Adamantite III': 49,
    'Adamantite II': 52,
    'Adamantite I': 55,
    'Mythic III': 58,
    'Mythic II': 61,
    'Mythic I': 64,
    'Lord III': 67,
    'Lord II': 70,
    'Lord I': 73,
    'Immortal III': 76,
    'Immortal II': 79,
    'Immortal I': 82,
    'God III': 85,
    'God II': 88,
    'God I': 91,
    'Cosmic III': 94,
    'Cosmic II': 97,
    'Cosmic I': 100,
    'Infinity III': 103,
    'Infinity II': 106,
    'Infinity I': 109,
    'Absoulte III': 112,
    'Absolute II': 115,
    'Absolute I': 118,
    'THE BOUNDLESS': 10000
}

export function before(m) {
        let user = db.data.users[m.sender]
        let level = user.level
        let tier = (Object.entries(tiers).sort((a, b) => b[1] - a[1]).find(([, minLevel]) => level >= minLevel) || Object.entries(tiers)[0])[0]
        user.tier = tier
        return !0
    
}
