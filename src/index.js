'use strict'
const { MessageAttachment, MessageEmbed, Client } = require('discord.js')
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

client.on('channelCreate', async () => {})

// Message
client.on('message', async (msg) => {
	if (!msg.content.startsWith(prefix_rules) || msg.author.bot) return

	// Arguments
	const lowerMsg = msg.content.toLowerCase().trim()
	const args = msg.content.slice(prefix_rules.length).trim().split(' ')
	const command = args.shift().toLowerCase()

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
							msg.channel.send(`${memb.displayName} fue kickeado`)
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

	if (lowerMsg.includes(`${prefix_rules}pin`)) {
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
		const sadEmbed = new MessageEmbed()
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
		const msgAttachment = new MessageAttachment(
			'https://media.giphy.com/media/cFLLnExjELn7a/giphy.gif'
		)

		msg.channel.send(msgAttachment)
	}

	if (lowerMsg === 'nice bot') {
		msg.reply(`you are nice too UwU`)
	}
})

client.login(DISCORD_TOKEN)
