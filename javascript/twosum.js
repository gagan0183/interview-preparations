/*
    Given an array of integer nums and an integer target, return indices of the two numbers such that they add up to the target.

    You may assume that each input would have exactly one solution, and you may not use the same element twice.

    You can return the answer in any order.

    Input: nums = [2,7,11,15], target = 9
    Output: [0,1]
    Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/
const twoSum = (array, target) => {
  sumCache = {};
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    const diff = target - array[i];
    console.log(diff, sumCache, typeof sumCache[diff]);
    // if difference element is present in the map then in concludes 
    // the sum of difference + the number already present in the map = target
    if (typeof sumCache[diff] !== "undefined") {
      return [sumCache[diff], i];
    } else {
      sumCache[value] = i;
    }
  }
};

console.log(twoSum([1, 2, 9, 3], 10));
