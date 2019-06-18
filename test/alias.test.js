// @ts-check

const { create, wrap } = require("..");

describe("alias methods", () => {

  test("should export create alias", () => {

    expect(create).toBe(wrap);

  });

});
