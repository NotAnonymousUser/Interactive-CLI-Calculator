import inquirer from "inquirer";
import chalk from "chalk";

const num1 = await inquirer.prompt({
  name: "number1",
  type: "input",
  message: "Enter first number",
});

const num2 = await inquirer.prompt({
  name: "number2",
  type: "input",
  message: "Enter second number",
});

const question = await inquirer.prompt({
  name: "operation",
  type: "list",
  choices: ["add", "subtract", "divide", "multiply", "modulus"],
});

let firstNum: number = num1.number1;
let secondNum: number = num2.number2;

if (question.operation === "add") {
  console.log(firstNum + secondNum);
} else if (question.operation === "subtract") {
  console.log(firstNum - secondNum);
} else if (question.operation === "divide") {
  console.log(firstNum / secondNum);
} else if (question.operation === "multiply") {
  console.log(firstNum * secondNum);
} else if (question.operation === "modulus") {
  console.log(firstNum % secondNum);
}