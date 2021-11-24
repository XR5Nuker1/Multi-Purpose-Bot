/*CMD
  command: 67onSuccess
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

var link = User.getProperty("link")
let prms = { disable_web_page_preview: true };
//Automatic fix
var msg;

msg = user.first_name + ", *Your link has been shortened*\n \n*Your Long link*: `" + link + "`\n \n*Your shortened link*: `" + content + "`";

var buttons = [
{title: "Open link in Browser🌍", url: content},
{title: "Share link📤", url: "https://telegram.me/share/url?url=" + content}
];

Bot.sendInlineKeyboard(buttons, msg, prms);;

