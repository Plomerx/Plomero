let { Presence } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')

let handler  = async (m, { conn, args, usedPrefix, command }) => {
	if (!args || !args[0]) return conn.reply(m.chat, `Formato incorrecto!\n\n*Ejemplpo* : _${usedPrefix + command} Hola simi_`, m)
	let text = args.join` `
	fetch("https://api.simsimi.net/v1/?text=" + encodeURIComponent(text) + "&lang=es")
  .then(res => res.json())
  .then(batch => {
    conn.updatePresence(m.chat, Presence.composing)
  conn.reply(m.chat, `${batch.success}`, m)
  }) .catch(() => { conn.reply(m.chat, `_¡La función simi es errónea! Perdón :(_`, m) })
}
handler.help = ['simi'].map(v => v + ' (texto)')
handler.tags = ['fun']
handler.command = /^(simi)$/i
handler.premium = true
handler.fail = null
handler.exp = 750
module.exports = handler

