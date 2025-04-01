"use client";
import { LoginWithGoogle } from "@/actions/LoginWithGoogle";
import React, { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { toast } from "sonner";

export default function GoogleForm() {
  const [state, action, pending] = useActionState(LoginWithGoogle, undefined);
  //variant: "destructive",
  return (
    <form action={action}>
      {state?.error &&
        toast("Connexion Error", {
          description: "server Error try another time",
          action: {
            label: "close",
            onClick: () => console.log("closed"),
          },
        })}
      <Button disabled={pending} className="cursor-pointer hover:scale-101">
        Continue with google <FcGoogle />
      </Button>
    </form>
  );
}
