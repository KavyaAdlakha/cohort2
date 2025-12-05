more topics on OOPS - [class expression, hoisting, inheritance, getter and settrer]

class expression ->>>> the diffrence  in this class ke baad naam na likha hokar variable ke andar hi class deffine ho jata ahi. nobody uses this very much.
ex-> let Animal = class{}

inheritance->>>>
agar koi class jisme kuch kuch likha hai and aap maante ho ek nayi class ka extension hai to aap wo saare features purrani class se borrow kar sakte jo nad nayi class mein use kar sakte ho and apne naye features bhi bna sakte hoo.

getter and setter->>


Constructor Functions (Before ES6)

```js
function Animal() {
  this.name = "harsh";
}

new Animal();
```

### Adding Methods Using Prototype
```js
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(this.name + " makes a sound");
};

const cat = new Animal("Kitty");
cat.speak();
