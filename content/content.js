const scriptTag = document.createElement('script');
scriptTag.src = chrome.runtime.getURL("script.js")
document.body.appendChild(scriptTag)


