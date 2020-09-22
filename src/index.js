'use strict'
const { MessageAttachment, Client } = require('discord.js')
const client = new Client()

// Env
require('dotenv').config()
const DISCORD_TOKEN = process.env.DISCORD_TOKEN

// Prefix
const { prefix_rules } = require('./prefix.json')

// Bot is Ready
client.on('ready', () => {
	console.log(`bot in ${client.user.tag}`)
})

// Static Messages
const { mensajes, aleatorio } = require('./utils/msgSentences')
const msgGreet = require('./utils/msgGreet')
const msgRepo = require('./utils/msgRepo')
const msgAvatar = require('./utils/msgAvatar')
const msgChannel = require('./utils/msgChannel')
const msgSad = require('./utils/msgSad')
const msgNice = require('./utils/msgNice')
const msgWasKicked = require('./utils/msgWasKicked')

// Message
client.on('message', (msg) => {
	if (msg.author.bot) return

	// Arguments
	const lowerMsg = msg.content.toLowerCase().trim()

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

	if (lowerMsg.startsWith(`${prefix_rules}kick`)) {
		if (
			msg.member.hasPermission([
				'BAN_MEMBERS',
				'ADMINNISTRATOR',
				'KICK_MEMBERS',
			])
		) {
			const member = msg.mentions.members.first()

			if (member) {
				try {
					member
						.kick()
						.then((memb) => {
							msg.channel.send(msgWasKicked(memb.displayName))
						})
						.catch(() => {
							msg.channel.send('Failed for some reason')
						})
				} catch {
					msg.channel.send('Algo fallo y no se por que :L')
				}
			} else {
				msg.channel.send('Coloca un usuario valido')
			}
		} else {
			msg.channel.send('No tienes permiso para kickear')
		}
	}

	// Rpository of the Bot
	if (lowerMsg === `${prefix_rules}repo`) {
		msg.channel.send(msgRepo())
	}

	if (lowerMsg.includes(`${prefix_rules}pinned`)) {
		msg.pin({ reason: 'important' })
	}

	if (lowerMsg === `${prefix_rules}avatar`) {
		msg.channel.send(msgAvatar(msg))
	}

	if (lowerMsg === `${prefix_rules}channel`) {
		msg.channel.send(msgChannel(msg))
	}

	// Emotions lul
	if (lowerMsg.startsWith(`${prefix_rules}sad`)) {
		msg.react('😢')
		msg.channel.send(msgSad())
	}

	// Others
	if (lowerMsg.startsWith(`${prefix_rules}random`)) {
		msg.channel.send(mensajes[aleatorio])
	}

	if (lowerMsg === 'f' || lowerMsg === 'efe') {
		const msgAttachment = new MessageAttachment(
			'https://media.giphy.com/media/cFLLnExjELn7a/giphy.gif'
		)
		msg.channel.send(msgAttachment)
	}

	if (lowerMsg === 'nice bot') {
		msg.channel.send(msgNice(msg))
	}
})

client.login(DISCORD_TOKEN)
