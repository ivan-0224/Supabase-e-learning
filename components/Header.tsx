import React from "react";
import LogoutButton from "./auth/LogoutButton";
import { AvatarIcon } from "./AvatarIcon";
import { GetUser } from "@/utils/getuser";
import Menu from "./Menu";

export default async function Header() {
  //Get user
  const user = await GetUser();
  const userImg = user?.user_metadata.avatar_url;
  const userName = user?.user_metadata.full_name;

  return (
    <div className=" z-50 flex w-full items-center justify-between p-5 shadow backdrop-blur-md  subpixel-antialiased  sticky top-0">
      <h1 className="font-semibold text-shadow-lg">
        <span className="md:text-3xl text-xl text-blue-400">Fsegt</span>{" "}
        <span className="md:text-2xl ">Classroom</span>
      </h1>
      <div className="flex items-center md:gap-3 gap-1">
        <span className="md:inline hidden capitalize font-semibold text-sm">
          {userName}
        </span>
        <AvatarIcon img={userImg} />
        <LogoutButton className="md:inline-block hidden" />
        {/*Show This Menu in the small devices */}
        <Menu userName={userName} userImg={userImg} />
      </div>
    </div>
  );
}
