
import { sticker } from '../lib/sticker.js'
import fs from 'fs'
import path from 'path'
import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
global.fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: true}}}

//m.reply(`Wait ${command} sedang proses🐦`)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

let stiker = await sticker(null, global.API(`https://telegra.ph/file/b34b5552f4c79d170557f.jpg`), global.packname, global.author)
 conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, null, { fileLength: 100, contextInfo: {
          externalAdReply :{
          showAdAttribution: true,
    mediaUrl: sgc,
    mediaType: 2,
    description: '𝑨𝒍𝒅𝒊 𝑿 𝑨𝒊𝒔𝒚𝒂𝒉', 
    title: `${command} Sedang Di Proses`,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
  
let audio = `https://raw.githubusercontent.com/aisyah-rest/mangkane/main/Mangkanenya/${command}.mp3`

await conn.sendFile(m.chat, audio, 'error.mp3', null, fkontak, true, {
type: 'audioMessage', 
ptt: false, seconds: 0,contextInfo: {
         externalAdReply: { showAdAttribution: true,
 mediaUrl: 'www.instagram.com/l_.bot',
    mediaType: 2, 
    description: 'www.instagram.com/l_.bot',
    title: "Now Playing...",
    body: wm,
    thumbnail: await (await fetch('https://telegra.ph/file/0b903a72607d1c3fe93e1.jpg')).buffer(),
    sourceUrl: 'www.instagram.com/l_.botr'
 	  /*   sourceUrl: sig,
           title: '◄⟬ ●━━━ ⧏ ⧎ ⧐ ━━━● ⟭►',  
            body: 'Now Playing...', 
           thumbnail: await (await fetch('https://telegra.ph/file/c72133b197a68d3ea514d.jpg')).buffer()*/
}
     }
    })
}

handler.help = ['mangkane25','mangkane26','mangkane27','mangkane28','mangkane29','mangkane30','mangkane31','mangkane32','mangkane33','mangkane34','mangkane35','mangkane36','mangkane37','mangkane38','mangkane39','mangkane40','mangkane41','mangkane42','mangkane43','mangkane44','mangkane45','mangkane46','mangkane47','mangkane48','mangkane49','mangkane50','mangkane51','mangkane52','mangkane53','mangkane54']
handler.tags = ['sound']
handler.command = /^(mangkane25|mangkane26|mangkane27|mangkane28|mangkane29|mangkane30|mangkane31|mangkane32|mangkane33|mangkane34|mangkane35|mangkane36|mangkane37|mangkane38|mangkane39|mangkane40|mangkane41|mangkane42|mangkane43|mangkane44|mangkane45|mangkane46|mangkane47|mangkane48|mangkane49|mangkane50|mangkane51|mangkane52|mangkane53|mangkane54)$/i
handler.owner = false
export default handler
