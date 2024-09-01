const fs = require('fs')
const chalk = require('chalk')
//=================================================//
// System
global.baileys = require('@whiskeysockets/baileys')
global.usePairingCode = true
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'luhungch' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.owner = ['6285664221805'] // ubah aja pake nomor lu, Jika mau nambah ['628xxx','628xxx']
global.ownerno1 = '6285664221805'
global.botname = 'Tsumuri-Md' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'Tsusession' //Gausah Juga
global.idchannel = '120363295629217013@newsletter'
global.linkgc = 'https://chat.whatsapp.com/FnKiKzEHjs8J9d1F5akV5D'
global.gcbuyer = "-"
global.thumbnail = `https://i.ibb.co.com/QmsxnsJ/Rezz.png`
global.thumbnail2 = `https://i.ibb.co.com/G3tLg7J/logo-ts23-CB8-DBAA.png`
global.autobio = false // AutoBio
global.autoread = false // ReadChat 
global.autoreadsw = false
global.Ghost = '`'
global.versibot = 'V 2.0.0'
global.packname = 'Tsumuri'
global.author = 'Md'
global.skizo = "REREZ HOSTING"
global.wm = "Tsumuri-Md"
//=================================================//
global.onlypc = false
global.onlygc = false
//=================================================//
//cpanel
global.domain = "-"
global.apikey = "-"
global.capikey = "-"
global.egg = "15"
global.loc = "1"

//Send Pay
global.dana = "085664221805"
global.ovo = "-"
global.gopay = "085664221805"
global.qris = "-"

//limit, balance & rpg
global.limitawal = 20
global.balanceawal = 15000
global.rpg = {
darahawal: 100,
besiawal: 15,
goldawal: 10,
emeraldawal: 5,
umpanawal: 5,
potionawal: 1
}

global.wlcm = []
global.wlcmm = []

global.delaypushkontak = 5500
global.delayjpm = 5500

// DATABASE GAME
global.family100 = {};
global.suit = {};
global.tictactoe = {};
global.petakbom = {};
global.kuis = {};
global.siapakahaku = {};
global.asahotak = {};
global.susunkata = {};
global.caklontong = {};
global.tebaklirik = {};
global.tebaklagu = {};
global.tebakgambar = {};
global.tebakkimia = {};
global.tebakkata = {};
global.tebakkalimat = {};
global.tebakbendera = {};
global.tebakanime = {};
global.kuismath = {};
global.gamewaktu = 60

// CUMAN SIMBOL MENU UBAH AJA SESUKA KALIAN
global.atas = '┏━━━━━━━━━━━━━━━━'
global.tengah = '┣━━━━━━━━━━━━━━━━'
global.bawah = '┗━━━━━━━━━━━━━━━━'
global.garis = '┃'
//mess
global.mess = {
    premium: ('ᴀᴋꜱᴇꜱ ᴅɪ ᴛᴏʟᴀᴋ! ᴋʜᴜꜱᴜꜱ ᴘʀᴇᴍɪᴜᴍ!'),
    done: ('sᴇʟᴇsᴀɪ ᴋᴀᴋ'),
    owner: ('ᴀᴋꜱᴇꜱ ᴅɪ ᴛᴏʟᴀᴋ! ᴋʜᴜꜱᴜꜱ ᴏᴡɴᴇʀ!'),
    wait: ('ᴘʀosᴇs...!'),
    group: 'κнusus ԍʀouᴘ cнᴀт!',
    pribadi: 'κнusus ᴘʀɪᴠᴀᴛᴇ cнᴀт!',
    admin: 'κнusus ᴀᴅмιɴ ԍʀouᴘ!',
    botAdmin: 'ʙoт нᴀʀus ᴀᴅмιɴ!',
    linkvalid: 'ʟιɴκ тᴀuтᴀɴ тιᴅᴀκ vᴀʟιᴅ!', 
    error: 'ᴇʀoʀ тᴇʀנᴀᴅι κᴇsᴀʟᴀнᴀɴ!',
    limit: `ʟιмιт κᴀмu suᴅᴀн нᴀʙιs!\nκᴇтικ .ʙuʏʟιмιт uɴтuκ мᴇмʙᴇʟι ʟιмιт`,
    regis: (`κᴀмu ʙᴇʟoм тᴇʀᴅᴀғтᴀʀ\nsιʟᴀнκᴀɴ ᴅᴀғтᴀʀ ᴅᴇɴԍᴀɴ cᴀʀᴀ .ᴅᴀғтᴀʀ`),
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
