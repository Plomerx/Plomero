const axios = require('axios')
let handler = async(m, { conn, text }) => {
let samu = await axios.get('https://meme-api.herokuapp.com/gimme/memesmexico')
            await conn.sendFile(m.chat, `${samu.data.url}`, '', `${samu.data.title}`, m)
  }
handler.help = ['meme']
handler.tags = ['anime']
handler.command = /^(meme)$/i
handler.premium = true
handler.fail = null
handler.exp = 0

module.exports = handler
