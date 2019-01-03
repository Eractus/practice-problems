var reverseBetween = function(head, m, n) {
    let prev = null;
    let current = head;
    let listHead, reversedPrev, reversedHead, reversedTail, reversedNext;
    let pos = 1;

    if (m === n) {
        return head;
    }

    if (m !== 1) {
        listHead = head;
    }

    while (current !== null) {
        if (pos === m - 1) {
            reversedPrev = current;
        }
        if (pos < m || pos > n) {
            prev = current;
            current = current.next;
        }

        if (pos >= m && pos <= n) {
            if (pos === m) {
                reversedTail = current;
                let nxt= current.next;
                current.next = null;
                prev = current;
                current = nxt;
            } else if (pos === n) {
                reversedHead = current;
                let nxt= current.next;
                reversedNext = nxt;
                current.next = prev;
                prev = current;
                current = nxt;
            } else {
                let nxt= current.next;
                current.next = prev;
                prev = current;
                current = nxt;
            }
        }

        pos ++;
    }

    reversedTail.next = reversedNext;
    if (listHead) {
        reversedPrev.next = reversedHead;
    } else {
        listHead = reversedHead;
    }

    return listHead;
};
