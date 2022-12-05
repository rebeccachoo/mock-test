const fetchData = require("../async");

test("", () => {
  return fetchData().then((data) => {
    expect(data).toEqual({ item: "Milk", price: 200 });
  });
});
