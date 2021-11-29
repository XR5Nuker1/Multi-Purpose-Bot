/*CMD
  command: Shop🛒
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Store
  answer: 
  keyboard: 
  aliases: 
CMD*/

var but = User.getProperty("userpin")
if(!but){
Bot.runCommand("/generatepin")
}else{
Bot.runCommand("/pinok")
}
