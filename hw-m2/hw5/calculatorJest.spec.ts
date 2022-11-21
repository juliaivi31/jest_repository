import { Calculator } from "./calculator";

describe("operations-mocha", () => {
    beforeAll(() => {
        console.log("jest")
    });
    test("sum-positive", () => {
        const sum = new Calculator(1, `+`, 3);
        expect(sum.result).toBe(4);
    });
    test("sum-negative", () => {
        const sum = new Calculator(1, `+`, 4);
        expect(sum.result).toBe(4);
    });
    test("sub-positive", () => {
        const sub = new Calculator(4, `-`, 2);
        expect(sub.result).toBe(2);
    });
    test("sub-negative", () => {
        const sub = new Calculator(4, `-`, 2);
        expect(sub.result).toBe(3);
    });
    test("mult-positive", () => {
        const mult = new Calculator(4, `*`, 2);
        expect(mult.result).toBe(8);
    });
    test("mult-negative", () => {
        const mult = new Calculator(4, `*`, 2);
        expect(mult.result).toBe(10);
    });
    test("div-positive", () => {
        const div = new Calculator(4, `/`, 2);
        expect(div.result).toBe(2);
    });
    test("div-negative", () => {
        const div = new Calculator(4, `/`, 2);
        expect(div.result).toBe(1);
    });
    test("exp-negative", () => {
        const exp = new Calculator(2, `**`, 2);
        expect(exp.result).toBe(4);
    });
    test("exp-negative", () => {
        const exp = new Calculator(2, `**`, 2);
        expect(exp.result).toBe(5);
    });
})