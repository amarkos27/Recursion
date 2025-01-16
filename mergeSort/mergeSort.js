/* 
    If size of array is 1, stop
    else, split into two halves
        sort left half
        sort right half
        merge

    Merge:
        Check front of left, check front of right
            merge lower
            shift()
*/

function mergeSort(array) {
  const length = array.length;
  if (length === 1) {
    return array;
  } else {
    const left = mergeSort(array.slice(0, length / 2));
    const right = mergeSort(array.slice(length / 2));
    array = merge(left, right);

    return array;
  }
}

function merge(left, right) {
  let sorted = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sorted.push(left[0]);
      left.shift();
    } else {
      sorted.push(right[0]);
      right.shift();
    }
  }

  if (!left.length) {
    sorted = sorted.concat(right);
  } else {
    sorted = sorted.concat(left);
  }

  return sorted;
}

const test = [5, 4, 1, 0, 9, 8];
console.log(mergeSort(test));
