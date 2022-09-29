
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const nodes: ListNode[] = []
    let header = head;
    while (header) {
        nodes.push(header)
        header = header.next
    }

    if (n === nodes.length) {
        if (!head) {
            head = null
        } else {
            head = head?.next
        }
    } else if (n === 1) {
        nodes[nodes.length - 2].next = null
    } else {
        const current = nodes[nodes.length - n + 1]
        const pre = nodes[nodes.length - n - 1]
        pre.next = current
    }
    return head
};
