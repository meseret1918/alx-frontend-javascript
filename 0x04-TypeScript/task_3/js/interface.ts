// task_3/js/interface.ts

// Define RowID type
export type RowID = number;

// Define RowElement interface
export interface RowElement {
  firstName: string;
  lastName: string;
  age?: number; // age is optional
}
