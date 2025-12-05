// class Remote{
//     constructor(product,price,color){
//         this.product = product;
//         this.price = price;
//         this.color = color;
//     }
//     powerOn(){
//         console.log("this machine is on now");    
//     }
//     powerOff(){
//         console.log("this machine is off now");    
//     }
// }

// let remote1 = new Remote('LG',1000,'black');
// let remote2 = new Remote('daikin',1300,'white');


// class BiscuitMaker{
//     constructor(){
//         this.name = "parle-G";
//         this.price = 5;
//     }
// }

// let biscuit1 = new BiscuitMaker()


// class AlooChaat{
//     constructor(){
//         this.price = 20;
//         this.oil = '5ml';
//         this.oilBrand = "daalda";
//         this.masale = ["dhaniya", "pudina", "mirchi"]
//     }
//     pack(){
//         console.log("aloo chaat packed");
//     }
//     unpack(){
//         console.log("aloo chaat unpacked");
//     }
// }

// let ac1 = new AlooChaat();
// ac1.pack();


// class Kitaab{
//     constructor(name,price,author,color){
//         this.name = name;
//         this.price = price;
//         this.author = author;
//         this.color = color;
//     }

//     pannaPalto(){}
//     bookmarkLagaoo(){}
//     padhloo(){} 
// }

// let k1 = new Kitaab("moral",120,"yash","white");
// let k2 = new Kitaab("CS",300,"kush","skyblue");
// let k3 = new Kitaab("DSA",800,"Deep","beige");


// prototype------------->>>>>>>>>>>>>>>>>>>>>

class Human{
    constructor(){
        this.name = "abcd";
        this.age = 20;
    }
}
Human.prototype.saansLo = function(){
        console.log('hey');
    }
Human.prototype.khanakhaLoo = function(){
        console.log('hey');
    }

let h1 = new Human();
let h2 = new Human();