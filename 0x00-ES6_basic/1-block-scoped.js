export default function taskBlock(trueOrFalse) {
  let task = false; // Change var to let
  let task2 = true; // Change var to let

  if (trueOrFalse) {
    task = true; // No var or let here since task is already declared
    task2 = false; // No var or let here since task2 is already declared
  }

  return [task, task2];
}
