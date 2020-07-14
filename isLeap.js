
// function isLeap (year){
//   if (year/4){
//     console.log('This is a leap year!');
//   }
//   else {
//     console.log('This is not a leap year!');
//   }
// }
// var testleap = isLeap(2020);


function isLeapYear(year) {
  return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
  }
console.log(isLeapYear(3567));
console.log(isLeapYear(2036));