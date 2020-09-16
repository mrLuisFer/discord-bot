const { MessageEmbed } = require('discord.js')

const msgAvatar = () => {
	const embedAvatar = new MessageEmbed()
		.setTitle('Este es tu avatar')
		.setColor('#f37121')
		.setDescription(avatarUrl)
		.setThumbnail(avatarUrl)
		.setAuthor(`${msg.member.displayName}`, `${avatarUrl}`)
		.setFooter(`${msg.author.id}`)

	return embedAvatar
}

module.exports = msgAvatar