"use strict";
let generatePromise = (shouldSucceed) => {
    return new Promise((resolve, reject) => {
        console.log(`Inside the promise code with shouldSucceed = ${shouldSucceed}`);
        if (shouldSucceed) {
            setTimeout(() => resolve(":)!"),4000);
        } else {
            setTimeout(() => reject(":("),4000);
        }
    })
}

let successPromise = generatePromise(true);
let failedPromise = generatePromise(false);
/**
>> Inside the promise code with shouldSucceed = true
>> Inside the promise code with shouldSucceed = false
 This shows you that the code within the promise is called when the promise is started, not when the then/catch is called.
 */
successPromise.then((res) => console.log(`Yes, it worked! ${res}`)).catch((err) => console.log(`No, it failed ${err}`))
failedPromise.then((res) => console.log(`Yes, it worked! ${res}`)).catch((err) => console.log(`No, it failed ${err}`))

let checkPromiseBehaviour = () => {
    console.log("When we return a promise.then, will the return be synchronous? ");
    return generatePromise(true).then(res => console.log(`returned from promise with value: ${res} - time: ${new Date().getTime()}`))
}

checkPromiseBehaviour();
console.log(`Did the promise return already? it's already ${new Date().getTime()}`);
