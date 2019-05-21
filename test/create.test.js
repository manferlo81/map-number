const { create, map } = require("..");

describe("create method", () => {

  test("should return the correct output", () => {

    const boundaries = [2, 5, 20, 50];
    const myMap = create(map, ...boundaries);

    const nums = [3.3, 0.01, 10];

    nums.forEach((num) => {
      expect(
        myMap(num)
      ).toBe(
        map(num, ...boundaries)
      );
    });

  });

});
