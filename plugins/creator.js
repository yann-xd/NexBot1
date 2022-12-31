let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

//------- NOMOR
  let nowner = `${nomorown.split`@`[0]}@s.whatsapp.net`
  let teksnomor = `${htki} *OWNER* ${htka}
✦ @${nomorown.split`@`[0]} ✦
------- ${nameown} -------

📮 *Note:*
• Owner tidak menerima save contact
• Owner berhak blockir tanpa alasan
• Berbicaralah yang sopan & tidak spam
• Owner Hanya merespon yang berkaitan dengan BOT
• No Telp`

//------------ BIO
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `${htki} *BIODATA* ${htka}
${htjava} *💌 Nama* : L-Botz
${htjava} *✉️ Nama RL* : Latif
${htjava} *♂️ Gender* : Boys
${htjava} *🕋 Agama* : Islam
${htjava} *⏰ Tanggal lahir* : 31 Januari
${htjava} *🎨 Umur* : -
${htjava} *🧮 Kelas* : -
${htjava} *🧩 Hobby* : Jogging
${htjava} *💬 Sifat* : Kulbet🥶
${htjava} *🗺️ Tinggal* : Isekai
${htjava} *❤️ Waifu* : Narberal Gamma (istri)

${htjava} *📷 ɪɴsᴛᴀɢʀᴀᴍ* : ${sig}
${htjava} *🐈 ɢɪᴛʜᴜʙ:* ${sgh}
•·––––––––––––––––––––––––––·•
`
  let teks = 'ᴄʟɪᴄᴋ ʜᴇʀᴇ !'
const sections = [
   {
	title: `${htjava} OWNER –––––––––·•`,
	rows: [
	{title: "📱 • ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ", rowId: ".owner nomor"},
	{title: "📱 • ᴘᴇɴɢᴇᴍʙᴀɴɢ", rowId: ".kontak"},
	{title: "🎨 • ʙɪᴏᴅᴀᴛᴀ", rowId: ".owner bio"},
	{title: "🌎 • sᴄʀɪᴘᴛ", rowId: ".sc"},
	]
    },{
	title: `${htjava} SUPPORT ME –––––––·•`,
	rows: [
	    {title: "💹 • ᴅᴏɴᴀᴛᴇ ғᴏʀ ʙᴏᴛ", rowId: ".donasi"},
	{title: "🔖 • sᴇᴡᴀ ʙᴏᴛ", rowId: ".sewa"},
	{title: "🌟 • ʙᴇʟɪ ᴘʀᴇᴍɪᴜᴍ", rowId: ".premium"},
	]
  },
]

const listMessage = {
  text: teks,
  footer: null,
  title: `${htki} *OWNER* ${htka}`,
  buttonText: "ᴄʟɪᴄᴋ ʜᴇʀᴇ !",
  sections
}

  try {
    if (/(creator|owner)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'nomor':
          conn.reply(m.chat, teksnomor, m, { contextInfo: { mentionedJid: [nowner] }})
            break
            case 'bio':
          //conn.sendHydrated(m.chat, teksbio, wm, ppown, sig, "📷 Instagram", nomorown, '🌹 Nomor', [[null, null], [null, null],[null,null]], m)

          conn.sendButton(m.chat, teksbio, wm, ppown, [
                ['Sewa Bot', `${usedPrefix}sewa`],
                ['Menu', `${usedPrefix}menu`]
            ], m)
            break
            
          default:
            return await conn.sendMessage(m.chat, listMessage, m, { contextInfo: { mentionedJid: [m.sender] }})
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`⋮☰ Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['owner','creator,kontak']
handler.tags = ['main', 'info']
handler.command = /^(owner|creator|kontak)/i

export default handler
