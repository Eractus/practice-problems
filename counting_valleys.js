function countingValleys(n, s) {
  let ans = 0;
  let alt = 0;
  for (let i=0; i < n; i++) {
    if (s.charAt(i) === "D") {
      alt -= 1;
    } else {
      alt += 1;
    }
    if (alt === 0 && s.charAt(i) === "U") {
      ans += 1;
    }
  }

  return ans;
}
