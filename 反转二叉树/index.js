const tree = {
    value: 8,
    left: {
        value: 6,
        left: {
            value: 5
        },
        right: {
            value: 7
        }
    },
    right:{
        value:10,
        left: {
            value:9
        },
        right: {
            value:11
        }
    }
}

const mirrorTree = function (root) {
    if (root) {
        [root.left, root.right] = [root.right, root.left]
        mirrorTree(root.right)
        mirrorTree(root.left)
    }
}

mirrorTree(tree)

console.log(tree)