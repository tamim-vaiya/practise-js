var friendAge = [15, 17, 14, 16]; //array,collection, list
console.log(friendAge);
// index start from zero.
console.log(friendAge[0]);
console.log(friendAge[3]);

var sonaliAge = friendAge[2];

console.log(sonaliAge);

//update 

friendAge[1] = 21;

console.log(friendAge);

// find out positon

var positon = friendAge.indexOf(14);
console.log(positon);

// if item is not here

var positon = friendAge.indexOf(141);
console.log(positon);

// push to add in last

friendAge.push(15);
friendAge.push(19);

console.log(friendAge);

// to check length of array

console.log(friendAge.length);

// to remove from last

friendAge.pop();

console.log(friendAge);

//remove from beginning

friendAge.shift();

console.log(friendAge);

//add in beginning

friendAge.unshift(13);

console.log(friendAge);

//use slice to slice from array

var slicedFriendAge = friendAge.slice(2);
var slicedFriendAge2 = friendAge.slice(2, 4);
console.log(slicedFriendAge);
console.log(slicedFriendAge2);
console.log(friendAge);