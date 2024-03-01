console.log("1");
function sayHello() {
  console.log("hello");
  
}

setTimeout(() => {
  console.log("2", "3");
}, 6000);

setTimeout(() => {
  sayHello();
}, 2000);

console.log("3");
console.log("4");
