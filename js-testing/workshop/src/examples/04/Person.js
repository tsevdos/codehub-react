class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.hobbies = [];
  }

  greet() {
    return `Hi! I'm ${this.name} and I'm ${this.age} old.`;
  }

  setAge(newAge) {
    this.age = newAge;
  }

  isAdult() {
    return this.age >= 18;
  }

  addHobby(hobby) {
    this.hobbies.push(hobby);
  }

  // remove hobby if exists
  removeHobby(hobby) {
    this.hobbies = this.hobbies.filter((h) => h !== hobby);
  }

  displayHobbies() {
    return `${this.name}'s Hobbies: ${this.hobbies.join(", ")}`;
  }
}

export default Person;
