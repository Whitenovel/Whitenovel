const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '533806561:AAFaVI3T0vGvm_48YCyJiZr75OMKv-j2J6E'

const bot = new TelegramBot(TOKEN, {polling: true})

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, `Hello from HEROKU, bot says: "HI,${msg.from.first_name}"`)
})

require('http').createServer().listen(process.env.PORT || 5000).on('request', function(req, res){
    res.end('')
})﻿