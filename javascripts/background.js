chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

    browser.storage.sync.get().then(response => {
        let filter = response.filter;
        delete response.filter;
        for (let i in response) {
            if (!fits(tab_url, response[i].url, filter)) {
                delete response[i]; 
            }
        }
        let sets = response;
        var hotkeys = [];

        for (let i in sets) {
            if (!sets[i].hotkey) {
                continue;
            }
            hotkeys.push(sets[i].hotkey);
        }


        switch (request.action) {
            case 'gethotkeys':
                sendResponse(hotkeys);
                break;

            case 'hotkey':
                for (let i in sets) {
                    if (sets[i].hotkey == request.code) {
                        sendResponse(sets[i]);
                    }
                }
                break;
        }
    }, error => console.log(`Error: ${error}`))

    return true;
});