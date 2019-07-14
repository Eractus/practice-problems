var deleteDuplicates = function(head) {
    if (head === null || head.next === null) {
        return head;
    }

    let curr = head;
    let prev = null;
    let dupFound = false;
    while (curr.next !== null) {
        let next = curr.next;
        if (curr.val === next.val) {
            if (!dupFound) {
                dupFound = true;
            }
        } else {
            if (dupFound) {
                dupFound = false;
                curr.next = null;
                if (!prev) {
                    head = next;
                } else {
                    prev.next = next;
                }
            } else {
                prev = curr;
            }
        }
        curr = next;
    }

    if (!prev && dupFound) {
        return null;
    }

    if (dupFound) {
        prev.next = null;
    }

    return head;
};
