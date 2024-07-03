function twoNumberSum(array, targetSum) {
    // Create a hash table to store the numbers we've seen so far
    const numToIndex = 
      {}
  
    // Iterate through the array
    for (let i = 0; i < array.length; i++) {
      // Calculate the number needed to reach the target sum
      const numberNeeded = targetSum - array[i];
  
      // Check if the number needed is in the hash table
      if (numberNeeded in numToIndex) {
        // If found, return the pair of numbers
        return [numberNeeded, array[i]];
      }
  
      // Otherwise, add the current number to the hash table
      numToIndex[array[i]] = i;
    }
  
    // If no pair is found, return an empty array
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

  