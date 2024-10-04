export default function taskBlock(trueOrFalse) {
  let task = false; // Use let for task
  let task2 = true; // Use let for task2

  if (trueOrFalse) {
    task = true; // No redeclaration needed
    task2 = false; // No redeclaration needed
  }

  return [task, task2];
}
