let numOne = prompt("Enter first number");
numOne = +numOne;
let numTwo = prompt("Enter second number");
numTwo = +numTwo;
let numThree = prompt("Enter third number");
numThree = +numThree;
let numFour = prompt("Enter fourth number");
numFour = +numFour;
let numFive = prompt("Enter fifth number");
numFive = +numFive;
if (numOne > numTwo && numOne > numThree && numOne > numFour && numOne > numFive) {
  alert(`${numOne} is the highest`);
}
else if (numTwo > numOne && numTwo > numThree && numTwo > numFour && numTwo > numFive ) {
  alert(`${numTwo} is the highest`);
}
else if (numThree > numOne && numThree > numTwo && numThree > numFour && numThree > numFive ) {
  alert(`${numThree} is the highest`);
}
else if (numFour > numOne && numFour > numTwo && numFour > numThree && numFour > numFive ) {
  alert(`${numFour} is the highest`);
}
else if (numFive > numOne && numFive > numTwo && numFive > numThree && numFive > numFour ) {
  alert(`${numFive} is the highest`);
}