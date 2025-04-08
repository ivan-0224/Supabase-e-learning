import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import JoinedClassContainer from "@/components/user/joined/JoinedClassContainer";
import CreateClassPrompt from "@/components/user/created/CreateClassPrompt";
import ClassCreatedContainer from "@/components/user/created/ClassCreatedContainer";
import ClassJoinprompt from "@/components/user/joined/ClassJoinprompt";
import { User } from "@supabase/supabase-js";
import { getCreatedClass, getJoinedClass } from "@/utils/getclass";
import { Class } from "@/utils/types";

export default async function HomePage({ user }: { user: User }) {
  //GET created classes
  const Created_Classes = await getCreatedClass(user);
  //Get classes that user had joined
  const Joined_Classes = await getJoinedClass(user);

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
      <TabsContent value="created" className="flex flex-col gap-2.5">
        <p className="text-center text-sm text-black/50 dark:text-white drop-shadow-sm">
          Create classes right Here{" "}
          <span className="text-black text-lg">📝</span>
        </p>
        <CreateClassPrompt />
        <ClassCreatedContainer
          user={user}
          classes={Created_Classes as Class[]}
        />
      </TabsContent>
      {/*JOINED CLASSES */}
      <TabsContent value="joined" className="flex flex-col gap-2.5">
        <p className="text-center text-sm text-black/50 dark:text-white drop-shadow-sm">
          Join classes right Here <span className="text-black text-lg">🎯</span>
        </p>
        <ClassJoinprompt />
        <JoinedClassContainer classes={Joined_Classes as Class[]} />
      </TabsContent>
    </Tabs>
  );
}
