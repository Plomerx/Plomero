function handler(m) {
  // Ini cuma contoh, jgn di uncomment -_-
  // F this.sendContact(m.chat, '8096198364', 'Lucas', m)
  this.sendContact(m.chat, '8096198364', 'Lucas', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i
handler.premium = true
module.exports = handler
