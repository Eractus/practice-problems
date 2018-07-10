var recoverTree = function(rootNode) {
    // first and second are the two nodes that are swapped by mistake
    let prev, first, second;

    function dfsInorder(root) {
        if (!root) return;

        dfsInorder(root.left);

        if (prev && prev.val > root.val) {
            // Found a mistake
            if (!first) {
                first = prev; // Only set the "first" once
            }
            second = root; // Always update the "second"
        }
        prev = root;

        dfsInorder(root.right);
    }

    dfsInorder(root);

    // Swap the values of the two nodes
    let temp = first.val;
    first.val = second.val;
    second.val = temp;
};
