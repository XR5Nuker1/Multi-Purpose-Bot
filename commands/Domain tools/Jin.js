/*CMD
  command: Jin
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Domain tools
  answer: Please enter your url
  keyboard: 
  aliases: scan url
CMD*/

var devs = User.getProperty("dev")

if(!devs){
Bot.runCommand("/devlogin")
}else{
 HTTP.get( {
    url: message,
    success: '/onLoading',
    error: '/onError'
    
    // if you need pass headers.
    // By default header "content-type" = 'application/json'
    // headers: { "content-type": null }
    // folow_redirects: true, // if you need folow by redirects
    // background: true - if you have timeout error
  } )

/* also you can send POST request
  HTTP.post( {
    url: message,
    success: '/onLoading ',
    body: {},  // body params
    // cookies: "" // cookies
    // headers: { "content-type": null } // - if you need headers
    // folow_redirects: true, // if you need folow by redirects
  } )
*/
}
