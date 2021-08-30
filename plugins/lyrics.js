// Pngocok handal

let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  if (!text) throw 'Missing \'title\' query'
  let res = await fetch(global.API('https://scrap.terhambar.com', '/lirik', {
    word: text
  }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (json.error) throw json.error
  if (!json.result) throw json
  m.reply(`
${json.result.lirik}
`.trim())
}
handler.help = ['letra'].map(v => v + ' (cancion)')
handler.tags = ['internet']
handler.command = /^(letra|lyrics|lyric)$/i
handler.premium = true
module.exports = handler
