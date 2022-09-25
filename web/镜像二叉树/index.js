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
    right: {
        value: 6,
        left: {
            value: 7
        },
        right: {
            value: 5,
            right: {
                value: 5
            }
        }
    }
}

function mirrorTree(root) {
    return ismirrorTree(root, root)
}

function ismirrorTree(lRoot, rRoot) {
    console.log("dateNow:",lRoot,rRoot)
    if (!lRoot && !rRoot) {
        return true
    }
    if (!lRoot || !rRoot) {
        return false
    }
    if (lRoot.value != rRoot.value) {
        return false
    }
    return ismirrorTree(lRoot.left, rRoot.right) && ismirrorTree(lRoot.right, rRoot.left)
}

const result = mirrorTree(tree)
console.log(result)