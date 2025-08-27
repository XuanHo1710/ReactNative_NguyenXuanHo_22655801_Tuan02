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
