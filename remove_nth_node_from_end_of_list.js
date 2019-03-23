var removeNthFromEnd = function(head, n) {
    if (head.next === null) {
        return null;
    }

    let map = {
        1: head
    };
    let count = 1;
    let node = head;

    while (node.next !== null) {
        count += 1;
        let next = node.next;
        node = next;
        map[count] = node;
    }

    let remove = count - n + 1;
    let before = remove -1;
    let after = remove + 1;

    if (map[remove].next !== null) {
        map[remove].next = null;
    }

    if (map[before] !== undefined && map[after] !== undefined) {
        map[before].next = map[after];
    } else if (map[before] === undefined && map[after]) {
        head = map[after];
    } else if (map[before] && map[after] === undefined) {
        map[before].next = null;
    }

    return head;
};
