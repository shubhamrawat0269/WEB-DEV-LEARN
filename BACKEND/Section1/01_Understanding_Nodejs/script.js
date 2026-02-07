/*
In this very first lecture , i got to know about : 
1. How to debug you code in your own IDE itself
2. How to setup nodejs?
3. Commands like : node -v and node which leads to Node REPL where we can do mathematical calculation 
as well.
*/

function maxDifference(arr) {
  if (arr.length < 2) return 0;

  let minElement = arr[0];
  let maxDiff = arr[1] - arr[0];

  for (let i = 1; i < arr.length; i++) {
    maxDiff = Math.max(maxDiff, arr[i] - minElement);
    minElement = Math.min(minElement, arr[i]);
  }

  return maxDiff;
}


console.log(maxDifference([2, 3, 10, 6, 4, 8, 1]));