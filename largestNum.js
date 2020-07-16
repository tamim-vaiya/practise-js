var marks = [23, 55, 13, 47, 83, 58, 35, 59, 92, 84];
var max = marks[0];
for(var i = 0; i <= marks.length; i++){
  var element = marks[i];
  if(element> max){
    max = element;
  }
}
console.log('Higest value is: ', max);