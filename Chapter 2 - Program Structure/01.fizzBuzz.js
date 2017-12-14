// Complete

// In an interview
// will you buzz them
// or will you fizz out?
// only time will tell

// 1 to 100, div by 3 fizz, div by 7 buzz, div by 3 & 7 fizzbuzz

for (i=1; i<=100; i++) {
  if (i%3 === 0 && i%7 === 0) {
    console.log('FizzBuzz');
    } else if (i%3 === 0) {
    console.log('Fizz');
    } else if (i%5 === 0) {
    console.log('Buzz');
    } else {
    console.log(i);
    }
}

  // Book Solution
  // Close to mine. More Clever, a little confusing...
for (var n = 1; n <= 100; n++) {
  var output = "";
  if (n % 3 == 0)
    output += "Fizz";
  if (n % 5 == 0)
    output += "Buzz";
  console.log(output || n);
}
