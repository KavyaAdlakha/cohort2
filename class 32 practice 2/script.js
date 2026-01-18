//Level 1
//1.
function printName(name){
    console.log(name)
}
printName("Kaavyy");

//2.
let multiply = (a,b) => a * b ;
console.log(multiply(2,3));

//3.
function welcome(name = "user"){
    console.log(`Welcome ${name}`)
}
welcome();

//4.
function max(...val){
   let maxValue = val[0];

  for (let i = 1; i < val.length; i++) {
    if (val[i] > maxValue) {
      maxValue = val[i];
    }
  }

  return maxValue;
}
console.log(max(1,2,3,4,5,6,7,8,9));

//5.
(function(){
    console.log(new Date().getFullYear())
})();

//6.
function outer(){
    let sum = 15;
    function inner(){
        console.log( sum + 12);
    }
    inner();
}
outer();

//7.
let num5 = [232,458,745,965,321];
num5[2] = 100;
console.log(num5);

//8.
let arr = [1,2,3,4,5];
let i = 0
while(i < arr.length){
    console.log(arr[i]);
    i++;
}

//9.
let car = {
    brand: "Honda",
    model: "Civic",
    year: 2017,
}
let{brand,model,year} = car;
console.log(brand,model,year);

//10.
// let id = setInterval(() => {
//   console.log("Loading...");
// }, 1000);

// setTimeout(() => clearInterval(id), 5000);


//Level 2
//1.
function repeat(fn, times){
    for(let i=0; i<times; i++){
        fn();
    }
}
repeat(function(){
    console.log("repeat")
}, 5);

//2.
let a = 12;
function pure(x){
    console.log( x + 11);
}
pure(12);

function impure(){
    a++;
    console.log(a)
}
impure();

//3.
function kok({title, price}){
    console.log(title, price)
}
kok(obj = {title: "watch", price: 12000});

//4.
let obj22 = {
    name: "jai",
    fnc: function(){
        console.log(this);
    },
    fnc2: ()=> {
        console.log(this);
    }
}
obj22.fnc();
obj22.fnc2();

//5.
let arr3 = [2,3,5,6,8,7];
let newarr = arr3.map(v => v.toString())
console.log(newarr);

//6.
let arr34 = [0,21,36,null,4,undefined];
let filt = arr34.filter(Boolean)
console.log(filt)

//7.
let ar4 = [12,35,45,68,78,14,9];
let out = ar4.reduce((acc,v)=>{
    return v > acc? v : acc;
}, ar4[0])
console.log(out)

//8.
let str = ['apple', 'banana', 'guava', 'peach'];
let some = str.some(v => v.includes("a"))
console.log(some);

//9.
let obj5 = {
    name: "hira lal",
    age: "23",
    email: "hira@lal.com",
}

Object.seal(obj5)
obj5.age = 24; //can change values
obj5.socials = "instagram"; // but can't add new 

Object.freeze(obj5);
obj5.age = 24; //can't change values and add new 

//10.
let obj76 = {
    name: "kavya",
    adress: {
        state: "rajasthan",
        location: {
            city: "baran",
            langlat: {
                long: 24.7569,
                lat: 35.6489
            }
        }
    }
}
console.log(obj76?.adress?.location?.langlat?.long);


//Level 3
//1.
function upper(){
    let value = 45;
     return function lower(){
        console.log(value);
    }
};
upper() ();

//2.
function myFilter(arr, callback) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;
}
console.log(myFilter([1,2,3,4,5,6,7,8,9], v => v%2 === 0));

//3.
let ar5 = [
    {name: "kavya", age:20},
    {name: "yash", age:21},
    {name: "lucky", age:19},
];
let objjj = ar5.reduce((acc, curr)=>{
    acc[curr.name] = curr;
    return acc;
}, {})
console.log(objjj)

//4.
const users = [
  { name: "A", city: "Delhi", age: 20 },
  { name: "B", city: "Mumbai", age: 22 },
  { name: "C", city: "Delhi", age: 22 },
  { name: "D", city: "Mumbai", age: 20}
];

function groupBy(arr, property){
    return arr.reduce((acc, curr) => {
    const key = curr[property];

    if (!acc[key]) {
      acc[key] = [];
    }

    acc[key].push(curr);

    return acc;
  }, {});
}

const result = groupBy(users, "age");
console.log(result);

//5.
let student = {
    name: "Kavya",
    class: 12,
    subjects: {
        first: "maths",
        second: "physics",
        third: "chemistry"
    }
};

let shallow = {...student};
shallow.subjects.first = "english";
console.log(student.subjects.first);  //output: english
console.log(shallow.subjects.first);  //output: english

let deep = JSON.parse(JSON.stringify(student));
deep.subjects.first = "maths";
console.log(student.subjects.first); //output: english
console.log(deep.subjects.first);  //output: maths

//6.
let arrf = [1,2,[3,4],[5,6]];

function flater(arr){
    let result = [];

    for(let i=0; i<arr.length; i++){
        if(Array.isArray(arr[i])){
            result = result.concat(flater(arr[i]))
        } else{
            result.push(arr[i])
        }
    }
    return result;
}
console.log(flater(arrf));

//7.
function memoize(fn){
    const cache = {};

    return function(input){
        if(input in cache){
            return cache[input]
        }

         const result = fn(input);
         cache[input] = result;
         return result
    }
    
}

function slosquare(n){
    console.log("claculating...")
    return n * n;
}
const memosquare = memoize(slosquare);

console.log(memosquare(5))
console.log(memosquare(5))

//8.
function deepEqual(a, b) {
  if(a === b) return true;
  
  if (typeof a !== "object" || typeof b !== "object" || a === null || b === null) {
    return false;
  }
  
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) return false;
  
  for (let key of keysA) {
    if (!keysB.includes(key)) return false;

    if (!deepEqual(a[key], b[key])) {
      return false;
    }
  }

  return true;
}

console.log(deepEqual({a:1}, {a:1}))       
console.log(deepEqual({a:1}, {a:2}))             
console.log(deepEqual({a:{b:2}}, {a:{b:2}}))
console.log(deepEqual({a:{b:2}}, {a:{b:3}}))      

//9.
const user = {
  name: "Kavya",
  skills: ["JS", "HTML"],
  address: {
    city: "Baran"
  }
};

const updateuser2 = {...user,
    skills: user.skills.map(s => s === "JS" ? "JavaScript" : s),
    address: {...user.address, city: "jaipur"}
}

const updateuser3 = {...user, 
    skills: user.skills.filter(skill => skill !== "HTML")
}

console.log(user.skills)
console.log(updateuser2.skills)
console.log(updateuser3.skills)

//10.
function createUser(name, email) {
  let password = "secret123";
  let loginCount = 0; 

  return {
    getName() {
      return name;
    },

    getEmail() {
      return email;
    },

    login() {
      loginCount++;
      return `Logged in ${loginCount} times`;
    },

    changePassword(newPassword) {
      password = newPassword;
      return "Password updated";
    }
  };
}

const user1 = createUser("kavya", "kavya@mail.com");
console.log(user1.getName())
console.log(user1.getEmail())
console.log(user1.login())
console.log(user1.login())
console.log(user1.changePassword(142356))