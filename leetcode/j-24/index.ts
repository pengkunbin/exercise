/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function reverseList(head: ListNode | null): ListNode | null {
    // head 5 4 3 2 1
    let curr: ListNode | null = head;
    let prev: ListNode | null = null;
    while(curr){
        // temp 4 3 2 1
        const next = curr.next;
        // head 5 
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};