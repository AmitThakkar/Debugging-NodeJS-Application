/**
 * Created by Amit Thakkar on 6/11/14.
 */
(function () {
  console.log("Program starting...");
  var self = this;
  self.name = "Amit Thakkar";
  self.age = 20;
  setInterval(function() {
    debugger;
    console.log("Name: ", self.name, "Age: ", self.age++);
  }, 2000);
}());