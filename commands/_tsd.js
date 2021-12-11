/*CMD
  command: /tsd
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

// You can inspect all result:
// Bot.inspect(options)
let msg_id = options.result.message_id
var ir =
  "Hello [" +
  user.first_name +
  " " +
  user.last_name +
  "](tg://user?id=" +
  user.telegramid +
  ") Welcome to Multi Purpose Bot. \n \nThis bot has 8 features: \n>QR Code Gen\n>URL Shortener\n>APK download\n>Currency Converter \n>Paste Bin\n>Bot.Business Account creator\n>Markdown to HTML\n>Domain Tools (For advanced users)\nThis bot is a merged version of 7 bots by XR5. \n Choose one of the Seven bot modes."
Bot.editMessage(ir, msg_id)
