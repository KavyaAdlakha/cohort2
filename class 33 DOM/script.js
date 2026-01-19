// let head = document.querySelector("#heading");
// head.innerHTML = "Bhaago Bachho"
// head.style.color = "royalblue";
// head.style.backgroundColor = "lightblue"

// let btn = document.querySelector("button");
// btn.addEventListener("click", function(){
//     console.log("button clicked")
// })



// ---------------Counter---------------------
let inc = document.querySelector('#inc');
let dec = document.querySelector('#dec');
let res = document.querySelector('#res')
let h1 = document.querySelector('h1');

let count = 0;

inc.addEventListener("click", function (){
    count++
    h1.innerHTML = count;
})

dec.addEventListener("click", function (){
    count--
    h1.innerHTML = count;
})

res.addEventListener("click", function(){
    count = 0
    h1.innerHTML = count;
})