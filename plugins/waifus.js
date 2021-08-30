const axios = require('axios')
let handler = async(m, { conn, text }) => {
let samu = await axios.get('https://nekos.life/api/v2/img/waifu')
            await conn.sendFile(m.chat, `${samu.data.url}`, '', `${samu.data.title}`, m)
  }
handler.help = ['waifu']
handler.tags = ['anime']
handler.command = /^(waifu)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler
