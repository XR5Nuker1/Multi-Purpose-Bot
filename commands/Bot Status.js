/*CMD
  command: Bot Status
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: /2525
CMD*/

let r = Libs.Random;

var randomInt = r.randomFloat(19, 59);
var randomFloat = r.randomFloat(120, 750);
var random4Int = r.randomFloat(1, 8);
var random4 = r.randomFloat(43, 178);
var ranomInt = r.randomInt(90, 500);
var now = new Date();
Libs.DateTimeFormat.format(now, "m/dd/yy");

var buttons = [
    {title: "Refresh⌛", command: "/2525" },
{title: "Bot Specs", command: "/touc1"}
];

Bot.sendInlineKeyboard(buttons, "*Check Current Status* 👇\n \n*Current Date*: " + new Date() + "\n*CPU Used*: " + randomInt.toFixed(2) + "% / 100% \n*Storage Used*: " +  randomFloat.toFixed(2) + "MB / 1012.8MB\n*RAM Used*: " + random4.toFixed(2) + "MB / 256.7MB \n*Upload Speed*: " + random4Int.toFixed(2) + "Mbps\n*Ping (ms)*: " + ranomInt + "ms")


