DOM- document object model
frontend ki js

DOM 4 pilars
1. Selection of an element
2. Changing HTML
3. Changing CSS
4. Event listeners

1.------------------------------------------------
for selection in html we have to go in document in short html is a document.
document.querySellector('what do you want to select. ex->h1, div, img ...etc')

baar baar type na karna pade isliye humm isse ek variablee me contain kar lete hai.
document.querySelector('h1')

2.------------------------------------------------
for changing html you have done selection and contain in it a variable.
h1.innerHTML = "crazy guyys"
this will change the html.

3.------------------------------------------------
for changing css same process select and contain then.
h1.style.color = 'red';
h1.style.backgroundColor = 'white'

4.------------------------------------------------
event listner matlab koi bhi harkat jo apki website pe hoti hai aur aap usse track kar paaye.
user do anything on the website and this observe and do something.
h1.addEventListner('click',function(){
    console.log('hello')
})
this is how you can do it

----------------------------------------------------------

1.1 querySelector
1.2 getElementById
1.3 querySelectorAll

for selecting id there is a another method insted of using #
document.getElementBbId('')

----------------------------------------------------------

2.1 textContent
2.2 innerHtml



CLASS- 2 ----->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

Math.random() it gives a random number

class3-->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
1. create element
2. append a child

Topics 

createElement is used to create new element
appendChild is used to append it in any parent.

What you've to do - 
1. Make 'main' tag in html, give it height and width 100% 
2. make a button and center it. (give it position relative and z index)
3. In JS select button and main div and add a eventlistener on button
4. Inside a function create new element with the help of document.createElement method. 
5. If you've successfully created an element print it on console to check it. 
6. write innerHTML if you want 
7. Use parent.appendChild method to add this new element in main div

class 4--->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

1. setTimeout
2. setInterval

sync
async

class 6--->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

Array of objects

Steps for today's project - 
1. make an array of objects and name it users
2. make a card in html
3. users par lagao foreach and print hello n times
4. make a variable sum and give it a value '' (empty string)
5. add on 'hello' in sum and print it outside loop
6. add on card(html code) in sum and print it too.
7. select parent (main) and put sum in its innerHTML
8. replace sample data with real data of array of objects

class 7--->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
