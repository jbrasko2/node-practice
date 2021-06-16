// function sayHello(name) {
//     console.log('Hello ' + name)
// }

// sayHello('Jordan')
// console.log(module)

// global (belong to window object, global in node)
// console.log(); 
// setTimeout();
// clearTimeout();
// setInterval(); 
// clearInterval();

// non-node
// window.console.log()

// node
// global.console.log()

// variables do not belong to global object, only scoped to current file
// var message = "hello";
// console.log(global.message) returns undefined

// load module
const log = require('./logger');

log('message');