const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
  if (!text) throw '¿Sin texto?'
  let stiker = await sticker(null, global.API('xteam', '/ttp', { file: '', text }), global.packname, global.author)
  if (stiker) return conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m
  })
  throw stiker.toString()
}
handler.help = ['ttp (texto)']
handler.tags = ['sticker']
handler.command = /^ttp$/i
handler.premium = true
handler.fail = null

module.exports = handler

