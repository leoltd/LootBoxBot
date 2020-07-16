const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const mysql = require("mysql2");
client.login(config.token);

client.on('message', async message => {

});

/*const connection = mysql.createConnection({
  host: "db4free.net",
  user: "leoltduser",
  database: "leoltddb",
  password: "F6i9HbAS43ns"
});*/


const connection = mysql.createConnection({
  host: "192.168.0.10",
  user: "root",
  database: "mysql",
  password: ""
});

connection.connect(function(err){
    if (err) {
      return console.error("Ошибка: " + err.message);
    }
    else{
      console.log("Подключение к серверу MySQL успешно установлено");
    }
 });

const data = [409758519609262082, 1];
const sql = "INSERT INTO users(id, opened) VALUES(?, ?)";
 
connection.query(sql, data, function(err, results) {
    if(err) console.log(err);
    else console.log("Данные добавлены");
});