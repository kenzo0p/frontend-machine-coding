Array.prototype.myReduce = function (callbackFn, initialValue) {
  if (typeof callbackFn !== "function") {
    throw new TypeError(callbackFn + " is not a function");
  }

  const arr = this;
  let accumulator;
  let startIndex;

  if (arguments.length >= 2) {
    accumulator = initialValue;
    startIndex = 0;
  } else {
    let i = 0;
    while (i < arr.length && !(i in arr)) {
      i++;
    }
    if (i >= arr.length) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
    accumulator = arr[i];
    startIndex = i + 1;
  }

  for (let i = startIndex; i < arr.length; i++) {
    if (i in arr) {
      accumulator = callbackFn(accumulator, arr[i], i, arr);
    }
  }

  return accumulator;
};
