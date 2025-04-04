import React from "react";

export default function Background() {
  return (
    <div
      className="absolute inset-0 -z-10 h-full w-full 
    bg-white 
    [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#1e90ff_100%)] 
    dark:bg-black 
    dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#1e3a8a_100%)]"
    ></div>
  );
}
