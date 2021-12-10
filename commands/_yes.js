/*CMD
  command: /yes
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

// You can inspect all result:
// Bot.inspect(options)
// update time in minutes
// max time in normal 60 minutes or 
var fiatLiveTime = CurrencyQuote.fiat.getCachingTime() / 60;
var cryptoLiveTime = CurrencyQuote.crypto.getCachingTime() / 60;

let code = 'Obtained your results successfully. These are your results 👇: \n \nFiat quotes updated: ' + fiatLiveTime.toFixed(0) + ' minutes ago' + 
   '\nCrypto quotes updated: ' + cryptoLiveTime.toFixed(0) + ' minutes ago';
let msg_id = options.result.message_id;
Bot.editMessage(code, msg_id);

