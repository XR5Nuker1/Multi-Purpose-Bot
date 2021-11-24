/*CMD
  command: /herokume7
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Enter text. If you have an existing text in this bin , if you write another text your existing text will be overwritten.
  keyboard: 
  aliases: create/change 7
CMD*/

User.setProperty("Paste bin7", data.message, "string");
Bot.sendMessage("Your text is saved success fully")
