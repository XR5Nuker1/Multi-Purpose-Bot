/*CMD
  command: /prepst
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Post
  answer: 
  keyboard: 
  aliases: 
CMD*/

var momo = User.getProperty("ultraplan")
var ert = User.getProperty("cha3")
var we = User.getProperty("cha1")

if(!momo){
var buttons = [
    {title: "Upgrade Plan💠", command: "/plann" }
];

Bot.sendInlineKeyboard(buttons, "To Use Channel slot Upgrade plan");
}else{
var tyy =[
{ title: "Channel " + ert, command: "/cha3" },
  { title: "Channel "  + we, command: "/cha4" }
];
Bot.editInlineKeyboard(tyy)
}
