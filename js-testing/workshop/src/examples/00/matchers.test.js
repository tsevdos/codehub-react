describe("Core matchers", () => {
  it("toBe", () => {
    const string = "John";
    const number = 5;
    const boolean = true;
    const array = ["JavaScript", "TypeScript"];
    const obj = {
      name: "John",
      age: 40,
    };

    expect(string).toBe("John");
    expect(number).toBe(5);
    expect(boolean).toBe(true);
    expect(array).toBe(array);
    expect(obj).toBe(obj);
  });

  it("toEqual", () => {
    const string = "John";
    const number = 5;
    const boolean = true;
    const array = ["JavaScript", "TypeScript"];
    const obj = {
      name: "John",
      age: 40,
    };

    expect(string).toEqual("John");
    expect(number).toEqual(5);
    expect(boolean).toEqual(true);
    expect(array).toEqual(["JavaScript", "TypeScript"]);
    expect(obj).toEqual({
      name: "John",
      age: 40,
    });
  });
});

describe("Number matchers", () => {
  it("LessThan, LessThanOrEqual, GreaterThan, GreaterThanOrEqual", () => {
    expect(5).toBeLessThan(10);
    expect(5).toBeLessThanOrEqual(5);
    expect(10).toBeGreaterThan(5);
    expect(10).toBeGreaterThanOrEqual(10);
  });
});

describe("Boolean matchers", () => {
  it("toBeTruthy / toBeFalsy", () => {
    expect(true).toBeTruthy();
    expect("John").toBeTruthy();
    expect(1).toBeTruthy();
    expect({}).toBeTruthy();
    expect([]).toBeTruthy();

    expect(false).toBeFalsy();
    expect(0).toBeFalsy();
    expect(null).toBeFalsy();
    expect(undefined).toBeFalsy();
    expect(NaN).toBeFalsy();
  });
});

describe("Objects matchers", () => {
  it("toBeInstanceOf", () => {
    class Person {
      constructor(name) {
        this.name = name;
      }
    }

    const john = new Person("John");

    expect(john).toBeInstanceOf(Person);
  });

  it("toMatchObject", () => {
    const houseForSale = {
      bath: true,
      bedrooms: 4,
      kitchen: {
        amenities: ["oven", "stove", "washer"],
        area: 20,
        wallColor: "white",
      },
    };
    const desiredHouse = {
      bath: true,
      kitchen: {
        amenities: ["oven", "stove", "washer"],
        wallColor: expect.stringMatching(/white|yellow/),
      },
    };

    expect(houseForSale).toMatchObject(desiredHouse);
  });

  it("toHaveProperty", () => {
    const john = {
      name: "John",
      age: 40,
    };

    expect(john).toHaveProperty("name", "John");
    expect(john).toHaveProperty("age");
  });
});

describe("Arrays matchers", () => {
  it("toContain", () => {
    const hobbies = ["football", "martial arts", "movies"];

    expect(hobbies).toContain("football");
    expect(hobbies).toContain("football", "movies");
  });

  it("toHaveLength", () => {
    const hobbies = ["football", "martial arts", "movies"];

    expect(hobbies).toHaveLength(3);
  });
});

describe("Misc matchers", () => {
  it("types", () => {
    expect("test").toBeDefined();
    expect(undefined).toBeUndefined();
    expect(null).toBeNull();
    expect(NaN).toBeNaN();
  });
});

describe("Error matchers", () => {
  it("types", () => {
    function fn(name) {
      if (!name) {
        throw new Error("Must pass a name");
      }
    }

    expect(() => fn()).toThrow();
    expect(() => fn()).toThrow("Must pass a name");
    expect(() => fn("John")).not.toThrow();
  });
});
