/*CMD
  command: /er
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

function  replyMarkupFor(){
   return { inline_keyboard: [
    // line 1
    [
      // deep linking - because this message can be in any chat
      // https://help.bots.business/deep-linking-pass-any-params-on-bot-starting
      { text: "Check", command: "/start" }
    ],

    // line 2
    [
      // see https://core.telegram.org/bots/api#inlinekeyboardbutton for help
      { text: "List view", switch_inline_query_current_chat: "all" },
      { text: "Image view", switch_inline_query_current_chat: "catalog" }
    ]
  ]}
}

Bot.sendInlineKeyboard(replyMarkupFor(), "jrnrrj")
