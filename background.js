chrome.runtime.onInstalled.addListener(object => {
    if (object.reason == 'install') {
        chrome.tabs.create({url: chrome.extension.getURL("options.html")});
    }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    let value = localStorage[message];
    if (!message) {
        value = '';
    }
    sendResponse(value);
});
