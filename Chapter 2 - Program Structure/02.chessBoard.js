//Completed

//A hash awaiting pawns
//How large of board do you want
//In there are infinite squares
//the game could go well into the night

var sign = true;
var gridSize = 20
for (j = 0; j < gridSize; j++) {
    if (sign === true) {
      for (i = ""; i.length < gridSize; i += " #") {
      };
      console.log(i);
      sign = false;
    } else {
      for (i = ""; i.length < gridSize; i += "# ") {
      };
      console.log(i);
      sign = true;
    }
  }

  //Beginning Strategy:
  // Give each line an even or odd designation
  // Evens start on white
  // Odds start on black
  // and the pattern goes from ' #' to '# '

  // first, work on getting the line to go cross
  // then work on the loop for alternating lines

  // Works but I didn't use new line requirement...


// Book Solution
// It's a grid! by laying out a grid with the numbers
// the author was able to calculate each segment
// (0+0)(0+1)(0+2)(0+3)(0+4)(0+5)(0+6)(0+7)(0+8)
// (1+0)(1+1)(1+2)(1+3)(1+4)(1+5)(1+6)(1+7)(1+8)
// etc...
// Even is black, Odd is hash
var size = 8;
var board = "";

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board);
