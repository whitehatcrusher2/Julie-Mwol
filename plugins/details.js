const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'help', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://i.imgur.com/3OvS30u.jpeg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `┌─〔 *_ᴄᴏᴍᴍᴀɴᴅѕ_* 〕
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
https://chat.whatsapp.com/KVPJ8cQw4lR9zTTFPM8mbH`}) 

}));
