import fs from 'fs'
const delay = time => new Promise(res => setTimeout(res, time))
export async function before(m) {
	if (!m.chat.endsWith('@s.whatsapp.net')) return !0;
	this.menfess = this.menfess ? this.menfess : {}
	let mf = Object.values(this.menfess).find(v => v.status === false && v.penerima == m.sender)
	if (!mf) return !0
	console.log({ text: m.text, type: m.quoted?.mtype })
	if ((m.text === 'BALAS PESAN' || m.text === '') && m.quoted.mtype == 'buttonsMessage') return m.reply("Silahkan kirim pesan balasan kamu.\nKetik pesan sesuatu lalu kirim, maka pesan otomatis masuk ke target balas pesan.");
	else {
		let txt = `Hᴀɪ ᴋᴀᴋ @${mf.dari.split('@')[0]}, ᴋᴀᴍᴜ ᴍᴇɴᴇʀɪᴍᴀʜ ʙᴀʟᴇsᴀɴ ɴɪʜ.Pesan yang kamu kirim sebelumnya:\n${mf.pesan}\n\nPesan balasannya:\n${m.text}\n`.trim();
		let sblm = `Pᴇsᴀɴ Aɴᴅᴀ Sᴇʙᴇʟᴜᴍɴʏᴀ ➛ ${mf.pesan}\nPᴇsᴀɴ Bᴀʟᴀsᴀɴɴʏᴀ ➨ ${m.text}`
		await this.reply(mf.dari, txt, null).then(() => {
		m.reply('Berhasil mengirim balasan.')
		this.delay(1000)
		delete this.menfess[mf.id]
		return !0
	})
}
