let a = 14;
console.log(a);

console.error("somethiing wrong")

let user = {
    name: "kvy",
    email: "kvy@gmail.com",
    course: "js"
};
console.table(user);

console.group("user info");
console.log("name: kvy");
console.log("course: JS");
console.groupEnd();

console.time("loopTime");
for (let i=0; i>10000; i++) {}
console.timeEnd("loopTime")