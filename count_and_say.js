var countAndSay = function(n) {
  if (n === 1) {
      return "1";
  }

  let seq = "1";
  for (let i=2; i<=n; i++) {
    let newSeq = "";
    let curr = seq[0];
    let count = 1;
    let toAdd;
    for (let j=1; j<seq.length; j++) {
        if (seq[j] === curr) {
          count += 1;
        } else {
          toAdd = count.toString() + curr.toString();
          newSeq = newSeq + toAdd;
          curr = seq[j];
          count = 1;
        }
    }
    toAdd = count.toString() + curr.toString();
    newSeq = newSeq + toAdd;

    seq = newSeq;
  }

  return seq;
};
