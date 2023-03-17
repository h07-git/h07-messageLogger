const Discord = require('discord.js');
const config = require('./config');
const channels = require('./channels');

const client = new Discord.Client();
const webhookClient = new Discord.WebhookClient(config.WEBHOOK_ID, config.WEBHOOK_TOKEN);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', (message) => {
  if (channels.isWhitelisted(message)) {
    const embed = createEmbed(message);
    webhookClient.send({
      embeds: [embed],
    });
  }
});

client.login(config.TOKEN);

function createEmbed(message) {
  return new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle(`${message.guild.name} - ${message.channel.name}`)
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setDescription(message.content)
    .setTimestamp();
}
