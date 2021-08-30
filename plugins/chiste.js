let handler  = async (m, { conn }) => {
    conn.reply(m.chat,`"${pickRandom(global.bucin)}”`, m)
  }
  handler.help = ['chistes']
  handler.tags = ['chiste']
  handler.command = /^chiste(s)$/i
  handler.premium = true
  module.exports = handler
  
  function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
  }
  
  // https://jalantikus,com/tips/kata-kata-bucin/
  global,bucin = [

"Fuera de servicio idiota"
 
]