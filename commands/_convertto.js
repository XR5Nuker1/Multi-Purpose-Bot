/*CMD
  command: /convertto
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var bonne = User.getProperty("ultraplan")

if(!bonne){
Bot.runCommand("/convertto1")
}else{
Bot.runCommand("/convertto2")
}
