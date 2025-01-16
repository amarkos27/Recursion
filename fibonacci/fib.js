/* 
F(0): 0
F(1): 1
F(n) is equal to sum of F(n-1) and F(n-2)

If length is 0, return empty array
else if index equals specified length, stop
else
    If index is 0, push 0
    else if index is 1, push 1
    else if index is greater than 1, add arr[index - 1] and arr[index - 2];
*/

function fibonacci(length) {
  const array = [];
  for (let i = 0; i < length; i++) {
    if (i <= 1) {
      array.push(i);
    } else {
      array.push(array[i - 1] + array[i - 2]);
    }
  }

  return array;
}

function fibonacciRecursive(length, index = 0, array = []) {
  if (array.length === length) {
    return array;
  } else {
    if (index <= 1) {
      array.push(index);
    } else {
      array.push(array[index - 1] + array[index - 2]);
    }

    return fibonacciRecursive(length, index + 1, array);
  }
}

console.log(fibonacciRecursive(5));
