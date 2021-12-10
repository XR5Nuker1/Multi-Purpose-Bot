/*CMD
  command: /transfer2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: BANK
  answer: Please enter your reference.
  keyboard: 
  aliases: 
CMD*/

User.setProperty("ref", data.message)

Bot.runCommand("/transfer3")
