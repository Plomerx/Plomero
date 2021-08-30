const axios = require('axios')
let handler = async(m, { conn, text }) => {
let samu = await axios.get('https://nekos.life/api/v2/img/neko')
            await conn.sendFile(m.chat, `${samu.data.url}`, '', `${samu.data.title}`, m)
            
  }
handler.help = ['lolis']
handler.tags = ['anime']
handler.premium = true
handler.fail = null
handler.exp = 0
module.exports = handler
