//
let { MessageType } = (await import('@adiwajshing/baileys')).default
import { sticker } from '../lib/sticker.js'
let handler  = async (m, { conn, args }) => {
  let stiker = false
try {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image|video/.test(mime)) {
      let img = await q.download()
      if (!img) throw 'Sticker nya mana kak?'
      stiker = await sticker(img, false, 'ᴄʀᴇᴀᴛᴇᴅ ʙʏ', 'ʟ-ʙᴏᴛᴢ')
    } else if (args[0]) stiker = await sticker(false, args[0], 'ᴄʀᴇᴀᴛᴇᴅ ʙʏ' , 'ʟ-ʙᴏᴛᴢ')
  } finally {
    if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    else throw 'Conversion failed'
  }
}
handler.help = ['colong']
handler.tags = ['sticker']
handler.command = /^(colong)$/i

export default handler
