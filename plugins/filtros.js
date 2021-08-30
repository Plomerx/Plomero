//made by Anshul
const uploadImage = require('../lib/uploadImage')
const effects = ['gay', 'greyscale', 'invert', 'brightness', 'threshold', 'sepia', 'red', 'green', 'blue', 'blurple', 'pixelate', 'blur', 'wasted','triggered', 'glass','threshold','simpcard','lolice','horny']

let handler = async (m, { conn, usedPrefix, text }) => {
  let effect = text.trim().toLowerCase()
  if (!effects.includes(effect)) throw `
*Usar:* ${usedPrefix}filtro / fl <efecto>
*Ejemplo:* ${usedPrefix}filtro / fl invert
*Lista de Efectos:*
${effects.map(effect => `_> ${effect}_`).join('\n')}
`.trim()
  let q = m.quoted ? m.quoted : m
  let img = await q.download()
  let url = await uploadImage(img)
  let apiUrl = global.API('https://some-random-api.ml/canvas/', encodeURIComponent(effect), {
    avatar: url
  })
  try {
    await conn.sendFile(m.chat, apiUrl, 'image.png', null, m)
  } catch (e) {
  }
}

handler.help = ['filtro (efecto)']
handler.tags = ['fun']
handler.command = /^(filtro|fl)$/i
handler.premium = true
module.exports = handler 