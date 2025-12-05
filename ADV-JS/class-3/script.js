// class expression---------------------------------

// let Animal = class{
//     constructor(){
//         this.name = "dodo";
//         this.breed = "dog"
//     }
// }

// let a1 = new Animal()


// inheritance------------------------------------

// class Animal{
//     constructor(){
//         this.hands = 2;
//         this.legs = 2;
//     }
//     eat(){}
//     breathe(){}
// }

// class Kekda extends Animal{
//     constructor(){
//         super();
//         this.legs = 8;
//         this.hands = 0
//     }
//     susu(){}
// }

// let k1 = new Kekda()


// getter and setter->>--------------------------------

// class Animal{
//     constructor(){
//         this._age = 12;
//     }

//     set age(val){
//         if(val<0){
//             console.error("not");
//             return;
//         }
//         this._age = val;
//         return this._age;
//     }

//     get age(){
//         return this._age
//     }
// }
// let a1 = new Animal()
// console.log(a1.age);
