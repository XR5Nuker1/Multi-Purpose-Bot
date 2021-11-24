/*CMD
  command: Generate QR
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var ultraplan = User.getProperty("ultraplan")

if(!ultraplan){
   Bot.runCommand("/41")
}else{
  Bot.runCommand("/40")
}
