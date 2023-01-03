import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await conn.sendButton(m.chat, `*ʜᴀʟʟᴏ*\n*ʜᴀʟʟᴏ ꜱᴀʏᴀ ᴀᴅᴀʟᴀʜ ʟ-ʙᴏᴛᴢ, ʙᴏᴛ ᴀᴛᴀᴜ ʙᴜɪʟᴅ-ᴏᴘᴇʀᴀᴛᴇ-ᴛʀᴀɴꜱꜰᴇʀ ᴀᴅᴀʟᴀʜ ᴘʀᴏɢʀᴀᴍ ᴋᴏᴍᴘᴜᴛᴇʀ ʏᴀɴɢ ᴅɪᴊᴀʟᴀɴᴋᴀɴ ᴜɴᴛᴜᴋ ᴍᴇʟᴀᴋᴜᴋᴀɴ ᴘᴇᴋᴇʀᴊᴀᴀɴ ᴏᴛᴏᴍᴀᴛɪꜱ, ᴅᴇɴɢᴀɴ ᴀᴅᴀɴʏᴀ ꜰɪᴛᴜʀ ʙᴏᴛ ᴛᴇɴᴛᴜ ᴀᴋᴀɴ ᴍᴇᴍʙᴀɴᴛᴜ ᴀɴᴅᴀ ᴜɴᴛᴜᴋ ꜱᴇᴀʀᴄʜɪɴɢ, ᴅᴏᴡɴʟᴏᴀᴅᴇʀ, ʙᴇʀꜱᴇɴᴀɴɢ-ꜱᴇɴᴀɴɢ, ᴅʟʟ*\n \n \n*ᴄᴀᴛᴀᴛᴀɴ*\n▸ʙᴏᴛ ɴʏᴀ ᴀᴋᴛɪꜰ ᴊɪᴋᴀ ᴛᴇʀᴅᴀᴘᴀᴛ ᴛᴜʟɪꜱᴀɴ ᴏɴʟɪɴᴇ ᴅɪʙᴀᴡᴀʜ ɴᴏᴍᴏʀ/ɴᴀᴍᴀ ᴋᴏɴᴛᴀᴋ\n ▸ ᴋᴀʟᴏ ʙᴏᴛ ɴɢɢᴀᴋ ᴀᴋᴛɪꜰ ᴀʀᴛɪɴʏᴀ ʟᴀɢɪ ᴀᴅᴀ ᴘᴇʀʙᴀɪᴋᴀɴ\n ▸ɢᴜɴᴀᴋᴀɴ ᴅᴇɴɢᴀɴ ʙɪᴊᴀᴋ ʏᴀ ᴋᴀᴋ`,wm + '\n\n' + botdate, giflogo, [['ᴀʟʟ ᴍᴇɴᴜ','.? all'],['ʟɪsᴛ ᴍᴇɴᴜ','.siuuu|.listmenu']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: bottime,
                        body: 'Total Cintaku Padamu',          previewType: 0,
                        thumbnail: fs.readFileSync("./thumbnail.jpg"),
                        sourceUrl: sig
                      }}
})
}


handler.help = ['totalfitur']
handler.tags = ['info']
handler.command = /^(menu|help|co)$/i
export default handler
