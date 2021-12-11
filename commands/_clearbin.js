/*CMD
  command: /clearbin
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var buttons = [
{title: "Clear bin 1&2", command: "/clear1_2"},
    {title: "Clear bin 3&4", command: "/clear3_4"},
    {title: "Clear bin 5&6", command: "/clear5_6" },
    {title: "Clear All Bins", command: "/clearwholebin" },
{title: "Back🔙", command: "/settings2"}
];

Bot.editInlineKeyboard(buttons);
