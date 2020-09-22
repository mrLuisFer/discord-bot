const { MessageEmbed } = require('discord.js')

const msgRepo = () => {
	const repoEmbed = new MessageEmbed()
		.setTitle('Unete a Codear al repo😃')
		.setColor('#00b7c2')
		.setDescription('https://github.com/mrLuisFer/discord-bot')
		.setThumbnail(
			'https://www.globetesting.com/wp-content/uploads/2019/01/githublogo.png'
		)

	return repoEmbed
}
module.exports = msgRepo
