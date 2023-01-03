import db from '../lib/database.js' 
 import { canLevelUp } from '../lib/levelling.js' 
  
 export function before(m) { 
     let user = db.data.users[m.sender] 
     if (!user.autolevelup) 
         return !0 
     let before = user.level * 1 
     while (canLevelUp(user.level, user.exp, global.multiplier)) 
         user.level++ 
  
     if (before !== user.level) { 
         user.tier = global.rpg.tier(user.level).name 
         m.reply(` 
 ᴄᴏɴɢʀᴀᴛᴜʟᴀᴛɪᴏɴs, ${this.getName(m.sender)} ʟᴇᴠᴇʟᴇᴅ ᴜᴩ﹗ 
 • 🏅 ᴩʀᴇᴠɪᴏᴜs ʟᴇᴠᴇʟ : ${before} 
 • 🏅 ɴᴇᴡ ʟᴇᴠᴇʟ : ${user.level} 
 • 🏅 ʀᴏʟᴇ : ${user.tier} 
 ᴜsᴇ *.profile* ᴛᴏ ᴄʜᴇᴄᴋ 
         `.trim()) 
     } 
 } 
 export const disabled = true
