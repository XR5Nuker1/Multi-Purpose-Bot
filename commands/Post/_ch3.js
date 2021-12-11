/*CMD
  command: /ch3
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Post
  answer: 
  keyboard: 
  aliases: 
CMD*/

var True = User.getProperty("ultraplan")

if(!True){
   var buttons = [
    {title: "Upgrade Plan💠", command: "/plann" }
];

Bot.sendInlineKeyboard(buttons, "To Use Channel slot Upgrade plan");
}else{
  Bot.runCommand("/cha33")
}
