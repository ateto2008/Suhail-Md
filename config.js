const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="awabteto@hotmail.com"
global.location="cairo,Egypt."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://awabteto:awabteto@cluster0.texhd9n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://chat.whatsapp.com/ER5t8uFzUcj4OmAWCcJlbM";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaZn6N059PwNW717Ww3Q";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaZn6N059PwNW717Ww3Q" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/7361e8822f4c4d1737132.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "249124701614" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "249124702614";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "249124702614";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/39f7fe63a65c2f412d941.jpg" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,249xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "249224702614";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_46_05_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA5MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjU1LFxuICAgICAgICA4OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDUsXG4gICAgICAgIDk2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTk5LFxuICAgICAgICAxODAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEsXG4gICAgICAgIDU3LFxuICAgICAgICA1MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTEwLFxuICAgICAgICA1NixcbiAgICAgICAgMjUyLFxuICAgICAgICAxODEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTI3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDQ4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICA5MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDc1LFxuICAgICAgICAxMixcbiAgICAgICAgNzEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzksXG4gICAgICAgIDkwLFxuICAgICAgICAyOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTgyLFxuICAgICAgICA3MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQyLFxuICAgICAgICA3NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDg4LFxuICAgICAgICAzOSxcbiAgICAgICAgMjUzLFxuICAgICAgICA3MixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjI2LFxuICAgICAgICA3NSxcbiAgICAgICAgMSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDMxLFxuICAgICAgICA5OSxcbiAgICAgICAgMjI2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTY0LFxuICAgICAgICA5MixcbiAgICAgICAgNjEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTc5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDcyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDExLFxuICAgICAgICAyOSxcbiAgICAgICAgMTczLFxuICAgICAgICA4MixcbiAgICAgICAgMTU3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDU3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTEwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYxLFxuICAgICAgICAyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwLFxuICAgICAgICAxODYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzksXG4gICAgICAgIDQ3LFxuICAgICAgICAxMSxcbiAgICAgICAgNjksXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODIsXG4gICAgICAgIDEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDg0LFxuICAgICAgICAxODQsXG4gICAgICAgIDExNixcbiAgICAgICAgMjAwLFxuICAgICAgICA2MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQxLFxuICAgICAgICA4MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTI1LFxuICAgICAgICA2NixcbiAgICAgICAgMTIxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTksXG4gICAgICAgIDE2NCxcbiAgICAgICAgNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTUwLFxuICAgICAgICA5NCxcbiAgICAgICAgMjI0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTksXG4gICAgICAgIDE3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIwSllqOHRtbFRKYkM2K0diUEM3Ums5TVNNY3BQWkJGc1dMMWZGaU1OaG5RPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI0OTExODIxNTMwM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNkJDOUQ1OTBCNUI4OUY0NjQyNTgwQ0Y2NjNCQjZDRkVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE0ODUxOTYwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm1keWVYWFhsUnVteFhpWDJJT2dIWmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDE2N2Y4ODMtNjJmMS00ODU2LTkyYjQtMDlkMTFlMGRmYjA0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY4LFxuICAgICAgMjQyLFxuICAgICAgMTM4LFxuICAgICAgMTczLFxuICAgICAgMTQ2LFxuICAgICAgMTgzLFxuICAgICAgMjQwLFxuICAgICAgMjA0LFxuICAgICAgMTEyLFxuICAgICAgMzgsXG4gICAgICAyMjgsXG4gICAgICA5OCxcbiAgICAgIDE0MyxcbiAgICAgIDIsXG4gICAgICAxMTgsXG4gICAgICA3MSxcbiAgICAgIDE2LFxuICAgICAgMjA4LFxuICAgICAgMjI4LFxuICAgICAgMTA4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMCxcbiAgICAgIDE4OSxcbiAgICAgIDYwLFxuICAgICAgMzEsXG4gICAgICAxMyxcbiAgICAgIDE4MixcbiAgICAgIDUsXG4gICAgICAxNzMsXG4gICAgICAxMzQsXG4gICAgICA5MSxcbiAgICAgIDE3MixcbiAgICAgIDIwOCxcbiAgICAgIDIyMyxcbiAgICAgIDIwNSxcbiAgICAgIDEyMCxcbiAgICAgIDEzLFxuICAgICAgMCxcbiAgICAgIDE0NyxcbiAgICAgIDE4OSxcbiAgICAgIDI0NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJWTjNYNk5UV1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjQ5MTE4MjE1MzAzOjIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblRcIixcbiAgICBcImxpZFwiOiBcIjI1NDczOTMyNTM5MDg0ODoyMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOSytyOEVGRU82ZzJyRUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkV2Rk52YmU5eStEWng5NzV3djJWYUpUV3ROM3plY3VTTStERWFUdkpXaEE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNDg3aGk5NDc0S0N1TkdyVGFzdmxGR2tGMHpLdmVheUdhSG5aQkhraGoxalU3MjAwa1R2cmx4RHkwME5oWURPQnBtenhoUDFSK2lFOTlqZ3FscDZQQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiclAweTZFVHMrSzZFRDZ3NmFqMnc4c3g2M0JCWmFsaW1MaUhkN3A4bFJteVJ5ZW82VW1ma0ppWm8rbldBTGp0c09yaC9nR3dYdWZpODF3Z1F3UE1BQVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjQ5MTE4MjE1MzAzOjIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE0ODUxOTU1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTUJsXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNQmwuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJJbGIzOWdrRUdZd3FCdWpwQVBIcExQZlE1b1lKNHl6MktONmZwd3B1WmdnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0NzkyNzAyMjYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNDg1MTk1NzA5MFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "A17_Md", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "all",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "بوت عمكم تيتو" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "bot teto🇸🇩",
  packname: process.env.PACK_NAME || "awabofficial",
  botname : process.env.BOT_NAME  || "تيتـو عمكم",
  ownername:process.env.OWNER_NAME|| "It'x A-teto",


  errorChat : process.env.ERROR_CHAT || "false",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "28a488511643f099af3ee201ead77e70";
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
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
