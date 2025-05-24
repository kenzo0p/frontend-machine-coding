function once(fn){
    let called  = false; // this keeps track if function is called
    let result; // to store the result of first call

    return function (...args){
        if(!called){ // only run if not called before
            try {
                result  = fn.apply(this,args); // call the function
                called = true; // mark as called
                
            } catch (error) {
                throw error; // pass the error if any
            }
        }

        return result; // always return the same result
    }
}


function sayHi(name) {
    console.log("Hi " + name);
    return name + " said hi";
}

const runOnce = once(sayHi);


// First call
console.log("Result 1:", runOnce("Rahul")); // prints "Hi Rahul"

// Second call
console.log("Result 2:", runOnce("Aman"));  // does NOT print "Hi Aman"
// runOnce("Rahul"); // rahul said hii
// runOnce("Aman"); // no print this time

// module.exports = once;