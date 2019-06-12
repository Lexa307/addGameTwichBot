const tmi = require('tmi.js');
const fs = require('fs');
var logger = fs.createWriteStream('log.txt', {
    flags: 'a' // 'a' means appending (old data will be preserved)
  })
  
const opts = {
  identity: {
    username: "LexaMetel",
    password: "###"
  },
  channels: [
    "viksolov777"
  ]
};


const client = new tmi.client(opts);

client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);
client.connect();

function onMessageHandler (target, context, msg, self) {
  if (self) { return; } // Ignore messages from the bot

  //const commandName = msg.trim();
    console.log(msg);
  
  if (msg.indexOf('!addgame')!=-1) {
    let args = msg.split(' ');
    console.log(args);
    if(args[1]){
        logger.write(args[1]+'\n');
        client.say(target, `You added to gamelist ${args[1]}`);
    }else{
        client.say(target, `Write game correctly! use: !writegame [name Of game] ${args[1]}`);
    }
    
    
    }
}
function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}