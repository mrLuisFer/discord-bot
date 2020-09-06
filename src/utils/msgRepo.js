const { MessageEmbed } = require('discord.js')

const msgRepo = () => {
	const msgEmbed = new MessageEmbed()
		.setColor('#00b7c2')
		.setTitle('Unete a Codear al repo😃')
		.setDescription('https://github.com/mrLuisFer/discord-bot')

	return msgEmbed
}

module.exports = msgRepo
