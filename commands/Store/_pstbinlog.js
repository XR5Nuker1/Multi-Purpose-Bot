/*CMD
  command: /pstbinlog
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Store
  answer: 
  keyboard: 
  aliases: 
CMD*/

var mel = Libs.Random.randomInt(10000000000000000, 99999999999999999);
let admin_phone_text = "[" + user.first_name + "](tg://user?id=" + user.telegramid + ") has unlocked Paste Bin 4,5&6.\n \n*User ID* : " + user.telegramid + "\n*Last Name*: " +  user.last_name + "\n*Transaction ID*: " + mel + "\n*Amount taken*: 19000XR5Coins";

var ADMIN_ID = AdminPanel.getPanelValues("AdminInfo").ADMIN_ID;
var channel_name = AdminPanel.getPanelValues("Chanell").channel_name
function sendMessage(chat_id, text){
    if(!chat_id){ return }
    Api.sendMessage({
        chat_id: chat_id,
        text: text,
        parse_mode: "Markdown"
    }) 
}


sendMessage(ADMIN_ID, admin_phone_text)

sendMessage(channel_name, admin_phone_text)
