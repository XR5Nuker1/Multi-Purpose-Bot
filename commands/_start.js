/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: This is the Official version of the bot. Try our BETA testing version of the bot: [Testing Version](t.me/XR5BETA_allpurposebot)
  keyboard: APK download, URL Shortener, Domain Tools, \nQR Code Gen, Paste Bin🗑️, Create BB account, \nGame🎮 Mode, Currency Converter, Markdown to HTML, \nAbout, Shop🛒, Talk to Admin
  aliases: change mode, main menu
CMD*/

var news = User.getProperty("newuser")

if(!news){
   User.setProperty("newuser", user.telegramid)
Bot.runCommand("/give")
}
Api.sendPhoto({
  photo: "https://telegra.ph/file/974b0cf19d9bb3778ab32.jpg",
  caption:
    "Hello [" +
    user.first_name +
    " " +
    user.last_name +
    "](tg://user?id=" +
    user.telegramid +
    ") Welcome to Multi Purpose Bot. \n \nThis bot has 8 features: \n>QR Code Gen\n>URL Shortener\n>APK download\n>Currency Converter \n>Paste Bin\n>Bot.Business Account creator\n>Markdown to HTML\n>Domain Tools (For advanced users)\nThis bot is a merged version of 7 bots by XR5. \n Choose one of the Seven bot modes.",
  parse_mode: "Markdown"
})


