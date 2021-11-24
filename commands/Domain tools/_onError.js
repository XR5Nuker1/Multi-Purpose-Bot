/*CMD
  command: /onError
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Domain tools
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.sendMessage("Error on downloading");

Bot.inspect(http_status);
Bot.inspect(http_headers);  // headers from response
Bot.inspect(cookies);
