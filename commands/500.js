/*CMD
  command: 500
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var linker = User.getProperty("qrtext")

var buttons = [
    {title: "Generate QR Code", command: "/678" }
];

Bot.sendInlineKeyboard(buttons, "Do you want to generate qr code?\n \nMessage Contents: `" + linker + "`");
