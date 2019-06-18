// @ts-check

const { limit } = require("..");

describe("limit method", () => {

  test("should return in-range output", () => {

    expect(
      limit(3.3, 2, 5, 20, 50)
    ).toBeCloseTo(
      33
    );

  });

  test("should limit output", () => {

    expect(
      limit(1, 2, 5, 20, 50)
    ).toBeCloseTo(
      20
    );

    expect(
      limit(6, 2, 5, 20, 50)
    ).toBeCloseTo(
      50
    );

  });

  test("should invert output", () => {

    expect(
      limit(3.1, 1, 9, 9, 1)
    ).toBeCloseTo(
      6.9
    );

  });

  test("should return non integer output", () => {

    expect(
      limit(33.1, 10, 90, 1, 9)
    ).toBeCloseTo(
      3.31
    );

  });

});
