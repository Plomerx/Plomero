let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
  if (!text) throw `¡Ingrese el nombre!`
  let res = await fetch(global.API('https://api.jikan.moe', '/v3/search/character', { q: text }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  let { name, alternative_names, image_url } = json.results[0]
let charaingfo = `*Nombre:* ${name}
*Apodo:* ${alternative_names}`
  conn.sendFile(m.chat, image_url, '', charaingfo, m)
}
handler.help = ['character (nombre)']
handler.tags = ['anime']
handler.command = /^(chara|character)$/i
handler.premium = true
module.exports = handler