import { round } from "../src";

describe("round method", () => {

  test("should return in-range output", () => {

    expect(
      round(23, 20, 50, 2, 5),
    ).toBe(
      2,
    );

  });

  test("should return out-range output", () => {

    expect(
      round(6, 20, 50, 2, 5),
    ).toBe(
      1,
    );

    expect(
      round(62, 20, 50, 2, 5),
    ).toBe(
      6,
    );

  });

  test("should invert in-range output", () => {

    expect(
      round(3.1, 1, 9, 9, 1),
    ).toBe(
      7,
    );

  });

  test("should invert out-range output", () => {

    expect(
      round(-1.7, 1, 9, 9, 1),
    ).toBe(
      12,
    );

  });

});
