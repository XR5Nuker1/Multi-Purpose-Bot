/*CMD
  command: Google
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Web Search

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

let Google = "https://www.google.com/search?q="
User.setProperty("searching", Google)
Bot.runCommand("/meta1")
