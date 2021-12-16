/*CMD
  command: Get Bonus
  help: 
  need_reply: false
  auto_retry_time: 
  folder: BANK

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

function onEnding(time) {
let rnd = Libs.Random; 

let money = Libs.ResourcesLib.userRes("money");
let wood = Libs.ResourcesLib.userRes("wood");
let amount = rnd.randomFloat(9, 13) 
let amoun4t = rnd.randomInt(900, 1300) 
money.add(amount);
wood.add(amoun4t);

Bot.sendMessage("You have earned: \n" + amount.toFixed(2) + "XR5Coins\n" + amoun4t + "💰Coins as a daily bonus")

  return true // if false - cooldown is not restarted
}

function onWaiting(waitTime) {
  // we have active cooldown
  Bot.sendMessage("Please wait: " + waitTime + " secs to claim daily bonus")
}

Libs.CooldownLib.chat.watch({
  // you need name for cooldown
  name: "BonusCooldown",
  time: 86400,
  onEnding: onEnding,
  onWaiting: onWaiting
})
