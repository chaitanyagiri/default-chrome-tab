chrome.windows.onFocusChanged.addListener(function(windowId) {
    if (windowId === chrome.windows.WINDOW_ID_NONE) {
        chrome.storage.sync.get(['defaultUrl'], function(result) {
            if (result.defaultUrl) {
                chrome.tabs.query({}, function(tabs) {
                    var existingTab = tabs.find(tab => tab.url === result.defaultUrl);
                    if (existingTab) {
                        chrome.tabs.update(existingTab.id, { active: true });
                    } else {
                        chrome.tabs.create({ url: result.defaultUrl });
                    }
                });
            }
        });
    }
});
