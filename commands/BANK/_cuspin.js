/*CMD
  command: /cuspin
  help: 
  need_reply: true
  auto_retry_time: 
  folder: BANK
  answer: Please enter your new pin
  keyboard: 
  aliases: 
CMD*/

User.setProperty("userpin", data.message)

Bot.sendMessage("Your new Pin is: " + message)
