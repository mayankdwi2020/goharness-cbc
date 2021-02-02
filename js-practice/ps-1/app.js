let userMonth = prompt("Enter a number between 1 to 12 and I'll let you know the month it is!");
userMonth = +userMonth; //To covert a string to a number
if (userMonth === 1)
  document.querySelector('main').innerHTML = "January"; //To print on the screen;
else if (userMonth === 2)
  document.querySelector('main').innerHTML = "February";
else if (userMonth === 3)
  document.querySelector('main').innerHTML = "March";
else if (userMonth === 4)
  document.querySelector('main').innerHTML = "April";
else if (userMonth === 5)
  document.querySelector('main').innerHTML = "May";
else if (userMonth === 6)
  document.querySelector('main').innerHTML = "June";
else if (userMonth === 7)
  document.querySelector('main').innerHTML = "July";
else if (userMonth === 8)
  document.querySelector('main').innerHTML = "August";
else if (userMonth === 9)
  document.querySelector('main').innerHTML = "September";
else if (userMonth === 10)
  document.querySelector('main').innerHTML = "October";
else if (userMonth === 11)
  document.querySelector('main').innerHTML = "November";
else if (userMonth === 12)
  document.querySelector('main').innerHTML = "December";
else
  alert("Invalid Number! Please choose a number between 1 and 12");
