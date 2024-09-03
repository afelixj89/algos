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
// class Node {
//   constructor(value) {
//     this.value = value; // The value of the node
//     this.next = null; // The pointer to the next node
//   }
// }

// Define the LinkedList class
// class LinkedList {
//   constructor() {
//     this.head = null; // The head (first node) of the list
//   }

//   // Method to add a new node to the end of the list
//   append(value) {
//     const newNode = new Node(value);

//     if (this.head === null) {
//       this.head = newNode;
//       return;
//     }

//     let current = this.head;
//     while (current.next !== null) {
//       current = current.next;
//     }
//     current.next = newNode;
//   }

// Method to print the list
//   print() {
//     let current = this.head;
//     while (current !== null) {
//       console.log(
//         `Value: ${current.value}, Next: ${
//           current.next ? current.next.value : null
//         }`
//       );
//       current = current.next;
//     }
//   }
// }

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

// function switchWords(words){

//   const pairArray = [];
//   let reversedWords = new Set();

//   for(let word of words){
//     let reversedWord = word.split('').reverse().join('');
//     if(reversedWords.has(reversedWord) && reversedWord !== word){
//       return pairArray([reversedWord, word])
//     }
//   }
//   return pairArray

// }

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

// function bubbleSort(arr){
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1; j++) {
//       if(arr[j] > arr[j + 1]){
//         let temp = arr[j];
//         arr[j] = arr[j + 1]
//         arr[j + 1 ] = temp
//       }

//     }

//   }
//   return arr
// }
// let arr = [5, 3, 8, 4, 2];
// console.log(bubbleSort(arr)); // Output: [2, 3, 4, 5, 8]

// function switchWord(words){

//   const pairArray = [];
//   let reversedWords = new Set();

//   for(let word of words){
//     let reversedWord = word.split('').reverse().join('');
//     if(reversedWords.has(reversedWord) && reversedWord !== word){
//       return pairArray([reversedWord, word])
//     }
//   }
//   return pairArray

// }

// var findErrorNums = function(nums) {

//   let hash = {};
//   let array = [];

//   for(let num of nums){
//     if(!(num in hash)){
//       hash[num] = 0;
//     }
//     hash[num]++
//   }

//   for(let i = 0; i < nums.length; i++){
//     if(hash[nums] > 1 ){
//       array.push[nums[i]], nums[i + 1]
//     }

//   }

// }

// function removeDuplicatesFromLinkedList(linkedList) {
//   let current = linkedList;
//   while (current !== null && current.next !== null) {
//     if (current.value === current.next.value) {
//       current.next = current.next.next; // Skip the duplicate node
//     } else {
//       current = current.next; // Move to the next node
//     }
//   }
//   return linkedList;
// }

// function threeNumberSum(array, targetSum) {
//   array.sort((a, b) => a - b); // Sort the array
//   const triplets = [];

//   for (let i = 0; i < array.length - 2; i++) {
//       let left = i + 1;
//       let right = array.length - 1;

//       while (left < right) {
//           const currentSum = array[i] + array[left] + array[right];

//           if (currentSum === targetSum) {
//               triplets.push([array[i], array[left], array[right]]);
//               left++;
//               right--;
//           } else if (currentSum < targetSum) {
//               left++;
//           } else {
//               right--;
//           }
//       }
//   }

//   return triplets;
// }

// // Example usage:
// const array = [12, 3, 1, 2, -6, 5, -8, 6];
// const targetSum = 0;
// console.log(threeNumberSum(array, targetSum)); // [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]

// class LinkedList{
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// function removeDuplicatesFromLinkedList(linkedList){
//   let currentNode = linkedList;

//   while(currentNode.next !== null){
//     if(currentNode.value === currentNode.next.value){
//       currentNode.next = currentNode.next.next;
//     }else{
//       currentNode = currentNode.next
//     }
//   }

//  return linkedList;
// }

// Definition for singly-linked list.
// class ListNode {
//   constructor(value = 0, next = null) {
//     this.value = value;
//     this.next = next;
//   }
// }

// function removeElements(head, val) {
//   // Handle the case where the head node itself needs to be removed
//   while (head !== null && head.value === val) {
//     head = head.next;
//   }

//   let current = head;

//   while (current !== null && current.next !== null) {
//     if (current.next.value === val) {
//       current.next = current.next.next;
//     } else {
//       current = current.next;
//     }
//   }

//   return head;
// }

// // Export for testing
// module.exports = { ListNode, removeElements };

// function getNthFib(n){
//   const fib = [0,1];

//   for(let i = 2; i < n;i++){
//     fib[i] = fib[i - 1] + fib[i + 1];
//     }
//     return fib[n-1]

// }

// let nodes = [
//   {"id": "1", "next": "1-2", "value": 1},
//   {"id": "1-2", "next": "1-3", "value": 1},
//   {"id": "1-3", "next": "2", "value": 1},
//   {"id": "2", "next": "3", "value": 3},
//   {"id": "3", "next": "3-2", "value": 4},
//   {"id": "3-2", "next": "3-3", "value": 4},
//   {"id": "3-3", "next": "4", "value": 4},
//   {"id": "4", "next": "5", "value": 5},
//   {"id": "5", "next": "5-2", "value": 6},
//   {"id": "5-2", "next": null, "value": 6}
// ]

// function bookerIsWeird(nodes){
//   let newArray = nodes.filter(node => node.value === 1)
//   console.log(newArray);
//   return newArray;

// }

// bookerIsWeird(nodes);

// function bookerIsWeirder(nodes){
//   let hash = {};

//   for(let element of nodes){
//     if(!(element in hash)){
//       hash[element.value] = 0;
//     }
//     hash[element.value]++
//   }

//   for(let element of nodes){
//     if(hash[element.value] === 1)
//       console.log(element.value)
//       return element.value

//   }

// }

// bookerIsWeirder(nodes);

//   function caesarCipherEncryptor(string, key) {
//     let result = ''; // Initialize an empty string to store the encrypted result

//     // Iterate over each character in the input string
//     for (let i = 0; i < string.length; i++) {
//       let char = string[i]; // Get the current character
//       result += shiftCharacter(char, key); // Shift the character and add it to the result
//     }

//     return result; // Return the encrypted string
//   }

//   // Helper function to shift a single character by the given key
//   function shiftCharacter(char, key) {
//     const charCode = char.charCodeAt(0); // Get the ASCII code of the character
//     // Normalize to zero-based index by subtracting 97 (ASCII code of 'a'),
//     // apply the shift with the key, wrap around using modulo 26,
//     // and convert back to ASCII code by adding 97
//     let letter = "a";
//     let letterCode = letter.charCodeAt(0)

//     const newCharCode = ((charCode - letterCode + key) % 26) + letterCode ;
//     return String.fromCharCode(newCharCode); // Convert the new ASCII code back to a character
//   }

//   // Do not edit the line below.
//   class LinkedList {
//     constructor(value) {
//       this.value = value;
//       this.next = null;
//     }
//   }

//   function middleNode(linkedList) {
//     let slowPointer = linkedList;
//     let fastPointer = linkedList;

//     while (fastPointer !== null && fastPointer.next !== null) {
//       slowPointer = slowPointer.next;
//       fastPointer = fastPointer.next.next;
//     }

//     return slowPointer;
//   }

//   // Define the BST class
// class BST {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// // Define the function to find the closest value
// function findClosestValueInBst(tree, target) {
//   let closestValue = tree.value;
//   let currentNode = tree;

//   while (currentNode !== null) {
//     // Update the closest value if the current node's value is closer to the target
//     if (Math.abs(target - closestValue) > Math.abs(target - currentNode.value)) {
//       closestValue = currentNode.value;
//     }

//     // Move to the left or right child depending on the target value
//     if (target < currentNode.value) {
//       currentNode = currentNode.left;
//     } else if (target > currentNode.value) {
//       currentNode = currentNode.right;
//     } else {
//       // If the target is exactly equal to the current node's value, return it immediately
//       break;
//     }
//   }

//   return closestValue;
// }

// // Example usage
// // Construct the BST according to the JSON structure
// const root = new BST(10);
// root.left = new BST(5);
// root.right = new BST(15);

// root.left.left = new BST(2);
// root.left.right = new BST(5);
// root.right.left = new BST(13);
// root.right.right = new BST(22);

// root.left.left.left = new BST(1);
// root.right.left.right = new BST(14);

// // Example target
// const target = 12;
// const closest = findClosestValueInBst(root, target);
// console.log("Closest value to", target, "is", closest);

// class LinkedList {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// function smallestDifference(arrayOne, arrayTwo) {
//   arrayOne.sort((a, b) => a - b);
//   arrayTwo.sort((a, b) => a - b);

//   let indexOne = 0;
//   let indexTwo = 0;
//   let smallest = Infinity;
//   let smallestPair = [];

//   while(indexOne < arrayOne.length && indexTwo < arrayTwo.length){
//     let numOne = arrayOne[indexOne];
//     let numTwo = arrayTwo[indexTwo];

//     let currentDifference  = Math.abs(numOne - numTwo);

//     if(currentDifference < smallest){
//       smallest = currentDifference;
//       smallestPair = [numOne, numTwo];
//     }
//     if(numOne < numTwo){
//       indexOne++;
//     }else{
//       indexTwo++
//     }

//   }

//   return smallestPair 
// }

// console.log(smallestDifference([1, 3, 15],[8, 23, 127]))

// function moveElementToEnd(array, toMove) {
//   let result = [];
//   let toMoveArray = [];

//   for(let num of array){
//     if(num === toMove){
//       toMoveArray.push(num);
//     }
//     else{
//       result.push(num);
//     }
//   }
//   console.log(result.concat(toMoveArray))
//   return result.concat(toMoveArray);

// }

// moveElementToEnd([1, 2, 3, 2, 4, 2, 5], 2) ,,

function transposeMatrix(matrix) {

    let transposed = [];
  
    
    for (let col = 0; col < matrix[0].length; col++) {
      transposed.push([]);
    }
  
    for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[0].length; col++) {
        transposed[col][row] = matrix[row][col];
      }
    }
    return transposed;
  }
  



  // class BinaryTree {
  //   constructor(value) {
  //     this.value = value;
  //     this.left = null;
  //     this.right = null;
  //   }
  // }

  // function branchSums(root) {
  //   const sums = [];
  //   calculateBranchSums(root, 0, sums);
  //   return sums;
  // }
  // function calculateBranchSums(node, runningSum, sums) {
  //   if (node === null) return;

  //   const newRunningSum = runningSum + node.value;

  //   if (node.left === null && node.right === null) {
  //     sums.push(newRunningSum);
  //     return;
  //   }

  //   if (node.left !== null) {
  //     calculateBranchSums(node.left, newRunningSum, sums);
  //   }
  //   if (node.right !== null) {
  //     calculateBranchSums(node.right, newRunningSum, sums);
  //   }
  // }
  

  // class LinkedList{
  //   constructor(value){
  //     this.value = value;
  //     this.next = null;
  //   }
  // }
  
  // function removeDuplicatesFromLinkedList(linkedList){
  //   let currentNode = linkedList;
  
  //   while(currentNode.next !== null){
  //     if(currentNode.value === currentNode.next.value){
  //       currentNode.next = currentNode.next.next;
  //     }
  //     else{
  //       currentNode = currentNode.next
  //     }
  //   }
  //   return linkedList;
  // }


  // function removeDuplicatesFromLinkedList(linkedList){
  //   let currentNode = linkedList;

  //   while(currentNode.next !==null){
  //     if(currentNode.value === currentNode.next.value){
  //       currentNode.next = currentNode.next.next;

  //     }
  //     else{
  //       currentNode = currentNode.next
  //     }
  //   }
  //     return linkedList



  //     function removeDuplicatesFromLinkedList(linkedList){
  //       let currentNode = linkedList;
    
  //       while(currentNode.next !==null){
  //         if(currentNode.value === currentNode.next.value){
  //           currentNode.next = currentNode.next.next;
    
  //         }
  //         else{
  //           currentNode = currentNode.next
  //         }
  //       }
  //         return linkedList
    
    
  //     }
  // }

  // function removeDuplicatesFromLinkedList(linkedList){
  //   let currentNode = linkedList;

  //   while(currentNode.next !== null){
  //     if(currentNode.value === currentNode.next.value){
  //       currentNode.next = currentNode.next.next;
  //     }
  //     else{
  //       currentNode = currentNode.next
  //     }
  //   }
  //   return linkedList
  // }

function sortedSquaredArray(array){
  let sortedSquared = [];
  for(let i = 0; i < array.length;i++){
    let squared = Math.pow(array[i], 2);
    sortedSquared.push(squared);
  }
  return sortedSquared.sort((a,b) => (a -b));
}