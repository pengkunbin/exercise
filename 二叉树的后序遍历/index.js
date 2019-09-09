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
const a = function (root, arry = []) {
    if (root) {
        a(root.left, arry)
        a(root.right, arry)
        arry.push(root.value)
    }
}

const a = function (root) {
    const node = []
    const result = []

    let last = null

    let current = root
    while (current || node.length) {
        while (current) {
            node.push(current)
            current = current.left
        }
        current = node[node.length - 1]
        if (!current.right || current.right === last) {
            current = node.pop()
            result.push(current.value)
            last = current
            current = null
        } else {
            current = current.right
        }
    }
    return result
}

a(root, arry)
console.log(arry)