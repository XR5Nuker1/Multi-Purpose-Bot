/*CMD
  command: Tuesday
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.sendMessage(
  "\n group chats: " + bot.statistics.group_chats_count +
  "\n super group chats: " + bot.statistics.super_group_chats_count +
  "\n private chats: " + bot.statistics.user_chats_count +
  "\n active during last day chats: " + bot.statistics.active_during_last_day +
  "\n active during last week chats: " + bot.statistics.active_during_last_week
)
