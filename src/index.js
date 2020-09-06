'use strict'
const Discord = require('discord.js')
const client = new Discord.Client()

// Env
require('dotenv').config()
const DISCORD_TOKEN = process.env.DISCORD_TOKEN

// Prefix
const { prefix_rules, prefix_emotions } = require('./prefix.json')

// Bot is Ready
client.on('ready', () => {
	console.log(`bot in ${client.user.tag}`)
	client.user.setPresence({
		status: 'online',
		game: {
			name: 'Developing a Facebook',
			type: 'PLAYING',
		},
	})
})

client.on('channelCreate', async () => {})

// Message
client.on('message', (msg) => {
	const lowerMsg = msg.content.toLowerCase().trim()

	const avatarUrl = msg.author.displayAvatarURL()

	// Static Messages
	const msgGreet = require('./utils/msgGreet')
	const { mensajes, aleatorio } = require('./utils/msgSentences')

	if (
		lowerMsg.includes('hola') ||
		lowerMsg.includes('hello') ||
		lowerMsg === 'hi'
	) {
		msg.channel.send(msgGreet())
	}

	// Rules
	if (lowerMsg === `${prefix_rules}ping`) {
		msg.reply('🏸pong')
	}

	// Rpository of the Bot
	if (lowerMsg === `${prefix_rules}repo`) {
		const repoEmbed = new Discord.MessageEmbed()
			.setTitle('Unete a Codear al repo😃')
			.setColor('#00b7c2')
			.setDescription('https://github.com/mrLuisFer/discord-bot')
			.setThumbnail(
				'https://www.globetesting.com/wp-content/uploads/2019/01/githublogo.png'
			)

		msg.channel.send(repoEmbed)
	}

	if (lowerMsg.includes(`${prefix_rules}pin`)) {
		msg.pin({ reason: 'important' })
	}

	if (lowerMsg === `${prefix_rules}avatar`) {
		const embedAvatar = new Discord.MessageEmbed()
			.setTitle('Este es tu avatar')
			.setColor('#f37121')
			.setDescription(avatarUrl)
			.setThumbnail(avatarUrl)
			.setAuthor(`${msg.member.displayName}`, `${avatarUrl}`)
			.setFooter(`${msg.author.id}`)

		msg.channel.send(embedAvatar)
	}

	if (lowerMsg === `${prefix_rules}channel`) {
		const channelEmbed = new Discord.MessageEmbed()
			.setTitle(`${msg.guild.name}`)
			.addField(`No. Devs:`, `${msg.guild.memberCount}`)
			.addField(`Id:`, `${msg.guild.id}`)
			.addField('Region:', `${msg.guild.region}`)
			.setColor('#32e0c4')

		msg.channel.send(channelEmbed)
	}

	// Emotions
	if (lowerMsg.startsWith(`${prefix_emotions}sad`)) {
		msg.react('😢')

		const sadEmbed = new Discord.MessageEmbed()
			.setTitle('The bot is sad...')
			.setThumbnail('https://media.giphy.com/media/dJYoOVAWf2QkU/giphy.gif')

		msg.channel.send(sadEmbed)
	}

	// Others
	if (
		lowerMsg.startsWith('hey') ||
		lowerMsg.includes('hey') ||
		lowerMsg.startsWith('random') ||
		lowerMsg.startsWith('oigan')
	) {
		return msg.channel.send(mensajes[aleatorio])
	}

	if (lowerMsg === 'f' || lowerMsg === 'efe') {
		const msgAttachment = new Discord.MessageAttachment(
			'https://media.giphy.com/media/cFLLnExjELn7a/giphy.gif'
		)

		msg.channel.send(msgAttachment)
	}

	if (lowerMsg.startsWith('nice')) {
		msg.reply('You are nice bb 7u7')
	}

	if (lowerMsg === 'nice bot') {
		msg.reply(`you are nice too UwU`)
	}
})

client.login(DISCORD_TOKEN)
