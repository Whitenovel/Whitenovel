const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '533806561:AAFaVI3T0vGvm_48YCyJiZr75OMKv-j2J6E'

const PHOTO1 = 'https://raw.githubusercontent.com/Whitenovel/Whitenovel/master/Photos/1.png' 
const PHOTO2 = 'https://raw.githubusercontent.com/Whitenovel/Whitenovel/master/Photos/2.jpg' 
const PHOTO3 = 'https://raw.githubusercontent.com/Whitenovel/Whitenovel/master/Photos/3.jpg' 
const PHOTO4 = 'https://raw.githubusercontent.com/Whitenovel/Whitenovel/master/Photos/4.jpg' 
const PHOTO5 = 'https://raw.githubusercontent.com/Whitenovel/Whitenovel/master/Photos/5.jpg' 

const AUDIO1 = 'https://raw.githubusercontent.com/Whitenovel/Whitenovel/master/Audio/1.mp3' 
const AUDIO2 = 'https://raw.githubusercontent.com/Whitenovel/Whitenovel/master/Audio/2.mp3' 
const AUDIO3 = 'https://raw.githubusercontent.com/Whitenovel/Whitenovel/master/Audio/3.mp3' 
const AUDIO4 = 'https://raw.githubusercontent.com/Whitenovel/Whitenovel/master/Audio/4.mp3' 
const AUDIO5 = 'https://raw.githubusercontent.com/Whitenovel/Whitenovel/master/Audio/5.mp3' 

var Photos = [PHOTO1, PHOTO2, PHOTO3,PHOTO4,PHOTO5];
var Audio = [AUDIO1, AUDIO2, AUDIO3,AUDIO4,AUDIO5];
var http = require("http");

const bot = new TelegramBot(TOKEN, {polling: true})



bot.on('message', msg => {
    

    setTimeout(function()
     {
        bot.sendMessage(msg.chat.id, `Momo `);
     }, 
     5000); 
    
})

require('http').createServer().listen(process.env.PORT || 5000).on('request', function(req, res){
    res.end('')
})


setInterval(function()
     {
        http.get("https://whiteplaynovel.herokuapp.com/");
     }, 
     30000); 




setInterval(function()
     {
        var randAudio = Audio[Math.floor(Math.random() * Audio.length)];
        bot.sendAudio(msg.chat.id, audio=randAudio);
     }, 
     80000); 


setInterval(function()
     {
        var randPhoto = Photos[Math.floor(Math.random() * Photos.length)];
        bot.sendPhoto(msg.chat.id, photo=randPhoto);
     }, 
     32000); 



    