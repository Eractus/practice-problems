function alternatingCharacters(s) {
  let arr = Array.from(s);
  let curr = arr[0];
  let ans = 0;

  for (let i = 1; i < arr.length; i++) {
    if (curr !== arr[i]) {
      curr = arr[i];
    } else {
      ans += 1;
    }
  }

  return ans;
}
