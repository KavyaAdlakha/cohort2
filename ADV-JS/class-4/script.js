//callback--->>>>>>>>>>>>
// setTimeout(() => {
//     console.log('hey');
    
// }, 2000);

// function abcd(chal){
//     chal(function(tisra){
//        tisra(function(paanch){
//          paanch();
//        });        
//     });
// }

// abcd(function(dusra){
//     dusra(function(chautha){
//         chautha(function(){
//             console.log('chalgya');
//         });
//     })
// })

// Good Example------------------------- callbacks
// make a situation -> getting data from gitthub

function getUserDetails(username, cb){
    console.log("fetching details.....")
    setTimeout(() => {
        cb({_id:121, username, fullname:"Kavya adlakha", age: 20})
    }, 2000);
}

function getUserRepos(id, cb){
    console.log("getting repos...");
    setTimeout(() => {
        cb({_id: id, repos:["Java", "Mini Projects", "DSA"]})
    }, 2000);
}

function getPinnedRepo(id, cb){
    console.log("getting pinned repo...");
    setTimeout(() => {
        cb({_id: id, pinned: ["DSA", "Java"]})
    }, 2000);
}

 getUserDetails("kvy", function(details){
    console.log(details);
    getUserRepos(details._id, function(repos){
        console.log(repos);
        getPinnedRepo(details._id, function(pinned){
            console.log(pinned);
        })
    })
 })