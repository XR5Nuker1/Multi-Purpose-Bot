/*CMD
  command: /start
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: This is the Official version of the bot. Try our BETA testing version of the bot: [Testing Version](t.me/XR5BETA_allpurposebot)
  keyboard: Modes, \nSettings, About, \nUser Panel, Talk to Admin
  aliases: main menu
CMD*/

var news = User.getProperty("newuser")


if(!params){
if(!news){
   User.setProperty("newuser", user.telegramid)
Bot.runCommand("/give")
}
Bot.sendMessage("_Loading The bot config⚙️_.....", {on_result: "/tsd"})
}else{
Bot.runCommand(params)
}
