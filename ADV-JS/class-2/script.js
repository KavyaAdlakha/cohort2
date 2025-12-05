// value of this in different conditions------->

// console.log(this);


// function abcd(){
//     console.log(this);
    
// }
// abcd();


// let obj = {
//     name: "harr",
//     fnc: function(){
//         console.log(this);
//     }
// }
// obj.fnc()


// let es6 = {
//     name: "kvy",
//     fnc:  ()=> {
//         console.log(this);
        
//     }
// }
// es6.fnc()


// let obje = {
//     name: "harr",
//     fnc: function(){
//         function def(){
//             console.log(this);
//         }
//         def();
//     }
// }
// obje.fnc()


// let objec = {
//     name: "harr",
//     fnc: function(){
//          defg = ()=>{
//             console.log(this);
//         }
//         defg();
//     }
// }
// objec.fnc()

// let h1 = document.querySelector("h1");

// h1.addEventListener("click", function(){
//     console.log(this);  
// })

// call, apply, bind--------------------------------------------------

let obj = {
    name: "kvy"
};

// call
function abc(){
    console.log(this);
}
abc.call(obj);

// apply
function bcd(a,b,c){
    console.log(this, a,b,c);
}
bcd.apply(obj, [1,2,3]);

// bind
function cde(a,b,c){
    console.log(this, a,b,c);
}
let newfnc = cde.bind(obj,1,2,3);
newfnc();