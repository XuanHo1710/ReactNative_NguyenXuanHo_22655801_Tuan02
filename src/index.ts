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
            rejects("Something went wrong")
        }, 1000);
    })
}

rejects().catch(error => console.log(error));

// 4. Use .then() and .catch() to handle a Promise that returns a random number.
function randomNumber() {
    return new Promise((resolve, reject) => {
        const num = Math.random();
        if (num > 0.5) {
            resolve(num);
        } else {
            reject("Number is less than 0.5");
        }
    });
}
randomNumber()
    .then((num) => console.log("Random number:", num))
    .catch((error) => console.log("Error:", error));

// 5. Create a function simulateTask(time) that returns a Promise resolving with "Task
// done" after time ms.
function simulateTask(time: number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task done");
        }, time);
    });
}
simulateTask(1500).then((message) => console.log(message));

// 6. Use Promise.all() to run 3 simulated Promises in parallel and print the result.
const task1 = simulateTask(1000);
const task2 = simulateTask(2000);
const task3 = simulateTask(1500);
Promise.all([task1, task2, task3]).then((results) => {
    console.log("All tasks completed:", results);
});

// 7. Use Promise.race() to return whichever Promise resolves first.
Promise.race([task1, task2, task3]).then((result) => {
    console.log("First task completed:", result);
});

// 8. Create a Promise chain: square the number 2, then double it, then add 5.
new Promise<number>((resolve) => {
    resolve(2);
})
    .then((num) => num * num) // square
    .then((num) => num * 2) // double
    .then((num) => num + 5) // add 5
    .then((result) => console.log("Final result:", result));

// 9. Write a Promise that reads an array after 1 second and filters even numbers.
function filterEvenNumbers(arr: number[]) {
    return new Promise<number[]>((resolve) => {
        setTimeout(() => {
            const evenNumbers = arr.filter(num => num % 2 === 0);
            resolve(evenNumbers);
        }, 1000);
    });
}
filterEvenNumbers([1, 2, 3, 4, 5, 6]).then((evenNumbers) => {
    console.log("Even numbers:", evenNumbers);
});

// 10. Use .finally() to log "Done" when a Promise finishes (success or failure).

randomNumber()
    .then((num) => console.log("Random number:", num))
    .catch((error) => console.log("Error:", error))
    .finally(() => console.log("Done"));


// B. Async/Await
// 11. Convert Exercise 1 into async/await.
async function asyncHelloAsync() {
    const message = await new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve("Hello Async");
        }, 2000);
    });
    console.log(message);
}
asyncHelloAsync();

// 12. Write an async function that calls simulateTask(2000) and logs the result.
async function callSimulateTask() {
    const result = await simulateTask(2000);
    console.log(result);
}
callSimulateTask();

// 13. Handle errors using try/catch with async/await.
async function asyncRandomNumber() {
    try {
        const num = await randomNumber();
        console.log("Random number:", num);
    } catch (error) {
        console.log("Error:", error);
    }
}
asyncRandomNumber();

// 14. Write an async function that takes a number, waits 1 second, and returns the number × 3.
async function multiplyByThree(num: number) {
    return new Promise<number>((resolve) => {
        setTimeout(() => {
            resolve(num * 3);
        }, 1000);
    });
}
multiplyByThree(5).then((result) => console.log("5 * 3 is:", result));

// 15. Call multiple async functions sequentially using await.
async function sequentialCalls() {
    const num1 = await multiplyByThree(2);
    console.log("First call result:", num1);
    const num2 = await multiplyByThree(num1);
    console.log("Second call result:", num2);
    const num3 = await multiplyByThree(num2);
    console.log("Third call result:", num3);
}
sequentialCalls();

// 16. Call multiple async functions in parallel using Promise.all().
async function parallelCalls() {
    const results = await Promise.all([multiplyByThree(2), multiplyByThree(3), multiplyByThree(4)]);
    console.log("Parallel call results:", results);
}
parallelCalls();

// 17. Use for await...of to iterate over an array of Promises.
async function forAwaitOfExample() {
    const promises = [multiplyByThree(1), multiplyByThree(2), multiplyByThree(3)];
    for await (const result of promises) {
        console.log("Result from for await...of:", result);
    }
}
forAwaitOfExample();

// 18. Write an async function fetchUser(id) that simulates an API call (resolves a user
// object after 1 second).
interface User {
    id: number;
    name: string;
}
async function fetchUser(id: number): Promise<User> {
    return new Promise<User>((resolve) => {
        setTimeout(() => {
            resolve({ id, name: `User${id}` });
        }, 1000);
    });
}
fetchUser(1).then((user) => console.log("Fetched user:", user));

// 19. Create an async function fetchUsers(ids: number[]) that calls fetchUser for each ID.
async function fetchUsers(ids: number[]) {
    return ids.forEach(async (id) => await fetchUser(id).then(result => console.log(result)));
}

fetchUsers([1, 2, 3, 4, 5, 6, 7]);




