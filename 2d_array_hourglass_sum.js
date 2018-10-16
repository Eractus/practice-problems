function hourglassSum(arr) {
  let ans;
  for (let i=0; i < arr.length - 2; i++) {
    let currMax = maxSum(arr[i], arr[i+1], arr[i+2]);
    if (ans === undefined) {
      ans = currMax;
    } else if (currMax > ans) {
      ans = currMax;
    }
    console.log(`currMax: ${currMax}`);
    console.log(`max: ${ans}`);
  }

  return ans;
}

function maxSum(arr1, arr2, arr3) {
  let max;
  for (let i=0; i < arr1.length - 2; i++) {
    let indivSum = arr1[i] + arr1[i+1] + arr1[i+2] + arr2[i+1] + arr3[i] + arr3[i+1] + arr3[i+2]
    if (max === undefined) {
      max = indivSum;
    } else if (indivSum > max) {
      max = indivSum;
    }
  }

  return max;
}
