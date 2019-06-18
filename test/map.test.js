// @ts-check

const { map } = require("..");

describe("map method", () => {

  test("should return in-range output", () => {

    expect(
      map(3, 2, 5, 20, 26)
    ).toBeCloseTo(
      22
    );

  });

  test("should return out-range output", () => {

    expect(
      map(6, 2, 5, 20, 26)
    ).toBeCloseTo(
      28
    );

    expect(
      map(1, 2, 5, 20, 26)
    ).toBeCloseTo(
      18
    );

  });

  test("should invert in-range output", () => {

    expect(
      map(3, 1, 9, 9, 1)
    ).toBeCloseTo(
      7
    );

  });

  test("should invert out-range output", () => {

    expect(
      map(0, 1, 9, 9, 1)
    ).toBeCloseTo(
      10
    );

  });

  test("should return non integer output", () => {

    expect(
      map(33.1, 10, 90, 1, 9)
    ).toBeCloseTo(
      3.31
    );

  });

});
