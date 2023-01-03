let handler = async (m, { conn }) => {
let user = global.db.data.users[m.sender]
let rol = `${htki} TIER ${htka}

Your Tier : ${user.tier}

List Tier = 

NPC
Normal
Beginner III
Begginer II
Begginer I
Pro III
Pro II
Pro I
Master III
Master II
Master I
Grand Master III
Grand Master II
Grand Master I
Legend III
Legend II
Legend I
Adamantite III
Adamantite II
Adamantite I
Mythic III
Mythic II
Mythic I
Lord III
Lord II
Lord I
Immortal III
Immortal II
Immortal I
God III
God II
God I
Cosmic III
Cosmic II
Cosmic I
Infinity III
Infinity II
Infinity I
Absolute III
Absolute II
Absolute I
The Boundless`
conn.reply(m.chat, rol, )
}
handler.command = ['tier']

export default handler
