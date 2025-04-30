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


export interface Doc{
  doc_id? :string|undefined|null;
  created_at? :string|undefined|null;
  doc_name? :string|undefined|null;
  doc_url? :string|null;
  hash_value? :string|undefined|null;
  Img? :string|undefined|null;

}

export interface Course{
  course_id? :string|undefined|null;
  created_at? :string|undefined|null;
  class_id? :string|undefined|null;
  course_name? :string|undefined|null;
  course_descriptions? :string|undefined|null;
  course_type? :string|undefined|null;

}

export interface CourseDoc{
  course_doc_id? :string|undefined|null;
  created_at? :string|undefined|null;
  course_id? :string|undefined|null;
  doc_id? :string|undefined|null;
}

export interface Comment{
  comment_id? :string|undefined|null;
  created_at? :string|undefined|null;
  comment_owner? :string|undefined|null;
  user_name? :string|undefined|null;
  context? :string|undefined|null;
  course_id? :string|undefined|null;
  comment_img? :string|undefined|null;
}

export interface Group{
  group_id? :string|undefined|null;
  created_at? :string|undefined|null;
  group_num? :string|undefined|null;
  class_id? :string|undefined|null;
}

export interface StudentGroup{
  studentg_id? :string|undefined|null;
  created_at? :string|undefined|null;
  student_id? :string|undefined|null;
  group_id? :string|undefined|null;
}
