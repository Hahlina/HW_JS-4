`use sctict`;

let resulHtml = document.querySelector(".resultTask");
let nameTask = document.querySelector(".nameTask");

//! Task 1
nameTask.textContent = "Task #1";
const randomText = document.createElement("p");
randomText.textContent = "Click to get a random number";
document.body.appendChild(randomText);
const btn = document.createElement("button");
resulHtml.appendChild(btn);
const a = document.createElement("a");
btn.appendChild(a);
a.textContent = "Click";
const result = document.createElement("span");
resulHtml.appendChild(result);
result.textContent = 1;

const getRundomNumber = () => {
  return ~~(Math.random() * 100);
};

btn.addEventListener("click", () => {
  getRundomNumber();
  result.textContent = getRundomNumber();
});

//! Task 2
// const enterValue = document.querySelector(".enterValue");
// nameTask.textContent = "Task #2";
// enterVariable1 = prompt("Enter value variable - 1");
// enterVariable2 = prompt("Enter value variable - 2");
// function getNumber(variable1, variable2) {
//   variable1 = enterVariable1;
//   variable2 = enterVariable2;
//   return `${variable2} and ${variable1}`;
// }
// enterValue.textContent = `You entered values ${enterVariable1} and ${enterVariable2}`;
// resulHtml.textContent = `Variables when exchanging = ${getNumber()}`;

//! Task 3
// nameTask.textContent = "Task #3";
// let enterNumber = +prompt("Enter number");
// const getNumber = (number) => {
//   enterNumber = number;
//   if (enterNumber && enterNumber > 0) {
//     if (enterNumber % 2 === 0) {
//       resulHtml.textContent = `Number ${enterNumber} is even: `;
//       return true;
//     } else if (enterNumber % 2 !== 0) {
//       resulHtml.textContent = `Number ${enterNumber} is odd: `;
//       return false;
//     }
//   }
// };
// getNumber(enterNumber);
// resulHtml.textContent += getNumber(enterNumber);

//! Task 4
// nameTask.textContent = "Task #4";
// enterNumber1 = +prompt("Enter number - 1");
// enterNumber2 = +prompt("Enter number - 2");
// function getDivisor(number1, number2) {
//   number1 = enterNumber1;
//   number2 = enterNumber2;
//   while (number1 && number2) {
//     if (number1 > number2) {
//       number1 = number1 % number2;
//     } else if (number1 < number2) {
//       number2 = number2 % number1;
//     } else if (number1 === number2) {
//       number1 = 0;
//     }
//   }
//   return number1 + number2;
// }
// getDivisor();
// resulHtml.textContent = `The greatest common divisor is ${getDivisor()}`;
