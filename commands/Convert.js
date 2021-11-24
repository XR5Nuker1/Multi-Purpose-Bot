/*CMD
  command: Convert
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
   Bot.runCommand("20")
}else{
  Bot.runCommand("19")}
