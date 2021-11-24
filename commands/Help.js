/*CMD
  command: Help
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var user_name = 
Libs.commonLib.getNameFor(user)
Bot.sendMessage("Welcome to Bot Help, User " + user.telegramid + " (" + user_name + ") \n \n1. Send me a link for example: https://github.com \n2. Do not send me 't.me' links \n3. Admin will ban you if you misuse the Bot with any warning.\n4. Report bug or issue at @musicsupport122bot\n \nHelp made by: _null_")
