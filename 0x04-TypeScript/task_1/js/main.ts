// 1. Teacher Interface
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number; // optional
  location: string;
  [key: string]: any; // Allows adding additional properties
}

// Create a teacher instance
const teacher1: Teacher = {
  firstName: 'Meseret',
  lastName: 'Alem',
  fullTimeEmployee: false,
  location: 'Bule Hora',
  contract: false, // additional property
};

console.log(teacher1);

// 2. Directors Interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Create a director instance
const director1: Directors = {
  firstName: 'Meseret',
  lastName: 'Alem',
  location: 'Bule Hora',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// 3. Print Teacher Function
function printTeacher(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}. ${lastName}`;
}

// Interface for the printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Usage of printTeacher
console.log(printTeacher("Meseret", "Alem"));

// 4. StudentClass
class StudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// Interface for the StudentClass
interface IStudentClass {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

// Using StudentClass
const student = new StudentClass('Meseret', 'Alem');
console.log(student.displayName());
console.log(student.workOnHomework()); // Outputs: Currently working

