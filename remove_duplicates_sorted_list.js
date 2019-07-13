var deleteDuplicates = function(head) {
    if (head === null) {
        return head;
    }

    let curr = head;
    while (curr.next !== null) {
        let next = curr.next;
        if (curr.val === next.val) {
            let newNext = next.next;
            next.next = null;
            curr.next = newNext;
        } else {
            curr = next;
        }
    }

    return head;
};
