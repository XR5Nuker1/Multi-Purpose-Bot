/*CMD
  command: /41
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Enter your text.
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
{title: "Main menu", command: "QR Code Gen" },
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
User.setProperty("qrtext", data.message)
Bot.runCommand("500")
