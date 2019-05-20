const { round } = require("..");

describe("round method", () => {

  test("should return in-range output", () => {

    expect(
      round(23, 20, 50, 2, 5)
    ).toBe(
      2
    );

  });

  test("should return out-range output", () => {

    expect(
      round(6, 20, 50, 2, 5)
    ).toBe(
      1
    );

    expect(
      round(62, 20, 50, 2, 5)
    ).toBe(
      6
    );

  });

});
