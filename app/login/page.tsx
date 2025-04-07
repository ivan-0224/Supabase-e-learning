import { FloatingPaths } from "@/components/animations/FloatingPaths";
import GoogleForm from "@/components/auth/GoogleForm";
import Background from "@/components/Background";

import React from "react";

export default async function page() {
  return (
    <div className="w-full h-svh flex items-center justify-center">
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>
      <GoogleForm />
    </div>
  );
}
