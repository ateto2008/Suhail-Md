const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://King-MdIsbot:King-MdIsbot@cluster0.hikjrg2.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/atetoofficial";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaZn6N059PwNW717Ww3Q";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaZn6N059PwNW717Ww3Q" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/7361e8822f4c4d1737132.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "249124702614";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "249124702614";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_00_05_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDgwLFxuICAgICAgICAxNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDc2LFxuICAgICAgICAzOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAzMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTE3LFxuICAgICAgICA0NixcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDc2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTgxLFxuICAgICAgICAwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMTksXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTExLFxuICAgICAgICA5NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA0MSxcbiAgICAgICAgODcsXG4gICAgICAgIDIzNixcbiAgICAgICAgNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjIyLFxuICAgICAgICA1OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAzMCxcbiAgICAgICAgMjM2LFxuICAgICAgICA5MCxcbiAgICAgICAgODIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwNixcbiAgICAgICAgNCxcbiAgICAgICAgMTE1LFxuICAgICAgICA3OCxcbiAgICAgICAgOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDczLFxuICAgICAgICAxMjksXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTExLFxuICAgICAgICA1NixcbiAgICAgICAgMzUsXG4gICAgICAgIDYwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTU3LFxuICAgICAgICA5MixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyLFxuICAgICAgICAzOCxcbiAgICAgICAgNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTIwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTU3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDg3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMixcbiAgICAgICAgMTQ3LFxuICAgICAgICA4MSxcbiAgICAgICAgMjI5LFxuICAgICAgICA3MSxcbiAgICAgICAgODgsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDkzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTE3LFxuICAgICAgICA4MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDksXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDksXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MixcbiAgICAgICAgMjAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMzIsXG4gICAgICAgIDM1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDkxLFxuICAgICAgICA5MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxODIsXG4gICAgICAgIDUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzksXG4gICAgICAgIDI3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTg3LFxuICAgICAgICA3NixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDY2LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEwLFxuICAgICAgICA1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzksXG4gICAgICAgIDg1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjEyLFxuICAgICAgICA5MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjI5LFxuICAgICAgICA1MixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDc0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDUwLFxuICAgICAgICAxODQsXG4gICAgICAgIDkyLFxuICAgICAgICAxODIsXG4gICAgICAgIDEyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDQxLFxuICAgICAgICA0MixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNXhnYTlDMjNscUR6TXFyZ1VmUy9mdDZ0d1liTDJEc2xWS0NEcVFHVVVpST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNDkxMTgyMTUzMDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkIzMjhFRDMwMjQwODY5OUM3NUM3NEM5ODM2Rjg4NEQwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNDc3MDAyM1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ5X2t3ZzlXZlQ0V1lCQVR6QVViRkRRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjlkM2I4OGQxLTJmN2ItNGYwNC1iMWVjLWUxMDFhZDZhNjRlNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5LFxuICAgICAgNjksXG4gICAgICAyNDYsXG4gICAgICA1MSxcbiAgICAgIDM1LFxuICAgICAgMjM1LFxuICAgICAgMjMzLFxuICAgICAgMTYsXG4gICAgICAxMzQsXG4gICAgICA5MSxcbiAgICAgIDExMyxcbiAgICAgIDE0MCxcbiAgICAgIDg0LFxuICAgICAgMjE4LFxuICAgICAgNjEsXG4gICAgICAyMTQsXG4gICAgICAyNCxcbiAgICAgIDE4NSxcbiAgICAgIDExOSxcbiAgICAgIDE1N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTksXG4gICAgICAxNjMsXG4gICAgICAyMzgsXG4gICAgICAxNzMsXG4gICAgICAxMixcbiAgICAgIDkzLFxuICAgICAgNjksXG4gICAgICA0OSxcbiAgICAgIDkyLFxuICAgICAgMjI0LFxuICAgICAgODUsXG4gICAgICAxNjQsXG4gICAgICA1MSxcbiAgICAgIDEyNCxcbiAgICAgIDEzMCxcbiAgICAgIDIzMCxcbiAgICAgIDIyNCxcbiAgICAgIDExNCxcbiAgICAgIDQ1LFxuICAgICAgMTA5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSWFoek00REVOMmcxYkVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI5RDFzcjVQTEQrMlJQOU1SSFZRZ0tLUURXYkZidFBjell3OVhqYllTMkM4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInZ1dStyUEptVU41bkxBanNNYlRpbkw3T3RkUEt6cnh4ME0vVEJYRFEzdThobGp4ZG1wQ3ZqNVd3Ui96NkpEWWZoYko0Y2NBaUdJM204alcwUm5kMkNnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkh2NFpkaWJ0bEtjaEx2Qi9tbEVRcE5PRnpwWU10Z2ZzUmhiU29HSUJ1NnR4aEkzaXJxY1ppODFSTStPM3A2ZVVDS3NkSVRnYTJ4UHZLTVJmeGVDZGlnPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjQ5MTE4MjE1MzAzOjIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNTQ3MzkzMjUzOTA4NDg6MjBAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiVGV0byBSb2JvdCDwn6SWXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNDkxMTgyMTUzMDM6MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDQ3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTQ3NzAwMTYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPVjhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9WOC5qc29uIjogIntcImtleURhdGFcIjpcIlZLZENDdDF3bm51QS9HT3MvUnp1N1JWN0dHS3VnYnFwY1MvQjgrQWRRRGs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTcwMTMzNjM4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTQ3NzAwMTkyNDZcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

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
