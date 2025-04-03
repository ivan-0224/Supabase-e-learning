"use server";
import { createClient } from "@/utils/supabase/server";

export const DeleteCreatedClass = async (
  state: any,
  formData: FormData,
  classId: string
) => {
  const supabase = await createClient();
  const { error } = await supabase
    .from("class")
    .delete()
    .eq("class_id", classId);

  if (error) {
    return { error: error?.message };
  } else {
    return { succes: "Deleted Succesfully" };
  }
};
