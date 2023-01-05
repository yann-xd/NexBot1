import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {

let stiker = await sticker(null, global.API(`${pickRandom(stikerhuuu)}`), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
    
}

handler.customPrefix = /^(Latif|Encep|Ncep)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
let stikerhuuu = [
 "https://telegra.ph/file/dfbf483c209a31f01b4e5.png",//hengker2
 "https://telegra.ph/file/3007fd47512ba71a50c88.png",//doge
 "https://telegra.ph/file/72ab8915fb4d8eb534d1e.png",//gw udah muak
 "https://telegra.ph/file/ee6eb746f48d09bd945a7.png",//turu
 "https://telegra.ph/file/ac5def3b47309a2669f0e.png",//nggih
]
