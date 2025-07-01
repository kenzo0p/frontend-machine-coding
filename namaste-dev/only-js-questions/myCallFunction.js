Function.prototype.myCall = function (thisArg, ...argArray) {
  // If context is null or undefined, default to globalThis (window or global)
  thisArg = thisArg || globalThis;

  // Create a unique property on the context to avoid overwriting existing ones
  const fnSymbol = Symbol();

  // Add the function to the context
  thisArg[fnSymbol] = this; // 'this' is the function being called

  // Call it and store the result
  const result = thisArg[fnSymbol](...argArray);

  // Remove the temp property
  delete thisArg[fnSymbol];

  return result;
};

const mary = {
  age: 21,
};

const john = {
  age: 42,
};

function multiplyAge(multiplier = 1) {
  return this.age * multiplier;
}

console.log(multiplyAge.myCall(mary)); // 21
console.log(multiplyAge.myCall(john, 2)); // 84


🧮 Dry run 1
js
Copy code
console.log(multiplyAge.myCall(mary)); // ?
🔢 Step-by-step
1️⃣ multiplyAge.myCall(mary)

this inside myCall is multiplyAge

thisArg = mary = { age: 21 }

argArray = [] (no extra args)

2️⃣ thisArg = thisArg || globalThis
✅ mary is truthy, so thisArg stays { age: 21 }.

3️⃣ const fnSymbol = Symbol()
✅ Creates a unique symbol, let’s say Symbol().

4️⃣ thisArg[fnSymbol] = this
✅ Adds:

js
Copy code
mary[Symbol()] = multiplyAge;
So now:

js
Copy code
mary = {
  age: 21,
  [Symbol()]: multiplyAge
}
5️⃣ const result = thisArg[fnSymbol](...argArray)
✅ Calls:

js
Copy code
mary[Symbol()]();
➡️ So this inside multiplyAge is mary.
multiplier uses default 1.
this.age = 21.
21 * 1 = 21.

So result = 21.

6️⃣ delete thisArg[fnSymbol]
✅ Removes the temporary property:

js
Copy code
delete mary[Symbol()];
7️⃣ return result
✅ 21.

So:

js
Copy code
console.log(multiplyAge.myCall(mary)); // 21
✅ ✅ ✅ Matches expected!

🧮 Dry run 2
js
Copy code
console.log(multiplyAge.myCall(john, 2)); // ?
🔢 Step-by-step
1️⃣ multiplyAge.myCall(john, 2)

this inside myCall is multiplyAge

thisArg = john = { age: 42 }

argArray = [2]

2️⃣ thisArg = thisArg || globalThis
✅ john is truthy.

3️⃣ fnSymbol = Symbol()
✅ Unique symbol.

4️⃣ thisArg[fnSymbol] = this
✅ Adds:

js
Copy code
john[Symbol()] = multiplyAge;
5️⃣ result = thisArg[fnSymbol](...argArray)
✅ Calls:

js
Copy code
john ;
➡️ So this inside multiplyAge is john.
this.age = 42
multiplier = 2
42 * 2 = 84

✅ result = 84.

6️⃣ delete thisArg[fnSymbol]
✅ Removes the temp property from john.

7️⃣ return result
✅ 84.

So:

js
Copy code
console.log(multiplyAge.myCall(john, 2)); // 84
✅ ✅ ✅ Works as expected!

🎉 Dry run summary
Call	this.age	multiplier	Result
multiplyAge.myCall(mary)	21	1 (default)	21
multiplyAge.myCall(john, 2)	42	2	84

Your custom myCall works perfectly!
The trick is:

Temporarily attach the function as a method

Call it so this is correct

Remove it!

Let me know if you’d like a diagram version too! 🚀