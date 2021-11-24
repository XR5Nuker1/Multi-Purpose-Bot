/*CMD
  command: /unsubscribe
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

User.setProperty("ultraplan",false)
Bot.sendMessage(user.first_name + " you have unsubscribed from our ultraplan, thanks for supporting and using our services")
