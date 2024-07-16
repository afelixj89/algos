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

function transposeMatrix(matrix){
  let newMatrix = []

  for(let i = 0; i < matrix[0].length; i++){
    newMatrix.push([])
  }

  for(let y = 0; y < matrix.length; y++){
    for(let x = 0; x < matrix[0].length; x++){
      newMatrix[x][y] = matrix[y][x]
    }
  }
  return newMatrix
}

function isPalindrome(string){
  let leftIndex = 0
  let rightIndex = string.length - 1;
  while(leftIndex < rightIndex){
    if(string[leftIndex] !== string[rightIndex]){
      return false

    }
    leftIndex++
    rightIndex--

  }
  return true
}


function generateDocument(characters, document){
  const charCount = {};

  for (const char of characters) {
    if(!(char in charCount)) {
      charCount[char] = 0;
 }
 charCount[char]++
  }

  for(const char of document){
    if(!(char in charCount) || charCount[char] === 0){
      return false;
    }
    charCount[char]--;
  }
  return true


}

function commonCharacters(strings) {
  if (strings.length === 0) return [];

  // Convert each string to a set of characters
  const charSets = strings.map(str => new Set(str));

  // Get the intersection of all sets
  let commonSet = charSets[0];
  for (let i = 1; i < charSets.length; i++) {
    commonSet = new Set([...commonSet].filter(char => charSets[i].has(char)));
  }

  // Convert the set to an array and return it
  return Array.from(commonSet);
}