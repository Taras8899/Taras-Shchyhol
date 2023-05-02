"use strict";

// const subscribes = [
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
//   { name: "Andy", age: 20, profession: "footballer" },
// ];

// console.log(subscribes);
// console.log(subscribes.length);

// // function congratsIfMoreThan100(subscribes) {
// //   if (subscribes.length > 130) {
// //     alert("Congratulation");
// //   } else {
// //     alert("you looser");
// //   }
// // }

// // congratsIfMoreThan100(subscribes);

// subscribes.push({ name: "Taras", age: 23, profession: "programmer" });

// console.log(subscribes);

// subscribes.splice(121, 122);

// console.log(subscribes);

const number = [1, 2, 3, 4, 5, 6, 7];

console.log(number);

function squareArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] *= arr[i];
  }
  return arr;
}

console.log(squareArr(number));
