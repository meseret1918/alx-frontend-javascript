import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  // Use Promise.all to handle multiple promises
  Promise.all([uploadPhoto(), createUser()])
    .then((responses) => {
      const [uploadResponse, userResponse] = responses;
      // Log the required properties
      console.log(uploadResponse.body, userResponse.firstName, userResponse.lastName);
    })
    .catch(() => {
      // Log error message in case of rejection
      console.log('Signup system offline');
    });
}
export default handleProfileSignup;
