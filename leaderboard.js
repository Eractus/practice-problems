class LeaderBoard {

  constructor() {
    this.leaderBoard = {};
  }

  add_score = (player_id, score) => {
    let avgScore;
    if (!this.leaderBoard[player_id]) {
      // if player doesn't yet exist in leader board, add them as an object containing a scores key containing a value of an array containing the given score as well as an average key containing a value of the given score
      this.leaderBoard[player_id] = { 'scores': [score], 'average': score };
      avgScore = score;
    } else {
      // if player already exists in leader board, add the new score to the scores key's value array and update the average key's value integer by caluclating and setting the player's new average
      let currPlayer = this.leaderBoard[player_id];
      currPlayer['scores'].push(score);

      let currPlayerScores = currPlayer['scores'];
      let sumScores = currPlayerScores[0];
      let numScores = currPlayerScores.length;
      for (let i=1; i<numScores; i++) {
        sumScores += currPlayerScores[i]
      }
      avgScore = sumScores / numScores;
    }

    // return the player's average score
    return avgScore;
  };

  top = (num_players) => {
    // create an array of all of current leader board's player id's
    let playerIds = Object.keys(this.leaderBoard);
    // create an array of arrays where each inner array contains the player's id and average score
    let playersArr = [];
    for (let i=0; i < playerIds.length; i++) {
      let pId = parseInt(playerIds[i]);
      let pAvg = this.leaderBoard[pId]['average'];
      let pArr = [pId, pAvg]
      playersArr.push(pArr);
    }

    // sort the array of arrays by the average score, from greatest to least
    playersArr = playersArr.sort((p1, p2) => p2[1] - p1[1]);


    // if requested number of top players is more than total players in leaderboard, reset requested number of players to the number of total players
    if (num_players > playersArr.length) {
      num_players = playersArr.length
    }

    // create an array of indices based on the number of top players requested from argument (or total players on leaderboard) and iterate through the players array that is now sorted from greatest to least to collect player id's
    let topPlayers = [];
    [...Array(num_players).keys()].forEach(idx => {
      let playerId = playersArr[idx][0];
      topPlayers.push(playerId);
    });

    // return the array containing player id's ordered based on average score, from greatest to least
    return topPlayers;
  };

  reset = (player_id) => {
    // reset player's scores and average values to an empty array and 0, respectively
    this.leaderBoard[player_id]['scores'] = [];
    this.leaderBoard[player_id]['average'] = 0;
  };
}

// Test code here

function array_equals(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;
  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

var leader_board = new LeaderBoard()

leader_board.add_score(1, 50)
// check that the top method works properly when requested number of players is greater than total number of players currently in leaderboard
console.log(array_equals(leader_board.top(3), [1]))
console.log(leader_board.add_score(2, 80) == 80)
console.log(leader_board.add_score(2, 70) == 75)
console.log(leader_board.add_score(2, 60) == 70)
console.log('Add score should return the average. test with 1 score')
console.log(leader_board.add_score(3, 90) == 90)
console.log('Add score should return the average. test with 2 scores')
console.log(leader_board.add_score(3, 85) == 87.5)
console.log('Top 3 [' + leader_board.top(3) + '] should equal [3, 2, 1]:')
console.log(array_equals(leader_board.top(3), [3, 2, 1]))
console.log('Top 2 [' + leader_board.top(2) + '] should equal [3, 2]:')
console.log(array_equals(leader_board.top(2), [3, 2]))
leader_board.reset(3)
console.log('After reset top 3 [' + leader_board.top(3) + '] should equal [2, 1, 3]')
console.log(array_equals(leader_board.top(3), [2, 1, 3]))
