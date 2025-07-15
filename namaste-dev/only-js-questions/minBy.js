function minBy(array, iteratee) {
  let minElement = undefined;
  let minValue = undefined;

  for (const element of array) {
    const value = iteratee(element);

    if (value == null) continue; // skip null or undefined

    if (minValue === undefined || value < minValue) {
      minValue = value;
      minElement = element;
    }
  }

  return minElement;
}


/*
    minBy([2, 3, 1, 4], num => num) 
// => 1

minBy([{ n: 1 }, { n: 2 }], o => o.n)
// => { n: 1 }

minBy([{ n: 1 }, { n: 2 }], o => o.m)
// => undefined  (because both o.m are undefined)

*/