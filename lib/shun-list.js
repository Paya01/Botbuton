const chalk = require('chalk')
const fs = require('fs')

const ctext = (text, style = 1) => {
  var abc = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var xyz = {
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  };
  var replacer = [];
  abc.map((v, i) =>
    replacer.push({
      original: v,
      convert: xyz[style].split('')[i]
    })
  );
  var str = text.split('');
  var output = [];
  str.map((v) => {
    if (v.toUpperCase() !== v.toLowerCase() && v === v.toUpperCase()) {
      // If the character is uppercase, push it unchanged
      output.push(v);
    } else {
      // If the character is lowercase or not a letter, find and convert it
      const find = replacer.find((x) => x.original == v.toLowerCase());
      find ? output.push(find.convert) : output.push(v);
    }
  });
  return output.join('');
};

global.menushun = (prefix) => {
return ctext(`┌└─────────────────≽
││ ɴᴀᴍᴀ ꜱᴀyᴀ ᴀᴅᴀʟᴀʜ *LynzzBotz*
││ ʙᴏᴛ ɪɴɪ ᴅᴀᴘᴀᴛ ᴅɪɢᴜɴᴀᴋᴀɴ sᴇʙᴀɢᴀɪ
││*ᴇᴅᴜᴋᴀsɪ ᴘᴇʟᴀᴊᴀʀᴀɴ*, *
││ᴜɴᴅᴜʜᴀɴ ᴍᴇᴅɪᴀ*, *ɢᴀᴍᴇ*, *ᴘᴇɴᴊᴀɢᴀ
││ɢʀᴜᴘ*, *ᴅᴀɴ ʟᴀɪɴɴʏᴀ*
││
││「 OPEN ENDORS IKLAN 」
││ • LINK GC / PRODUK DLL
││ *klik creator jika bermiat*
└──────────────────≽`)}

global.menuai = (prefix) => {
return ctext(`╔══《 *LIST AI* 》
┃ *○* ${prefix}ai
┃ *○* ${prefix}miku
┃ *○* ${prefix}luffy
┃ *○* ${prefix}openai
┃ *○* ${prefix}chatgpt
┃ *○* ${prefix}simi
┃ *○* ${prefix}text2img
┃ *○* ${prefix}blackbox
┃ *○* ${prefix}gemini
╚════

> LynzzDev Official`)}

global.menuanime = (prefix) => {
return ctext(`╔══《 *LIST ANME* 》
┃ *○* ${prefix}waifu
┃ *○* ${prefix}neko
╚════

> LynzzDev Official`)}

global.menudatabase = (prefix) => {
return ctext(`╔══《 *LIST DATABASE* 》
┃ *○* Kosong Wak
╚════

> LynzzDev Official`)}

global.menudownload = (prefix) => {
return ctext(`╔══《 *LIST DOWNLOAD* 》
┃ *○* ${prefix}ytmp4
┃ *○* ${prefix}ytmp3
┃ *○* ${prefix}tiktok
┃ *○* ${prefix}instagram
┃ *○* ${prefix}spotify
╚════

> LynzzDev Official`)}

global.menugame = (prefix) => {
return ctext(`╔══《 *LIST GAME* 》
┃ *○* ${prefix}apakah
┃ *○* ${prefix}kapankah
┃ *○* ${prefix}bisakah
┃ *○* ${prefix}bagaimanakah
┃ *○* ${prefix}rate
┃ *○* ${prefix}gantengcek
┃ *○* ${prefix}cantikcek
┃ *○* ${prefix}gaycek
┃ *○* ${prefix}sangecek
╚════

> LynzzDev Official`)}

global.menugroup = (prefix) => {
return ctext(`╔══《 *LIST GROUP* 》
┃ *○* ${prefix}antilink
┃ *○* ${prefix}welcome
┃ *○* ${prefix}gc close/open
┃ *○* ${prefix}getcontact
┃ *○* ${prefix}tagall
┃ *○* ${prefix}hidetag
┃ *○* ${prefix}kick
┃ *○* ${prefix}add
┃ *○* ${prefix}linkgc
┃ *○* ${prefix}resetlinkgc
┃ *○* ${prefix}totag
┃ *○* ${prefix}promote
┃ *○* ${prefix}demote
╚════

> LynzzDev Official`)}

global.menuother = (prefix) => {
return ctext(`╔══《 *LIST OTHER* 》
┃ *○* ${prefix}owner
┃ *○* ${prefix}sc
┃ *○* ${prefix}limit
┃ *○* ${prefix}carbon
┃ *○* ${prefix}afk
╚════

> LynzzDev Official`)}

global.menuowner = (prefix) => {
return ctext(`╔══《 *LIST OWNER* 》
┃ *○* ${prefix}resetlimit
┃ *○* ${prefix}addlimit
┃ *○* ${prefix}pushkontak
┃ *○* ${prefix}pushkontak2
┃ *○* ${prefix}getidgc
┃ *○* ${prefix}join
┃ *○* ${prefix}leave
┃ *○* ${prefix}addgc
┃ *○* ${prefix}delgc
┃ *○* ${prefix}backup
┃ *○* ${prefix}getcase
┃ *○* ${prefix}autoread
┃ *○* ${prefix}autobio
┃ *○* ${prefix}public
┃ *○* ${prefix}self
┃ *○* ${prefix}addprem
┃ *○* ${prefix}listprem
┃ *○* ${prefix}bcgroup
┃ *○* ${prefix}restart
┃ *○* ${prefix}addcase
┃ *○* ${prefix}delcase
╚════

> LynzzDev Official`)}

global.menusearch = (prefix) => {
return ctext(`╔══《 *LIST SEARCH* 》
┃ *○* ${prefix}pin
┃ *○* ${prefix}spotify
┃ *○* ${prefix}play
╚════

> LynzzDev Official`)}

global.menustickanim = (prefix) => {
return ctext(`╔══《 *LIST STIKER* 》
- ${prefix}kill
- ${prefix}pat
- ${prefix}lick
- ${prefix}kiss
- ${prefix}yeet
- ${prefix}bonk
- ${prefix}wink
- ${prefix}poke
- ${prefix}nom
- ${prefix}slap
- ${prefix}smile
- ${prefix}wave
- ${prefix}blush
- ${prefix}smugh
- ${prefix}glomp
- ${prefix}happy
- ${prefix}dance
- ${prefix}cringe
- ${prefix}highfive
- ${prefix}handhold
╚═════《 *LIST SEARCH* 》

> LynzzDev Official`)}

global.menutools = (prefix) => {
return ctext(`╔══《 *LIST TOOLS* 》
- ${prefix}clonebot
- ${prefix}hd
- ${prefix}toimg
- ${prefix}toaud
- ${prefix}tomp3
- ${prefix}tovn
- ${prefix}tourl
- ${prefix}shortlink
- ${prefix}sticker
- ${prefix}qc
- ${prefix}smeme
- ${prefix}wm
- ${prefix}lirik
- ${prefix}gitclone
╚═════《 *LIST TOOLS* 》

> LynzzDev Official`)}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})