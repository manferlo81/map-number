const { floor } = require("..");

describe("floor method", () => {

  test("should return in-range output", () => {

    expect(
      floor(23, 20, 50, 2, 5)
    ).toBe(
      2
    );

  });

  test("should return out-range output", () => {

    expect(
      floor(6, 20, 50, 2, 5)
    ).toBe(
      0
    );

    expect(
      floor(62, 20, 50, 2, 5)
    ).toBe(
      6
    );

  });

});
