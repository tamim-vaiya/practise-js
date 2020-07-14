function factorial(n){
  fact = 1;
  for(var i = 1; i <=n; i++){
    var fact = fact * i;
  }
  return fact;
}
var result = factorial(10);
console.log(result);


