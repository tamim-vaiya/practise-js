function random(n){
  var randomNumber = Math.round((Math.random()*n)+1); 
  return randomNumber;
}
var result = random(6);
console.log(result);
//sometimes is call 7, but i will fix it soon!