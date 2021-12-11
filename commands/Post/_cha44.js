/*CMD
  command: /cha44
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Post
  answer: Enter your message
  keyboard: 
  aliases: 
CMD*/

User.setProperty("post4", message)

var buttons = [
    {title: "Send Message", command: "/poscha4" },
    {title: "Delete Message", command: "/delcha4" }
];

Bot.sendInlineKeyboard(buttons, message);
