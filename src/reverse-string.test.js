const reverseString = require("./reverse-string");

// reverse String function defined
test("reverse string function exist", () => {
  expect(reverseString).toBeDefined();
});

// Check reverse functionality
test("String reverses", () => {
  expect(reverseString("abcd")).toEqual("dcba");
});

// Test what if different case input was added
test("String reverses with lowercase", () => {
  expect(reverseString("aBcD")).toEqual("dcba");
});



