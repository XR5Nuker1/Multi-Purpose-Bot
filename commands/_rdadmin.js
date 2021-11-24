/*CMD
  command: /rdadmin
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: F75utcltvlvti
  keyboard: 
  aliases: 
CMD*/

if(message=="True"){
   User.setProperty("ultraplan", chat.chatid)
User.setProperty("pstbin", chat.chatid)
}else{
  Bot.sendMessage("Wrong code")}
