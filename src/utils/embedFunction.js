const Discord = require('discord.js')

function embedMsg(title, color, description) {
  const embed = new Discord.MessageEmbed()
    .setTitle(`${title}`)
    .setColor(`#${color}`)
    .setDescription(`${description}`)

  return
  msg.channel.send(embed)
}

module.exports = embedMsg