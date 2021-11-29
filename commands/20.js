/*CMD
  command: 20
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
Please input amount.
For example: 76
  ANSWER
  keyboard: 
  aliases: 
CMD*/

let bonusCooldown = Libs.ResourcesLib.userRes("bonusCooldown");

// cooldown in minutes
let totalCooldown = 60*5; // 60*5 minutes = 300 seconds

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
{title: "Main menu", command: "Currency Converter" },
{title: "Upgrade Plan💠", command: "/plann"}
];

Bot.sendInlineKeyboard(buttons, "Please wait: " + bonusCooldown.value() + " secs to use this command. Upgrade plan to have no downtime.");
   return
}
 
// can give bonus now
resetCooldown(); // need to reset cooldown

Bot.sendMessage("You can use command now");
// your other code here
//..

let from_cur = User.getProperty("from-currency");
let to_cur = User.getProperty("to-currency");

if(!from_cur||!to_cur){
  var buttons = [
    {title: "Settings", command: "Settings⚙️" }
];

Bot.sendInlineKeyboard(buttons, "You need to set a conversion option in settings");;
}else{
  var value = CurrencyQuote.convert({ amount: parseFloat(message), from: from_cur, to: to_cur })
   Bot.sendMessage(
    "Currency set " + from_cur + " to " + to_cur + "\n \n" + message + from_cur + " => " + value + to_cur + "\n \n*You can set other Currencies set*"
  );
}

