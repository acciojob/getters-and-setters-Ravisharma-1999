// Parent class Person
class Person {
    constructor(name, age) {
        this._name = name; // Private variable to store name
        this._age = age;   // Private variable to store age
    }

    // Getter for name
    get name() {
        return this._name;
    }

    // Setter for age
    set age(age) {
        this._age = age;
    }

    // Getter for age (optional if you need it to retrieve age)
    get age() {
        return this._age;
    }
}

// Subclass Student that extends Person
class Student extends Person {
    constructor(name, age) {
        super(name, age);  // Call the constructor of the parent class (Person)
    }

    // Method specific to Student
    study() {
        console.log(`${this.name} is studying`);
    }
}

// Subclass Teacher that extends Person
class Teacher extends Person {
    constructor(name, age) {
        super(name, age);  // Call the constructor of the parent class (Person)
    }

    // Method specific to Teacher
    teach() {
        console.log(`${this.name} is teaching`);
    }
}

// Example usage
const person = new Person("John", 25);
console.log(person.name); // Output: John

person.age = 30;
console.log(person.age); // Output: 30

const student = new Student("Alice", 22);
student.study(); // Output: Alice is studying

const teacher = new Teacher("Bob", 40);
teacher.teach(); // Output: Bob is teaching
