
function JSONP(url, params, callbackKey, callback) {
    params = params || {}
    params[callbackKey] = 'jsonpCallback'
    window.jsonCallBack = callback

    const paramKeys = Object.keys(params)
    const paramString = paramKeys.map(key => `${key}=${params[key]}`).join('&')
    const script = document.createElement('script')
    script.setAttribute('src', `${url}?${paramString}`)
    document.body.appendChild(script)
}
JSONP({
    url: 'http://s.weibo.com/ajax/jsonp/suggestion',
    params: {
        key: 'test',
    },
    callbackKey: '_cb',
    callback(result) {
        console.log(result.data)
    }
})

