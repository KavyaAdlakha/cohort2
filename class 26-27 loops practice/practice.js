// level 1 -------------
//10.
// let password = "shery123";
// let userpass = prompt("Give password");
// if(userpass === null){ console.error("you pressed cancel") } 
// if(userpass.trim() === ""){ console.error("Empty")}   
// else {
//     if(password === userpass.trim()){
//     console.log("Access granted")
//     } else {
//     console.log("Invalid password")
//     }
// }

// level 2---------------
//11.
// let success = false;
// let attempt = 0;
// let correctpassword = "shery123";

// for(let i=1; i<4; i++){
//     let password = prompt("Give password");

//     if(password === null){
//         console.error("You pressesd cancel")
//         break;
//     }

//     if(password.trim() === ""){
//         console.warn("password can not be empty")
//         break;
//     }

//     attempt++;

//     if(correctpassword === password){
//         console.log("Access Granted")
//         success = true;
//         break;
//     }
// }

// if(!success && attempt === 3 ){
//     console.log("Account locked")
// }

// ------------------------OR-----------------------------------

// let attempt = 0;
// let success = false;
// let pass = "shery123";

// let password = prompt("Password batao");
// attempt++;

// if(password === pass) {success = true;};

// while(password !== pass){

//     if(password === null){
//         console.error("You pressesd cancel")
//         break;
//     }

//     if(password.trim() === ""){
//         console.warn("password can not be empty")
//         break;
//     }

//     if(attempt === 3){
//         console.error("Acount locked!");
//         break;
//     }

//     password = prompt("Password batao");
//     if(password === pass) {success = true;};
//     attempt++;
// }
// if(success === true){ console.log("Acount opened")}


//12.
// let str = "stop";
// let count = 0;
// let success = false;
// let pass = prompt("Give the word");
// if(pass === str){ success = true; };
// if(pass === "yes"){ count++; }

// while(pass !== str){
//     let pass = prompt("Give the word");

//     if(pass === "yes"){
//         count++;
//     }
//     if(pass === str){
//         success = true;
//         break;
//     }
// }
// if(success === true){ console.log(`Count of yes is ${count}`)}

//13.
// for(let i=1; i<51; i++){
//     if(i%7 === 0){ console.log(i)}
// }

// 14.
// let sum = 0;
// for(let i=1; i<31; i++){
//     if(i%2 !== 0){
//         sum = sum + i;
//     }
// }
// console.log(sum);

//15.
// let num = prompt("Give number");
// num = Number(num);

// while(num%2 !== 0){
//     let num = prompt("Give number");
//     num = Number(num);
// }

//16.
// let start = +prompt("Start no.");
// let end = +prompt("End no.");
// if(start>end){ console.error("start can not be bigger than end")}
// for(let i=start; i<end; i++){
//     console.log(i)
// }

//17.
// let count = 0;
// for(let i=1; i<21; i++){
//     if(count === 3){
//         break;
//     }
//     if(i%2 !== 0){
//         count++;
//         console.log(i)
//     }
// }

//18.
// let count = 0;
// for(let i=1; i<6; i++){
//     let num = +prompt("Give no.");
//     if(num>0){ count++ };
// }
// console.log(`Count of positive no. is ${count}`)

// //19.
let balance = 1000;
let withdrawls = 0
while(withdrawls < 3){
    let draws = +prompt("Withdrawl amount");

    if(draws <= 0 || isNaN(draws)){
        console.log("Invalid amount");
        continue;
    }

    withdrawls++;
    if(draws <= balance){
        balance -= draws;
        console.log(`${draws} Deduct. remaing balance is ${balance}`)
    } else{
        console.log("Insufficient balance");
    }
}
console.log(`Balance: ${balance}`);