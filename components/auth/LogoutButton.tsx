"use client";
import React, { useActionState } from "react";
import { Button } from "../ui/button";
import { logout } from "@/actions/Logout";
import { toast } from "sonner";
import { ClipLoader } from "react-spinners";

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
        {pending ? (
          <ClipLoader
            color="#ffffff"
            cssOverride={{}}
            loading
            size={20}
            speedMultiplier={1}
          />
        ) : (
          <span>Log-out</span>
        )}
      </Button>
    </form>
  );
}
