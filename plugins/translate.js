const translate = require('translate-google-api')
const defaultLang = 'es'
const tld = 'cn'

let handler = async (m, { args, usedPrefix, command }) => {
    let er = `
Ejemplo:
${usedPrefix + command} <idioma> [texto]
${usedPrefix + command} en <tu mensaje>

Lista de idiomas admitidos: https://cloud.google.com/translate/docs/languages
`.trim()

    let lang = args[0]
    let text = args.slice(1).join(' ')
    if ((args[0] || '').length !== 2) {
        lang = defaultLang
        text = args.join(' ')
    }
    if (!text && m.quoted && m.quoted.text) text = m.quoted.text

    let result
    try {
        result = await translate(`${text}`, {
            tld,
            to: lang,
        })
    } catch (e) {
        result = await translate(`${text}`, {
            tld,
            to: defaultLang,
        })
        throw er
    } finally {
        m.reply(result[0])
    }

}
handler.help = ['translate'].map(v => v + ' (idioma) (texto)')
handler.tags = ['tools']
handler.command = /^(tr(anslate)?)$/i
handler.limit = true
handler.fail = null
handler.exp = 0
module.exports = handler
