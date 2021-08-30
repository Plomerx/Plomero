let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => {
  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, limit, exp, lastclaim, registered, regTime, age, level, role } = global.db.data.users[who]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let username = conn.getName(who)
    let math = max - xp
    let prem = global.prems.includes(who.split`@`[0])
    let str = `
Nombre: ${username} ${registered ? '(' + name + ') ': ''}(@${who.replace(/@.+/, '')})${about ? '\nEstado: ' + about : ''}${registered ? '\nAños: ' + age : ''}
XP: total ${exp} (${exp - min} / ${xp}) 
[${max - exp} Restantes]
Nivel: ${level}
Role: *${role}*
Limit: ${limit}
Registrad@: ${registered ? 'Si (' + new Date(regTime) + ')': 'No'}
Premium: ${prem ? 'Si' : 'No'}${lastclaim > 0 ? '\nÚltimo reclamo: ' + new Date(lastclaim) : ''}
`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'pp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['perfil @user']
handler.tags = ['tools']
handler.command = /^perfil$/i
handler.premium = true
module.exports = handler

