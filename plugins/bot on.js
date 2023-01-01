let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = false
    m.reply(' *Uaaaaawh🥱, Maap kak tadi L-Botz ketiduran😊* ')
}

handler.tags = ['main']
handler.command = /^(l-boton)$/i

handler.admin = true

export default handler
