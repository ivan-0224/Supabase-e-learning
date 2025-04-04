import React from "react";

import { GetUser } from "@/utils/getuser";
import { notFound } from "next/navigation";
import HomePage from "@/components/user/HomePage";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const user = await GetUser();

  //so the user can't enter any wrong id
  if (user?.id != id) {
    notFound();
  }
  return (
    <>
      <HomePage user={user} />
    </>
  );
}
