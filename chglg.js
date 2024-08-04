const chalk = require('chalk')
const fs = require('fs')

global.changelogs = (prefix) => {
return `ini changelognya ya
- Menambah fitur akinator
- Mengubah Web api ke indonesia
- Memperbaiki ytmp3 yang tidak bekerja
- Memperbaiki ytmp4 yang tidak bekerja
- Memperbaiki fitur play
- Menambah fitur bible
- Mengubah Islam Menu menjadi Agama Menu
- Menambah fitur asupan
- Menambah fitur random
- Menambah fitur mora/moraai
- Memperbaiki beberapa fitur game yang tidak bekerja
⚎⚎⚍⚍⚍⚌⚌⚏⚏⚏⚏
Terakhir diperbarui: 31 Juli 2024, 18.12
⚏⚎⚏⚎⚎⚎⚍⚌⚌⚍⚌
*Rencana:* Owner bakal menambahkan fitur rpg di update yang akan mendatang *(Ini hanya rencana, mungkin bisa saja tidak jadi)*
⚌⚌⚍⚍⚎⚎⚏⚍⚌⚌⚌
*Note: Beberapa fitur mungkin masih belum bekerja. Anda bisa membantu owner dengan mereport fitur yang error dengan command (${prefix}report fitur yang error*).`}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})