/*CMD
  command: /7778
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Enter text..
  keyboard: 
  aliases: 
CMD*/

let bonusCooldown = Libs.ResourcesLib.userRes("bonusCooldown");

// cooldown in minutes
let totalCooldown = 60*1; // 60*1 minutes = 60 seconds

function resetCooldown(){
   bonusCooldown.set(totalCooldown); 
}

function setupCooldown(){
  if(bonusCooldown.growth.isEnabled()){
     // already setupped
     return
  }
  
  bonusCooldown.growth.add({
    value: -1,  // just add negative value
    interval: 1, // -60 once at 1 minute
    min: 0
  });
}

setupCooldown();

if(bonusCooldown.value() > 0){
   var buttons = [
    {title: "Upgrade Plan💠", command: "/plan" }
];

Bot.sendInlineKeyboard(buttons, "Please wait: " + bonusCooldown.value() + " secs to use this command.");
   return
}
 
// can give bonus now
resetCooldown(); // need to reset cooldown

Bot.sendMessage("You can use command now");
// your other code here
//..
var qrChartUrl =
  "http://chart.apis.google.com/chart?cht=qr&chs=250x250&" +
  "chl=" +
  message +
  "&chld=H|0"

Api.sendPhoto({
  photo: qrChartUrl,
  caption: "Your or code has been generated.\n \n Message text: " + message + "\n \nThank You for using the bot",
  parse_mode: "Markdown"});

Bot.runCommand("QR Code Gen")

