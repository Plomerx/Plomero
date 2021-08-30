let fetch = require("node-fetch")
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn }) => {
  let res = await fetch(global.API('https://some-random-api.ml', '/animu/hug'))
  let json = await res.json()
  let stiker = await sticker(null, json.link, global.packname, global.author)
  if (stiker) return conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m
  })
  throw stiker.toString()
}
handler.help = ['hug = abrazo']
handler.tags = ['anime']
handler.command = /^(hug)$/i
handler.premium = true
module.exports = handler