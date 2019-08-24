//递归版 

const parent = document.querySelector('.parent')
console.log(parent)

const deepFirstSearch = function f(node, nodelist = []) {
    if (node != null) {
        nodelist.push(node)
        let child = node.children
        
        for (let i = 0; i < child.length; i++) {
            deepFirstSearch(child[i], nodelist)
        }
    }
    return nodelist
}

console.log(deepFirstSearch(parent))