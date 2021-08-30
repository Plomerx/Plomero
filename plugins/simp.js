let handler = async (m, { conn }) => {
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/simpcard', {
      avatar: await conn.getProfilePicture(who).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
    }), 'simp.png', 'Eres tremend@ Simp', m)
  }
  
  handler.help = ['simp']
  handler.tags = ['fun']
  
  handler.command = /^(simp)$/i
  handler.premium = true
  module.exports = handler
  