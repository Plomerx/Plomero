let handler = m => {
    let msgs = global.DATABASE._data.msgs
    m.reply(`
*LISTA DE MENSAJES*

${Object.keys(msgs).map(v => '- ' + v).join('\n')}
`.trim())
}
handler.help = ['vn', 'm>msg', 'v->video', 'a->audio', 'i->img', 's->sticker'].map(v => 'list' + v)
handler.tags = ['database']
handler.command = /^list(vn|msg|video|audio|img|sticker|m|v|a|i|s)$/
handler.premium = true
module.exports = handler