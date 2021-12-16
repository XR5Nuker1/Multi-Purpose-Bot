/*CMD
  command: Amazon
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

let Amazon = "https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords="
User.setProperty("searching", Amazon)
Bot.runCommand("/meta1")
