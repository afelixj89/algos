function twoNumberSum(array, targetSum) {
  const numToIndex = {};

  for (let i = 0; i < array.length; i++) {
    const numberNeeded = targetSum - array[i];

    if (numberNeeded in numToIndex) {
      return [numberNeeded, array[i]];
    }

    numToIndex[array[i]] = i;
  }

  return [];
}

function nonConstructibleChange(coins) {
  let sortedCoins = coins.sort((a,b) => a-b);
  let currentChangeCreated = 0;

  for(let i = 0; i < coins.length; i++){
    let coin = sortedCoins[i];
    if (coin > currentChangeCreated + 1 ){
      break;
    }
    currentChangeCreated += coin
    
    
  }
  
return currentChangeCreated + 1
}

function tournamentWinner(competitions, results) {
  const scores = {};
  let currentBestTeam = "";
  scores[currentBestTeam] = 0;

  for (let i = 0; i < competitions.length; i++) {
    const result = results[i];
    const [homeTeam, awayTeam] = competitions[i];
    const winningTeam = result === 1 ? homeTeam : awayTeam;

    if (!(winningTeam in scores)) {
      scores[winningTeam] = 0;
    }
    scores[winningTeam] += 3;

    if (scores[winningTeam] > scores[currentBestTeam]) {
      currentBestTeam = winningTeam;
    }
  }
  return currentBestTeam;
}
