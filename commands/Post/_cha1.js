/*CMD
  command: /cha1
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Post
  answer: Write your message.
  keyboard: 
  aliases: 
CMD*/

User.setProperty("post1", message)

var buttons = [
    {title: "Send Message", command: "/poscha1" },
    {title: "Delete Message", command: "/delcha1" }
];

Bot.sendInlineKeyboard(buttons, message);
