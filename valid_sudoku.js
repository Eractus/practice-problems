var isValidSudoku = function(board) {
  let ans = true;
  let endSearch = false;
  let dict = {};

  function updateDict(key, val) {
    if (!dict[key]) {
      dict[key] = [val];
    } else {
      if (dict[key].includes(val)) {
        ans = false;
        endSearch = true;
      } else {
        dict[key].push(val);
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    let row = `row${i + 1}`;
    dict[row] = [];
    let arr = board[i];
    for (let j = 0; j < arr.length; j++) {
      let cell = arr[j];

      if (parseInt(cell).toString() === "NaN") {
        continue;
      } else {
        if (dict[row].includes(cell)) {
          ans = false;
          endSearch = true;
          break;
        } else {
          dict[row].push(cell);
        }

        let col = `col${j + 1}`;
        if (!dict[col]) {
          dict[col] = [cell];
        } else {
          if (dict[col].includes(cell)) {
            ans = false;
            endSearch = true;
            break;
          } else {
            dict[col].push(cell);
          }
        }

        let box = [i + 1, j + 1];

        switch (true) {
          case box[0] < 4 && box[1] < 4:
            updateDict("box1", cell);
            break;
          case box[0] < 4 && box[1] > 3 && box[1] < 7:
            updateDict("box2", cell);
            break;
          case box[0] < 4 && box[1] > 6:
            updateDict("box3", cell);
            break;
          case box[0] > 3 && box[0] < 7 && box[1] < 4:
            updateDict("box4", cell);
            break;
          case box[0] > 3 && box[0] < 7 && box[1] > 3 && box[1] < 7:
            updateDict("box5", cell);
            break;
          case box[0] > 3 && box[0] < 7 && box[1] > 6:
            updateDict("box6", cell);
            break;
          case box[0] > 6 && box[1] < 4:
            updateDict("box7", cell);
            break;
          case box[0] > 6 && box[1] > 3 && box[1] < 7:
            updateDict("box8", cell);
            break;
          case box[0] > 6 && box[1] > 6:
            updateDict("box9", cell);
        }
        if (endSearch) {
          break;
        }
      }
    }

    if (endSearch) {
      break;
    }
  }

  return ans;
};
