//    function counter(){
//     var counter = 0;

//     function IncreaseCounter() {
//         return counter += 1;
//     };

//     return IncreaseCounter;
// }

// var counter = counter();
// alert(counter());// alert message will pop up 1
// alert(counter());// alert message will pop up 2
// alert(counter());// alert message will pop up 3
// alert(counter());// alert message will pop up 4



let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged? output= 1
  }
  console.log(count); // What is logged? output = 0
})();

for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged? (3)3 -- here it will be 1,2,3 but each value get updated after 1s hence op is 3
        }, 1000);
  }

//   Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.


 function outer(length) {

 return function(breadth){
   let area = length*breadth;
   console.log(area);
}

}
const rectangle = outer(5);
rectangle(8);

// Take a variable in outer function and create an inner function to increase the counter every time it is called

const ticketBooking = function(){
    let passengerCount = 0;

    return function(){
        passengerCount++;
        console.log(`the passenger count is ${passengerCount}`)
    };
};

const bookie = ticketBooking()
bookie();
bookie();
bookie();
bookie();

// Print Output

// var a = 12;
// (function () {
//   alert(a);
// })();
// alert message will pop up "this page  12"

var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a);
  };
})();
x();
// alert message will pop up "this page  12"

var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar =" + globalVar);
 
    })(456);
})(123);
// outerArg = 123
// innerArg = 456
// outerVar = a
// innerVar = b
// globalVar =xyz