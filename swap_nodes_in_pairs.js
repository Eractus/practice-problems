var swapPairs = function(head) {
    if (head === null) {
        return null;
    }

    if (head.next === null) {
        return head;
    }

    let firstPair = true;
    let newHead = head.next;
    let prevTail;
    let currHead;
    let nextHead = head;

    while (nextHead !== null) {
        let currTail = nextHead;
        currHead = nextHead.next;
        if (currHead === null) {
            prevTail.next = nextHead;
            break;
        }
        if (prevTail) {
            prevTail.next = currHead;
        }
        nextHead = currHead.next;
        currHead.next = currTail;
        currTail.next = null;
        prevTail = currTail;
    }

    return newHead;
};
