//1.
function sayHello(){
    console.log("Hello Javascript")
}
sayHello();

//2.
function add(a,b){
    return a+b;
}
console.log(add(4,6));

//3.
function greet(name = "guest"){
    console.log(`Hi ${name}`)
}
greet();

//4.
function addUnlimited(...val){
    let sum = 0;
    val.forEach(function(v){
      sum += v;
    })
    console.log(sum)
}
addUnlimited(1,2,3,4,5,6,7,8,9);

//or

function adds(...val){
    let ans = val.reduce(function(acc,v){
        return acc + v
    }, 0)
    console.log(ans);
}
adds(1,2,3,54,51,62,7,8,9);

//5.
(function(){
    console.log("I run instantly")
})();

//6.
function outer(){
    let a = 12;
    function inner(){
        console.log(a)
    }
    inner();
}
outer();

//7.
let fruits = ["apple", "banana", "guvava", "mango", "peach"];
fruits.push("strawberry")
console.log(fruits);
fruits.shift();
console.log(fruits)

//8.
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i])
}

//9.
let person = {
    name: "Kavya",
    age: 20,
    city: "kota"
}

for(let key in person){
    console.log(key, person[key])
}

//10.
setTimeout(() => {
    console.log("time's up")
}, 2000);