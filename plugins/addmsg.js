let { WAMessageProto } = require('@adiwajshing/baileys')
let handler = async (m, { command, usedPrefix, text }) => {
    let M = WAMessageProto.WebMessageInfo
    let which = command.replace(/add/i, '')
    if (!m.quoted) throw 'Reply Pesan!'
    if (!text) throw `Usa *${usedPrefix}list${which}* para ver la lista`
    let msgs = global.DATABASE._data.msgs
    if (text in msgs) throw `'${text}' se ha registrado en la lista de mensajes`
    msgs[text] = M.fromObject(await m.getQuotedObj()).toJSON()
    m.reply(`Mensaje agregado exitosamente en la lista de mensajes como '${text}'
    
Accede con ${usedPrefix}get${which} ${text}`)
}
handler.help = ['vn', 'm>msg', 'v->video', 'a->audio', 'i->img', 's->sticker'].map(v => 'add' + v + ' (texto)')
handler.tags = ['database']
handler.command = /^add(vn|msg|video|audio|img|sticker|m|v|a|i|s)$/
handler.premium = true

module.exports = handler