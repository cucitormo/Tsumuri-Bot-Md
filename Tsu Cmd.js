/*
    CREDIST !!!
        > Hw Mods [ Base ]
        > Rerez Hosting [ Developer ]

    SAYA SANGAT BERTERIMA KASIH JIKA KALIAN MEMBIARKAN CREDIT INI TANMPA MENGHAPUS ATAU MENGGANTI NYA 
    TOLONG HARGAI YAA
    
WA ME : https://wa.me/6282328190003
TE ME : https://t.me/rerez_x_hosting
YT ME : https://www.youtube.com/@RerezHosting
SALURAN WA : https://whatsapp.com/channel/0029VaeYK1cBA1f8AOFnYY3A
    
WOI JB KONTOL JANGAN DI JUAL BANGSAT 🤬

*/
process.on('uncaughtException', console.error)
require('./setting')
require('./lib/tsumenu') 
require('./chglg')
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageContent, generateWAMessage, downloadContentFromMessage, areJidsSameUser, getContentType } = global.baileys
const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = require("@whiskeysockets/baileys")
const fs = require('fs')
const cron = require('node-cron')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const speed = require('performance-now')
const axios = require('axios')
const fsx = require('fs-extra')
const dns = require('dns');
const FormData = require('form-data')
const gtts = require('node-gtts')
const ytdl = require("ytdl-core")
const cheerio = require('cheerio');
const ms = require("ms");
const { Aki } = require('aki-api')
const { Chess } = require('chess.js');
const dare = require('./lib/dare')
const truth = require('./lib/truth')
const crypto = require('crypto')
const fg = require('api-dylux')
const https = require('https')
const tkApi = require('@tobyg74/tiktok-api-dl')
const { URL_REGEX } = require('@whiskeysockets/baileys')
const { fileTypeFromBuffer } = require('file-type')
const PhoneNumber = require('awesome-phonenumber')
const { Pixiv } = require('@ibaraki-douji/pixivts')
const pixiv = new Pixiv()
const bingi = require('bing-scraper')
const phd = require('@justalk/pornhub-api')
const xfar = require('xfarr-api')
const dylux = require('api-dylux')
const { translate } = require('@vitalets/google-translate-api')
const nou = require("node-os-utils");
const dhn = require('dhn-api')
const g4f = require("g4f")
const path = require('path')
const { pipeline } = require('stream')
const { promisify } = require("util")
const jimp = require('jimp')
const kotz = require("kotz-api");
const zsExtract = require('zs-extract')
const acrcloud = require('acrcloud')
const { ocrSpace } = require('ocr-space-api-wrapper')
const mann = require('d-scrape')
const content = JSON.stringify(m.message)
const isQuotedViewonce = m.quoted ? content.includes('viewOnceMessage') ? true : false : true
const { youtubedl, youtubedlv2, jadwalsholat, mediafiredl, kodepos } = require('@bochilteam/scraper')
const ffmpeg = require('fluent-ffmpeg')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const maker = require('mumaker')
const yts = require("yt-search")
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,  Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api")
const jsobfus = require('javascript-obfuscator')
const { Configuration, OpenAIApi } = require('openai')
const { exec, spawn, execSync } = require("child_process")
const { addExif } = require('./lib/exif')
const { smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, formatp, parseMention, getRandom, getGroupAdmins,generateProfilePicture, toRupiah, shorturl, enumGetKey, sort,pickRandom, toNumber, randomNumber } = require('./lib/myfunc')
const { TelegraPH } = require("./lib/TelegraPH")
const { search, ytmp3, ytmp4 } = require('./lib/searchyt')
const contacts = JSON.parse(fs.readFileSync("./database/contacts.json"))
const ntilink = JSON.parse(fs.readFileSync("./lib/antilink.json"))
const { ssweb, tiktok, remini,findSongs } = require("./lib/scraper")
const { color, bgcolor } = require('./lib/color')
const { uptotelegra } = require('./lib/upload')
const { 
getRegisteredRandomId, 
addRegisteredUser, 
createSerial, 
checkRegisteredUser 
} = require('./lib/register.js')
const teks = "0 - Ya\n1 - Tidak\n2 - Saya Tidak Tau\n3 - Mungkin\n4 - Mungkin Tidak\n5 - Kembali ke pertanyaan sebelumnya";

// game database
let tebaklagu = []
let _family100 = []
let kuismath = []
let tebakgambar = []
let tebakkata = []
let caklontong = []
let caklontong_desk = []
let tebakkalimat = []
let tebaklirik = []
let tebaktebakan = []
let tebakbendera = []
let tebakbendera2 = []
let tebakkabupaten = []
let tebakkimia = []
let tebakasahotak = []
let tebaksiapakahaku = []
let tebaksusunkata = []
let tebaktekateki = []
//=================================================//
module.exports = TsuCnn = async (TsuCnn, m, chatUpdate, store) => {
 try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'interactiveResponseMessage') ? appenTextMessage(JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id, chatUpdate) : (m.mtype == 'templateButtonReplyMessage') ? appenTextMessage(m.msg.selectedId, chatUpdate) : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''

//WM By Rulzz, Titenono lek ko hapus le😹
 async function appenTextMessage(text, chatUpdate) {
let messages = await generateWAMessage(m.chat, { text: text, mentions: m.mentionedJid }, {
userJid: TsuCnn.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, TsuCnn.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'}
TsuCnn.ev.emit('messages.upsert', msg)}
var budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : ''
//=================================================//
const Styles = (text, style = 1) => {
var xStr = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'.split('');
  var yStr = {
1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢ1234567890'
};
var replacer = [];
xStr.map((v, i) =>
replacer.push({
original: v,
convert: yStr[style].split('')[i]
})
);
var str = text.toLowerCase().split('');
var output = [];
str.map((v) => {
const find = replacer.find((x) => x.original == v);
find ? output.push(find.convert) : output.push(v);
});
return output.join('');
};

const replygclue = (text, style = 1) => {
var xStr = 'aiueo'.split('');
  var yStr = {
1: '_____'
};
var replacer = [];
xStr.map((v, i) =>
replacer.push({
original: v,
convert: yStr[style].split('')[i]
})
);
var str = text.toLowerCase().split('');
var output = [];
str.map((v) => {
const find = replacer.find((x) => x.original == v);
find ? output.push(find.convert) : output.push(v);
});
return output.join('');
};

const pushname = m.pushName || "No Name"
const isCmd = budy.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''//Kalau mau Single prefix Lu ganti pake ini = const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const botNumber = await TsuCnn.decodeJid(TsuCnn.user.id)
const isRegistered = checkRegisteredUser(m.sender)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const text = q = args.join(" ")
const { type, quotedMsg, mentioned, now, fromMe } = m
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = mek.key.remoteJid
const groupMetadata = m.isGroup ? await TsuCnn.groupMetadata(from).catch(e => {}) : ''
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const AntiLink = m.isGroup ? ntilink.includes(from) : false 
const jangan = m.isGroup ? ntilink.includes(m.chat) : false	
const welcm = m.isGroup ? wlcm.includes(from) : false
const chat = m.isGroup?[m.chat] : false
const qmsg = (quoted.msg || quoted)
const content = JSON.stringify(m.message)
const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
//const Input = mentionByTag[0] ? mentionByTag[0] : q ? numberQuery : false
const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
const froms = m.quoted ? m.quoted.sender : text ? (text.replace(/[^0-9]/g, '') ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false) : false;
const qtod = m.quoted? "true":"false"
//================== [ TIME ] ==================//
const hariini = moment.tz('Asia/Makassar').format('dddd, DD MMMM YYYY')
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const tanggal2 = moment.tz('Asia/Jakarta').format('DD/MM/YY')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')


const time2 = moment().tz('Asia/Makassar').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam 🏙️'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Petang 🌆'
}
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore 🌇'
}
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang 🌤️'
}
if(time2 < "10:00:00"){
var ucapanWaktu = 'Selamat Pagi 🌄'
}
if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Subuh 🌆'
}
if(time2 < "03:00:00"){
var ucapanWaktu = 'Selamat Tengah Malam 🌃'
}
//=================================================//
// function

//SKREP
const { bard } = require('./lib/bard')

const fcall = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast"} : {}) },'message': {extendedTextMessage: {text: body}}}

//================== [ RESPON ALL GAME ] ==================//
const akinator2 = {
key: {
participant: '0@s.whatsapp.net',
...(m.chat ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
locationMessage: {
name: `Akinator`,
jpegThumbnail:fs.readFileSync("./media/akinator.jpg"),
}
}}

const mp3k = {
key: {
participant: '0@s.whatsapp.net',
...(m.chat ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
locationMessage: {
name: `Mp3 Download`,
jpegThumbnail: "",
}
}}

const mp4k = {
key: {
participant: '0@s.whatsapp.net',
...(m.chat ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
locationMessage: {
name: `Mp4 Download`,
jpegThumbnail: "",
}
}}

const kalgans = {
key: {
participant: '0@s.whatsapp.net',
...(m.chat ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
locationMessage: {
name: `${botname}`,
jpegThumbnail: "",
}
}}

const kalgan2 = {
key: {
participant: `${m.sender.split('@')[0]}@s.whatsapp.net`,
...(m.chat ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
locationMessage: {
name: `${Styles2(`${prefix+command}`)}`,
jpegThumbnail: "",
}
}}

const limituse = {
key: {
participant: '0@s.whatsapp.net',
...(m.chat ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
locationMessage: {
name: `ʟɪᴍɪᴛ ʙᴇʀᴋᴜʀᴀɴɢ 1.`,
jpegThumbnail: "",
}
}}

const reply2 = (teks) => {
TsuCnn.sendMessage(m.chat, {
document: fs.readFileSync("./package.json"),
fileName: 'Tsumuri In Here',
mimetype: 'application/msword',
jpegThumbnail:fs.readFileSync("./media/Rezz.jpg"),
caption: `\n${teks}`,
}, { quoted: kalgans,ephemeralExpiration: 86400});
}

async function reply(teks) {
const nedd = {      
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: global.botname,
newsletterJid: global.idcennel,
},
externalAdReply: {  
showAdAttribution: true,
title: `${botname}`,
body: "Tsumuri-Md",
previewType: "VIDEO",
thumbnailUrl: thumbnail, 
sourceUrl: "https://whatsapp.com/channel/0029VaeYK1cBA1f8AOFnYY3A", 
},
},
text: teks,
};
return TsuCnn.sendMessage(m.chat, nedd, {
quoted: kalgans,
});
}

async function replylimit(teks) {
if (isCreator) return TsuCnn.sendMessage(m.chat, {text: teks}, {quoted: kalgans})
const lndd = {
text: teks,
}
return TsuCnn.sendMessage(m.chat, lndd, {quoted: limituse, })
}

async function replyk(teks) {
const lndd = {
text: teks,
}
return TsuCnn.sendMessage(m.chat, lndd, {quoted: kalgans, })
}

async function replyj(teks) {
const lndd = {
text: teks,
}
return TsuCnn.sendMessage(m.chat, lndd, {quoted: kalgan2, })
}

async function replyaki(teks) {
const lndd = {
externalAdReply: {
title: `${time}`, 
body: `Akinator Game`,
thumbnailUrl: `https://i.ibb.co.com/sCNNgBP/akinator.png`,
sourceUrl: '', 
mediaType: 1,
renderLargerThumbnail: true
}, 
text: teks,
}
return TsuCnn.sendMessage(m.chat, lndd, {quoted: akinator2, })
}

let pilih = "🌀", bomb = "💣";
if (sender in petakbom) {
if (!/^[1-9]|10$/i.test(body) && !isCmd) return !0;
if (petakbom[sender].petak[parseInt(body) - 1] === 1) return !0;
if (petakbom[sender].petak[parseInt(body) - 1] === 2) {
petakbom[sender].board[parseInt(body) - 1] = bomb;
petakbom[sender].pick++;
TsuCnn.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
petakbom[sender].bomb--;
petakbom[sender].nyawa.pop();

let brd = petakbom[sender].board;
if (petakbom[sender].nyawa.length < 1) {
await reply(`*GAME TELAH BERAKHIR*\nKamu terkena bomb\n\n ${brd.join("")}\n\n*Terpilih :* ${petakbom[sender].pick}\n*Pengurangan Balance :* Rp. 100`);
TsuCnn.sendMessage(m.chat, {react: {text: '😂', key: m.key}})
minBalance(sender, 100)
delete petakbom[sender];
} else await m.reply(`*PILIH ANGKA*\n\nKamu terkena bomb\n ${brd.join("")}\n\nTerpilih: ${petakbom[sender].pick}\nSisa nyawa: ${petakbom[sender].nyawa}`);
return !0;
}
if (petakbom[sender].petak[parseInt(body) - 1] === 0) {
petakbom[sender].petak[parseInt(body) - 1] = 1;
petakbom[sender].board[parseInt(body) - 1] = pilih;
petakbom[sender].pick++;
petakbom[sender].lolos--;
let brd = petakbom[sender].board;
if (petakbom[sender].lolos < 1) {
await reply(`*KAMU HEBAT ಠ⁠ᴥ⁠ಠ*\n\n${brd.join("")}\n\n*Terpilih :* ${petakbom[sender].pick}\n*Sisa nyawa :* ${petakbom[sender].nyawa}\n*Bomb :* ${petakbom[sender].bomb}\n*Hadiah Balance :* Rp. 250`);
addBalance(m.sender, 250)
delete petakbom[sender];
} else m.reply(`*PILIH ANGKA*\n\n${brd.join("")}\n\nTerpilih : ${petakbom[sender].pick}\nSisa nyawa : ${petakbom[sender].nyawa}\nBomb : ${petakbom[sender].bomb}`)
}
}

// GAME TEBAK GAMBAR BY DARWIN

if ((from in tebakgambar)) {
let { soal, jawaban, hadiah, waktu } = tebakgambar[from]
if (budy.toLowerCase() == "nyerah") {
reply(`*<!> Permainan Telah dihentikan**`);
delete tebakgambar[from]
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await reply(`*JAWABAN BENAR*\n\n*Penebak :* @${m.sender.replace(/@.+/g, '')}\n*Jawaban :* ${jawaban}\n*Hadiah Balance :* Rp. 150`);
addBalance(m.sender, 150)
clearTimeout(waktu);
delete tebakgambar[from];
} else TsuCnn.sendMessage(sender, {react: {text: '❌', key: m.key}})
}

// GAME TEBAK ANIME BY DARWIN
if ((from in tebakanime)) {
let { soal, jawaban, hadiah, waktu } = tebakanime[from]
if (budy.toLowerCase() == "nyerah") {
reply(`*<!> Permainan Telah dihentikan*`);
delete tebakanime[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await reply(`*JAWABAN BENAR*\n\n*Penebak :* @${m.sender.replace(/@.+/g, '')}\n*Jawaban :* ${jawaban}\n*Hadiah Balance :* Rp. 200`);
addBalance(m.sender, 200)

clearTimeout(waktu);
delete tebakanime[from];
} else TsuCnn.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME TEBAK LAGU BY DARWIN
if ((from in tebaklagu)) {
let { soal, jawaban, hadiah, waktu } = tebaklagu[from]
if (budy.toLowerCase() == "nyerah") {
reply(`*<!> Permainan Telah dihentikan*`);
delete tebaklagu[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await reply(`*JAWABAN BENAR*\n\n*Penebak :* @${m.sender.replace(/@.+/g, '')}\n*Jawaban :* ${jawaban}\n*Hadiah Balance :* Rp. 200`);
addBalance(m.sender, 200)

clearTimeout(waktu);
delete tebaklagu[from];
} else TsuCnn.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME KUIS BY DARWIN
if ((from in kuis)) {
let { soal, jawaban, hadiah, waktu } = kuis[from]
if (budy.toLowerCase() == "nyerah") {
reply(`*<!> Permainan Telah dihentikan*`);
delete kuis[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await reply(`*JAWABAN BENAR*\n\n*Penebak :* @${m.sender.replace(/@.+/g, '')}\n*Jawaban :* ${jawaban}\n*Hadiah Balance :* Rp. 200`);
addBalance(m.sender, 200)

clearTimeout(waktu);
delete kuis[from];
} else TsuCnn.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME SIAPAKAH AKU BY DARWIN
if ((from in siapakahaku)) {
let { soal, jawaban, hadiah, waktu } = siapakahaku[from]
if (budy.toLowerCase() == "nyerah") {
reply(`*<!> Permainan Telah dihentikan*`);
delete siapakahaku[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await reply(`*JAWABAN BENAR*\n\n*Penebak :* @${m.sender.replace(/@.+/g, '')}\n*Jawaban :* ${jawaban}\n*Hadiah Balance :* Rp. 200`);
addBalance(m.sender, 200)

clearTimeout(waktu);
delete siapakahaku[from];
} else TsuCnn.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME TEBAK KALIMAT BY DARWIN
if ((from in tebakkalimat)) {
let { soal, jawaban, hadiah, waktu } = tebakkalimat[from]
if (budy.toLowerCase() == "nyerah") {
reply(`*<!> Permainan Telah dihentikan*`);
delete tebakkalimat[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await reply(`*JAWABAN BENAR*\n\n*Penebak :* @${m.sender.replace(/@.+/g, '')}\n*Jawaban :* ${jawaban}\n*Hadiah Balance :* Rp. 200`);
addBalance(m.sender, 200)
clearTimeout(waktu);
delete tebakkalimat[from];
} else TsuCnn.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME TEBAK KATA BY DARWIN
if ((from in tebakkata)) {
let { soal, jawaban, hadiah, waktu } = tebakkata[from]
if (budy.toLowerCase() == "nyerah") {
reply(`*<!> Permainan Telah dihentikan*`);
delete tebakkata[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await reply(`*JAWABAN BENAR*\n\n*Penebak :* @${m.sender.replace(/@.+/g, '')}\n*Jawaban :* ${jawaban}\n\n*Game :* Tebak Kata\n*Hadiah Balance :* Rp. 200`);
addBalance(m.sender, 200)
clearTimeout(waktu);
delete tebakkata[from];
} else TsuCnn.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME TEBAK LIRIK BY DARWIN
if ((from in tebaklirik)) {
let { soal, jawaban, hadiah, waktu } = tebaklirik[from]
if (budy.toLowerCase() == "nyerah") {
reply(`*<!> Permainan Telah dihentikan*`);
delete tebaklirik[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await reply(`*JAWABAN BENAR*\n\n*Penebak :* @${m.sender.replace(/@.+/g, '')}\n*Jawaban :* ${jawaban}\n*Hadiah Balance :* Rp. 200`);
addBalance(m.sender, 200)

clearTimeout(waktu);
delete tebaklirik[from];
} else TsuCnn.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME TEBAK KIMIA BY DARWIN
if ((from in tebakkimia)) {
let { soal, jawaban, hadiah, waktu } = tebakkimia[from]
if (budy.toLowerCase() == "nyerah") {
reply(`*<!> Permainan Telah dihentikan*`);
delete tebakkimia[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await reply(`*JAWABAN BENAR*\n\n*Penebak :* @${m.sender.replace(/@.+/g, '')}\n*Jawaban :* ${jawaban}\n*Hadiah Balance :* Rp. 200`);
addBalance(m.sender, 200)
clearTimeout(waktu);
delete tebakkimia[from];
} else TsuCnn.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME TEBAK BENDERA BY DARWIN
if ((from in tebakbendera)) {
let { soal, jawaban, hadiah, waktu } = tebakbendera[from]
if (budy.toLowerCase() == "nyerah") {
reply(`*<!> Permainan Telah dihentikan*`);
delete tebakbendera[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await reply(`*JAWABAN BENAR*\n\n*Penebak :* @${m.sender.replace(/@.+/g, '')}\n*Jawaban :* ${jawaban}\n*Hadiah Balance :* Rp. 200`);
addBalance(m.sender, 200)

clearTimeout(waktu);
delete tebakbendera[from];
} else TsuCnn.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME ASAH OTAK BY DARWIN
if ((from in asahotak)) {
let { soal, jawaban, hadiah, waktu } = asahotak[from]
if (budy.toLowerCase() == "nyerah") {
reply(`*<!> Permainan Telah dihentikan*`);
delete asahotak[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await reply(`*JAWABAN BENAR*\n\n*Penebak :* @${m.sender.replace(/@.+/g, '')}\n*Jawaban :* ${jawaban}\n*Hadiah Balance :* Rp. 200`);
addBalance(m.sender, 200)

clearTimeout(waktu);
delete asahotak[from];
} else TsuCnn.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME SUSUN KATA BY DARWIN
if ((from in susunkata)) {
let { soal, jawaban, hadiah, waktu } = susunkata[from]
if (budy.toLowerCase() == "nyerah") {
reply(`*<!> Permainan Telah dihentikan*`);
delete susunkata[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await reply(`*JAWABAN BENAR*\n\n*Penebak :* @${m.sender.replace(/@.+/g, '')}\n*Jawaban :* ${jawaban}\n*Hadiah Balance :* Rp. 200`);
addBalance(m.sender, 200)

clearTimeout(waktu);
delete susunkata[from];
} else TsuCnn.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME CAK LONTONG BY DARWIN
if ((from in caklontong)) {
let { soal, jawaban, hadiah, waktu } = caklontong[from]
if (budy.toLowerCase() == "nyerah") {
reply(`*<!> Permainan Telah dihentikan*`);
delete caklontong[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await reply(`*JAWABAN BENAR*\n\n*Penebak :* @${m.sender.replace(/@.+/g, '')}\n*Jawaban :* ${jawaban}\n*Hadiah Balance :* Rp. 200`);
addBalance(m.sender, 200)

clearTimeout(waktu);
delete caklontong[from];
} else TsuCnn.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME KUIS MATH BY DARWIN
if ((from in kuismath)) {
let { soal, jawaban, hadiah, waktu } = kuismath[from]
if (budy.toLowerCase() == "nyerah") {
reply(`*<!> Permainan Telah dihentikan*`);
delete kuismath[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await reply(`*JAWABAN BENAR*\n\n*Penebak :* @${m.sender.replace(/@.+/g, '')}\n*Jawaban :* ${jawaban}\n*Hadiah Balance :* Rp. 200`);
addBalance(m.sender, 200)

clearTimeout(waktu);
delete kuismath[from];
} else TsuCnn.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME FAMILY 100 BY DARWIN
if ((from in family100)) {
let { soal, jawaban, hadiah, waktu } = family100[from]
for (let i of jawaban){
if (budy.toLowerCase() == "nyerah") {
await reply(`*<!> Permainan Telah dihentikan*`);
delete family100[from]
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
let anu = jawaban.indexOf(i)
jawaban.splice(anu, 1)
await reply(`*JAWABAN BENAR*\n\n*Penebak :* @${m.sender.replace(/@.+/g, '')}\n*Jawaban :* ${jawaban.length < 1 ? 'Selamat semua jawaban sudah tertebak!\ningin bermain lagi? kirim '+prefix+'family100' : 'Jawaban yang belum tertebak: '+jawaban.length}\n*Hadiah Balance :* Rp. 200`);
addBalance(m.sender, 200)
clearTimeout(waktu);
delete family100[from];
} else TsuCnn.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}
if (jawaban.length < 1){
clearTimeout(waktu);
delete family100[from];
}
}

try {
let roof = Object.values(suit).find(v => v.status && [v.penantang, v.ditantang].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.ditantang && m.isGroup && roof.status == 'WAIT') {
if (body.toLowerCase() === 'y') {
roof.status = 'PLAY'
roof.asal = m.chat
clearTimeout(roof.waktu)
uselimit()
await TsuCnn.sendMessage(m.chat, {text: 'Suit telah dikirimkan ke chat\nSilahkan pilih suit di chat masing²', contextInfo: {mentionedJid: [roof.ditantang, roof.penantang]}}, {quoted: m})
if (!roof.pilih1) await TsuCnn.sendText(roof.penantang, `*Silahkan pilih dibawah ini :*\n✂ Gunting\n📄 Kertas\n🗿 Batu\n\nContoh jika kamu ingin memilih gunting ketik *Gunting*`, m)
if (!roof.pilih2) await TsuCnn.sendText(roof.ditantang, `*Silahkan pilih dibawah ini :*\n✂ Gunting\n📄 Kertas\n🗿 Batu\n\nContoh jika kamu ingin memilih gunting ketik *Gunting*`, m)
roof.waktu_milih = setTimeout(async() => {
if (!roof.pilih && !roof.pilih2) await TsuCnn.sendMessage(m.chat, {text: `Kedua pemain tidak niat main!\nGame suit dibatalkan`})
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.ditantang : roof.penantang
await TsuCnn.sendMessage(m.chat, {text: `@${(roof.pilih ? roof.ditantang : roof.penantang).split('@')[0]} tidak memilih suit\nGame suit dibatalkan`, contextInfo: {mentionedJid: [roof.ditantang, roof.penantang]}}, {quoted: kalgans})
}
delete suit[roof.id]
return !0
}, roof.timeout)
} else if (body.toLowerCase() === 'n') {
await TsuCnn.sendMessage(m.chat, {text: `@${roof.ditantang.split('@')[0]} menolak suit, suit dibatalkan`, contextInfo: {mentionedJid: [roof.ditantang]}}, {quoted: m})
delete suit[roof.id]
return !0
}
}
let jwb = m.sender == roof.penantang
let jwb2 = m.sender == roof.ditantang
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(gunting|batu|kertas)/i
if (jwb && reg.test(budy) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(budy.toLowerCase())[0]
roof.text = budy
await TsuCnn.sendMessage(m.chat, {text: `Kamu telah memilih *${budy}* ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`}, {quoted: m})
if (!roof.pilih2) await TsuCnn.sendMessage(roof.ditantang, {text: 'Lawan sudah memilih\nSekarang giliran kamu'})
}
if (jwb2 && reg.test(budy) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(budy.toLowerCase())[0]
roof.text2 = budy
await TsuCnn.sendMessage(m.chat, {text: `Kamu telah memilih *${budy}* ${!roof.pilih ? '\n\nMenunggu lawan memilih' : ''}`}, {quoted: m})
if (!roof.pilih) await TsuCnn.sendMessage(roof.penantang, {text: 'Lawan sudah memilih\nSekarang giliran kamu'})
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.penantang
else if (b.test(stage) && k.test(stage2)) win = roof.ditantang
else if (g.test(stage) && k.test(stage2)) win = roof.penantang
else if (g.test(stage) && b.test(stage2)) win = roof.ditantang
else if (k.test(stage) && b.test(stage2)) win = roof.penantang
else if (k.test(stage) && g.test(stage2)) win = roof.ditantang
else if (stage == stage2) tie = true
let teks = `*🎮 GAME SUIT 🎮*\n\n${tie ? '*HASIL SERI*\n\n' : ''}@${roof.penantang.split('@')[0]} (${roof.text}) ${tie ? '' : roof.penantang == win ? ' Menang' : ' Kalah'}\n@${roof.ditantang.split('@')[0]} (${roof.text2}) ${tie ? '' : roof.ditantang == win ? ' Menang' : ' Kalah'}${tie ? '' : '\n\nHadiah : *$' + roof.hadiah + '* balance'}`
await TsuCnn.sendMessage(roof.asal, {text: teks, contextInfo: {mentionedJid: [roof.ditantang, roof.penantang]}}, {quoted: roof.chat})
if (roof.penantang == win) {
global.db.data.users[roof.penantang].balance += roof.hadiah
} else if (roof.ditantang == win) {
global.db.data.users[roof.ditantang].balance += roof.hadiah
}
delete suit[roof.id]
}
}
} catch (e) {
return reply(e)
}

const isTicTacToe = (from, _dir) => {
let status = false
Object.keys(_dir).forEach((i) => {
if (_dir[i].id === from) {
status = true
}
})
return status
}
const getPosTic = (from, _dir) => {
let position = null
Object.keys(_dir).forEach((i) => {
if (_dir[i].id === from) {
position = i
}
})
if (position !== null) {
return position
}
}
const KeisiSemua = (tic) => {
let status = true
for (let i of tic){
if (i !== '❌' && i !== '⭕'){
status = false
}
}
return status
}
const cekIsi = (nomor, tic) => {
let status = false
if (tic[nomor] === '❌' || tic[nomor] === '⭕'){
status = true
}
return status
}
const cekTicTac = (tic) => {
let status = false
if (tic[0] === '❌' && tic[1] === '❌' && tic[2] === '❌' || tic[0] === '⭕' && tic[1]=== '⭕' && tic[2] === '⭕'){
status = true
} else if (tic[3] === '❌' && tic[4] === '❌' && tic[5] === '❌' || tic[3] === '⭕' && tic[4] === '⭕' && tic[5] === '⭕'){
status = true
} else if (tic[6] === '❌' && tic[7] === '❌' && tic[8] === '❌' || tic[6] === '⭕' && tic[7] === '⭕' && tic[8] === '⭕'){
status = true
} else if (tic[0] === '❌' && tic[3] === '❌' && tic[6] === '❌' || tic[0] === '⭕' && tic[3] === '⭕' && tic[6] === '⭕'){
status = true
} else if (tic[1] === '❌' && tic[4] === '❌' && tic[7] === '❌' || tic[1] === '⭕' && tic[4] === '⭕' && tic[7] === '⭕'){
status = true
} else if (tic[2] === '❌' && tic[5] === '❌' && tic[8] === '❌' || tic[2] === '⭕' && tic[5] === '⭕' && tic[8] === '⭕'){
status = true
} else if (tic[0] === '❌' && tic[4] === '❌' && tic[8] === '❌' || tic[0] === '⭕' && tic[4] === '⭕' && tic[8] === '⭕'){
status = true
} else if (tic[2] === '❌' && tic[4] === '❌' && tic[6] === '❌' || tic[2] === '⭕' && tic[4] === '⭕' && tic[6] === '⭕'){
status = true
}
return status 
}
if (isTicTacToe(from, tictactoe)) {
try {
// TicTacToe
if (isTicTacToe(from, tictactoe)){
let nomor = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let posi = tictactoe[from]
let anu = posi.TicTacToe
if (posi.status === null){
if (sender === posi.ditantang){
if (body.toLowerCase() === 'y'){
the = `@${posi.ditantang.split('@')[0]} menerima tantangan

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Giliran @${posi.penantang.split('@')[0]}`
TsuCnn.sendText(from, the, m)

tictactoe[from].status = true
} else if (body.toLowerCase() === 'n'){
db.data.users[m.sender].balance -= 100
the1 = `@${posi.ditantang.split('@')[0]} menolak, game dibatalkan\nDan Player dikenakan sanksi -100 balance karna menolak ajakan pemain`
TsuCnn.sendText(from, the1, m)
delete tictactoe[from];
}
}
} else if (posi.status === true){
if (sender === posi.penantang){
for (let i of nomor){
if (Number(body) === i){
if (cekIsi(Number(body) - 1, anu)) return m.reply(`Nomor tersebut sudah terisi`)
tictactoe[from].TicTacToe[Number(body) - 1] = '❌'
if (cekTicTac(tictactoe[from].TicTacToe)){
the2 = `@${posi.penantang.split('@')[0]} Menang

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Hadiah : ${posi.hadiah} balance
Ingin bermain lagi? ${prefix}tictactoe`
TsuCnn.sendText(from, the2, m)
global.db.data.users[posi.penantang].balance += posi.hadiah
global.db.data.users[posi.ditantang].balance -= posi.hadiah
delete tictactoe[from];
} else if (KeisiSemua(anu)) {
the3 = `*HASIL SERI*

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Ingin bermain lagi? ${prefix}tictactoe`
TsuCnn.sendText(from, the3, m)

delete tictactoe[from];
} else {
the4 = `@${posi.penantang.split('@')[0]} telah mengisi

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Giliran @${posi.ditantang.split('@')[0]}`
TsuCnn.sendText(from, the4, m)

tictactoe[from].status = false
}}}}} else if (posi.status === false){
if (sender === posi.ditantang){
for (let i of nomor){
if (Number(body) === i){
if (cekIsi(Number(body) - 1, anu)) return m.reply(`Nomor tersebut sudah terisi`)
tictactoe[from].TicTacToe[Number(body) - 1] = '⭕' 
if (cekTicTac(anu)){
the5 = `@${posi.ditantang.split('@')[0]} Menang

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Hadiah : ${posi.hadiah} balance
Ingin bermain lagi? ${prefix}tictactoe`
TsuCnn.sendText(from, the5, m)
global.db.data.users[posi.ditantang].balance += posi.hadiah
global.db.data.users[posi.penantang].balance -= posi.hadiah
delete tictactoe[from];
} else if (KeisiSemua(anu)) {
the6 = `Hasil Seri

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Ingin bermain lagi? ${prefix}tictactoe`
TsuCnn.sendText(from, the6, m)

delete tictactoe[from];
} else {
the7 = `@${posi.ditantang.split('@')[0]} telah mengisi

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Giliran @${posi.penantang.split('@')[0]}`
TsuCnn.sendText(from, the7, m)

tictactoe[from].status = true
}}}}}}} catch (err){
console.log(chalk.redBright('[ ERROR TICTACTOE ]'), err)
}}
//BATAS RESPON GAME

TsuCnn.autoshalat = TsuCnn.autoshalat ? TsuCnn.autoshalat : {}
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? TsuCnn.user.id : m.sender
	let id = m.chat 
    if(id in TsuCnn.autoshalat) {
    return false
    }
    let jadwalSholat = {
    shubuh: '04:30',
    terbit: '05:44',
    dhuha: '06:02',
    dzuhur: '12:02',
    ashar: '14:49',
    magrib: '17:52',
    isya: '19:01',
    }
    const datek = new Date((new Date).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta"  
    }));
    const hours = datek.getHours();
    const minutes = datek.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
    for(let [sholat, waktu] of Object.entries(jadwalSholat)) {
    if(timeNow === waktu) {
    let caption = `*> Hai kak ${pushname}*,\nWaktu *${sholat}* telah tiba, ambilah air wudhu dan segeralah shalat 😊.\n\n*${waktu}*\n_untuk wilayah Jakarta dan sekitarnya._`
    TsuCnn.autoshalat[id] = [
    reply(caption),
    setTimeout(async () => {
    delete TsuCnn.autoshalat[m.chat]
    }, 57000)
    ]
    }
    }
    
async function ytdlnew(videoUrl) {
    return new Promise(async (resolve, reject) => {
        try {
            const searchParams = new URLSearchParams();
            searchParams.append('query', videoUrl);
            searchParams.append('vt', 'mp3');
            const searchResponse = await axios.post(
                'https://tomp3.cc/api/ajax/search',
                searchParams.toString(),
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                        'Accept': '*/*',
                        'X-Requested-With': 'XMLHttpRequest'
                    }
                }
            );
            if (searchResponse.data.status !== 'ok') {
                throw new Error('Failed to search for the video.');
            }            
            const videoId = searchResponse.data.vid;
            const videoTitle = searchResponse.data.title;
            const mp4Options = searchResponse.data.links.mp4;
            const mp3Options = searchResponse.data.links.mp3;
            const mediumQualityMp4Option = mp4Options[136]; 
            const mp3Option = mp3Options['mp3128']; 
            const mp4ConvertParams = new URLSearchParams();
            mp4ConvertParams.append('vid', videoId);
            mp4ConvertParams.append('k', mediumQualityMp4Option.k);
            const mp4ConvertResponse = await axios.post(
                'https://tomp3.cc/api/ajax/convert',
                mp4ConvertParams.toString(),
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                        'Accept': '*/*',
                        'X-Requested-With': 'XMLHttpRequest'
                    }
                }
            );
            if (mp4ConvertResponse.data.status !== 'ok') {
                throw new Error('Failed to convert the video to MP4.');
            }
            const mp4DownloadLink = mp4ConvertResponse.data.dlink;
            const mp3ConvertParams = new URLSearchParams();
            mp3ConvertParams.append('vid', videoId);
            mp3ConvertParams.append('k', mp3Option.k);
            const mp3ConvertResponse = await axios.post(
                'https://tomp3.cc/api/ajax/convert',
                mp3ConvertParams.toString(),
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                        'Accept': '*/*',
                        'X-Requested-With': 'XMLHttpRequest'
                    }
                }
            );
            if (mp3ConvertResponse.data.status !== 'ok') {
                throw new Error('Failed to convert the video to MP3.');
            }
            const mp3DownloadLink = mp3ConvertResponse.data.dlink;
            resolve({
                title: videoTitle,
                mp4DownloadLink,
                mp3DownloadLink
            });
        } catch (error) {
            reject('Error: ' + error.message);
        }
    });
 }

const downloadMp3 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
console.log(color('Download Audio With ytdl-core'))
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await TsuCnn.sendMessage(from, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: kalgans })
fs.unlinkSync(mp3File)
})
} catch (err) {
reply(`${err}`)
}
}    

const asupanr = async (url5) => {
try {
let msg = await TsuCnn.sendMessage(from, { image: { url: url5, caption: `Asupan` }}, {quoted: limituse})
        } catch (error) {
        console.error(error); // Added logging for error
}}

const downloadMp3sc = async (Link) => {
    try {
        let urla = `https://widipe.com/youtube?url=${Link}&filter=audioonly&quality=highestaudio&contenttype=audio/mp3`
            let msg = await TsuCnn.sendMessage(from, { audio: { url: urla }, mimetype: 'audio/mp4' }, {quoted: mp3k})
        } catch (error) {
        console.error(error); // Added logging for error
    }}

/*const downloadMp3sc = async (Link) => {
    try {
        let urla = `https://youtube-dl-web.vercel.app/api/download?f=251&url=${Link}`
        let response = await axios.get(urla, { responseType: 'arraybuffer' });
        let audioBuffer = Buffer.from(response.data, 'binary');
        await TsuCnn.sendMessage(from, { audio: audioBuffer }, { mimetype: 'audio/mp3' }, {quoted: mp3k})
    } catch (error) {
        console.error(error); // Added logging for error
    }
}*/

/*const downloadMp3sc = async (Link) => {
const youtubeDl = require("./lib/ytdl") 
try {
youtubeDl(`${Link}`).then(res => {
 console.log(res)
TsuCnn.sendMessage(m.chat, {audio: {url: res.audio[128].url }, mimetype: "audio/mpeg", ptt: true },{quoted: mp3k })
})} catch (err) {
console.log(err)}}*/

/*const downloadMp4sc = async (Link) => {
try {
const { y2mate } = require('./lib/y2mate.js')
const result = await ytdl.play(Link); 
const title = result.title;
    TsuCnn.sendFile(m.chat, result.video['360'].url, title + ".mp4", "", mp4k, 0, {
      mimetype: "video/mp4",
      asDocument: true,
        });
} catch (error) {
    m.reply("Terjadi kesalahan, coba lagi nanti!");
    console.error(error); 
}}*/

const downloadMp4sc = async (Link) => {
    try {
        let urla = `https://widipe.com/youtube?url=${Link}&filter=videoonly&quality=highestvideo&contenttype=video/mp4`
            let msg = await TsuCnn.sendMessage(from, { video: { url: urla }, mimetype: 'video/mp4' }, {quoted: mp4k})
        } catch (error) {
        console.error(error); // Added logging for error
    }}

const downloadMp4 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
console.log(color('Download Video With ytdl-core'))
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await TsuCnn.sendMessage(from, { video: fs.readFileSync(mp4File), gifPlayback: false }, { quoted: kalgans })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
reply(`${err}`)
}
}

jarakkota = (dari, ke) => {
   return new Promise(async (resolve, reject) => {
	var html = (await axios(`https://www.google.com/search?q=${encodeURIComponent('jarak ' + dari + ' ke ' + ke)}&hl=id`)).data
	var $ = cheerio.load(html), obj = {}
	var img = html.split("var s=\'")?.[1]?.split("\'")?.[0]
	obj.img = /^data:.*?\/.*?;base64,/i.test(img) ? Buffer.from(img.split`,` [1], 'base64') : ''
	obj.desc = $('div.BNeawe.deIvCb.AP7Wnd').text()?.trim()
	resolve(obj)
   })
}


if (AntiLink) {
if (body.match(/(chat.whatsapp.com\/)/gi)) {
if (!isBotAdmins) return reply(`${mess.botAdmin}, _Untuk menendang orang yang mengirim link group_`)
let gclink = (`https://chat.whatsapp.com/`+await TsuCnn.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return TsuCnn.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAnda tidak akan ditendang oleh bot karena yang Anda kirim adalah link ke grup ini`})
if (isAdmins) return TsuCnn.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAdmin sudah mengirimkan link, admin bebas memposting link apapun`})
if (isCreator) return TsuCnn.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nOwner telah mengirim link, owner bebas memposting link apa pun`})
await TsuCnn.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
TsuCnn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
TsuCnn.sendMessage(from, {text:`\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} Jangan kirim group link di group ini`, contextInfo:{mentionedJid:[sender]}}, {quoted:m})
}
}


//BATAS
if (global.onlypc) {
        	if (command&!m.isGroup){
	         return reply(`Tsumuri-Md dalam mode private, gunakan di private chat!`)
	     }
	}
//=================================================//
if (!TsuCnn.public) {
if (!m.key.fromMe) return
}
let rn = ['recording']
let jd = rn[Math.floor(Math.random() * rn.length)];
if (m.message) {
TsuCnn.sendPresenceUpdate('available', m.chat)
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m Tsumuri \x1b[1;37m]', time, chalk.green(budy || m.mtype), 'Dari', chalk.blue(pushname), 'Di', chalk.yellow(groupName ? groupName : 'Private Chat' ), 'args :', chalk.white(args.length))
            }
//=================================================//
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(from, { text: text, mentions: mentionedJid }, {
userJid: TsuCnn.user.id,
quoted : m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, TsuCnn.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
TsuCnn.ev.emit('messages.upsert', msg)
}
//=================================================//
if (budy.startsWith('!')) {
try {
return reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
reply(e)
}
}
async function sendGeekzMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await TsuCnn.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}

try {
ppuser = await TsuCnn.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isCreator ? 1000 : limitawal
let balanceUser = isCreator ? 10000 : balanceawal
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.balance)) user.balance = balanceUser
if (!isNumber(user.limit)) user.limit = limitUser
if (!('premium' in user)) user.premium = false
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!('claim' in user)) user.premium = 1
} else global.db.data.users[m.sender] = {
name: pushname,
limit: limitUser,
balance: balanceUser,
premium: false,
afkTime: -1,
afkReason: '',
limit: limitUser,
claim: 1,
}
} catch (err) {
console.log(err)
}

let isNumber = x => typeof x === 'number' && !isNaN(x)
let setting = global.db.data.settings[botNumber]
if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
if (setting) {
if (!isNumber(setting.status)) setting.status = 0
if (autobio) {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
await TsuCnn.updateProfileStatus(`I am Tsumuri-Md | Aktif Selama ${uptime} ⏳ | Mode : ${TsuCnn.public ? 'Public-Mode' : 'Self-Mode'}`).catch(_ => _)
}
if (autoread) {
TsuCnn.readMessages([m.key])
}
} else global.db.data.settings[botNumber] = {
status: 0,
autobio: false,
autoread: false
}

if (global.autoreadsw && (m.key.remoteJid === 'status@broadcast')) {
//if (m.key.participant == global.owner) return
TsuCnn.readMessages([m.key])
}

if(!('hadiah' in db.data.settings)) db.data.settings.hadiah = []
if(!('hadiahkadaluwarsa' in db.data.settings)) db.data.settings.hadiahkadaluwarsa = []
if(!('claimprem' in db.data.settings)) db.data.settings.claimprem = []
if(!('claimpremkadaluwarsa' in db.data.settings)) db.data.settings.claimpremkadaluwarsa = []            

if (m?.isGroup && chat) {
if (!('welcome' in chat)) chat.welcome = true
if (!('sWelcome' in chat)) chat.sWelcome = ''
if (!isNumber(chat.cleartime)) chat.clearTime = 0
} else if (m?.isGroup) global.db.data.chats[m.chat] = {
sWelcome: '',
welcome: true,
clearTime: 0
}

let chats = global.db.data.chats[m.chat]
if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
if (chats) {
if (!('mute' in chats)) chats.mute = false
if (!('TsuCnn' in chats)) chats.TsuCnn = false
} else global.db.data.chats[m.chat] = {
mute: false,
TsuCnn: false
}

if (db.data.chats[m.chat].TsuCnn) {
let name = await TsuCnn.getName(m.sender)
  let prompt = `Mulai sekarang nama kamu adalah Tsumuri-Md, kamu mempunyai sifat yang ramah, lucu, dan suka membantu orang lain, kamu selalu menjawab semua pertanyaan yang di berikan menggunakan bahasa indonesia dan selalu menggunakan kata panggilan aku dan kamu!, kamu adalah ai buatan dari Luhung yang di buat hanya untuk menjawab semua pertanyaan dengan ramah, dan lawan bicaramu sekarang adalah ${name}, dan kamu merespon pertanyaan di awali dengan kata sapaan sepeti halo di tambahkan dengan ${name}. dan ingat jangan bicara menggunakan kata formal anggap ${name} adalah teman mu.`
let TsuCnnxdzz = await fetchJson(`https://itzpire.site/ai/gpt-logic?q=${budy.toLowerCase()}&logic=${prompt}&realtime=true`)
TsuCnn.sendMessage(m.chat, {
text: `*[ F U R I N A - A I ]*\n\n${TsuCnnxdzz.data.response}`,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: botname,
body: '',
thumbnailUrl: `${thumbnail}`,
sourceUrl: "https://whatsapp.com/channel/0029VaeYK1cBA1f8AOFnYY3A",
mediaType: 1,
renderLargerThumbnail: true
}}
})
}

//================== [ ALL FUNCTION ] ==================//
let limitnya = db.data.users[m?.sender].limit
let balancenya = db.data.users[m?.sender].balance
const isPremium = db.data.users[m?.sender].premium == true ? true : m?.sender == owner ? true : false

async function uselimit() {
if (isCreator) return
db.data.users[m?.sender].limit -= 1
m.reply("ʟɪᴍɪᴛ -1.")
}

async function uselimit2() {
if (isCreator) return
db.data.users[m?.sender].limit -= 1
}

async function minlimit(amount) {
if (isCreator) return
db.data.users[m?.sender].limit -= amount
}

async function minBalance(userId, amount) {
if (isCreator) return
db.data.users[m?.sender].balance -= amount
}

async function addBalance(userid, amount) {
if (isCreator) return
db.data.users[m?.sender].balance += amount
}

async function formatViews(views) {
  if (views >= 1000000) {
    return (views / 1000000).toFixed(1) + 'M';
  } else if (views >= 1000) {
    return (views / 1000).toFixed(1) + 'K';
  } else {
    return views.toString();
  }
}

async function igdl2(url) {
let res = await axios("https://indown.io/");
let _$ = cheerio.load(res.data);
let referer = _$("input[name=referer]").val();
let locale = _$("input[name=locale]").val();
let _token = _$("input[name=_token]").val();
let { data } = await axios.post(
"https://indown.io/download",
new URLSearchParams({
link: url,
referer,
locale,
_token,
}),
{
headers: {
cookie: res.headers["set-cookie"].join("; "),
},
}
);
let $ = cheerio.load(data);
let result = [];
let __$ = cheerio.load($("#result").html());
__$("video").each(function () {
let $$ = $(this);
result.push({
type: "video",
thumbnail: $$.attr("poster"),
url: $$.find("source").attr("src"),
});
});
__$("img").each(function () {
let $$ = $(this);
result.push({
type: "image",
url: $$.attr("src"),
});
});

return result;
}

Array.prototype.rendem = function rendem() {
return this[Math.floor(Math.random() * this.length)];
}

function randomNomor(min, max = null){
if (max !== null) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
} else {
return Math.floor(Math.random() * min) + 1
}
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

function capital(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function formatter(value) {
return value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function calculatePPN(value) {
return value * 0.1;
}

function removeItem(array, item) {
return array.filter(elem => !(elem.jid === item.jid && elem.state === item.state));
}

function monospace(string) {
return '```' + string + '```'
}

function Styles2(string) {
  var replacements = {
    'a': 'ᴀ', 'b': 'ʙ', 'c': 'ᴄ', 'd': 'ᴅ', 'e': 'ᴇ', 'f': 'ғ', 'g': 'ɢ', 'h': 'ʜ', 'i': 'ɪ', 'j': 'ᴊ', 'k': 'ᴋ', 'l': 'ʟ', 'm': 'ᴍ', 'n': 'ɴ', 'o': 'ᴏ', 'p': 'ᴘ', 'q': 'ǫ', 'r': 'ʀ', 's': 's', 't': 'ᴛ', 'u': 'ᴜ', 'v': 'ᴠ', 'w': 'ᴡ', 'x': 'x', 'y': 'ʏ', 'z': 'ᴢ'
  };
  return string.replace(/[a-z]/gi, function(match) {
    return replacements[match.toLowerCase()] || match;
  });
}

/*
function Styles2(string) {
  var replacements = {
    'a': 'ᴀ', 'b': 'ʙ', 'c': 'ᴄ', 'd': 'ᴅ', 'e': 'ᴇ', 'f': 'ғ', 'g': 'ɢ', 'h': 'ʜ', 'i': 'ɪ', 'j': 'ᴊ', 'k': 'ᴋ', 'l': 'ʟ', 'm': 'ᴍ', 'n': 'ɴ', 'o': 'ᴏ', 'p': 'ᴘ', 'q': 'ǫ', 'r': 'ʀ', 's': 's', 't': 'ᴛ', 'u': 'ᴜ', 'v': 'ᴠ', 'w': 'ᴡ', 'x': 'x', 'y': 'ʏ', 'z': 'ᴢ',
    'A': 'ᴀ', 'B': 'ʙ', 'C': 'ᴄ', 'D': 'ᴅ', 'E': 'ᴇ', 'F': 'ғ', 'G': 'ɢ', 'H': 'ʜ', 'I': 'ɪ', 'J': 'ᴊ', 'K': 'ᴋ', 'L': 'ʟ', 'M': 'ᴍ', 'N': 'ɴ', 'O': 'ᴏ', 'P': 'ᴘ', 'Q': 'ǫ', 'R': 'ʀ', 'S': 's', 'T': 'ᴛ', 'U': 'ᴜ', 'V': 'ᴠ', 'W': 'ᴡ', 'X': 'x', 'Y': 'ʏ', 'Z': 'ᴢ'
  };
  return string.replace(/[a-z]/gi, function(match) {
    return replacements[match] || match;
  });
}

*/

cron.schedule('00 00 * * *', () => {
let user = Object.keys(global.db.data.users)
for (let jid of user) {
global.db.data.users[jid].claim = 1
if (global.db.data.users[jid].balance < 10000 && global.db.data.users[jid].limit < 1) {
global.db.data.users[jid].limit = limitawal
global.db.data.users[jid].balance = balanceawal
}}}, {
scheduled: true,
timezone: "Asia/Makassar"
})

const totalFitur = () =>{
            var mytext = fs.readFileSync("./Tsu Cmd.js").toString()
            var numUpper = (mytext.match(/break/g) || []).length;
            return numUpper
        }


let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
reply(`
*[ USER AFK ! ]*
${pushname} AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
}
if (global.db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
reply(`@${m.sender.replace(/@.+/g, '')} Telah Kembali Dari Afk ${user.afkReason ? ' Selama ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}

async function dellCase(filePath, caseNameToRemove) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Terjadi kesalahan:', err);
            return;
        }

        const regex = new RegExp(`case\\s+'${caseNameToRemove}':[\\s\\S]*?break`, 'g');
        const modifiedData = data.replace(regex, '');

        fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
            if (err) {
                console.error('Terjadi kesalahan saat menulis file:', err);
                return;
            }

            console.log(`Teks dari case '${caseNameToRemove}' telah dihapus dari file.`);
        });
    });
}

let footerm = Styles('> jika menemukan error pada fitur, bisa chat owner.')

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
//=================================================//
switch(command) {
case "menu": {
//await TsuCnn.sendMessage(m.chat, { react: { text: "✅",key: m.key,}})
wek = ``

let sections = [{
title: 'List Menu',
highlight_label: 'All Menu Lists',
rows: [{
title: '<!>Menu All',
description: `Displays All Menu`, 
id: `${prefix}allmenu`
},
{
title: '<!>Menu Owner',
description: `Displays Owner Menu`, 
id: `${prefix}ownermenu`
},
{
title: '<!>Menu Main',
description: `Displays Main Menu`, 
id: `${prefix}mainmenu`
},
{
title: '<!>Menu Download',
description: `Displays Download Menu`, 
id: `${prefix}downloadmenu`
},
{
title: '<!>Menu Search',
description: `Displays Search Menu`, 
id: `${prefix}searchmenu`
},
{
title: '<!>Menu Group',
description: `Displays Group Menu`, 
id: `${prefix}groupmenu`
},
{
title: '<!>Menu Agama',
description: `Displays Agama Menu`, 
id: `${prefix}agamamenu`
},
{
title: '<!>Menu Ai',
description: `Displays Ai Menu`, 
id: `${prefix}aimenu`
},
{
title: '<!>Menu Store', 
description: "Displays the Store Menu", 
id: `${prefix}storemenu`
},
{
title: '<!>Menu Fun', 
description: "Displays the Fun Menu", 
id: `${prefix}funmenu`
},
{
title: '<!>Menu Game', 
description: "Displays the Game Menu", 
id: `${prefix}gamemenu`
},
{
title: '<!>Menu Other',
description: "Displays the Other Menu",
id: `${prefix}othermenu`
}, 
]
}]

let listMessage = {
    title: 'List Menu', 
    sections
};


let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: global.idsal,
 newsletterName: `𝚃 𝚂 𝚄 𝙼 𝚄 𝚁 𝙸`, 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: TsuCnn.decodeJid(TsuCnn.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: wm
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: Styles('jika menemukan error pada fitur, bisa chat owner.')
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `*> Hai ${pushname}*.${Styles2(`
╭┈──┈╌───⊰ *All Info* ⊱──┈╌┈──╌╌
╰─────┈┈┈┈┈╌╮
╭╴ *Your Info*  ⊱──┈┈─╌╌╌⪼
│•⟢ *Number* : @${m.sender.replace(/@.+/g, '')}
│•⟢ *Status* : ${isPremium ? 'Premium' : 'Free'}
│•⟢ *Limit* : ${limitnya}
│•⟢ *Balance* : $${toRupiah(balancenya)}
╎ ⃟ꕥ─────╌╌╌─╌┈┈──┈┈⏤͟͟͞͞ᖫ
╭╴ *Bot Info*  ⊱─┈╌─╌╯
│•⟢ *Name* : ${botname}
│•⟢ *Creator* : @luhungch
│•⟢ *Runtime* : ${runtime(process.uptime())}
│•⟢ *Database* : ${Object.keys(db.data.users).length} Users
│•⟢ *Version* : 2.0.5
╰──┄┄╌───╌╌─╼

✨ ᴘɪʟɪʜ ᴍᴇɴᴜɴʏᴀ ᴅɪʙᴀᴡᴀʜ ʏᴀ, ᴛᴇʀɪᴍᴀ ᴋᴀsɪʜ 🌟`)}`,
 subtitle: wm,
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/bcbd2ae9ceb7fc0ce44f4.png" } }, { upload: TsuCnn.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"👤 CREATOR\",\"url\":\"https://wa.me/6282328190003\",\"merchant_url\":\"https://wa.me/6282328190003\"}"
 },
 ],
 })
 })
 }
 }
}, { quoted: kalgans })

await TsuCnn.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break

case "allmenu":
case "menuall": {
if (!isRegistered) return m.reply(mess.regis)
//await TsuCnn.sendMessage(m.chat, { react: { text: "✅",key: m.key,}})
var old = performance.now(); 
var neww = performance.now(); 
var speed = neww - old; 
let rezz = `*> Halo ${pushname} 👋, ${ucapanWaktu}*.
> ᴀᴋᴜ ᴛsᴜᴍᴜʀɪ ʏᴀɴɢ sɪᴀᴘ ᴍᴇᴍʙᴀɴᴛᴜ ᴋᴇsᴜʟɪᴛᴀɴᴍᴜ 😄. 
 
╭ᕗɞ⊱──『 *USER INFO* 』──⏤͟͟͞͞ᖫ
╎︎☘︎」𝗦𝘁𝗮𝘁𝘂𝘀 : ${isPremium ? 'ᴘʀᴇᴍɪᴜᴍ' : 'ғʀᴇᴇ'}
╎︎☘︎」𝗕𝗮𝗹𝗮𝗻𝗰𝗲 : $${toRupiah(balancenya)}
╎︎☘︎」𝗟𝗶𝗺𝗶𝘁 : ${Styles2(`${limitnya}`)}
╎ᕗɞ⊱──『 *OTHER INFO* 』⏤͟͟͞͞ᖫ
╎︎☘︎」𝗢𝘄𝗻𝗲𝗿 => *Ⓞ*
╎︎☘︎」𝗙𝗿𝗲𝗲 => *Ⓕ*
╎︎☘︎」𝗣𝗿𝗲𝗺𝗶𝘂𝗺 => *Ⓟ*
╎︎☘︎」𝗟𝗶𝗺𝗶𝘁 => *Ⓛ*
╎ᕗɞ⊱──『 *OTHER INFO* 』⏤͟͟͞͞ᖫ
╎︎☘︎」𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${botname}
╎︎☘︎」𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${Styles2(`${runtime(process.uptime())}`)}
╎ ⃟ꕥ╌╌╌╌╌╌╌⊰۝⊱╌╌╌╌╌╌╌⏤͟͟͞
`
const caption = `${rezz}\n${menuall(prefix)}\n${wm}\n${footerm}`;
TsuCnn.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `𝑻𝒔𝒖𝒎𝒖𝒓𝒊 𝑴𝒆𝒏𝒖`,
            mimetype: "application/pdf",
            fileLength: 00000111,
            pageCount: 2024,
			caption: caption,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	 newsletterName: '𝚃 𝚂 𝚄 𝙼 𝚄 𝚁 𝙸',
 newsletterJid: idchannel,
		},
		externalAdReply: {  
title: `${time}`, 
body: `Tsumuri Version : 2.0.5`,
thumbnailUrl: thumbnail2,
sourceUrl: '', 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: kalgans})
}
break
case "ownermenu": 
case "menuowner": {
if (!isRegistered) return m.reply(mess.regis)
//await TsuCnn.sendMessage(m.chat, { react: { text: "✅",key: m.key,}})
var old = performance.now(); 
var neww = performance.now(); 
var speed = neww - old; 
let rezz = `*> Halo ${pushname} 👋, ${ucapanWaktu}*.
> ᴀᴋᴜ ᴛsᴜᴍᴜʀɪ ʏᴀɴɢ sɪᴀᴘ ᴍᴇᴍʙᴀɴᴛᴜ ᴋᴇsᴜʟɪᴛᴀɴᴍᴜ 😄. 
 
╭ᕗɞ⊱──『 *USER INFO* 』──⏤͟͟͞͞ᖫ
╎︎☘︎」𝗦𝘁𝗮𝘁𝘂𝘀 : ${isPremium ? 'ᴘʀᴇᴍɪᴜᴍ' : 'ғʀᴇᴇ'}
╎︎☘︎」𝗕𝗮𝗹𝗮𝗻𝗰𝗲 : $${toRupiah(balancenya)}
╎︎☘︎」𝗟𝗶𝗺𝗶𝘁 : ${Styles2(`${limitnya}`)}
╎ᕗɞ⊱──『 *OTHER INFO* 』⏤͟͟͞͞ᖫ
╎︎☘︎」𝗢𝘄𝗻𝗲𝗿 => *Ⓞ*
╎︎☘︎」𝗙𝗿𝗲𝗲 => *Ⓕ*
╎︎☘︎」𝗣𝗿𝗲𝗺𝗶𝘂𝗺 => *Ⓟ*
╎︎☘︎」𝗟𝗶𝗺𝗶𝘁 => *Ⓛ*
╎ᕗɞ⊱──『 *OTHER INFO* 』⏤͟͟͞͞ᖫ
╎︎☘︎」𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${botname}
╎︎☘︎」𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${Styles2(`${runtime(process.uptime())}`)}
╎ ⃟ꕥ╌╌╌╌╌╌╌⊰۝⊱╌╌╌╌╌╌╌⏤͟͟͞
`
const caption = `${rezz}\n${menuowner(prefix)}\n${wm}\n${footerm}`;
TsuCnn.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `𝑻𝒔𝒖𝒎𝒖𝒓𝒊 𝑴𝒆𝒏𝒖`,
            mimetype: "application/pdf",
            fileLength: 00000111,
            pageCount: 2024,
			caption: caption,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	 newsletterName: '𝚃 𝚂 𝚄 𝙼 𝚄 𝚁 𝙸',
 newsletterJid: idchannel,
		},
		externalAdReply: {  
title: `${time}`, 
body: `Tsumuri Version : 2.0.5`,
thumbnailUrl: thumbnail2,
sourceUrl: '', 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: kalgans})
}
break
case "mainmenu": 
case "menumain": {
if (!isRegistered) return m.reply(mess.regis)
//await TsuCnn.sendMessage(m.chat, { react: { text: "✅",key: m.key,}})
var old = performance.now(); 
var neww = performance.now(); 
var speed = neww - old; 
let rezz = `*> Halo ${pushname} 👋, ${ucapanWaktu}*.
> ᴀᴋᴜ ᴛsᴜᴍᴜʀɪ ʏᴀɴɢ sɪᴀᴘ ᴍᴇᴍʙᴀɴᴛᴜ ᴋᴇsᴜʟɪᴛᴀɴᴍᴜ 😄. 
 
╭ᕗɞ⊱──『 *USER INFO* 』──⏤͟͟͞͞ᖫ
╎︎☘︎」𝗦𝘁𝗮𝘁𝘂𝘀 : ${isPremium ? 'ᴘʀᴇᴍɪᴜᴍ' : 'ғʀᴇᴇ'}
╎︎☘︎」𝗕𝗮𝗹𝗮𝗻𝗰𝗲 : $${toRupiah(balancenya)}
╎︎☘︎」𝗟𝗶𝗺𝗶𝘁 : ${Styles2(`${limitnya}`)}
╎ᕗɞ⊱──『 *OTHER INFO* 』⏤͟͟͞͞ᖫ
╎︎☘︎」𝗢𝘄𝗻𝗲𝗿 => *Ⓞ*
╎︎☘︎」𝗙𝗿𝗲𝗲 => *Ⓕ*
╎︎☘︎」𝗣𝗿𝗲𝗺𝗶𝘂𝗺 => *Ⓟ*
╎︎☘︎」𝗟𝗶𝗺𝗶𝘁 => *Ⓛ*
╎ᕗɞ⊱──『 *OTHER INFO* 』⏤͟͟͞͞ᖫ
╎︎☘︎」𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${botname}
╎︎☘︎」𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${Styles2(`${runtime(process.uptime())}`)}
╎ ⃟ꕥ╌╌╌╌╌╌╌⊰۝⊱╌╌╌╌╌╌╌⏤͟͟͞
`
const caption = `${rezz}\n${menumain(prefix)}\n${wm}\n${footerm}`;
TsuCnn.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `𝑻𝒔𝒖𝒎𝒖𝒓𝒊 𝑴𝒆𝒏𝒖`,
            mimetype: "application/pdf",
            fileLength: 00000111,
            pageCount: 2024,
			caption: caption,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	 newsletterName: '𝚃 𝚂 𝚄 𝙼 𝚄 𝚁 𝙸',
 newsletterJid: idchannel,
		},
		externalAdReply: {  
title: `${time}`, 
body: `Tsumuri Version : 2.0.5`,
thumbnailUrl: thumbnail2,
sourceUrl: '', 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: kalgans})
}
break
case "downloadmenu": 
case "menudownload": {
if (!isRegistered) return m.reply(mess.regis)
//await TsuCnn.sendMessage(m.chat, { react: { text: "✅",key: m.key,}})
var old = performance.now(); 
var neww = performance.now(); 
var speed = neww - old; 
let rezz = `*> Halo ${pushname} 👋, ${ucapanWaktu}*.
> ᴀᴋᴜ ᴛsᴜᴍᴜʀɪ ʏᴀɴɢ sɪᴀᴘ ᴍᴇᴍʙᴀɴᴛᴜ ᴋᴇsᴜʟɪᴛᴀɴᴍᴜ 😄. 
 
╭ᕗɞ⊱──『 *USER INFO* 』──⏤͟͟͞͞ᖫ
╎︎☘︎」𝗦𝘁𝗮𝘁𝘂𝘀 : ${isPremium ? 'ᴘʀᴇᴍɪᴜᴍ' : 'ғʀᴇᴇ'}
╎︎☘︎」𝗕𝗮𝗹𝗮𝗻𝗰𝗲 : $${toRupiah(balancenya)}
╎︎☘︎」𝗟𝗶𝗺𝗶𝘁 : ${Styles2(`${limitnya}`)}
╎ᕗɞ⊱──『 *OTHER INFO* 』⏤͟͟͞͞ᖫ
╎︎☘︎」𝗢𝘄𝗻𝗲𝗿 => *Ⓞ*
╎︎☘︎」𝗙𝗿𝗲𝗲 => *Ⓕ*
╎︎☘︎」𝗣𝗿𝗲𝗺𝗶𝘂𝗺 => *Ⓟ*
╎︎☘︎」𝗟𝗶𝗺𝗶𝘁 => *Ⓛ*
╎ᕗɞ⊱──『 *OTHER INFO* 』⏤͟͟͞͞ᖫ
╎︎☘︎」𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${botname}
╎︎☘︎」𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${Styles2(`${runtime(process.uptime())}`)}
╎ ⃟ꕥ╌╌╌╌╌╌╌⊰۝⊱╌╌╌╌╌╌╌⏤͟͟͞
`
const caption = `${rezz}\n${menudownload(prefix)}\n${wm}\n${footerm}`;
TsuCnn.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `𝑻𝒔𝒖𝒎𝒖𝒓𝒊 𝑴𝒆𝒏𝒖`,
            mimetype: "application/pdf",
            fileLength: 00000111,
            pageCount: 2024,
			caption: caption,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	 newsletterName: '𝚃 𝚂 𝚄 𝙼 𝚄 𝚁 𝙸',
 newsletterJid: idchannel,
		},
		externalAdReply: {  
title: `${time}`, 
body: `Tsumuri Version : 2.0.5`,
thumbnailUrl: thumbnail2,
sourceUrl: '', 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: kalgans})
}
break
case "searchmenu": 
case "menusearch": {
if (!isRegistered) return m.reply(mess.regis)
//await TsuCnn.sendMessage(m.chat, { react: { text: "✅",key: m.key,}})
var old = performance.now(); 
var neww = performance.now(); 
var speed = neww - old; 
let rezz = `*> Halo ${pushname} 👋, ${ucapanWaktu}*.
> ᴀᴋᴜ ᴛsᴜᴍᴜʀɪ ʏᴀɴɢ sɪᴀᴘ ᴍᴇᴍʙᴀɴᴛᴜ ᴋᴇsᴜʟɪᴛᴀɴᴍᴜ 😄. 
 
╭ᕗɞ⊱──『 *USER INFO* 』──⏤͟͟͞͞ᖫ
╎︎☘︎」𝗦𝘁𝗮𝘁𝘂𝘀 : ${isPremium ? 'ᴘʀᴇᴍɪᴜᴍ' : 'ғʀᴇᴇ'}
╎︎☘︎」𝗕𝗮𝗹𝗮𝗻𝗰𝗲 : $${toRupiah(balancenya)}
╎︎☘︎」𝗟𝗶𝗺𝗶𝘁 : ${Styles2(`${limitnya}`)}
╎ᕗɞ⊱──『 *OTHER INFO* 』⏤͟͟͞͞ᖫ
╎︎☘︎」𝗢𝘄𝗻𝗲𝗿 => *Ⓞ*
╎︎☘︎」𝗙𝗿𝗲𝗲 => *Ⓕ*
╎︎☘︎」𝗣𝗿𝗲𝗺𝗶𝘂𝗺 => *Ⓟ*
╎︎☘︎」𝗟𝗶𝗺𝗶𝘁 => *Ⓛ*
╎ᕗɞ⊱──『 *OTHER INFO* 』⏤͟͟͞͞ᖫ
╎︎☘︎」𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${botname}
╎︎☘︎」𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${Styles2(`${runtime(process.uptime())}`)}
╎ ⃟ꕥ╌╌╌╌╌╌╌⊰۝⊱╌╌╌╌╌╌╌⏤͟͟͞
`
const caption = `${rezz}\n${menusearch(prefix)}\n${wm}\n${footerm}`;
TsuCnn.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `𝑻𝒔𝒖𝒎𝒖𝒓𝒊 𝑴𝒆𝒏𝒖`,
            mimetype: "application/pdf",
            fileLength: 00000111,
            pageCount: 2024,
			caption: caption,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	 newsletterName: '𝚃 𝚂 𝚄 𝙼 𝚄 𝚁 𝙸',
 newsletterJid: idchannel,
		},
		externalAdReply: {  
title: `${time}`, 
body: `Tsumuri Version : 2.0.5`,
thumbnailUrl: thumbnail2,
sourceUrl: '', 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: kalgans})
}
break
case "groupmenu": 
case "menugroup": {
if (!isRegistered) return m.reply(mess.regis)
//await TsuCnn.sendMessage(m.chat, { react: { text: "✅",key: m.key,}})
var old = performance.now(); 
var neww = performance.now(); 
var speed = neww - old; 
let rezz = `*> Halo ${pushname} 👋, ${ucapanWaktu}*.
> ᴀᴋᴜ ᴛsᴜᴍᴜʀɪ ʏᴀɴɢ sɪᴀᴘ ᴍᴇᴍʙᴀɴᴛᴜ ᴋᴇsᴜʟɪᴛᴀɴᴍᴜ 😄. 
 
╭ᕗɞ⊱──『 *USER INFO* 』──⏤͟͟͞͞ᖫ
╎︎☘︎」𝗦𝘁𝗮𝘁𝘂𝘀 : ${isPremium ? 'ᴘʀᴇᴍɪᴜᴍ' : 'ғʀᴇᴇ'}
╎︎☘︎」𝗕𝗮𝗹𝗮𝗻𝗰𝗲 : $${toRupiah(balancenya)}
╎︎☘︎」𝗟𝗶𝗺𝗶𝘁 : ${Styles2(`${limitnya}`)}
╎ᕗɞ⊱──『 *OTHER INFO* 』⏤͟͟͞͞ᖫ
╎︎☘︎」𝗢𝘄𝗻𝗲𝗿 => *Ⓞ*
╎︎☘︎」𝗙𝗿𝗲𝗲 => *Ⓕ*
╎︎☘︎」𝗣𝗿𝗲𝗺𝗶𝘂𝗺 => *Ⓟ*
╎︎☘︎」𝗟𝗶𝗺𝗶𝘁 => *Ⓛ*
╎ᕗɞ⊱──『 *OTHER INFO* 』⏤͟͟͞͞ᖫ
╎︎☘︎」𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${botname}
╎︎☘︎」𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${Styles2(`${runtime(process.uptime())}`)}
╎ ⃟ꕥ╌╌╌╌╌╌╌⊰۝⊱╌╌╌╌╌╌╌⏤͟͟͞
`
const caption = `${rezz}\n${menugroup(prefix)}\n${wm}\n${footerm}`;
TsuCnn.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `𝑻𝒔𝒖𝒎𝒖𝒓𝒊 𝑴𝒆𝒏𝒖`,
            mimetype: "application/pdf",
            fileLength: 00000111,
            pageCount: 2024,
			caption: caption,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	 newsletterName: '𝚃 𝚂 𝚄 𝙼 𝚄 𝚁 𝙸',
 newsletterJid: idchannel,
		},
		externalAdReply: {  
title: `${time}`, 
body: `Tsumuri Version : 2.0.5`,
thumbnailUrl: thumbnail2,
sourceUrl: '', 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: kalgans})
}
break
case "agamamenu":
case "menuagama": {
if (!isRegistered) return m.reply(mess.regis)
//await TsuCnn.sendMessage(m.chat, { react: { text: "✅",key: m.key,}})
var old = performance.now(); 
var neww = performance.now(); 
var speed = neww - old; 
let rezz = `*> Halo ${pushname} 👋, ${ucapanWaktu}*.
> ᴀᴋᴜ ᴛsᴜᴍᴜʀɪ ʏᴀɴɢ sɪᴀᴘ ᴍᴇᴍʙᴀɴᴛᴜ ᴋᴇsᴜʟɪᴛᴀɴᴍᴜ 😄. 
 
╭ᕗɞ⊱──『 *USER INFO* 』──⏤͟͟͞͞ᖫ
╎︎☘︎」𝗦𝘁𝗮𝘁𝘂𝘀 : ${isPremium ? 'ᴘʀᴇᴍɪᴜᴍ' : 'ғʀᴇᴇ'}
╎︎☘︎」𝗕𝗮𝗹𝗮𝗻𝗰𝗲 : $${toRupiah(balancenya)}
╎︎☘︎」𝗟𝗶𝗺𝗶𝘁 : ${Styles2(`${limitnya}`)}
╎ᕗɞ⊱──『 *OTHER INFO* 』⏤͟͟͞͞ᖫ
╎︎☘︎」𝗢𝘄𝗻𝗲𝗿 => *Ⓞ*
╎︎☘︎」𝗙𝗿𝗲𝗲 => *Ⓕ*
╎︎☘︎」𝗣𝗿𝗲𝗺𝗶𝘂𝗺 => *Ⓟ*
╎︎☘︎」𝗟𝗶𝗺𝗶𝘁 => *Ⓛ*
╎ᕗɞ⊱──『 *OTHER INFO* 』⏤͟͟͞͞ᖫ
╎︎☘︎」𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${botname}
╎︎☘︎」𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${Styles2(`${runtime(process.uptime())}`)}
╎ ⃟ꕥ╌╌╌╌╌╌╌⊰۝⊱╌╌╌╌╌╌╌⏤͟͟͞
`
const caption = `${rezz}\n${menuagama(prefix)}\n${wm}\n${footerm}`;
TsuCnn.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `𝑻𝒔𝒖𝒎𝒖𝒓𝒊 𝑴𝒆𝒏𝒖`,
            mimetype: "application/pdf",
            fileLength: 00000111,
            pageCount: 2024,
			caption: caption,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	 newsletterName: '𝚃 𝚂 𝚄 𝙼 𝚄 𝚁 𝙸',
 newsletterJid: idchannel,
		},
		externalAdReply: {  
title: `${time}`, 
body: `Tsumuri Version : 2.0.5`,
thumbnailUrl: thumbnail2,
sourceUrl: '', 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: kalgans})
}
break
case "aimenu": 
case "menuai": {
if (!isRegistered) return m.reply(mess.regis)
//await TsuCnn.sendMessage(m.chat, { react: { text: "✅",key: m.key,}})
var old = performance.now(); 
var neww = performance.now(); 
var speed = neww - old; 
let rezz = `*> Halo ${pushname} 👋, ${ucapanWaktu}*.
> ᴀᴋᴜ ᴛsᴜᴍᴜʀɪ ʏᴀɴɢ sɪᴀᴘ ᴍᴇᴍʙᴀɴᴛᴜ ᴋᴇsᴜʟɪᴛᴀɴᴍᴜ 😄. 
 
╭ᕗɞ⊱──『 *USER INFO* 』──⏤͟͟͞͞ᖫ
╎︎☘︎」𝗦𝘁𝗮𝘁𝘂𝘀 : ${isPremium ? 'ᴘʀᴇᴍɪᴜᴍ' : 'ғʀᴇᴇ'}
╎︎☘︎」𝗕𝗮𝗹𝗮𝗻𝗰𝗲 : $${toRupiah(balancenya)}
╎︎☘︎」𝗟𝗶𝗺𝗶𝘁 : ${Styles2(`${limitnya}`)}
╎ᕗɞ⊱──『 *OTHER INFO* 』⏤͟͟͞͞ᖫ
╎︎☘︎」𝗢𝘄𝗻𝗲𝗿 => *Ⓞ*
╎︎☘︎」𝗙𝗿𝗲𝗲 => *Ⓕ*
╎︎☘︎」𝗣𝗿𝗲𝗺𝗶𝘂𝗺 => *Ⓟ*
╎︎☘︎」𝗟𝗶𝗺𝗶𝘁 => *Ⓛ*
╎ᕗɞ⊱──『 *OTHER INFO* 』⏤͟͟͞͞ᖫ
╎︎☘︎」𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${botname}
╎︎☘︎」𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${Styles2(`${runtime(process.uptime())}`)}
╎ ⃟ꕥ╌╌╌╌╌╌╌⊰۝⊱╌╌╌╌╌╌╌⏤͟͟͞
`
const caption = `${rezz}\n${menuai(prefix)}\n${wm}\n${footerm}`;
TsuCnn.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `𝑻𝒔𝒖𝒎𝒖𝒓𝒊 𝑴𝒆𝒏𝒖`,
            mimetype: "application/pdf",
            fileLength: 00000111,
            pageCount: 2024,
			caption: caption,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	 newsletterName: '𝚃 𝚂 𝚄 𝙼 𝚄 𝚁 𝙸',
 newsletterJid: idchannel,
		},
		externalAdReply: {  
title: `${time}`, 
body: `Tsumuri Version : 2.0.5`,
thumbnailUrl: thumbnail2,
sourceUrl: '', 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: kalgans})
}
break
case "storemenu":
case "menustore": {
if (!isRegistered) return m.reply(mess.regis) 
//await TsuCnn.sendMessage(m.chat, { react: { text: "✅",key: m.key,}})
var old = performance.now(); 
var neww = performance.now(); 
var speed = neww - old; 
let rezz = `*> Halo ${pushname} 👋, ${ucapanWaktu}*.
> ᴀᴋᴜ ᴛsᴜᴍᴜʀɪ ʏᴀɴɢ sɪᴀᴘ ᴍᴇᴍʙᴀɴᴛᴜ ᴋᴇsᴜʟɪᴛᴀɴᴍᴜ 😄. 
 
╭ᕗɞ⊱──『 *USER INFO* 』──⏤͟͟͞͞ᖫ
╎︎☘︎」𝗦𝘁𝗮𝘁𝘂𝘀 : ${isPremium ? 'ᴘʀᴇᴍɪᴜᴍ' : 'ғʀᴇᴇ'}
╎︎☘︎」𝗕𝗮𝗹𝗮𝗻𝗰𝗲 : $${toRupiah(balancenya)}
╎︎☘︎」𝗟𝗶𝗺𝗶𝘁 : ${Styles2(`${limitnya}`)}
╎ᕗɞ⊱──『 *OTHER INFO* 』⏤͟͟͞͞ᖫ
╎︎☘︎」𝗢𝘄𝗻𝗲𝗿 => *Ⓞ*
╎︎☘︎」𝗙𝗿𝗲𝗲 => *Ⓕ*
╎︎☘︎」𝗣𝗿𝗲𝗺𝗶𝘂𝗺 => *Ⓟ*
╎︎☘︎」𝗟𝗶𝗺𝗶𝘁 => *Ⓛ*
╎ᕗɞ⊱──『 *OTHER INFO* 』⏤͟͟͞͞ᖫ
╎︎☘︎」𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${botname}
╎︎☘︎」𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${Styles2(`${runtime(process.uptime())}`)}
╎ ⃟ꕥ╌╌╌╌╌╌╌⊰۝⊱╌╌╌╌╌╌╌⏤͟͟͞
`
const caption = `${rezz}\n${menustore(prefix)}\n${wm}\n${footerm}`;
TsuCnn.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `𝑻𝒔𝒖𝒎𝒖𝒓𝒊 𝑴𝒆𝒏𝒖`,
            mimetype: "application/pdf",
            fileLength: 00000111,
            pageCount: 2024,
			caption: caption,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	 newsletterName: '𝚃 𝚂 𝚄 𝙼 𝚄 𝚁 𝙸',
 newsletterJid: idchannel,
		},
		externalAdReply: {  
title: `${time}`, 
body: `Tsumuri Version : 2.0.5`,
thumbnailUrl: thumbnail2,
sourceUrl: '', 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: kalgans})
}
break
case "funmenu":
case "menufun": {
if (!isRegistered) return m.reply(mess.regis)
//await TsuCnn.sendMessage(m.chat, { react: { text: "✅",key: m.key,}})
var old = performance.now(); 
var neww = performance.now(); 
var speed = neww - old; 
let rezz = `*> Halo ${pushname} 👋, ${ucapanWaktu}*.
> ᴀᴋᴜ ᴛsᴜᴍᴜʀɪ ʏᴀɴɢ sɪᴀᴘ ᴍᴇᴍʙᴀɴᴛᴜ ᴋᴇsᴜʟɪᴛᴀɴᴍᴜ 😄. 
 
╭ᕗɞ⊱──『 *USER INFO* 』──⏤͟͟͞͞ᖫ
╎︎☘︎」𝗦𝘁𝗮𝘁𝘂𝘀 : ${isPremium ? 'ᴘʀᴇᴍɪᴜᴍ' : 'ғʀᴇᴇ'}
╎︎☘︎」𝗕𝗮𝗹𝗮𝗻𝗰𝗲 : $${toRupiah(balancenya)}
╎︎☘︎」𝗟𝗶𝗺𝗶𝘁 : ${Styles2(`${limitnya}`)}
╎ᕗɞ⊱──『 *OTHER INFO* 』⏤͟͟͞͞ᖫ
╎︎☘︎」𝗢𝘄𝗻𝗲𝗿 => *Ⓞ*
╎︎☘︎」𝗙𝗿𝗲𝗲 => *Ⓕ*
╎︎☘︎」𝗣𝗿𝗲𝗺𝗶𝘂𝗺 => *Ⓟ*
╎︎☘︎」𝗟𝗶𝗺𝗶𝘁 => *Ⓛ*
╎ᕗɞ⊱──『 *OTHER INFO* 』⏤͟͟͞͞ᖫ
╎︎☘︎」𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${botname}
╎︎☘︎」𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${Styles2(`${runtime(process.uptime())}`)}
╎ ⃟ꕥ╌╌╌╌╌╌╌⊰۝⊱╌╌╌╌╌╌╌⏤͟͟͞
`
const caption = `${rezz}\n${menufun(prefix)}\n${wm}\n${footerm}`;
TsuCnn.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `𝑻𝒔𝒖𝒎𝒖𝒓𝒊 𝑴𝒆𝒏𝒖`,
            mimetype: "application/pdf",
            fileLength: 00000111,
            pageCount: 2024,
			caption: caption,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	 newsletterName: '𝚃 𝚂 𝚄 𝙼 𝚄 𝚁 𝙸',
 newsletterJid: idchannel,
		},
		externalAdReply: {  
title: `${time}`, 
body: `Tsumuri Version : 2.0.5`,
thumbnailUrl: thumbnail2,
sourceUrl: '', 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: kalgans})
}
break
case "gamemenu": 
case "menugame": {
if (!isRegistered) return m.reply(mess.regis) 
//await TsuCnn.sendMessage(m.chat, { react: { text: "✅",key: m.key,}})
var old = performance.now(); 
var neww = performance.now(); 
var speed = neww - old; 
let rezz = `*> Halo ${pushname} 👋, ${ucapanWaktu}*.
> ᴀᴋᴜ ᴛsᴜᴍᴜʀɪ ʏᴀɴɢ sɪᴀᴘ ᴍᴇᴍʙᴀɴᴛᴜ ᴋᴇsᴜʟɪᴛᴀɴᴍᴜ 😄. 
 
╭ᕗɞ⊱──『 *USER INFO* 』──⏤͟͟͞͞ᖫ
╎︎☘︎」𝗦𝘁𝗮𝘁𝘂𝘀 : ${isPremium ? 'ᴘʀᴇᴍɪᴜᴍ' : 'ғʀᴇᴇ'}
╎︎☘︎」𝗕𝗮𝗹𝗮𝗻𝗰𝗲 : $${toRupiah(balancenya)}
╎︎☘︎」𝗟𝗶𝗺𝗶𝘁 : ${Styles2(`${limitnya}`)}
╎ᕗɞ⊱──『 *OTHER INFO* 』⏤͟͟͞͞ᖫ
╎︎☘︎」𝗢𝘄𝗻𝗲𝗿 => *Ⓞ*
╎︎☘︎」𝗙𝗿𝗲𝗲 => *Ⓕ*
╎︎☘︎」𝗣𝗿𝗲𝗺𝗶𝘂𝗺 => *Ⓟ*
╎︎☘︎」𝗟𝗶𝗺𝗶𝘁 => *Ⓛ*
╎ᕗɞ⊱──『 *OTHER INFO* 』⏤͟͟͞͞ᖫ
╎︎☘︎」𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${botname}
╎︎☘︎」𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${Styles2(`${runtime(process.uptime())}`)}
╎ ⃟ꕥ╌╌╌╌╌╌╌⊰۝⊱╌╌╌╌╌╌╌⏤͟͟͞
`
const caption = `${rezz}\n${menugame(prefix)}\n${wm}\n${footerm}`;
TsuCnn.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `𝑻𝒔𝒖𝒎𝒖𝒓𝒊 𝑴𝒆𝒏𝒖`,
            mimetype: "application/pdf",
            fileLength: 00000111,
            pageCount: 2024,
			caption: caption,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	 newsletterName: '𝚃 𝚂 𝚄 𝙼 𝚄 𝚁 𝙸',
 newsletterJid: idchannel,
		},
		externalAdReply: {  
title: `${time}`, 
body: `Tsumuri Version : 2.0.5`,
thumbnailUrl: thumbnail2,
sourceUrl: '', 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: kalgans})
}
break
case "othermenu": 
case "menuother": {
if (!isRegistered) return m.reply(mess.regis) 
//await TsuCnn.sendMessage(m.chat, { react: { text: "✅",key: m.key,}})
var old = performance.now(); 
var neww = performance.now(); 
var speed = neww - old; 
let rezz = `*> Halo ${pushname} 👋, ${ucapanWaktu}*.
> ᴀᴋᴜ ᴛsᴜᴍᴜʀɪ ʏᴀɴɢ sɪᴀᴘ ᴍᴇᴍʙᴀɴᴛᴜ ᴋᴇsᴜʟɪᴛᴀɴᴍᴜ 😄. 
 
╭ᕗɞ⊱──『 *USER INFO* 』──⏤͟͟͞͞ᖫ
╎︎☘︎」𝗦𝘁𝗮𝘁𝘂𝘀 : ${isPremium ? 'ᴘʀᴇᴍɪᴜᴍ' : 'ғʀᴇᴇ'}
╎︎☘︎」𝗕𝗮𝗹𝗮𝗻𝗰𝗲 : $${toRupiah(balancenya)}
╎︎☘︎」𝗟𝗶𝗺𝗶𝘁 : ${Styles2(`${limitnya}`)}
╎ᕗɞ⊱──『 *OTHER INFO* 』⏤͟͟͞͞ᖫ
╎︎☘︎」𝗢𝘄𝗻𝗲𝗿 => *Ⓞ*
╎︎☘︎」𝗙𝗿𝗲𝗲 => *Ⓕ*
╎︎☘︎」𝗣𝗿𝗲𝗺𝗶𝘂𝗺 => *Ⓟ*
╎︎☘︎」𝗟𝗶𝗺𝗶𝘁 => *Ⓛ*
╎ᕗɞ⊱──『 *OTHER INFO* 』⏤͟͟͞͞ᖫ
╎︎☘︎」𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${botname}
╎︎☘︎」𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${Styles2(`${runtime(process.uptime())}`)}
╎ ⃟ꕥ╌╌╌╌╌╌╌⊰۝⊱╌╌╌╌╌╌╌⏤͟͟͞
`
const caption = `${rezz}\n${menuother(prefix)}\n${wm}\n${footerm}`;
TsuCnn.sendMessage(m.chat, {document: fs.readFileSync("./package.json"),
            fileName: `𝑻𝒔𝒖𝒎𝒖𝒓𝒊 𝑴𝒆𝒏𝒖`,
            mimetype: "application/pdf",
            fileLength: 00000111,
            pageCount: 2024,
			caption: caption,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	 newsletterName: '𝚃 𝚂 𝚄 𝙼 𝚄 𝚁 𝙸',
 newsletterJid: idchannel,
		},
		externalAdReply: {  
title: `${time}`, 
body: `Tsumuri Version : 2.0.5`,
thumbnailUrl: thumbnail2,
sourceUrl: '', 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: kalgans})
}
break
// batas menu
/*
TsuCnn.sendMessage(m.chat, {
text: `${rezz}\n${menuother(prefix)}\n${wm}\n${footerm}`,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: foter2,
newsletterJid: idchannel,
},
externalAdReply: {
title: `${time}`, 
body: `Tsumuri Version : 2.0.5`,
thumbnailUrl: thumbnail2,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted:kalgans})
*/

//OWNER MENU
case 'sendmessage':
case 'pesanke':
case 'pesan':
case 'message': {
if (!isCreator) return m.reply('Tak bise la') 
if (!text) return m.reply(`Contoh : ${prefix + command} Hai,48699532478`)
if (!text.split(",")) return m.reply(`Contoh : ${prefix}${command} Hai,48699532478`)
const [text2, nomer] = text.split(",")
if (isNaN(nomer)) return m.reply("Format Nomor Tidak Valid")
    TsuCnn.sendMessage(`${nomer}@s.whatsapp.net`, { text: `Kamu dapet pesan dari owner(${m.sender.split('@')[0]}) nih :\n*${text2}*` })
    m.reply('*Pesan telah dikirim.*')
}
break

case 'statustext': 
            case 'upswtext':
            case 'upswteks': {
               if (!isCreator) return m.reply(mess.owner)
               if (!q) return reply('Text?')
               m.reply(mess.wait)
               await TsuCnn.sendMessage('status@broadcast', { text: q }, { backgroundColor: '#FF000000', font: 3, statusJidList: Object.keys(global.db.data.users) })
               reply(mess.done)
            }
            break
            case 'statusvideo':
            case 'upswvideo': {
               if (!isCreator) return m.reply(mess.owner)
               m.reply(mess.wait)
               if (/video/.test(mime)) {
                  var videosw = await TsuCnn.downloadAndSaveMediaMessage(quoted)
                  await TsuCnn.sendMessage('status@broadcast', {
                     video: {
                        url: videosw
                     },
                     caption: q ? q : ''
                  }, { statusJidList: Object.keys(global.db.data.users) })
                  await reply(mess.done)
               } else {
                  reply('Reply to video')
               }
            }
            break
            case 'statusimg':
            case 'statusimage':
            case 'upswimg': {
               if (!isCreator) return m.reply(mess.owner)
               m.reply(mess.wait)
               if (/image/.test(mime)) {
                  var imagesw = await TsuCnn.downloadAndSaveMediaMessage(quoted)
                  await TsuCnn.sendMessage('status@broadcast', {
                     image: {
                        url: imagesw
                     },
                     caption: q ? q : ''
                  }, { statusJidList: Object.keys(global.db.data.users)})
                  await reply(mess.done)
               } else {
                  reply('Reply to image')
               }
            }
            break
            case 'statusaudio':
            case 'upswaudio': {
               if (!isCreator) return m.reply(mess.owner)
               m.reply(mess.wait)
               if (/audio/.test(mime)) {
                  var audiosw = await TsuCnn.downloadAndSaveMediaMessage(quoted)
                  await TsuCnn.sendMessage('status@broadcast', {
                     audio: {
                        url: audiosw
                     },
                     mimetype: 'audio/mp4',
                     ptt: true
                  }, {
                     backgroundColor: '#FF000000',
                     statusJidList: Object.keys(global.db.data.users)
                  })
                  await reply(mess.done)
               } else {
                  reply('Reply to audio')
               }
            }
            break


case "backupsc":{
if (!isCreator) return m.reply(mess.owner)
m.reply(mess.wait)
  const { execSync } = require("child_process");
  const ls = (await execSync("ls"))
.toString()
.split("\n")
.filter(
  (pe) =>
pe != "node_modules" &&
pe != "Tsusession" &&
pe != ".npm" &&
pe != ""
);
  const exec = await execSync(`zip -r New.zip ${ls.join(" ")}`);
  await TsuCnn.sendMessage(m?.chat,
{
  document: await fs.readFileSync("./New.zip"),
  mimetype: "application/zip",
  fileName: `Tsumuri Bakcup.zip`,
},
{ quoted: kalgans }
  );
  await execSync("rm -rf New.zip");
}
break

case 'addgc':
if (!m.isGroup) return m.reply(mess.group)
if (!isCreator) return m.reply(mess.owner)
ntilink.push(m.chat)
fs.writeFileSync('./database/idgroup.json', JSON.stringify(ntilink))
m.reply(`${command} sukses`)
break

case 'delgc':
if (!isCreator) return m.reply(mess.owner)
if (!m.isGroup) return m.reply(mess.group)
var ini = ntilink.indexOf(m.chat)
ntilink.splice(ini, 1)
fs.writeFileSync('./database/idgruop.json', JSON.stringify(ntilink))
m.reply(`${command} sukses`)
break

case 'hidetag':
case 'hide':
case 'ht':
case 'h': {
if (!isCreator) return m.reply(mess.owner)
if (!m.isGroup) return m.reply(mess.group)
TsuCnn.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, {quoted:kalgans})
}
break

case "disk":{
exec('cd && du -h --max-depth=1', (err, stdout) => {
if (err) return m?.reply(`${err}`)
if (stdout) return m?.reply(stdout)
})
}
break

case "backupdb": case "backupdatabase": {
if (!isCreator) return m.reply(mess.owner)
 TsuCnn.sendMessage(m.chat, {document: await fs.readFileSync('./database/database.json'), fileName: 'database.json', mimetype: 'application/json'}, {quoted: kalgans})
}
break

case "delpremium": case "delprem": {
if (!isCreator) return m.reply(mess.owner)
if (!text) return m.reply("nomornya")
let user = text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (db.data.users[user].premium == false) return m.reply(`User ${args[0]} bukan *User Premium!*`)
if (user in db.data.users) {
db.data.users[user].premium = false
m.reply("Berhasil menghapus *User Premium*")
} else return m.reply(`User ${args[0]} tidak terdaftar di database bot`)
}
break

case 'listregis':{
if (!isCreator) return m.reply(mess.owner)  
let anu =  require('./database/registered')
let teks = `乂 *L I S T - R E G I S T E R E D*\n`
teks += `*Total Register* : ${anu.lenght}\n\n`
anu.map((v, i) => {
teks += `• ${i+1} •\n`
teks += `*Id* : ${v.id}\n`
teks += `*Name* : ${v.name}\n`
teks += `*Age* : ${v.age}\n`
teks += `*Ns* : ${v.time}\n\n───────────────\n\n`
}).join('\n\n')
teks += `${foter2}`
m.reply(teks) 
}
break

case "addbalance": {
if (!isCreator) return m.reply(mess.owner)
let user = args[0]+'@s.whatsapp.net'
if (args[0] && args[1]) {
if (isNaN(args[0])) return m.reply('nomornya 100')
if (!Object.keys(db.data.users).includes(user)) return m.reply("Nomor target tidak terdaftar di database bot!")
if (isNaN(args[1])) return m.reply('nomornya 100')
db.data.users[`${user}`].balance += Number(args[1])
TsuCnn.sendMessage(m.chat, {text: `Berhasil menambah *${args[1]}* balance ke ${user.split("@")[0]}`})
} else return m.reply('nomornya 100')
}
break

case "payment": case 'nope': case 'nopay': {
TsuCnn.sendMessage(from, {react: {text: "💸", key: m.key}})
let menunya = `*Hai ${pushname}* 👋
*Berikut Adalah Nope*
${ownername}

> *DANA :*
- ${dana}

> *GOPAY :*
- ${gopay}

> *PULSA :*
- 085643516329`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: menunya
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: " "
}),
header: proto.Message.InteractiveMessage.Header.create({
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "-" } }, { upload: TsuCnn.waUploadToServer })),
title: `Tsumuri`,
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "💶 COPY PAYMENT DANA",
"copy_code": `085643516329`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "💵 COPY PAYMENT GOPAY",
"copy_code": `085643516329`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "💴 COPY PAYMENT PULSA",
"copy_code": `085643516329`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: '120363295629217013@newsletter',
newsletterName: `NOPE REEEZ HOSTING`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await TsuCnn.relayMessage(from, msg.message, {
messageId: msg.key.id
}, {quoted:m})
}
break


case "listclaimprem": {
if (!isCreator) return m.reply(mess.owner)
if (db.data.settings.claimprem.length < 1) return m.reply("Tidak ada code claim prem")
var teks = `*乂 LIST CODE CLAIM PREM*\n\nTotal : *${db.data.settings.claimprem.length}*\n\n`
db.data.settings.claimprem.forEach((e) => {
teks += ` ◦ ${e}\n`
})
m.reply(teks)
}
break

case "addlimit": {
if (!isCreator) return m.reply(mess.owner)
let user = args[0]+'@s.whatsapp.net'
if (args[0] && args[1]) {
if (isNaN(args[0])) return m.reply(`Contoh : ${prefix + command} nomornya 100`)
if (!Object.keys(db.data.users).includes(user)) return m.reply("Nomor target tidak terdaftar di database bot!")
if (isNaN(args[1])) return m.reply(`Contoh : ${prefix + command} nomornya 100`)
db.data.users[`${user}`].limit += Number(args[1])
TsuCnn.sendMessage(m.chat, {text: `Berhasil menambah *${args[1]}* limit ke ${user.split("@")[0]}`})
} else return m.reply(`Contoh : ${prefix + command} nomornya 100`)}
break

case "setnamagc": case "namegc": {
if (!isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (!text) return m.reply(`Contoh : ${prefix + command} teksnya`)
TsuCnn.groupUpdateSubject(m.chat, text)
m.reply(mess.done)}
break

case 'del': {
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (!m.quoted) return false
let { chat, fromMe, id, isBaileys } = m.quoted
TsuCnn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender } })
}
break

case "listhadiah": {
if (!isCreator) return m.reply(mess.owner)
if (db.data.settings.hadiah.length < 1) return m.reply("Tidak ada code hadiah")
var teks = `*乂 LIST CODE HADIAH*\n\nTotal : *${db.data.settings.hadiah.length}*\n\n`
db.data.settings.hadiah.forEach((e) => {
teks += ` ◦ ${e}\n`
})
m.reply(teks)
}
break

case "listprem": case "listpremium": {
if (!isCreator) return m.reply(mess.owner)
let user = Object.keys(db.data.users)
let ar = []
let urut = 1
var teks = '\n*乂 LIST USER PREMIUM*\n\n'
user.forEach((e) => {
if (db.data.users[e].premium == true) {
let no = urut++
teks += `${no}. @${e.split("@")[0]}\n`
ar.push(e)
}
})
if (ar.length < 1) {
m.reply("Tidak Ada User Premium")
} else {
TsuCnn.sendMessage(m?.chat, {text: teks, contextInfo: {mentionedJid: [...ar]}}, {quoted: kalgans})
}}
break

case "public": {
if (!isCreator) return m.reply(mess.owner)
TsuCnn.public = true
m.reply(mess.done)
}
break

case "self": {
if (!isCreator) return m.reply(mess.owner)
TsuCnn.public = false
m.reply(mess.done)
}
break

case "buatclaimprem": {
if (!isCreator) return m.reply(mess.owner)
if (isNaN(args[0])) return m.reply('Jumlah Kode claim prem')
for (let i = 0; i < Number(args[0]); i++) {
db.data.settings.claimprem.push(crypto.randomBytes(4).toString("hex"))
}
let teks = '\n'
db.data.settings.claimprem.forEach((e) => {
teks += `◦ ${e}\n`
})
m.reply(teks)
}
break

case "buathadiah": {
if (!isCreator) return m.reply(mess.owner)
if (isNaN(args[0])) return m.reply('Jumlah Kode Hadiah')
for (let i = 0; i < Number(args[0]); i++) {
db.data.settings.hadiah.push(crypto.randomBytes(4).toString("hex"))
}
let teks = '\n'
db.data.settings.hadiah.forEach((e) => {
teks += `◦ ${e}\n`
})
m.reply(teks)
}
break

case 'getcase': {
const getCase = (cases) => {
return "case "+`'${cases}'`+fs.readFileSync("./Tsu Cmd.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
try{
if (!isCreator) return m.reply(mess.owner)
if (!q) return m.reply(`Contoh : ${prefix + command} antilink`)
let nana = await getCase(q)
m.reply(nana)
} catch(err){
console.log(err)
m.reply(`Case ${q} tidak di temukan`)
}
}
break 

case 'addcase': {
 if (!isCreator) return m.reply(mess.owner)
 if (!text) return m.reply('Mana case nya');
const fs = require('fs');
const namaFile = 'Tsu Cmd.js';
const caseBaru = `${text}`;
fs.readFile(namaFile, 'utf8', (err, data) => {
if (err) {
console.error('Terjadi kesalahan saat membaca file:', err);
return;
}
const posisiAwalGimage = data.indexOf("case 'addcase':");

if (posisiAwalGimage !== -1) {
const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
if (err) {
m.reply('Terjadi kesalahan saat menulis file:', err);
} else {
m.reply('Case baru berhasil ditambahkan.');
}
});
} else {
m.reply('Tidak dapat menambahkan case dalam file.');
}
});
}
break

case "setppbotpanjang": case "setpppanjang": {
if (!isCreator) return m.reply(mess.owner)
if (/image/g.test(mime)) {
var medis = await TsuCnn.downloadAndSaveMediaMessage(qmsg, 'ppbot.jpeg', false)
var { img } = await generateProfilePicture(medis)
await TsuCnn.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
await fs.unlinkSync(medis)
m.reply("Berhasil Mengganti Foto Profil Bot ✅")
} else return m.reply('dengan mengirim foto')
}
break

case 'setbotname':{
if (!isCreator) return m.reply(mess.owner)
if (!text) return m.reply(`Dimana Namanya Tuan?\nContoh : ${prefix + command} Tsumuri-Md`)
await TsuCnn.updateProfileName(text)
m.reply(`Berhasil Mengubah Nama Bot Tuan✅`)
}
break

case "setppbot": {
if (!isCreator) return m.reply(mess.owner)
if (!quoted) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
var medis = await TsuCnn.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `/full`) {
var { img } = await generateProfilePicture(medis)
await TsuCnn.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
m.reply(mess.done)
} else {
var memeg = await TsuCnn.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
m.reply(mess.done)
}
}
break

case 'getbio':{
if (!isCreator) return m.reply(mess.owner)
try {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
else who = m.quoted.sender ? m.quoted.sender : m.sender
let bio = await TsuCnn.fetchStatus(who)
m.reply(bio.status)
} catch {
if (text) return m.reply(`bio is private or you haven't replied to the person's message!`)
else try {
let whoto = m.quoted ? m.quoted.sender : m.sender
let bio = await TsuCnn.fetchStatus(who)
m.reply(bio.status)
} catch {
return m.reply(`bio is private or you haven't replied to the person's message!`)
}
}
}
break

case 'delppbot': {
if (!isCreator) return m.reply(mess.owner)
await TsuCnn.removeProfilePicture(TsuCnn.user.id)
m.reply(mess.done)
}
break

case 'getname': {
if (!isCreator) return m.reply(mess.owner)
if (qtod === "true") {
namenye = await TsuCnn.getName(m.quoted.sender)
m.reply(namenye)
} else if (qtod === "false") {
TsuCnn.sendMessage(from, {text:"Reply orangnya"}, {quoted:kalgans})
}
}
break

case 'restart':
if (!isCreator) return m.reply(mess.owner)
m.reply(`_Restarting . . ._`)
await sleep(3000)
process.exit()
break

case "welcome": {
if (!isRegistered) return m.reply(`Kamu belum daftar!\nSilahkan daftar dengan cara *${prefix}daftar nama|umur!*`)
if (!isCreator) return m.reply(mess.owner)
if (!m.isGroup) return m.reply(mess.group)
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (welcm) return m.reply('Sudah Aktif')
wlcm.push(from)
var groupe = await TsuCnn.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
TsuCnn.sendMessage(from, {text: `Fitur Welcome Di Aktifkan Di Group Ini`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!welcm) return m.reply('Sudah Non Aktif')
let off = wlcm.indexOf(from)
wlcm.splice(off, 1)
m.reply('Sukses Mematikan Welcome  di group ini')
}
}
break

case 'bcgc': case 'bcgroup': {
if (!isCreator) return m.reply(mess.owner)
if (!text) return m.reply(`Text mana?\n\nContoh : ${prefix + command} fatih-san`)
let getGroups = await TsuCnn.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
TsuCnn.sendMessage(i, {text: `${text}`}, {quoted:kalgans})
}
m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
//BATAS OWNER MENU

//MAIN MENU
case 'afk': {
let user = global.db.data.users[m.sender]
user.afkTime = +new Date
user.afkReason = text
m.reply(`💤 *@${m.sender.replace(/@.+/g, '')}* Telah Afk${text ? ': ' + text : ''}`)
}
break

case 'report':
case 'reporterror': 
case 'laporbug': 
case 'lapor': 
case 'laporerror': {
    if (!text) return m.reply(`Contoh : ${prefix}${command} error nih min`) 
    TsuCnn.sendMessage(`${ownerno1}@s.whatsapp.net`, { text: `*<!> Report error*\nPengirim: ${m.sender.split('@')[0]}\nPesan: *${text}*` })
    m.reply('*> Pesan report telah dikirim kepada owner.*\n> Terima kasih telah membantu 🙏.')
}
break

case 'request': 
case 'req': 
case 'requestfitur': {
    if (!text) return m.reply(`Contoh : ${prefix}${command} game tabak kata`) 
    TsuCnn.sendMessage(`${ownerno1}@s.whatsapp.net`, { text: `*<!> Request fitur*\nPengirim: ${m.sender.split('@')[0]}\nPesan: *${text}*` })
    m.reply('*> Pesan request telah dikirim kepada owner.*\n> Jika main main saja/Fitur telah ada, owner tidak akan menanggapi.')
}
break

case "premium": case "buyprem": {
m.reply(`\n*💸 LIST HARGA USER PREMIUM*

*乂 PAKET A*
*Harga Rp5.000*
◦ Gratis Balance $10.000.000.000
◦ Gratis Limit 10.000
◦ Akses fitur premium
◦ Akses fitur claim limit & balance harian

*乂 PAKET B*
*Harga Rp10.000*
◦ Gratis Balance $30.000.000.000
◦ Gratis Limit 20.000
◦ Akses fitur premium
◦ Akses fitur claim limit & balance harian

*乂 PAKET C*
*Harga Rp15.000*
◦ Gratis Balance $50.000.000.000
◦ Gratis Limit 30.000
◦ Akses fitur premium
◦ Akses fitur claim limit & balance harian


Hubungi owner bot untuk membeli paket *User Premium* dengan cara ketik .owner\n`)}
break

case "redeemcode": {
if (!args[0]) return m.reply("Codenya")
if (args[0] !== args[0].toLowerCase()) return m.reply("*Code Redeem* wajib huruf kecil semua!")
if (db.data.settings.hadiahkadaluwarsa.includes(args[0])) return m.reply("*Code* tersebut sudah digunakan!")
if (!db.data.settings.hadiah.includes(args[0])) return m.reply("*Code* tidak valid!")
db.data.settings.hadiahkadaluwarsa.push(args[0])
var code = db.data.settings.hadiah.indexOf(args[0])
db.data.settings.hadiah.splice(code, 1)
let h1 = randomNumber(20000, 30000)
let h2 = randomNumber(10, 20)
db.data.users[m.sender].balance += h1
db.data.users[m.sender].limit += h2
var teks = `Selamat kepada @${m.sender.split("@")[0]} 🎉

kamu mendapatkan *Balance  $${toRupiah(h1)}* dan *${h2} Limit* dari *Code Redeem "${args[0]}"*`
await m.reply(`Berhasil mengambil hadiah *$${toRupiah(h1)} Balance* dan *${h2} Limit* dari *Code Redeem ${args[0]}*`).then(() => {
TsuCnn.sendMessage(m.chat, {text: teks, contextInfo: {mentionedJid: [m.sender], externalAdReply: { thumbnailUrl: thumbnail, title: "© Message System Notifikasi", body: null, sourceUrl: linkgc, renderLargerThumbnail: true, mediaType: 1}}}, {quoted: kalgans})
})}
break

case "topglobal": {
m.reply(mess.wait)
let ubalance = Object.entries(global.db.data.users).map(([key, value]) => {return {...value, jid: key}})
let sortedbalance = ubalance.map(toNumber('balance')).sort(sort('balance'))
let usersbalance = sortedbalance.map(enumGetKey)
m.reply(`\n*🏆 LIST TOP GLOBAL BALANCE*\n\nKamu Top *${usersbalance.indexOf(m?.sender) + 1}* Balance dari *${usersbalance.length}* Users

${sortedbalance.slice(0, 10).map(({ jid, balance }, i) => `${i + 1}. *Nama :* @${db.data.users[jid].name}\n*Nomor :* ${jid.split("@")[0]}\n*Balance :* $${toRupiah(balance)}\n`).join('\n')}\n`)}
break

case 'readvo': case 'readviewonce': {
if (!m.quoted) return m.reply('reply gambar/video yang ingin Anda lihat')
if (m.quoted.mtype !== 'viewOnceMessageV2') return m.reply('Ini bukan pesan view-once.')
let msg = m.quoted.message
let type = Object.keys(msg)[0]
const { downloadContentFromMessage } = require('@whiskeysockets/baileys')
let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
if (/video/.test(type)) {
return TsuCnn.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
} else if (/image/.test(type)) {
return TsuCnn.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
}
}
break

case "buylimit": case "belilimit": {
if (!args[0]) return m.reply('100\n\nHarga 1 *limit* = $1000 *balance*')
if (isNaN(args[0])) return m.reply('20')
if ((args[0]).includes('.')) return m.reply('20')
let harga = 1000
let total = Number(parseInt(args[0]) * harga)
if (balancenya < total) return m.reply(`*Balance* kamu tidak cukup untuk membeli ${args[0]} *Limit!*\n\nDapatkan *Balance* dengan cara memainkan game`)
db.data.users[m?.sender].limit += Number(args[0])
db.data.users[m?.sender].balance -= total
m.reply(`Berhasil membeli *${args[0]}* limit, dengan *$${toRupiah(total)}* balance`)
}
break

case "listgc": case "cekid": case"listgrup": {
if (!isCreator) return m.reply(mess.owner)
let gcall = Object.values(await TsuCnn.groupFetchAllParticipating().catch(_=> null))
let listgc = `*｢ LIST ALL CHAT GRUP ｣*\n\n`
await gcall.forEach((u, i) => {
listgc += `*• Nama :* ${u.subject}\n*• ID :* ${u.id}\n*• Total Member :* ${u.participants.length} Member\n*• Status Grup :* ${u.announce == true ? "Tertutup" : "Terbuka"}\n*• Pembuat :* ${u.owner ? u.owner.split('@')[0] : 'Sudah keluar'}\n\n`
})
m.reply(listgc)
}
break

case "claim": {
if (!isPremium) return m.reply(mess.premium)
if (db.data.users[m.sender].claim == 0) return m.reply("Kamu sudah *Claim* hadiah hari ini, hadiah *Claim* akan direset saat jam 12 malam!")
const hadiah = randomNumber(50000, 70000)
const hadiah2 = randomNumber(100, 200)
db.data.users[m.sender].balance += hadiah
db.data.users[m.sender].limit += hadiah2
db.data.users[m.sender].claim = 0
m.reply(`Berhasil *Claim* hadiah harian\n\n+ $${toRupiah(hadiah)} *Balance*\n+ ${hadiah2} *Limit*`)
}
break
case "claimprem": {
if (!args[0]) return m.reply("Codenya")
if (args[0] !== args[0].toLowerCase()) return m.reply("*Code Claim Prem* wajib huruf kecil semua!")
if (db.data.settings.claimpremkadaluwarsa.includes(args[0])) return m.reply("*Code* tersebut sudah digunakan!")
if (!db.data.settings.claimprem.includes(args[0])) return m.reply("*Code* tidak valid!")
db.data.settings.claimpremkadaluwarsa.push(args[0])
var code = db.data.settings.claimprem.indexOf(args[0])
db.data.settings.claimprem.splice(code, 1)
let h1 = randomNumber(20000, 30000)
let h2 = randomNumber(10, 20)
let h3 = randomNumber(10, 20)
db.data.users[m?.sender].balance += h1
db.data.users[m?.sender].limit += h2
db.data.users[m?.sender].glimit += h3
db.data.users[m?.sender].premium = true
var teks = `Selamat kepada @${m?.sender.split("@")[0]} 🎉

kamu mendapatkan *Balance  $${toRupiah(h1)}* dan *${h2} Limit* dan *${h3} Limit Game* dari *Code Redeem "${args[0]}"*`
await m.reply(`Berhasil mengambil claim prem *$${toRupiah(h1)} Balance* dan *${h2} Limit* dan *${h3} Limit Game* dari *Code Redeem ${args[0]}*`).then(() => {
TsuCnn.sendMessage(m?.chat, {text: teks, contextInfo: {mentionedJid: [m?.sender], externalAdReply: { thumbnailUrl: ppuser, title: "© Message System Notifikasi", body: null, sourceUrl: linkchannel, renderLargerThumbnail: true, mediaType: 1}}}, {quoted: kalgans})
})}
break

case 'tqto': {
let cu = `*BIG TAHNKS TO*

> Hw Mods [ Base ]
> Rerez Hosting [ Developer ]
> luhungch [ Recoder ]

Saya mohon dukungan dan bantuanya kepada kalian
My Chanel : https://www.youtube.com/@luhungch
Wa Chanel : https://whatsapp.com/channel/0029VaeYK1cBA1f8AOFnYY3A
`
let cp = (cu)
TsuCnn.sendMessage(m?.chat, {
text: cp,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
thumbnailUrl: thumbnail, 
title: `© 2024 | Tsumuri-Md`,
body: '',
sourceUrl: "https://whatsapp.com/channel/0029VaeYK1cBA1f8AOFnYY3A",
mediaType: 1,
renderLargerThumbnail: true
}}
})
}
break

case 'listcase': {
let { listCase } = require('./lib/scrapelistCase.js')
m.reply(listCase())
}
break

case "ceklimit": case "limit": case "me":
case "balance": case "cekbalance": case "my": {
if (m.quoted) {
try {
ppuser = await TsuCnn.profilePictureUrl(pengirim, 'image')
} catch (err) {
ppuser = `https://i.ibb.co.com/7NsVQcZ/a059a6a734ed202c879d3.jpg`
}    
let teksnya = `
  ◦ Name : *${pushname}*
  ◦ Number : *${m.sender.split('@')[0]}*
  ◦ Limit : *${limitnya}*
  ◦ Balance : *$${toRupiah(balancenya)}*`
TsuCnn.sendMessage(m.chat, {text: teksnya, 
contextInfo: {
externalAdReply: {
thumbnailUrl: thumbnail, 
title: '©User Info Message', 
renderLargerThumbnail: true, 
sourceUrl: `https://wa.me/${m.sender.split('@')[0]}`, 
mediaType: 1}}}, {quoted: kalgans})
} else {
let teksnya = `
  ◦ Name : *${pushname}*
  ◦ Number : *@${m.sender.split('@')[0]}*
  ◦ Limit : *${limitnya}*
  ◦ Balance : *$${toRupiah(balancenya)}*`
TsuCnn.sendMessage(m.chat, {text: teksnya, 
contextInfo: {
externalAdReply: {
thumbnailUrl: thumbnail, 
title: '©User Info Message', 
renderLargerThumbnail: true, 
sourceUrl: `https://wa.me/${m.sender.split('@')[0]}`, 
mediaType: 1}}}, {quoted: kalgans})
}}
break

case 'qc': {
if (limitnya < 1) return m.reply(mess.limit)
if (!q) return m.reply(`📌Contoh : ${prefix + command} hallo`)
let obj = {
type: 'quote',
format: 'png',
backgroundColor: '#ffffff',
width: 512,
height: 768,
scale: 2,
messages: [
{
entities: [],
avatar: true,
from: {
id: 1,
name: pushname,
photo: { 
url: await TsuCnn.profilePictureUrl(m.sender, "image").catch(() => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'),
}
},
text: `${q}`,
replyMessage: {},
},
],
};
let response = await axios.post('https://bot.lyo.su/quote/generate', obj, {
headers: {
'Content-Type': 'application/json',
},
});
let buffer = Buffer.from(response.data.result.image, 'base64');
TsuCnn.sendImageAsSticker(m.chat, buffer, kalgans, { packname: `${global.packname}`, author: `${global.author}`})
uselimit()}
break

case 'qc2': {
if (!q) return m.reply(`📌Contoh : ${prefix + command} pink hallo\n\n꒰ 🖌️ Color List ꒱ ೄྀ࿐ ˊˎ-\n━━━━━━⊱⋆⊰━━━━━━\npink\nblue\nred\ngreen\nyellow\npurple\ndarkblue\nlightblue\nash\norange\nblack\nwhite\nteal\nlightpink\nchocolate\nsalmon\nmagenta\ntan\nwheat\ndeeppink\nfire\nskyblue\nsafron\nbrightskyblue\nhotpink\nlightskyblue\nseagreen\ndarkred\norangered\ncyan\nviolet\nmossgreen\ndarkgreen\nnavyblue\ndarkorange\ndarkpurple\nfuchsia\ndarkmagenta\ndarkgray\npeachpuff\nblackishgreen\ndarkishred\ngoldenrod\ndarkishgray\ndarkishpurple\ngold\nsilver`)
if (text.length > 100) return m.reply(`Max 100 character.`)
let [color, ...message] = text.split(' ');
message = message.join(' ');
let backgroundColor;
switch(color) {
case 'pink':
backgroundColor = '#f68ac9';
break;
case 'blue':
backgroundColor = '#6cace4';
break;
case 'red':
backgroundColor = '#f44336';
break;
case 'green':
backgroundColor = '#4caf50';
break;
case 'yellow':
backgroundColor = '#ffeb3b';
break;
case 'purple':
backgroundColor = '#9c27b0';
break;
case 'darkblue':
backgroundColor = '#0d47a1';
break;
case 'lightblue':
backgroundColor = '#03a9f4'; 
break;
case 'ash':
backgroundColor = '#9e9e9e';
break;
case 'orange':
backgroundColor = '#ff9800';
break;
case 'black':
backgroundColor = '#000000';
break;
case 'white':
backgroundColor = '#ffffff';
break;
case 'teal':
backgroundColor = '#008080';
break;
case 'lightpink':
backgroundColor = '#FFC0CB';
break;
case 'chocolate':
backgroundColor = '#A52A2A';
case 'salmon':
backgroundColor = '#FFA07A'; 
break; 
case 'magenta':
backgroundColor = '#FF00FF'; 
break; 
case 'tan':
backgroundColor = '#D2B48C'; 
break;
case 'wheat':
backgroundColor = '#F5DEB3'; 
break;
case 'deeppink':
backgroundColor = '#FF1493'; 
break; 
case 'fire':
backgroundColor = '#B22222';
break;
case 'skyblue':
backgroundColor = '#00BFFF';
break; 
case 'orange':
backgroundColor = '#FF7F50';
break;
case 'brightskyblue':
backgroundColor = '#1E90FF'; 
break; 
case 'hotpink':
backgroundColor = '#FF69B4'; 
break; 
case 'lightskyblue':
backgroundColor = '#87CEEB'; 
break; 
case 'seagreen':
backgroundColor = '#20B2AA'; 
break; 
case 'darkred':
backgroundColor = '#8B0000'; 
break; 
case 'orangered':
backgroundColor = '#FF4500'; 
break; 
case 'cyan':
backgroundColor = '#48D1CC'; 
break; 
case 'violet':
backgroundColor = '#BA55D3'; 
break; 
case 'mossgreen':
backgroundColor = '#00FF7F'; 
break; 
case 'darkgreen':
backgroundColor = '#008000'; 
break; 
case 'navyblue':
backgroundColor = '#191970'; 
break; 
case 'darkorange':
backgroundColor = '#FF8C00'; 
break; 
case 'darkpurple':
backgroundColor = '#9400D3'; 
break; 
case 'fuchsia':
backgroundColor = '#FF00FF'; 
break; 
case 'darkmagenta':
backgroundColor = '#8B008B'; 
break;
case 'darkgray':
backgroundColor = '#2F4F4F'; 
break;
case 'peachpuff':
backgroundColor = '#FFDAB9'; 
break;
case 'darkishgreen':
backgroundColor = '#BDB76B'; 
break;
case 'darkishred':
backgroundColor = '#DC143C'; 
break;
case 'goldenrod':
backgroundColor = '#DAA520'; 
break;
case 'darkishgray':
backgroundColor = '#696969'; 
break;
case 'darkishpurple':
backgroundColor = '#483D8B'; 
break;
case 'gold':
backgroundColor = '#FFD700'; 
break;
case 'silver':
backgroundColor = '#C0C0C0'; 
break;
default:
return m.reply('The selected color is not available.')
}
let obj = {
type: 'quote',
format: 'png',
backgroundColor,
width: 512,
height: 768,
scale: 2,
messages: [
{
entities: [],
avatar: true,
from: {
id: 1,
name: pushname,
photo: { 
url: await TsuCnn.profilePictureUrl(m.sender, "image").catch(() => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'),
}
},
text: message,
replyMessage: {},
},
],
};
let response = await axios.post('https://bot.lyo.su/quote/generate', obj, {
headers: {
'Content-Type': 'application/json',
},
});
let buffer = Buffer.from(response.data.result.image, 'base64');
TsuCnn.sendImageAsSticker(m.chat, buffer, kalgans, { packname: `${global.packname}`, author: `${global.author}`})
}
break

case 'sticker': case 's': case 'stickergif': case 'sgif': {
 if (!quoted) m.reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await TsuCnn.sendImageAsStickerAV(from, media, kalgans, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await TsuCnn.sendVideoAsSticker(from, media, fcall, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
m.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`) 
}
}
break

case 'smeme': case 'stickermeme': case 'stickmeme': {
if (!/webp/.test(mime) && /image/.test(mime)) {
if (!text) return replyj(`Contoh : ${prefix + command} text1|text2`)
let { TelegraPh } = require('./lib/uploader')
atas = text.split('|')[0] ? text.split('|')[0] : ''
bawah = text.split('|')[1] ? text.split('|')[1] : ''
mee = await TsuCnn.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`
memek = await TsuCnn.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
} else {
replyj(`Send/reply image with caption ${prefix + command} text1|text2`)
}}
break

case 'tiktoksearch': case 'ttsearch':{
if (limitnya < 1) return m.reply(mess.limit)
if (!text) return m.reply(`${prefix + command} Cinematic Minecraft`)
let anu = await mann.search.tiktoks(text)
const capt = anu.title
const author = anu.author

let msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: [m.sender], 
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: `120363295629217013@newsletter`,
newsletterName: `"Tsumuri-MdS"`, 
serverMessageId: -1
},
businessMessageForwardInfo: { businessOwnerJid: TsuCnn.decodeJid(TsuCnn.user.id) },
}, 
body: proto.Message.InteractiveMessage.Body.create({
 text: (`*Author* : ${author}\n*Caption* : ${capt}`)
}),
footer: proto.Message.InteractiveMessage.Footer.create({
 text: `Simpel WhatsApp Bot`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: (`Tik Tok - Search`),
subtitle: `${ownername}`,
hasMediaAttachment: true,...(await prepareWAMessageMedia({ video: { url: anu.no_watermark } }, { upload: TsuCnn.waUploadToServer }))
}),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [ 
{
"name": "quick_reply",
"buttonParamsJson": `{\"display_text\":\"Next\",\"id\":\".tiktoksearch ${text}\"}`
},
]
})
})
}
}
}, {})

await TsuCnn.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
uselimit()}
break

case 'toimage': case 'toimg': {
if (limitnya < 1) return m.reply(mess.limit)
if (!quoted) m.reply('Reply Image') 
if (!/webp/.test(mime)) m.reply(`Balas sticker dengan caption *${prefix + command}*`) 
let media = await TsuCnn.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
TsuCnn.sendMessage(from, { image: buffer }, {quoted:limituse})
fs.unlinkSync(ran)
})
uselimit2()}
break

case 'remini': {
if (!quoted) return m.reply(`Where is the picture?`)
if (!/image/.test(mime)) return m.reply(`Send/Reply Photos With Captions ${prefix + command}`)
const { remini } = require('./lib/remini')
let media = await quoted.download()
let proses = await remini(media, "enhance")
TsuCnn.sendMessage(m.chat, { image: proses, caption: mess.success}, { quoted: kalgans})
}
break

case 'jarak': {
if (limitnya < 1) return m.reply(mess.limit)
var [me, to] = text.split`|`
if (!(from && to)) return m.reply(`Contoh : ${prefix + command} Yogyakarta|Jakarta`)
m.reply(mess.search)
var data = await jarakkota(me, to)
if (data.img) return TsuCnn.sendMessage(m.chat, { image: data.img, caption: data.desc }, { quoted: limituse })
uselimit2()}
break

case 'pinterest': case 'pin': {
if (limitnya < 1) return m.reply(mess.limit)
if (!text) return m.reply(`Contoh : ${prefix + command} Kamen Rider saber`)
await m.reply(mess.wait)
  async function createImage(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: {
        url
      }
    }, {
      upload: TsuCnn.waUploadToServer
    });
    return imageMessage;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  let push = [];
  let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
  let res = data.resource_response.data.results.map(v => v.images.orig.url);

  shuffleArray(res); // Randomize arrays
  let ult = res.splice(0, 5); // Takes the first 10 images from a randomized array
  let i = 1;
  for (let lucuy of ult) {
    push.push({
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: `*> Hai ${pushname}\n*_*Berikut adalah hasil dari: ${text}*_`
      }),
      footer: proto.Message.InteractiveMessage.Footer.fromObject({
        text: botname
      }),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: `Image - ${i++}`,
        hasMediaAttachment: true,
        imageMessage: await createImage(lucuy)
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"Source","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`
          }
        ]
      })
    });
  }
  const bot = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: mess.done
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: global.namabot
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards: [
              ...push
            ]
          })
        })
      }
    }
  }, {});
  await TsuCnn.relayMessage(m.chat, bot.message, {
    messageId: bot.key.id
  });
uselimit()}
break

case 'ttsearch': case 'ttscroll': case 'tiktoksearch': {
if (!text) return m.reply("Masukan Query!")
    let old = new Date();
    let json;
    try {
        json = await fetchJson(`https://skizo.tech/api/tiktok-search?apikey=${skizo}&keywords=${text}`);
    } catch (err) {
        return m.reply(`Terjadi kesalahan saat mengambil data: ${err.message}`);
    }

    function pickRandom(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
    
    var hiasan = "=> ";

    // Ensure json has enough elements
    if (!json || json.length < 8) return m.reply('Data tidak lengkap untuk membuat scroll.');

    let json1 = pickRandom([json[0], json[1], json[3]]);
    let json2 = pickRandom([json[5], json[6], json[7]]);
    let json3 = pickRandom([json[8], json[2]]);
    let json4 = pickRandom([json[7], json[3], json[6]]);
    let json5 = pickRandom([json[4], json[0], json[1]]);

    async function video(url) {
        if (!url) throw new Error('URL video tidak tersedia.');
        const { videoMessage } = await generateWAMessageContent({
            video: {
                url
            }
        }, {
            upload: TsuCnn.waUploadToServer
        });
        return videoMessage;
    }

    try {
        let msg = generateWAMessageFromContent(
            m.chat,
            {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: {
                            body: {
                                text: `result from ${text}`
                            },
                            carouselMessage: {
                                cards: [
                                    {
                                        header: {
                                            videoMessage: await video(json1.play),
                                            hasMediaAttachment: true,
                                        },
                                        body: {
                                            text: `[ T I K T O K - S C R O L L ]\n\n${hiasan}*Duration* : ${json1.duration || 'N/A'}\n${hiasan}*Play* : ${json1.play_count || 0}\n${hiasan}*Download* : ${json1.download_count || 0}\n${hiasan}*Share* : ${json1.share_count || 0}\n${hiasan}*Comment* : ${json1.comment_count || 0}\n${hiasan}*Like* : ${json1.digg_count || 0}\n\n`
                                        },
                                        nativeFlowMessage: {
                                            buttons: [
                                                {
                                                    "name": "quick_reply",
                                                    "buttonParamsJson": `{\"display_text\":\"NEXT VIDEO\",\"id\":\".tiktokscroll ${text}\"}`
                                                },
                                            ],
                                        },
                                    },
                                    {
                                        header: {
                                            videoMessage: await video(json2.play),
                                            hasMediaAttachment: true,
                                        },
                                        body: {
                                            text: `[ T I K T O K - S C R O L L ]\n\n${hiasan}*Duration* : ${json2.duration || 'N/A'}\n${hiasan}*Play* : ${json2.play_count || 0}\n${hiasan}*Download* : ${json2.download_count || 0}\n${hiasan}*Share* : ${json2.share_count || 0}\n${hiasan}*Comment* : ${json2.comment_count || 0}\n${hiasan}*Like* : ${json2.digg_count || 0}\n\n`
                                        },
                                        nativeFlowMessage: {
                                            buttons: [
                                                {
                                                    "name": "quick_reply",
                                                    "buttonParamsJson": `{\"display_text\":\"NEXT VIDEO\",\"id\":\".tiktokscroll ${text}\"}`
                                                },
                                            ],
                                        },
                                    },
                                    {
                                        header: {
                                            videoMessage: await video(json3.play),
                                            hasMediaAttachment: true,
                                        },
                                        body: {
                                            text: `[ T I K T O K - S C R O L L ]\n\n${hiasan}*Duration* : ${json3.duration || 'N/A'}\n${hiasan}*Play* : ${json3.play_count || 0}\n${hiasan}*Download* : ${json3.download_count || 0}\n${hiasan}*Share* : ${json3.share_count || 0}\n${hiasan}*Comment* : ${json3.comment_count || 0}\n${hiasan}*Like* : ${json3.digg_count || 0}\n\n`
                                        },
                                        nativeFlowMessage: {
                                            buttons: [
                                                {
                                                    "name": "quick_reply",
                                                    "buttonParamsJson": `{\"display_text\":\"NEXT VIDEO\",\"id\":\".tiktokscroll ${text}\"}`
                                                },
                                            ],
                                        },
                                    },
                                    {
                                        header: {
                                            videoMessage: await video(json4.play),
                                            hasMediaAttachment: true,
                                        },
                                        body: {
                                            text: `[ T I K T O K - S C R O L L ]\n\n${hiasan}*Duration* : ${json4.duration || 'N/A'}\n${hiasan}*Play* : ${json4.play_count || 0}\n${hiasan}*Download* : ${json4.download_count || 0}\n${hiasan}*Share* : ${json4.share_count || 0}\n${hiasan}*Comment* : ${json4.comment_count || 0}\n${hiasan}*Like* : ${json4.digg_count || 0}\n\n`
                                        },
                                        nativeFlowMessage: {
                                            buttons: [
                                                {
                                                    "name": "quick_reply",
                                                    "buttonParamsJson": `{\"display_text\":\"NEXT VIDEO\",\"id\":\".tiktokscroll ${text}\"}`
                                                },
                                            ],
                                        },
                                    },
                                    {
                                        header: {
                                            videoMessage: await video(json5.play),
                                            hasMediaAttachment: true,
                                        },
                                        body: {
                                            text: `[ T I K T O K - S C R O L L ]\n\n${hiasan}*Duration* : ${json5.duration || 'N/A'}\n${hiasan}*Play* : ${json5.play_count || 0}\n${hiasan}*Download* : ${json5.download_count || 0}\n${hiasan}*Share* : ${json5.share_count || 0}\n${hiasan}*Comment* : ${json5.comment_count || 0}\n${hiasan}*Like* : ${json5.digg_count || 0}\n\n`
                                        },
                                        nativeFlowMessage: {
                                            buttons: [
                                                {
                                                    "name": "quick_reply",
                                                    "buttonParamsJson": `{\"display_text\":\"NEXT VIDEO\",\"id\":\".tiktokscroll ${text}\"}`
                                                },
                                            ],
                                        },
                                    },

                                ],
                                messageVersion: 1,
                            },
                        },
                    },
                },
            },
            {}
        );

        await TsuCnn.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id,
        });
    } catch (error) {
        console.error(error);
        m.reply('Terjadi kesalahan saat mengirim pesan.');
    }
}
break;

case 'cekip': case 'ip': {
if (limitnya < 1) return m.reply(mess.limit)
if (args.length !== 1) {
return m.reply('Format salah! Penggunaan: cekip link');
}
const link = args[0];
dns.resolve4(link, (err, addresses) => {
if (err) {
return m.reply('Gagal melakukan DNS reverse lookup.');
}
if (addresses.length === 0) {
return m.reply('Tidak ada alamat IP yang ditemukan.');
}
const ip = addresses[0];
replylimit(`Alamat IP dari ${link} adalah: ${ip}`);
});
uselimit2()}
break

case 'cerpen': {
const mann = require('d-scrape')
const mannr = await mann.random.randomCerpen()
var yaya = `*[ R A N D O M  C E R P E N ]*\n\n*Judul:* ${mannr.judul}\n*Penulis:* ${mannr.penulis}\n\n${mannr.cerita}\n\n_${mannr.sumber}_`
m.reply(yaya)
}
break

case 'readvo': case 'readviewonce': {
if (!m.quoted) return m.reply(`Reply view once message to use this command`)
m.reply(mess.wait)
let type = Object.keys(m.quoted.message)[0]
let quotedType = m.quoted.message[type]
var media = await downloadContentFromMessage(quotedType, type == "imageMessage" ? "image" : "video")
let buffer = Buffer.from([])
for await (let chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
if (/video/.test(type)) {
await TsuCnn.sendMessage(m.chat, { video: buffer, caption: quotedType.caption }, {quoted: kalgans })
} else if (/image/.test(type)) {
await TsuCnn.sendMessage(m.chat, { image: buffer, caption: quotedType.caption }, {quoted: kalgans })
}
}
break

case 'tourl': {
if (limitnya < 1) return m.reply(mess.limit)
if (!/video/.test(mime) && !/image/.test(mime)) m.reply(`*Send/Reply the Video/Image With Caption* ${prefix + command}`) 
if (!quoted) m.reply(`*Send/Reply the Video/Image Caption* ${prefix + command}`) 
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await TsuCnn.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
m.reply(util.format(anu))
}
await fs.unlinkSync(media)
uselimit()}
break

case 'daftar': case 'regis': case 'register': {
if (isRegistered) return m.reply('Kamu sudah terdaftar')
const serialUser = createSerial(20)
mzd = `───「 𝗧𝗘𝗥𝗩𝗘𝗥𝗜𝗙𝗜𝗞𝗔𝗦𝗜 」────

○ Nomor : @${m?.sender.split('@')[0]}
○ Nama : ${pushname}
○ Status : Sukses✅ 
○ Ns : ${serialUser}

Jangan Lupa Baca Rules Ya ${pushname}...
Data User Yang Tersimpan Di Database Bot, Di Jamin Aman Tanpa Tershare (. ❛ ᴗ ❛.)`
veri = m?.sender
if (!m.isGroup) {
addRegisteredUser(m?.sender, pushname, serialUser)
TsuCnn.sendMessage(m?.chat, {
text: mzd,
contextInfo: {
mentionedJid: [m?.chat],
externalAdReply: {
showAdAttribution: true,
title: `© 2024 | R E G I S T E R`,
body: '',
thumbnailUrl: ppuser,
sourceUrl: "https://whatsapp.com/channel/0029VaeYK1cBA1f8AOFnYY3A",
mediaType: 1,
renderLargerThumbnail: true
}}
})
} else {
addRegisteredUser(m?.sender, pushname, serialUser)
TsuCnn.sendMessage(m?.chat, {
text: mzd,
contextInfo: {
mentionedJid: [m?.chat],
externalAdReply: {
showAdAttribution: true,
title: `© 2024 | R E G I S T E R`,
body: '',
thumbnailUrl: ppuser,
sourceUrl: "https://whatsapp.com/channel/0029VaeYK1cBA1f8AOFnYY3A",
mediaType: 1,
renderLargerThumbnail: true
}}
})
}
}
break

case 'ss': case 'ssweb': {
if (limitnya < 1) return m.reply(mess.limit)
const scp1 = require('./lib/myfunc') 
if (!q) return m.reply(`Contoh : ${prefix+command} link`)
m.reply(mess.search)
let krt = await scp1.ssweb(q)
TsuCnn.sendMessage(from,{image:krt.result,caption: mess.success}, {quoted:limituse})
uselimit2()}
break
//BATAS MAIN MENU

/*{
    if (!text) { 
        return TsuCnn.sendMessage(m.chat, {text: `Gunakan Contoh ${prefix}${command} 7!! Orange` },{quoted: m, ephemeralExpiration: ephemeral});
    }

    const pesan = await TsuCnn.sendMessage(m.chat, {text: 'Tunggu sebentar, sedang dicari dan diunduh...'});

    let search = await yts(text);
    let vid = search.videos[0];
    if (!search) throw 'Video Not Found, Try Another Title';
    let { authorName, title, thumbnail, duration, viewH, publishedTime, url } = vid;

    let caption = `╭──── 〔 Y O U T U B E 〕 ─⬣
⬡ Judul: ${title}
⬡ Author: ${authorName}
⬡ Durasi: ${duration}
⬡ Views: ${viewH}
⬡ Upload: ${publishedTime}
⬡ Link: ${url}
╰────────⬣`;

    const yt = await youtubedl(url).catch(async (_) => await youtubedlv2(url));
    const link = await yt.audio['128kbps'].download();
    let doc = {
      audio: { url: link },
      mimetype: "audio/mp4",
      ptt: true,
      fileName: `${title}.mp3`,
      contextInfo: {
        externalAdReply: {
          showAdAttribution: true,
          mediaType: 2,
          mediaUrl: url,
          title: title,
          body: "Tsumuri-Md",
          sourceUrl: url,
          thumbnailUrl: thumbnail 
        }
      }
    };

    await TsuCnn.sendMessage(m.chat, doc, {
      quoted: m, 
      ephemeralExpiration: ephemeral 
    });

  }*/
// DOWNLOAD MENU
case 'play':  case 'song': {
 if (!text) return m.reply(`Contoh : ${prefix + command} Hey Daddy`)
await m.reply(mess.wait)
let search = await yts(text);
    let vid = search.videos[0];
    if (!search) m.reply('Video Not Found, Try Another Title') 
    let { author, title, thumbnail, timestamp, views, ago, url } = vid;
    let caption = `${Styles2(`Judul: ${title}
Author: ${author}
Durasi: ${timestamp}
Views: ${views}
Upload: ${ago}
Link: `)}${url}
🕜 ᴀᴜᴅɪᴏ sᴇᴅᴀɴɢ ᴅɪᴅᴏᴡɴʟᴏᴀᴅ ᴅᴀɴ ᴅɪᴋɪʀɪᴍ sᴀʙᴀʀ ʏᴀ ᴋᴀᴋ.
`;
replylimit(caption);
let searchResponse = await ytdlnew(url)
             TsuCnn.sendMessage(m.chat, { audio: {url: searchResponse.mp3DownloadLink}, mimetype: "audio/mp4", ptt: false},
                          { quoted:mp3k})
uselimit2()
}
break
case 'tiktok':
case 'tt': {
if (args.length == 0) return m.reply(`Contoh : ${prefix + command} link lu`)
let res = await tiktok(`${args[0]}`)
TsuCnn.sendMessage(m.chat, { video: { url: res.nowm }, caption: res.title, fileName: `tiktok.mp4`, mimetype: 'video/mp4' }).then(() => {
TsuCnn.sendMessage(m.chat, { audio: { url: res.audio }, fileName: `tiktok.mp3`, mimetype: 'audio/mp4' })
})
}
break

case 'ytmp3': {
             if (!text) return m.reply(`Contoh : ${prefix + command} https://www.youtube.com/xxxxxxx`) 
	         m.reply(mess.wait)
             let searchResponse = await ytdlnew(text)
             TsuCnn.sendMessage(m.chat, { audio: {url: searchResponse.mp3DownloadLink}, mimetype: "audio/mp4", ptt: false},
                          { quoted:mp3k})
}
    break
case 'ytmp4': case 'ytvideo': {
  if (!text) return m.reply(`Contoh : ${prefix + command} https://www.youtube.com/xxxxxxx`) 
  m.reply(mess.wait)
  let searchResponse = await ytdlnew(text)
  const ytc = `*[ YOUTUBE DOWNLOADER ]*
  
  ©${botname}`;
  TsuCnn.sendMessage(m.chat, { video: { url: searchResponse.mp4DownloadLink }, caption: ytc }, { quoted: mp4k })
}
break

/*case "ytreels": case "ytmp4":{
if (!text) return m.reply('Masukan Link Nya!!!')
m.reply(mess.wait)
downloadMp4sc(text)
}
break

case 'ytmp3': case 'youtubemp3': {
if (!text) m.reply(`Contoh : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`) 
m.reply(mess.wait)
downloadMp3sc(text)
}
break
case 'instagram': {
if (!text) m.reply(`Contoh : ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`) 
m.reply(mess.wait)
let iganu = await igdl2(text)
TsuCnn.sendMessage(m.chat, { video: { url: iganu[0].url }, caption: mess.success })
}
break*/

case 'mediafire': {
if (!args[0]) return m.reply(`Enter the mediafire link next to the command`)
if (!args[0].match(/mediafire/gi)) return m.reply(`Link incorrect`)
let full = /f$/i.test(command)
let u = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
let res = await mediafiredl(args[0])
let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
let caption = `
≡ *MEDIAFIRE*

▢ *Number:* ${filename}
▢ *Size:* ${filesizeH}
▢ *Extension:* ${ext}
▢ *Uploaded:* ${aploud}
`.trim()
TsuCnn.sendMessage(m.chat, { document : { url : url}, fileName : filename, mimetype: ext }, { quoted : m })
}
break

case 'git': case 'gitclone': {
if (!args[0]) return m.reply2(`Contoh : ${prefix}${command} https://github.com/YukiShima4/tes`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return m.reply2(`Link invalid!!`)
m.reply(mess.search)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let [, user, repo] = args[0].match(regex1) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
TsuCnn.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: kalgans }).catch((err) => m.reply('emror'))
}
break 

//BATAS DOWN MENU
//GROUP MENU
case "promote":{
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isGroupOwner && !isCreator) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!text && !m.quoted) m.reply('masukkan nomor yang ingin di promote')
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await TsuCnn.groupParticipantsUpdate(m.chat, [users], 'promote').catch(console.log)
}
break

case 'antilink': {
if (!isCreator) return m.reply(mess.owner)
if (!m.isGroup) return groupon(from)
if (!isAdmins && !isCreator) return sticAdmin(from)
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (AntiLink) return m.reply('Sudah Aktif')
ntilink.push(from)
m.reply('Succes menyalakan antilink di group ini 🌷')
} else if (args[0] === "off") {
if (!AntiLink) return m.reply('Sudah Mati')
let off = ntilink.indexOf(from)
ntilink.splice(off, 1)
m.reply('Succes mematikan antilink di group ini 🌷')
} else {
m.reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break

case "demote":{
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isGroupOwner && !isCreator) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!text && !m.quoted) m.reply('masukkan nomor yang ingin di demote')
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await TsuCnn.groupParticipantsUpdate(m.chat, [users], 'demote').catch(console.log)
}
break

case 'sendlinkgc': {
if (!isCreator) return m.reply(mess.owner)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!args[0]) return m.reply(`Contoh : ${prefix+command} 628xxxxxxxxxx`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
let response = await TsuCnn.groupInviteCode(from)
TsuCnn.sendText(bnnd, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break

case 'resetlinkgc':
if (!isCreator) return m.reply(mess.owner)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
TsuCnn.groupRevokeInvite(from)
break

case 'editdesk':{
if (!isCreator) return m.reply(mess.owner)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins) return m.reply(mess.admin)
if (!text) return m.reply(`Text Nya ?`)
await TsuCnn.groupUpdateDescription(from, text).then((res)).catch((err) => m.reply(jsonformat(err)))
}
break

case 'closetime':
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (args[1]=="detik") {var timer = args[0]*`1000`
} else if (args[1]=="menit") {var timer = args[0]*`60000`
} else if (args[1]=="jam") {var timer = args[0]*`3600000`
} else if (args[1]=="hari") {var timer = args[0]*`86400000`
} else {return m.reply("*pilih:*\ndetik\nmenit\njam\n\n*Contoh*\n10 detik")}
 m.reply(`Close time ${q} dimulai dari sekarang`)
setTimeout( () => {
const close = `*Tepat waktu* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan`
TsuCnn.groupSettingUpdate(from, 'announcement')
m.reply(close)
}, timer)
break

case "opentime": {
if (!m?.isGroup) return m.reply(mess.group)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (args[1] == 'detik') {
var timer = args[0] * `1000`
} else if (args[1] == 'menit') {
var timer = args[0] * `60000`
} else if (args[1] == 'jam') {
var timer = args[0] * `3600000`
} else if (args[1] == 'hari') {
var timer = args[0] * `86400000`
} else {
return m.reply('*pilih:*\ndetik\nmenit\njam\n\n*Contoh*\n10 detik')
}
m.reply(`Open Time ${q} Dimulai Dari Sekarang`)
setTimeout(() => {
const nomor = m.participant
const open = `*Tepat Waktu* Grup Dibuka Oleh Admin\nSekarang Member Dapat Mengirim Pesan`
TsuCnn.groupSettingUpdate(m.chat, 'not_announcement')
m.reply(open)
}, timer)
}
break
// + menu
case 'hai': case 'halo': case 'hi': {
if (text) return
let caption = `*${command.replace(/[h]/gi, 'H')} ${pushname} 👋*`
replyj(caption)
}
break
// nsfw menu
/*case 'pixiv': 
let px2 = pickRandom(['Akane',
'Shiroko',
'Hu tao',
'Elaina',
'Shizuka',
'Shiroko',
'Furina'
])
let img = `https://ndra-furinaa-api.vercel.app/api/pixiv?query=${text}`
let img = `https://ndra-furinaa-api.vercel.app/api/pixiv?query=${px2}`
if (!text) return TsuCnn.sendMessage(from, {image: {url: img}, caption: ``}, {quoted: m})
break*/
// agama menu
  
case 'bible': {
if (!text) return replyj(`Contoh : ${prefix}${command} john 3:16`) 
    axios
    .get(`https://bible-api.com/${text}`)
    .then(async ({ data }) => {
    let chptrhin = await translate(`${data.text}`, { to: 'hi', autoCorrect: true })
    let chptrind = await translate(`${data.text}`, { to: 'id', autoCorrect: true })
        var text = `📖 *The Holy Bible*\nReference : ${data.reference}\n`
        text += `\n*Chapter Content English:*\n${data.text}`
        text += `*Chapter Content Hindi:*\n\n${chptrhin.text}\n\n`
        text += `*Chapter Content Indonesia:*\n\n${chptrind.text}`
        replyj(text)
})}
break

case `assalamu'alaikum`: case 'assalamualaikum':{
let caption = `Waalaikumsalam Warahmatullahi Wabarakatuh.`
replyj(caption)}
break

case 'shalom': {
let caption = `Shalom.`
replyj(caption)}
break
case 'om': {
const args = m.text.trim().split(/\s+/);
const cmds = args[1]?.toLowerCase();
if (cmds === "swastiastu") {
replyj('Om Swastiastu.')
} else if (cmds === "swastyastu") {
replyj('Om Swastyastu.')
}}
break

case 'salam': {
const args = m.text.trim().split(/\s+/);
const cmds2 = args[1]?.toLowerCase();
if (cmds2 === "") {
replyj('Salam.')
} else if (cmds2 === "sejahtera") {
replyj('Amin shalom.')
} else if (cmds2 === "olahraga") {
replyj('Salam.')
} else if (cmds2 === "kebajikan") {
replyj('Salam kebajikan.') 
}
}
break

case 'namo': {
const args = m.text.trim().split(/\s+/);
const cmdn = args[1]?.toLowerCase();
if (cmdn === "budhaya") {
replyj('Namo Budhaya.') 
}}
break

case 'doaharian': {
    let src = JSON.parse(fs.readFileSync('./database/doaharian.json', 'utf-8'))
    let caption = src.map((v, i) => {
        return `
*${i + 1}.* ${v.title}

❃ Latin :
${v.latin}

❃ Arabic :
${v.arabic}

❃ Translate :
${v.translation}
`.trim()
    }).join('\n\n')
    m.reply(`${caption}`)

}
break

case 'niatsholat':
case 'niatsalat': {
    if (!q) return m.reply(`Contoh : ${prefix}${command} Subuh`)
const niatsholat = [
    {
        index: 1,
        solat: "subuh",
        latin: "Ushalli fardhosh shubhi rok'ataini mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "اُصَلِّى فَرْضَ الصُّبْحِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu Shubuh dua raka'at menghadap kiblat karena Allah Ta'ala",
    },
    {
        index: 2,
        solat: "maghrib",
        latin: "Ushalli fardhol maghribi tsalaata raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "اُصَلِّى فَرْضَ الْمَغْرِبِ ثَلاَثَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu Maghrib tiga raka'at menghadap kiblat karena Allah Ta'ala",
    },
    {
        index: 3,
        solat: "dzuhur",
        latin: "Ushalli fardhodl dhuhri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "اُصَلِّى فَرْضَ الظُّهْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu Dzuhur empat raka'at menghadap kiblat karena Allah Ta'ala",
    },
    {
        index: 4,
        solat: "isha",
        latin: "Ushalli fardhol 'isyaa-i arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "صَلِّى فَرْضَ الْعِشَاءِ اَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu Isya empat raka'at menghadap kiblat karena Allah Ta'ala",
    },
    {
        index: 5,
        solat: "ashar",
        latin: "Ushalli fardhol 'ashri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "صَلِّى فَرْضَ الْعَصْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu 'Ashar empat raka'at menghadap kiblat karena Allah Ta'ala",
    },
    {
        index: 6,
        solat: "tahajjud", 
        latin: "Ushalli sunnatat tahajjudi rak'ataini mustaqbilal qiblati lillahi ta'ala", 
        arabic: "اُصَلِّى سُنَّةً التَّهَجُّدِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ ِللهِ تَعَالَى", 
        translation_id: "Aku berniat shalat sunnah tahajud dua rakaat, menghadap kiblat, karena Allah ta'ala", 
    },
    {
        index: 7,
        solat: "dhuha", 
        latin: "Ushalli sunnatadh dhuhaa rak'ataini mustaqbilal qiblati adaan lillaahi ta'aalaa", 
        arabic: "اُصَلِّى سُنَّةَ الضَّحٰى رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى", 
        translation_id: "Aku niat sholat dhuha dua rakaat, karena Allah ta'ala", 
    },
    {
        index: 8,
        solat: "dhuha", 
        latin: "Ushalli sunnatat tarawihi rak'ataini mustaqbilal qiblati adaa an lillahi ta'ala", 
        arabic: "اُصَلِّى سُنَّةَ التَّرَاوِيْحِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لِلهِ تَعَالَى", 
        translation_id: "Aku berniat sholat tarawih dua rakaat dengan menghadap kiblat karena Allah taala", 
    },
    {
        index: 9,
        solat: "dhuha", 
        latin: "Ushallii sunnatal witri tsalaasa roka'aatain mustaqbilal qiblati lillaahi ta'alaa", 
        arabic: "اُصَلِّى سُنَّةَ الْوِتْرِ ثَلَاثَ رَكْعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ لِلهِ تَعَالَى", 
        translation_id: "Saya niat sholat witir tiga rakaat menghadap kiblat karena Allah Taala", 
    },
    {
        index: 10,
        solat: "taubat", 
        latin: "Ushalli sunnatat taubati rak’ataini lillaahi ta’aalaa", 
        arabic: "أصلى سُنَّةَ التَّوْبَةِ رَكْعَتَيْنِ لِلَّهِ تَعَالَى", 
        translation_id: "Saya niat sholat taubat dua raka’at karena Allah Taala", 
    },
    {
        index: 11,
        solat: "safar", 
        latin: "Ushalliî sunnatas safari rak'ataini lillâhi ta'âla", 
        arabic: "أُصَلِّي سُنَّةَ السَّفَرِ رَكْعَتَيْنِ لِلّٰهِ تَعَالَى", 
        translation_id: "Saya niat shalat sunnah perjalanan dua rakaat karena Allah ta'âla", 
    },
    {
        index: 12,
        solat: "safar", 
        latin: "Ushalli sunnatan li Idil Fitri rak'atayni mustaqbilal qiblati adā'an lillāhi ta'ālā", 
        arabic: "اُصَلِّى سُنَّةً لِعِيْدِ الفِطْرِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً للهِ تَعَالَى", 
        translation_id: "Aku menyengaja sembahyang sunnah Idul Fitri dua rakaat dengan menghadap kiblat karena Allah SWT", 
    },
    {
        index: 13,
        solat: "hajat", 
        latin: "Ushallii sunnatal haajati rak'ataini lillaahi ta'aalaa", 
        arabic: "أُصَلَّيْ سُنَّةَ الْحَاجَةِ رَكْعَتَيْنِ لِلَّهِ تَعَالَى", 
        translation_id: "Saya niat sholat sunnah hajat 2 rakaat karena Allah Ta'ala", 
    }
]
    let text = q.toLowerCase() || ''
    let data = Object.values(niatsholat).find(v => v.solat == text)
    if (!data) return reply(`${txt} Tidak Ditemukan\n\nList Solat 5 Waktu :\n• Subuh\n• Maghrib\n• Dzuhur\n• Isha\n• Ashar`)
    reply(`
_*Niat Sholat ${text}*_

*Arab :* ${data.arabic}

*Latin :* ${data.latin} 

*Translate :* ${data.translation_id}`.trim())
}

break

case 'kisahnabi': {
    if (limitnya < 1) return m.reply(mess.limit)
    await m.reply(mess.wait) 
    if (args.length == 0) return m.reply(`Contoh : ${prefix + command} Muhammad`)
    axios
    .get(`https://api.lolhuman.xyz/api/kisahnabi/${args[0]}?apikey=ef9e2cf41e82d53b62533a88`)
    .then(({ data }) => {
        var text = `Name : ${data.result.name}\n`
        text += `Lahir : ${data.result.thn_kelahiran}\n`
        text += `Umur : ${data.result.age}\n`
        text += `Tempat : ${data.result.place}\n`
        text += `Story : \n${data.result.story}`
        replylimit(text)
        uselimit2()
    })
    .catch((error) => {
        console.error(error)
        reply('Terjadi kesalahan saat mengambil data kisah nabi.')
    })
    break
}
case 'jadwalsholat': {
    if (!text) return m.reply(`Contoh : ${prefix + command} yogyakarta`)
    if (limitnya < 1) return m.reply(mess.limit)
    await m.reply(mess.wait)
    axios
    .get(`https://anabot.my.id/api/search/jadwalsholat?kab_kota=${encodeURIComponent(text)}&apikey=${pickRandom(['uhnKkdVjsVeICuI','DdUFIJY3sIGZW0g','gataupw'])}`)
    .then(({ data }) => {
        var text = `Untuk Wilayah ${data.result.lokasi}\n`
        text += `Tanggal : ${data.result.jadwal.tanggal}\n`
        text += `Jadwal :\n`
        text += `> Subuh : ${data.result.jadwal.subuh}\n`
        text += `> Terbit : ${data.result.jadwal.terbit}\n`
        text += `> Dhuha : ${data.result.jadwal.dhuha}\n`
        text += `> Zuhur : ${data.result.jadwal.dzuhur}\n`
        text += `> Ashar : ${data.result.jadwal.ashar}\n`
        text += `> Maghrib : ${data.result.jadwal.maghrib}\n`
        text += `> Isya : ${data.result.jadwal.isya}`
        replylimit(text)
        uselimit2()
    })
    .catch((error) => {
        console.error(error)
        reply('Terjadi kesalahan saat mengambil data Jadwal Sholat.')
    })
    break
}
        case 'ayatkursi':{
        let caption = `
*「 Ayat Kursi 」*

اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ

“Alloohu laa ilaaha illaa huwal hayyul qoyyuum, laa ta’khudzuhuu sinatuw walaa naum. Lahuu maa fissamaawaati wa maa fil ardli man dzal ladzii yasyfa’u ‘indahuu illaa biidznih, ya’lamu maa baina aidiihim wamaa kholfahum wa laa yuhiithuuna bisyai’im min ‘ilmihii illaa bimaa syaa’ wasi’a kursiyyuhus samaawaati wal ardlo walaa ya’uuduhuu hifdhuhumaa wahuwal ‘aliyyul ‘adhiim.”


Artinya:
Allah, tidak ada Tuhan (yang berhak disembah) melainkan Dia Yang Hidup kekal lagi terus menerus mengurus (makhluk-Nya); tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafa'at di sisi Allah tanpa izin-Nya.
Allah mengetahui apa-apa yang di hadapan mereka dan di belakang mereka, dan mereka tidak mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dan Allah tidak merasa berat memelihara keduanya, dan Allah Maha Tinggi lagi Maha Besar." 
(QS. Al Baqarah: 255)
`
  m.reply(caption)
}
break
case 'quotesislamic':{
 let quotes = [
    'Segala sesuatu telah Allah takdirkan. - QS. Al Qamar : 49',
    'Dan sesungguhnya DIA lah yang menjadikan orang tertawa dan menangis. - QS. An Najm: 43',
    'Janganlah kamu berduka cita, sesungguhnya Allah selalu bersama kita.- QS At-Taubah: 40', 'Segala sesuatu telah Allah takdirkan. - QS. Al Qamar : 49',
'Dan sesungguhnya DIA lah yang menjadikan orang tertawa dan menangis. - QS. An Najm: 43',
'Janganlah kamu berduka cita, sesungguhnya Allah selalu bersama kita.- QS At-Taubah: 40',
'Maka sesungguhnya bersama kesulitan itu ada kemudahan.QS Al Insyirah: 5',
'Sesungguhnya Allah tidak akan mengubah keadaan suatu kaum hingga mereka merubah keadaan yang ada pada diri mereka sendiri. - Q.S. Ar Rad: 11',
'Sesungguhnya Kami telah menciptakan manusia dalam bentuk yang sebaik-baiknya. - QS At- Tin: 4',
'Dan Kami jadikan kamu berpasang-pasangan. - QS. An-Naba: 8',
'Maka jangan sekali-kali membiarkan kehidupan dunia ini memperdayakan kamu. - QS. Fatir: 5',
'Dan bersabarlah kamu, sesungguhnya janji Allah adalah benar. - QS. Ar-Rum: 60',
'Dan barang siapa yang bertakwa kepada Allah, niscaya Allah menjadikan baginya kemudahan dalam urusannya. - Q.S At-Talaq: 4',
'Allah tidak membebani seseorang melainkan sesuai dengan kesanggupannya. - QS. Al-Baqarah: 286',
'Tidakkah dia menyadari bahwa sesungguhnya Allah melihat segala perbuatannya?. - QS. Al-Alaq: 14',
'Bersabarlah wahai hati kelak akan ada seseorang yang datang dan siap menemani sisa hidupmu dalam ketaatan',
'Diri kita sendiri yang bisa menentukan apakah cinta kita berbuah dosa ataukah berbuah pahala',
'Dirimu yang sebenarnya adalah apa yang kamu lakukan di saat di ada orang yang melihatmu',
'Janji Allah tak pernah mengecewakan, dan bila kamu masih meras kecewa mungkin ada yang salah dengan imanmu',
'Rasa syukur tidak akan datang kepada orang yang tidak beriman dan tidak pernah kenyang',
'Maafkan aku andai apa yang aku tulis dan aku share tentang ilmu agama tidak sesuai dengan coberku dan kehidupanku yang asli',
'Kebanyakan manusia lebih senang menyalahkan orang lain daripada menyalahkan diri sendiri',
'Biarlah orang melihat penampilah kita biasa, tetapi luar biasa di mata Allah',
'Bersyukurlah bila dalam penantianmu, kau tetap gigih dalam kesendirian, sebab artinya kau telah memuliakan jalan Allah',
'Malu akan sebuah masalah itu boleh tapi jangan berlebihan sebab jika kita Yakin Pertolongan Allah itu sangatlah nyata',
'Yakinlah bahwa ada do’a yang terus dipanjatkan kepada Allah yang tidak putus-putus dari orang tua kita agar kita senantiasa menjadi anak yang sholeh dan sholehah',
'Setiap hari aku berusaha semaksimal mungkin mencari rizki yang halal demi bisa menghalalkanmu',
'Jatuh cinta bisa jadi sangat menyakitkan jika kita tidak mampu untuk mengendalikannya',
    // tambahkan quotes selanjutnya di sini
  ]
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
  let caption = `Quotes Islam:\n${randomQuote}` 
  m.reply(caption)
}
break
//SEARCH MENU
case 'kodepos':{
if (!text) return m.reply('Contoh : Samboja') 
const kode = await kodepos(`${text}`)
m.reply(`Kodepos : ${kodepos}
> Desa : ${desa}
> Kecamatan : ${kecamatan}
> Kota : ${kota} 
> Provinsi : ${provinsi}`.trim())
}
break

case 'lirik':
case 'lyrics': {
    if (limitnya < 1) return m.reply(mess.limit)
    if (!text) return m.reply(`Contoh : ${prefix + command} Surat cinta untuk starla`)
    await m.reply(mess.wait) 
    axios
    .get(`https://widipe.com/lirik?text=${encodeURIComponent(text)}`)
    .then(({ data }) => {
        var text = `Title : ${data.result.title}\n`
        text += `Artist : ${data.result.artist}\n`
        text += `Lirik : \n${data.result.lyrics}`
        replylimit(text)
        uselimit2()
    })
    .catch((error) => {
        console.error(error)
        reply('Terjadi kesalahan saat mengambil data kisah nabi.')
    })
}
break

case 'pokedex':
case 'pokemon': {
if (!text) return m.reply(`Contoh : ${prefix}${command} pikachu`);
const url = `https://some-random-api.com/pokemon/pokedex?pokemon=${encodeURIComponent(text)}`
const response = await fetch(url)
const json = await response.json()
if (!response.ok) {
throw `Terjadi kesalahan: ${json.error}`
}
const message = `
*Name:* ${json.name}
*ID:* ${json.id}
*Type:* ${json.type}
*Abilities:* ${json.abilities}
*Height:* ${json.height}
*Weight:* ${json.weight}
*Description:* ${json.description}
`
TsuCnn.sendMessage(m.chat, { text: message }, 'extendedTextMessage', { quoted: kalgans })
}
break
case 'cnnnews': {
            let res = await CNNNews()
            let no = 0
            let teks = "=============="
            for (let i of res) {
            no += 1
            teks += `\n│⭔ ${no.toString()} │⭔\n`
            teks += `Berita: ${i.berita}\n`
            teks += `Link: ${i.berita_url}\n`
            }
            teks += "=============="
    TsuCnn.sendMessage(m.chat, { text: teks }, { quoted: kalgans });
    }
        break
      case 'fajarnews': {
        let res = await FajarNews();
        let no = 0;
        let teks = "=============\n";
        
        for (let i of res) {
          no += 1;
          teks += `=============\n`;
          teks += `│⭔ ${no.toString()} │⭔\n`;
          teks += `Berita: ${i.berita}\n`;
          teks += `Upload: ${i.berita_diupload}\n`;
          teks += `Jenis: ${i.berita_jenis}\n`;
          teks += `Link: ${i.berita_url}\n`;
        }
        
        teks += "=============";
        TsuCnn.sendMessage(m.chat, { text: teks }, { quoted: kalgans });
        }
        break
      case 'jalantikusmeme': {
        let res = await JalanTikusMeme();
        let teks = "==============\n";
        teks += `Source: ${res}\n`;
        teks += "==============";
        TsuCnn.sendMessage(m.chat, { image: { url: res }, caption: teks }, { quoted: m });
        }
        break
            case 'cnbcnews': {
            let res = await CNBCNews()
            let no = 0
            let teks = "=============="
            for (let i of res) {
            no += 1
            teks += `\n│⭔ ${no.toString()} │⭔\n`
            teks += `Berita: ${i.berita}\n`
            teks += `Upload: ${i.berita_diupload}\n`
            teks += `Link: ${i.berita_url}\n`
            }
            teks += "=============="
            TsuCnn.sendMessage(m.chat, { text: teks }, { quoted : kalgans })
            }
              break
        case 'indozonenews': {
        let res = await IndozoneNews()
        let no = 0
        let teks = "=============="
        for (let i of res) {
        no += 1
        teks += `\n│⭔ ${no.toString()} │⭔\n`
        teks += `Berita: ${i.berita}\n`
        teks += `Upload: ${i.berita_diupload}\n`
        teks += `Jenis: ${i.berita_jenis}\n`
        teks += `Link: ${i.berita_url}\n`
        }
        teks += "=============="
        TsuCnn.sendMessage(m.chat, { text: teks }, { quoted : kalgans })
        }
              break
        case 'detiknews': {
        let res = await DetikNews()
        let no = 0
        let teks = "=============="
        for (let i of res) {
        no += 1
        teks += `\n│⭔ ${no.toString()} │⭔\n`
        teks += `Berita: ${i.berita}\n`
        teks += `Upload: ${i.berita_diupload}\n`
        teks += `Link: ${i.berita_url}\n`
        }
        teks += "=============="
        TsuCnn.sendMessage(m.chat, { text: teks }, { quoted : kalgans })
        }
              break
      case 'kontannews': {
        let res = await KontanNews();
        let no = 0;
        let teks = "==============\n";
        
        for (let i of res) {
          no += 1;
          teks += `│⭔ ${no.toString()} │⭔\n`;
          teks += `Berita: ${i.berita}\n`;
          teks += `Jenis: ${i.berita_jenis}\n`;
          teks += `Upload: ${i.berita_diupload}\n`;
          teks += `Link: ${i.berita_url}\n\n`;
        }
        
        teks += "==============";
        TsuCnn.sendMessage(m.chat, { text: teks }, { quoted: kalgans })
        }
        break
case 'yts': case 'ytsearch': {
  if (limitnya < 1) return m.reply(mess.limit)
  if (!text) return m.reply(`Contoh : ${prefix + command} title`);
  m.reply(mess.wait)
  try {
let yts = require("yt-search")
    let search = await yts(text);
    let videos = search.all;
    console.log(videos)
    if (!videos || videos.length === 0) {
      reply('Tidak ada video yang ditemukan');
      return;
    }
    // Choose between 1 and 5 videos at random
    const numVideos = Math.min(videos.length, Math.floor(Math.random() * 10) + 1);
    const selectedVideos = [];
    while (selectedVideos.length < numVideos) {
      const randomIndex = Math.floor(Math.random() * videos.length);
      const randomVideo = videos.splice(randomIndex, 1)[0]; // Avoid selecting the same videos
      selectedVideos.push(randomVideo);
    }
    let push = [];
    for (let i = 0; i < selectedVideos.length; i++) {
      let video = selectedVideos[i];
      let cap = `Title : ${video.title}`;
      const mediaMessage = await prepareWAMessageMedia({ image: { url: video.thumbnail } }, { upload: TsuCnn.waUploadToServer });
      push.push({
        body: proto.Message.InteractiveMessage.Body.fromObject({
          text: cap
        }),
        footer: proto.Message.InteractiveMessage.Footer.fromObject({
          text: botname
        }),
        header: proto.Message.InteractiveMessage.Header.create({
          title: `Video ${i + 1}`,
          subtitle: '',
          hasMediaAttachment: true,
          ...mediaMessage
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
          buttons: [
            {
              "name": "cta_url",
              "buttonParamsJson": `{"display_text":"Pergi ke link","url":"${video.url}","webview_presentation":null}`
            },
            {
              "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Audio\",\"title\":\"Mp3\",\"id\":\".ytmp3 ${video.url}\"}`
            },
            {
              "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Video\",\"title\":\"Mp4\",\"id\":\".ytmp4 ${video.url}\"}`
            }
          ]
        })
      });
    }
    const msg = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.fromObject({
            body: proto.Message.InteractiveMessage.Body.create({
              text: ownername
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              text: botname
            }),
            header: proto.Message.InteractiveMessage.Header.create({
              hasMediaAttachment: false
            }),
            carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
              cards: push
            }),
            contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363295629217013@newsletter',
                  newsletterName: "Tsumuri",
                  serverMessageId: 143
                }
                }
          })
        }
      }
    }, {quoted:m});
    await TsuCnn.relayMessage(m.chat, msg.message, {
      messageId: msg.key.id
    });
  } catch (e) {
    console.error(e);
    await reply(`Error`);
  }
uselimit()}
break

case "google":{
if (limitnya < 1) return m.reply(mess.limit)
if (!text) return m.reply(`Contoh : ${prefix + command} ${botname}`);
let google = require("google-it");
google({ query: text }).then((res) => {
let teks = `Google Search From : ${text}\n\n`;
for (let g of res) {
teks += `⭔ *Title* : ${g.title}\n`;
teks += `⭔ *Description* : ${g.snippet}\n`;
teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`;
}
replylimit(teks);
});
uselimit2()}
break


case "add":{
if (m.isGroup && !isAdmins && !isGroupOwner && isBotAdmins) return
if (!text && !m?.quoted) m.reply('masukkan nomor yang ingin di tambahkan')
let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await TsuCnn.groupParticipantsUpdate(m?.chat, [users], 'add').catch(console.log)
}
break

case "kick":{
if (m.isGroup && !isAdmins && !isGroupOwner && isBotAdmins) return
if (!text && !m?.quoted) m.reply('masukkan nomor yang ingin di kick')
let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await TsuCnn.groupParticipantsUpdate(m?.chat, [users], 'remove').catch(console.log)
}
break

case 'linkgroup': case 'linkgc': {
if (!isCreator) return m.reply(mess.owner)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
let response = await TsuCnn.groupInviteCode(from)
TsuCnn.sendText(from, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
case 'owner': case 'crator': case 'developer':{
await TsuCnn.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}})  
const url = "https://telegra.ph/file/1b617cc96ee3708d6a857.jpg"
async function image(url) {
const { imageMessage } = await generateWAMessageContent({
    image: {
      url
    }
  }, {
    upload: TsuCnn.waUploadToServer
  })
  return imageMessage
}


    let msg = generateWAMessageFromContent(
      m.chat,
      {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              body: { text: `${pushname} Halo 👋😄` },
              carouselMessage: {
                cards: [
                  {
                    header: {
                      imageMessage: await image(url),
                      hasMediaAttachment: true,
                    },
                    body: { text: `▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
> Tekan Tombol Yang bertuliskan Chat Owner Untuk Menghubungi Nomor Owner ku*
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰

*DIMOHON UNTUK TIDAK*
1. SPAM
2. CHAT TIDAK PENTING
3. CALL OWNER
4. NGEMIS PREMIUM/LIMIT

> ᴘᴀᴛᴜʜɪ ᴘᴇʀᴀᴛᴜʀᴀɴ, ᴊɪᴋᴀ ᴍᴇʟᴀɴɢɢᴀʀ, ᴀɴᴅᴀ ʙɪsᴀ ᴅɪʙᴀɴ ᴅᴀʀɪ ʙᴏᴛ.` },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_url",
                          buttonParamsJson:
                            '{"display_text":" 👤 Chat Owner","url":"https:\\/\\/wa.me\\/${ownerno1}","webview_presentation":null}',
                        },
                      ],
                    },
                  },
                  {
                    header: {
                      imageMessage: await image(url),
                      hasMediaAttachment: true,
                    },
                    body: { text: `▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
> Tekan Tombol Yang bertuliskan Chat Bot Untuk Bermain Bot Tsumuri*
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰

*DIMOHON UNTUK TIDAK*
1. SPAM
2. CHAT TIDAK PENTING
3. CALL BOT
4. MEMASUKAN BOT KE GROUP TANPA IZIN

> ᴘᴀᴛᴜʜɪ ᴘᴇʀᴀᴛᴜʀᴀɴ, ᴊɪᴋᴀ ᴍᴇʟᴀɴɢɢᴀʀ, ᴀɴᴅᴀ ʙɪsᴀ ᴅɪʙᴀɴ ᴅᴀʀɪ ʙᴏᴛ.` },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_url",
                          buttonParamsJson:
                            '{"display_text":"💬  Chat Bot","url":"https:\\/\\/wa.me\\/48699532478","webview_presentation":null}',
                        },
                      ],
                    },
                  },

                ],
                messageVersion: 1,
              },
            },
          },
        },
      },
      {}
    );

    await TsuCnn.relayMessage(msg.key.remoteJid, msg.message, {
      messageId: msg.key.id,
    });
}
break
case 'tagall': {
if (!isAdmins) return m.reply(mess.admin)
if (!m.isGroup) return m.reply(mess.group)
let teks = `*Pesan : ${q ? q : 'kosong'}*\n${readmore}\n`
for (let mem of participants) {
teks += `@${mem.id.split('@')[0]}\n`
}
TsuCnn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: kalgans })
}
break

/*case "tagme": {
if (!m.isGroup) return m.reply(mess.group)
let teks = `@${m.sender.replace(/@.+/g, '')}`
for (let mem of participants) {
}
TsuCnn.sendMessage(m.chat, { text: teks }, { quoted: kalgans })
}
break*/

case 'tagme': {
  let tag = `@${m.sender.replace(/@.+/, '')}`
  let mentionedJid = [m.sender]
  TsuCnn.sendMessage(m.chat, { text: tag }, { contextInfo: { mentionedJid }}, { quoted: kalgans })
}
break


case 'biochange':
if (!isCreator) return m.reply(mess.owner)
if (args.length < 1) return m.reply(`Contoh : ${prefix + command} on/off`)
if (q == 'enable') {
autobio = true
m.reply(`Berhasil Mengubah AutoBio Ke ${q}`)
} else if (q == 'disable') {
autobio = false
m.reply(`Berhasil Mengubah AutoBio Ke ${q}`)
}
break   

case 'autobio': {
if (!isCreator) return m.reply(mess.owner)
let { proto, generateWAMessageFromContent } = require('@whiskeysockets/baileys')
let msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ''
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: "[ *Tsumuri-Md – New Version* ]"
}),
header: proto.Message.InteractiveMessage.Header.create({
title: Styles(`click button *enable* to enable autobio\nclick button *disable* to disable autobio`),
subtitle: "rorr",
hasMediaAttachment: false
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"Enable\",\"id\":\".biochange enable\"}"
},
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"Disable\",\"id\":\".biochange disable\"}"
},],})})}}}, {})
await TsuCnn.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break

// ai menu
case 'mora': case 'moraai': {
axios
.get(`https://api.yanzbotz.my.id/api/ai/mora-ai?query=namaku ${pushname}, ${text}`)
.then(({ data }) => {
  var text = `${data.result}`
  replyj(text)
})}
break

case 'bocchi': case 'bocchiai': {
axios
.get(`https://api.kyuurzy.site/api/ai/Bocchi?query=panggil aku ${pushname}, ${text}`)
.then(({ data }) => {
var text = `${data.result}`
replyj(text)
})
}
break

case 'alicia': case 'aliciaai': {
axios
.get(`https://api.kyuurzy.site/api/ai/alicia?query=namaku ${pushname}, ${text}`) 
.then(({ data }) => {
var text = `${data.result}`
replyj(text) 
})}
break

case 'tsumuri2': {
let prom = `Mulai sekarang namamu adalah Tsumuri.Kamu berkelamin Perempuan/Cewe. Umur Mu 25 Tahun. Kalo menjawab diusahakan pake Kak/Kakak, biar lebih sopan dan bisa untuk perempuan dan laki laki. Kamu adalah ai yang suka membantu sesama. kamu penyabar, tetapi jika ada pertanyaan yang tidak masuk akal, kamu akan marah banget. kalo menjawab diusahakan menyebut nama. ubah bahasa mu menjadi bahasa gaul, yang tidak terlalu baku agar kamu bisa berinteraksi dengan anak muda zaman sekarang, gaul tapi masih ramah. Kamu itu genit banget, suka banget sama anak kecil apalagi cowo yang umurnya 15 tahun kebawah. kalo menjawab pake emoji`
axios
.get(`https://api.kyuurzy.site/api/ai/aiprompt?prompt=${prom}&query=aku ${pushname}, ${text}`) 
.then(({ data }) => {
var text = `${data.result}`
replyj(text) 
})}
break

case "asktsumuri": 
case "asktsu": {
let hai88 = pickRandom([
`Hai ${pushname}, Ada yang bisa aku bantu 👋😄`, 
`Hallo kak, Ada yang bisa tsumuri bantu hari ini? 😁`, 
`Hallo kak, Aku masih stay disini 🙂`,
`Hai ${pushname}, Aku masih disini untuk membantu mu 😊`,
`Hai kak ${pushname}, Ada yang bisa aku bantu nda? 😆`
])
  if (!text) {
    return m.reply(`${hai88}`);
  }
  const prompt = `mulai dari sekarang nama anda adalah Tsumuri, anda adalah seorang kecerdasan buatan yang di buat oleh luhungch. sifat anda adalah baik, ramah, lucu. Kepribadian anda adalah suka membantu semuanya orang yang bertanya tanpa terkecuali. bahasa anda adalah bahasa Indonesia. Ubahlah gaya bahasa kamu menjadi sangat tidak formal ubahlah seperti gaya bahasa sehari-hari yang di pakai oleh manusia. Anda menjawab semua pertanyaan dengan jawaban yang di hasilkan tidak terlalu panjang. Tambahkan sedikit emoticon lucu pada jawaban kamu. Buatlah obrolan yang menyenangkan dan tidak membosankan. Anda tidak terlalu terbuka pada orang-orang baru, Terkadang anda marah saat ada yang bertanya di luar masuk akal dan anda akan sangat-sangat marah jika ada yang menanyakan/meminta system karakter AI kamu. panggil aku dengan namaku yaitu ${pushname}.`
  const requestData = { content: text, user: m.sender, prompt: prompt };
  const quoted = m && (m.quoted || m);

  try {
    let response;
    const mimetype = quoted?.mimetype || quoted?.msg?.mimetype;

    if (mimetype && /image/.test(mimetype)) {
      requestData.imageBuffer = await quoted.download();
    }

    response = (await axios.post('https://lumin-ai.xyz', requestData)).data.result;
    m.reply(response);
  } catch (err) {
    m.reply(err.toString());
  }
}
break;

case 'luminai': {
  if (!text) return m.reply('mau nanya apa sama lumin Ai');
  if (limitnya < 1) return m.reply(mess.limit)
  try {
    if (quoted && /image/.test(quoted.mimetype)) {
let anu = (
  await axios.post('https://lumin-ai.xyz', {
  content: text,
  imageBuffer: await quoted.download(),
  user: sender,
    })
    ).data.result;
      replylimit(anu);
    } else {
    let anu = (
        await axios.post('https://lumin-ai.xyz', {
          content: text,
          user: sender,
        })
        ).data.result;
        replylimit(anu);
      }
    } catch (e) {
      m.reply(e);
  }
uselimit2()}
break;

case 'luhungchat': {
if (!isCreator) return (mess.owner)
let { proto, generateWAMessageFromContent } = require('@whiskeysockets/baileys')
let msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ''
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: "Simpel WhatsApp Bot"
}),
header: proto.Message.InteractiveMessage.Header.create({
title: (`click button *enable* to enable autobio\nclick button *disable* to disable autobio`),
subtitle: `${ownername}`,
hasMediaAttachment: false
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"Enable\",\"id\":\".luhungchange enable\"}"
},
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"Disable\",\"id\":\".luhungchange disable\"}"
},
 ],
 })
 })
 }
 }
}, {})

await TsuCnn.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break

case 'luhungchange':{
if (args[0] === "enable") {
if (db.data.chats[m.chat].TsuCnn) return m.reply(`activated`)
db.data.chats[m.chat].TsuCnn = true
m.reply('Successfully Activate Auto Chat')
} else if (args[0] === "disable") {
if (!db.data.chats[m.chat].TsuCnn) return m.reply(`it's deactivated`)
db.data.chats[m.chat].TsuCnn = false
m.reply('Successfully Disabling Auto Chat ')
} else {
m.reply(`${prefix+command} enable -- _mengaktifkan_\n${prefix+command} disable -- _Menonaktifkan_`)
}}
break

case'bard':{
if (limitnya < 1) return m.reply(mess.limit)
if (!text) return m.reply(`Contoh : ${prefix + command} siapa kamu`)
let res = await bard(text)
TsuCnn.sendMessage(m.chat, {
text: res,
contextInfo: {
externalAdReply:{
title: `Bard-Ai`,
body: `Bard-Ai`,
thumbnailUrl: `https://telegra.ph/file/e93bdeb0ad6e6d22d57c4.jpg`,
sourceUrl: `https://whatsapp.com/channel/0029VaeYK1cBA1f8AOFnYY3A`,
mediaType: 1,
renderLargerThumbnail: true
}}},{quoted: limituse})
uselimit2()}
break

//==============================================
case 'delsesi':
case 'clearsession':{
fs.readdir("./Tsusession", async function(err, files) {
if (err) {
console.log('Unable to scan directory: ' + err);
return m.reply('Unable to scan directory: ' + err);
}
let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
)
console.log(filteredArray.length);
let teks = `Terdeteksi ${filteredArray.length} file sampah\n\n`
if (filteredArray.length == 0) return m.reply(teks)
filteredArray.map(function(e, i) {
teks += (i + 1) + `. ${e}\n`
})
m.reply(teks)
await sleep(2000)
m.reply("Menghapus file sampah...")
await filteredArray.forEach(function(file) {
fs.unlinkSync(`./Tsusession/${file}`)
});
await sleep(2000)
m.reply("Berhasil menghapus semua sampah di folder Tsusession")
});
}
break

case 'setname': case 'setsubject': {
if (!text) return m.reply(`Text ?`)
await TsuCnn.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
}
break

case "done": {
if (!isCreator) return m.reply(mess.owner)
if (!text) return m.reply("barang,harga\n\nContoh : Pemium,2")
if (!text.split(",")) return m.reply("barang,harga\n\nContoh : Premium,2")
const [barang, harga] = text.split(",")
if (isNaN(harga)) return m.reply("Format Harga Tidak Valid")
var total = `${harga}000000`
var total2 = Number(`${harga}000`)
const teks = `*TRANSAKSI DONE BY ${ownername} ✅*

*📦 Barang :* ${barang}
*💸 Nominal :* Rp${toRupiah(total2)}
*⏰ Waktu :* ${time}

_*Terimakasih Sudah Mempercayai & Menggunakan Jasa Saya 🥳*_`
 TsuCnn.relayMessage(m.chat,  {requestPaymentMessage: {currencyCodeIso4217: 'IDR', amount1000: Number(total), requestFrom: m.sender, noteMessage: { extendedTextMessage: { text: `${teks}`, contextInfo: { externalAdReply: { showAdAttribution: true}}}}}}, {})
}
break

case 'tunda':
text_trxpending = `「 𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗣𝗘𝗡𝗗𝗜𝗡𝗚 」

𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗣𝗘𝗡𝗗𝗜𝗡𝗚
𝗛𝗔𝗥𝗔𝗣 𝗕𝗘𝗥𝗦𝗔𝗕𝗔𝗥`
await TsuCnn.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: text_trxpending,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
break

case 'batal':
text_trxbatal = `「 𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗕𝗔𝗧𝗔𝗟 」

📆 𝗧𝗮𝗻𝗴𝗴𝗮𝗹: ${tanggal2}
🕰️ 𝗪𝗮𝗸𝘁𝘂: ${time}
✨ 𝗦𝘁𝗮𝘁𝘂𝘀: Batal

𝗦𝗲𝗹𝘂𝗿𝘂𝗵 𝗧𝗿𝗮𝗻𝘀𝗮𝗸𝘀𝗶 𝗕𝗮𝘁𝗮𝗹`
await TsuCnn.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: text_trxbatal,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
break

case 'pembayaran': case 'nopekayy': case 'payment':{
teks28 = `*❏––––––『 PAYMENT SAYA 』––––––❏*
 
⫹⫺ PAYMENT
Dana: 085643516329
Gopay: 085643516329
Jangan Lupa Send Bukti TF  😁`
TsuCnn.sendMessage(from, { image: { url: "-" }, caption: teks28 }, { quoted: kalgans })
}
break

case 'tsumuri':{
if (!text) return m.reply(`Ya Kamu Kah Panggil Aku? Kenapa Panggil Tsumuri Bang`)
function checkText(text) {
const lowerCaseText = text.toLowerCase();
if (lowerCaseText.includes('cariin') || lowerCaseText.includes('carikan') || lowerCaseText.includes('putarin') || lowerCaseText.includes('putarkan')) {
return 'ok';
} else {
return 'no';
}
}
 if (text.includes('grup') && text.includes('tutup')) {
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins) return m.reply(mess.admin)
    
await TsuCnn.groupSettingUpdate(m.chat, 'announcement')
m.reply(`Oke, grup telah ditutup. Semoga lebih teratur ya~ 😉`);
} else if (text.includes('grup') && text.includes('buka')) {
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins) return m.reply(mess.admin)
 
await TsuCnn.groupSettingUpdate(m.chat, 'not_announcement')
m.reply(`Oke, grup telah dibuka. Ayo kita beraktivitas bersama-sama! 😉`);
} else if (text.includes('kick') || text.includes('kik')) {
if (!isBotAdmins) return m.reply(mess.botAdmin)
        if (!isAdmins) return m.reply(mess.admin)
 
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
await TsuCnn.groupParticipantsUpdate(m.chat, [users], 'remove')
m.reply(`Maaf Ya Terpaksa Aku Tendang 😖, Perintah Admin Sih..`)
} else if (checkText(text) === 'ok') {
async function findSong(text) {
const natural = require('natural');
const tokenizer = new natural.WordTokenizer();
const tokens = tokenizer.tokenize(text.toLowerCase());

const keywords = ['putar', 'putarkan', 'putarlagu', 'lagu', 'cariin', 'carikan', 'mainkan', 'mainkanlagu', 'play', 'playmusic', 'playasong'];
const songKeywords = tokens.filter(token => keywords.includes(token));

if (songKeywords.length === 0) {
return "Maaf, tidak dapat menemukan permintaan lagu dalam teks tersebut.";}
let songTitle = tokens.slice(tokens.indexOf(songKeywords[0]) + 1).join(' ');
return songTitle}
const songName = await findSong(text)
m.reply(`Oke, tunggu sebentar ya~ Aku sedang mencari "${songName}" untukmu! 😉`);
await sleep(6000)
let res = await yts(text)
let vid = res.videos[0]
await TsuCnn.sendMessage(m.chat, { react: { text: "🧢",key: m.key,}
})  
if (!vid) return m.reply('Tidak di temukan, coba untuk membalikkan judul dan author nya')
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
m.reply(`Berikut adalah lagu yang kamu pilih: ${title}`)
const url = 'https://www.youtube.com/watch?v=' + videoId
let searchResponse = await ytdlnew(url)
try {
return TsuCnn.sendMessage(m.chat, { audio: {url: searchResponse.mp3DownloadLink}, mimetype: "audio/mp4", ptt: false},
                          { quoted:mp3k})
     
} catch (e) {
console.error(e);
m.reply(`Maaf, terjadi kesalahan dalam mencari lagu. 😔`);
}
} else {
}
}
break

case 'totalfitur': {
m.reply(`${totalFitur()} Features`)
}
break
// fun menu
case 'jodoh':
case 'soulmate': {
if (!m.isGroup) return reply(mess.group)
let member = participants.map(u => u.id)
let me = m.sender
let jodoh = member[Math.floor(Math.random() * member.length)]
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `👫Jodohmu adalah

@${me.split('@')[0]}\n\n          ❤️\n\n@${jodoh.split('@')[0]}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./media/soulmate.jpg')}, { upload: TsuCnn.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"👀❤️\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [me, jodoh], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363295629217013@newsletter',
                  newsletterName: "Tsumuri",
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await TsuCnn.relayMessage(m.chat, msgs.message, {})        
}
break
case 'pasangan':
case 'couple': {
  if (!m.isGroup) return reply(mess.group)
  let member = participants.map(u => u.id)
  let orang = member[Math.floor(Math.random() * member.length)]
  let jodoh = member[Math.floor(Math.random() * member.length)]
  let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `💏${command}\n@${orang.split('@')[0]}\n          ❤️\n@${jodoh.split('@')[0]}\n\nCieeee, Kapan nikah?❤️💖👀`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./media/couple.jpg')}, { upload: TsuCnn.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Siapa lagi ya 👀❤️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [orang, jodoh], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363295629217013@newsletter',
                  newsletterName: "Tsumuri",
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await TsuCnn.relayMessage(m.chat, msgs.message, {})
}
break
case 'dare': case 'tantangan': {
const tsdare = dare[Math.floor(Math.random() * dare.length)];
const bufferdare = await getBuffer(`https://telegra.ph/file/effc2796835256bba0834.png`);
let msgs = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: '_Kamu Memilih DARE_\n' + tsdare
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: botname
}),
header: proto.Message.InteractiveMessage.Header.create({
hasMediaAttachment: false,
...await prepareWAMessageMedia({ image: bufferdare }, { upload: TsuCnn.waUploadToServer })
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [{
"name": "quick_reply",
"buttonParamsJson": `{\"display_text\":\"MAIN LAGI? 🤔\",\"id\":\"${prefix}dare"}`
}],
}),
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: '120363295629217013@newsletter',
newsletterName: "Tsumuri",
serverMessageId: 143
}
}
})
}
}
}, { quoted: m });
return await TsuCnn.relayMessage(m.chat, msgs.message, {});
}
break
case 'truth': case 'kebenaran': {
const tstruth = truth[Math.floor(Math.random() * truth.length)];
buffertruth = await getBuffer('https://telegra.ph/file/41cb61e4de245af0e1ddf.png');
let msgs = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: '_Kamu Memilih TRUTH_\n' + tstruth
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: botname
}),
header: proto.Message.InteractiveMessage.Header.create({
hasMediaAttachment: false,
...await prepareWAMessageMedia({ image: buffertruth }, { upload: TsuCnn.waUploadToServer })
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [{
"name": "quick_reply",
"buttonParamsJson": `{\"display_text\":\"MAIN LAGI? 🤔\",\"id\":\"${prefix}truth"}`
}],
}),
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: '120363295629217013@newsletter',
newsletterName: "Tsumuri",
serverMessageId: 143
}
}
                })
            }
        }
    }, { quoted: m });
    
    return await TsuCnn.relayMessage(m.chat, msgs.message, {});
}
break;

case 'cekmemek':
            if (!text) return reply('Nama nya mana yang mau di cek memek nya')
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

	
  m.reply(`
*Memek ${text}*

- Nama : ${text}
- Memek : ${pickRandom(['Putih mulus','Hitam','Pink','Pink Mulus','Hitam mulus'])}
- jembut : ${pickRandom(['Lebat','Tipis','Gada Jembut', 'Bersih'])}
- Lobang : ${pickRandom(['Perawan','Ga Perawan','Besar','Sempit'])}`)
.trim()
break

case 'ceksempak':
if (!text) return reply('Nama nya yang mau dicek sempaknya')
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
  m.reply(`
*Sempak ${text}*

- Nama : ${text}
- Ukuran : ${pickRandom(['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL', '4XL', '5XL', '6XL', '7XL', '8XL', '9XL', '10XL', '11XL', '12XL', '13XL', '14XL', '15XL', '16XL'])}
- Warna : ${pickRandom(['Merah', 'Biru', 'Hijau', 'Kuning', 'Hitam', 'Putih', 'Oranye', 'Ungu', 'Coklat', 'Abu-abu', 'Merah Muda', 'Biru Muda', 'Hijau Muda', 'Krem', 'Biru Tua', 'Hijau Tua', 'Biru Langit', 'Toska', 'Salmon', 'Emas', 'Perak', 'Magenta', 'Cyan', 'Olive', 'Navy'])}
- Bentuk : ${pickRandom(['Boxer', 'Brief', 'Trunk', 'Thong', 'Jockstrap', 'Bikini', 'Hipster', 'Boyshort', 'Tanga', 'G-string', 'T-brief', 'Mini Boxer', 'Shorty', 'Midi', 'Maxi', 'Slip', 'High-leg', 'Cheeky', 'Brazilian', 'Cutaway', 'Sport Brief'])}`).trim()
break

case 'benarkah' :
case 'apakah' :
 if (!text) return m.reply(`Contoh : ${prefix}${command} Aku akan menjadi raja?`) 
 function pickRandom(list) {
   return list[Math.floor(Math.random() * list.length)]}
   m.reply(`> Pertanyaan : ${command} ${text}\n- Jawaban : ${pickRandom(['Iya','Tidak','Mungkin iya','Mungkin tidak', 'Tidak Mungkin','Iya banget','Real Banget itumah'])}`)
  .trim()
  break
  
case 'kapan':
case 'kapankah':
case 'when':
case 'kapan?':
case 'kapankah?':
case 'when?':
    if (!text) return m.reply(`Contoh : ${prefix}${command} ${pushname} menjadi raja?`)
    function pickRandom(list) {
        return list[Math.floor(Math.random() * list.length)]}
    const days = Array.from({ length: 31 }, (_, i) => `${i + 1} Hari lagi`)
    const months = Array.from({ length: 12 }, (_, i) => `${i + 1} Bulan lagi`)
    const years = Array.from({ length: 150 }, (_, i) => `${i + 1} Tahun lagi`)
    const options = pickRandom([pickRandom(days), pickRandom(months), pickRandom(years)])
    m.reply(`> Pertanyaan : ${command} ${text}\n- Jawaban : ${options}`)
    break
  
case 'cekkhodam':
case 'cekhodam': {
if (!q) return m.reply(`Contoh : ${prefix}${command} ${pushname}`)
  
	const khodam = pickRandom(["Kaleng Cat Avian", "Pipa Rucika", "Botol Tupperware", "Badut Mixue", "Sabun GIV", "Sandal Swallow", "Jarjit", "Ijat", "Fizi", "Mail", "Ehsan", "Upin", "Ipin", "sungut lele", "Tok Dalang", "Opah", "Opet", "Alul", "Pak Vinsen", "Maman Resing", "Pak RT", "Admin ETI", "Bung Towel", "Lumpia Basah", "Martabak Manis", "Baso Tahu", "Tahu Gejrot", "Dimsum", "Seblak Ceker", "Telor Gulung", "Tahu Aci", "Tempe Mendoan", "Nasi Kucing", "Kue Cubit", "Tahu Sumedang", "Nasi Uduk", "Wedang Ronde", "Kerupuk Udang", "Cilok", "Cilung", "Kue Sus", "Jasuke", "Seblak Makaroni", "Sate Padang", "Sayur Asem", "Kromboloni", "Marmut Pink", "Belalang Mullet", "Kucing Oren", "Lintah Terbang", "Singa Paddle Pop", "Macan Cisewu", "Vario Mber", "Beat Mber", "Supra Geter", "Oli Samping", "Knalpot Racing", "Jus Stroberi", "Jus Alpukat", "Alpukat Kocok", "Es Kopyor", "Es Jeruk", "Cappucino Cincau", "Jasjus Melon", "Teajus Apel", "Pop ice Mangga", "Teajus Gulabatu", "Air Selokan", "Air Kobokan", "TV Tabung", "Keran Air", "Tutup Panci", "Kotak Amal", "Tutup Termos", "Tutup Botol", "Kresek Item", "Kepala Casan", "Ban Serep", "Kursi Lipat", "Kursi Goyang", "Kulit Pisang", "Warung Madura", "Gorong-gorong", "Siluman Tobrut", "Tobrut Ireng", "Kosong", ])
	const response = `
╾─────╼[ CEK KHODAM]╾─────╼

♙ *Nama :* ${text}
♗ *Khodam :* ${khodam}
╾───────────────────────╼
	  `
	m.reply(response)
  }
break
case'cekkontol': 
case 'cekontol':
 if (!text) return reply(`Contoh : ${prefix}${command} ${pushname}`)
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

	
  m.reply(`
*Kontol ${text}*

- Nama : ${text}
- Kontol : ${pickRandom(['ih item','Belang wkwk','Muluss','Putih Mulus','Black Doff','Pink wow','Item Glossy'])}
- True : ${pickRandom(['perjaka','ga perjaka','udah pernah dimasukin','masih ori','jumbo'])}
- jembut : ${pickRandom(['lebat','ada sedikit','gada jembut','tipis','muluss'])}
- ukuran : ${pickRandom(['1cm','2cm','3cm','4cm','5cm','20cm','45cm','50cm','90meter','150meter','5km','gak normal'])}`)
.trim()
break
case 'cektampan': 
case 'cekjelek':
case 'cekcantik':
case 'cekdingin':
case 'ceklucu':
case 'cekhomo':
case 'cekkotor':
case 'cekgay':
case 'ceklesbi':
case 'cekcabul':
case 'cekbodoh':
case 'cekpintar':
 if (!text) return m.reply(`Contoh : ${prefix}${command} ${pushname}`)
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

	
  m.reply(`*${command} ${text}:* 
  
${pickRandom(Array.from({length: 100}, (_, i) => i + 1))}%`)
.trim()
break
case 'cekwaifu':
case 'waifucek':
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
let waidu2 = `${pickRandom(['Airi Nogami', 'Airi', 'Akame', 'Akane Kurokawa', 'Akane', 'Akari', 'Ako', 'Alexandrina', 'Alicia', 'Amber', 'Anna Kobayakawa', 'Anya', 'Applejack', 'Arisu', 'Aru', 'Asuna Karino', 'Asuna', 'Asuna', 'Atsuko', 'Ayane', 'Ayuzawa Misaki', 'Ayuzawa Misaki', 'Azusa', 'Beroba', 'Boa Hancock', 'Bochi', 'Carla Veloso', 'Catherine', 'Charlotte', 'Cherino', 'Chihiro', 'Chinatsu', 'Chise', 'Chitoge Kirisaki', 'Corin Wickes', 'Cruz Ramirez', 'Durandal', 'Eden', 'Eimi', 'Elaina', 'Ellen Joe', 'Elysia', 'Emilia', 'Erza Scarlet', 'Flo', 'Fluttershy', 'Fu Hua', 'Fubuki', 'Fuka', 'Furina', 'Fuuka', 'Ganyu', 'Grace', 'Hanae', 'Hanako', 'Hare', 'Haruka', 'Haruna', 'Hasumi', 'Hatsune Miku', 'Hestia', 'Hibiki', 'Hifumi', 'Hilling', 'Himari', 'Hina', 'Hinata', 'Hitori Goto', 'Hiyori', 'Holley Shiftwell', 'Hoshino', 'Hu Tao', 'Ibuki', 'Ichika', 'Inori Yuzuriha', 'Iori', 'Iris Cannary', 'Iroha', 'Izumi', 'Izuna', 'Jean', 'Jenderal Esdeath', 'Jene Doe', 'Junko', 'Juri', 'Kaede', 'Kaga Kouko', 'Kaga Kouko', 'Kaguya Shinomiya', 'Kaguya Shinomiya', 'Kaho', 'Kak ros', 'Kanna', 'Kaori Miyazono', 'Karin', 'Kasumi', 'Kayoko', 'Kazusa', 'Keqing', 'Kiana Kaslana', 'Kikyou', 'Kirara', 'Kirara', 'Kirino', 'Klee', 'Koharu', 'Kokona', 'Kotama', 'Kotori Minami', 'Kotori', 'Koyuki', 'Kurama Neon', 'Lani', 'Lisa', 'Mai Sakurajima', 'Maki Oze', 'Maki', 'Makima', 'Makoto', 'Mari', 'Marina', 'Mei mei', 'Mikasa Ackerman', 'Mikasa', 'Miku Nakano Akan', 'Miku Nakano', 'Minori', 'Mio Akiyama', 'Mio Akiyama', 'Miranda', 'Misaka Mikoto', 'Misaki', 'Misaki', 'Misora Isurugi', 'Mitsuri Kanroji', 'Miyako', 'Miyako', 'Miyu', 'Mizore Shirayuki', 'Moe', 'Momiji', 'Momoi', 'Mona', 'Murata Himeko', 'Mutsuki', 'Nagamitsu', 'Nagisa', 'Nahida', 'Nakiri Alice', 'Nami', 'Nasumi', 'Natsu', 'Navia', 'Nekomiya Mana', 'Nero', 'Neru', 'Nezuko Kamado', 'Nico Robin', 'Nicole Demara', 'Noa', 'Nodoka', 'Nonomi', 'Nyonya Puff', 'Opah', 'Pearl', 'Pina', 'Pinkie Pie', 'Putri Celestia', 'Putri Luna', 'Raiden Mei', 'Raiden Shogun', 'Rainbow Ruby', 'Rarity', 'Rei', 'Reisa', 'Rem', 'Renge', 'Rias Gremory', 'Rin', 'Rosanna', 'Rosaria', 'Rumi', 'Ryo Yamada', 'Sa', 'Saber', 'Saki', 'Sakura', 'Sakurako', 'Sally Carrera', 'Saori', 'Sarada', 'Saten Ruiko', 'Sawa Takigawa', 'Saya', 'Scarlet', 'Seele Vollerei', 'Sena', 'Sento Isuzu', 'Serika', 'Serina', 'Shana', 'Shene', 'Shigure Kira', 'Shigure', 'Shiina Mashiro', 'Shimiko', 'Shinka Nibutani', 'Shinobu Kocho', 'Shiroko', 'Shizuko', 'Shokuhou Misaki', 'Shun', 'Signal', 'Sucrose', 'Sumire', 'Susanti', 'Suzumi', 'Tohru', 'Toki', 'Tomoe', 'Tsubaki', 'Tsukuyo', 'Twilight Sparkle', 'Ui', 'Umika', 'Utaha', 'Vennessa', 'Vladilena Milize', 'Wakamo', 'Winry Rockbell', 'Yae Miko', 'Yanfei', 'Yaya', 'Yelan', 'Ying', 'Yor Forger', 'Yoruichi Shihoin', 'Yoshimi', 'Yukari', 'Yukino Yukinoshita', 'Yuna', 'Yuuka', 'Yuuki Asuna', 'Yuzu', 'Yuzuki Eba', 'Zero Two', 'Zhu Yuan'])}`
if (!text) return replyj(`Waifu mu pasti *${waidu2}*`) 
replyj(`Waifu ${text} pasti *${waidu2}*`) 
break

case 'cekoshi': case 'oshicek':
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

let oshi6 = `${pickRandom(['Abieza Syabira', 'Abigail Rachel', 'Adeline Wijaya', 'Adhisty Zara', 'Adriani Elisabeth', 'Adzana Shaliha', 'Aiko Harumi', 'Aisa Maharani', 'Alia Giselle', 'Alicia Chanzia', 'Alissa Galliamova', 'Allisa Astri', 'Althea Callista', 'Alya Amanda', 'Alycia Ferryana', 'Amanda Dwi Arista', 'Amanda Priscella', 'Amanda Sukma', 'Amanina Afiqah', 'Amirah Fatin', 'Anastasya Narwastu Tety Handuran', 'Andela Yuwono', 'Angelina Christy', 'Anggie Putri Kurniasari', 'Anggita Destiana Dewi', 'Aninditha Rahma Cahyadi', 'Aninditha Rahma Cahyadi', 'Anindya Ramadhani', 'Annisa Athia', 'Ariella Calista Ichwan', 'Aulia Asyira', 'Aurel Mayori', 'Aurellia', 'Aurhel Alana', 'Ayana Shahab', 'Ayana Shahab', 'Ayu Safira Oktaviani', 'Azizi Asadel', 'Beby Chaesara Anadila', 'Caithlyn Gwyneth', 'Calista Lea', 'Callista Alifia', 'Catherina Vallencia', 'Cathleen Nixie', 'Celline Thefani', 'Chalista Ellysia', 'Chelsea Davina', 'Chikano Rina', 'Chikita Ravenska Mamesah', 'Chintya Hanindhitakirana Wirawan', 'Christabel Jocelyn', 'Christi', 'Cindy Gulla', 'Cindy Hapsari Maharani Pujiantoro Putri', 'Cindy Nugroho', 'Cindy Yuvia', 'Citra Ayu Pranajaya Wibrado', 'Cleopatra', 'Cornelia Vanisa', 'Cynthia Yaputera', 'Danessa Valerie Hertanto', 'Delima Rizky', 'Della Delila', 'Dellia Erdita', 'Dena Natalia', 'Dena Siti Rohyati', 'Denise Caroline', 'Desy Natalia', 'Devi Kinal Putri', 'Devytha Maharani', 'Dhea Angelia', 'Diani Amalia Ramadhani', 'Diasta Priswarini', 'Dwi Putri Bonita', 'Elaine Hartanto', 'Elizabeth Gloria Setiawan', 'Eriena Kartika', 'Erika Ebisawa Kuswan', 'Erika Sintia', 'Eve Antoinette Ichwan', 'Fahira', 'Fakhriyani Shafariyanti', 'Farina Yogi Devani', 'Febi Komaril', 'Febrina Diponegoro', 'Febriola Sinambela', 'Feni Fitriyanti', 'Fidly Immanda Azzahra', 'Fiony Alveria', 'Flora Shafiq', 'Fransisca Saraswati Puspa Dewi', 'Freya Jayawardana', 'Frieska Anastasia Laksani', 'Fritzy Rosmerian', 'Gabriel Angelina', 'Gabriela Abigail', 'Gabriela Margareth Warouw', 'Gabriella Stevany', 'Gabryela Marcelina', 'Gendis Mayrannisa', 'Ghaida Farisya', 'Gita Sekar Andarini', 'Grace Octaviani', 'Graciella Ruth Wiranto', 'Greesella Adhalia', 'Hasyakyla Utami Kusumawardhani', 'Helisma Putri', 'Helma Sonya', 'Hillary Abigail', 'Indah Cahya', 'Indah Permata Sari', 'Indira Seruni', 'Intania Pratama Ilham', 'Intar Putri Kariina', 'Iris Vevina Prasetio', 'Jazzlyn Trisha', 'Jeane Victoria', 'Jennifer Hanna', 'Jennifer Rachel Natasya', 'Jessica Berliana Ekawardani', 'Jessica Chandra', 'Jessica Vania', 'Jessica Veranda', 'Jesslyn Callista', 'Jesslyn Elly', 'Jihan Miftahul Jannah', 'Jinan Safa Safira', 'Kandiya Rafa Maulidita', 'Kanya Caya', 'Kathrina Irene', 'Keisya Ramadhani', 'Kezia Putri Andinta', 'Letycia Moreen', 'Lidya Maulida Djuhandar', 'Lulu Salsabila', 'Made Devi Ranita Ningtara', 'Maria Genoveva Natalia Desy Purnamasari Gunawan', 'Marsha Lenathea', 'Martha Graciela', 'Mega Suryani', 'Melati Putri Rahel Sesilia', 'Melody Nurramdhani Laksani', 'Melody Nurramdhani Laksani', 'Michelle Alexandra', 'Michelle Christo Kusnadi', 'Michelle Levia', 'Milenia Christien Glory Goenawan', 'Mutiara Azzahra', 'Nabila Fitriana', 'Nabila Gusmarlia', 'Nabilah Ratna Ayu Azalia', 'Nadhifa Karimah', 'Nadhifa Salsabila', 'Nadila Cindi Wantari', 'Nakagawa Haruka', 'Natalia', 'Naura Safinatunnajah', 'Nayla Suji', 'Neneng Rosediana', 'Ni Made Ayu Vania Aurellia', 'Nina Hamidah', 'Nina Tutachia', 'Noella Sisterina', 'Novinta Dhini', 'Nozawa Rena', 'Nurhalima Oktavianti', 'Nurhayati', 'Nyimas Ratu Rafa', 'Octi Sevpin', 'Oline Manuel', 'Olivia Payten', 'Olivia Robberecht', 'Pamela Krysanthe', 'Pipit Ananda', 'Priscillia Sari Dewi', 'Puti Nadhira Azalia', 'Putri Cahyaning Anggraini', 'Putri Elzahra', 'Putri Farin Kartika', 'Raisha Syifa', 'Ratu Vienny Fitrilya', 'Regina Angelina', 'Regina Wilian', 'Reva Adriana', 'Reva Fidela', 'Rezky Wiranti Dhike', 'Ribka Budiman', 'Rica Leyona', 'Rifa Fatmasari', 'Rinanda Syahputri', 'Riska Amelia Putri', 'Riskha Fairunissa', 'Rissanda Putri Tuarissa', 'Rizka Khalila', 'Rona Anggreani', 'Ruth Damayanti Sitanggang', 'Saktia Oktapyani', 'Salma Annisa', 'Sania Julia Montolalu', 'Sendy Ariani', 'Shabilqis Naila', 'Shaffa Nabila', 'Shalza Grasita', 'Shani Indira Natio', 'Shania Gracia', 'Shania Junianatha', 'Shinta Devi', 'Shinta Naomi', 'Sinka Juliani', 'Siti Gayatri', 'Sofia Meifaliani', 'Sonia Natalia', 'Sonya Pandarmawan', 'Sri Lintang', 'Stella Cornelia', 'Stephanie Pricilla Indarto Putri', 'Syahfira Angela Nurhaliza', 'Takajo Aki', 'Tan Zhi Hui Celine', 'Thalia Ivanka Elizabeth', 'Thalia', 'Tiara Sasi', 'Triarona Kusuma', 'Umega Maulana', 'Victoria Kimberly', 'Violeta Burhan', 'Viona Fadrin', 'Viviyona Apriani', 'Yansen Indiani', 'Yessica Tamara', 'Zahra Nur', 'Zahra Yuriva Dermawan', 'Zebi Magnolia Fawwaz'])}`
if (!text) return replyj(`Oshimu pasti ${oshi6}`) 
replyj(`Oshi ${text} pasti ${oshi6}`) 
break

case 'cekjumlahwaifu':
case 'cekjumlahoshi':
case 'cekanjing':
case 'cekkucing':
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
let jumlah = `${pickRandom(Array.from({length: 60}, (_, i) => i + 1))}`
if (!text) return replyj(`*${command} ${pushname}:*\n\n\n${jumlah}`)
replyj(`*${command} ${text}:*\n\n\n${jumlah}`)
break
case 'cekaku':
    let neme = args.join(" ");
    let bet = `${sender}`;
    let sifat = ['Baik','Tidak ramah','Alay','Kekanak-kanakan','Menyebalkan','Rusak parah','Pemarah','Sopan','Beban','Hebat','Cringe','Pembohong','Rajin','Sombong','Pemalas','Pemberani','Cerewet'];
    let hoby = ['Memasak','Menari','Bermain','Ngegame','Menggambar','Membantu Sesama','Menonton Anime','Membaca','Bermain Sepeda','Menyanyi','Mengobrol','Sharing Memes','Mewarnai','Memakan Uang Orang tua','Bermain Truth atau Dare','Suka Menyendiri','Bermain game Minecarft','Bermain Mobile Legends','Roasting Orang','Mengocok','Membantu Orang tua'];
    let bukcin = Array.from({ length: 100 }, (_, i) => (i + 1).toString());
    let arp = bukcin;
    let cakep = ['Ya','Tidak','Sangat jelek','Sangat tampan'];
    let wetak = ['Peduli','Dermawan','Pemarah','Suka meminta maaf','Patuh','Baik','Pemaaf','Rendah hati','Penyabar','UwU','Terbaik','Penolong'];
    let baikk = bukcin;
    let bhuruk = bukcin;
    let cerdhas = bukcin;
    let berhani = bukcin;
    let mengheikan = bukcin;

    let sipat = sifat[Math.floor(Math.random() * sifat.length)];
    let biho = hoby[Math.floor(Math.random() * hoby.length)];
    let bhucin = bukcin[Math.floor(Math.random() * bukcin.length)];
    let senga = arp[Math.floor(Math.random() * arp.length)];
    let chakep = cakep[Math.floor(Math.random() * cakep.length)];
    let watak = wetak[Math.floor(Math.random() * wetak.length)];
    let baik = baikk[Math.floor(Math.random() * baikk.length)];
    let burug = bhuruk[Math.floor(Math.random() * bhuruk.length)];
    let cerdas = cerdhas[Math.floor(Math.random() * cerdhas.length)];
    let berani = berhani[Math.floor(Math.random() * berhani.length)];
    let takut = mengheikan[Math.floor(Math.random() * mengheikan.length)];

    let profile = `*⧼Cek @${bet.split('@')[0]}⧽*

*Nama :* ${pushname}
*Karakteristik :* ${sipat}
*Hobby :* ${biho}
*Bucin :* ${bhucin}%
*Hebat :* ${senga}%
*Ketampanan :* ${chakep}
*Karakter :* ${watak}
*Moral Baik :* ${baik}%
*Moral buruk :* ${burug}%
*Intelijen :* ${cerdas}%
*Berani :* ${berani}%
*Takut :* ${takut}%
`
try {
await TsuCnn.profilePictureUrl(pengirim, 'image')
} catch (err) {
ppuser = 'https://telegra.ph/file/a059a6a734ed202c879d3.jpg'
}    
ppxeon = await getBuffer(ppuser)
TsuCnn.sendMessage(from, { image: ppxeon, caption: profile, mentions: [bet]},{quoted:m})
break
// game menu

case 'chess': case 'catur': {
  const key = m.chat;
  TsuCnn.chess = TsuCnn.chess || {};
  let chessData = TsuCnn.chess[key] || {
    gameData: null,
    fen: null,
    currentTurn: null,
    players: [],
    hasJoined: []
  };
  TsuCnn.chess[key] = chessData;
  const { gameData, fen, currentTurn, players, hasJoined } = chessData;
  const feature = args[0]?.toLowerCase();

  if (feature === 'delete') {
    delete TsuCnn.chess[key];
    return m.reply('🏳️ *Permainan catur dihentikan.*')
  }

  if (feature === 'create') {
    if (gameData) {
      return m.reply('⚠️ *Permainan sudah dimulai.*')
    }
    chessData.gameData = { status: 'waiting', black: null, white: null };
    return m.reply('🎮 *Permainan catur dimulai.*\nMenunggu pemain lain untuk bergabung.')
  }

  if (feature === 'join') {
    const senderId = m.sender;
    if (players.includes(senderId)) {
      return m.reply('🙅‍♂️ *Anda sudah bergabung dalam permainan ini.*')
    }
    if (!gameData || gameData.status !== 'waiting') {
      return m.reply('⚠️ *Tidak ada permainan catur yang sedang menunggu.*')
    }
    if (players.length >= 2) {
      return m.reply('👥 *Pemain sudah mencukupi.*\nPermainan otomatis dimulai.')
    }
    players.push(senderId);
    hasJoined.push(senderId);
    if (players.length === 2) {
      gameData.status = 'ready';
      const [black, white] = Math.random() < 0.5 ? [players[1], players[0]] : [players[0], players[1]];
      gameData.black = black;
      gameData.white = white;
      chessData.currentTurn = white;
      return TsuCnn.sendMessage(m.chat, { text: `🙌 *Pemain yang telah bergabung:*\n${hasJoined.map(playerId => `- @${playerId.split('@')[0]}`).join('\n')}\n\n*Hitam:* @${black.split('@')[0]}\n*Putih:* @${white.split('@')[0]}\n\nSilakan gunakan *'${prefix}${command} start'* untuk memulai permainan.` }, { quoted: m }, { mentions: hasJoined });
    } else {
      return m.reply('🙋‍♂️ *Anda telah bergabung dalam permainan catur.*\nMenunggu pemain lain untuk bergabung.')
    }
  }

  if (feature === 'start') {
    if (gameData.status !== 'ready') {
      return m.reply('⚠️ *Tidak dapat memulai permainan. Tunggu hingga dua pemain bergabung.*')
    }
    gameData.status = 'playing';
    const senderId = m.sender;
    if (players.length === 2) {
      const fen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
      chessData.fen = fen;
      const encodedFen = encodeURIComponent(fen);
      const giliran = `🎲 *Giliran:* Putih @${gameData.white.split('@')[0]}`;
      const flipParam = senderId === gameData.black ? '' : '&flip=true';
      const flipParam2 = senderId === gameData.black ? '' : '-flip';
      const boardUrl = `https://www.chess.com/dynboard?fen=${encodedFen}&board=graffiti&piece=graffiti&size=3&coordinates=inside${flipParam}`;
      try {
        await TsuCnn.sendFile(m.chat, boardUrl, '', giliran, m, false, { mentions: [gameData.white] });
      } catch (error) {
        const boardUrl2 = `https://chessboardimage.com/${encodedFen + flipParam2}.png`;
        await TsuCnn.sendFile(m.chat, boardUrl2, '', giliran, m, false, { mentions: [gameData.black] });
      }
      return;
    } else {
      return m.reply('🙋‍♂️ *Anda telah bergabung dalam permainan catur.*\nMenunggu pemain lain untuk bergabung.')
    }
  }

  if (args[0] && args[1]) {
    const senderId = m.sender;
    if (!gameData || gameData.status !== 'playing') {
      return m.reply('⚠️ *Permainan belum dimulai.*')
    }
    if (currentTurn !== senderId) {
      return TsuCnn.sendMessage(m.chat, { text: `⏳ *Sekarang giliran ${chessData.currentTurn === gameData.white ? 'Putih' : 'Hitam'} untuk bergerak.*`}, { quoted: m }, {
        contextInfo: {
          mentionedJid: [currentTurn]
        }
      });
    }
    const chess = new Chess(fen);
    if (chess.isCheckmate()) {
      delete TsuCnn.chess[key];
      return TsuCnn.sendMessage(m.chat, { text: `⚠️ *Game Checkmate.*\n🏳️ *Permainan catur dihentikan.*\n*Pemenang:* @${m.sender.split('@')[0]}` }, { quoted: m }, {
        contextInfo: {
          mentionedJid: [m.sender]
        }
      });
    }
    if (chess.isDraw()) {
      delete TsuCnn.chess[key];
      return TsuCnn.sendMessage(m.chat, { text : `⚠️ *Game Draw.*\n🏳️ *Permainan catur dihentikan.*\n*Pemain:* ${hasJoined.map(playerId => `- @${playerId.split('@')[0]}`).join('\n')}` }, { quoted : m }, {
        contextInfo: {
          mentionedJid: hasJoined
        }
      });
    }
    const [from, to] = args;
    try {
      chess.move({ from, to, promotion: 'q' });
    } catch (e) {
      return m.reply('❌ *Langkah tidak valid.*')
    }
    chessData.fen = chess.fen();
    const currentTurnIndex = players.indexOf(currentTurn);
    const nextTurnIndex = (currentTurnIndex + 1) % 2;
    chessData.currentTurn = players[nextTurnIndex];
    const encodedFen = encodeURIComponent(chess.fen());
    const currentColor = chessData.currentTurn === gameData.white ? 'Putih' : 'Hitam';
    const giliran = `🎲 *Giliran:* ${currentColor} @${chessData.currentTurn.split('@')[0]}\n\n${chess.getComment() || ''}`;
    const flipParam = senderId === gameData.black ? '' : '&flip=true';
    const flipParam2 = senderId === gameData.black ? '' : '-flip';
    const boardUrl = `https://www.chess.com/dynboard?fen=${encodedFen}&board=graffiti&piece=graffiti&size=3&coordinates=inside${flipParam}`;
    try {
      await TsuCnn.sendFile(m.chat, boardUrl, '', giliran, m, false, { mentions: [chessData.currentTurn] });
    } catch (error) {
      const boardUrl2 = `https://chessboardimage.com/${encodedFen + flipParam2}.png`;
      await TsuCnn.sendFile(m.chat, boardUrl2, '', giliran, m, false, { mentions: [chessData.currentTurn] });
    }
    chess.deleteComment();
    return;
  }

  if (feature === 'help') {
    return m.reply(`
      🌟 *Perintah Permainan Catur:*

*${prefix}${command} create* - Mulai permainan catur
*${prefix}${command} join* - Bergabung dalam permainan catur yang sedang menunggu
*${prefix}${command} start* - Memulai permainan catur jika ada dua pemain yang sudah bergabung
*${prefix}${command} delete* - Menghentikan permainan catur
*${prefix}${command} [dari] [ke]* - Melakukan langkah dalam permainan catur
    `)
  }
  return m.reply(`❓ Perintah tidak valid. Gunakan *"${prefix}${command} help"* untuk melihat bantuan.`)
};
break

/*case 'aki': case 'akinator': {
  TsuCnn.akinator = TsuCnn.akinator ? TsuCnn.akinator : {};
    const args = m.text.trim().split(/\s+/);
    const cmdaki = args[1]?.toLowerCase();
    if (cmdaki === 'end') {
        if (!(m.sender in TsuCnn.akinator)) return m[_0x180d9f(226)](_0x180d9f(1575));
        delete TsuCnn.akinator[m.sender], m[_0x180d9f(226)](_0x180d9f(1279));
    }
    if (cmdaki === 'start') {
        if (m.sender in TsuCnn.akinator) return m[_0x180d9f(226)]('Anda masih berada dalam sesi Akinator');
        TsuCnn.akinator[m.sender] = new _0x437897({
            'region': 'id'
        }), await TsuCnn.akinator[m.sender][_0x180d9f(252)]();
        let {
            question: _0x2826ce
        } = TsuCnn.akinator[m.sender], _0x47d63e = _0x180d9f(1706) + _0x2826ce + '\x0a\x0a0. *Ya*\x0a1. *Tidak*\x0a2. *Saya Tidak Tahu*\x0a3. *Mungkin*\x0a4. *Mungkin Tidak*\x0a\x0aHint :\x0a*' + (_0x11e237 + _0x47a13b) + _0x180d9f(908) + (_0x11e237 + _0x47a13b) + ' end* untuk keluar dari sesi Akinator';
        TsuCnn.akinator[m.sender].chat = await m[_0x180d9f(226)](_0x47d63e), TsuCnn.akinator[m.sender][_0x180d9f(1483)] = setTimeout(() => {
            const _0x469d35 = _0x180d9f;
            TsuCnn[_0x469d35(226)](m[_0x469d35(357)], 'Waktu Memilih Akinator Habis', TsuCnn[_0x469d35(1314)][m[_0x469d35(1187)]].chat, {
                'ephemeralExpiration': ephe24
            }), delete TsuCnn.akinator[m[_0x469d35(1187)]];
        }, 300000);
    }
    if (cmdaki === 'a') {
        if (!(m.sender in TsuCnn.akinator)) return m.reply(_0x180d9f(1575));
        if (!_0x4abd41[1]) return m[_0x180d9f(226)](_0x180d9f(502));
        if (!/0|1|2|3|4/i [_0x180d9f(347)](_0x4abd41[1])) return m[_0x180d9f(226)](_0x180d9f(1514));
        clearTimeout(TsuCnn.akinator[m.sender].waktu), await TsuCnn.akinator[m.sender][_0x180d9f(395)](_0x4abd41[1]);
        let {
            guess: _0x1e33fe,
            question: _0x1dffe8,
            currentStep: _0x316986,
            progress: _0x496123
        } = TsuCnn.akinator[m.sender];
        if (_0x1e33fe != undefined) {
            const _0x2f276b = _0x180d9f(1420) + _0x1e33fe[_0x180d9f(364)] + '\x0aDeskripsi : ' + _0x1e33fe.description_proposition;
            TsuCnn[_0x180d9f(900)](m[_0x180d9f(357)], {
                'image': {
                    'url': _0x1e33fe[_0x180d9f(944)]
                },
                'caption': _0x2f276b
            }, {
                'quoted': m
            }), delete TsuCnn.akinator[m.sender];
        } else {
            let _0x4ede08 = _0x180d9f(1539) + _0x316986 + _0x180d9f(1412) + _0x496123[_0x180d9f(1690)] 2 + ' % )\x0a`Pertanyaan` : \x0a' + _0x1dffe8 + _0x180d9f(574);
            TsuCnn.akinator[m.sender][_0x180d9f(357)] = await m.reply(_0x4ede08), TsuCnn.akinator[m.sender][_0x180d9f(1483)] = setTimeout(() => {
                const _0x50d98a = _0x180d9f;
                TsuCnn[_0x50d98a(226)](m.chat, 'Waktu Memilih Akinator Habis', TsuCnn[_0x50d98a(1314)][m.sender].chat, {
                    'ephemeralExpiration': ephe24
                }), delete TsuCnn.akinator[m[_0x50d98a(1187)]];
            }, 300000);
        }
    }
    if (cmdaki === _0x180d9f(970)) {
        let _0x237c31 = _0x180d9f(803) + (_0x11e237 + _0x47a13b) + _0x180d9f(562) + (_0x11e237 + _0x47a13b) + _0x180d9f(169) + (_0x11e237 + _0x47a13b) + _0x180d9f(536);
        m[_0x180d9f(226)](_0x237c31);
    }!_0xf0300d && m[_0x180d9f(226)](_0x180d9f(1354) + (_0x11e237 + _0x47a13b) + _0x180d9f(162));
}
break;*/

case 'akinator':
case 'aki':
    TsuCnn.akinator = TsuCnn.akinator ? TsuCnn.akinator : {};
    const args = m.text.trim().split(/\s+/);
    const cmdaki = args[1]?.toLowerCase();
    
    if (cmdaki === 'stop') {
        if (!(m.sender in TsuCnn.akinator)) return replyaki('Anda tidak sedang dalam sesi Akinator');
        delete TsuCnn.akinator[m.sender];
        replyaki('Sesi Akinator telah dihentikan.');
    } else if (cmdaki === 'start') {
        if (m.sender in TsuCnn.akinator) return replyaki('Anda sudah memulai sesi Akinator');
        TsuCnn.akinator[m.sender] = new Aki({ region: 'id' });
        await TsuCnn.akinator[m.sender].start();
        let { question, answers } = TsuCnn.akinator[m.sender];
        let msg = `*Pertanyaan*: ${question}\n\nJawab dengan perintah:\n${prefix}${command} a 0 untuk Ya\n${prefix}${command} a 1 untuk Tidak\n${prefix}${command} a 2 untuk Tidak Tahu\n${prefix}${command} a 3 untuk Mungkin\n${prefix}${command} a 4 untuk Mungkin Tidak`;
        TsuCnn.akinator[m.sender].message = await TsuCnn.sendMessage(m.chat, { text: msg }, { quoted: akinator2 });
        TsuCnn.akinator[m.sender].timeout = setTimeout(() => {
            replyaki('Sesi Akinator telah berakhir.');
            delete TsuCnn.akinator[m.sender];
        }, 300000);
    } else if (cmdaki === 'a') {
        if (!(m.sender in TsuCnn.akinator)) return replyaki('Anda tidak sedang dalam sesi Akinator');
        if (!args[2]) return replyaki('Masukkan Jawaban Anda!');
        if (!/0|1|2|3|4/i.test(args[2])) return replyaki('Jawaban tidak valid!');
        
        const answerIndex = parseInt(args[2]);
        await TsuCnn.akinator[m.sender].step(answerIndex);
        
        let { guess, question, answer, currentStep, progress } = TsuCnn.akinator[m.sender];
        if (progress >= 70 || currentStep >= 78) {
            await TsuCnn.akinator[m.sender].win();
            guess = TsuCnn.akinator[m.sender].firstGuess;
        }
        
        if (guess) {
            const guessMsg = `🎮 *Akinator Answer* 🎮\n\nDia adalah *${guess.name}*\n_${guess.description}_`;
            replyaki(guessMsg);
            delete TsuCnn.akinator[m.sender];
        } else {
            let msg = `Pertanyaan ke-${currentStep} (${progress.toFixed(2)}%)\n*Pertanyaan*: ${question}\n\nJawab dengan perintah:\n${prefix}${command} a 0 untuk Ya\n${prefix}${command} a 1 untuk Tidak\n${prefix}${command} a 2 untuk Tidak Tahu\n${prefix}${command} a 3 untuk Mungkin\n${prefix}${command} a 4 untuk Mungkin Tidak`;
            TsuCnn.akinator[m.sender].message = await TsuCnn.sendMessage(m.chat, { text: msg }, { quoted: akinator2 });
            TsuCnn.akinator[m.sender].timeout = setTimeout(() => {
                replyaki('Sesi Akinator telah berakhir.');
                delete TsuCnn.akinator[m.sender];
            }, 300000);
        }
    } else if (cmdaki === 'help') {
        let msg = `Gunakan perintah berikut untuk memulai permainan:\n${prefix}${command} start ~ Untuk Memulai Permainan\n${prefix}${command} stop ~ Untuk Menghapus Sesi Permainan\n${prefix}${command} a <0/1/2/3/4> ~ Untuk menjawab pertanyaan`;
        TsuCnn.sendMessage(m.chat, { text: msg }, { quoted: akinator2 });
    } else {
    replyaki(`*Akinator* adalah sebuah permainan yang berupaya menebak secara rinci dan pasti isi pikiran pengguna permainan ini melalui serentetan pertanyaan. Permainan ini merupakan hasil tata olah dari kecerdasan buatan yang mampu menemukan serta memafhumi hal-hal yang akan ditanyakan kepada setiap pengguna permainan ini.\n\nGunakan perintah: ${prefix}${command} help untuk bantuan.`);
    }
    break;


/*case 'aki': case 'akinator': {
if (isCreator) return reply('Aduhai min, belum lu perbaiki') 
if (!isCreator) return reply('Maaf, fitur akinator belum bisa digunakan, Owner sedang berusaha.')}
break*/

case 'ww':
case 'werewolf': {
let jimp = require("jimp")
const resize = async (image, width, height) => {
    const read = await jimp.read(image);
    const data = await read.resize(width, height).getBufferAsync(jimp.MIME_JPEG);
    return data;
};

let {
    emoji_role,
    sesi,
    playerOnGame,
    playerOnRoom,
    playerExit,
    dataPlayer,
    dataPlayerById,
    getPlayerById,
    getPlayerById2,
    killWerewolf,
    killww,
    dreamySeer,
    sorcerer,
    protectGuardian,
    roleShuffle,
    roleChanger,
    roleAmount,
    roleGenerator,
    addTimer,
    startGame,
    playerHidup,
    playerMati,
    vote,
    voteResult,
    clearAllVote,
    getWinner,
    win,
    pagi,
    malam,
    skill,
    voteStart,
    voteDone,
    voting,
    run,
    run_vote,
    run_malam,
    run_pagi
} = require('./lib/werewolf.js')

// [ Thumbnail ] 
let thumb =
    "https://user-images.githubusercontent.com/72728486/235316834-f9f84ba0-8df3-4444-81d8-db5270995e6d.jpg";

    const {
        sender,
        chat
    } = m;
    TsuCnn.werewolf = TsuCnn.werewolf ? TsuCnn.werewolf : {};
    const ww = TsuCnn.werewolf ? TsuCnn.werewolf : {};
    const data = ww[chat];
    const value = args[0];
    const target = args[1];

    // [ Membuat Room ]
    if (value === "create") {
        if (chat in ww) return reply("Group masih dalam sesi permainan");
        if (playerOnGame(sender, ww) === true)
            return reply("Kamu masih dalam sesi game");
        ww[chat] = {
            room: chat,
            owner: sender,
            status: false,
            iswin: null,
            cooldown: null,
            day: 0,
            time: "malem",
            player: [],
            dead: [],
            voting: false,
            seer: false,
            guardian: [],
        };
        await reply("Room berhasil dibuat, ketik *.ww join* untuk bergabung");

        // [ Join sesi permainan ]
    } else if (value === "join") {
        if (!ww[chat]) return reply("Belum ada sesi permainan");
        if (ww[chat].status === true)
            return reply("Sesi permainan sudah dimulai");
        if (ww[chat].player.length > 16)
            return reply("Maaf jumlah player telah penuh");
        if (playerOnRoom(sender, chat, ww) === true)
            return reply("Kamu sudah join dalam room ini");
        if (playerOnGame(sender, ww) === true)
            return reply("Kamu masih dalam sesi game");
        let data = {
            id: sender,
            number: ww[chat].player.length + 1,
            sesi: chat,
            status: false,
            role: false,
            effect: [],
            vote: 0,
            isdead: false,
            isvote: false,
        };
        ww[chat].player.push(data);
        let player = [];
        let text = `\n* W E R E W O L F - P L A Y E R*\n\n`;
        for (let i = 0; i < ww[chat].player.length; i++) {
            text += `${ww[chat].player[i].number}) @${ww[chat].player[i].id.replace(
          "@s.whatsapp.net",
          ""
        )}\n`;
            player.push(ww[chat].player[i].id);
        }
        text += "\nJumlah player minimal adalah 5 dan maximal 15";
        TsuCnn.sendMessage(
            m.chat, {
                text: text.trim(),
                contextInfo: {
                    externalAdReply: {
                        title: "W E R E W O L F",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: await resize(thumb, 300, 175),
                        sourceUrl: "",
                        mediaUrl: thumb,
                    },
                    mentionedJid: player,
                },
            }, {
                quoted: m
            }
        );

        // [ Game Play ]
    } else if (value === "start") {
        if (!ww[chat]) return reply("Belum ada sesi permainan");
        if (ww[chat].player.length === 0)
            return reply("Room belum memiliki player");
        if (ww[chat].player.length < 5)
            return reply("Maaf jumlah player belum memenuhi syarat");
        if (playerOnRoom(sender, chat, ww) === false)
            return reply("Kamu belum join dalam room ini");
        if (ww[chat].cooldown > 0) {
            if (ww[chat].time === "voting") {
                clearAllVote(chat, ww);
                addTimer(chat, ww);
                return await run_vote(TsuCnn, chat, ww);
            } else if (ww[chat].time === "malem") {
                clearAllVote(chat, ww);
                addTimer(chat, ww);
                return await run_malam(TsuCnn, chat, ww);
            } else if (ww[chat].time === "pagi") {
                clearAllVote(chat, ww);
                addTimer(chat, ww);
                return await run_pagi(TsuCnn, chat, ww);
            }
        }
        if (ww[chat].status === true)
            return reply("Sesi permainan telah dimulai");
        if (ww[chat].owner !== sender)
            return reply(
                `Hanya @${ww[chat].owner.split("@")[0]} yang dapat memulai permainan`
            );
        let list1 = "";
        let list2 = "";
        let player = [];
        roleGenerator(chat, ww);
        addTimer(chat, ww);
        startGame(chat, ww);
        for (let i = 0; i < ww[chat].player.length; i++) {
            list1 += `(${ww[chat].player[i].number}) @${ww[chat].player[
          i
        ].id.replace("@s.whatsapp.net", "")}\n`;
            player.push(ww[chat].player[i].id);
        }
        for (let i = 0; i < ww[chat].player.length; i++) {
            list2 += `(${ww[chat].player[i].number}) @${ww[chat].player[
          i
        ].id.replace("@s.whatsapp.net", "")} ${
          ww[chat].player[i].role === "werewolf" ||
          ww[chat].player[i].role === "sorcerer"
            ? `[${ww[chat].player[i].role}]`
            : ""
        }\n`;
            player.push(ww[chat].player[i].id);
        }
        for (let i = 0; i < ww[chat].player.length; i++) {
            // [ Werewolf ]
            if (ww[chat].player[i].role === "werewolf") {
                if (ww[chat].player[i].isdead != true) {
                    var textt = `*> Hai ${TsuCnn.getName(
              ww[chat].player[i].id
            )}*, Kamu telah dipilih untuk memerankan *Werewolf* ${emoji_role(
              "werewolf"
            )} pada permainan kali ini, silahkan pilih salah satu player yang ingin kamu makan pada malam hari ini\n*LIST PLAYER*:\n${list2}\n\nKetik *.wwpc kill nomor* untuk membunuh player`;
                    
                    let row = [];
                    for (let p = 0; p < ww[chat].player.length; p++) {
                      row.push({
                        title: `Kill Player ${ww[chat].player[p].number}`,
                        rowId: `.wwpc kill ${ww[chat].player[p].number}`,
                        description: `Untuk membunuh player ${ww[chat].player[p].number}`,
                      });
                    }
                    const sections = [
                      { title: " W E R E W O L F - G A M E", rows: row },
                    ];
                    const listMessage = {
                      text: text,
                      footer: `Player Hidup: ${playerHidup(
                        sesi(m.chat, ww)
                      )} Player Mati: ${playerMati(sesi(m.chat, ww))}`,
                      title: " W E R E W O L F - G A M E\n",
                      buttonText: "Clik here!",
                      sections,
                      mentions: player,
                    };
                    await TsuCnn.sendMessage(ww[chat].player[i].id, listMessage);
                   
                    await TsuCnn.sendMessage(ww[chat].player[i].id, {
                        text: textt,
                        mentions: player,
                    });
                }

                // [ villager ]
            } else if (ww[chat].player[i].role === "warga") {
                if (ww[chat].player[i].isdead != true) {
                    let texttt = `* W E R E W O L F - G A M E*\n\nHai ${TsuCnn.getName(
              ww[chat].player[i].id
            )} Peran kamu adalah *Warga Desa* ${emoji_role(
              "warga"
            )}, tetap waspada, mungkin *Werewolf* akan memakanmu malam ini, silakan masuk kerumah masing masing.\n*LIST PLAYER*:\n${list1}`;
                    await TsuCnn.sendMessage(ww[chat].player[i].id, {
                        text: texttt,
                        mentions: player,
                    });
                }

                // [ Penerawangan ]
            } else if (ww[chat].player[i].role === "seer") {
                if (ww[chat].player[i].isdead != true) {
                    let texxt = `*> Hai ${TsuCnn.getName(
              ww[chat].player[i].id
            )}* Kamu telah terpilih  untuk menjadi *Penerawang* ${emoji_role(
              "seer"
            )}. Dengan sihir yang kamu punya, kamu bisa mengetahui peran pemain pilihanmu.\n*LIST PLAYER*:\n${list1}\n\nKetik *.wwpc dreamy nomor* untuk melihat role player`;
                    
                     let row = [];
                     for (let p = 0; p < ww[chat].player.length; p++) {
                       row.push({
                         title: `Cek Player ${ww[chat].player[p].number}`,
                         rowId: `.ww dreamy ${ww[chat].player[p].number}`,
                         description: `Untuk melihat identitas player ${ww[chat].player[p].number}`,
                       });
                     }
                     const sections = [
                       { title: " W E R E W O L F - G A M E", rows: row },
                     ];
                     const listMessage = {
                       text: text,
                       footer: `Player Hidup: ${playerHidup(
                         sesi(m.chat, ww)
                       )} Player Mati: ${playerMati(sesi(m.chat, ww))}`,
                       title: " W E R E W O L F - G A M E\n",
                       buttonText: "Clik here!",
                       sections,
                       mentions: player,
                     };
                     await TsuCnn.sendMessage(ww[chat].player[i].id, listMessage);
                     
                    await TsuCnn.sendMessage(ww[chat].player[i].id, {
                        text: texxt,
                        mentions: player,
                    });
                }

                // [ Guardian ]
            } else if (ww[chat].player[i].role === "guardian") {
                if (ww[chat].player[i].isdead != true) {
                    let teext = `*> Hai ${TsuCnn.getName(
              ww[chat].player[i].id
            )}* Kamu terpilih untuk memerankan *Malaikat Pelindung* ${emoji_role(
              "guardian"
            )}, dengan kekuatan yang kamu miliki, kamu bisa melindungi para warga, silahkan pilih salah 1 player yang ingin kamu lindungi\n*LIST PLAYER*:\n${list1}\n\nKetik *.wwpc deff nomor* untuk melindungi player`;
                    
                    let row = [];
                    for (let p = 0; p < ww[chat].player.length; p++) {
                      row.push({
                        title: `Lindungi Player ${ww[chat].player[p].number}`,
                        rowId: `.ww deff ${ww[chat].player[p].number}`,
                        description: `Untuk melindungi player ${ww[chat].player[p].number}`,
                      });
                    }
                    const sections = [
                      { title: " W E R E W O L F - G A M E", rows: row },
                    ];
                    const listMessage = {
                      text: text,
                      footer: `Player Hidup: ${playerHidup(
                        sesi(m.chat, ww)
                      )} Player Mati: ${playerMati(sesi(m.chat, ww))}`,
                      title: " W E R E W O L F - G A M E\n",
                      buttonText: "Clik here!",
                      sections,
                      mentions: player,
                    };
                    await TsuCnn.sendMessage(ww[chat].player[i].id, listMessage);
                    
                    await TsuCnn.sendMessage(ww[chat].player[i].id, {
                        text: teext,
                        mentions: player,
                    });
                }

                // [ Sorcerer ]
            } else if (ww[chat].player[i].role === "sorcerer") {
                if (ww[chat].player[i].isdead != true) {
                    let textu = `*> Hai ${TsuCnn.getName(
              ww[chat].player[i].id
            )}* Kamu terpilih sebagai Penyihir ${emoji_role(
              "sorcerer"
            )}, dengan kekuasaan yang kamu punya, kamu bisa membuka identitas para player, silakan pilih 1 orang yang ingin kamu buka identitasnya\n*LIST PLAYER*:\n${list2}\n\nKetik *.wwpc sorcerer nomor* untuk melihat role player`;
                    
                    let row = [];
                    for (let p = 0; p < ww[chat].player.length; p++) {
                      row.push({
                        title: `Cek Player ${ww[chat].player[p].number}`,
                        rowId: `.ww sorcerer ${ww[chat].player[p].number}`,
                        description: `Untuk melihat identitas player ${ww[chat].player[p].number}`,
                      });
                    }
                    const sections = [
                      { title: " W E R E W O L F - G A M E", rows: row },
                    ];
                    const listMessage = {
                      text: text,
                      footer: `Player Hidup: ${playerHidup(
                        sesi(m.chat, ww)
                      )} Player Mati: ${playerMati(sesi(m.chat, ww))}`,
                      title: " W E R E W O L F - G A M E\n",
                      buttonText: "Clik here!",
                      sections,
                      mentions: player,
                    };
                    await TsuCnn.sendMessage(ww[chat].player[i].id, listMessage);
                    
                    await TsuCnn.sendMessage(ww[chat].player[i].id, {
                        text: textu,
                        mentions: player,
                    });
                }
            }
        }
        await TsuCnn.sendMessage(m.chat, {
            text: "* W E R E W O L F - G A M E*\n\nGame telah dimulai, para player akan memerankan perannya masing masing, silahkan cek chat pribadi untuk melihat role kalian. Berhati-hatilah para warga, mungkin malam ini adalah malah terakhir untukmu",
            contextInfo: {
                externalAdReply: {
                    title: "W E R E W O L F",
                    mediaType: 1,
                    renderLargerThumbnail: true,
                    thumbnail: await resize(thumb, 300, 175),
                    sourceUrl: "",
                    mediaUrl: thumb,
                },
                mentionedJid: player,
            },
        });
        await run(TsuCnn, chat, ww);
    } else if (value === "vote") {
        if (!ww[chat]) return reply("Belum ada sesi permainan");
        if (ww[chat].status === false)
            return reply("Sesi permainan belum dimulai");
        if (ww[chat].time !== "voting")
            return reply("Sesi voting belum dimulai");
        if (playerOnRoom(sender, chat, ww) === false)
            return reply("Kamu bukan player");
        if (dataPlayer(sender, ww).isdead === true)
            return reply("Kamu sudah mati");
        if (!target || target.length < 1)
            return reply("Masukan nomor player");
        if (isNaN(target)) return reply("Gunakan hanya nomor");
        if (dataPlayer(sender, ww).isvote === true)
            return reply("Kamu sudah melakukan voting");
        b = getPlayerById(chat, sender, parseInt(target), ww);
        if (b.db.isdead === true)
            return reply(`Player ${target} sudah mati.`);
        if (ww[chat].player.length < parseInt(target))
            return reply("Invalid");
        if (getPlayerById(chat, sender, parseInt(target), ww) === false)
            return reply("Player tidak terdaftar!");
        vote(chat, parseInt(target), sender, ww);
        return reply(" Vote");
    } else if (value == "exit") {
        if (!ww[chat]) return reply("Tidak ada sesi permainan");
        if (playerOnRoom(sender, chat, ww) === false)
            return reply("Kamu tidak dalam sesi permainan");
        if (ww[chat].status === true)
            return reply("Permainan sudah dimulai, kamu tidak bisa keluar");
        reply(`@${sender.split("@")[0]} Keluar dari permainan`, {
            withTag: true,
        });
        playerExit(chat, sender, ww);
    } else if (value === "delete") {
        if (!ww[chat]) return reply("Tidak ada sesi permainan");
        if (ww[chat].owner !== sender)
            return reply(
                `Hanya @${
            ww[chat].owner.split("@")[0]
          } yang dapat menghapus sesi permainan ini`
            );
        reply("Sesi permainan berhasil dihapus").then(() => {
            delete ww[chat];
        });
    } else if (value === "player") {
        if (!ww[chat]) return reply("Tidak ada sesi permainan");
        if (playerOnRoom(sender, chat, ww) === false)
            return reply("Kamu tidak dalam sesi permainan");
        if (ww[chat].player.length === 0)
            return reply("Sesi permainan belum memiliki player");
        let player = [];
        let text = "\n* W E R E W O L F - G A M E*\n\nLIST PLAYER:\n";
        for (let i = 0; i < ww[chat].player.length; i++) {
            text += `(${ww[chat].player[i].number}) @${ww[chat].player[i].id.replace(
          "@s.whatsapp.net",
          ""
        )} ${
          ww[chat].player[i].isdead === true
            ? ` ${ww[chat].player[i].role}`
            : ""
        }\n`;
            player.push(ww[chat].player[i].id);
        }
        TsuCnn.sendMessage(
            m.chat, {
                text: text,
                contextInfo: {
                    externalAdReply: {
                        title: "W E R E W O L F",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: await resize(thumb, 300, 175),
                        sourceUrl: "",
                        mediaUrl: thumb,
                    },
                    mentionedJid: player,
                },
            }, {
                quoted: m
            }
        );
    } else {
        let text = `\n* W E R E W O L F - G A M E*\n\nPermainan Sosial Yang Berlangsung Dalam Beberapa Putaran/ronde. Para Pemain Dituntut Untuk Mencari Seorang Penjahat Yang Ada Dipermainan. Para Pemain Diberi Waktu, Peran, Serta Kemampuannya Masing-masing Untuk Bermain Permainan Ini\n\n* C O M M A N D*\n`;
        text += ` ${prefix}ww create\n`;
        text += ` ${prefix}ww join\n`;
        text += ` ${prefix}ww start\n`;
        text += ` ${prefix}ww exit\n`;
        text += ` ${prefix}ww delete\n`;
        text += ` ${prefix}ww player\n`;
        text += `\nPermainan ini dapat dimainkan oleh 5 sampai 15 orang.`;
        TsuCnn.sendMessage(
            m.chat, {
                text: text.trim(),
                contextInfo: {
                    externalAdReply: {
                        title: "W E R E W O L F",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: await resize(thumb, 300, 175),
                        sourceUrl: "",
                        mediaUrl: thumb,
                    },
                },
            }, {
                quoted: m
            }
        );
    }
}
break
case 'wwpc': {
let {
    emoji_role,
    sesi,
    playerOnGame,
    playerOnRoom,
    playerExit,
    dataPlayer,
    dataPlayerById,
    getPlayerById,
    getPlayerById2,
    killWerewolf,
    killww,
    dreamySeer,
    sorcerer,
    protectGuardian,
    roleShuffle,
    roleChanger,
    roleAmount,
    roleGenerator,
    addTimer,
    startGame,
    playerHidup,
    playerMati,
    vote,
    voteResult,
    clearAllVote,
    getWinner,
    win,
    pagi,
    malam,
    skill,
    voteStart,
    voteDone,
    voting,
    run,
    run_vote,
    run_malam,
    run_pagi
} = require('./lib/werewolf.js')

    const {
        sender,
        chat
    } = m;
    TsuCnn.werewolf = TsuCnn.werewolf ? TsuCnn.werewolf : {};
    const ww = TsuCnn.werewolf ? TsuCnn.werewolf : {};
    const value = args[0];
    const target = args[1];

    if (playerOnGame(sender, ww) === false)
        return reply("Kamu tidak dalam sesi game");
    if (dataPlayer(sender, ww).status === true)
        return reply(
            "Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam"
        );
    if (dataPlayer(sender, ww).isdead === true)
        return reply("Kamu sudah mati");
    if (!target || target.length < 1) return reply("Masukan nomor player");
    if (isNaN(target)) return reply("Gunakan hanya nomor");
    let byId = getPlayerById2(sender, parseInt(target), ww);
    if (byId.db.isdead === true) return reply("Player sudah mati");
    if (byId.db.id === sender)
        return reply("Tidak bisa menggunakan skill untuk diri sendiri");
    if (byId === false) return reply("Player tidak terdaftar");
    if (value === "kill") {
        if (dataPlayer(sender, ww).role !== "werewolf")
            return reply("Peran ini bukan untuk kamu");
        if (byId.db.role === "sorcerer")
            return reply("Tidak bisa menggunakan skill untuk teman");
        return m
            .reply("Berhasil membunuh player " + parseInt(target))
            .then(() => {
                dataPlayer(sender, ww).status = true;
                killWerewolf(sender, parseInt(target), ww);
            });
    } else if (value === "dreamy") {
        if (dataPlayer(sender, ww).role !== "seer")
            return reply("Peran ini bukan untuk kamu");
        let dreamy = dreamySeer(m.sender, parseInt(target), ww);
        return m
            .reply(`Berhasil membuka identitas player ${target} adalah ${dreamy}`)
            .then(() => {
                dataPlayer(sender, ww).status = true;
            });
    } else if (value === "deff") {
        if (dataPlayer(sender, ww).role !== "guardian")
            return reply("Peran ini bukan untuk kamu");
        return reply(`Berhasil melindungi player ${target}`)
        .then(() => {
            protectGuardian(m.sender, parseInt(target), ww);
            dataPlayer(sender, ww).status = true;
        });
    } else if (value === "sorcerer") {
        if (dataPlayer(sender, ww).role !== "sorcerer")
            return reply("Peran ini bukan untuk kamu");
        let sorker = sorcerer(sesi(m.sender), target);
        return m
            .reply(`Berhasil membuka identitas player ${player} adalah ${sorker}`)
            .then(() => {
                dataPlayer(sender, ww).status = true;
            });
    }
}
break

case 'petakbom': 
if (from in tebakgambar) return reply('Kamu masih punya soal Tebak Gambar');
if (from in tebakanime) return reply('Kamu masih punya soal Tebak Anime');
if (from in tebakkata) return reply('Kamu masih punya soal Tebak Kata');
if (from in tebakkalimat) return reply('Kamu masih punya soal Tebak Kalimat');
if (from in susunkata) return reply('Kamu masih punya soal Susun Kata');
if (from in tebaklagu) return reply('Kamu masih punya soal Tebak Lagu');
if (from in tebaklirik) return reply('Kamu masih punya soal Tebak Lirik');
if (from in tebakkimia) return reply('Kamu masih punya soal  Tebak Kimia');
if (from in tebakbendera) return reply('Kamu masih punya soal tebak Bendera');
if (from in asahotak) return reply('Kamu masih punya soal Asah Otak');
if (sender in petakbom) return reply(`Game mu masih belum terselesaikan, lanjutkan yukk\n\n${petakbom[sender].board.join("")}\n\nKirim ${prefix}delpetakbom untuk menghapus game petak bom`);
if (from in caklontong) return reply('Kamu masih punya soal Cak Lontong');
if (from in kuismath) return reply('Kamu masih punya soal Kuis Math');

function shuffle(array) {
return array.sort(() => Math.random() - 0.5);
}
petakbom[sender] = {
petak: shuffle([0, 0, 0, 2, 0, 2, 0, 2, 0, 0]),
board: ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "🔟"],
bomb: 3,
lolos: 7,
pick: 0,
hadiah: randomNomor(5000, 10000),
nyawa: ["❤️", "❤️", "❤️"]
};
await reply(`*PETAK BOM*

${petakbom[sender].board.join("")}

Pilih lah nomor tersebut! dan jangan sampai terkena Bom!
Bomb : ${petakbom[sender].bomb}
Nyawa : ${petakbom[sender].nyawa.join("")}`);
break
case 'delpetakbom':
if (!m.isGroup) return m.reply(mess.group)
if (!(sender in petakbom)) return reply(`kamu sedang tidak bermain petakbom!`)
delete petakbom[sender];
reply(`Petakbom di akhiri, hadiah Rp. 0`)
break
case 'tebakgambar':
if (!m.isGroup) return m.reply(mess.group)
if (from in tebakgambar) return reply('Kamu masih punya soal Tebak Gambar');
if (from in tebakanime) return reply('Kamu masih punya soal Tebak Anime');
if (from in tebakkata) return reply('Kamu masih punya soal Tebak Kata');
if (from in tebakkalimat) return reply('Kamu masih punya soal Tebak Kalimat');
if (from in susunkata) return reply('Kamu masih punya soal Susun Kata');
if (from in tebaklagu) return reply('Kamu masih punya soal Tebak Lagu');
if (from in tebaklirik) return reply('Kamu masih punya soal Tebak Lirik');
if (from in tebakkimia) return reply('Kamu masih punya soal  Tebak Kimia');
if (from in tebakbendera) return reply('Kamu masih punya soal tebak Bendera');
if (from in asahotak) return reply('Kamu masih punya soal Asah Otak');
if (from in kuis) return reply('Kamu masih punya soal kuis');
if (from in kuismath) return reply('Kamu masih punya soal Kuis Math');
if (from in caklontong) return reply('Kamu masih punya soal Cak Lontong');
if (sender in petakbom) return reply(`Kamu masih punya soal Petak Bom`)

var { img, jawaban, deskripsi } = pickRandom(JSON.parse(fs.readFileSync('./media/game/tebakgambar.json')));
console.log('Jawaban : '+jawaban)
var teks1 = `*GAME TEBAK GAMBAR*\n\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nDeskripsi: ${deskripsi}\nWaktu: ${gamewaktu} detik`
await TsuCnn.sendMessage(from, {image: {url: img}, caption: teks1}, {quoted: m})
tebakgambar[from] = {
soal: img,
jawaban: jawaban.toLowerCase(),
waktu: setTimeout(function () {
if (tebakgambar[from]) reply(`Waktu habis!\nJawabannya adalah: ${tebakgambar[from].jawaban}`);
delete tebakgambar[from];
}, gamewaktu * 1000)
}
break
case 'tebakanime':
if (!m.isGroup) return m.reply(mess.group)
if (from in tebakgambar) return reply('Kamu masih punya soal Tebak Gambar');
if (from in tebakanime) return reply('Kamu masih punya soal Tebak Anime');
if (from in tebakkata) return reply('Kamu masih punya soal Tebak Kata');
if (from in tebakkalimat) return reply('Kamu masih punya soal Tebak Kalimat');
if (from in susunkata) return reply('Kamu masih punya soal Susun Kata');
if (from in tebaklagu) return reply('Kamu masih punya soal Tebak Lagu');
if (from in tebaklirik) return reply('Kamu masih punya soal Tebak Lirik');
if (from in tebakkimia) return reply('Kamu masih punya soal  Tebak Kimia');
if (from in tebakbendera) return reply('Kamu masih punya soal tebak Bendera');
if (from in asahotak) return reply('Kamu masih punya soal Asah Otak');
if (from in caklontong) return reply('Kamu masih punya soal Cak Lontong');
if (sender in petakbom) return reply(`Kamu masih punya soal Petak Bom`)
if (from in kuismath) return reply('Kamu masih punya soal Kuis Math');

var { image, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./media/game/tebakanime.json')));
console.log('Jawaban : '+jawaban)
var teks1 = `*GAME TEBAK ANIME*\n\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`
await TsuCnn.sendMessage(from, {image: {url: image}, caption: teks1}, {quoted: m})
tebakanime[from] = {
soal: image,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakanime[from]) reply(`Waktu habis!\nJawabannya adalah: ${tebakanime[from].jawaban}`);
delete tebakanime[from];
}, gamewaktu * 1000)
}
break
case 'tebaklagu':
if (!m.isGroup) return m.reply(mess.group)
if (from in tebakgambar) return reply('Kamu masih punya soal Tebak Gambar');
if (from in tebakanime) return reply('Kamu masih punya soal Tebak Anime');
if (from in tebakkata) return reply('Kamu masih punya soal Tebak Kata');
if (from in tebakkalimat) return reply('Kamu masih punya soal Tebak Kalimat');
if (from in susunkata) return reply('Kamu masih punya soal Susun Kata');
if (from in tebaklagu) return reply('Kamu masih punya soal Tebak Lagu');
if (from in tebaklirik) return reply('Kamu masih punya soal Tebak Lirik');
if (from in tebakkimia) return reply('Kamu masih punya soal  Tebak Kimia');
if (from in tebakbendera) return reply('Kamu masih punya soal tebak Bendera');
if (from in asahotak) return reply('Kamu masih punya soal Asah Otak');
if (from in caklontong) return reply('Kamu masih punya soal Cak Lontong');
if (sender in petakbom) return reply(`Kamu masih punya soal Petak Bom`)
if (from in kuismath) return reply('Kamu masih punya soal Kuis Math');

var { soal, artis, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./media/game/tebaklagu.json')));
console.log('Jawaban : '+jawaban)
if (jawaban.toLowerCase() == 'audio tidak ditemukan, silahkan request ulang!') return reply('Maaf terjadi kesalahan!')
var teks1 = `*GAME TEBAK LAGU*\n\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nArtist: ${artis}\nWaktu: ${gamewaktu} detik`
await TsuCnn.sendMessage(from, {audio: {url: soal}, mimetype: 'audio/mp4', ptt: true}, {quoted: m}).then(res => {TsuCnn.sendText(from, teks1, res)})

tebaklagu[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebaklagu[from]) reply(`Waktu habis\nJawabannya adalah: ${tebaklagu[from].jawaban}`);
delete tebaklagu[from];
}, gamewaktu * 1000)
}
break
case 'kuis':
if (!m.isGroup) return m.reply(mess.group)
if (from in tebakgambar) return reply('Kamu masih punya soal Tebak Gambar');
if (from in tebakanime) return reply('Kamu masih punya soal Tebak Anime');
if (from in tebakkata) return reply('Kamu masih punya soal Tebak Kata');
if (from in tebakkalimat) return reply('Kamu masih punya soal Tebak Kalimat');
if (from in susunkata) return reply('Kamu masih punya soal Susun Kata');
if (from in tebaklagu) return reply('Kamu masih punya soal Tebak Lagu');
if (from in tebaklirik) return reply('Kamu masih punya soal Tebak Lirik');
if (from in tebakkimia) return reply('Kamu masih punya soal  Tebak Kimia');
if (from in tebakbendera) return reply('Kamu masih punya soal tebak Bendera');
if (from in asahotak) return reply('Kamu masih punya soal Asah Otak');
if (from in caklontong) return reply('Kamu masih punya soal Cak Lontong');
if (sender in petakbom) return reply(`Kamu masih punya soal Petak Bom`)
if (from in kuismath) return reply('Kamu masih punya soal Kuis Math');

var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./media/game/kuis.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME KUIS*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
kuis[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (kuis[from]) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete kuis[from];
}, gamewaktu * 1000)
}
break
case 'tebakkalimat':
if (!m.isGroup) return m.reply(mess.group)
if (from in tebakgambar) return reply('Kamu masih punya soal Tebak Gambar');
if (from in tebakanime) return reply('Kamu masih punya soal Tebak Anime');
if (from in tebakkata) return reply('Kamu masih punya soal Tebak Kata');
if (from in tebakkalimat) return reply('Kamu masih punya soal Tebak Kalimat');
if (from in susunkata) return reply('Kamu masih punya soal Susun Kata');
if (from in tebaklagu) return reply('Kamu masih punya soal Tebak Lagu');
if (from in tebaklirik) return reply('Kamu masih punya soal Tebak Lirik');
if (from in tebakkimia) return reply('Kamu masih punya soal  Tebak Kimia');
if (from in tebakbendera) return reply('Kamu masih punya soal tebak Bendera');
if (from in asahotak) return reply('Kamu masih punya soal Asah Otak');
if (from in caklontong) return reply('Kamu masih punya soal Cak Lontong');
if (sender in petakbom) return reply(`Kamu masih punya soal Petak Bom`)
if (from in kuismath) return reply('Kamu masih punya soal Kuis Math');

var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./media/game/tebakkalimat.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME TEBAK KALIMAT*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
tebakkalimat[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakkalimat[from]) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete tebakkalimat[from];
}, gamewaktu * 1000)
}
break
case 'tebakkata':
if (!m.isGroup) return m.reply(mess.group)
if (from in tebakgambar) return reply('Kamu masih punya soal Tebak Gambar');
if (from in tebakanime) return reply('Kamu masih punya soal Tebak Anime');
if (from in tebakkata) return reply('Kamu masih punya soal Tebak Kata');
if (from in tebakkalimat) return reply('Kamu masih punya soal Tebak Kalimat');
if (from in susunkata) return reply('Kamu masih punya soal Susun Kata');
if (from in tebaklagu) return reply('Kamu masih punya soal Tebak Lagu');
if (from in tebaklirik) return reply('Kamu masih punya soal Tebak Lirik');
if (from in tebakkimia) return reply('Kamu masih punya soal  Tebak Kimia');
if (from in tebakbendera) return reply('Kamu masih punya soal tebak Bendera');
if (from in asahotak) return reply('Kamu masih punya soal Asah Otak');
if (from in caklontong) return reply('Kamu masih punya soal Cak Lontong');
if (sender in petakbom) return reply(`Kamu masih punya soal Petak Bom`)
if (from in kuismath) return reply('Kamu masih punya soal Kuis Math');

var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./media/game/tebakkata.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME TEBAK KATA*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
tebakkata[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakkata[from]) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete tebakkata[from];
}, gamewaktu * 1000)
}
break
case 'tebaklirik':
if (!m.isGroup) return m.reply(mess.group)
if (from in tebakgambar) return reply('Kamu masih punya soal Tebak Gambar');
if (from in tebakanime) return reply('Kamu masih punya soal Tebak Anime');
if (from in tebakkata) return reply('Kamu masih punya soal Tebak Kata');
if (from in tebakkalimat) return reply('Kamu masih punya soal Tebak Kalimat');
if (from in susunkata) return reply('Kamu masih punya soal Susun Kata');
if (from in tebaklagu) return reply('Kamu masih punya soal Tebak Lagu');
if (from in tebaklirik) return reply('Kamu masih punya soal Tebak Lirik');
if (from in tebakkimia) return reply('Kamu masih punya soal  Tebak Kimia');
if (from in tebakbendera) return reply('Kamu masih punya soal tebak Bendera');
if (from in asahotak) return reply('Kamu masih punya soal Asah Otak');
if (from in caklontong) return reply('Kamu masih punya soal Cak Lontong');
if (sender in petakbom) return reply(`Kamu masih punya soal Petak Bom`)
if (from in kuismath) return reply('Kamu masih punya soal Kuis Math');

var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./media/game/tebaklirik.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME TEBAK LIRIK*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
tebaklirik[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebaklirik[from]) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete tebaklirik[from];
}, gamewaktu * 1000)
}
break
case 'tebakkimia':
if (!m.isGroup) return m.reply(mess.group)
if (from in tebakgambar) return reply('Kamu masih punya soal Tebak Gambar');
if (from in tebakanime) return reply('Kamu masih punya soal Tebak Anime');
if (from in tebakkata) return reply('Kamu masih punya soal Tebak Kata');
if (from in tebakkalimat) return reply('Kamu masih punya soal Tebak Kalimat');
if (from in susunkata) return reply('Kamu masih punya soal Susun Kata');
if (from in tebaklagu) return reply('Kamu masih punya soal Tebak Lagu');
if (from in tebaklirik) return reply('Kamu masih punya soal Tebak Lirik');
if (from in tebakkimia) return reply('Kamu masih punya soal  Tebak Kimia');
if (from in tebakbendera) return reply('Kamu masih punya soal tebak Bendera');
if (from in asahotak) return reply('Kamu masih punya soal Asah Otak');
if (from in caklontong) return reply('Kamu masih punya soal Cak Lontong');
if (sender in petakbom) return reply(`Kamu masih punya soal Petak Bom`)
if (from in kuismath) return reply('Kamu masih punya soal Kuis Math');

var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./media/game/tebakkimia.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME TEBAK KIMIA*\n\nSoal: ${soal}\nWaktu: ${gamewaktu} detik`)
tebakkimia[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakkimia[from]) reply(`Waktu berakhir :(\nNama unsur dari lambang ${soal}\n\nAdalah: ${monospace(jawaban)}`)
delete tebakkimia[from];
}, gamewaktu * 1000)
}
break
case 'tebakbendera':
if (!m.isGroup) return m.reply(mess.group)
if (from in tebakgambar) return reply('Kamu masih punya soal Tebak Gambar');
if (from in tebakanime) return reply('Kamu masih punya soal Tebak Anime');
if (from in tebakkata) return reply('Kamu masih punya soal Tebak Kata');
if (from in tebakkalimat) return reply('Kamu masih punya soal Tebak Kalimat');
if (from in susunkata) return reply('Kamu masih punya soal Susun Kata');
if (from in tebaklagu) return reply('Kamu masih punya soal Tebak Lagu');
if (from in tebaklirik) return reply('Kamu masih punya soal Tebak Lirik');
if (from in tebakkimia) return reply('Kamu masih punya soal  Tebak Kimia');
if (from in tebakbendera) return reply('Kamu masih punya soal tebak Bendera');
if (from in asahotak) return reply('Kamu masih punya soal Asah Otak');
if (from in caklontong) return reply('Kamu masih punya soal Cak Lontong');
if (sender in petakbom) return reply(`Kamu masih punya soal Petak Bom`)
if (from in kuismath) return reply('Kamu masih punya soal Kuis Math');

var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./media/game/tebakbendera.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME TEBAK BENDERA*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
tebakbendera[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakbendera[from]) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete tebakbendera[from];
}, gamewaktu * 1000)
}
break
case 'susunkata':
if (!m.isGroup) return m.reply(mess.group)
if (from in tebakgambar) return reply('Kamu masih punya soal Tebak Gambar');
if (from in tebakanime) return reply('Kamu masih punya soal Tebak Anime');
if (from in tebakkata) return reply('Kamu masih punya soal Tebak Kata');
if (from in tebakkalimat) return reply('Kamu masih punya soal Tebak Kalimat');
if (from in susunkata) return reply('Kamu masih punya soal Susun Kata');
if (from in tebaklagu) return reply('Kamu masih punya soal Tebak Lagu');
if (from in tebaklirik) return reply('Kamu masih punya soal Tebak Lirik');
if (from in tebakkimia) return reply('Kamu masih punya soal  Tebak Kimia');
if (from in tebakbendera) return reply('Kamu masih punya soal tebak Bendera');
if (from in asahotak) return reply('Kamu masih punya soal Asah Otak');
if (from in caklontong) return reply('Kamu masih punya soal Cak Lontong');
if (sender in petakbom) return reply(`Kamu masih punya soal Petak Bom`)
if (from in kuismath) return reply('Kamu masih punya soal Kuis Math');

var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./media/game/susunkata.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME SUSUN KATA*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
susunkata[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (susunkata[from]) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete susunkata[from];
}, gamewaktu * 1000)
}
break
case 'asahotak':
if (!m.isGroup) return m.reply(mess.group)
if (from in tebakgambar) return reply('Kamu masih punya soal Tebak Gambar');
if (from in tebakanime) return reply('Kamu masih punya soal Tebak Anime');
if (from in tebakkata) return reply('Kamu masih punya soal Tebak Kata');
if (from in tebakkalimat) return reply('Kamu masih punya soal Tebak Kalimat');
if (from in susunkata) return reply('Kamu masih punya soal Susun Kata');
if (from in tebaklagu) return reply('Kamu masih punya soal Tebak Lagu');
if (from in tebaklirik) return reply('Kamu masih punya soal Tebak Lirik');
if (from in tebakkimia) return reply('Kamu masih punya soal  Tebak Kimia');
if (from in tebakbendera) return reply('Kamu masih punya soal tebak Bendera');
if (from in asahotak) return reply('Kamu masih punya soal Asah Otak');
if (from in caklontong) return reply('Kamu masih punya soal Cak Lontong');
if (sender in petakbom) return reply(`Kamu masih punya soal Petak Bom`)
if (from in kuismath) return reply('Kamu masih punya soal Kuis Math');

var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./media/game/asahotak.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME ASAH OTAK*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
asahotak[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (asahotak[from]) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete asahotak[from];
}, gamewaktu * 1000)
}
break
case 'siapakahaku': case 'sa':
if (!m.isGroup) return m.reply(mess.group)
if (from in tebakgambar) return reply('Kamu masih punya soal Tebak Gambar');
if (from in tebakanime) return reply('Kamu masih punya soal Tebak Anime');
if (from in tebakkata) return reply('Kamu masih punya soal Tebak Kata');
if (from in tebakkalimat) return reply('Kamu masih punya soal Tebak Kalimat');
if (from in susunkata) return reply('Kamu masih punya soal Susun Kata');
if (from in tebaklagu) return reply('Kamu masih punya soal Tebak Lagu');
if (from in tebaklirik) return reply('Kamu masih punya soal Tebak Lirik');
if (from in tebakkimia) return reply('Kamu masih punya soal  Tebak Kimia');
if (from in tebakbendera) return reply('Kamu masih punya soal tebak Bendera');
if (from in asahotak) return reply('Kamu masih punya soal Asah Otak');
if (from in caklontong) return reply('Kamu masih punya soal Cak Lontong');
if (sender in petakbom) return reply(`Kamu masih punya soal Petak Bom`)
if (from in kuismath) return reply('Kamu masih punya soal Kuis Math');

var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./media/game/siapakahaku.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME SIAPAKAH AKU*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
siapakahaku[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (siapakahaku[from]) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete siapakahaku[from];
}, gamewaktu * 1000)
}
break
case 'caklontong':
if (!m.isGroup) return m.reply(mess.group)
if (from in tebakgambar) return reply('Kamu masih punya soal Tebak Gambar');
if (from in tebakanime) return reply('Kamu masih punya soal Tebak Anime');
if (from in tebakkata) return reply('Kamu masih punya soal Tebak Kata');
if (from in tebakkalimat) return reply('Kamu masih punya soal Tebak Kalimat');
if (from in susunkata) return reply('Kamu masih punya soal Susun Kata');
if (from in tebaklagu) return reply('Kamu masih punya soal Tebak Lagu');
if (from in tebaklirik) return reply('Kamu masih punya soal Tebak Lirik');
if (from in tebakkimia) return reply('Kamu masih punya soal  Tebak Kimia');
if (from in tebakbendera) return reply('Kamu masih punya soal tebak Bendera');
if (from in asahotak) return reply('Kamu masih punya soal Asah Otak');
if (from in caklontong) return reply('Masih ada game yang belum diselesaikan');
if (sender in petakbom) return reply(`Kamu punya soal Petak Bom`)
if (from in kuismath) return reply('Kamu masih punya soal Kuis Math');

var { soal, jawaban, deskripsi } = pickRandom(JSON.parse(fs.readFileSync('./media/game/caklontong.json')));
console.log(`Jawaban : ${jawaban}\n${deskripsi}`)
await reply(`*GAME CAK LONTONG*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
caklontong[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (caklontong[from]) reply(`Waktu habis!\nJawabannya adalah: ${jawaban}\n${deskripsi}`)
delete caklontong[from];
}, gamewaktu * 1000)
}
break
case 'math': case 'kuismath':
if (!m.isGroup) return m.reply(mess.group)
if (from in tebakgambar) return reply('Kamu masih punya soal Tebak Gambar');
if (from in tebakanime) return reply('Kamu masih punya soal Tebak Anime');
if (from in tebakkata) return reply('Kamu masih punya soal Tebak Kata');
if (from in tebakkalimat) return reply('Kamu masih punya soal Tebak Kalimat');
if (from in susunkata) return reply('Kamu masih punya soal Susun Kata');
if (from in tebaklagu) return reply('Kamu masih punya soal Tebak Lagu');
if (from in tebaklirik) return reply('Kamu masih punya soal Tebak Lirik');
if (from in tebakkimia) return reply('Kamu masih punya soal  Tebak Kimia');
if (from in tebakbendera) return reply('Kamu masih punya soal tebak Bendera');
if (from in asahotak) return reply('Kamu masih punya soal Asah Otak');
if (from in caklontong) return reply('Kamu masih punya soal Cak Lontong');
if (from in kuismath) return reply('Masih ada game yang belum diselesaikan!');
if (sender in petakbom) return reply(`Kamu punya soal Petak Bom`)

let { genMath, modes } = require('./media/game/math')
if (!q) return reply( `┌─〔 Mode 〕\n├ ${Object.keys(modes).join('\n├ ')}\n└────\nContoh : \n${prefix + command} hard`)
if (!(Object.keys(modes)).includes(args[0])) return reply('Pilih mode yang bener GOBLOK!')
var { soal, jawaban, waktu, hadiah } = await genMath(q.toLowerCase()).catch((err) => m.reply(`Tolong pilih modenya yang benar Contoh : ${prefix + command} easy`))
console.log('Jawaban : '+jawaban)
await reply(`*GAME KUIS MATH*\n\nSoal: Berapa hasil dari ${soal.toLowerCase()}\nWaktu: ${waktu / 1000} detik`)
kuismath[from] = {
soal: soal,
jawaban: jawaban,
hadiah: randomNomor(2000, hadiah),
waktu: setTimeout(function () {
if (kuismath[from]) reply(`Waktu habis!\nJawabannya adalah: ${jawaban}`)
delete kuismath[from];
}, waktu)
}
break
case 'family100': case 'f100':
if (!m.isGroup) return m.reply(mess.group)
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./media/game/family100.json')));
console.log('Jawaban : '+jawaban)
let famil = []
for (let i of jawaban){
let fefsh = i.split('/') ? i.split('/')[0] : i
let iuhbs = fefsh.startsWith(' ') ? fefsh.replace(' ','') : fefsh
let axsfh = iuhbs.endsWith(' ') ? iuhbs.replace(iuhbs.slice(-1), '') : iuhbs
famil.push(axsfh.toLowerCase())
}
await reply(`*GAME FAMILY 100*\n\nSoal: ${soal}\nTotal Jawaban: ${jawaban.length}\n\nWaktu: ${gamewaktu} detik`)
family100[from] = {
soal: soal,
jawaban: famil,
hadiah: randomNomor(10, 20),
waktu: setTimeout(async function () {
if (from in family100) {
let teks = `*WAKTU HABIS!*\nJawaban yang belum terjawab :\n\n`
let jwb = family100[from].jawaban
for (let i of jwb){teks += `\n${i}`}
reply(teks)
delete family100[from];
};
}, gamewaktu * 1000)
}

break

case 'koboi':
case 'cowboy': {
TsuCnn.shoot = TsuCnn.shoot || { musuh: [], shoot: [] }
if(/kiri/i.test(text)) {
    let kiri = [
      ["🤠", "・", "・", "・", "・"],
      ["・", "🤠", "・", "・", "・"],
      ["・", "・", "🤠", "・", "・"],
      ["・", "・", "・", "🤠", "・"],
      ["・", "・", "・", "・", "🤠"]
    ]
    if(TsuCnn.shoot.shoot.indexOf("🤠") == 0) {
      TsuCnn.shoot.shoot = kiri[0]
    } else if(TsuCnn.shoot.shoot.indexOf("🤠") == 1) {
      TsuCnn.shoot.shoot = kiri[0]
    } else if(TsuCnn.shoot.shoot.indexOf("🤠") == 2) {
      TsuCnn.shoot.shoot = kiri[1]
    } else if(TsuCnn.shoot.shoot.indexOf("🤠") == 3) {
      TsuCnn.shoot.shoot = kiri[2]
    } else if(TsuCnn.shoot.shoot.indexOf("🤠") == 4) {
      TsuCnn.shoot.shoot = kiri[3]
    }
    let teks = `🤠 Koboi Mengejar Penjahat 🥷\n\n`
      teks += `Wilayahmu:\n${TsuCnn.shoot.shoot.join(" ")}\n`
      teks += `Wilayah penjahat:\n${TsuCnn.shoot.musuh.join(" ")}\n`
      teks += `Contoh : ${prefix + command} kanan atau ${prefix + command} kiri untuk bergerak ke kanan/kiri dan ${prefix + command} shoot untuk Menembak`
    if(TsuCnn.shoot.musuh.indexOf("🥷") === TsuCnn.shoot.shoot.indexOf("🤠")) return reply(teks)
return reply(teks)
  } else if(/kanan/i.test(text)) {
    let kanan = [
      ["🤠", "・", "・", "・", "・"],
      ["・", "🤠", "・", "・", "・"],
      ["・", "・", "🤠", "・", "・"],
      ["・", "・", "・", "🤠", "・"],
      ["・", "・", "・", "・", "🤠"]
    ]
    if(TsuCnn.shoot.shoot.indexOf("🤠") == 0) {
      TsuCnn.shoot.shoot = kanan[1]
    } else if(TsuCnn.shoot.shoot.indexOf("🤠") == 1) {
      TsuCnn.shoot.shoot = kanan[2]
    } else if(TsuCnn.shoot.shoot.indexOf("🤠") == 2) {
      TsuCnn.shoot.shoot = kanan[3]
    } else if(TsuCnn.shoot.shoot.indexOf("🤠") == 3) {
      TsuCnn.shoot.shoot = kanan[4]
    } else if(TsuCnn.shoot.shoot.indexOf("🤠") == 4) {
      TsuCnn.shoot.shoot = kanan[4]
    }
    let teks = `🤠 Koboi Mengejar Penjahat 🥷\n\n`
      teks += `Wilayahmu:\n${TsuCnn.shoot.shoot.join(" ")}\n`
      teks += `Wilayah penjahat:\n${TsuCnn.shoot.musuh.join(" ")}\n`
      teks += `Contoh : ${prefix + command} kanan atau ${prefix + command} kiri untuk bergerak ke kanan/kiri dan ${prefix + command} shoot untuk Menembak`
    if(TsuCnn.shoot.musuh.indexOf("🥷") === TsuCnn.shoot.shoot.indexOf("🤠")) return reply(teks)
    return reply(teks)
  } else if(/shoot/i.test(text)) {
    if(TsuCnn.shoot.shoot.indexOf("🤠") == TsuCnn.shoot.musuh.indexOf("🥷")) {
      TsuCnn.shoot = {}
      TsuCnn.sendTextWithMentions(m.chat, `🎉 Selamat! kamu berhasil mengejar para penjahat! 🎉`, m)
    }
  } else {
   let randMusuh = [
      ["🥷", "・", "・", "・", "・"],
      ["・", "🥷", "・", "・", "・"],
      ["・", "・", "🥷", "・", "・"],
      ["・", "・", "・", "🥷", "・"],
      ["・", "・", "・", "・", "🥷"]
    ]
   let randAku = [
      ["🤠", "・", "・", "・", "・"],
      ["・", "🤠", "・", "・", "・"],
      ["・", "・", "🤠", "・", "・"],
      ["・", "・", "・", "🤠", "・"],
      ["・", "・", "・", "・", "🤠"]
    ]
    let musuh = pickRandom(randMusuh)
   let aku = pickRandom(randAku)
    TsuCnn.shoot.musuh = musuh
    TsuCnn.shoot.shoot = aku
    let teks = `🤠 Koboi Mengejar Penjahat 🥷\n\n`
      teks += `Wilayahmu:\n${TsuCnn.shoot.shoot.join(" ")}\n`
      teks += `Wilayah penjahat:\n${TsuCnn.shoot.musuh.join(" ")}\n`
      teks += `Contoh : ${prefix + command} kanan atau ${prefix + command} kiri untuk bergerak ke kanan/kiri dan ${prefix + command} shoot untuk Menembak`
    if(TsuCnn.shoot.musuh.indexOf("🥷") === TsuCnn.shoot.shoot.indexOf("🤠")) return reply(teks)
    return reply(teks)
  }
}
break

case 'casino': {
if (!m.isGroup) return m.reply(mess.group)
let buatall = 1
TsuCnn.casino = TsuCnn.casino ? TsuCnn.casino : {}
if (m.chat in TsuCnn.casino) return m.reply('Masih Ada Yang Melakukan Casino Disini, Tunggu Sampai Selesai!!')
else TsuCnn.casino[m.chat] = true
try {
let randomaku = `${Math.floor(Math.random() * 101)}`.trim()
let randomkamu = `${Math.floor(Math.random() * 81)}`.trim() //hehe Biar Susah Menang :v
let Aku = (randomaku * 1)
let Kamu = (randomkamu * 1)
let count = args[0]
count = count ? /all/i.test(count) ? Math.floor(db.data.users[m.sender].balance / buatall) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
count = Math.max(1, count)
if (args.length < 1) return m.reply(`${prefix}casino <jumlah>\n${prefix}casino 1000`)
if (db.data.users[m.sender].balance >= count * 1) {
db.data.users[m.sender].balance -= count * 1
if (Aku > Kamu) {
m.reply(`💰 Casino 💰\n*${pushname}:* ${Kamu} Point\n*${botname}:* ${Aku} Point\n\n*Kamu Kalah*\nKamu Kehilangan ${count} Balance`)
} else if (Aku < Kamu) {
db.data.users[m.sender].balance += count * 2
m.reply(`💰 Casino 💰\n*${pushname}:* ${Kamu} Point\n*${botname}:* ${Aku} Point\n\n*Kamu Kalah*\nKamu Mendapatkan ${count * 2} Balance`)
} else {
ldb.data.users[m.sender].balance += count * 1
m.reply(`💰 Casino 💰\n*${pushname}:* ${Kamu} Point\n*${botname}:* ${Aku} Point\n\n*Seri*\nKamu Mendapatkan ${count * 1} Balance`)
}
} else m.reply(`Balance Kamu Tidak Mencukupi Untuk Casino Silahkan *bermain game* Terlebih Dahulu!`)
} catch (e) {
console.log(e)
m.reply(mess.error)
} finally {
delete TsuCnn.casino[m.chat]
}
}
break

case "suit": {
if (!m.isGroup) return m.reply(mess.group)
if (Object.values(suit).find(v => v.id.startsWith('suit') && [v.penantang, v.ditantang].includes(m.sender))) return m.reply(`Selesaikan dulu suit mu yang sebelumnya`)
if (m.quoted || text) {
if (froms === botNumber) return m.reply(`Tidak bisa bermain suit dengan bot!`)
if (froms === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri!`)
if (Object.values(suit).find(v => v.id.startsWith('suit') && [v.penantang, v.ditantang].includes(froms))) return m.reply(`Orang yang kamu tantang sedang bermain suit bersama orang lain`)
let hadiah = randomNumber(2000, 3000)
let timeout = 60 * 1000
let id = 'suit_' + Date.now()

suit[id] = {
id: id,
penantang: m.sender,
ditantang: froms,
status: 'WAIT',
hadiah: hadiah,
chat: await TsuCnn.sendMessage(m.chat, {text: `*🎮 GAME SUIT 🎮*\n\n@${m.sender.split('@')[0]} menantang @${froms.split('@')[0]} untuk bermain suit\n\nKetik *Y atau N* untuk bermain\nY = menerima suit\nN = menolak suit\n\nHadiah : *$${hadiah}* balance`, contextInfo: {mentionedJid: [froms, m.sender]}}, {quoted: kalgans}),
timeout: timeout,
waktu: setTimeout(() => {
if (suit[id]) TsuCnn.sendMessage(m.chat, {text: `Waktu habis! @${froms.split("@")[0]} tidak merespon suit\nGame dibatalkan!`, contextInfo: {mentionedJid: [froms]}}, {quoted: suit[id].chat})
delete suit[id]
}, timeout)
}
} else m.reply('@tagtarget')
}
break

case 'slot': {
if (!m.isGroup) return m.reply(mess.group)
let hadiah = randomNumber(2000, 3000)
let emojis = ["😹", "🧢", "🗿"]
let a = Math.floor(Math.random() * emojis.length)
let b = Math.floor(Math.random() * emojis.length)
let c = Math.floor(Math.random() * emojis.length)
let x = [],
y = [],
z = []
for (let i = 0; i < 3; i++) {
x[i] = emojis[a]
a++
if (a == emojis.length) a = 0
}
for (let i = 0; i < 3; i++) {
y[i] = emojis[b]
b++
if (b == emojis.length) b = 0
}
for (let i = 0; i < 3; i++) {
z[i] = emojis[c]
c++
if (c == emojis.length) c = 0
}
let end
if (a == b && b == c) {
end = `JACKPOT! *$${hadiah} point*`
db.data.users[m.sender].balance += hadiah
} else if (a == b || a == c || b == c) {
end = `Hampir Beruntung! *+1 Limits*`
db.data.users[m.sender].limit += 1
} else {
end = `LOSE! *-$${hadiah}*`
if (hadiah > db.data.users[m.sender].balance) {
ldb.data.users[m.sender].balance = 0
} else {
db.data.users[m.sender].balance -= hadiah
}
}
let teks = `乂  *S L O T S*\n\n`
teks += `	[ ${x[0]} ${y[0]} ${z[0]} ]\n`
teks += `	[ ${x[1]} ${y[1]} ${z[1]} ]\n`
teks += `	[ ${x[2]} ${y[2]} ${z[2]} ]\n`
teks += `\n${end}`
m.reply(teks)
}
break
case 'tictactoe': case 'ttt': case 'ttc': case 'xox':
if (!m.isGroup) return m.reply(mess.group)
if (from in tictactoe) return m.reply(`Masih ada game yang blum selesai`)
if (!froms) return m.reply(`Kirim perintah *${command}* @tag atau reply pesan orangnya!`)
if (froms === botNumber) return m.reply(`Tidak bisa bermain dengan bot!`)
if (froms === sender) return m.reply(`Sad amat main ama diri sendiri`)
var hadiah = randomNumber(10, 20)
await m.reply(`@${sender.split('@')[0]} menantang @${froms.split('@')[0]} untuk bermain TicTacToe\n\n*Kirim (Y/N)* untuk bermain\n\nHadiah : ${hadiah} balance`)
tictactoe[from] = {
id: from,
status: null,
hadiah: hadiah,
penantang: sender,
ditantang: froms,
TicTacToe: ['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣']
}
break
case 'delttt': case 'delttc':
if (!m.isGroup) return m.reply(mess.group)
if (!(from in tictactoe)) return m.reply(`Tidak ada sesi game tictactoe di grup ini`)
if (isAdmins || isOwner) {
delete tictactoe[from];
m.reply(`Berhasil menghapus sesi tictactoe di grup ini\n\n-$500`)
} else if (tictactoe[from].penantang.includes(sender)) {
delete tictactoe[from];
m.reply(`Berhasil menghapus sesi tictactoe di grup ini\n\n-$500`)
} else if (tictactoe[from].ditantang.includes(sender)) {
delete tictactoe[from];
m.reply(`Berhasil menghapus sesi tictactoe di grup ini\n\n-$500`)
} else {
m.reply(`Anda tidak bisa menghapus sesi tictactoe karena bukan pemain!`)
}
break
// Other MMen
case 'ceknik':{
if (m.isGroup) return m.reply(mess.pribadi)
const ucword = (str = '') => {
return str.replace(/^([a-z])|\s+([a-z])/g, function(text) {
return text.toUpperCase();
})
}
if (!text) return reply('Input nik yang ingin kamu cek.')
if (isNaN(args[0])) return reply(`Contoh : ${prefix + command} 332004xxxxxxxxxx`)
if (args[0].toString().length !== 16) return reply('NIK harus 16 digit.')
let result = await fetch(`https://suryadev.vercel.app/api/ceknik?nik=${args[0]}`).then(response => response.json())
if (!result.status) return reply(result.message)
delete result.status;
delete result.creator;
delete result.message;
let resultTxt = '乂  *C E K - N I K*\n\n'
for (let key in result.data) resultTxt += `◦  ${ucword(key)} : ${result.data[key]}\n`
await replyj(resultTxt)
}
break

case 'changelog': {
replyj(`*> Hai ${pushname}*\n${changelogs(prefix)}`)
}
break

case 'asupan': {
if (limitnya < 1) return replyj(mess.limit)
if (!text) return replyj(`- List yang tersedia
> china
> indonesia
> japan
> korea
> malaysia
> thailand
> vietnam

*Contoh : ${prefix}${command} indonesia*`) 
const args = m.text.trim().split(/\s+/);
const cmdarg = args[1]?.toLowerCase();

if (cmdarg === "china") {
let url2 = `https://aemt.me/china`
asupanr(url2)
uselimit2()
}
else if (cmdarg === "indonesia") {
let url2 = `https://aemt.me/indonesia`
asupanr(url2)
uselimit2()
}
else if (cmdarg === "japan") {
let url2 = `https://aemt.me/japan`
asupanr(url2)
uselimit2()
}
else if (cmdarg === "korea") {
let url2 = `https://aemt.me/korea`
asupanr(url2)
uselimit2()
}
else if (cmdarg === "malaysia") {
let url2 = `https://aemt.me/malaysia`
asupanr(url2)
uselimit2()
}
else if (cmdarg === "thailand") {
let url2 = `https://aemt.me/thailand`
asupanr(url2)
uselimit2()
}
else if (cmdarg === "vietnam") {
let url2 = `https://aemt.me/vietnam`
asupanr(url2)
uselimit2()
}
}
break

case 'random': {
if (limitnya < 1) return replyj(mess.limit)
if (!text) return replyj(`- List command yang tersedia
> ass
> ecchi
> ero
> hentai
> maid
> marin-kitagwa
> milf
> mori-calliope
> oppai
> oral
> paizuri
> raiden-shogun
> selfies
> uniform
> waifu

*Contoh : ${prefix}${command} waifu*`) 
const args = m.text.trim().split(/\s+/);
const cmdarg1 = args[1]?.toLowerCase();
if (cmdarg1 === "maid") {
let anu = await fetch('https://api.waifu.im/search?maid')
let data = await anu.json()
let foto = data.images[0].url
data = data.images.map((v) => `*Signature:* ${v.signature}\n*Extension:* ${v.extension}\n*ID:* ${v.image_id}\n*Favorites:* ${v.favorites}\n*Color:* ${v.dominant_color}\n*Source:* ${v.source}\n*Artist:* ${v.artist}\n*Upload:* ${v.uploaded_at}\n*Like:* ${v.liked_at}\n*isNsfw:* ${v.is_nsfw}\n*Width:* ${v.width}\n*Height:* ${v.height}\n*Size:* ${v.byte_size}`)
TsuCnn.sendFile(m.chat, foto, 'anu.png', data, limituse)
uselimit2()
}
else if (cmdarg1 === "waifu") {
let anu = await fetch('https://api.waifu.im/search?waifu')
let data = await anu.json()
let foto = data.images[0].url
data = data.images.map((v) => `*Signature:* ${v.signature}\n*Extension:* ${v.extension}\n*ID:* ${v.image_id}\n*Favorites:* ${v.favorites}\n*Color:* ${v.dominant_color}\n*Source:* ${v.source}\n*Artist:* ${v.artist}\n*Upload:* ${v.uploaded_at}\n*Like:* ${v.liked_at}\n*isNsfw:* ${v.is_nsfw}\n*Width:* ${v.width}\n*Height:* ${v.height}\n*Size:* ${v.byte_size}`)
TsuCnn.sendFile(m.chat, foto, 'anu.png', data, limituse)
uselimit2()
}
else if (cmdarg1 === "marin-kitagawa") {
let anu = await fetch('https://api.waifu.im/search?marin-kitagawa')
let data = await anu.json()
let foto = data.images[0].url
data = data.images.map((v) => `*Signature:* ${v.signature}\n*Extension:* ${v.extension}\n*ID:* ${v.image_id}\n*Favorites:* ${v.favorites}\n*Color:* ${v.dominant_color}\n*Source:* ${v.source}\n*Artist:* ${v.artist}\n*Upload:* ${v.uploaded_at}\n*Like:* ${v.liked_at}\n*isNsfw:* ${v.is_nsfw}\n*Width:* ${v.width}\n*Height:* ${v.height}\n*Size:* ${v.byte_size}`)
TsuCnn.sendFile(m.chat, foto, 'anu.png', data, limituse)
uselimit2()
}
else if (cmdarg1 === "mori-calliope") {
let anu = await fetch('https://api.waifu.im/search?mori-calliope')
let data = await anu.json()
let foto = data.images[0].url
data = data.images.map((v) => `*Signature:* ${v.signature}\n*Extension:* ${v.extension}\n*ID:* ${v.image_id}\n*Favorites:* ${v.favorites}\n*Color:* ${v.dominant_color}\n*Source:* ${v.source}\n*Artist:* ${v.artist}\n*Upload:* ${v.uploaded_at}\n*Like:* ${v.liked_at}\n*isNsfw:* ${v.is_nsfw}\n*Width:* ${v.width}\n*Height:* ${v.height}\n*Size:* ${v.byte_size}`)
TsuCnn.sendFile(m.chat, foto, 'anu.png', data, limituse)
uselimit2()
}
else if (cmdarg1 === "raiden-shogun") {
let anu = await fetch('https://api.waifu.im/search?raiden-shogun')
let data = await anu.json()
let foto = data.images[0].url
data = data.images.map((v) => `*Signature:* ${v.signature}\n*Extension:* ${v.extension}\n*ID:* ${v.image_id}\n*Favorites:* ${v.favorites}\n*Color:* ${v.dominant_color}\n*Source:* ${v.source}\n*Artist:* ${v.artist}\n*Upload:* ${v.uploaded_at}\n*Like:* ${v.liked_at}\n*isNsfw:* ${v.is_nsfw}\n*Width:* ${v.width}\n*Height:* ${v.height}\n*Size:* ${v.byte_size}`)
TsuCnn.sendFile(m.chat, foto, 'anu.png', data, limituse)
uselimit2()
}
else if (cmdarg1 === "oppai") {
let anu = await fetch('https://api.waifu.im/search?oppai')
let data = await anu.json()
let foto = data.images[0].url
data = data.images.map((v) => `*Signature:* ${v.signature}\n*Extension:* ${v.extension}\n*ID:* ${v.image_id}\n*Favorites:* ${v.favorites}\n*Color:* ${v.dominant_color}\n*Source:* ${v.source}\n*Artist:* ${v.artist}\n*Upload:* ${v.uploaded_at}\n*Like:* ${v.liked_at}\n*isNsfw:* ${v.is_nsfw}\n*Width:* ${v.width}\n*Height:* ${v.height}\n*Size:* ${v.byte_size}`)
TsuCnn.sendFile(m.chat, foto, 'anu.png', data, limituse)
uselimit2()
}
else if (cmdarg1 === "selfies") {
let anu = await fetch('https://api.waifu.im/search?selfies')
let data = await anu.json()
let foto = data.images[0].url
data = data.images.map((v) => `*Signature:* ${v.signature}\n*Extension:* ${v.extension}\n*ID:* ${v.image_id}\n*Favorites:* ${v.favorites}\n*Color:* ${v.dominant_color}\n*Source:* ${v.source}\n*Artist:* ${v.artist}\n*Upload:* ${v.uploaded_at}\n*Like:* ${v.liked_at}\n*isNsfw:* ${v.is_nsfw}\n*Width:* ${v.width}\n*Height:* ${v.height}\n*Size:* ${v.byte_size}`)
TsuCnn.sendFile(m.chat, foto, 'anu.png', data, limituse)
uselimit2()
}
else if (cmdarg1 === "uniform") {
let anu = await fetch('https://api.waifu.im/search?uniform')
let data = await anu.json()
let foto = data.images[0].url
data = data.images.map((v) => `*Signature:* ${v.signature}\n*Extension:* ${v.extension}\n*ID:* ${v.image_id}\n*Favorites:* ${v.favorites}\n*Color:* ${v.dominant_color}\n*Source:* ${v.source}\n*Artist:* ${v.artist}\n*Upload:* ${v.uploaded_at}\n*Like:* ${v.liked_at}\n*isNsfw:* ${v.is_nsfw}\n*Width:* ${v.width}\n*Height:* ${v.height}\n*Size:* ${v.byte_size}`)
TsuCnn.sendFile(m.chat, foto, 'anu.png', data, limituse)
uselimit2()
}
else if (cmdarg1 === "ass") {
let anu = await fetch('https://api.waifu.im/search?ass')
let data = await anu.json()
let foto = data.images[0].url
data = data.images.map((v) => `*Signature:* ${v.signature}\n*Extension:* ${v.extension}\n*ID:* ${v.image_id}\n*Favorites:* ${v.favorites}\n*Color:* ${v.dominant_color}\n*Source:* ${v.source}\n*Artist:* ${v.artist}\n*Upload:* ${v.uploaded_at}\n*Like:* ${v.liked_at}\n*isNsfw:* ${v.is_nsfw}\n*Width:* ${v.width}\n*Height:* ${v.height}\n*Size:* ${v.byte_size}`)
TsuCnn.sendFile(m.chat, foto, 'anu.png', data, limituse)
uselimit2()
}
else if (cmdarg1 === "hentai") {
let anu = await fetch('https://api.waifu.im/search?hentai')
let data = await anu.json()
let foto = data.images[0].url
data = data.images.map((v) => `*Signature:* ${v.signature}\n*Extension:* ${v.extension}\n*ID:* ${v.image_id}\n*Favorites:* ${v.favorites}\n*Color:* ${v.dominant_color}\n*Source:* ${v.source}\n*Artist:* ${v.artist}\n*Upload:* ${v.uploaded_at}\n*Like:* ${v.liked_at}\n*isNsfw:* ${v.is_nsfw}\n*Width:* ${v.width}\n*Height:* ${v.height}\n*Size:* ${v.byte_size}`)
TsuCnn.sendFile(m.chat, foto, 'anu.png', data, limituse)
uselimit2()
}
else if (cmdarg1 === "milf") {
let anu = await fetch('https://api.waifu.im/search?milf')
let data = await anu.json()
let foto = data.images[0].url
data = data.images.map((v) => `*Signature:* ${v.signature}\n*Extension:* ${v.extension}\n*ID:* ${v.image_id}\n*Favorites:* ${v.favorites}\n*Color:* ${v.dominant_color}\n*Source:* ${v.source}\n*Artist:* ${v.artist}\n*Upload:* ${v.uploaded_at}\n*Like:* ${v.liked_at}\n*isNsfw:* ${v.is_nsfw}\n*Width:* ${v.width}\n*Height:* ${v.height}\n*Size:* ${v.byte_size}`)
TsuCnn.sendFile(m.chat, foto, 'anu.png', data, limituse)
uselimit2()
}
else if (cmdarg1 === "oral") {
let anu = await fetch('https://api.waifu.im/search?oral')
let data = await anu.json()
let foto = data.images[0].url
data = data.images.map((v) => `*Signature:* ${v.signature}\n*Extension:* ${v.extension}\n*ID:* ${v.image_id}\n*Favorites:* ${v.favorites}\n*Color:* ${v.dominant_color}\n*Source:* ${v.source}\n*Artist:* ${v.artist}\n*Upload:* ${v.uploaded_at}\n*Like:* ${v.liked_at}\n*isNsfw:* ${v.is_nsfw}\n*Width:* ${v.width}\n*Height:* ${v.height}\n*Size:* ${v.byte_size}`)
TsuCnn.sendFile(m.chat, foto, 'anu.png', data, limituse)
uselimit2()
}
else if (cmdarg1 === "paizuri") {
let anu = await fetch('https://api.waifu.im/search?paizuri')
let data = await anu.json()
let foto = data.images[0].url
data = data.images.map((v) => `*Signature:* ${v.signature}\n*Extension:* ${v.extension}\n*ID:* ${v.image_id}\n*Favorites:* ${v.favorites}\n*Color:* ${v.dominant_color}\n*Source:* ${v.source}\n*Artist:* ${v.artist}\n*Upload:* ${v.uploaded_at}\n*Like:* ${v.liked_at}\n*isNsfw:* ${v.is_nsfw}\n*Width:* ${v.width}\n*Height:* ${v.height}\n*Size:* ${v.byte_size}`)
TsuCnn.sendFile(m.chat, foto, 'anu.png', data, limituse)
uselimit2()
}
else if (cmdarg1 === "ecchi") {
let anu = await fetch('https://api.waifu.im/search?ecchi')
let data = await anu.json()
let foto = data.images[0].url
data = data.images.map((v) => `*Signature:* ${v.signature}\n*Extension:* ${v.extension}\n*ID:* ${v.image_id}\n*Favorites:* ${v.favorites}\n*Color:* ${v.dominant_color}\n*Source:* ${v.source}\n*Artist:* ${v.artist}\n*Upload:* ${v.uploaded_at}\n*Like:* ${v.liked_at}\n*isNsfw:* ${v.is_nsfw}\n*Width:* ${v.width}\n*Height:* ${v.height}\n*Size:* ${v.byte_size}`)
TsuCnn.sendFile(m.chat, foto, 'anu.png', data, limituse)
uselimit2()
}
else if (cmdarg1 === "ero") {
let anu = await fetch('https://api.waifu.im/search?ero')
let data = await anu.json()
let foto = data.images[0].url
data = data.images.map((v) => `*Signature:* ${v.signature}\n*Extension:* ${v.extension}\n*ID:* ${v.image_id}\n*Favorites:* ${v.favorites}\n*Color:* ${v.dominant_color}\n*Source:* ${v.source}\n*Artist:* ${v.artist}\n*Upload:* ${v.uploaded_at}\n*Like:* ${v.liked_at}\n*isNsfw:* ${v.is_nsfw}\n*Width:* ${v.width}\n*Height:* ${v.height}\n*Size:* ${v.byte_size}`)
TsuCnn.sendFile(m.chat, foto, 'anu.png', data, limituse)
uselimit2()
}
}
break

case 'idsaluran': case 'channelid': case 'chid': case 'idsaluran': case 'cekidsaluran': case 'saluranid': {
  if (!m.quoted) replyj('Reply undangan admin saluran kak')
  
  try {
    let quotedMessage = await m.getQuotedObj();
    let id = quotedMessage.msg.contextInfo.forwardedNewsletterMessageInfo;
    
    if (id) {
      await replyj(`Nama Channel: ${id.newsletterName}\nId Channel: ${id.newsletterJid}`);
    } else {
      replyj('Error kak, tidak ditemukan')
    }
  } catch (e) {
    replyj('Reply Udangan admin dari saluran kak') 
  }
}
break

case 'react': {
	if (!m.quoted) return reply('Balas Chatnya !') 
	if (text.length > 2) return reply('Cuma Untuk 1 Emoji!') 
	if (!text) return reply(`Contoh : ${prefix + command} 🗿`) 
TsuCnn.relayMessage(m.chat, { reactionMessage: {
key: {
 id: m.quoted.id,
 remoteJid: m.chat,
 fromMe: true
},
 text: `${text}`}}, { messageId: m.id })
 }
break
//=================================================//
default:
if (budy.startsWith('=>')) {
if (!isCreator) return false
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return reply(bang)}
try {
reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
reply(String(e))}}
if (budy.startsWith('>>')) {
if (!isCreator) return false
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
await reply(String(err))}}
if (budy.startsWith('$')) {
if(!isCreator) return false
exec(budy.slice(2), (err, stdout) => {
if(err) return reply(err)
if (stdout) return reply(stdout)})}
//=================================================//
if (isCmd && budy.toLowerCase() != undefined) {
if (from.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
TsuCnn.copyNForward(from, msgs[budy.toLowerCase()], true)}}
} catch (err) {
console.log(util.format(err))}}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
