const Discord = require('discord.js')

const msgGreet = () => {
	const msgEmbed = new Discord.MessageEmbed()
		.setColor('#e94560')
		.setTitle('Hola estoy hackeando al FBI')
		.setDescription('Unete a codear')

	return msgEmbed
}

module.exports = msgGreet
