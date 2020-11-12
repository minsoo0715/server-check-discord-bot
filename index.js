const Discord = require('discord.js')
const client = new Discord.Client();
const data = require("./DataSet.json");
var request = require('request')

function check() {
    request.get({
        url: data.URL
      }, function(error, response, body) {

        try{
          if(error) stat = "꺼짐";
          else if(response.statusCode == 200) {
              console.log(response.statusMessage);
              stat = "정상"
          }else {
              stat= "오류 발생"
          }
        }catch(e) {
            stat = "오류 발생"
        }finally{
            channel.send('ServerStatus : ' + stat + '\nURL : '+data.URL +'\n' + moment().format('MM-DD HH:mm:ss'))    
        }

        }
      
      )
}


client.on('ready', () => {
    var channel = client.channels.cache.get(data.ID);
    var stat;
    
     check();
    var interval = setInterval (check(),  1 * 30000); 
    
    
   
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