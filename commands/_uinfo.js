/*CMD
  command: /uinfo
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: user info
CMD*/


// You can inspect all result:
// Bot.inspect(options)
var n = Libs.commonLib.getNameFor(user)
var mre = "*Version 1.3.9*\n*Bot Info*\n \nℹ️*Name*: [Multi Purpose Robot](t.me/XR5_allpurposebot)\n🆔*Bot ID*: 2094665347\n💳*Username*: `@XR5_allpurposebot`\n \n*User info*\n \nℹ️*First Name*: " + user.first_name +  "\nℹ️*Last Name*: " + user.last_name + "\n*💳ID*: `" + user.telegramid + "`\n👩‍🚒*Username*: " + n + "\n📈*Position*: User\n \n*Programing*\n \n⚙️*Language*: Bot JavaScript (BJS)\n📶*Hosted On*: [Bot.Bussines](https://play.google.com/store/apps/details?id=bb.app.com.bots.business)\n📮*Libs used(BB Only)*:\n Common Lib\n[Date and time Format Lib](https://help.bots.business/libs/datetimeformat-lib)\n[Currency Quote Lib(in-built)](https://help.bots.business/libs/currencyquote)\n[Random Lib](https://help.bots.business/libs/random)\n[Resources Lib](https://help.bots.business/libs/resourceslib)\n \n*Other info*\n \n👩‍🚒*Creator*: [Λⓨⓔⓝⓣⓘⓦⓔ](t.me/ironcloneX)\n📣*Bot Channel*: [XR5 Bot Updates](https://t.me/joinchat/ckV139ZcOeA3ZjJk)\n🤖*Other bots*: [XR5 Bot List](https://t.me/joinchat/E9smPOL_NT9VmMTU0)";
let prms = { disable_web_page_preview: true } 
let msg_id = options.result.message_id;
Bot.editMessage(mre, msg_id, prms);

