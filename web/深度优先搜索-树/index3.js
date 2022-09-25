//非递归版

const deepFirstSearch = (node) => {
    let stack = []
    let nodes = []
    if (node) {
        // 推入当前处理的node
        stack.push(node)
        while (stack.length) {
            let item = stack.pop()
            let children = item.children
            nodes.push(item)
            // node = [] stack = [parent]
            // node = [parent] stack = [child3,child2,child1]
            // node = [parent, child1] stack = [child3,child2,child1-2,child1-1]
            // node = [parent, child1-1] stack = [child3,child2,child1-2]
            for (let i = children.length - 1; i >= 0; i--) {
                stack.push(children[i])
            }
        }
    }
    return nodes
}