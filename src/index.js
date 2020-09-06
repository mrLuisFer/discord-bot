'use strict'
const Discord = require('discord.js')
const client = new Discord.Client({

})

// Env
require('dotenv').config()
const DISCORD_TOKEN = process.env.DISCORD_TOKEN

// Prefix
const { prefix_rules, prefix_emotions } = require('./prefix.json')

// Messages Embed
const msgGreet = require('./utils/msgGreet')
const msgRepo = require('./utils/msgRepo')


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

// Message
client.on('message', (msg) => {
	const lowerMsg = msg.content.toLowerCase().trim()

	const avatarUrl = msg.author.displayAvatarURL()

	// Function Embed Messages
	function embedMsg(title, color, description) {
		const embed = new Discord.MessageEmbed()
			.setTitle(`${title}`)
			.setColor(`#${color}`)
			.setDescription(`${description}`)

		return msg.channel.send(embed)
	}

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

	if (lowerMsg === `${prefix_rules}repo`) {
		msg.channel.send(msgRepo())
	}

	if (lowerMsg === `${prefix_rules}avatar`) {
		embedMsg('Este es tu avatar', 'f37121', `${avatarUrl}`)
	}

	if (lowerMsg.includes(`${prefix_rules}pin`)) {
		msg.pin({ reason: 'important' })
	}

	if (lowerMsg.includes(`${prefix_rules}important`)) {

		msg.reply(msg.mentions.everyone)

	}

	// Emotions
	if (lowerMsg === `${prefix_emotions}sad`) {
		msg.channel.send('The bot is sad...')
		msg.react('😢')
	}

	// Others
	if (lowerMsg === 'f' || lowerMsg === 'efe') {
		const msgAttachment = new Discord.MessageAttachment(
			'https://media.todojujuy.com/adjuntos/227/imagenes/001/356/0001356752.png'
		)

		msg.channel.send(msgAttachment)
	}

	if (lowerMsg === 'nice') {
		msg.reply('You are nice bb 7u7')
	}

	if (lowerMsg === 'nice bot') {
		msg.reply(`you are nice too UwU`)
	}

	if (lowerMsg.includes('nopor') || lowerMsg.includes('porn') || lowerMsg === 'xxx') {
		embedMsg(
			'Aqui no se permite eso cerdo!',
			'c70039',
			'Retirate antes de que llame al FBI'
		)
	}

})

client.login(DISCORD_TOKEN)
