/*CMD
  command: /herokume6
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Paste Bin
  answer: Enter text. If you have an existing text in this bin , if you write another text your existing text will be overwritten.
  keyboard: 
  aliases: create/change 6
CMD*/

var ultra = User.getProperty("pstbin")

if(!ultra){
   var buttons = [
    {title: "Upgrade Plan💠", command: "/plann" }
];

Bot.sendInlineKeyboard(buttons, "To Use this Paste bin Upgrade plan");
}else{
User.setProperty("Paste bin6", data.message, "string");
Bot.sendMessage("Your text is saved success fully")}
