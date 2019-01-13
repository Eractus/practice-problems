function substrCount(n, s) {
  let tot = n;

  if (n === 1) {
    return n;
  }

  if (s[0] === s[1]) {
    tot += 1;
  }

  for (let i = 1; i < s.length - 1; i++) {
    let prev = i - 1;
    let next = i + 1;
    if (s[prev] === s[next]) {
      let oddPrev = prev;
      let oddNext = next;
      let temp = s[oddPrev];
      while (s[oddPrev] === s[oddNext] && s[oddPrev] === temp) {
        tot += 1;
        oddPrev -= 1;
        oddNext += 1;
      }
    }
    if (s[i] === s[next]) {
      tot += 1;
      let evenPrev = prev;
      let evenNext = next + 1;
      let temp = s[i];
      while (s[evenPrev] === s[evenNext] && s[evenPrev] === temp) {
        tot += 1;
        evenPrev -= 1;
        evenNext += 1;
      }
    }
  }

  return tot;
}
