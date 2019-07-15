var merge = function(nums1, m, nums2, n) {
  if (n === 0) {
    return nums1;
  }

  let total = m + n;
  let i = 0;
  let j = 0;

  while (j < n) {
    if (m === 0) {
      nums1.splice(j, 0, nums2[j]);
      j += 1;
    } else {
      if (nums1[i] >= nums2[j] || i === m) {
        nums1.splice(i, 0, nums2[j]);
        j += 1;
        m += 1;
      }
      i += 1;
    }
  }

  while (nums1.length > total) {
    nums1.pop();
  }
};
