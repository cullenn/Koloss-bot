require("dotenv").config();
const Discord = require("discord.js");
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;
const channels = [
  "voted-suggestions",
  "classes",
  "items",
  "pvp",
  "clans",
  "misc"
];

bot.login(TOKEN);

bot.on("ready", () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on("message", msg => {
  if (channels.includes(msg.channel.name)) {
    msg.react("662386640185983027"); // Greentick
    msg.react("662386640253091850"); // Redtick
  }
});
