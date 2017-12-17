# ejs
My solutions to exercises from Eloquent Javascript.

Also contains notes.

Scope Notes:

if var is used inside the function, it will localize the variable.
Otherwise the function will reference the global variable if it was declared before the function was called.

"In JavaScript, functions are the only things that create a new scope."

"Function declarations are not part of the regular top-to-bottom flow of control."

DO NOT put functions within conditional outcomes, ie:

function example() {
  function a() {} // Okay
  if (something) {
    function b() {} // Danger!
  }
}

"being able to reference a specific instance of local variables in an enclosing function—is called closure"

For instance:

function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

var twice = multiplier(2);
console.log(twice(5));
// → 10

Notice that the twice(5) is taking the result of multiplier 2 and feeding it into the number function that gets returned.
From the book:
"A good mental model is to think of the function keyword as “freezing” the code in its body and wrapping it into a package (the function value). So when you read return function(...) {...}, think of it as returning a handle to a piece of computation, frozen for later use."

function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

var twice = multiplier(3);
console.log(twice)
console.log(twice(7));
// → 21

twice returns the function:
ƒ (number) {
    return number * factor;
  }
  
So it looks like it's stepping through the functions. Saving the first functions results, and then using the second call to perform the final calculation.
