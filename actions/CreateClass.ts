"use server";
import { createClient } from "@/utils/supabase/server";

import z from "zod";
const classSchema = z.object({
  className: z
    .string()
    .regex(/^[A-Za-z\s]+$/, {
      message: "* class name must contains only letters",
    })
    .trim(),
  Major: z
    .string()
    .regex(/^[A-Za-z0-9\s]+$/, {
      message: "* contains only letters and numbers",
    })
    .trim(),
  Description: z.string().optional(),
});

export const CreateClass = async (state: any, formData: FormData) => {
  const supbase = await createClient();
  const { data } = await supbase.auth.getUser();

  const teacher_name = data.user?.user_metadata.full_name;
  const teacher_mail = data.user?.email;
  const class_name = formData.get("className");
  const major = formData.get("Major");
  const description = formData.get("Desc");

  //VALIDATE THE DATE GETTED FROM FORM
  const valid_data = classSchema.safeParse({
    className: class_name,
    Major: major,
    Description: description,
  });
  if (valid_data.success) {
    //Insert the class and redirect the user to his own class

    //FIRST we need to add the user to the teacher table
    await supbase.from("teacher").insert([{ teacher_name, teacher_mail }]);
    //than we can create the class
    const { error } = await supbase
      .from("class")
      .insert([{ class_name, description, major }]);

    if (error) {
      console.log(error);
      return { ServerError: "Server Error" };
    }

    return { success: "Class created succesfully" };
  } else {
    return { error: valid_data.error.flatten().fieldErrors };
  }
};
