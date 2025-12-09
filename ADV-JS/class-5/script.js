// Excercise 1-------------

// function afterDelay(time, cb){
//     setTimeout(() => {
//         cb()
//     }, time);
// }

// afterDelay(3000, function(){
//     console.log("callback executed");
// })

// Excercise 2------------------

// function getUser(username, cb){
//     console.log("getting user details...");
//     setTimeout(() => {
//         cb({id:1, username });
//     }, 1000);
// }

// function getUserPosts(id, cb){
//     console.log("getting user posts...");
    
//     setTimeout(() => {
//         cb({ id ,allposts:["New Day", "New Job","FAANG"]})
//     }, 2000);
// }

// getUser("kavya", function(data){
//     getUserPosts(data.id, function(allposts){
//         console.log(data.username, allposts);
//     })
// })

// Excercise 3----------------------------

function loginUser(username, cb){
    console.log("logging in user...");
    setTimeout(() => {
        cb({id: 121, username});
    }, 1000);
}
function fetchPermissions(id, cb){
    console.log("fetching permissions...");
    setTimeout(() => {
        cb(["read", "write", "delete"]);
    }, 2000);
}
function loadDashboard(permission, cb){
    console.log("loading dashboard...");
    setTimeout(() => {
        cb();
    }, 2000);
}

loginUser("Kavya", function(userdata){
    fetchPermissions(userdata.id, function(permission){
        loadDashboard(permission, function(){
            console.log("Dashboard loaded");
        })
    })
})