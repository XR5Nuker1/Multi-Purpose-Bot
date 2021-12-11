/*CMD
  command: /cal
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(params){
  let arr = params.split(" ");
  let telegrid = arr[0]; 
let nn = arr[1]
var c = "+";
Bot.sendMessage(telegrid + c + nn)
}
