const Discord = require('discord.js')
const client = new Discord.Client()

// Env
require('dotenv').config()
const DISCORD_TOKEN = process.env.DISCORD_TOKEN

// Prefix
const { prefix_rules } = require('./prefix.json')
// Message
const msgGreet = require('./utils/msgGreet')

client.on('ready', () => {
	console.log(`bot in ${client.user.tag}`)
	client.user.setStatus('bot online')
	console.log(client.user.presence.status)
})

client.on('message', (msg) => {
	if (msg.content.toLowerCase().includes('hola')) {
		return msg.channel.send(msgGreet())
	}

	if (msg.content.toLowerCase() === `${prefix_rules}ping`) {
		return msg.reply('🏸pong')
	}

	if (msg.content.toLowerCase() === `${prefix_rules}repo`) {
		return msg.channel.send('Espera un minuto')
	}
})

client.login(DISCORD_TOKEN)
