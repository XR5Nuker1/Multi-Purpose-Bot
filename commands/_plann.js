/*CMD
  command: /plann
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: plan💠
CMD*/

var ultraplan = User.getProperty("ultraplan")

if(!ultraplan){
   var buttons = [
    {title: "Upgrade💠", command: "miui>" },
];

Bot.sendInlineKeyboard(buttons, "*PLAN*\n \n*Name*: [" + user.first_name + " " + user.last_name + "](tg://user?id=" + user.telegramid + ") \n*Username*: @" + user.username + "\n*TGram ID*: `" + user.telegramid + "` \n*Plan*: Free User \n*Price*: Free.\n*Features*\n \n>5 min Downtime\n>3 Paste bin slots\n \nUpgrade your plan to get more access.\n \nEvery update your plan id is reset. If your subscription is still active use code and redeem command made by admin");
}else{
  Bot.sendMessage("*PLAN*\n \n*Name*: [" + user.first_name + " " + user.last_name + "](tg://user?id=" + user.telegramid + ") \n*Username*: @" + user.username + "\n*TGram ID*: `" + user.telegramid + "` \n*Plan*: Ultra User \n*Price*: R5.\n*Features*\n \n>No Downtime\n>6 Paste bin slots\n \nPlan fully upgraded Thanks for supporting us.\n \nEvery update your plan id is reset. If your subscription is still active use code and redeem command made by admin")}
