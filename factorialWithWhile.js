function factorial(n){
  var fact = 1;
  var i = 1;
  while (i <= n){
    fact = fact * i;
    i++;
  }
  return fact;
}
var result = factorial(10);
console.log(result);