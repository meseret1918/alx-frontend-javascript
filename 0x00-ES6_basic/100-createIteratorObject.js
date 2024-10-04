export default function createIteratorObject(report) {
  // Create an array to hold all employees
  const employees = [];

  // Iterate over each department in the report
  for (const department of Object.keys(report.allEmployees)) {
    // Add each employee in the department to the employees array
    employees.push(...report.allEmployees[department]);
  }

  // Return an iterator for the employees array
  return employees[Symbol.iterator]();
}
