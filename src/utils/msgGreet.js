const { MessageEmbed } = require('discord.js')

const msgGreet = () => {
	const msgEmbed = new MessageEmbed()
		.setColor('#e94560')
		.setTitle('Hola estoy hackeando la Nasa')
		.setDescription('Unete a codear')

	return msgEmbed
}

module.exports = msgGreet
