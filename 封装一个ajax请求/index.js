const xhr = new XMLHttpRequest()
xhr.send = function (url, callback, method, data, async) {
    if (async ===undefined) {
        async = true
    }
    const httpRequest = xhr.httpRequest()
    httpRequest.open(method, url, async)
    httpRequest.onreadstatechange = function () {
        if (httpRequest.readyState === 4) {
            callback(httpRequest.responseText)
        }
    }
    if (method == 'POST') {
        httpRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    }
    httpRequest.send(data);
}

const get = function (url, callback, data, async) {
    const data = {
        name: 'pkb',
        age: '18'
    }
    let query = ""
    const result = Object.keys(data).reduce(((total, value) => total + value + '=' + data[value] + '&'),0)
    console.log(result)
    xhr.send(url, )
}