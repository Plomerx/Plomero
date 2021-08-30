let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
  if (!text) throw `¡Ingrese el nombre!`
  let res = await fetch(global.API('https://api.jikan.moe', '/v3/search/anime', { q: text }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  let { title, members, synopsis, episodes, rated, score, image_url, type, start_date, end_date } = json.results[0]
let animeingfo = `✨️ *Titulo:* ${title}
🎆️ *Episodios:* ${episodes}
➡️ *Fecha de inicio:* ${start_date}
🔚 *Fecha final:* ${end_date}
💬 *Tipo de Show:* ${type}
💌️ *Clasificación:* ${rated}
❤️ *Puntaje:* ${score}
👥 *Miembros:* ${members}
💚️ *Sinopsis:* ${synopsis}`
  conn.sendFile(m.chat, image_url, '', animeingfo, m)
}
handler.help = ['animeinfo (nombre)']
handler.tags = ['anime']
handler.command = /^(ai|animeinfo)$/i
handler.premium = true
module.exports = handler