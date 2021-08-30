let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    if (isROwner) global.conn.bye = text
    else if (isOwner) conn.bye = text
    global.DATABASE._data.chats[m.chat].sBye = text
    m.reply('Bye establecido \n@user (Mention)')
  } else throw '¿Dónde está el texto?'
}
handler.help = ['setbye (texto)']
handler.tags = ['owner', 'group']

handler.command = /^setbye$/i
handler.premium = true
module.exports = handler

