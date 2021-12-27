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
if (!request.query) {
  return
}

let results = []
let totalResult = 0
let totalResult1 = 1
let totalResult2 = 2
let totalResult3 = 3
// it is array of results.
// we have InlineQueryResultArticle
// core.telegram.org/bots/api#inlinequeryresultarticle
// another types: https://core.telegram.org/bots/api#inlinequeryresult

results.push({
  type: "article",
  id: totalResult,
  title: "Letter A",
  description: "Show bots of A category (not name)",
  thumb_url: "https://telegra.ph/file/87ba692c665ea6e2af12a.jpg",
  photo_url: "https://telegra.ph/file/87ba692c665ea6e2af12a.jpg",
  input_message_content: {
    message_text:
      "[Letter A](http://telegra.ph/Letter-A-12-17)",
    parse_mode: "Markdown",
    disable_web_page_preview: false
  }
})

results.push({
  type: "article",
  id: totalResult1,
  title: "Letter B",
  description: "Show bots of B category (not name)",
  thumb_url: "https://telegra.ph/file/c22f7aafe9355839fc46d.jpg",
  photo_url: "https://telegra.ph/file/c22f7aafe9355839fc46d.jpg",
  input_message_content: {
    message_text:
      "[Letter B](http://telegra.ph/Letter-B-12-17)",
    parse_mode: "Markdown",
    disable_web_page_preview: false
  }
})

results.push({
  type: "article",
  id: totalResult2,
  title: "Letter C",
  description: "Show bots of C category (not name)",
  thumb_url: "https://telegra.ph/file/a375beeb2bb153a36e386.jpg",
  photo_url: "https://telegra.ph/file/a375beeb2bb153a36e386.jpg",
  input_message_content: {
    message_text:
      "[Letter C](http://telegra.ph/Letter-C-12-17)",
    parse_mode: "Markdown",
    disable_web_page_preview: false
  }
})

results.push({
  type: "article",
  id: totalResult3,
  title: "Letter D",
  description: "Show bots of D category (not name)",
  thumb_url: "https://telegra.ph/file/c4ebcc9e9a03e3274123b.jpg",
  photo_url: "https://telegra.ph/file/c4ebcc9e9a03e3274123b.jpg",
  input_message_content: {
    message_text:
      "[Letter D](http://telegra.ph/Letter-D-12-17)",
    parse_mode: "Markdown",
    disable_web_page_preview: false
  }
})

Api.answerInlineQuery({
  // see another fields at:
  // core.telegram.org/bots/api#answerinlinequery
  inline_query_id: request.id,
  results: results,
  cache_time: 30 // cache time in sec
})

