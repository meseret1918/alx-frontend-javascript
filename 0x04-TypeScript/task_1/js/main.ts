interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number; // Optional
  location: string;
  [key: string]: any; // Allows for additional properties
}

//Creating a Teacher object
const teacher1: Teacher = {
  firstName: "Meseret",
  fullTimeEmployee: false,
  lastName: "Alem",
  location: "Bule Hora",
  contract: false, // Additional attribute
};

console.log(teacher1);
