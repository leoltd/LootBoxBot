  const Discord = require('discord.js');
  const client = new Discord.Client();
  const config = require('./config.json');
  const fs = require("fs");
  let check = 0;
  client.login(config.token);

function time(){
  check = 0;
  console.log(check);
}
client.on('message', async message => {
  if(message.content === '/loot'){
      if (message.member.hasPermission("ADMINISTRATOR")){
          // Кому выпадает предмет
            let member = message.member;
          //ID канала
            let chan = "647823069729259520";
          //Получаем ID ролей
            let King = message.guild.roles.cache.find(r => r.name === "King of the Hill");
            let Rainbow = message.guild.roles.cache.find(r => r.name === "Color");
            let Old = message.guild.roles.cache.find(r => r.name === "𝓞𝓵𝓭 𝓓𝓻𝓮𝓪𝓶𝓣𝓮𝓪𝓶 𝓢𝓮𝓻𝓿𝓮𝓻");
            let Private = message.guild.roles.cache.find(r => r.name === "Private Chat");
          // Массивы призов 
            let rare = ["Color Сhange", "Plus 10%", "1000 Coins"];
            let epic = ["Rainbow nick", "Private Chat", "2000 Coins"];
            let legend = ["King of the Hill / 1 day", "OldDreamTeamServer", "5000 Coins"];
          // Генераторы рандома 
            let ran = Math.floor(Math.random()*101);
            let ran2 = Math.floor(Math.random()*3);
          // Проверка
            if(ran <= 7 && 0 <= ran){await message.channel.send({embed: {color: 15844367, description: "Legendary\n" + legend[ran2]}}); switch(ran2){
                case 0: client.channels.cache.get(chan).send('King').catch(console.error); member.roles.add(King).catch(console.error); check = 1; break;
                case 1: client.channels.cache.get(chan).send('Old').catch(console.error); member.roles.add(Old).catch(console.error); check = 1; break;
                case 2: client.channels.cache.get(chan).send('5000 Coins').catch(console.error); check = 1; break;
              }
            }
            else if(ran <= 32 && 7 <= ran){await message.channel.send({embed: {color: 12320855, description: "Epic\n" + epic[ran2]}}); switch(ran2){ 
                case 0: client.channels.cache.get(chan).send('Rainbow').catch(console.error); member.roles.add(Rainbow).catch(console.error); check = 1; break;
                case 1: client.channels.cache.get(chan).send('Private').catch(console.error); member.roles.add(Private).catch(console.error); check = 1; break;
                case 2: client.channels.cache.get(chan).send('2000 Coins').catch(console.error); check = 1; break;
              }
            }
            else if(ran <= 100 && 33 <= ran){await message.channel.send({embed: {color: 3447003, description: "Rare\n" + rare[ran2]}}); switch(ran2){
                case 0: client.channels.cache.get(chan).send('Color').catch(console.error); check = 1; break;
                case 1: client.channels.cache.get(chan).send('Plus').catch(console.error); check = 1; break;
                case 2: client.channels.cache.get(chan).send('1000 Coins').catch(console.error); check = 1; break;
              }
            }
            fs.appendFile("base.txt","Number:" + member + " " + check +"\n");
        // Дебаг
          console.log(check);
          }
        }
      });
function rand(min, max) {
  return Math.random() * (max - min) + min;
}
