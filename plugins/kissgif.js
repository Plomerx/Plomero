  
const axios = require('axios')

let handler = async(m, { conn, text }) => {
    new Promise((resolve, reject) => {
        axios.get(`https://nekos.life/api/v2/img/kiss`)
            .then((res) => {
                conn.sendFile(m.chat, res.data.url, '', '', m)
            })
            .catch(reject)
    })

}

handler.help = ['kissgif']
handler.tags = ['anime']
handler.command = /^kissgif$/i

handler.premium = true


module.exports = handler