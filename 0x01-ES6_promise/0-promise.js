export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const success = true; // Simulate an API call success
    if (success) {
      resolve("Success: API response received");
    } else {
      reject("Error: API request failed");
    }
  });
}

