let handler = async (m, { conn, args }) => {
  let users = m.mentionedJid
  conn.groupMakeAdmin(m.chat, users)
}
handler.help = ['promote','admin','^'].map(v => 'o' + v + ' @user')
handler.tags = ['owner']
handler.command = /^(opromote|oadmin|o\^)$/i
handler.owner = true
handler.group = true

handler.fail = null

module.exports = handler
