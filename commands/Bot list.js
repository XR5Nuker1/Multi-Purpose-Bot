/*CMD
  command: Bot list
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.sendMessage({
  text:
    "Hello user this is my bot list mode. you can add your own bot or go inline.",

  reply_markup: {
    inline_keyboard: [
    // line 1
    [
      // deep linking - because this message can be in any chat
      // https://help.bots.business/deep-linking-pass-any-params-on-bot-starting
      { text: "Add bot", command: "/botadd"},
      { text: "Inline Mode", switch_inline_query_current_chat: "all" }
    ]
  ]}
})
