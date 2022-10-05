function maxDepth(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }

    const left = maxDepth(root.left);
    const right = maxDepth(root.right);

    return (left > right ? left : right) + 1
};