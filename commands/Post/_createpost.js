/*CMD
  command: /createpost
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Post

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: create post
CMD*/

var gen = User.getProperty("cha1")
var noe = User.getProperty("cha2")

var buttons = [
  { title: "channel " + gen, command: "/ch1" },
  { title: "channel " + noe, command: "/ch2" },
{title: "Next⏭️", command: "/prepst"}
]

Bot.sendInlineKeyboard(buttons, "Choose your channel")

