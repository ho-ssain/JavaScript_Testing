// Test suite ( collection of tests )
// Tests --> specs --> expectation

describe("calculator.js", () => {
  it("should add two numbers", () => {
    const calculator = new Calculator();

    expect(calculator.add(1, 2)).toBe(3);
  });

  // it("should always true", () => {
  //   expect(1).toBe(1);
  // });
});
