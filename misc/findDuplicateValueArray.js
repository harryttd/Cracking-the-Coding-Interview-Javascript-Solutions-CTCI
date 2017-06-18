'use strict';

// Leetcode #287

// O(N) TIME --- O(1) SPACE
function findDuplicate(nums) {
  if (nums.length > 1) {
    let slow = nums[0], fast = nums[nums[0]];

    while (slow !== fast) {
      slow = nums[slow];
      fast = nums[nums[fast]];
    }

    fast = 0;

    while (fast !== slow) {
      slow = nums[slow];
      fast = nums[fast];
    }

    return slow;
  }
	return -1;
}

console.log(findDuplicate([1, 2, 3, 4, 2]));
