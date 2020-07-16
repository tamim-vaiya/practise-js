var num= [5, 4, 3,5, 3 ,2, 6 , 3];
var unique=[];
for (var i = 0; i<num.length; i++){
  var element = num[i];
  var index = unique.indexOf(element);
  if(index == -1){
    unique.push(element);
  }
}
console.log(unique);

