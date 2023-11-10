import Person from "./Person";

describe("Person", () => {
  let person;

  beforeEach(() => {
    person = new Person("John", 41);
  });

  it("create a person with the correct defaults", () => {
    expect(person.name).toBe("John");
    expect(person.age).toBe(41);
    expect(person.hobbies).toStrictEqual([]);
  });

  it("person correctly greets", () => {
    expect(person.greet()).toBe("Hi! I'm John and I'm 41 old.");
  });

  it("correctly sets a new age for the person", () => {
    person.setAge(35);
    expect(person.age).toBe(35);
  });

  it("correctly determines if the person is an adult", () => {
    const kid = new Person("Johnny", 12);
    expect(person.isAdult()).toBe(true);
    expect(kid.isAdult()).toBe(false);
  });

  it("correctly add and remove hobbies", () => {
    person.addHobby("football");
    person.addHobby("martial arts");
    person.addHobby("movies");

    expect(person.hobbies).toEqual(["football", "martial arts", "movies"]);

    person.removeHobby("martial arts");
    expect(person.hobbies).toEqual(["football", "movies"]);

    person.removeHobby("reading"); // Hobby that doesn't exist
    expect(person.hobbies).toEqual(["football", "movies"]);
  });

  it("should display the person's hobbies", () => {
    person.addHobby("football");
    person.addHobby("martial arts");
    person.addHobby("movies");

    expect(person.displayHobbies()).toEqual(
      "John's Hobbies: football, martial arts, movies"
    );
  });
});
