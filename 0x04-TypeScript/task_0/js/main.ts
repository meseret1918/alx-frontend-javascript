// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two student objects
const student1: Student = {
    firstName: 'Meseret',
    lastName: 'Alem',
    age: 20,
    location: 'Finoteselam'
};

const student2: Student = {
    firstName: 'Bereket',
    lastName: 'Tena',
    age: 22,
    location: 'Debre Markos'
};

// Create an array to hold the students
const studentsList: Student[] = [student1, student2];

// Get the body element from the DOM
const body = document.querySelector('body');

// Create a table element
const table = document.createElement('table');

// Loop through the studentsList and create a row for each student
studentsList.forEach((student) => {
    // Create a new row
    const row = document.createElement('tr');

    // Create a cell for the student's first name
    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;

    // Create a cell for the student's location
    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;

    // Append the cells to the row
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);

    // Append the row to the table
    table.appendChild(row);
});

// Append the table to the body
body?.appendChild(table);
