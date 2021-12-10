function scanurl{
HTTP.get( {
    url: message,
    success: '/onLoading',
    error: '/onError'
    
    // if you need pass headers.
    // By default header "content-type" = 'application/json'
    // headers: { "content-type": json }
    // folow_redirects: true, // if you need folow by redirects
    // background: true - if you have timeout error
  } )

/* also you can send POST request
  HTTP.post( {
    url: message,
    success: '/onLoading ',
    body: {},  // body params
    // cookies: "" // cookies
    // headers: { "content-type": json } // - if you need headers
    // folow_redirects: true, // if you need folow by redirects
  } )
*/
}
}

publish({
    scan: scanurl,
})
