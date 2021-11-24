/*CMD
  command: /verifythisuser
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/


   User.setProperty("version", chat.chatid)
Bot.sendMessage("You have been verified to use the bot")
