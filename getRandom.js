var RandomizedSet = function() {
    this.list = []; // Array to store elements
    this.hash = {}; // Object to map values to indices
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (val in this.hash) return false; // Check if the value already exists
    this.list.push(val); // Add to the array
    this.hash[val] = this.list.length - 1; // Map the value to its index
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (!(val in this.hash)) return false; // Check if the value does not exist

    const index = this.hash[val]; // Get the index of the element
    const lastElement = this.list[this.list.length - 1]; // Last element in the array

    // Swap the value with the last element
    this.list[index] = lastElement;
    this.hash[lastElement] = index;

    // Remove the last element
    this.list.pop();
    delete this.hash[val]; // Remove the key from the hash

    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const randomIndex = Math.floor(Math.random() * this.list.length); // Generate random index
    return this.list[randomIndex]; // Return the random element
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
