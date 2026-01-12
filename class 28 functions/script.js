// Reccurssion-------------
// function abcd(){
//     console.log("hey")
//     abcd();
// }
// abcd();

// function abcd(n){
//     if(n===0) return;
//     console.log(n)
//     abcd(n-1)
// }
// abcd(5);

//2.---------------------functions

function doSomething(...arr){
    console.log(arr[0])
    console.log(arguments[1])
    console.log(arguments[2])
}
doSomething("kaavyy",20,"kavya@email.com")