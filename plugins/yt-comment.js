let handler = async (m, { conn, text }) => {
  if (!text) throw 'No Text'
  conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/youtube-comment', {
    avatar: await conn.getProfilePicture(m.sender).catch(_ => ''),
    comment: text,
    username: conn.getName(m.sender)
  }), 'yt-comment.png', 'Aqui esta tu comentario', m)
}

handler.help = ['ytcomment (comentario)']
handler.tags = ['nulis']

handler.command = /^(ytcomment)$/i
handler.premium = true
module.exports = handler
