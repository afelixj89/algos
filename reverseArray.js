function rotate(nums, k) {
    const n = nums.length;
    k = k % n;

    
    function reverse(start, end) {
        while (start < end) {
            
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
    }


    reverse(0, n - 1);

 
    reverse(0, k - 1);

    
    reverse(k, n - 1);
}

let nums = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
rotate(nums, k);
console.log(nums); 
