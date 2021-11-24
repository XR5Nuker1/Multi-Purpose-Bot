/*CMD
  command: /replytoadmin
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Please enter message for admin.
  keyboard: 
  aliases: talk to admin
CMD*/

Bot.sendMessage("Checking verification status⚙️")

var Captcha = User.getProperty("Captcha")

if(!Captcha){
  var buttons = [
    {title: "Verify Myself", command: "/verifyUser" }
];

Bot.sendInlineKeyboard(buttons, "*Error 790 (Not Verified)*\n>Message was not sent to admin\n>Fix issue by verifying yourself");
}else{
// Automatic fix
var msg;

// Automatic fix
var msg;

var admin_chat = Bot.getProperty("admin_chat");

if(!admin_chat){
Bot.sendMessage("verified✅");
  Bot.sendMessage("Sorry. Bot does not admin now");
  return // exit
}

var user_link = Libs.commonLib.getLinkFor(user)

msg = "📥You received a message from: " + user.first_name + " (" + user_link +
     ") \n" +
      message +
     "\n/reply" + user.telegramid;


Bot.sendMessageToChatWithId(
  admin_chat, msg
);

/*
Api.forwardMessage({ 
 chat_id: admin_chat,
 message_id: request.message_id
});
*/
Bot.sendMessage("Verified✅")
Bot.sendMessage("[" + user.first_name + "](tg://user?id=" + user.telegramid + ") your message was sent to admin📤\n \n*Message Contents*: " + message);}


