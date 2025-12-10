//promises

// const pro = new Promise((res,rej) => {
//     setTimeout(() => {
//         res();
//     }, 3000);
// });

// pro.then(function(){
//     console.log('resolved');
// })
// .catch(function(){
//     console.log('rejected');
// })

// Excercise------------------- fetch api

// 1.
// fetch('https://randomuser.me/api/')
// .then(function(notReadableData){
//     return notReadableData.json()
// })
// .then(function(asliData){
//     console.log(asliData.results[0].name.first);
// })

// 2.
// fetch("https://dogapi.dog/api/v2/breeds")
//   .then(raw => raw.json())
//   .then(data => console.log(data.data[0].attributes))
//   .catch(err => console.error(err));

// async await------------->>>>>>>>>>>>>>>

// async function abc(){
//    let raw = await fetch('https://randomuser.me/api/');
//    let data = await raw.json();
//    console.log(data);
// }
// abc();


// function getNum(){
//     return new Promise ((res,rej)=> {
//     let num = Math.floor(Math.random()*10)
//     setTimeout(() => {
//         if(num<5){
//         res("true")
//     } else rej("false")
//     }, 2000);
// })
// }

// async function abcd(){
//     let v = await getNum()
//     console.log(v);
// }
// abcd();

// setTimeout and setInterval--------------