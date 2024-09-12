const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const fs = require('fs');
const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'thelp', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    const rashi = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "⦁⦁ Success! ⦁⦁", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./logo.jpg')}}}
    
    r_text[0] = "https://i.imgur.com/3OvS30u.jpeg";
    
    
    var i = Math.floor(1*Math.random())

    var img = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(img.data), MessageType.image, { mimetype: Mimetype.png,quoted: rashi, caption: `┌─〔 *_ᴄᴏᴍᴍᴀɴᴅѕ_* 〕
┊
┊➥   ʜᴇͧʀᷤᴍͤɪͬ† ⚚ ᴘɪⷡᴋⷪᴀⷮᴄᷤʜᴜ 
└───────────────〄

╔════════════════════❍
║⛀       *〚 ᴄᴏᴍᴍᴀɴᴅѕ⚚ 〛*
║⛂╭─────────────────⊷
║⛂├────〖 *ᴍᴇᴅɪᴀ* 〗
║⛂│
║⛂│➮ .ѕᴏɴɢ
║⛂│➮ .ᴠɪᴅᴇᴏ
║⛂│➮ .ɪɴѕᴛᴀ 
║⛂│➮ .ʏᴛ
║⛂│
║⛁├────〖 *ᴄᴏɴᴠᴇʀᴛ* 〗
║⛁│
║⛁│☛.ɢɪғ
║⛁│☛.ᴍᴘ3
║⛁│☛.ᴛᴛѕ
║⛁│☛.ɪᴍɢ
║⛁│☛.ѕᴛɪᴄᴋᴇʀ
║⛁│☛.ᴀᴛᴛᴘ
║⛁│☛.ᴛᴛᴘ
║⛁│☛.ᴘʜᴏᴛᴏ
║⛁│☛.2ɪᴍɢ
║⛃│
║⛃├───〖 *ᴍᴀᴋᴇʀ* 〗
║⛃│
║⛃│➣ .ᴍᴏʀᴇᴛxᴛ
║⛃│➣ .𝟸ᴍᴏʀᴇᴛxᴛ
║⛃│➣ .xᴍᴇᴅɪᴀ
║⛃│➣ .ᴍᴍᴘᴀᴄᴋ
║⛃│
║⛀├───〖 *ѕᴇᴀʀᴄʜ* 〗
║⛀│
║⛀│➢ .ᴡɪᴋɪ
║⛀│➢ .ʟʏʀɪᴄ
║⛀│➢ .ѕʜᴏᴡ
║⛀│➢ .ᴍᴏᴠɪᴇ
║⛀│➢ .ᴡᴇᴀᴛʜᴇʀ
║⛂│
║⛂├───〖 *ᴛᴀɢ* 〗
║⛂│
║⛂│✑ .ᴛᴀɢᴀʟʟ 
║⛂│✑ .ᴛᴀɢᴀᴅᴍɪɴѕ
║⛁│
║⛁├───〖 *ғᴜɴ* 〗
║⛁│
║⛁│➫ .ᴊᴏᴋᴇ
║⛁│➫ .ᴍᴇᴍᴇ
║⛁│➫ .ǫʀ
║⛁│➫ .ᴄʜᴀɴɢᴇѕᴀʏ
║⛁│➫ .ᴛʀᴜᴍᴘѕᴀʏ
║⛁│➫ .ᴄᴏᴍᴘʟɪᴍᴇɴᴛ
║⛃│
║⛃├───〖 *ᴏᴛʜᴇʀ* 〗
║⛃│
║⛃│➮ .ᴀɴɪᴍᴇ
║⛃│➮ .ᴡᴀʟʟᴘᴀᴘᴇʀ
║⛃│➮ .ѕѕ
║⛃│➮ .ᴅɪᴄᴛ
║⛃│➮ .ѕʜᴏʀᴛ
║⛃│➮ .ᴛʀᴛ
║⛃│➮ .ʀᴇᴍᴏᴠᴇʙɢ
║⛀│
║⛀├──〖 *ᴏᴡɴᴇʀ ᴄᴍɴᴅѕ* 〗
║⛀│
║⛀│☞ .ғᴜʟʟᴇᴠᴀ 
║⛀│☞ .ᴀᴜᴛᴏʙɪᴏ
║⛀│☞ .ʙᴀɴ
║⛀│☞ .ᴀᴅᴅ
║⛀│☞ .ᴘʀᴏᴍᴏᴛᴇ
║⛀│☞ .ᴅᴇᴍᴏᴛᴇ
║⛀│☞ .ᴍᴜᴛᴇ
║⛀│☞ .ᴜɴᴍᴜᴛᴇ
║⛀│☞ .ɪɴᴠɪᴛᴇ
║⛀│☞ .ѕᴇᴛᴠᴀʀ
║   ╰───────────────⊷
╚═══════════════════❍
 © ᴄᴏᴅᴇᴅ ʙʏ ᴀᴅᴀʀѕʜ

ɢʀᴏᴜᴘ ʟɪɴᴋ 🔗
https://chat.whatsapp.com/KVPJ8cQw4lR9zTTFPM8mbH`}
  )}))
