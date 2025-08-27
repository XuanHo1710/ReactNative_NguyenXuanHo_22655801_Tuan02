"use strict";
// A. Basics with Promise
// 1. Create a Promise that returns the string "Hello Async" after 2 seconds.
const helloAsync = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hello Async");
    }, 2000);
});
helloAsync.then((message) => console.log(message));
// 2. Write a function that returns a Promise resolving with the number 10 after 1 second.
function returnTen() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(10);
        }, 1000);
    });
}
returnTen().then((number) => console.log(number));
// 3. Write a function that rejects a Promise with the error "Something went wrong" after 1 second.
function rejects() {
    return new Promise((resolve, rejects) => {
        setTimeout(() => {
            rejects("Something went wrong");
        }, 1000);
    });
}
rejects().catch(error => console.log(error));
// 4. Use .then() and .catch() to handle a Promise that returns a random number.
function randomNumber() {
    return new Promise((resolve, reject) => {
        const num = Math.random();
        if (num > 0.5) {
            resolve(num);
        }
        else {
            reject("Number is less than 0.5");
        }
    });
}
randomNumber()
    .then((num) => console.log("Random number:", num))
    .catch((error) => console.log("Error:", error));
