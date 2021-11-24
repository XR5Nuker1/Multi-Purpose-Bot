/*CMD
  command: Redeem
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Enter your premium code.
  keyboard: 
  aliases: 
CMD*/

if(message=="True"){
   User.setProperty("ultraplan", chat.chatid)
}else{
  Bot.sendMessage("Wrong code")}
