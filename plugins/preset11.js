import fs from 'fs'
import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, isAdmin, isOwner, text }) => {
	if (m.isGroup) {
				break
			case 'on': {
				global.db.data.chats[m.chat].isBanned = false
				conn.reply(m.chat, 'Ｓｕｋｓｅｓ', m, { contextInfo: { externalAdReply: {title: global.wm, body: 'ʙᴏᴛ ᴛᴇʟᴀʜ ᴅɪ ɴʏᴀʟᴀᴋᴀɴ ᴜɴᴛᴜᴋ ɢʀᴏᴜᴘ ɪɴɪ', sourceUrl: sig, thumbnail: fs.readFileSync('./thumbnail.jpg')  }}})
}
handler.help = ['bot [on/off]']
handler.tags = ['group']
handler.command = /^(latifganteng)$/i

handler.admin = true

export default handler
