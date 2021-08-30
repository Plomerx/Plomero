let handler = async (m, { conn, command, text }) => {
  conn.reply(m.chat, `
*Pregunta:* ${command} ${text}
*respuesta:* ${Math.floor(Math.random() * 100)} ${pickRandom(['segundos ',' minutos ',' horas ',' días ',' semanas ',' meses ',' años ',' décadas ',' siglos '])} 
`.trim(), m, m.mentionedJid ? {
  contextInfo: {
    mentionedJid: m.mentionedJid
  }
} : {})
}
handler.help = ['', 'kah'].map(v => 'kapan' + v + ' (pregunta)')
handler.tags = ['kerang']
handler.command = /^kapan(kah)?$/i
handler.premium = true
module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

