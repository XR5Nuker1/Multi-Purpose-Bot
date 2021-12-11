/*CMD
  command: /cha33
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Post
  answer: Enter your message
  keyboard: 
  aliases: 
CMD*/

User.setProperty("post3", message)

var buttons = [
    {title: "Send Message", command: "/poscha3" },
    {title: "Delete Message", command: "/delcha3" }
];

Bot.sendInlineKeyboard(buttons, message);
