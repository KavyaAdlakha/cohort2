let teams = [
    {
        team: 'CSK',
        primary: 'yellow',
        fullName: 'Chennai Super Kings',
        trophies: '5',
        captain: 'MS Dhoni',
        bg: 'https://crickettimes.com/wp-content/uploads/2024/03/The-IPL-2024-squad-of-CSK.webp'
    },
    {
        team: 'RCB',
        primary: 'red',
        fullName: 'Royal Challengers Bengaluru',
        trophies: '0',
        captain: 'Faf du Plessis',
        bg: 'https://okaydone.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcover_large.9240e09d.jpg&w=3840&q=100'
    },
    {
        team: 'MI',
        primary: 'blue',
        fullName: 'Mumbai Indians',
        trophies: '5',
        captain: 'Hardik Pandya',
        bg: 'https://i.ytimg.com/vi/vd0G89Jw39k/maxresdefault.jpg'
    },
    {
        team: 'KKR',
        primary: 'purple',
        fullName: 'Kolkata Knight Riders',
        trophies: '3',
        captain: 'Shreyas Iyer',
        bg: 'https://img.jagranjosh.com/images/2022/March/2632022/KKR_2022.webp'
    },
    {
        team: 'SRH',
        primary: 'orange',
        fullName: 'Sunrisers Hyderabad',
        trophies: '1',
        captain: 'Pat Cummins',
        bg: 'https://www.kreedon.com/_next/image?url=https%3A%2F%2Fwww.kreedon.in%2Fwp-content%2Fuploads%2F2022%2F03%2Fsrh-full-squad.webp&w=3840&q=70'
    },
    {
        team: 'PBKS',
        primary: 'red',
        fullName: 'Punjab Kings',
        trophies: '0',
        captain: 'Shikhar Dhawan',
        bg: 'https://crickettimes.com/wp-content/uploads/2023/12/Complete-squad-of-PBKS-for-IPL-2024.webp'
    },
]

let btn = document.querySelector('button');
let h1 = document.querySelector('h1');
let main = document.querySelector('main');
let full = document.querySelector('#full')
let tro = document.querySelector('#trophies');
let cap = document.querySelector('#captain');

btn.addEventListener('click', function(){
    var winner = teams[Math.floor(Math.random()*teams.length)]
    
    h1.innerHTML = winner.team
    h1.style.color = winner.primary
    full.innerHTML = "Full Name:" + winner.fullName
    tro.innerHTML = "Trophies:" + winner.trophies
    cap.innerHTML = "Captain:" + winner.captain

    main.style.background = `url(${winner.bg})`
    main.style.backgroundSize = "cover"
    main.style.backgroundPosition = "center"
    main.style.backgroundRepeat = "no-repeat"
})