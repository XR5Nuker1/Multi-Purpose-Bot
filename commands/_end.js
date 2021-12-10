/*CMD
  command: /end
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let time = new Date()
let hours = time.getHours();
let minutes = time.getMinutes();
let date = time.getDate();
Libs.DateTimeFormat.format(date, "dd/m/yy");

let curTime = "Time: " + hours + ":" + minutes + " GMT-0 " + date;
msg = ""

var msg = "Good morning!\n" + curTime;

Bot.sendMessage(msg);
