import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import React from "react";
import LogoutButton from "./auth/LogoutButton";
import { Mails, MenuIcon } from "lucide-react";
import { AvatarIcon } from "./AvatarIcon";
import { GetUser } from "@/utils/getuser";
import { ModeTogle } from "./ModeTogle";

export default async function Menu({
  userName,
  userImg,
}: {
  userName: string | undefined;
  userImg: string | undefined;
}) {
  const user = await GetUser();
  const userMail = user?.email;
  return (
    <div className="md:hidden ">
      <Drawer>
        <DrawerTrigger className="flex focus:scale-105">
          <MenuIcon className="flex-grow" />
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle className="flex justify-between items-center my-1.5 drop-shadow-lg">
              <div className="flex gap-1.5 items-end my-1.5 drop-shadow-lg">
                <AvatarIcon img={userImg} />
                <span className="p-1 text-sm capitalize">{userName}</span>
              </div>
              <span className="float-right">
                {" "}
                <ModeTogle />
              </span>
            </DrawerTitle>
            <DrawerDescription className="flex items-center gap-1 drop-shadow-lg">
              <Mails />
              <span className=" select-all">{userMail}</span>
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <LogoutButton />
            <DrawerClose>
              <span className="border block py-1 rounded-md">Cancel</span>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
