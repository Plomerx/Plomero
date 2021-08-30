const { createHash } = require('crypto')
let handler = async function (m, { args }) {
  if (!args[0]) throw 'Número de serie kosong'
  let user = global.DATABASE._data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) throw 'Número de serie incorrecto'
  user.registered = false
  m.reply(`¡lo logró señor lo logro!`)
}
handler.help = ['', 'ister'].map(v => 'unreg' + v + ' (numero serieal)')
handler.tags = ['exp']

handler.command = /^unreg(ister)?$/i
handler.register = true
handler.premium = true
module.exports = handler

