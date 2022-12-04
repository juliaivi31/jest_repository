export class Calculator {
    sum(number1: number, number2: number) {
        return number1 + number2
    };
    sub(number1: number, number2: number) {
        return number1 - number2
    };
    mult(number1: number, number2: number) {
        return number1 * number2
    };
    div(number1: number, number2: number) {
        return number1 / number2
    }
}
// @ts-ignore
const calc = new Calculator();
//positive
console.log(calc.sum(15, 3) === 18 ? "test - success" : "test - fail");
console.log(calc.sum(15, 6) === 21 ? "test - success" : "test - fail");
console.log(calc.sum(8, 3) === 11 ? "test - success" : "test - fail");
console.log(calc.sub(15, 3) === 12 ? "test - success" : "test - fail");
console.log(calc.sub(10, 3) === 7 ? "test - success" : "test - fail");
console.log(calc.sub(3, 3) === 0 ? "test - success" : "test - fail");
console.log(calc.mult(15, 3) === 45 ? "test - success" : "test - fail");
console.log(calc.mult(5, 3) === 15 ? "test - success" : "test - fail");
console.log(calc.div(15, 3) === 5 ? "test - success" : "test - fail");
console.log(calc.div(6, 3) === 2 ? "test - success" : "test - fail");
// negative
console.log(calc.sum(15, 3) === 19 ? "test - success" : "test - fail");
console.log(calc.sum(15, 6) === 24 ? "test - success" : "test - fail");
console.log(calc.sum(8, 3) === 14 ? "test - success" : "test - fail");
console.log(calc.sub(15, 3) === 11 ? "test - success" : "test - fail");
console.log(calc.sub(10, 3) === 3 ? "test - success" : "test - fail");
console.log(calc.sub(3, 3) === 2 ? "test - success" : "test - fail");
console.log(calc.mult(15, 3) === 5 ? "test - success" : "test - fail");
console.log(calc.mult(5, 3) === 5 ? "test - success" : "test - fail");
console.log(calc.div(15, 3) === 7 ? "test - success" : "test - fail");
console.log(calc.div(6, 3) === 6 ? "test - success" : "test - fail");