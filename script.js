//your JS code here. If required.
class Student{
    constructor(name, age, grade){
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
}
Student.prototype.getKeys = function(){
    return Object.keys(this);
}

let student = new Student("john",24,7.4);
console.log(student);
console.log(student.getKeys());