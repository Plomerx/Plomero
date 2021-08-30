// https://github.com/Nobuyaki
// Jangan Hapus link githubnya bang :)

const fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw `Responder foto / enviar foto con título ${usedPrefix}adivina`
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`
  let img = await q.download()
  await m.reply('Buscando títulos de anime ...')
  let anime = `data:${mime};base64,${img.toString('base64')}`
  let response = await fetch('https://trace.moe/api/search', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ image: anime }),
  })
  if (!response.ok) throw 'Gambar tidak ditemukan!'
  let result = await response.json()
  let { is_adult, title, title_chinese, title_romaji, episode, season, similarity, filename, at, tokenthumb, anilist_id } = result.docs[0]
  let link = `https://media.trace.moe/video/${anilist_id}/${encodeURIComponent(filename)}?t=${at}&token=${tokenthumb}`
  let nobuyaki = `
${similarity < 0.89 ? 'Tengo poca confianza en esto' : ''}

❏ Titulo original : *${title}*
❏ Titulo entendible : *${title_romaji}*
❏ Semejanza : *${(similarity * 100).toFixed(1)}%*
❏ Episodio : *${episode.toString()}*
❏ Ecchi : *${is_adult ? 'Si' : 'No'}*
`.trim()
  conn.sendFile(m.chat, link, 'srcanime.mp4', `${nobuyaki}`, m)
}
handler.help = ['adivina (selecciona|envia)']
handler.tags = ['tools']
handler.command = /^(adivina)$/i
handler.premium = true
module.exports = handler