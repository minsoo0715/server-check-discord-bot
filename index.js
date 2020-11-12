const Discord = require('discord.js')
const client = new Discord.Client();
const data = require("./DataSet.json");
var request = require('request')
require('./DateFormat');



client.on('ready', () => {
    var channel = client.channels.cache.get(data.ID);
    
    request.get({
        url: data.URL
      }, function(error, response, body) {
          if(error) console.log(error);
          else channel.send('ServerStatus : ' + response.statusCode + '\nURL : '+data.URL +'\n' + new Date().format('MM-dd HH:mm:ss'))    
        }
      
      )

    var interval = setInterval (function () {
        // use the message's channel (TextChannel) to send a new message
        request.get({
            url: data.URL
          }, function(error, response, body) {
              if(error) console.log(error);
              else channel.send('ServerStatus : ' + response.statusCode + '\nURL : '+data.URL +'\n' + new Date().format('MM-dd HH:mm:ss'))    
            }
          
          )
         // add error handling here
    }, 1 * 30000); 
    
    
   
})

client.on('message', (msg) => {
    if (msg.content == 'ping') {
        msg.reply('Pong!');
    }
    if(msg.content == 'check') {
        client.channels.cache.get(data.ID).send('READY!!');
    }
    
})

client.login(data.token);