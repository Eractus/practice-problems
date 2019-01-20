// Write an API function that can set the range between given start and end integers with the given value as well as get the value for a given integer key

class RangeMap {
  constructor() {
    this.state = {};
  }

  set(start, end, val) {
    for (let i = start; i <= end; i++) {
      this.state[i] = val;
    }

    return this.state;
  }

  get(key) {
    return this.state[key];
  }
}

const exp = new RangeMap();

exp.set(1, 10, "red");
exp.get(6); //make sure it returns red

exp.set(5, 1, "blue");

exp.get(11); //make sure it returns null
