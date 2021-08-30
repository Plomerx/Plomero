let handler = async (m, { conn, args }) => {
  let group = m.chat
  if (/^[0-9]{5,16}-[0-9]+@g\.us$/.test(args[0])) group = args[0]
  if (!/^[0-9]{5,16}-[0-9]+@g\.us$/.test(group)) throw 'Hanya bisa dibuka di grup'
  let groupMetadata = await conn.groupMetadata(group)
  if (!groupMetadata) throw 'Los metadatos del grupo no están definidos :\\'
  if (!'L@s participantes' in groupMetadata) throw 'L@s participantes no están definid@s :('
  let me = groupMetadata.participants.find(user => user.jid === conn.user.jid)
  if (!me) throw 'No estoy en ese grupo :('
  if (me.isAdmin !== true) throw 'No soy un administrador T_T'
  m.reply('https://chat.whatsapp.com/' + await conn.groupInviteCode(group))
}
handler.help = ['linkgroup']
handler.tags = ['group']
handler.command = /^link(gro?up)?$/i
handler.premium = true
handler.fail = null
module.exports = handler

