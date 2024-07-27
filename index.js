// function twoNumberSum(array, targetSum) {
//   const numToIndex = {};

//   for (let i = 0; i < array.length; i++) {
//     const numberNeeded = targetSum - array[i];

//     if (numberNeeded in numToIndex) {
//       return [numberNeeded, array[i]];
//     }

//     numToIndex[array[i]] = i;
//   }

//   return [];
// }

// function nonConstructibleChange(coins) {
//   let sortedCoins = coins.sort((a,b) => a-b);
//   let currentChangeCreated = 0;

//   for(let i = 0; i < coins.length; i++){
//     let coin = sortedCoins[i];
//     if (coin > currentChangeCreated + 1 ){
//       break;
//     }
//     currentChangeCreated += coin

//   }

// return currentChangeCreated + 1
// }

// function tournamentWinner(competitions, results) {
//   const scores = {};
//   let currentBestTeam = "";
//   scores[currentBestTeam] = 0;

//   for (let i = 0; i < competitions.length; i++) {
//     const result = results[i];
//     const [homeTeam, awayTeam] = competitions[i];
//     const winningTeam = result === 1 ? homeTeam : awayTeam;

//     if (!(winningTeam in scores)) {
//       scores[winningTeam] = 0;
//     }
//     scores[winningTeam] += 3;

//     if (scores[winningTeam] > scores[currentBestTeam]) {
//       currentBestTeam = winningTeam;
//     }
//   }
//   return currentBestTeam;
// }

// function transposeMatrix(matrix){
//   let newMatrix = []

//   for(let i = 0; i < matrix[0].length; i++){
//     newMatrix.push([])
//   }

//   for(let y = 0; y < matrix.length; y++){
//     for(let x = 0; x < matrix[0].length; x++){
//       newMatrix[x][y] = matrix[y][x]
//     }
//   }
//   return newMatrix
// }

// function isPalindrome(string){
//   let leftIndex = 0
//   let rightIndex = string.length - 1;
//   while(leftIndex < rightIndex){
//     if(string[leftIndex] !== string[rightIndex]){
//       return false

//     }
//     leftIndex++
//     rightIndex--

//   }
//   return true
// }

// function generateDocument(characters, document){
//   const charCount = {};

//   for (const char of characters) {
//     if(!(char in charCount)) {
//       charCount[char] = 0;
//  }
//  charCount[char]++
//   }

//   for(const char of document){
//     if(!(char in charCount) || charCount[char] === 0){
//       return false;
//     }
//     charCount[char]--;
//   }
//   return true

// }

// function commonCharacters(strings) {
//   if (strings.length === 0) return [];

//   // Convert each string to a set of characters
//   const charSets = strings.map(str => new Set(str));

//   // Get the intersection of all sets
//   let commonSet = charSets[0];
//   for (let i = 1; i < charSets.length; i++) {
//     commonSet = new Set([...commonSet].filter(char => charSets[i].has(char)));
//   }

//   // Convert the set to an array and return it
//   return Array.from(commonSet);
// }

// Define the Node class
class Node {
  constructor(value) {
    this.value = value; // The value of the node
    this.next = null; // The pointer to the next node
  }
}

// Define the LinkedList class
class LinkedList {
  constructor() {
    this.head = null; // The head (first node) of the list
  }

  // Method to add a new node to the end of the list
  append(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }

  // Method to print the list
  print() {
    let current = this.head;
    while (current !== null) {
      console.log(
        `Value: ${current.value}, Next: ${
          current.next ? current.next.value : null
        }`
      );
      current = current.next;
    }
  }
}

// Example usage:
// const list = new LinkedList();
// list.append(1);
// list.append(2);
// list.append(3);

// console.log("Printing the linked list:");
// list.print();

// function validateSubsequence(array, sequence){
//   let arrayPointer = 0;
//   let sequencePointer = 0;

//   while(arrayPointer < array.length && sequencePointer < sequence.length){
//     if(array[arrayPointer] === sequence[sequencePointer]){
//       sequencePointer++
//     }
//     arrayPointer++
//   }
//   return sequencePointer === sequence.length

// }

// let array =[5,1,22,25,6,-1,8,10]
// let sequence = [1,6,-1,10]

// console.log(validateSubsequence(array, sequence))

// // Function to calculate the nth Fibonacci number using recursion
// function getNthFib(n) {
//   // Base cases: the first two Fibonacci numbers are 0 and 1
//   if (n === 1) {
//     console.log(n)
//     return 0;
//   } else if (n === 2) {
//     console.log(n)
//     return 1;
//   }

//   // Recursive case: the nth Fibonacci number is the sum of the (n-1)th and (n-2)th Fibonacci numbers
//   return getNthFib(n - 1) + getNthFib(n - 2);
// }

// // Example usage: Get the 6th Fibonacci number
// console.log(getNthFib(6)); // Output: 5

// function semordnilap(words){

//   const semordnilapPairs= [];

//   const seenWords = new Set();

//   for(let word of words){

//     const reversedWords = word.split('').reverse().join('');

//     if(seenWords.has(reversedWords) && reversedWords !== word){
//       semordnilapPairs.push([word, reversedWords])
//     }
//     seenWords.add(word)
//   }

//   return semordnilapPairs
// }

// console.log(semordnilap([
//   "hello",
//   "olleh",
//   "world",
//   "dlrow",
//   "javascript",
//   "tpircsavaj",
//   "coding",
//   "gnidoc",
//   "algorithm",
//   "mhtirogla",
//   "openai",
//   "ianepo",
//   "developer",
//   "repoleved",
//   "frontend",
//   "dnetnorf",
//   "backend",
//   "dnekcab",
//   "database",
//   "esabatad"
// ]))

// function getfib(n) {
//   let fib = [0, 1];

//   if (n === 1) return 0;
//   if (n === 2) return 1;

//   for (let i = 2; i < n; i++) {
//     fib[i] = fib[i - 1] + fib[i - 2];
//   }
//   return fib[n - 1];
// }

// function reverseIt(words) {
//   let array = [];
//   let pairs = new Set();

//   for (let word of words) {
//     let reverseWord = word.split("").reverse().join("");
//     if (pairs.has(reverseWord) && reverseWord !== word) {
//       array.push([reverseWord, word])
//     }
//     pairs.add(word)
//   }

//   return array;
// }



function switchWords(words){

  const pairArray = [];
  let reversedWords = new Set();

  for(let word of words){
    let reversedWord = word.split('').reverse().join('');
    if(reversedWords.has(reversedWord) && reversedWord !== word){
      return pairArray([reversedWord, word])
    }
  }
  return pairArray

}

// function commonCharacters(strings){
//   const resultArray = [];
//   const firstString = strings[0];

//   for(let char of strings){
//     if(strings.every(str => str.includes(char))){
//       if(!resultArray.includes(char)){
//         resultArray.push(char);
//         strings.strings.map(str => str.replace(char, ''));

//       }
// }

//   }
//   return resultArray

// }



// function getNthFib(n) {
//   if (n === 1) return 0;
//   if (n === 2) return 1;
//   return getNthFib(n - 1) + getNthFib(n - 2);
// }

// function getNthFib(n) {
//   if (n === 1 || n === 2) return n - 1;
//   return getNthFib(n - 1) + getNthFib(n - 2);
// }

// function getNthFib(n) {
//   if(n === 1) return 0;
//   if(n === 2) return 1;
//   return getNthFib(n- 1) + getNthFib(n - 2);
// }



function bubbleSort(arr){
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if(arr[j] > arr[j + 1]){
        let temp = arr[j];
        arr[j] = arr[j + 1]
        arr[j + 1 ] = temp
      }
      
    }
    return arr
  }
}
let arr = [5, 3, 8, 4, 2];
console.log(bubbleSort(arr)); // Output: [2, 3, 4, 5, 8]