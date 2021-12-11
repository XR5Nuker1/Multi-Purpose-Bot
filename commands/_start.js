/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var hur = User.getProperty("allowed")

if(!hur){
Bot.runCommand("/join")
}else{
Bot.runCommand("/start3")
}
