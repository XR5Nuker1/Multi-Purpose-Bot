/*CMD
  command: /generatepin
  help: 
  need_reply: 
  auto_retry_time: 
  folder: BANK
  answer: 
  keyboard: 
  aliases: 
CMD*/

var mel = Libs.Random;
let boom = mel.randomInt(10000000, 99999999)
var css = User.getProperty("userpin")

if(!css){
User.setProperty("userpin", boom)
Bot.sendMessage("Your Pin code is: " + boom + " will be used for transactions")
}else{
Bot.sendMessage("Your pin is: " + css)
}
