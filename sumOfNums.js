function getArraySum(num){
  var sum = 0;
  for(var i =0; i<num.length; i++){
    var element = num[i];
    sum = sum + element;
  }
  return sum;
}
var numbers= [23, 55, 13, 47, 83, 58, 35, 59, 92, 84];
var result = getArraySum(numbers);
console.log('Total of numbers: ', result);
var total = getArraySum([45, 46, 52, 58, 24, 68, 13, 48, 92]);
console.log('Total of numbers: ', total);