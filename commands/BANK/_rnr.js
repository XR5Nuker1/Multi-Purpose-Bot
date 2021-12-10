/*CMD
  command: /rnr
  help: 
  need_reply: 
  auto_retry_time: 
  folder: BANK
  answer: 
  keyboard: 
  aliases: balance
CMD*/

Bot.sendMessage("Getting from server your balances⚙️", {on_result: "/rnr2"})
