var isSymmetric = function(root) {
    if (!root) {
        return true;
    }

    function recurseBFS(left, right) {
        if (!left && !right) {
            return true;
        }

        if (!left || !right || left.val !== right.val) {
            return false;
        }

        return recurseBFS(left.left, right.right) && recurseBFS(left.right, right.left);
    }

    return recurseBFS(root.left, root.right);
//     if (root === null) {
//         return true;
//     }

//     if (root.left === null && root.right === null) {
//         return true;
//     }

//     let ans = true;
//     let deptCol = [root];
//     while (deptCol.some(node => node !== null)) {
//         let temp = [];
//         deptCol.forEach(node => {
//             if (node === null) {
//                 temp.push(null);
//                 temp.push(null);
//             } else {
//                 temp.push(node.left);
//                 temp.push(node.right);
//             }
//         });

//         if (temp.every(node => node === null)) {
//             break;
//         } else {
//             let i = 0;
//             let j = temp.length - 1;
//             while (i < j) {
//                 let node1 = temp[i];
//                 let node2 = temp[j];

//                 if (node1 === null || node2 === null) {
//                     if (node1 !== node2) {
//                         ans = false;
//                         break;
//                     }
//                 } else if (node1.val !== node2.val) {
//                     ans = false;
//                     break;
//                 }
//                 i++;
//                 j--;
//             }
//         }

//         if (!ans) {
//             break;
//         }

//         deptCol = temp;
//     }

//     return ans;
};
