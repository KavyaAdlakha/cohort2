// var a = Math.floor(Math.random()*10);
// console.log(a)


// --------------------color changing box----------

let box = document.querySelector('#box');
let btn = document.querySelector('button');

btn.addEventListener('click', function(){
    var c1 = Math.floor(Math.random()*256)
    var c2 = Math.floor(Math.random()*256)
    var c3 = Math.floor(Math.random()*256)

    // console.log(c1,c2,c3)
    box.style.backgroundColor = `rgb(${c1},${c2},${c3})`
});


// --------------------------------------------------------

var arr = ["kvy", "garry",'bob', "kush", "sun", "riti", "yas", "mann"]
// var btn = document.querySelector('button')
btn.addEventListener('click', function(){
   var a = Math.floor(Math.random()*arr.length)
   console.log(arr[a]) 
});

// Array of objects
let teams = [
    {
        team: "CSK",
        primary: "yellow",
        secondary: "blue"
    },
    {
        team: "RCB",
        primary: "red",
        secondary: "black"
    },
    {
        team: "MI",
        primary: "blue",
        secondary: "gold"
    },
    {
        team: "KKR",
        primary: "purple",
        secondary: "gold"
    }
]

var n = Math.floor(Math.random()*teams.length)
console.log(teams[n])