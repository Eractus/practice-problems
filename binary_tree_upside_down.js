function binaryTreeUpsideDown(root) {
  // start by first collecting the nodes in order breadth first search style
  let rootNode = root;
  let leftNode = root.left;
  let rightNode = root.right;
  let arr = [root];
  while (leftNode !== null) {
    arr.push(leftNode);
    arr.push(rightNode);
    rootNode = leftNode;
    leftNode = rootNode.left;
    rightNode = rootNode.right;
  }

  // first node in the collected array always the right most element in the output tree, so we start building output tree from there
  let currentNode = arr[0];
  let newRoot;
  for (let i=1; i < arr.length; i++) {
    // start by first setting the current node's children references to null
    arr[i].left = null;
    arr[i].right = null;
    //  new root node will always be the second to last element in the array collected
    if (i === arr.length - 2) {
      newRoot = arr[i];
    }
    // if index is odd, this node is the new parent of the previous node which specifically becomes this node's right child
    // if index is even, this node becomes the previous node's left child - no reassignment of currentNode needed.
    if (i % 2 !== 0) {
      let temp = arr[i];
      temp.right = currentNode;
      currentNode = temp;
    } else {
      currentNode.left = arr[i];
    }
  }

  return newRoot;
}
