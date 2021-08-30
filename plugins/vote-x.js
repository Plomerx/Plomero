let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) throw `_*¡No hay votaciones en este grupo!*_\n\n*${usedPrefix}votacion [razón]* - para empezar a votar`
    
    let [reason, upvote, devote] = conn.vote[id]
    let mentionedJid = [...upvote, ...devote]
    m.reply(
`*「 VOTOS 」*
*Razón:* ${reason}
*VOTOS A FAVOR*
_Total: ${upvote.length}_
${upvote.map(u => '@' + u.split('@')[0]).join('\n')}
*VOTOS EN CONTRA*
_Total: ${devote.length}_
${devote.map(u => '@' + u.split('@')[0]).join('\n')}
*${usedPrefix}borrarvotos* - para eliminar votos
`.trim(), false, { contextInfo: { mentionedJid } })
}
handler.help = ['vervotos']
handler.tags = ['vote']
handler.command = /^(vervotos|votos)$/i
handler.group = true
module.exports = handler