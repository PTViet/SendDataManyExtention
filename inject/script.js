const getData = (obj = '', key = '') => {
    chrome.storage.local.get('obj', function () {
        return obj.key
    });
}

window.dataEx1 = getData()