const error = require("../error");

test("Error check", () => {
  expect(() => compieError().toThrow());
  expect(() => compileError().toThrow(Error));
});
