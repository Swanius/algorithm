/**
 * @param {number[]} nums
 * @return {number}
 */

// new Set([...]).has() ->
var firstMissingPositive = function (nums) {
  var setNums = new Set([...nums]);
  for (let i = 1; ; i++) {
    if (!setNums.has(i)) {
      return i;
    }
  }
};
