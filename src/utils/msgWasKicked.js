const { MessageEmbed } = require('discord.js')

const msgWasKicked = (msg) => {
	const kickedEmbed = new MessageEmbed()
		.setTitle(`${msg} fue desconectado🔌`)
		.setColor('#3b2e5a')
		.setThumbnail(
			'https://media.giphy.com/media/42D3CxaINsAFemFuId/giphy.gif3b2e5a'
		)

	return kickedEmbed
}
module.exports = msgWasKicked
