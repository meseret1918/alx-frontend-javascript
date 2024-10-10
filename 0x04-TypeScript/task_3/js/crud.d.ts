// task_3/js/crud.d.ts

// Import RowID and RowElement types
import { RowID, RowElement } from './interface';

// Declare the types for the crud functions
declare module 'crud' {
  export function insertRow(row: RowElement): RowID;
  export function deleteRow(rowId: RowID): void;
  export function updateRow(rowId: RowID, row: RowElement): RowID;
}
