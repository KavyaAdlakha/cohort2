// 1.
// for( let i =1; i<=10; i++) {
//     console.log(i)
// }

// 2.
// for(let i=1; i<=20; i++) {
//     if(i%2 === 0) {
//         console.log(i)
//     }
// }

// Aurrrrrrrr we can also do this

// for(let i=2; i<=20; i+=2) {
//     console.log(i)
// }

// 3.
// for (let i=10; i>0; i--) {
//     console.log(i)
// }

// 4. 
// for(let i=1; i<=5; i++) {
//     console.log("yess")
// }

// 5.
// for(i=1; i<=10; i++) {
//     if(i%2 === 1) {
//         console.log(`${i} is odd`)
//     }
//     else console.log(`${i} is even`)
    
// }

// 6.
// let num = +prompt("number batao");
// // num = parseInt(num)
// if(num>=0) {
//     console.log("positive num")
// } else {
//     console.log("negative num")
// }

// 7.
// let age = prompt("age?");
// if(age === null) { 
//     console.error("you canceled it");
// } else if(age.trim() === "") {
//     console.error("you entered nothing");
// } else if (isNaN(age)) {
//     age = Number(age);
//     console.log("please number dede")
// }else if(age>=18) {
//     console.log("Jaa delle apna vote")
// } else if(age<0) {
//     console.log("not meaningfull")
// } else {
//     console.log("Abbe pehle 18 ka hojja")
// }

// 8.
// for(i=1; i<=10; i++) {
//     console.log(`5 x ${i} = ${5*i}`)
// }

// 9.
// let count = 0;
// for(i=1; i<=15; i++) {
//    if(i>8) {
//     count++;
//    }
// }
// console.log(count)

// 10.
//  let password = "kvy123";
//  let pass = prompt("password batao?");
//  if(pass === null) {
//     console.error("you canceled it");
//  }else if(pass.trim() === "") {
//     console.error("you entered nothing");
//  } else if(pass === password) {
//     console.log("matched")
//  } else {
//     console.log("not matched")
//  }

// 11.
// let attempts = 0;
// let khulgya = false;
// let password = "kvy123";

// let pass = prompt("password bataoo?");
// attempts++;

// if(pass === password) khulgya = true;

// while(pass !== password) {

//     if(attempts === 3) {
//         console.error("account locked");
//         break;
//     }
    
//     pass = prompt("password bataoo?");
//     if(pass === password) khulgya = true;
//     attempts++;
// }
// if (khulgya === true) console.log("account opened");

// 12.
// let word = prompt("word bolo");
// let counter = 0;

// while(word !== "stop") {
//   if(word === "yes") counter++;
//   word = prompt("word bolo")
// }
// console.log(`total times yes count : ${counter}`);

// 13.
// for(let i=1; i<=50; i++) {
//     if(i%7 === 0) {
//         console.log(i)
//     }
// }

// 14.
// let sum = 0;
// for(let i=1; i<=30; i++) {
//     if(i%2 !== 0) {
//     sum = sum + i;
//     }
// }
// console.log(sum);

// 15.
// let num = +prompt("number bolo?")
// num = Number(num);

// while(num%2 !== 0) {
//     num = +prompt("number bolo?")
//     num = Number(num);
// }

// 16.
// let start = +prompt("start");
// let end = +prompt("end")

// if(start>end) console.error("start can not be bigger than end")

// for (let i=start; i<end; i++){
//     console.log(i)
// }

// 17.
// let counter = 0;
// for(let i=1; i<=20; i++) {
//     if(counter === 3) break;

//     if(i%2 !== 0) {
//         console.log(i)
//         counter++;
//     }
// }

// 18.
// let counter = 0;
// for(let i=1; i<6; i++) {
//     let num = +prompt("number doo");
//     if(num >= 0) counter++;
// }
// console.log(counter)

// 19.
// let balance = 1000;
// let amt = +promp("amount bataoo");

// balance

// FUNCTIONS --------------------------------------------------------------

// 1.
// function sayhello() {
//     console.log("hello JS")
// }
// sayhello();

// 2.
// function add(a,b) {
//     return a + b;
// }
// let ans = add(5,4);
// console.log(ans);

// 3.
// function call(guest = "guest"){
//     console.log(`HI ${guest}`)
// }
// call("kvy");

// 4.
// function addunlimited(...nums){
//     console.log(nums)
// }
// addunlimited(1,2,3,4,5,6);  
            // or

// function addunlimited(...nums){
//     nums.forEach(function(val){
//         console.log(val)
//     })
// }
// addunlimited(1,2,3,4,5,6);

            // or

// function addunlimited(...nums){
//     sum = 0;
//     for(let i=0; i<nums.length; i++){
//         sum = sum + nums[i];
//     }
//     console.log(sum);
// }
// addunlimited(1,2,3);

            // or

// function addunlimited(...nums){
//     let ans = nums.reduce(function(acc,val){
//        return acc + val 
//     }, 0)
//     console.log(ans);
// }
// addunlimited(1,2,3,4,5,6);

// 5.
// (function(){
//     console.log("i run immediately")
// })();

// 6.
// function outer(){
//     let a = 12;
//     function inner(){
//         console.log(a);
//     }
//     inner();
// }
// outer();

// 7.
// let arr = ["mango", "banana", "orange"]
// arr.push("cherry");
// arr.shift();
// console.log(arr);

// 8.
// let arr = [1,2,3,4,5,6];
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i])
// }

// 9.
// obj = {
//     name: "kvy",
//     age: 20,
//     city: "barn"
// }

// for(let key in obj){
//     console.log(obj[key])
// }

// 10.
// setTimeout(function(){
//     console.log("times up")
// }, 2000);

// 11.
// function runTwice(fn){
//     fn();
//     fn();
// }
// runTwice(function(){
//     console.log("heloo")
// })

// 12.
// function pure(a,b){
//     console.log(a+b);
// }

// let global=0;
// function impure(a){
//     global++;
//     console.log(a+global);
// }
// pure(1,2);
// impure(8);

// 13.
// function abcd({name,age}){
//     console.log(name, age);
// }
// abcd({name: "kvy", age: 20});

// 14.
// theory

// 15.
// let arr = [1,2,3,4,5];
// let newarr = arr.map(function(val) {
//     return val*val;
// })
// console.log(newarr);

// 16.
// let arr = [1,2,3,4,5,6,7,8];
// let newarr = arr.filter(function(val){
//     return val%2 === 0;
// })
// console.log(newarr);

// 17.
// let salary = [1000,2000,3000];
// let total = salary.reduce(function(acc,val){
//     return acc+val;
// }, 0)
// console.log(total);

// 18.
// let names = ["kavya", "harsh", "yash", "kushal", "ky"];
// let ans = names.every(function(val){
//     return val.length > 3;
// })
// console.log(ans);

// 19.
// let user = {
//     name: "harsh",
//     age: 20,
//     city: "bhopal",
// }
// Object.seal(user);
// user.name = "kavya";

// 20.
