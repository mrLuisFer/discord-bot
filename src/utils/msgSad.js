const { MessageEmbed } = require('discord.js')

const msgSad = () => {
	const sadEmbed = new MessageEmbed()
		.setTitle('The bot is sad...')
		.setThumbnail('https://media.giphy.com/media/dJYoOVAWf2QkU/giphy.gif')
		.setColor('#edc988')

	return sadEmbed
}

module.exports = msgSad
