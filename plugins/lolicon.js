let handler = async (m, { conn }) => {
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/lolice', {
      avatar: await conn.getProfilePicture(who).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
    }), 'lolicon.png', 'Un lolicon como tú merece la cárcel', m)
  }
  
  handler.help = ['lolicon']
  handler.tags = ['fun']
  
  handler.command = /^loli(con)?$/i
  handler.premium = true
  module.exports = handler
  