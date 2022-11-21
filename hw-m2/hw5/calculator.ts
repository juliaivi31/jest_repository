export class Calculator {
    number1: number;
    operation: any;
    number2: number;
    constructor(number1: number, operation: any, number2: number) {
        this.number1 = number1;
        this.operation = operation;
        this.number2 = number2;
    };
    get result() {
        return this.task();
    };
    task() {
        return eval(`${this.number1} ${this.operation} ${this.number2}`)
    };
}
const sum = new Calculator(1, `+`, 5);
console.log(sum.result)