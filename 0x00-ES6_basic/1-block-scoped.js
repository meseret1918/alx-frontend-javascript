export default function taskBlock(trueOrFalse) {
  let task = false;  // Use let instead of var
  let task2 = true;  // Use let instead of var

  if (trueOrFalse) {
    task = true;     // No redeclaration, just assign
    task2 = false;   // No redeclaration, just assign
  }

  return [task, task2];
}
