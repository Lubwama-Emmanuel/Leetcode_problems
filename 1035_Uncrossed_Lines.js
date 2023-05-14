/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

let count = 0;
let indexValue;

const maxUncrossedLines = (nums1, nums2) => {
  for (const num of nums1) {
    for (i = 0; i <= nums2.length - 1; i++) {
      if (num === nums2[i]) {
        if (indexValue > nums2.indexOf(nums2[i])) {
          break;
        }
        console.log("index is: ", indexValue);
        count++;
        indexValue = nums2.indexOf(nums2[i]);
      }
    }
  }
  console.log(count);
};

// TEST CASE 1
// const arr1 = [1, 4, 2];
// const arr2 = [1, 2, 4];

// TEST CASE 2
// const arr1 = [1, 2, 4, 7, 8, 9, 6];
// const arr2 = [1, 6, 2, 4, 9, 8, 3];

maxUncrossedLines(arr1, arr2);
