console.log('****** Loops Practice *******');


// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i = 0; i < 4; i++) {  
  console.log(i);
} // end for

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5 
// - Which part of the example loop do you need to change to do this?
// have to change i<4 to i<6 to stop at 5 instead of 3
console.log('count from 0 to 5');

// start i at 0, while i is < 6 console log the value of i, after increment i by 1
// for loop
for (let i = 0; i < 6; i++) {
  console.log(i);
} // end for

// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
// - Which part of the example loop do you need to change to do this?
// have to change i=0 to i=3 to change starting value

console.log('count from 3 to 5');

// start i at 3, while i is < 6 console log the value of i, after increment i by 1
// for loop
for (let i = 3; i < 6; i++) {
  console.log(i);
} // end for

// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
// - Which part of the example loop do you need to change to do this?
// have to change the increment so i increments by 2 instead of 1
console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):');

// for loop
for (let i = 2; i <= 10; i += 2) {
  console.log(i);
} // end for

// 1.d. (STRETCH) TODO: Write a for loop to do a countdown from 5 to 0
console.log('STRETCH: countdown from 5 to 0');

// no reason to use i > -1 instead, right?  seems cleaner this way since I only care about 0
// start i at 5, while i >= 0  console log i, after decrement by 1
// for loop
for (let i = 5; i >= 0; i--) {
  console.log(i);
} // end for

// 2. For of loops  
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
console.log('Some stars:');

// should I be declaring constellation outside of the for loop so I can use it later?
// for of loop
for(let constellation of stars) {
  console.log(constellation);
} // end for of

// 3. While loops  
console.log('---- 3. While loop ----');
// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
console.log('Some stars using while:');
// let i = 0, while i is less than the length of our stars array, make a variable constellation and
// assign the string from array at that index, increment i

// I didn't actually need to do this, was going to use in while loop for the max
// const starsLength = stars.length;
let i = 0; 
// while loop
while (i < stars.length) {
  let constellation = stars[i];
  console.log(constellation);
  i++;
} // end while

// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
console.log('count from 0 to 5');
// index is 0, while index is <= 5, console log index and increment
let index = 0;
// while loop
while (index <= 5) {
  console.log(index);
  index++;
} // end while

// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
console.log('count backwards from 10 to 5');

let count = 10;
// count is 10, while count is >= 5, console log count and decrement
// while loop
while(count >= 5) {
  console.log(count);
  count--;
} // end while
