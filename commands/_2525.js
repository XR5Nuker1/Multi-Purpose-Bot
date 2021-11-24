/*CMD
  command: /2525
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var randomInt = Libs.Random.randomInt(19, 59);
var randomFloat = Libs.Random.randomInt(120, 750);
var now = new Date();
Libs.DateTimeFormat.format(now, "m/dd/yy");
var random4Int = Libs.Random.randomInt(1, 8);
var random4 = Libs.Random.randomInt(43, 178);
var ranomInt = Libs.Random.randomInt(90, 500);
var buttons = [
    {title: "Refresh⌛", command: "/2525" }
];

Bot.sendInlineKeyboard(buttons, "Max Ping (ms): 500ms\nTotal Storage: 1011MB\nTotal RAM: 256MB \nMinimum Upload Speed: 2Mbps\nMax Upload Speed: 10 Mbps \n \n*Check Current Status* 👇\n \n*Current Date*: " + new Date() + "\n*CPU Used*: " + randomInt + "% / 100% \n*Storage Used*: " +  randomFloat + "MB / 1011MB\n*RAM Used*: " + random4 + "MB / 256MB \n*Upload Speed*: " + random4Int + "Mbps\n*Ping (ms)*: " + ranomInt + "ms")
