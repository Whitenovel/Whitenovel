const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '533806561:AAFaVI3T0vGvm_48YCyJiZr75OMKv-j2J6E'

const PHOTO1 = 'https://raw.githubusercontent.com/Whitenovel/Whitenovel/master/Photos/1.png' 
const PHOTO2 = 'https://raw.githubusercontent.com/Whitenovel/Whitenovel/master/Photos/2.jpg' 
const PHOTO3 = 'https://raw.githubusercontent.com/Whitenovel/Whitenovel/master/Photos/3.jpg' 
const PHOTO4 = 'https://raw.githubusercontent.com/Whitenovel/Whitenovel/master/Photos/4.jpg' 
const PHOTO5 = 'https://raw.githubusercontent.com/Whitenovel/Whitenovel/master/Photos/5.jpg' 

var Photos = [PHOTO1, PHOTO2, PHOTO3,PHOTO4,PHOTO5];

const bot = new TelegramBot(TOKEN, {polling: true})



bot.on('message', msg => {
    var rand = Photos[Math.floor(Math.random() * Photos.length)];
    bot.sendMessage(msg.chat.id, `8Привет, ${msg.from.first_name}! Я молчу `),
    bot.sendMessage(msg.chat.id, `6Привет, ${msg.from.first_name}! молчу опять `),
    bot.sendPhoto(msg.chat.id, photo=rand),
    bot.sendMessage(msg.chat.id, `3Привет, ${msg.from.first_name}! Это на всякий) `);

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
