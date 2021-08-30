let handler = function (m) {
  if (!m.quoted) throw false
  let { fromMe, id, isBaileys } = m.quoted
  if (!fromMe) throw false
  if (!isBaileys) throw 'El mensaje no fue enviado por un bot!'
  this.deleteMessage(m.chat, {
    fromMe,
    id,
    remoteJid: m.chat
  })
}
handler.help = ['del', 'delete']
handler.tags = ['group']

handler.command = /^del(ete)?$/i
handler.premium = true
module.exports = handler
