let { spawn }  = require('child_process');
let handler  = async (m, { conn }) => {
  if (!process.send) throw 'Dont: node main.js\nDo: node index.js'
  if (global.conn.user.jid == conn.user.jid) {
    await m.reply('Restableciendo el bot ... \nEspere aproximadamente 1 minuto')
    await global.DATABASE.save()
    process.send('reset')
  } else throw '_eeeeeiiittsssss..._'
}
handler.help = ['debounce' + (process.send ? '' : ' (No funciona)')]
handler.tags = ['host']
handler.command = /^debounce$/i
handler.owner = true
handler.premium = true
module.exports = handler

