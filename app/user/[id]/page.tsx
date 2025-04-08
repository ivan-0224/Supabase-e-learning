import React from "react";

import { GetUser } from "@/utils/getuser";
import { notFound, redirect } from "next/navigation";
import HomePage from "@/components/user/HomePage";
import Header from "@/components/Header";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const user = await GetUser();

  //so the user can't enter any wrong id
  if (user?.id === undefined || !user || user == null) {
    redirect("/");
  } else if (user?.id != id) {
    redirect(`/user/${user.id}`);
  }

  return (
    <>
      <Header />
      <HomePage user={user} />
    </>
  );
}
