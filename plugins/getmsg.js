let handler = async (m, { conn, command, usedPrefix, text }) => {
    let which = command.replace(/get/i, '')
    if (!text) throw `Usar *${usedPrefix}list${which}* para ver la lista`
    let msgs = global.DATABASE.data.msgs
    if (!(text in msgs)) throw `'${text}' no incluido en la lista de mensajes`
    let _m = conn.serializeM(JSON.parse(JSON.stringify(msgs[text]), (_, v) => {
        if (
            v !== null &&
            typeof v === 'object' &&
            'type' in v &&
            v.type === 'Buffer' &&
            'data' in v &&
            Array.isArray(v.data)) {
            return Buffer.from(v.data)
        }
        return v
    }))
    // m.reply(`[debug]\n${require('util').format(_m)}`)
    await _m.copyNForward(m.chat, true)
}
handler.help = ['vn', 'm>msg', 'v->video', 'a->audio', 'i->img', 's->sticker'].map(v => 'get' + v + ' (texto)')
handler.tags = ['database']
handler.command = /^get(vn|msg|video|audio|img|sticker|m|v|a|i|s)$/
handler.premium = true
module.exports = handler