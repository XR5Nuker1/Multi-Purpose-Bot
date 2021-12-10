/*CMD
  command: /convert
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
  
  let to = arr[0];
User.setProperty("conver", to, "integer")
Bot.runCommand("/convertto")
}
