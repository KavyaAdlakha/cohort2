// IPL Team-------------------------------------------------
var arr = [
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
    {
        team: 'RR',
        primary: 'pink',
        fullName: 'Rajasthan Royals',
        trophies: '1',
        captain: 'Sanju Samson',
        bg: 'https://fantasykhiladi.com/wp-content/uploads/2024/03/Rajasthan-Royals-2024.webp'
    },
    {
        team: 'DC',
        primary: 'blue',
        fullName: 'Delhi Capitals',
        trophies: '0',
        captain: 'Rishabh Pant',
        bg: 'https://crictips.com/wp-content/uploads/2024/08/IPL-2025-Retention-list-for-Delhi-Capitals-DC.jpg'
    },
    {
        team: 'GT',
        primary: 'navy blue',
        fullName: 'Gujarat Titans',
        trophies: '1',
        captain: 'Shubman Gill',
        bg: 'https://pitch-report.com/wp-content/uploads/2025/02/Gujrat-Titans-Home-Image-Pitch-Report-1024x580.jpg'
    },
    {
        team: 'LSG',
        primary: '#12223C',
        fullName: 'Lucknow Super Giants',
        trophies: '0',
        captain: 'KL Rahul',
        bg: 'https://cdn.thecricketpanda.com/wp-content/uploads/2025/05/LSG-Team-Owner-1-scaled.jpg'
    }
];


var btn = document.querySelector('button')
var h1 = document.querySelector('h1')
var main = document.querySelector('main')

var full = document.querySelector('#full')
var trophies = document.querySelector('#trophies')
var captain = document.querySelector('#captain')

btn.addEventListener('click', function(){
    var winner = arr[Math.floor(Math.random() * arr.length)]
    
    h1.innerHTML = winner.team
    h1.style.color = winner.primary
    main.style.backgroundImage = `url(${winner.bg})`
    main.style.backgroundSize = "cover"
    main.style.backgroundPosition = "center"
    main.style.backgroundRepeat = "no-repeat"
    
    full.innerHTML = "Full Name: " + winner.fullName
    trophies.innerHTML = "Trophies: " + winner.trophies
    captain.innerHTML = "Captain: " + winner.captain
})

