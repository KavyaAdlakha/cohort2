1. Introduction to JavaScript

1. Open any website → right-click  Inspect  Console → type: document.title
2. Try: alert(“Hello from Sheryians!ˮ)
3. Write one line in your own words: “If HTML is skeleton, CSS is clothes — what is JS?ˮ
4. Write one example of where youʼve seen JS being used (like popup, 
animation, etc.)
Goal: Observe what JS does on a webpage


2. Linking JavaScript Files

1. Create an HTML file and link JS file like this:
2. In app.js, write: console.log(“Connected!ˮ)
3. Move the script tag to the  section and see what happens.
4. Try using defer:
<script defer src="script1.js"></script>
<script defer src="script2.js"></script>

Goal: Understand how to connect JS with HTML


3. Running JS in Browser Console

1. Open console and type: 2 + 2
2. Type: alert(“Hiˮ)
3. Try: prompt(“Your name?ˮ)
4. Type: let city = “Bhopalˮ; city


4. Variables and Keywords (var, let, const)

1. Declare your name using all three: var a = “Harshˮ; let b = “Sheryiansˮ; const c 
= “Schoolˮ
2. Try reassigning them: a = “Updatedˮ; b = “Updatedˮ; c = “Updatedˮ
3. Create a variable inside curly braces using let and log it outside.
4. Predict output before running.
5. Write 3 examples where const is useful (like PI, baseURL, etc.)


5. Logging and Interaction (console, alert, prompt)

1. Log name, age, and city using console.log, console.info, console.warn.
2. Use prompt to take userʼs name → alert a welcome message.
3. Log typeof of userʼs input.
4. Try: let age = prompt(“Enter age:ˮ); console.log(age + 5); observe what happens


6. Working with Strings

1. let msg = “I love Sheryiansˮ;
2. Try msg.slice(2, 6) and predict the result.
3. Try msg.split(ˮ “) and count words.
4. Try msg.replace(“loveˮ, “study atˮ).
5. Template string example: let name = “Harshˮ; console.log(Hey ${name}, welcome to JS!)
6. Check if msg.includes(“loveˮ)


7. Statements and Semicolons

1. Remove semicolon and check if code still runs.
2. Combine two statements in one line and see if it breaks.
3. Write 3 console.log statements without semicolons and predict output.


8. Comments

1. Write your name as a single-line comment.
2. Write a 3-line comment explaining what your code does.
3. Hide one console.log using comment and check output.


9. Expressions vs Statements

1. Type 5 + 10 (expression).
2. Type let x = 10; (statement).
3. Which one gives a value immediately?
4. Try: let y = (5 + 10) * 2; console.log(y)
5. Write one line explaining the difference between both.


10. Data Types

1. let age = 25; let name = “Harshˮ; let isStudent = true; let skills = [“JSˮ, “HTMLˮ]; let user = { city: “Bhopalˮ }; let x = null; let y; let z = Symbol(“idˮ)
2. Log typeof each variable.
3. Change one value and recheck typeof.
4. Try adding a number and string together


11. Special Values

1. Log 1 / 0, 0 / 0, Number(“abcˮ), undefined + 1
2. Write what appears (Infinity, NaN, etc.)
3. Write one line explaining when to use null vs undefined.


12. Primitive vs Reference

1. let x = 5; let y = x; y + 10; console.log(x, y)
2. let obj1 = { name: “Harshˮ }; let obj2 = obj1; obj2.name = “Sheryiansˮ;  console.log(obj1.name)
3. Observe which one changes together.obj2.name = “Sheryiansˮ; 
4. Draw memory boxes on paper to visualize difference.