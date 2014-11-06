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