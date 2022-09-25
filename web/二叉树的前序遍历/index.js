//递归实现

/**
 * 输入[1,null,2,3,4]
 * 输出[1,2,3,4]
 */
const root = {
    value: 1,
    left: {
        value: 2,
        left: {
            value: 3
        },
        right: {
            value: 4
        }
    },
    right: {
        value: 5,
        left: {
            value: 6
        },
        right: {
            value: 7
        }
    }
}
const arry = []
//递归实现
const a = function (root, arry = []) {
    if (root) {
        console.log(arry)
        arry.push(root.value)
        a(root.left, arry)
        a(root.right, arry)
    }
}


//非递归实现
const a = function (root) {
    let result = []
    let node = []
    let current = root
    while (current || node.length) {
        while (current) {
            result.push(current.value)
            node.push(current)
            current = current.left
        }
        current = node.pop()
        current = current.right
    }
    console.log(result)
}

a(root)

console.log(arry)