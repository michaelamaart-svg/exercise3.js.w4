// TODO: Create a global variable called globalCount
let globalCount = 1;
// TODO: Create a function that demonstrates local scope
function localScope() {
    let localCount = 10;
    return localCount;
}

console.log(localScope());

// TODO: Create a function that tries to modify both variables
let a = 4;
let b = 5;

function modify() {
    a = a * 7;
    b = b * 6;
}

modify();

console.log(a); 
console.log(b); 
// TODO: Create a Student constructor function
function Studentconstructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
}
// TODO: Create several student instances

// TODO: Create an object literal with nested properties