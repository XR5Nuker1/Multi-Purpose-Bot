/*CMD
  command: /66
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: W6 33
  keyboard: Cancel
  aliases: 
CMD*/


let bonusCooldown = Libs.ResourcesLib.userRes("bonusCooldown");

// cooldown in minutes
let totalCooldown = 60*2; // 60*2 minutes = 120 seconds

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
   Bot.sendMessage("Please wait: " + bonusCooldown.value() + " secs to use this command." );
   return
}
 
// can give bonus now
resetCooldown(); // need to reset cooldown

Bot.sendMessage("You can use command now");
// your other code here
//..
function validURL(url) {
  var regex = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/
  return regex.test(url)
}

if (validURL(message)) {
  HTTP.get({
    url: "http://tinyurl.com/api-create.php?url=" + message,
    success: "67onSuccess"
  })
} else {
  Bot.sendMessage("User " + user.telegramid + " Wrong URL\nExample : `https://github.com`")
}

