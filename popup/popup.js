const sendData = (data) => {
    chrome.storage.local.set('sendData', function () {
        return data
    });
}

document.addEventListener("click", sendData)