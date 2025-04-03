import { GetUser } from "@/utils/getuser";
import { redirect } from "next/navigation";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CreatedClass from "@/components/user/created/CreatedClass";
import JoinedClass from "@/components/user/joined/JoinedClass";

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
    <Tabs defaultValue="created" className="w-full p-1">
      <TabsList className="flex w-full ">
        <TabsTrigger value="created" className="cursor-pointer">
          Created
        </TabsTrigger>
        <TabsTrigger value="joined" className="cursor-pointer">
          Joined
        </TabsTrigger>
      </TabsList>
      {/*CREATED CLASSES */}
      <TabsContent value="created">
        <p className="text-center text-sm text-black/50 drop-shadow-sm">
          Create classes right Here{" "}
          <span className="text-black text-lg">📝</span>
        </p>
        <CreatedClass id={id} />
      </TabsContent>
      {/*JOINED CLASSES */}
      <TabsContent value="joined">
        <p className="text-center text-sm text-black/50 drop-shadow-sm">
          Join classes right Here <span className="text-black text-lg">🎯</span>
        </p>
        <JoinedClass />
      </TabsContent>
    </Tabs>
  );
}
