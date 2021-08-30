
let fetch = require('node-fetch')

let handler = async(m, { conn, args, command, usedPrefix }) => {
  fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/random.txt').then(res => res.text()).then(body => {
    let randomnime = body.split('\n')
    let randomnimex = randomnime[Math.floor(Math.random() * randomnime.length)]
    conn.sendFile(m.chat, randomnimex, '', 'Asi te queria encontrar guarro!! ', m)
  }).catch(() => {
    conn.reply(m.chat, ` !`, m)
  })
}

handler.help = ['anime']
handler.tags = ['anime']
handler.command = /^(anime)$/i
handler.premium = true

module.exports = handler
