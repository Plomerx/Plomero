let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) throw `_*¡No hay votaciones en este grupo!*_\n\n*${usedPrefix}votacion [razón]* - para empezar a votar`
    delete conn.vote[id]
    m.reply(`¡Hecho!`)

}
handler.help = ['borrarvotos']
handler.tags = ['vote']
handler.command = /^(borrar|b)votos$/i
handler.group = true
handler.premium = true
module.exports = handler