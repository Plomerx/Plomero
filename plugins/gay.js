let handler = async (m, { conn }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/gay', {
    avatar: await conn.getProfilePicture(who).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
  }), 'gay.png', 'Eres jot@ y lo sabes', m)
}

handler.help = ['gay']
handler.tags = ['fun']

handler.command = /^(gay)$/i
handler.premium = true
module.exports = handler
