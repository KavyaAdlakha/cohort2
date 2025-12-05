// Section 1. Question 1.-------------------------
// let user = {
//     name: "kvy",
//     email: "kvy@mail",
//     login: function(){
//         console.log("user logged in");
//     }
// };
// user.login()

// Question2.----------
// class User{
//     constructor(name, email){
//         this.name = name;
//         this.email = email;
//     }
//     loggedIn(){
//         console.log("user logged in");
//     }
// }

// let u1 = new User("kvy","kvy@mail")
// let u2 = new User("kvy","kvy@mail")
// let u3 = new User("kvy","kvy@mail")
// let u4 = new User("kvy","kvy@mail")
// let u5 = new User("kvy","kvy@mail")

// Question3----------------
// let product={
//     name: "cap",
//     price: 3000,
//     discountedPrice: function(){
//         return this.price - 200;
//     }
// }
// console.log(product.discountedPrice());

// Section 2. Question 4.-----------------
// class Car{
//     constructor(brand, speed){
//         this.brand = brand;
//         this.speed = speed;
//     }

//     drive(){
//         return this.brand+ '-'+ this.speed;
        
//     }
// }
// let car1 = new Car("TATA", 140);

// Question 5-------------------
// class Car{
//     constructor(brand, speed){
//         this.brand = brand;
//         this.speed = speed;
//     }

//     drive(){
//         return this.brand+ '-'+ this.speed;
        
//     }
// }
// let car1 = new Car("TATA", 140);
// let car2 = new Car("Maruti", 120);

// Question 6---------------------
// If classes did not exist, we would write the logic using simple 
// functions and objects, but this becomes a problem in large projects 
// because the code gets harder to organize, every object ends up having 
// its own copy of the same functions, and there is no clean way to reuse
//  or extend behavior. As the project grows, this leads to messy code, 
//  duplication, difficulty in updating features, and more chances of bugs.
// Classes solve these issues by giving a clear structure and a single place 
// to define shared logic.

// Section 3 Question 7-----------------
// class Student{
//     constructor(name, rollno){
//         this.name = name;
//         this.rollno = rollno;
//     }
//     introduce(){
//         return `My name is ${this.name} and my roll number is ${this.rollno}.`
//     }
// }
// let stu1 = new Student("Harsha", 21)

// Question 8----------------
// Removing this causes the object’s properties to remain undefined, 
// because you are not storing values inside the object, only inside 
// temporary variables that disappear after the constructor finishes.

// Question 9---------------------
// let obj = {
//     sayName: function(){
//         console.log(this);
//     },
//     sayArrowName: ()=>{
//         console.log(this);
//     },
// }
// obj.sayName();
// obj.sayArrowName();

// Section 4 Question 10------------------
// function User(){
//     this.name = "harsh";
// }
// let usr1 = new User();

// Question 11---------------------------
// function User(){
//     this.name = "harsh";
// }
// User.prototype.loggedin = function(){
//     console.log("loggedin");
    
// }
// let usr1 = new User();

// Question 12---------------
// function User(){
//     this.name = "harsh";
//     this.loggedin = function(){
//         console.log("loggedin");   
//     }
// }

// let usr1 = new User();
// let usr2 = new User();

// Section 5 Question 13, 14------------------------
// function abc(a,b,c){
//     console.log(this.name);
// }
// let obj = {
//     name: "harsh",
// }
// abc.call(obj);
// abc.apply(obj, [1,2,3])
// let fnc = abc.bind(obj)
// fnc();

// Question 15-----------------------
// let student1 = {
//     name: "Harsh",
//     intro: function () {
//         console.log(`My name is ${this.name}.`);
//     }
// };

// let student2 = {
//     name: "Kavye",
// };

// student1.intro.call(student2);
