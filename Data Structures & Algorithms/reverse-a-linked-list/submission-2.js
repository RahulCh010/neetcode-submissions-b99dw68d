/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let temp = head;
        let prev = null;
        let cur;
        let next;

        while(head) {
            cur = head.next;
            head.next = prev;
            prev = head;
            head = cur;
        }

        return prev
    }
}
