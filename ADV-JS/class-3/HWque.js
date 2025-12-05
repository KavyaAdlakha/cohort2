// SECTION 1 Question 1-----------
// let laptop = {
//     brand: "Asus",
//     price: 80000,
//     start: function(){
//         console.log("Laptop Started");
//     }
// }
// laptop.start()

// Question 2---------------------
// let laptop = {
//     brand: "Asus",
//     price: 80000,
//     start: function(){
//         console.log("Laptop Started");
//     },
//     increase: function(){
//        this.price = this.price * 1.10;
//        console.log(`New price is ${this.price}`);
//     }
// }
// laptop.increase();

// Question 3-------------------------
// for 10 laptop of same structure and different data i have to write
//  the same simple logic 10 times and it made the code bulky and bit difficult 
// to understand and for large code become easy to get bugs. and also become problem 
// when i want to update the data.

// Section 2 Question 4------------------
// class Employee{
//     constructor(name, salary){
//         this.name = name;
//         this.salary = salary;
//     }
//     showDetails(){
//         console.log(`My name is ${this.name} and my salary is ${this.salary}`);
//     }
// }
// let emp1 = new Employee("harsh", 75000)

// Question 5------------------------------
// class Employee{
//     constructor(name, salary){
//         this.name = name;
//         this.salary = salary;
//     }
//     showDetails(){
//         console.log(`My name is ${this.name} and my salary is ${this.salary}`);
//     }
// }
// let emp1 = new Employee("Harsh", 75000)
// let emp2 = new Employee("Sarthak", 70000)
// let emp3 = new Employee("Ankur", 65000)

// emp1.salary = 90000;  
// emp1.showDetails();  
// emp2.showDetails();  
// emp3.showDetails();

// Question 6 ----------------------
//class is better option because it esay to manage good for larger codes and 
// easy for updation of the data.

// Section 3 Question 7,8,9,10-------------------------
// class BankAccount{
//     constructor(accountHolderName, balance){
//         this.name = accountHolderName;
//         this.balance = balance;
//     }
//     deposit(val){
//         this.balance += val;
//         console.log(`Your updated balance is ${this.balance}`);
//     }
// }
// let customer1 = new BankAccount("yash", 1200)
// let customer2 = new BankAccount("manan", 1500)

// customer1.deposit(5000);

// Section 4 Question 11,12------------------------
// let profile = {
//     userName: "haahaa",
//     printName: function(){
//         console.log(this.userName);
//     }
// }
// profile.printName() //output-> haahaa

// Question 13------------------------
// let profile = {
//     userName: "haahaa",
//     printName: function(){
//         console.log(this.userName);
//     }
// }
// let fn = profile.printName;
// fn(); //output-> undefined

// Question 14--------------------------
// let profile = {
//     userName: "haahaa",
//     printName: function(){
//         console.log(this.userName);
//     }
// }
// let fn = profile.printName.bind(profile);
// fn(); //output-> undefined

// Section 5 Question 15,16-----------------------
// function Vehicle(type, wheels) {
//     this.type = type;
//     this.wheels = wheels;
//     this.describe = function () {
//         console.log(`This is a ${this.type} with ${this.wheels} wheels.`);
//     }
// }
// let v1 = new Vehicle("car", 4)
// let v2 = new Vehicle("bike", 2)

// v1.describe();
// v2.describe();

// Question 17-----------------------
// function Vehicle(type, wheels) {
//     this.type = type;
//     this.wheels = wheels;  
// }
// Vehicle.prototype.describe = function () {
//         console.log(`This is a ${this.type} with ${this.wheels} wheels.`);
//     }
// let v1 = new Vehicle("car", 4)
// let v2 = new Vehicle("bike", 2)

// v1.describe();
// v2.describe();

// Question 18---------------------
// Using prototype is preferred because it places methods outside the constructor, so all objects created from the constructor share the same method instead of creating multiple copies.
// This reduces memory usage, makes the code faster, easier to maintain, and avoids duplication.
// With prototype, updates to the method also automatically reflect for all objects.

// Section 6 Question 19,20,21----------------
// function showBrand (){
//     console.log(this.brand);
// }
// let obj1 = {
//     brand: "zara"
// }
// let obj2 = {
//     brand: "h&m"
// }
// showBrand.call(obj1)
// showBrand.call(obj2)

// Question 22---------------
// When we call showBrand() normally, this does not point to any object, so it becomes the global object (window).
// Using call(), we can manually set what this should refer to.
// This means we can run the same function for different objects without rewriting it.
// So call() solves the problem of controlling the value of this inside a function.

// Section 7 Question 23,24,25---------------
// function introduce(city, role) {
//     console.log(`My name is ${this.name}, I live in ${city}, and I work as a ${role}.`);
// }

// let property = {
//     name: "harsh"
// }
// introduce.apply(property, ["pune","SDE"])

// Question 26-----------------------
//call passes arguments individually, while apply passes them as an array.

// SEction 8 Question 27,28,29-----------------------
// function greet (){
//     console.log(`hello, my name is ${this.name}`);
// }

// let obj = {
//     name: "harsha"
// }

// let bound = greet.bind(obj)
// bound(); //output-> hello, my name is harsha

// Question 30-------------------------
//bind is useful because it permanently fixes the value of this, even when the 
// function is called later, separately, or inside a callback.