/*CMD
  command: /cha2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Post
  answer: Enter your message.

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

User.setProperty("post2", message)

var buttons = [
    {title: "Send Message", command: "/poscha2" },
    {title: "Delete Message", command: "/delcha2" }
];

Bot.sendInlineKeyboard(buttons, message);
