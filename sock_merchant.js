function sockMerchant(n, ar) {
  let i;
  let hash = {};
  for (i = 0; i < n; i++) {
    if (hash[ar[i]]) {
      hash[ar[i]] += 1;
    } else {
      hash[ar[i]] = 1;
    }
  }

  let ans = 0;
  Object.keys(hash).forEach(key => {
    ans += Math.floor(hash[key] / 2);
  });

  return ans;
}
