const functions = require("./functions");

//.toBe
test("Add 2 + 7 toBe 9", () => {
  expect(functions.add(2, 7)).toBe(9);
});

// .equal
test("Add 2 + 7 toEqual 9", () => {
  expect(functions.add(2, 7)).toEqual(9);
});

// MATCHERS
// CHECK FOR TRUTHY AND FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches any thing that is false

// IMPORTANT
// .toBe must be used for Primitive data types as they
// are immutable and has exact values
// .toEqual should be used for Object/Array data types

// .toBeNull
test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

// Check True/False + not
test("Should be falsy", () => {
  expect(functions.checkValue(undefined)).not.toBeTruthy();
});

// check User
test("User should be Ahmed Murtaza from Ideas Interactive", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Ahmed Murtaza",
    company: "Ideas Interactive"
  });
});

// less than and greater than
// .toBeLessThan
// .toBeLessThanAndEqual
// .toBeGreaterThan
test("Should be under 1600", () => {
  const load1 = 1000;
  const load2 = 500;
  expect(load1 + load2).toBeLessThan(1600);
});

// Regex
test("There is no I in team", () => {
  expect("team").not.toMatch(/I/);
  // for case sensative
  // expect('teami').not.toMatch(/I/i);
});

// Arrays
test("Admin should be in usernames", () => {
  const usernames = ["ahmed", "ali", "usman", "admin"];
  expect(usernames).toContain("admin");
});

// Working with Asnyc data
test("user fetched name should be Leanne Graham", () => {
  expect.assertions(1); //1 refers to number of async call we make
  //return keyword is important to be added when added expect.assertions()
  return functions.fetchUser().then(data => {
    expect(data.name).toEqual("Leanne Graham");
  });
});

// Async/Await
// test("user fetched name should be Leanne Graham", async () => {
//   expect.assertions(1);
//   const data = await functions.fetchUser();
//   expect(data.name).toEqual("Leanne Graham");
// });
