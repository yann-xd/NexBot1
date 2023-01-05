let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
        conn.reply(m.chat, `*Mode : The Boundless!*`, m)
        global.db.data.users[m.sender].money = 100000000000
        global.db.data.users[m.sender].limit = 100000000000
        global.db.data.users[m.sender].level = 99999
        global.db.data.users[m.sender].exp = 1000000000
        global.db.data.users[m.sender].legendary = 99999
        global.db.data.users[m.sender].joinlimit =9
}
handler.command = /^(l)$/i
handler.owner = true
handler.mods = true

export default handler
