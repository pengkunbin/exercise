const camelCase = function (str) {
    return str.replace(/\-(\w)/g, function (all, letter) {
        return letter.toUpperCase()
    })
}

camelCase('abc-ab-ee')