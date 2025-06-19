function formLargestNumber(arr) {
  //convert each number to string
  const nums = arr.map((num) => num.toString());

  nums.sort((a, b) => (b + a).localeCompare(a + b)); // sort using comparator

  //if all is 0 then return 0, as we sort we have descending order
  //seq so if we get 0 at nums[0] then all are 0 in the aray
  //ex[0,0,0]
  if (nums[0] === "0") {
    return "0";
  }

  // join all the numbers to form large number
  return nums.join("");
}

console.log(formLargestNumber([3, 30, 34, 5, 9]));
// output -> 9534330
