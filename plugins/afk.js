let handler = async (m, { text }) => {
  let user = global.DATABASE.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
  m.reply(`
${conn.getName(m.sender)} Esta AFK${text ? ': ' + text : ''}
`)
}
handler.help = ['afk (Razon)']
handler.tags = ['main']
handler.command = /^afk$/i
handler.premium = true
module.exports = handler
