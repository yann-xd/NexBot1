import fetch from 'node-fetch'

let handler = async (m, { command, conn }) => {
  let cap = `
Silakan Aktifkan`
   if (global.db.data.chats[m.chat].nsfw == false && m.isGroup) return conn.sendButtonDoc(m.chat, '❗𝐍𝐒𝐅𝐖 𝐆𝐀 𝐀𝐊𝐓𝐈𝐅!!', cap, 'ᴇɴᴀʙʟᴇ', '.on nsfw', null, adReply)
    let anu = await fetch(`https://zenzapis.xyz/api/morensfw/${command}?apikey=${zenzkey`)

   let fimgb = Buffer.from(await anu.arrayBuffer())

    conn.sendButton(m.chat, 'Jangan ngocok kak', botdate, fimgb, [['next', '${command} ']], m)
}
handler.help = ['nsfw']
handler.tags = ['nsfw']
handler.command = /^(nsfw)$/i
handler.limit = true
handler.premium = true
