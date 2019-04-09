function majorityElement(array) {
  let obj = {};

  let ans = -1;

  array.forEach(el => {
    if (!obj[el]) {
      obj[el] = 1;
    } else {
      obj[el] += 1;
    }
  });

  let halfLength = Math.floor(array / 2);
  Object.keys(obj).forEach(key => {
    if (obj[key] > halfLength) {
      ans = key;
      return;
    }
  });

  return ans;
}
