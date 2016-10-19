var names = ['Jose', 'Luis', 'Silvia', 'Rebeca'];
var name= 'Juan';
//
// names.forEach(function(name){
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('Arrow func', name);
// });
//
// names.forEach((name)=>console.log('Arrow simple', name));

// var returnMe = (name)=> name + '!';
// console.log(returnMe('Damiancito'));

// var person  ={
//   name: 'Damian',
//   greet: function(){
//     names.forEach(
//       (name) => console.log(this.name + ' says hi to ' + name)
//     );
//   }
// }
//
// person.greet();


function add(a, b) {
    return a + b;
}

var addStatement = (a, b) => {
    return a + b
};
var addExpression = (a, b) => a + b;

console.log('addStatement ' + addStatement(1, 2));
console.log('addExpression ' + addExpression(4, 2));
