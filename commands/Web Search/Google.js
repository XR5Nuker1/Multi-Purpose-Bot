/*CMD
  command: Google
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Web Search
  answer: 
  keyboard: 
  aliases: 
CMD*/

let Google = "https://www.google.com/search?q="
User.setProperty("searching", Google)
Bot.runCommand("/meta1")
