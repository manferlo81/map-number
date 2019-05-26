const { create, wrap } = require("..");

describe("alias methods", () => {

  test("should export wrap alias", () => {

    expect(wrap).toBe(create);

  });

});
