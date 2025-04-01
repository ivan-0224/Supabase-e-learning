import { Sidebar } from "@/components/admin-panel/sidebar";
import { UserNav } from "@/components/admin-panel/user-nav";
import { GetUser } from "@/utils/getuser";
import { redirect } from "next/navigation";
import React from "react";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const user = await GetUser();

  //so the user can't enter any wrong id
  if (user?.id != id) {
    redirect(`/user/${user?.id}`);
  }

  return (
    <div>
      <Sidebar />
    </div>
  );
}
