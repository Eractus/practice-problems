function repeatedString(s, n) {
  let counter = 0;
  for (let i=0; i < s.length; i++) {
    if (s.charAt(i) === 'a') {
      counter += 1;
    }
  }

  let numTimes = Math.floor(n / s.length);
  let remainder = n % s.length;

  let ans = 0;
  if (numTimes === 0) {
    for (let i=0; i < n; i++) {
      if (s.charAt(i) === 'a') {
        ans += 1;
      }
    }
  } else {
    ans += numTimes * counter;
    if (remainder !== 0) {
      for (let i=0; i < remainder; i++) {
        if (s.charAt(i) === 'a') {
          ans += 1;
        }
      }
    }
  }

  return ans;
}
