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
    a = a.toString().split('')
    b = b.toString().split('')
    while (a.length || b.length || temp) {
        let number1 = isValue(a.pop())
        let number2 = isValue(b.pop())
        if (flag) {
            temp = number1 + number2 + 1
            flag = false
        } else {
            if(!number1 &&!number2){
                return res
            }
            temp = number1 + number2
        }
        if (temp > 10) {
            res = (temp % 10) + res
            flag = true
        } else {
            res = temp + res
        }
    }
    return res
}

bigNumber(9953512345687, 85)