//  Your code here
var Person = function (age, name) {
    this._age = age;
    this._name = name;
};Person.prototype.introduce = function () {
    return "My name is " + this._name + ". I am " + this._age + " years old.";
};
var Student = function(name,age,class){
    Person.call(this,name,age);
    this.class=class;
}
Student.prototype=Object.create(Person.prototype);
Student.prototype.constructor=Student;

Student.prototype.which_class=function(){
    console.log("I am a Student"+".I am at Class"+this.class);
}

var s1=new Student("Tom",21,2);
s1.how_old();
s1.which_class();
