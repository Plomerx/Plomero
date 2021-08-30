let handler = async (m, { conn, usedPrefix, command }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) throw `_*¡No hay votaciones en este grupo!*_\n\n*${usedPrefix}votacion [razón]* - para empezar a votar`
    let isVote = conn.vote[id][1].concat(conn.vote[id][2])
    const wasVote = isVote.includes(m.sender)
    if (wasVote) throw '¡Ya votaste!'
    if (/si/i.test(command)) {
        conn.vote[id][1].push(m.sender)
    } else if (/no/i.test(command)) {
        conn.vote[id][2].push(m.sender)
    }
    m.reply(`¡Hecho!\n\n*${usedPrefix}vervotos* - para comprobar el voto`)

}
handler.help = ['si = a favor', 'no = en contra']
handler.tags = ['vote']
handler.command = /^(si|no)$/i
handler.group = true
module.exports = handler