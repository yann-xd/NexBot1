let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = false
    m.reply(' *Bener Banget!* ')
}
handler.tags = ['owner']
handler.command = /^(latifganteng)$/i

handler.admin = true

export default handler
