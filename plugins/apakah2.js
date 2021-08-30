let handler = async (m, { conn, command, text }) => {
  conn.reply(m.chat, `
*Pregunta:* ${command} ${text}
*Respuesta:* ${pickRandom(['Si','Quizás sí', 'Quizás', 'Quizás no', 'No', 'De ninguna manera'])}
`.trim(), m, m.mentionedJid ? {
    contextInfo: {
      mentionedJid: m.mentionedJid
    }
  } : {})
}
handler.help = ['crees (pregunta)']
handler.tags = ['kerang']
handler.command = /^crees$/i
handler.premium = true
module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

