"use strict";
let generatePromise = (shouldSucceed) => {
    return new Promise((resolve, reject) => {
        console.log(`Inside the promise code with shouldSucceed = ${shouldSucceed}`);
        if (shouldSucceed) {
            resolve(":)!");
        } else {
            reject(":(");
        }
    })
}

let successPromise = generatePromise(true);
let failedPromise = generatePromise(false);
successPromise.then((res) => console.log(`Yes, it worked! ${res}`)).catch((err) => console.log(`No, it failed ${err}`))
failedPromise.then((res) => console.log(`Yes, it worked! ${res}`)).catch((err) => console.log(`No, it failed ${err}`))
