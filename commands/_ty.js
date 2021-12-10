/*CMD
  command: /ty
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
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
Bot.runCommand("/talkok")
}
