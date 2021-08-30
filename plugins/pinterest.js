let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
  let res = await fetch(global.API('https://fdciabdul.tech', '/api/pinterest', {
    keyword : encodeURI(text)
  }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  let pint = json[Math.floor(Math.random() * json.length)];
  conn.sendFile(m.chat, pint, '', `
*Resultado de búsqueda*
${text}
`.trim(), m)
}
handler.help = ['pinterest (nombre)']
handler.tags = ['internet']
handler.command = /^pint(erest)?$/i
handler.premium = true
module.exports = handler