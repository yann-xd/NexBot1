let handler = async (m, { conn }) => {
let info = `
*${htki} VIRUS ${htka}*
          
     🔥By L-Botz🔥
          
                  
–––––– *ᴋᴇʙɪᴊᴀᴋᴀɴ* ––––––
*📮Gunakan Dengan tujuan yang benar. Jangan untuk merugikan orang lain tanpa alasan!*
`
const sections = [
   {
    title: `✃ VIRTEX`,
	rows: [
	    {title: "🌀Power 1", rowId: '.virtex21', description: 'Menampilkan Virtex Power 1' },
	    {title: "🌀Power 2", rowId: '.virtex22', description: 'Menampilkan Virtex Power 2' },
	{title: "🌀Power 3", rowId: '.virtex23', description: 'Menampilkan Virtex Power 3' },
	{title: "🌀Power 4", rowId: '.virtex24', description: 'Menampilkan Virtex Power 4' },
	{title: "🌀Power 5", rowId: '.virtex25', description: 'Menampilkan Virtex Power 5' },
	]
    }, {
    title: `✃ INFO`,
	rows: [
	    {title: "🔥Download WhatsApp Imune", rowId: '.imune', description: 'Download WhatsApp Kebal' },
	    {title: "🔥Virus Troli", rowId: '.virustroli', description: 'Liat list Virtex buat apaan?' },
	    ]
        }, {
    title: `✃ BUY`,
	rows: [
	    {title: "💸Upgrade Premium", rowId: '.sewa', description: 'Dan unclock Fitur premium lainya!' },
	    ]
        },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "👺GASS",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}
handler.command = /^powerlist$/i
handler.premium = false

export default handler
