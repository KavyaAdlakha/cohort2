//Level 2-------
//1.
function runTwice(fn){
    fn();
    fn();
}
runTwice(function(){
    console.log("chal gaya")
})

//2.
let a = 15;
function pure(v){
    console.log(a + v)
}
pure(12);

function impure(v){
    a++;
    console.log(a+v)
}
impure(20);

//3.
function klk({name,age}){
    console.log(name, age)
}
klk({name: "Kaavyy", age: 20})

//4.
let issue = {
    name: "kaavv",
    fnc: function(){
        console.log(this)
    },
    fnc2: ()=>{
        console.log(this)
    }
}
issue.fnc();
issue.fnc2();

//5.
let nums = [1,2,3,4,5,6,7,8,9];
let sqr = nums.map(function(v){
    return v*v;
})
console.log(sqr);

//6.
let eve = nums.filter(function(v){
    return v%2 === 0
})
console.log(eve)

//7.
let salary = [1000, 2000, 3000];
let total = salary.reduce(function(acc,v){
    return acc + v
}, 0)
console.log(total);

//8.
let names = ["kaavyy", "yash", "kushal", "manan", "ogy"];

let soome = names.some(function(v){
    return v.length > 3;
})
console.log(soome);

let ever = names.every(function(v){
    return v.length > 3;
})
console.log(ever);

//9.
let user = {
    name: "kaav",
    age: 20,
    email: "has@mail.com"
};

// Object.freeze(user);
// user.age = 30;

Object.seal(user);
user.age = 30;
user.social = "instagram"

//10.
let person = {
    name: "yash",
    address: {
        city: "kota"
    }
}
let {city} = person.address;
console.log(city);