/*CMD
  command: Transfer
  help: 
  need_reply: true
  auto_retry_time: 
  folder: BANK
  answer: Please enter your account
  keyboard: 
  aliases: 
CMD*/

User.setProperty("Sendmoney", data.message)
Bot.runCommand("/transfer1")
