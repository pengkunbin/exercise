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

function preorderTraversal(root: TreeNode | null): number[] {
    const ans: number[] = [];
    if (!root) {
        return [];
    }

    function deepSearch(root: TreeNode | null) {
        if (!root) {
            return;
        }
        ans.push(root.val);
        deepSearch(root.left);
        deepSearch(root.right);
    }

    deepSearch(root);
    return ans;
};