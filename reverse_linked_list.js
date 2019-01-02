var reverseList = function(head) {
    let prev = null;
    let current = head;

    while (current !== null) {
        let nxt = current.next;
        current.next = prev;
        prev = current;
        current = nxt;
    }

    head = prev;
    return head;
};
