//Arrays
let arr = [112,208,348,462,5012]
console.log(arr[0])

//push
arr.push(6)
console.log(arr)

//pop
arr.pop();
console.log(arr)

//shift
arr.shift();
console.log(arr)

//unshift
arr.unshift(0);
console.log(arr)

//indexof
console.log(arr.indexOf(3));

//array destructuring
let [a,b] = arr;
console.log(a)
console.log(b)

//filter - condition apply
let arr2 = arr.filter(function(val){
    return val<300
})
console.log(arr2);

//map - use map when you want to make new array with data off previous array
let arr5 = arr.map(function(val){
    if (val>0) return val;
})
console.log(arr5)

//reduce - sarre values se ek value banani hai
let arr6 = arr.reduce(function(acc, val){
    return acc + val;
}, 0)
console.log(arr6)

//some
let arr7 = [10,20,45,90];
let any = arr7.some(function(val){
    return val > 85;
})
console.log(any)

//every
console.log (arr7.every(function(val){
    return val>10
}))

//spread operator - copy the values of main element  
let arr3 = [...arr]
console.log(arr3)

//reverse -change main element
arr.reverse();
console.log(arr);

// //splice -change main element
let arr4 = arr.splice(1,2);
console.log(arr4);

//slice - does not change main element
let newarr = arr.slice(0,3)
console.log(newarr)

//sort
let nums = [40, 10, 30, 20];
nums.sort((a, b) => a - b);
console.log(nums);

//iteration over arrays
let students = ["rahul", "yash", "kanav"]
//for Loop
for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}

// forEach Loop
students.forEach((name) => {
  console.log(name);
});


//Objects--------------- 
let obj = {
    name: "kaavyy",
    age: 20,
    email: "kavya@mail.com",
    course: "BSc"
}
console.log(obj)

let obj2 = new Object();

//accessing
console.log(obj["name"])
console.log(obj.age)

//deleting
delete obj.course;
console.log(obj)

//nested
let obj3 = {
    name: "kaavyy",
    socials: {
        instagram: "asdfe",
        facebook: "lkiop"
    }
}
console.log(obj3.socials.facebook);

//forIn loop
for(let key in obj){
    console.log(key, obj[key])
}

//spread operator
let obj4 = {...obj}

//deep cloning - jab nested obj spread se copy kiya gya hoo tabb wohh refrence copy bann jaati hai
let obj6 = JSON.parse(JSON.stringify(obj3));
console.log(obj6)

//optional chaining

console.log(obj3?.socials?.instagram)
