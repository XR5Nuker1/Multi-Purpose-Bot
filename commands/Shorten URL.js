/*CMD
  command: Shorten URL
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var ultraplan = User.getProperty("ultraplan")

if(!ultraplan){
   Bot.runCommand("22")
}else{
  Bot.runCommand("21")}
