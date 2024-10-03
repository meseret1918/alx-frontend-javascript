export default function getResponseFromAPI() {
  const success = true; // Variable to control the success of the Promise
  return new Promise((resolve, reject) => { // Create a new Promise
    if (success) { // Check if success is true
      resolve('Success'); // Call resolve() to indicate a successful operation
    } else {
      reject(new Error('API call failed')); // Call reject() to indicate a failed operation
    }
  });
}
