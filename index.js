const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '533806561:AAFaVI3T0vGvm_48YCyJiZr75OMKv-j2J6E'

const bot = new TelegramBot(TOKEN, {polling: true})

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, `2Привет, ${msg.from.first_name}! Я молчу `),
    bot.send_photo(chat_id=chat_id, photo='\Photos\1.png')
})

require('http').createServer().listen(process.env.PORT || 5000).on('request', function(req, res){
    res.end('')
})

var http = require("http");
setInterval(function()
     {
        http.get("https://whiteplaynovel.herokuapp.com/");
     }, 
     300000); // every 5 minutes (300000)
