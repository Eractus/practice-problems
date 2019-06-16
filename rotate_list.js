var rotateRight = function(head, k) {
    if (k === 0 || head === null || head.next === null) {
        return head;
    }

    let tail = head;
    let secLast;
    while (tail.next) {
        secLast = tail;
        tail = tail.next;
    }

    while (k > 0) {
        if (head === secLast) {
            head.next = null;
            tail.next = head;
            secLast = tail;
            tail = head;
            head = secLast;
        } else {
            let temp1 = head;
            while (temp1.next !== secLast) {
                temp1 = temp1.next;
            }
            secLast.next = null;
            let temp2 = secLast;
            secLast = temp1;
            tail.next = head;
            head = tail;
            tail = temp2;
        }
        k -= 1;
    }

    return head;
};
