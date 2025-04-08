export interface Class {
    class_name: string;
    description: string;
    major: string;
    class_id: string;
    teacher_id?:string;
  }
export interface Teacher {
    teacher_name: string;
    teacher_mail: string;
}

export interface Student {
  student_id? :string|undefined|null;
  student_name? :string|undefined|null;
  studentImg? :string|undefined|null;
  student_mail? :string|undefined|null;
  class_id? :string|undefined|null;
}

