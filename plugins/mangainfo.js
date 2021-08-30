let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
  if (!text) throw `¡Ingrese el nombre!`
  let res = await fetch(global.API('https://api.jikan.moe', '/v3/search/manga', { q: text }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  let { title, synopsis, chapters, volumes, score, image_url } = json.results[0]
let mangaingfo = `*Titulo:* ${title}
*Capítulos:* ${chapters}
*Volúmenes:* ${volumes}
*Puntaje:* ${score}
*Sinopsis:* ${synopsis}`
  conn.sendFile(m.chat, image_url, '', mangaingfo, m)
}
handler.help = ['manga (nombre)']
handler.tags = ['anime']
handler.command = /^(manga)$/i
handler.premium = true
module.exports = handler