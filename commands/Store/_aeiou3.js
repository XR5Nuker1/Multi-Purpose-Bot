/*CMD
  command: /aeiou3
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Store
  answer: Enter pin
  keyboard: 
  aliases: 
CMD*/

var crip = User.getProperty("userpin")

if(message==crip){
Bot.runCommand("/payed0")

}else{
  Bot.sendMessage("Wrong Pin")
}
