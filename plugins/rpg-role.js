let handler = async (m, { conn }) => {
let user = global.db.data.users[m.sender]
let rol = `${htki} TIER ${htka}

┏━━━━ꕥ〔 *TIER* 〕ꕥ━━━⬣
┃
┃ *YOUR TIER* : ${user.tier}
┃
┃⚙️•  ɴᴘᴄ
┃🪪 • ɴᴏʀᴍᴀʟ
┃👤 • ʙᴇɢɢɪɴᴇʀ ɪɪɪ
┃👤 • ʙᴇɢɢɪɴᴇʀ ɪɪ
┃👤 • ʙᴇɢɢɪɴᴇʀ ɪ
┃🎯 • ᴘʀᴏ ɪɪɪ
┃🎯 • ᴘʀᴏ ɪɪ
┃🎯 • ᴘʀᴏ ɪ
┃🔰 • ᴍᴀꜱᴛᴇʀ ɪɪɪ
┃🔰 • ᴍᴀꜱᴛᴇʀ ɪɪ
┃🔰 • ᴍᴀꜱᴛᴇʀ ɪ
┃⚜️ • ɢʀᴀɴᴅ ᴍᴀꜱᴛᴇʀ ɪɪɪ
┃⚜️ • ɢʀᴀɴᴅ ᴍᴀꜱᴛᴇʀ ɪɪ
┃⚜️ • ɢʀᴀɴᴅ ᴍᴀꜱᴛᴇʀ ɪ
┃👾 • ʟᴇɢᴇɴᴅ ɪɪɪ
┃👾 • ʟᴇɢᴇɴᴅ ɪɪ
┃👾 • ʟᴇɢᴇɴᴅ ɪ
┃✨ • ᴀᴅᴀᴍᴀɴᴛɪᴛᴇ ɪɪɪ
┃✨ • ᴀᴅᴀᴍᴀɴᴛɪᴛᴇ ɪɪ
┃✨ • ᴀᴅᴀᴍᴀɴᴛɪᴛᴇ ɪ
┃🐲 •ᴍʏᴛʜɪᴄ ɪɪɪ
┃🐲 • ᴍʏᴛʜɪᴄ ɪɪ
┃🐲 • ᴍʏᴛʜɪᴄ ɪ
┃👑 • ʟᴏʀᴅ ɪɪɪ
┃👑 • ʟᴏʀᴅ ɪɪ
┃👑 • ʟᴏʀᴅ ɪ
┃🛡️ • ɪᴍᴍᴏʀᴛᴀʟ ɪɪɪ
┃🛡️ • ɪᴍᴍᴏʀᴛᴀʟ ɪɪ
┃🛡️ • ɪᴍᴍᴏʀᴛᴀʟ ɪ
┃💀 • ɢᴏᴅ ɪɪɪ
┃💀 • ɢᴏᴅ ɪɪ
┃💀 • ɢᴏᴅ ɪ
┃⚔️ • ᴄᴏꜱᴍɪᴄ ɪɪɪ
┃⚔️ • ᴄᴏꜱᴍɪᴄ ɪɪ
┃⚔️ • ᴄᴏꜱᴍɪᴄ ɪ
┃∞  • ɪɴꜰɪɴɪᴛʏ ɪɪɪ 
┃∞  • ɪɴꜰɪɴɪᴛʏ ɪɪ 
┃∞  • ɪɴꜰɪɴɪᴛʏ ɪ 
┃💎 • ᴀʙꜱᴏʟᴜᴛᴇ ɪɪɪ
┃💎 • ᴀʙꜱᴏʟᴜᴛᴇ ɪɪ
┃💎 • ᴀʙꜱᴏʟᴜᴛᴇ ɪ 
┃☠️ • ᴛʜᴇ ʙᴏᴜɴᴅʟᴇꜱꜱ
┗━━━━━━━━ꕥ`
conn.reply(m.chat, rol, )
}
handler.command = ['tier']

export default handler
