'use strict';

chrome.webRequest.onBeforeSendHeaders.addListener(
  function (details) {
    let headers = details.requestHeaders;
    headers.forEach(header => {
      if (header.name.toLowerCase() === 'user-agent') {
        header.value = 'my device';
      }
    });
    headers.push({ name: 'hoge', value: 'fuga' });
    return { requestHeaders: headers };
  }, {
    urls: [
      "https://www.google.co.jp/*"
    ],
    types: [
      "xmlhttprequest"
    ]
  }, [
    "blocking",
    "requestHeaders"
  ]
);

const url = "https://www.google.co.jp"
$.ajax({url: url}).done(data => console.log({data}));
