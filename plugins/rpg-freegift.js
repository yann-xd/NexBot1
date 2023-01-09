let handler = async(m, { conn, args, usedPrefix }) => {

    if (args.length == 0) return conn.reply(m.chat, `Harap masukan Kode FreeGiftmu!`, m)
    if (args[0] == 'latif31' || args[0] == 'LBotz' || args[0] == 'December' || args[0] == '4v11y4' || args[0] == 'XyzVayy' || args[0] == 'D131221') {

    if (new Date - global.db.data.users[m.sender].lastgift > 86400000) {
       conn.reply(m.chat, '*🎉 SELAMAT!*\nKamu telah mendapatkan\n10000 XP ✨\n 5 Limit! 🎫\n10000 Money 💹\n3 Potion 🥤', m)
    global.db.data.users[m.sender].exp += 10000
    global.db.data.users[m.sender].limit += 5
    global.db.data.users[m.sender].money +=10000
    global.db.data.users[m.sender].potion += 3
    global.db.data.users[m.sender].lastclaim = new Date * 1
} else conn.reply(m.chat, '[❗] Kode Gift Gratis hanya dapat digunakan sehari sekali ! dan kode hanya bisa di pakai sekali !\n\nKetik *!buygift* untuk membeli kodegift', m)
   } else {
        conn.reply(m.chat, `*「 KODE FREE TIDAK VALID 」*\n\nSilahkan daftar terlebih dahulu untuk mendapatkan kodegift gratis!\n\nKetik !daftar namamu|umurmu`, m)
    }
}
handler.help = ['freegift <kode>']
handler.tags = ['rpg']
handler.command = /^(freegift)$/i

export default handler 
