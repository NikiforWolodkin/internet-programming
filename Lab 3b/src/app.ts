const firstJob = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Hello World!");
        }, 2000);
    });
};

// firstJob()
//     .then(result => {
//         console.log(`1. ${result}`);
//     })
//     .catch(error => {
//         console.error(`1. Error: ${error}`);
//     });

// // const handleFirstJob = async () => {
// //     try {
// //         const result = await firstJob();
// //         console.log(`1. ${result}`);
// //     } catch (error) {
// //         console.error(`1. Error: ${error}`);
// //     }
// // };

// // handleFirstJob();



const secondJob = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Error");
        }, 3000);
    });
};

// secondJob()
//     .then(result => {
//         console.log(`2. ${result}`);
//     })
//     .catch(error => {
//         console.error(`2. Error: ${error}`);
//     });


// const handleSecondJob = async () => {
//     try {
//         const result = await secondJob();
//         console.log(`2. ${result}`);
//     } catch (error) {
//         console.error(`2. Error: ${error}`);
//     }
// };

// handleSecondJob();



const thirdJob = data => {
    return new Promise((resolve, reject) => {
        if (typeof data !== "number") {
            reject("error");
        } else if (data % 2 !== 0) {
            setTimeout(() => {
                resolve("odd");
            }, 1000);
        } else {
            setTimeout(() => {
                reject("even");
            }, 2000);
        }
    });
};

// thirdJob(3)
// .then(result => {
//     console.log(`3. ${result}`);
// })
// .catch(error => {
//     console.error(`3. Error: ${error}`);
// });

// async function handleThirdJob() {
//     try {
//         const result = await thirdJob(4);
//         console.log(`3. ${result}`);
//     } catch (error) {
//         console.error(`3. Error: ${error}`);
//     }
// }

// handleThirdJob();



import { resolve } from "path";
import { v4 as uuidv4 } from "uuid";

const validateCard = cardNumber => {
    console.log(`Card number: ${cardNumber}`);
    return Math.random() < 0.5;
};

function createOrder(cardNumber) {
    return new Promise((resolve, reject) => {
        if (!validateCard(cardNumber)) {
            reject("Card is not valid");
        } else {
            setTimeout(() => {
                const orderNumber = uuidv4();
                resolve(orderNumber);
            }, 5000);
        }
    });
}

function proceedToPayment(orderNumber) {
    console.log(`Order number: ${orderNumber}`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.5) {
                resolve("Payment successful");
            } else {
                reject("Payment failed");
            }
        }, 2000);
    });
}

// createOrder("1234567890123456")
// .then(orderNumber => proceedToPayment(orderNumber))
// .then(result => console.log(result))
// .catch(error => console.error(error));

// async function handleOrder() {
//     try {
//         const orderNumber = await createOrder("1234567890123456");
//         const result = await proceedToPayment(orderNumber);
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
// }

// handleOrder();



const squareNumber = number => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof number !== "number") {
                reject("Invalid input");
			} else {
                resolve(Math.pow(number, 2));
			}
		}, 1000);
    });
};

const cubeNumber = number => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof number !== "number") {
                reject("Invalid input");
			} else {
                resolve(Math.pow(number, 3));
			}
		}, 2000);
    });
};

const fourthPowerNumber = number => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof number !== "number") {
                reject("Invalid input");
			} else {
                resolve(Math.pow(number, 4));
			}
		}, 3000);
    });
};




function f1() {
    console.log("f1");
}

function f2() {
    console.log("f2");
}

function f3() {
    console.log("f3");
}

function main() {
    console.log('main');
    
    setTimeout(f1, 50);
    setTimeout(f3, 30);
    
    new Promise((resolve, reject) => {
        resolve("Promise after f1 and f3");
    }).then(resolve => console.log(resolve));
    
    new Promise((resolve, reject) => {
        resolve("Promise after promise");
    }).then(resolve => console.log(resolve));
    
    f2();
}

// Promise.all([squareNumber(2), cubeNumber(2), fourthPowerNumber(2)])
// .then(results => console.log(`5. ${results}`))
// .catch(error => console.error(`5. Error: ${error}`));

// Promise.all([squareNumber("two"), cubeNumber("two"), fourthPowerNumber("two")])
// .then(results => console.log(`5. ${results}`))
// .catch(error => console.error(`5. Error: ${error}`));

// Promise.race([squareNumber(2), cubeNumber(2), fourthPowerNumber(2)])
// .then(results => console.log(`6. ${results}`))
// .catch(error => console.error(`6. Error: ${error}`));

// (Promise as any).any([squareNumber(2), cubeNumber(2), fourthPowerNumber(2)])
// .then(results => console.log(`6. ${results}`))
// .catch(error => console.error(`6. Error: ${error}`));

main();