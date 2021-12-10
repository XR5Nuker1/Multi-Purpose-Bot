/*CMD
  command: /aeiou
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Store
  answer: Enter pin
  keyboard: 
  aliases: 
CMD*/

var usep = User.getProperty("userpin")

if(message==usep){
Bot.runCommand("/payed2")
}else{
Bot.sendMessage("Wrong pin")
}
