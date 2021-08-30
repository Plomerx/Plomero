let handler  = async (m, { conn, command, text }) => {
  let type = command.replace(/^set(menu|help|\?)/, '').toLowerCase()
  if (type == '') {
    if (text) {
      conn.menu = text
      conn.reply(m.chat, 'Menu berhasil diatur\n' + info, m)
    } else {
      conn.menu = {}
      conn.reply(m.chat, 'Menu direset', m)
    }
  } else {
    conn.menu = typeof conn.menu == 'object' ? conn.menu : {}
    if (text) {
      conn.menu[type] = text
      conn.reply(m.chat, 'Menu ' + type + ' berhasil diatur\n' + info, m)
    } else {
      delete conn.menu[type]
      conn.reply(m.chat, 'Menu ' + type + ' direset', m)
    }
  }
}
handler.help = ['', 'before','header','body','footer','after'].map(v => 'setmenu' + v + ' (texto)')
handler.tags = ['owner']
handler.command = /^set(menu|help|\?)(before|header|body|footer|after)?$/i
handler.owner = true
handler.fail = null

module.exports = handler

let info = `
Universal:
%% (%)
%p (Prefix)
%exp (Current Exp)
$maxexp (Exp To Level Up)
%totalexp (Total Exp)
%xp4levelup (Exp yang dibutuhkan untuk levelup)
%limit (Limit)
%name (Nombre)
%weton (Weton Hari ini)
%week (Día)
%date (Fecha)
%time (hora)
%uptime (Uptime Bot)
%rtotalreg (El número de usuarios registrados en la base de datos.)
%totalreg (El número de usuarios registrados en la base de datos.)
%npmname
%npmdesc
%version
%github

Bagian Menu Header & Footer:
%category (Kategori)

Bagian Menu Body:
%cmd (Command)
%islimit (Jika command di limit)
`.trim()
