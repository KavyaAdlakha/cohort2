
// let btn = document.querySelector('button')
// let h1 = document.querySelector('h1')

// btn.addEventListener('click', function(){
//     setTimeout(() => {
//         h1.innerHTML = "Hello I am Yash"
//     }, 2000);
// })


// var a = 0
// let int = setInterval(() => {
//     a++
//     console.log(a)
// }, 1000);

// setTimeout(() => {
//     clearInterval(int)
// }, 5000);


// -----------------downloader ccard---------------

let btn = document.querySelector('button')
let h2 = document.querySelector('h2')
let inner = document.querySelector('.inner')

let loader = 0;

btn.addEventListener('click', function(){
    btn.style.pointerEvents = 'none'
    let num = 50 + Math.floor(Math.random()*50)
    

    let int = setInterval(() => {
        loader++;
        h2.textContent = loader+'%'
        inner.style.width = loader+'%'
    }, num);

    setTimeout(() => {
        clearInterval(int)
        btn.innerHTML = "Downloaded"
        btn.style.opacity = 0.7
        console.log(`Downloaded in ${num/10} sec`)
    }, num*100);
})