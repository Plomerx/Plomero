const axios = require('axios')
const { MessageType } = require('@adiwajshing/baileys')
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
let handler = async(m, { conn, text, usedPrefix }) => {
    if (!text) return conn.reply(m.chat, 'Ingrese el título nuevamente !\n\nEjemplos de uso: ' + usedPrefix + 'joox perfecto', m)
    axios.get(`https://mnazria.herokuapp.com/api/jooxnich?search=` + text)
        .then((res) => {
            conn.reply(m.chat, 'Este proceso lleva algo de tiempo !', m)
            conn.sendFile(m.chat, res.data.result.mp3Url, res.data.result.msong + '.mp3', `
            *Título:* ${res.data.result.msong}
            *Tamaño del archivo:* ${res.data.result.size320}
            `.trim(), m, false, { asDocument: true })
        })
}
handler.help = ['joox'].map(v => v + ' <cancion>')
handler.tags = ['Descargar']
handler.command = /^(joox)$/i
handler.premium = true

module.exports = handler