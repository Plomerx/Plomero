let qrcode = require("qrcode")

let handler  = async (m, { conn, text }) => {
  conn.sendFile(m.chat, await qrcode.toDataURL(text.slice(0, 2048), { scale: 8 }), 'qrcode.png', '¯\\_(ツ)_/¯', m)
}
handler.help = ['', 'code'].map(v => 'qr' + v + ' (texto)')
handler.tags = ['tools']
handler.command = /^qr(code)?$/i
handler.premium = true
handler.fail = null

module.exports = handler
