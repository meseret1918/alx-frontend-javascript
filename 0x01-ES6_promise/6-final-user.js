// 6-final-user.js
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

function handleProfileSignup(firstName, lastName, fileName) {
    const promises = [
        signUpUser(firstName, lastName),
        uploadPhoto(fileName),
    ];

    return Promise.allSettled(promises)
        .then((results) => {
            return results.map((result) => ({
                status: result.status,
                value: result.status === 'fulfilled' ? result.value : result.reason,
            }));
        });
}

export default handleProfileSignup; // Export as default

