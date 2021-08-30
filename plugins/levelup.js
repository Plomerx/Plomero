let levelling = require('../lib/levelling')

let handler = m => {
  let user = global.DATABASE.data.users[m.sender]
  if (!levelling.canLevelUp(user.level, user.exp, global.multiplier)) {
    let { min, xp, max } = levelling.xpRange(user.level, global.multiplier)
    throw `
Level *${user.level} (${user.exp - min}/${xp})*
Faltan *${max - user.exp}* para subir!
`.trim()
}
let before = user.level * 1
while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
        if (before !== user.level) {
          m.reply(`
¡Felicitaciones, has subido de nivel!
*${before}* -> *${user.level}*
use *.perfil* para verificar
	`.trim())
}
}

handler.help = ['levelup']
handler.tags = ['xp']

handler.command = /^levelup$/i
handler.premium = true
module.exports = handler