function reverseString(str){
  var reverse = "";
  for (i=0; i<str.length; i++){
    var char = str[i];
    reverse = char + reverse ;
  }
  return reverse;
}

var result = reverseString("Hello Alien vai brother.");
console.log(result);
console.log(reverseString('How are you?'));
