function recursiveSearch(arr, target) {
  if (arr.length === 0) {
    return false;
  }

  if (arr[0] === target) {
    return true;
  }
  return recursiveSearch(arr.slice(1), target);
  
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: true");
  console.log("=>", recursiveSearch([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", recursiveSearch([3, 2, 1], 4));
}

module.exports = recursiveSearch;

// Please add your pseudocode to this file
// And a written explanation of your solution

/*
Use recurssion to find if a target value is in an array of values. Return true if target is found, return false if not.

Examples

[1,2,3,4] and target of 5, return false
[1,2,3,4] and target of 4, return true

function, take an array (arr) and target (target)

  if array length is 0
    return false

  // continue
  if array at position 0 is equal to target
    return true
  else
    recursive call to function with array minus value at 0 index




*/