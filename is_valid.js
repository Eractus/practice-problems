function isValid(s) {
  let hash = {};
  for (let i = 0; i < s.length; i++) {
    if (!hash[s[i]]) {
      hash[s[i]] = 1;
    } else {
      hash[s[i]] += 1;
    }
  }

  let values = Object.keys(hash);
  let freqs = [];
  values.forEach(val => {
    freqs.push(hash[val]);
  });

  if (freqs.filter(f => f !== freqs[0]).length <= 1) {
    return "YES";
  } else {
    return "NO";
  }
}
