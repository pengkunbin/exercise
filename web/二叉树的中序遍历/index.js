//递归实现

/**
 * 输入[1,null,2,3,4]
 * 输出[1,2,3,4]
 */
const root = {
    value: 1,
    left: null,
    right: {
        value: 2,
        left: {
            value: 3
        },
        right: {
            value: 4
        }
    }
}
const arry = []
const a = function (root, arry = []) {
    if (root) {
        a(root.left, arry)
        arry.push(root.value)
        a(root.right, arry)
    }
}


const root = {
    value: 1,
    left: null,
    right: {
        value: 2,
        left: {
            value: 3
        },
        right: {
            value: 4
        }
    }
}

const a = function (root) {
    const node = []
    const result = []
    let current = root
    while (current || node.length) {
        while (current) {
            node.push(current)
            current = current.left
        }
        current = node.pop()
        result.push(current.value)
        current = current.right
    }
    return result
}

console.log(a(root))