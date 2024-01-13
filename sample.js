const { sum, subtract, sumAsync, subtractAsync } = require("./1.math");

test("Adds Two Number", () => {
  const result = sum(10, 20);
  const expected = 30;
  expect(result).toBe(expected);
});

test("Subtract Two Number", () => {
  const result = subtract(10, 5);
  const expected = 5;
  expect(result).toBe(expected);
});

test("Sum Two Number", async () => {
  const result = await sumAsync(10, 5);
  const expected = 15;
  expect(result).toBe(expected);
});

test("Subtract Two Number", async () => {
  const result = await subtractAsync(10, 5);
  const expected = 5;
  expect(result).toBe(expected);
});

//
//
//
//
//............................
async function test(title, callback) {
  try {
    await callback();
    console.log("Success: " + title);
  } catch (error) {
    console.log("Error: " + title);
    console.log(error);
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
  };
}
