/*CMD
  command: Wikipedia
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Web Search
  answer: 
  keyboard: 
  aliases: 
CMD*/

let Wikipedia = "https://en.wikipedia.org/wiki?search="
User.setProperty("searching", Wikipedia)
Bot.runCommand("/meta1")
