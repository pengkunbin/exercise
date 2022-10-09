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

const rootList = new Set();

function findTarget(root: TreeNode | null, k: number): boolean {
    if(!root){
        return false;
    }

    if(rootList.has(k - root.val)){
        return true;
    }

    rootList.add(root.val);

    return findTarget(root.left, k) || findTarget(root.right, k);
};

findTarget(new TreeNode(1), 2)