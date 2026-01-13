//fnc declaration
function dance(){
    console.log("function declaration")
}
dance(); 

//fnc expression
let lolo = function(){
    console.log("function expression")
}
lolo();

// parameters and arguments
function naach(v1){
    console.log(`${v1} is dancing`)
}
naach("yash")
naach("manan")
naach("kushal")


// function add(v1,v2){
//     console.log(v1 +v2)
// }
// add(1,2)

//default parameters
function add(v1 = 0,v2 = 0){
    console.log(v1 +v2)
}
add()

//destructured parameter
function uyt({name,age}){
    console.log(name,age);
}
uyt({name: "kaavyy", age: 20})

//rest parameters
function dcd(...val){
    console.log(val)
}
dcd(1,2,3,4,5,6)

//positional arguments
function pos(a,b,c,d){
    console.log(a,b,c,d);
}
pos(1,2,3,4)

//spread argument
function spr(a,b,c,d){
    console.log(a,b,c,d);
}
let arr = [1,2,3,4]
spr(...arr);

//return
function fgf(v){
    return 12 + v;
}
let val = fgf(23);
console.log(val)

//nested function
function plp(){
    function lll(){
        console.log("nested fnc")
    }
    lll();
}
plp();

//lexical scoping (scope chain)
function nm(){
    let a = 12;
    function mk(){
        let b = 13;
        function kl(){
            let c = 14;
            console.log(a,b,c)
        }
        kl();
    }
    mk();
}
nm();

//IIFE
(function(){
    console.log("hey")
})();

//fat arrow fnc
let arrow = ()=>{
    console.log("arrow function")
}
arrow();

//anonymus fnc
// function(){

// }

// hof
function vfc(val){
    val();
}
vfc( function(){
    console.log("hey")
})

//-------or
function bgb(){
    return function(){
        console.log("heyjey")
    }
}
bgb() ();

// first class function -> func uses as variables
function vfv(a,b){
    a();
    console.log(b)
}
vfv( function(){
    console.log("hey")
}, 27)

//pure vs impure
let a = 12;
function nkn(){
    console.log(a)
}
nkn()

function imp(){
    a++
    console.log(a)
}
imp()

//closures
function cls(){
    let b = 13;
    return function(){
        console.log(a + 10)
    }
}
cls() ();

//hoisting
ty();
function ty(){
    console.log("thanks")
}

//practice------------
// 1. use rest parameter to accept any number of score and return the total
function getScore(...val){
    let total = 0;
    val.forEach(function(v){
        total += v
    })
    return total;
}
console.log (getScore(10,12,13,14));

//2. check age
function checkAge(age){
    if(age<18) return "to young";
    return "Allowed"
}
console.log(checkAge(20))

//3. identify hof
let result = [1,2,3].map(function(x){
    return x * 2
})
console.log(result)

//4. counter 
// function outer(){
//     let count = 0;
//     return function(){
//         count++;
//         console.log(count)
//     }
// }
// let counter = outer();
// counter();
// counter();
// counter();

//5. BMI calculator
function bmi(weight, height){
    return weight / (height*height)
}
console.log(bmi(80, 1.8).toFixed(2))

//6. Create a reusable discount calculator with Hof
function discountCalculator (discount){
    return function(price){
        return price - price*(discount/100);
    }
}
let ten = discountCalculator(10);
let twenty = discountCalculator(20);
console.log(ten(200))
console.log(twenty(200))

// 7. Counter using closures
function counter(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}
let c = counter();
console.log(c());
console.log(c());
console.log(c());
console.log(c());

//8. create a pure function to transform value
function double(val){
    return val * 2;
}
console.log(double(10));

//9.
(function(){
    const password = 'secret password';
    console.log(password)
})()