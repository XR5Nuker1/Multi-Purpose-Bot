/*CMD
  command: miui>
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var buttons = [
    {title: "Pay here", command: "/payment" },
    {title: "Buy with points", command: "/ultrabuy"}
];

Bot.sendInlineKeyboard(buttons, "*Ultra Features*\n \n>No Downtime\n>6 Paste Bin Slots\n>40% discount fo first 3 months\n \nPrice: R5 p/m\n         : R2 (3 month discount)\nYou can pay with bot coins \nPress here👇 to pay");
