let list = {
    value: 8,
    next: {
        value: 7,
        next: {
            value: 6,
            next: {
                value: 5,
                next: {
                    value: 4
                }
            }
        }
    }
}

const reverseList = function (head) {
    let currentNode = null;
    let headNode = head;
    // while (head && head.next) {

    currentNode = head.next;
    console.log('First head:', head.next, headNode)
    //连接头节点和下下个节点 例如 8->6
    head.next = currentNode.next;
    console.log('Second head:', head.next, headNode)
    currentNode.next = headNode;
    console.log('head current:', currentNode, headNode)
    headNode = currentNode;

    // }
    return headNode;
};

list = reverseList(list)
console.log(list)