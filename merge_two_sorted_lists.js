/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var mergeTwoLists = function(l1, l2) {
    if (l1 === null && l2 === null) {
        return l1;
    }

    if (l1 === null) {
        return l2;
    }

    if (l2 === null) {
        return l1;
    }

    let nums = [];

    let n1 = l1;
    while (n1 !== null) {
        nums.push(n1.val);
        n1 = n1.next;
    }
    let n2 = l2;
    while (n2 !== null) {
        nums.push(n2.val);
        n2 = n2.next;
    }

    let sorted = nums.sort((a, b) => a - b);
    let ans = new ListNode(sorted[0]);

    let currNode = ans;
    for (let i=1; i<sorted.length; i++) {
        let nxtNode = new ListNode(sorted[i]);
        currNode.next = nxtNode;
        currNode = nxtNode;
    }

    return ans;
};
