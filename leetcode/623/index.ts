class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

const scanTree = (root: TreeNode | null, val: number, depth: number): undefined => {
    if (!root) {
        return;
    }

    // 当深度为1，说明已经在被插入的父节点上了，要将当前节点下插入左右2个节点
    if (depth === 1) {
        const left = new TreeNode(val, root.left, null)
        const right = new TreeNode(val, null, root.right)

        root.left = left;
        root.right = right;
    }
    return scanTree(root.left, val, depth - 1) || scanTree(root.right, val, depth - 1)
}

function addOneRow(root: TreeNode | null, val: number, depth: number): TreeNode | null {
    if (depth === 1) {
        return new TreeNode(val)
    }

    scanTree(root, val, depth - 1)

    return root;
};

const a = new TreeNode(3)
const b = new TreeNode(1)
const c = new TreeNode(2, a, b)
const d = new TreeNode(4, c)

addOneRow(d, 1, 3)