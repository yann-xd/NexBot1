import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.lolhuman.xyz/api/random/sagiri?apikey=Xynoz'
	conn.sendButtonImg(m.chat, 'Waifu nya om (≧ω≦)', wm, await(await fetch(url)).buffer(), [['🔁Next🔁',`.${command}`]],m)
}
handler.command = /^(sagiri)$/i
handler.tags = ['anime']
handler.help = ['sagiri']
handler.premium = false
handler.limit = true

export default handler
