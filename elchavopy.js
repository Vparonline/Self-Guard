const Discord = require('discord.js-selfbot')
const Client = require('discord.js-selfbot')
const client = new Discord.Client()
const set = require('./Internal/elchavopyy.json');
/////////////////////////////////////ROL DELETED////////////////////////////////////////////////////////////////////////////////////
client.on("roleDelete", async (Lubluaghaujlwm) => {
    await Lubluaghaujlwm.guild.fetchAuditLogs({
        type: "ROLE_DELETE"
    }).then(async (Kevtshuajxyuas) => {
    let  Kevkho = Kevtshuajxyuas.entries.first()
    let Kuazaubntsuab = Kevkho.executor
    if (Date.now() - Kevkho.createdTimestamp > 10000 || set.nobodybaşedemez.includes(Kuazaubntsuab.id) ) return;
    anasınısik(Kevkho.executor.id, "ban");
   await Lubluaghaujlwm.guild.members.ban(Kuazaubntsuab.id, {
     })
   })
});
//////////////////////////////////////ŞAMAR ZAMANI :YUM://////////////////////////////////////////////////////////////
const yt = ["ADMINISTRATOR", "MANAGE_ROLES", "MANAGE_CHANNELS", "MANAGE_GUILD", "BAN_MEMBERS", "KICK_MEMBERS", "MANAGE_NICKNAMES", "MANAGE_EMOJIS", "MANAGE_WEBHOOKS"];
function anasınısik(user, tur) {
  let Kevkho = client.guilds.cache.get(set.GuildId).members.cache.get(user);
  if (!Kevkho) return; 
  if (tur == "ban") return;
};

client.
login(process.env.token)
.then(() => console.log("[User Token] User Token connected!"))
.catch(() => console.log("[User Token] User Token can't connected!"));
