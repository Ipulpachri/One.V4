let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(bank)).buffer(), `
*───────「 DONATE 」 ─────*
╭═══════════════
║╭─── [ DONASI ] ───
║│➸ _*Pulsa*_: 
║│- 628159917553
║│➸ _*Dana*_:
║│- 6285713041886
║│
║│➸ _*OWNER*_
║│- wa.me/6282160268332
║╰────────────
╰═══════════════
`.trim(), 'Donasi Bg Biar Bot On 24Jam', 'Owner Bot', '.owner')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
