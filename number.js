let num1 = parseInt(prompt("Enter first integer:"));
let num2 = parseInt(prompt("Enter second integer:"));
const result = document.querySelector('#show');

if (num1 > num2) {
  console.log(`The larger number is the first: ${num1}.`);
  result.innerHTML = `The larger number is the first: ${num1}.`
} else if (num2 > num1) {
  console.log(`The larger number is is the second:${num2}.`);
  result.innerHTML = `The larger number is is the second: ${num2}.`
} else {
  console.log("Both numbers are equal.");
  result.innerHTML = `Both numbers are equal.`
}
