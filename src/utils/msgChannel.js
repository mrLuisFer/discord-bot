const { MessageEmbed } = require('discord.js')

const msgChannel = () => {
	const channelEmbed = new Discord.MessageEmbed()
		.setTitle(`El nombre del sevidor es: ${msg.guild.name}`)
		.addField(`No. Devs:`, `${msg.guild.memberCount}`)
		.addField(`Id:`, `${msg.guild.id}`)
		.addField('Region:', `${msg.guild.region}`)
		.setColor('#32e0c4')

	return channelEmbed
}

module.exports = msgChannel
