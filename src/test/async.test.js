const fetchData = require("../async");

describe("Async", () => {
  it("", () => {
    return fetchData().then((data) => {
      expect(data).toEqual({ item: "Milk", price: 200 });
    });
  });

  it("the data is peanut butter", async () => {
    await expect(fetchData()).resolves.toEqual({
      item: "Milk",
      price: 200,
    });
  });
});
