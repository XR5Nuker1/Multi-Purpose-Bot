/*CMD
  command: 900
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var urllink = User.getProperty("link")

var buttons = [
    {title: "Shorten URL", command: "/345" }
];

Bot.sendInlineKeyboard(buttons, "Do you want to shorten your link?\n \nURL: `" + urllink + "`", {is_reply: true});
