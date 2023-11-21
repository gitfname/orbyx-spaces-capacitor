chrome.action.onClicked.addListener(() => {
    chrome.windows.create({
        url: 'index.html',
        type: 'panel',
        width: 1050,
        height: 550
    });
});


chrome.runtime.onInstalled.addListener(() => {

    if (chrome.runtime.createAppShortcut) {
        chrome.runtime.createAppShortcut(() => {});
    }
});