export default function guardrail(mathFunction) {
    const queue = []; // Create an array named queue

    try {
        const result = mathFunction(); // Execute the mathFunction
        queue.push(result); // Append the returned value to the queue
    } catch (error) {
        queue.push(error.message); // Append the error message to the queue
    } finally {
        queue.push('Guardrail was processed'); // Append the guardrail message to the queue
    }

    return queue; // Return the queue
}

