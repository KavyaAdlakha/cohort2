// var h1 = document.querySelector('h1');
// h1.innerHTML = 'crazy guyys'
// h1.style.color = 'red'
// h1.style.backgroundColor = 'white'

// var box = document.querySelector('#box')
// box.innerHTML = 'hey hey'
// box.style.backgroundColor = 'white'

// h1.addEventListner("click",function(){
//     console.log('hello')
// })



// var h1 = document.querySelector('h1')
// var btn = document.querySelector('button')

// btn.addEventListener("click",function(){
//     h1.innerHTML = 'I am BATMAN'
//     h1.style.color = 'red'
//     h1.style.fontSize = '60px'
// })


// var counter = document.querySelector('h1');
// var inc = document.getElementById('inc');
// var dec = document.getElementById('dec');

// var count = 0

// inc.addEventListener("click", function(){
//     count++;
//     counter.innerHTML = count
// })

// dec.addEventListener("click",function(){
//     count--;
//     counter.innerHTML = count
// })


// class2-->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// color changer practice project-------------------
// var box = document.getElementById('box');
// var btn = document.querySelector('button')

// btn.addEventListener('click', function(){
//     var c1 = Math.floor(Math.random()*256)
//     var c2 = Math.floor(Math.random()*256)
//     var c3 = Math.floor(Math.random()*256)
    
//     box.style.backgroundColor = `rgb(${c1},${c2},${c3})`
// })


// -----------------------
// var arr = ["kvy", "garry",'bob', "kush", "sun", "riti", "yas", "mann"]
// var btn = document.querySelector('button')
// btn.addEventListener('click', function(){
//    var a = Math.floor(Math.random()*arr.length)
//    console.log(arr[a]) 
// })


// class 3 --->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>-

// var btn = document.querySelector('button')

// btn.addEventListener('click', function(){
//     var h1 = document.createElement('h1')
//     h1.innerHTML =  'hello'
//     console.log(h1)
// })

// ------------------------------------------------------
// var h1 = document.createElement('h1')
// var btn = document.createElement('button')

// h1.innerHTML = 'hello from kvy'
// btn.innerHTML = 'download'

// var main = document.querySelector('main')
// main.appendChild(h1)
// main.appendChild(btn)

// -----------------------------------------------------

// var btn = document.querySelector('button')
// var main = document.querySelector('main')

// btn.addEventListener('click', function(){
//     var div = document.createElement('div')

//     var x =Math.random()*100
//     var y =Math.random()*100
//     var r = Math.random()*360
//     var c1 = Math.floor(Math.random()*256)
//     var c2 = Math.floor(Math.random()*256)
//     var c3 = Math.floor(Math.random()*256)

//     div.style.height = '50px'
//     div.style.width = '50px'
//     div.style.position = 'absolute'

//     div.style.backgroundColor = `rgb(${c1},${c2},${c3})`
//     div.style.left = x+'%'
//     div.style.top = y+'%'
//     div.style.rotate = r+'deg'

//     main.appendChild(div)
// })

// ---------------------------------------------------

// var btn = document.querySelector('button')
// var main = document.querySelector('main')

// var arr = ["Apple Juice","Red Shirt","Big House","Fast Car","Blue Sky","Hot Coffee","Cute Dog","Small Bag","Green Tree","Black Phone"]

// btn.addEventListener('click', function(){

//     var h1 = document.createElement('h1')
//     var x =Math.random()*90
//     var y =Math.random()*90
//     var r = Math.random()*360
//     var scl = Math.random()*3

//     var a = Math.floor(Math.random()*arr.length)
//     h1.innerHTML = arr[a]
    
//     h1.style.left = x+'%'
//     h1.style.top = y+'%'
//     h1.style.rotate = r+'deg'
//     h1.style.scale = scl
//     h1.style.position = 'absolute'
//     main.appendChild(h1)
// })


// class 4 ------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// setTimeout(function(){
//     console.log('helloooo')
// }, 1000)

// setTimeout(function(){
//     console.log('helloooo 1')
// }, 2000)

// ----------------------------------------------

// var btn = document.querySelector('button')
// var h1 = document.querySelector('h1')

// btn.addEventListener('click', function(){
//         h1.innerHTML = 'Changing user....'
    
//     setTimeout(function(){
//         h1.innerHTML = 'Hello from kavya'
//     }, 2000)
// })

// -------------------------------------------------

// var a = 0
// var int = setInterval(() => {
//     a++
//     console.log(a);  
// }, 50);

// setTimeout(() => {
//     clearInterval(int)
// }, 3000);

// class 5--->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// var img = document.querySelector('img')
// var love = document.querySelector('#love')

// img.addEventListener('dblclick', function(){
//     love.style.opacity = 1
//     love.style.transform = 'translate(-50%, -50%) scale(1) rotate(0deg)'

//     setTimeout(() => {
//         love.style.transform = 'translate(-00%, -300%) scale(1) rotate(60deg)' 
//     }, 800);

//     setTimeout(() => {
//         love.style.opacity = 0
//     }, 1000);

//     setTimeout(() => {
//         love.style.transform = 'translate(-50%, -50%) scale(0) rotate(-60deg)' 
//     }, 1200);
// })

// class 6--->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// var arr = [
//     {
//         user: 'kvy',
//         age: 20,
//         city: 'kota'
//     },
//     {
//         user: 'yash',
//         age: 21,
//         city: 'jaipur'
//     },
//     {
//         user: 'manan',
//         age: 19,
//         city: 'pune'
//     },
//     {
//         user: 'kush',
//         age: 22,
//         city: 'ajmer'
//     }
// ]

// var sum = 0;

// arr.forEach(function(elem){
//     sum += elem.age   
// })
// console.log(sum/arr.length);

// ---------------------------------------------------------

// const users = [
//   {
//       fullName: "Aarav Sharma",
//       profession: "Full-Stack Developer",
//       image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
//       description:
//         "Aarav is a MERN stack developer working on modern web apps and scalable backend systems.",
//       tags: ["JavaScript", "MERN", "React", "Node"]
//   },
//   {
//       fullName: "Priya Mehta",
//       profession: "Graphic Designer",
//       image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
//       description:
//         "Priya specializes in branding, UI/UX design, and visual storytelling.",
//       tags: ["Design", "Figma", "Branding", "UI/UX"]
//   },
//   {
//       fullName: "Rohan Verma",
//       profession: "Data Analyst",
//       image: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6",
//       description:
//         "Rohan works with data to derive insights using Python, SQL, and dashboards.",
//       tags: ["Data", "Python", "SQL", "Analytics"]
//   },
//   {
//       fullName: "Simran Kaur",
//       profession: "Digital Marketer",
//       image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
//       description:
//         "Simran helps brands grow through SEO, content strategies, and paid marketing.",
//       tags: ["SEO", "Content", "Marketing", "Growth"]
//   },
//   {
//       fullName: "Vikram Singh",
//       profession: "Cybersecurity Specialist",
//       image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167",
//       description:
//         "Vikram focuses on network security, penetration testing, and cyber threat analysis.",
//       tags: ["Security", "Pentesting", "Network", "Cyber"]
//   }
// ];

// var sum = '';

// users.forEach(function(elem){
//     sum += `<div class="card">
//                 <img src="${elem.image}" alt="">
//                 <h3>${elem.fullName}</h3>
//                 <h4>${elem.profession}</h4>
//                 <p>${elem.description}</p>
//             </div>`
// })

// var main = document.querySelector('main')
// main.innerHTML = sum


// class 7--->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// var box = document.querySelector('.box')

// box.addEventListener('mouseenter', function(){
//   console.log('entered');
// })

// box.addEventListener('mouseleave', function(){
//   console.log('lefted');
// })

// -----------------------------------------------------------

// var main = document.querySelector('main')
// var curs = document.querySelector('#cursor')

// main.addEventListener('mousemove', function(dets){
//   curs.style.left = dets.x+'px'
//   curs.style.top = dets.y+'px'
// })

// main.addEventListener('click', function(){
//   curs.style.transform =  'rotate(-50deg)'

//   setTimeout(() => {
//     curs.style.transform = 'rotate(0deg)'
//   }, 100);
// })

// class 8--->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// var allBtn = document.querySelectorAll('Button')

// allBtn.forEach( (elem)=> {
//   elem.addEventListener('click',function(){
//     if(elem.innerHTML == 'Add Friend'){
//       elem.innerHTML = 'Rmove Friend'
//     } else {
//       elem.innerHTML = 'Add Friend'
//     }
//   })
// })

// class 9--->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const reels = [
    {
      isMuted: true,  
      username: "codewithayush",
      likeCount: 14820,
      isLiked: false,
      commentCount: 423,
      shareCount: 92,
      isFollowed: false,
      caption: "Dark mode > light mode. Change my mind.",
      video: "./reels/video1.mp4",
      userprofile: "https://images.unsplash.com/photo-1613915617430-8ab0fd7c6baf?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      isMuted: true,  
      username: "designbysan",
        likeCount: 9820,
        isLiked: true,
        commentCount: 184,
        shareCount: 41,
        isFollowed: false,
        caption: "UI tip: Padding is personality. Give your elements some space.",
        video: "./reels/video2.mp4",

        userprofile: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79"
    },
    {
      isMuted: true,  
      username: "frontend.ninja",
        likeCount: 22150,
        isLiked: false,
        commentCount: 612,
        shareCount: 138,
        isFollowed: true,
        caption: "When flexbox finally aligns the way you wanted 😭🔥",
        video: "./reels/video3.mp4",

        userprofile: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126"
    },
    {
      isMuted: true,  
      username: "travelwithriya",
        likeCount: 54200,
        isLiked: false,
        commentCount: 822,
        shareCount: 201,
        isFollowed: false,
        caption: "My solo Bali trip changed everything 🌴",
        video: "./reels/video4.mp4",

        userprofile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
    },
    {
      isMuted: true,  
      username: "daily.dev.quotes",
        likeCount: 3120,
        isLiked: true,
        commentCount: 102,
        shareCount: 55,
        isFollowed: true,
        caption: "Code. Sleep. Repeat. That’s the cycle.",
        video: "./reels/video5.mp4",

        userprofile: "https://images.unsplash.com/photo-1599566150163-29194dcaad36"
    },
    {
      isMuted: true,  
      username: "fitnessbymegha",
        likeCount: 27450,
        isLiked: false,
        commentCount: 540,
        shareCount: 87,
        isFollowed: true,
        caption: "No gym? No problem. Do this 12-min workout at home.",
        video: "./reels/video1.mp4",

        userprofile: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6"
    },
    {
      isMuted: true,  
      username: "streetfoodlover",
        likeCount: 68000,
        isLiked: true,
        commentCount: 1304,
        shareCount: 412,
        isFollowed: false,
        caption: "You won’t believe this burger exists 🤯🍔",
        video: "./reels/video2.mp4",

        userprofile: "https://images.unsplash.com/photo-1552058544-f2b08422138a"
    },
    {
      isMuted: true,  
      username: "musicbytara",
        likeCount: 14500,
        isLiked: false,
        commentCount: 267,
        shareCount: 73,
        isFollowed: true,
        caption: "Late night vibes // piano version 🎹✨",
        video: "./reels/video3.mp4",

        userprofile: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe"
    },
    {
      isMuted: true,  
      username: "techreviews101",
        likeCount: 23180,
        isLiked: true,
        commentCount: 481,
        shareCount: 120,
        isFollowed: false,
        caption: "The most underrated smartphone of 2024 📱",
        video: "./reels/video4.mp4",

        userprofile: "https://images.unsplash.com/photo-1511367461989-f85a21fda167"
    },
    {
      isMuted: true,  
      username: "learnanimations",
        likeCount: 18740,
        isLiked: false,
        commentCount: 350,
        shareCount: 92,
        isFollowed: true,
        caption: "GSAP can literally change your career. Start today.",
        video: "./reels/video5.mp4",

        userprofile: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    }
];

var allReels = document.querySelector('.all-reels')

function addData(){
  var sum = ''
reels.forEach(function (elem,idx) {

    sum = sum + `<div class="reel">
          <video autoplay loop ${elem.isMuted?'muted':''} src="${elem.video}"></video>
          <div class="mute" id=${idx}>
              ${elem.isMuted? '<i class="ri-volume-mute-fill"></i>':'<i class="ri-volume-up-line"></i>'}
            </div>
          <div class="bottom">
            <div class="user">
              <img
                src="${elem.userprofile}"
                alt="">
              <h4>${elem.username}</h4>
              <button class="follow" id=${idx}>${elem.isFollowed?'Unfollow':'Follow'}</button>
            </div>
            <h3>${elem.caption}</h3>
          </div>
          <div class="right">
            <div id=${idx} class="like">
              <h4 class="like-icon icon">${elem.isLiked?'<i class="love ri-heart-3-fill"></i>':'<i class="ri-heart-3-line"></i>'}</h4>
              <h6>${elem.likeCount}</h6>
            </div>
            <div class="comment">
              <h4 class="comment-icon icon"><i class="ri-chat-3-line"></i></h4>
              <h6>${elem.commentCount}</h6>
            </div>
            <div class="share">
              <h4 class="share-icon icon"><i class="ri-share-forward-line"></i></h4>
              <h6>${elem.shareCount}</h6>
            </div>
            <div class="menu">
              <h4 class="menu-icon icon"><i class="ri-more-2-fill"></i></h4>
            </div>
          </div>
        </div>`
})

allReels.innerHTML = sum

}

addData();

allReels.addEventListener('click', function(dets){
  
  if(dets.target.className == 'like'){
    if(!reels[dets.target.id].isLiked){
      reels[dets.target.id].likeCount++
      reels[dets.target.id].isLiked = true
    }else{
      reels[dets.target.id].likeCount--
      reels[dets.target.id].isLiked = false
  }
  addData()
  }

  if(dets.target.className == 'follow'){
    if(!reels[dets.target.id].isFollowed){
      reels[dets.target.id].isFollowed = true
    } else {
      reels[dets.target.id].isFollowed = false
    }
    addData()
  }

  if(dets.target.className == 'mute'){
    if(!reels[dets.target.id].isMuted){
      reels[dets.target.id].isMuted = true
    } else {
      reels[dets.target.id].isMuted = false
    }
    addData()
  }
  
})