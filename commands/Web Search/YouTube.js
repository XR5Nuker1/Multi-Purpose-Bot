/*CMD
  command: YouTube
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Web Search
  answer: 
  keyboard: 
  aliases: 
CMD*/

let YouTube = "https://www.youtube.com/results?search_query="
User.setProperty("searching", YouTube)
Bot.runCommand("/meta1")
