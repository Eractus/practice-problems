var isSameTree = function(p, q) {
    let stack = [{p: p, q: q}];

    while (stack.length > 0) {
        let nodes = stack.pop();

        if (!nodes.p && !nodes.q) {
            continue;
        }

        if (!nodes.p || !nodes.q || nodes.p.val !== nodes.q.val) {
            return false;
        }

        stack.push({p: nodes.p.left, q: nodes.q.left});
        stack.push({p: nodes.p.right, q: nodes.q.right});
    }

    return true;
};
