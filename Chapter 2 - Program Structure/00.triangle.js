// Complete

// Walk through
// As you walk through pick up another '#'
// Like burrs on your shoes while in the fields
// At first it's just one
// And then there's a whole gobb of them

var burr = "";
for (i = 0; i <= 7; i++ ) {
  console.log(burr);
  burr += "#";
}

// Book Solution
// I would never think to use a string as the
// first variable in a for loop!
for (var line = "#"; line.length < 8; line += "#")
  console.log(line);
