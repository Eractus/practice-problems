function minimumAbsoluteDifference(arr) {
  let sorted = arr.sort();
  let ans;

  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = i + 1; j < arr.length; j++) {
  //     let temp = Math.abs(arr[i] - arr[j]);
  //     if (!ans || temp < ans) {
  //       ans = temp;
  //     }
  //     if (ans === 0) {
  //       return 0;
  //     }
  //   }
  // }
  for (let i = 0; i < sorted.length - 1; i++) {
    let temp = Math.abs(sorted[i] - sorted[i + 1]);
    if (!ans || temp < ans) {
      ans = temp;
    }
    if (ans === 0) {
      return 0;
    }
  }

  return ans;
}
