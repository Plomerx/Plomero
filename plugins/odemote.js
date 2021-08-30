let handler = async (m, { conn, args }) => {
  let users = m.mentionedJid
  conn.groupDemoteAdmin(m.chat, users)
}
handler.help = ['degradar','miembro','v'].map(v => 'o' + v + ' @user')
handler.tags = ['owner']
handler.command = /^(odemote|omember|ov)$/i
handler.owner = true
handler.premium = true
handler.group = true
handler.botAdmin = true
handler.fail = null

module.exports = handler
