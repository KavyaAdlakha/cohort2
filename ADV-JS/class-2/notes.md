this Keyword->..
this ek special keyword hota hai kyuki iski value badal jaati hai.

value of this in different conditions------->

1. global -> window
2. function -> window
3. es5 function inside object -> object
4. es6 function inside object -> window
5. es5 function inside es5 function inside object -> window
6. es6 function inside es5 function inside object -> window

call, apply, bind--------------------------->>>>
ek function mein this ki value window hoti hai, agar aap chahte hoo ki woh value window naa ho par koi aur object ho tab aap use kr skte ho call, appl, bind ka

call -> function chalata hai aur this ki value set karta hai.

apply -> function chalata hai aur this ki value set karta hai and arguments mein pehli value this ki nad dusri value array hoti hai.

bind -> function chalata hai aur this ki value set karta hai and aapko naya function deta hai.