let fetch = require("node-fetch")
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn }) => {
  let res = await fetch(global.API('https://some-random-api.ml', '/img/dog'))
  let json = await res.json()
  let stiker = await sticker(null, json.link, global.packname, global.author)
  if (stiker) return conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m
  })
  throw stiker.toString()
}
handler.help = ['dog']
handler.tags = ['animal']
handler.command = /^(dog)$/i
handler.premium = true
module.exports = handler