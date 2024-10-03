const getFullResponseFromAPI = (success) => 
  new Promise((resolve, reject) => {
    if (success) {
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });

// Correct the export statement here
export default getFullResponseFromAPI;

