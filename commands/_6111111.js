/*CMD
  command: /6111111
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Please select
  keyboard: BTC, ETH, LTC, BNB, \nTRX, EUR, CNY, JPY, RUB, \nGPB, AUD, NZD, THB, SZL, \nINR, IDR, ZAR, ALL, \nBYN, BYR, BDT, BSD, \nBBD, BHD, AZN, ARS, \nDZD, AFN, CAD, BMD, \nMMK, BRL, BWP, CNY, \nCOP, CLP, KHR, BGN, \nBND, BTN, BOB, GBP, \nHKD, HUF, ISK, GNF, \nGHS, GEL, FJD, ETB, \nEGP, DKK, CZK, HRK, \nCRC, CDF, IRR, IQD, \nPLN, QAR, RON, RUB, \nSAR, RSD, SCR, SGD, \nKRW, LKR, SDG, SEK, \nCHF, NGN, SYP, TZS, \nTHB, TND, TRY, TMT, \nUGX, UAH, AED, UYU, \nUZS, VND, YER, ZMW
  aliases: 
CMD*/

// save currency label for conversation
User.setProperty("to-currency", message, "string");
Bot.sendMessage(
"*Conversion Option 'To' is set successfully you can convert currency now.*")
Bot.runCommand("Currency Converter")
// save currency label for conversation
User.setProperty("to-currency", message, "string");
Bot.sendMessage(
"*Conversion Option 'To' is set successfully you can convert currency now.*")
Bot.runCommand("Currency Converter")
