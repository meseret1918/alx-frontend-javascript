// task_4/js/subjects/Subject.ts

namespace Subjects {
  export class Subject {
    teacher!: Teacher; // attribute that implements Teacher interface

    setTeacher(teacher: Teacher) {
      this.teacher = teacher; // setter method
    }
  }
}
