/*CMD
  command: /40
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Enter your text.
  keyboard: 
  aliases: 
CMD*/

User.setProperty("qrtext", data.message)
Bot.runCommand("500")
