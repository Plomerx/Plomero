let handler = async (m, { conn }) => {
  return false
}
handler.help = [''].map(v => v + ' <>')
handler.tags = ['']
handler.command = /^(.{65536})$/i
handler.premium = true
handler.fail = null
handler.exp = 0

module.exports = handler

