let fetch = require('node-fetch')
//plugin by Samu330

let handler  = async (m, { conn, text }) => {
if (!text) return conn.reply(m.chat, 'No hay texto para buscar imagen', m)
let url = await fetch('https://api.fdci.se/sosmed/rep.php?gambar=' + encodeURIComponent(text))
//let url = await fetch('https://api.fdci.se/sosmed/rep.php?gambar=' + encodeURIComponent(text))
let samu = await url.json()
let erest = samu[Math.floor(Math.random() * samu.length)]
            await conn.sendFile(m.chat, erest, m)
}
handler.help = ['imagen'].map(v => v + ' (titulo)')
handler.tags = ['internet']
handler.command = /^imagen?$/i
handler.premium = true
handler.fail = null
module.exports = handler
