/*CMD
  command: /verifyUser
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: [Write this message to verify yourself.](https://telegra.ph/file/21a9908bc4faaeb5bb532.jpg)
  keyboard: 
  aliases: 
CMD*/

if(message=="C2r7omeyelmv6yv3n8sv6Q"){
User.setProperty("Captcha", chat.chatid)
   Bot.sendMessage("You are now verified to talk to admin")
}else{
  Bot.sendMessage("Wrong answer")}
