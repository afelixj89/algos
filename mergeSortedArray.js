/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function (nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  let p = m + n - 1;

  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1];
      p1--;
    } else {
      nums1[p] = nums2[p2];
      p2--;
    }
    p--;
  }

  while (p2 >= 0) {
    nums1[p] = nums2[p2];
    p2--;
    p--;
  }
};

let nums1 = [1, 2, 3, 0, 0, 0]; // Array 1 with extra space for nums2
let m = 3; // Number of elements initially in nums1
let nums2 = [2, 5, 6]; // Array 2
let n = 3; // Number of elements in nums2

merge(nums1, m, nums2, n);
console.log(nums1); // Output should be [1, 2, 2, 3, 5, 6]
