/*CMD
  command: /inlineQuery
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

// result.query - it is query from inline searching
if(!request.query){ return }

let results = [];
let totalResult = 0;

// it is array of results.
// we have InlineQueryResultArticle
// core.telegram.org/bots/api#inlinequeryresultarticle
// another types: https://core.telegram.org/bots/api#inlinequeryresult

results.push({
  type: "article", 
    id: totalResult,
    title:  "Adding",
    description: "Bot",
    thumb_url: "https://telegra.ph/file/5ba661dc6b718c0948d70.jpg",
    photo_url: "https://telegra.ph/file/5ba661dc6b718c0948d70.jpg",
    input_message_content: {
       "message_text": "Hello still adding bots.",
        parse_mode: "html",
        disable_web_page_preview: false
}
}) 

Api.answerInlineQuery({
  // see another fields at:
  // core.telegram.org/bots/api#answerinlinequery
  inline_query_id: request.id,
  results: results,
  cache_time: 3 // cache time in sec
})
