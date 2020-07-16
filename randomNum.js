function random(n){
  var randomNumber = Math.floor((Math.random()*n)+1); 
  return randomNumber;
}
var result = random(6);
console.log(result);
