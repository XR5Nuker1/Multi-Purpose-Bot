/*CMD
  command: Yes
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.sendMessage("_please wait while the bot obtains your results from server_")

// update time in minutes
// max time in normal 60 minutes or 
var fiatLiveTime = CurrencyQuote.fiat.getCachingTime() / 60;
var cryptoLiveTime = CurrencyQuote.crypto.getCachingTime() / 60;


Bot.sendMessage(
   'Obtained your results successfully. These are your results 👇: \n \nFiat quotes updated: ' + fiatLiveTime.toFixed(0) + ' minutes ago' + 
   '\nCrypto quotes updated: ' + cryptoLiveTime.toFixed(0) + ' minutes ago'
)
Bot.runCommand("Currency Converter")
