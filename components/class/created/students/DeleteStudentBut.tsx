"use client";
import { DeleteStudent } from "@/actions/DeleteStudent";
import React, { useActionState, useEffect } from "react";
import { toast } from "sonner";

export default function DeleteStudentBut({
  studentId,
  classId,
}: {
  studentId: string;
  classId: string;
}) {
  const HandleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const res = await DeleteStudent(studentId, classId);
    if (res.succes) {
      toast.success("student deleted Scuccesfully");
      window.location.reload();
    } else {
      toast.error("Error in the server try another time");
    }
  };
  return (
    <form onSubmit={HandleSubmit}>
      <input type="submit" value={"delete student"} />
    </form>
  );
}
