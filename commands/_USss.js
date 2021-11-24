/*CMD
  command: /USss
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Bok
  keyboard: 
  aliases: 
CMD*/

User.setProperty("cn", data.message)

Bot.runCommand("data")
