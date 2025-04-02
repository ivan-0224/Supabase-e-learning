import GoogleForm from "@/components/auth/GoogleForm";
import Background from "@/components/Background";

import React from "react";

export default async function page() {
  return (
    <div className="w-full h-svh flex items-center justify-center">
      <Background />
      <GoogleForm />
    </div>
  );
}
