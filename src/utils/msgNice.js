const { MessageEmbed } = require('discord.js')

const msgNice = (msg) => {
	const niceEmbed = new MessageEmbed()
		.setTitle(`🌟${msg.author.username} You're nice too UwU`)
		.setColor('#ff8e6e')
		.setThumbnail('https://media.giphy.com/media/10UUe8ZsLnaqwo/giphy.gif')
		.setFooter('Naaa mentira, me das asco')

	return niceEmbed
}

module.exports = msgNice
