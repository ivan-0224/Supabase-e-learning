"use client";
import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { toast } from "sonner";
import { createClient } from "@/utils/supabase/client";

export default function GoogleForm() {
  const but = useRef<HTMLButtonElement>(null);
  const supabase = createClient();
  const handleGoogleSignIn = async () => {
    if (but.current) {
      but.current.disabled = true;
    }
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/api/auth/callback`,
        queryParams: { access_type: "offline", prompt: "consent" },
      },
    });
    if (error) {
      toast.error("Erreur in the server Try another time");
    }
  };

  return (
    <Button
      ref={but}
      onClick={handleGoogleSignIn}
      className="cursor-pointer hover:scale-101 font-semibold"
    >
      Continue with google <FcGoogle />
    </Button>
  );
}
