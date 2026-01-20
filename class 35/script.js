let main = document.querySelector("main");
let btn = document.querySelector("button");

// btn.addEventListener("click", function(){
//     let div = document.createElement('div')

//     var x = Math.floor(Math.random()*100)
//     var y = Math.floor(Math.random()*100)
//     var r = Math.floor(Math.random()*360)
//     var c1 = Math.floor(Math.random()*256)
//     var c2 = Math.floor(Math.random()*256)
//     var c3 = Math.floor(Math.random()*256)


//     div.style.height = '50px';
//     div.style.width = '50px';
//     div.style.position = 'absolute';
//     div.style.left = x+'%'
//     div.style.top = y+'%'
//     div.style.rotate = r+'deg'
//     div.style.backgroundColor = `rgb(${c1},${c2},${c3})`

//     main.appendChild(div)
// })

var arr = ['Hey! I am kavya','Sheryians is Best.','Someone is handsome','bhaiya is great.','JS is Love','Keep practicing guys...']

btn.addEventListener('click',function(){
    var h1 = document.createElement('h1')

    var x = Math.floor(Math.random()*80)
    var y = Math.floor(Math.random()*80)
    var r = Math.floor(Math.random()*360)
    var s = Math.random()*3

    var a= Math.floor(Math.random()*arr.length);
    h1.innerHTML = arr[a];
    h1.style.position = 'absolute'
    h1.style.left = x+'%'
    h1.style.top = y+'%'
    h1.style.rotate = r+'deg'
    h1.style.scale = s
    
    main.appendChild(h1)
})