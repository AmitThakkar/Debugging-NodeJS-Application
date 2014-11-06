#Debugging NodeJS Application

#####This repository contains guild for how to do debugging into NodeJS Application.

If we are working on any **NodeJS** project/application, then it doesn't matters, we are starter or expert, or project is already live or building from scratch, **Debugging** is most import thing which help us a lot to do development.

> **Note:** We are assuming NodeJS is installed in your system, and you have basic knowledge of JavaScript and NodeJS.

As we all know, **NodeJS** run on **Google**'s **V8 engine** and **V8** have extensive **debugger**. **NodeJS** also have provide built-in client for this **debugger**.

To **debug** any **NodeJS** project/application we have to follow 3 simple below steps:
1. Write `debugger;` into that part of program/project which we want to **debug**. That `debugger;` will work as breakpoint.
2. To run our **NodeJS** application into **debug** mode, type `node debug` command and this command must be followed by our main **JavaScript/.js** file. For this blog we are using **app.js** as main **JavaScript** file so running the **app.js** file into **debug** mode, we have to type/run below command into location where **app.js**(main) **JavaScript** file located:  
   * `node debug app.js`
3. To play with **debugger**, we need to know about below 4 operators:
   1. **cont:** It used to continue/move to next breakpoint/debugger of the program.
   2. **next:** It used to move next statement/line of the code/program.
   3. **repl:** It used to evaluate the code. 
   4. **quit:** It used to quit from the debugging the program.
   
Enough for theory part. Lets **debug** a simple program:

Open your favourite editor, and copy paste below code into that, then save it as **app.js**.

**[app.js](https://raw.githubusercontent.com/AmitThakkar/Debugging-NodeJS-Application/master/app.js)**
```JavaScript
/**
 * Created by Amit Thakkar on 6/11/14.
 */
console.log("Program starting...");
var one = 1, two = 2;
var user = {
  name: "Amit Thakkar",
  age: 20
};
user.age += one++ + ++two + ++one;
debugger;
user.age -= one-- - --two - --one;
debugger;
console.log("My Name is", user.name, "and Age is", user.age);
```

For **debugging** `app.js` lets follow all above 3 steps:
1. **Add `debugger;` into the code**: After looking the `app.js` code, we know that we have placed only 2 `debugger`/`breakpoint` into the above code, that is on line no. **11 and 13**.
2. **Run `NodeJS` in `debug` mode**: Type and run `node debug app.js`.
3. **Play with `debugger`**: Lets use **cont**, **next**, **repl** and **quit** as below:
![debugging](https://raw.githubusercontent.com/AmitThakkar/Debugging-NodeJS-Application/master/debugging.png)