// Create a Person constructor function that takes a name and age as arguments, and sets them as properties on the object. Add a greet method to the prototype of the Person constructor function that logs "Hello, my name is [name]" to the console. Create two instances of the Person object, and call the greet method on each instance.

// function Person(name, age)
// {
//     this.name = name;
//     this.age = age;
//     this.greet = function(){
//         console.log(`Hello, my name is ${this.name}`);
//     }
// }

// var pers1 = new Person("bob", 16);
// var pers2 = new Person("henry", 36);

// pers1.greet();
// pers2.greet();

// Create a Car constructor function that takes a make, model, and year as arguments, and sets them as properties on the object. Add a drive method to the prototype of the Car constructor function that logs "The [make] [model] is driving." to the console. Create two instances of the Car object, and call the drive method on each instance.

// function Car(make, model, year)
// {
//     this.make = make;
//     this.model = model;
//     this.year = year;
// }

// Car.prototype.drive = function(){
//     console.log(`The ${this.make} ${this.model} is driving`);
// }

// var car1 = new Car("honda", "accord");
// var car2 = new Car("Mercery", "sable");

// car1.drive();
// car2.drive();

// Create a Book constructor function that takes a title and author as arguments, and sets them as properties on the object. Add a summary method to the prototype of the Book constructor function that logs "The book [title] is written by [author]." to the console. Create two instances of the Book object, and call the summary method on each instance.

// function Book(title, author)
// {
//     this.title = title;
//     this.author = author;
// }

// Book.prototype.summary = function(){
//     console.log(`The book ${this.title} is written by ${this.author}`);
// }

// var book1 = new Book("There will be blood", "William Henry");
// var book2 = new Book("There will not be be blood", "Henry William");

// book1.summary();
// book2.summary();

// Create a Shape constructor function that takes a width and a height as arguments and set them as properties on the object. Add a area method to the prototype of the Shape constructor function that calculates and returns the area of the shape. Create two instances of the Shape object, and call the area method on each instance.

// function Shape(width, height)
// {
//     this.width = width;
//     this.height = height;
// }

// Shape.prototype.area = function()
// {
//     return `The area of the shape is ${this.width * this.height}.`
// }

// var rectangle = new Shape(12, 45);
// var square = new Shape(45, 8);

// console.log(rectangle.area());
// console.log(square.area());

// Create a class called "Car" with instance variables for make, model, and year. Include a constructor that sets these values when a new car object is created.

// class Car{
//     constructor(make, model, year){
//         this.make = make;
//         this.model = model;
//         this.year = year;
//     }
//     show(){
//         return `This ${this.year} ${this.model} ${this.make} is for sale`;
//     }
// }

// var myCar = new Car("van", "chevy", 2000);

// console.log(myCar.show());

// Create a class called "Person" with instance variables for name, age, and address. Include a constructor that sets these values when a new person object is created.

// class Person{
//     constructor(name, age, address){
//         this.name = name;
//         this.age = age;
//         this.address = address;
//     }
// }

// Create a class called "Student" that inherits from the "Person" class. Add an instance variable for student ID and include a constructor that sets this value along with the inherited variables from the "Person" class.

// class Student extends Person{
//     constructor(name, age, address, studentId){
//         super(name, age, address);
//         this.studentId = studentId;
//     }
// }

// Create a class called "Shape" with an instance variable for the number of sides. Include a constructor that sets this value. Create subclasses for "Triangle", "Square", and "Pentagon" and have them inherit from the "Shape" class. Each subclass should have a constructor that sets the number of sides specific to that shape.

// class Shape{
//     constructor(sides){
//         this.sides = sides;
//     }
// }

// class Triangle extends Shape{
//     constructor(3){
//         super(3);
//     }
// }

// class Square extends Shape{
//     constructor(4){
//         super(4);
//     }
// }

// class Pentagon extends Shape{
//     constructor(5){
//         super(5);
//     }
// }

class Shapes { 
    constructor(side) 
    { 
        this.side = side; 
    } 
    display() 
    { 
        console.log('This shape has ' + this.side + ' sides.'); 
    } 
} 
class Rectangle extends Shapes { 
    constructor(s) 
    { 
        super(s); 
        this.name = "Rectangle"; 
        super.display(); 
        console.log("This shape is a " + this.name + "." ); 
    } 
} 
var rec = new Rectangle(4);

// Create a class called "BankAccount" with instance variables for account balance and account holder name. Include a constructor that sets these values and a method called "withdraw" that allows the account holder to withdraw a specified amount from their account.

// Create a class "Fraction" with two instance variables, numerator and denominator. Add a constructor to set them values, and also add a method "reduce" which reduce the fraction to its lowest term.

// Create a class "Employee" with instance variables name, age, salary and department. Also, include a constructor that sets these values and also add a method "display" which will display the employee details.


