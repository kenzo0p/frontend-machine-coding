/*
Write a function groupBy that
takes an array of objects and a
property name (as a string), and
returns an object where the keys
are the unique values of the
specified property, and the values
are arrays of objects that have that
property value.



// Example 1:
const users = [
{ name: 'Alice', age: 25
{ name: 'Bob', age: 30 },
{ name: 'Charlie', age: 2
];
groupBy(users, 'age');
// Output: {
// '25': [{ name: 'Alice'
// '30': [{ name: 'Bob',
// }
// Example 2:
const products = [
{ id: 1, category: 'Elect
{ id: 2, category: 'Cloth
{ id: 3, category: 'Elect
];

*/

function groupBy(arr, key) {
  const result = {};
  for (const item of arr) {
    const keyValue = item[key];
    if (!result.hasOwnProperty(keyValue)) {
      result[keyValue] = [];
    }

    result[keyValue].push(item);
  }

  return result;
}

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 2 },
];

console.log(groupBy(users, "age"));

/*
Output ->

{
  '2': [ { name: 'Charlie', age: 2 } ],
  '25': [ { name: 'Alice', age: 25 } ],
  '30': [ { name: 'Bob', age: 30 } ]
}
*/
