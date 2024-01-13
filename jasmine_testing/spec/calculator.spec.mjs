import { add } from "../src/calculator.mjs";

describe("calculator.js", () => {
  it("should add two numbers", () => {
    expect(add(1, 2)).toBe(3);
  });
});
