let num;
let one;
let two;
let z;
function displaynum(x) {
    alert ('choose two number');
one = prompt ('choose one number','');
two = prompt('choose second number','');
z=  (one%two);
console.log (z);
if (z == 0) {
alert ('There is no remainder');
} else {
    alert ('There is a remainder of: ' + z);
}
}
