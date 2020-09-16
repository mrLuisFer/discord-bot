'use strict'
const Discord = require('discord.js')
const client = new Discord.Client()

// Env
require('dotenv').config()
const DISCORD_TOKEN = process.env.DISCORD_TOKEN

// Prefix
const { prefix_rules } = require('./prefix.json')

// Bot is Ready
client.on('ready', () => {
	console.log(`bot in ${client.user.tag}`)
})

client.on('channelCreate', async () => {})

// Message
client.on('message', (msg) => {
	const lowerMsg = msg.content.toLowerCase().trim()

	const avatarUrl = msg.author.displayAvatarURL()

	// Static Messages
	const { mensajes, aleatorio } = require('./utils/msgSentences')
	const msgGreet = require('./utils/msgGreet')
	const msgRepo = require('./utils/msgRepo')
	const msgAvatar = require('./utils/msgAvatar')
	const msgChannel = require('./utils/msgChannel')

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
		msg.channel.send(msgRepo())
	}

	// Pining message
	if (lowerMsg.includes(`${prefix_rules}pin`)) {
		msg.pin({ reason: 'important' })
	}

	if (lowerMsg === `${prefix_rules}avatar`) {
		msg.channel.send(msgAvatar)
	}

	if (lowerMsg === `${prefix_rules}channel`) {
		msg.channel.send(msgChannel)
	}

	// Emotions
	if (lowerMsg.startsWith(`${prefix_rules}sad`)) {
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
