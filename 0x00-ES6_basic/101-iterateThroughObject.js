export default function iterateThroughObject(reportWithIterator) {
  // Initialize an empty array to hold employee names
  const employees = [];
  
  // Iterate through the reportWithIterator using a for...of loop
  for (const employee of reportWithIterator) {
    employees.push(employee); // Add each employee to the array
  }
  
  // Join the employee names with ' | ' and return the resulting string
  return employees.join(' | ');
}
