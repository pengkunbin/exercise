const isValue = function (value) {
    if (!value) {
        return 0
    } else {
        return Number(value)
    }
}

const bigNumber = function (a, b) {
    let res = '',
        temp = 0,
        flag = false
    a = a.split('')
    b = b.split('')
    while (a.length || b.length || temp) {
        let number1 = isValue(a.pop())
        let number2 = isValue(b.pop())
        if (flag) {
            temp = number1 + number2 + 1
            flag = false
        } else {
            temp = number1 + number2
        }
        if (temp > 10) {
            res = (temp % 10) + res
            flag = true
        } else {
            res = temp + res
        }
    }
    const result =  res.substring(1)
    return result
}

bigNumber('3782647863278468012934670', '23784678091370408971329048718239749083')