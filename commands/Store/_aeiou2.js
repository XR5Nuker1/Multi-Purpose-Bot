/*CMD
  command: /aeiou2
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
Bot.runCommand("/payed1")
}else{
Bot.sendMessage("Wrong pin")
}
