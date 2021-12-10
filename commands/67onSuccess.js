/*CMD
  command: 67onSuccess
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

User.setProperty("slink", content)
Bot.sendMessage("shortening your link⚙️",
   {on_result: "/67onSuccess" }
)
