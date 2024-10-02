import { uploadPhoto, createUser } from './utils.js';

function handleProfileSignup() {
    Promise.all([uploadPhoto(), createUser()])
        .then((results) => {
            const [photoResult, userResult] = results;
            // Access the properties based on your existing function implementations
            const firstName = userResult.firstName;
            const lastName = userResult.lastName;
            console.log(`${firstName} ${lastName}`);
        })
        .catch(() => {
            console.log('Signup system offline');
        });
}

export default handleProfileSignup;

