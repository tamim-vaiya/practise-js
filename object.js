var student = { id:121, phone: 215454, name:"Abir"};
var student2 = { id:131, phone: 125485, name:"Mahi"};
// //num 1
// var phoneNo = student2.phone;
// console.log(phoneNo);
// //num2
// var phoneNo = student2["phone"];
// console.log(phoneNo);
// //num3
// var phonePropName = "phone";

// var phoneNo = student2[phonePropName];

console.log(student);
console.log(student2);

//change prop
student2.phone = 154852;
var phoneNo = student2["phone"];
console.log(phoneNo);
student2.cinema = "Ogni22";
console.log(student2);

