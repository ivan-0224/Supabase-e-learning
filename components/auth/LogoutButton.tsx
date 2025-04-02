"use client";
import React, { useActionState } from "react";
import { Button } from "../ui/button";
import { logout } from "@/actions/Logout";
import { toast } from "sonner";

export default function LogoutButton({ className }: { className?: string }) {
  const [state, action, pending] = useActionState(logout, undefined);
  if (state?.error) {
    toast.error("Error in the server Try another time");
  }
  return (
    <form action={action}>
      <Button
        disabled={pending}
        className={`cursor-pointer block w-full hover:scale-105 ${className}`}
      >
        Logout
      </Button>
    </form>
  );
}
