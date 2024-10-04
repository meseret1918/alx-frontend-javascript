export default function taskBlock(trueOrFalse) {
  let task = false;  // Use let for block scope
  let task2 = true;  // Use let for block scope

  if (trueOrFalse) {
    task = true;      // No redeclaration, just assign
    task2 = false;    // No redeclaration, just assign
  }

  return [task, task2];
}

