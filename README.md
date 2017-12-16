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
