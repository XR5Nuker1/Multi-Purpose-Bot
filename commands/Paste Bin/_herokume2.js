/*CMD
  command: /herokume2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Paste Bin
  answer: Enter text. If you have an existing text in this bin , if you write another text your existing text will be overwritten.
  keyboard: 
  aliases: create/change 2
CMD*/

User.setProperty("Paste bin2", data.message, "string");
Bot.sendMessage("Your text is saved success fully")
