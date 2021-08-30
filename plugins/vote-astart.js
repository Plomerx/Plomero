let handler = async (m, { conn, text, usedPrefix }) => {
    conn.vote = conn.vote ? conn.vote : {}
    let id = m.chat
    if (id in conn.vote) {
        throw `_¡Todavía hay una votacion en este chat!_\n\n*${usedPrefix}borrarvotos* - para eliminar votos`
    }
    m.reply( `¡Comienza la votación!\n\n*${usedPrefix}si* - a favor\n*${usedPrefix}no* - en contra\n*${usedPrefix}vervotos* - para comprobar el voto\n*${usedPrefix}borrarvotos* - para eliminar votos`)
    conn.vote[id] = [ 
        text,
        [],
        []
    ]
}
handler.help = ['votacion (razón)']
handler.tags = ['vote']
handler.command = /^(votacion|votación)$/i
handler.premium = true
handler.group = true
module.exports = handler