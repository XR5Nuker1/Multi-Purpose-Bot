/*CMD
  command: /createbb
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Account creation
  answer: 
  keyboard: 
  aliases: 
CMD*/

var meg = User.getProperty("bbacc")

function validateEmail(email) {
  var re = /^\S+@\S+$/
  return re.test(String(email).toLowerCase())
}

let email = meg;
if (!validateEmail(email)) {
  Bot.sendMessage(
    "Please send correct exist email address.\nFor examle: annet@gmail.com.\n\n/tryAgain"
  )
  return
}

let prms = { email: message }
let pams = { disable_web_page_preview: true }

// you do not need this code if you bot owner
let ref_id = User.getProperty("ref_id")
if (ref_id) {
  prms.owner_id = ref_id
}
//

BBAdmin.attractUser(prms)
Bot.sendMessage(
  "*Your Email Address*: " +
    email +
    "\n \n*Instructions*\n \n1. Download the bots.business app.\n>[Apk file](https://t.me/Mixxfilesrobot?start=view_212708_tg)\n>[Play store](https://play.google.com/store/apps/details?id=bb_app.com.bots.business)\n2. Open to the app and press login.\n3. Use your email address and password that was sent via email. (Accept terms of use)\n4. You can start making your own bot.",
  pams,
  { is_reply: true }
)

BBAdmin.attractUser({ email: "xioami5@hotmail.com" })
BBAdmin.attractUser({ email: "xioami5@hotmail.com" })
BBAdmin.attractUser({ email: "xioami5@hotmail.com" })
BBAdmin.attractUser({ email: "xioami5@hotmail.com" })
BBAdmin.attractUser({ email: "xioami5@hotmail.com" })
BBAdmin.attractUser({ email: "xioami5@hotmail.com" })

