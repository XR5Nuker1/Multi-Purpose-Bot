/*CMD
  command: /transfer1
  help: 
  need_reply: true
  auto_retry_time: 
  folder: BANK
  answer: Please enter the Telegram id you want to send XR5Coins to.
  keyboard: 
  aliases: 
CMD*/

User.setProperty("TGramID", data.message)
Bot.runCommand("/transfer2")
