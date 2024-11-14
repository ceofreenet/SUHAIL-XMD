const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_31_11_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQzLFxuICAgICAgICA3LFxuICAgICAgICAxODQsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTc5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTg4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxODUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjM5LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDMsXG4gICAgICAgIDYyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTEwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTcwLFxuICAgICAgICA1OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjAzLFxuICAgICAgICAzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4LFxuICAgICAgICA0MixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMTUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTE2LFxuICAgICAgICA2OSxcbiAgICAgICAgODAsXG4gICAgICAgIDYzLFxuICAgICAgICA5NixcbiAgICAgICAgNTksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTE0LFxuICAgICAgICA3OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQ1LFxuICAgICAgICA4NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTg1LFxuICAgICAgICA0MixcbiAgICAgICAgODIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTcwLFxuICAgICAgICA2OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNixcbiAgICAgICAgODgsXG4gICAgICAgIDcwLFxuICAgICAgICA0LFxuICAgICAgICAxMDksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNixcbiAgICAgICAgNjgsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2LFxuICAgICAgICA0OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMzAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDMyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTksXG4gICAgICAgIDE1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDg0LFxuICAgICAgICA2MCxcbiAgICAgICAgOSxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTksXG4gICAgICAgIDExMixcbiAgICAgICAgMTkyLFxuICAgICAgICAxODAsXG4gICAgICAgIDIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAzOSxcbiAgICAgICAgODEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTE2LFxuICAgICAgICAzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNCxcbiAgICAgICAgMTE3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxODAsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjAwLFxuICAgICAgICA1NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDU5LFxuICAgICAgICA5MixcbiAgICAgICAgODYsXG4gICAgICAgIDcwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2NixcbiAgICAgICAgMzYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOCxcbiAgICAgICAgMjA5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTM4LFxuICAgICAgICA3NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDAsXG4gICAgICAgIDQwLFxuICAgICAgICA3NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTExLFxuICAgICAgICA5MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgODMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDU4LFxuICAgICAgICA0MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDMxLFxuICAgICAgICA2NyxcbiAgICAgICAgMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDg1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDc2LFxuICAgICAgICAzNixcbiAgICAgICAgMzUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjA5LFxuICAgICAgICAxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJiUVdrZGFpdjhyWUhqTWdib0lXTFl0azVrME1KbEk5WTJCVHJINm90bmpnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1Njc4MzY3ODU3N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQzgyNjdGQjA2QUQwMkUzNjFFOUI4QjY3MEQ2MzhFRjdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMxNjA5MDc2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImhyWFV5UlE2UkVxbTVMeWNBSS1jTVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTM0MjRkN2QtMmE5OC00MzU4LWFiZDctYTM1ZjQxMDAwOTMyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUyLFxuICAgICAgMjA3LFxuICAgICAgMTE2LFxuICAgICAgMTk3LFxuICAgICAgMTE2LFxuICAgICAgMTg4LFxuICAgICAgMTkzLFxuICAgICAgMTA5LFxuICAgICAgMTMxLFxuICAgICAgNjYsXG4gICAgICAyMzAsXG4gICAgICA0MCxcbiAgICAgIDE3MixcbiAgICAgIDEyMSxcbiAgICAgIDExNCxcbiAgICAgIDI0MCxcbiAgICAgIDE5NyxcbiAgICAgIDIyNyxcbiAgICAgIDIxNSxcbiAgICAgIDI0NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTQsXG4gICAgICA4MSxcbiAgICAgIDMyLFxuICAgICAgMzgsXG4gICAgICAxNTQsXG4gICAgICAxMDEsXG4gICAgICAyNTIsXG4gICAgICA1OSxcbiAgICAgIDIzMyxcbiAgICAgIDg3LFxuICAgICAgMTM0LFxuICAgICAgMjMxLFxuICAgICAgNjgsXG4gICAgICA3MCxcbiAgICAgIDE0NixcbiAgICAgIDE3NSxcbiAgICAgIDE5OSxcbiAgICAgIDU4LFxuICAgICAgMTExLFxuICAgICAgMTA1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjJNMjdYWUExXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTY3ODM2Nzg1Nzc6MjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEyMzY0NDAzODY0Nzg2NjoyOUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKUzN1Sm9FRU9tRDJia0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImVZcHM3OXhaR1V6Y1hKOGlnMU1IdHdNWGpPaURIcytnb3psSzZKTzBPeVE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibS9lTkFKeWlTbzU2RnlUandtTHJZa3VFSXBmdkNqWFdTSlRYYUFYMExvVHJZdzhOVmVlSnlvd205NU1ZV3h5RTZibUdVVjd5QW1yekxOU296MzBMQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUmNxeEhBL0YyMlVTZFVLQnhpTTgydythWkR5dVkzSmZya1Nnb0ZXaE1JTkpkWWhVYzFTUjhwWFZIL1VGbnN2Q1pWTjh0clY0Z3BTbnpURGZHSmJEanc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU2NzgzNjc4NTc3OjI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDM2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzE2MDkwNjksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCblFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJuUS5qc29uIjogIntcImtleURhdGFcIjpcIjk3dEQxVmFPNlJLR0hwNFk2RGgwU1BtcVhtS3lGMU94TXdVWlRMaTN2UGM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTEyOTE5MjM0MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMxNTA3ODU4MTY5XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "true",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
