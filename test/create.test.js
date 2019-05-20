const { create, map } = require("..");

describe("create method", () => {

  const myMap = create(map, 2, 5, 20, 50);

  test("should return in-range output", () => {

    expect(
      myMap(3.3)
    ).toBeCloseTo(
      33
    );

  });

  test("should return out-range output", () => {

    expect(
      myMap(6.1)
    ).toBeCloseTo(
      61
    );

    expect(
      myMap(1.7)
    ).toBeCloseTo(
      17
    );

  });

  test("should return non integer output", () => {

    expect(
      myMap(0.331)
    ).toBeCloseTo(
      3.31
    );

  });

});
