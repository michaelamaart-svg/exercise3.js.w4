let globalCount = 1;

function localScope() {
    let localCount = 10;
    return localCount;
}

console.log(localScope());

let a = 4;
let b = 5;

function modify() {
    a = a * 7;
    b = b * 6;
}

modify();

console.log(a); 
console.log(b); 

function Studentconstructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
}

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let student1 = new Student("Samantha", 20);
let student2 = new Student("Jordan", 19);
let student3 = new Student("Mike", 21);

let school = {
    name: "ABC High School",
    location: {
        city: "Johannesburg",
        province: "Gauteng"
    }
};

console.log(student1);
console.log(school.location.city);
