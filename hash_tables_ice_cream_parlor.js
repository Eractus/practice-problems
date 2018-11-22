function whatFlavors(cost, money) {
  let hash = {};

  for (let i = 0; i < cost.length; i++) {
    if (!hash[cost[i]]) {
      hash[cost[i]] = [i+1];
    } else {
      hash[cost[i]] = hash[cost[i]].concat([i+1]);
    }
  }

  for (let i = 0; i < cost.length - 1; i++) {
    let complement = money - cost[i];

    if (hash[complement]) {
      if (complement === cost[i]) {
        if (hash[complement].length === 1) {
          continue;
        } else {
          console.log(`${hash[complement][0]} ${hash[complement][1]}`);
          return;
        }
      } else {
        console.log(`${i + 1} ${hash[complement][0]}`);
        return;
      }
    }
  }

  // let first;
  // let second;
  // let sorted = cost.slice().sort();

  // for (let i = 0; i < sorted.length; i++) {
  //   let complement = money - sorted[i]
  //   let temp = binarySearch(sorted, complement);
  //   if (temp !== -1) {
  //     let val = sorted[temp];
  //     if (temp !== i) {
  //       first = cost.indexOf(sorted[i]);
  //       second = cost.indexOf(val);
  //       break;
  //     }
  //   }
  // }

  // let x = [first + 1, second + 1].sort().join(" ");
  // return x;
}

// function binarySearch(sortedArr, target) {
//   let start = 0;
//   let end = sortedArr.length - 1;
//   let mid;

//   while (start <= end) {
//     mid = Math.floor((start + end) / 2);

//     if (sortedArr[mid] > target) {
//       end = mid - 1
//     } else if (sortedArr[mid] < target) {
//       start = mid + 1
//     } else {
//       return mid;
//     }
//   }

//   return -1;
// }
