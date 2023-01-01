/**
 * Jangan Di Hapus!!
 * 
 * Buatan @SaipulAnuar (ᴹᴿ᭄ King Of Bear ×፝֟͜×)
 * Youtube: https://youtu.be/pwLZpdfO8AU
 * 
 * Ingin bikin fitur tapi tidak bisa coding?
 * hubungi: https://wa.me/6288279268363
 * 
 */

let handler = async (m, { conn, text, usedPrefix, command }) => {
    conn.menfess = conn.menfess ? conn.menfess : {}
    if (!text) throw `*Format :*\n\n${usedPrefix + command} no tujuan|nama|pesan\n\n*Contoh:* .menfes 6281214909605|bot|hai.\n\n*Contoh:* ${usedPrefix + command} \n ◉ Berawal dari 628xxx tanpa spasi\n ◉ Boleh pakai nama samaran\n ◉ Jangan digunakan untuk hal negatif ya kak😃.`;
    let [jid, name, pesan] = text.split('|');
    if ((!jid || !name || !pesan)) throw `*Format :*\n\n${usedPrefix + command} no tujuan|nama|pesan\n\n*Contoh:* .menfes 6281214909605|bot|hai.\n\n*Note:* ${usedPrefix + command} \n ◉ Berawal dari 628xxx tanpa spasi\n ◉ Boleh pakai nama samaran\n ◉ Jangan digunakan untuk hal negatif ya kak😃.`;
    jid = jid.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    let data = (await conn.onWhatsApp(jid))[0] || {};
    if (!data.exists) throw 'Nomer tidak terdaftar di whatsapp.';
    if (jid == m.sender) throw 'tidak bisa mengirim pesan menfess ke diri sendiri.'
    let mf = Object.values(conn.menfess).find(mf => mf.status === true)
    if (mf) return !0
    try {
    	let id = + new Date
        let txt = `Hai kak, kamu menerima pesan Menfess nih.\n\nDari: *${name}*\nPesan: ${pesan}\n\nMau balas pesan ini kak? bisa kak. kakak tinggal ketik pesan kakak nanti saya sampaikan ke pengirim menfes.`.trim();
        await conn.sendButton(data.jid, txt, wm, ['Balas Pesan', '.balasmenfess'], null)
        .then(() => {
            m.reply('Berhasil mengirim pesan menfess.')
            conn.menfess[id] = {
                id,
                dari: m.sender,
                nama: name,
                penerima: data.jid,
                pesan: pesan,
                status: false
            }
            return !0
        })
    } catch (e) {
        console.log(e)
        m.reply('eror');
    }
}
handler.tags = ['Menfess']
handler.help = ['menfess', 'mfs'].map(v => v + ' <nomor|nama pengirim|pesan>')
handler.command = /^(mfs|menfess|menfes)$/i
handler.private = true

export default handler
