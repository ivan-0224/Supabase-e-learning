import React from "react";
import TextTypingAnimation from "../animations/TextTypingAnimation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Welcome() {
  return (
    <section className=" flex flex-col items-center justify-center w-full text-center font-mono drop-shadow-sm">
      <h1 className="text-black  text-center  text-3xl ">
        Hello and thank you for joining
        <br />
        <div className="m-3">
          <span className="font-semibold">Fsegt</span>{" "}
          <span className="text-blue-400 font-semibold">Classroom</span>
        </div>
      </h1>
      <div className="text-black/40 p-2 md:w-[600px]">
        <TextTypingAnimation
          text={`your new hub for learning, collaboration, and growth! Whether you're a student, teacher, or lifelong learner, we’re here to make education simple, organized, and inspiring.`}
        />
      </div>
      <Button asChild className="m-5 hover:scale-105">
        <Link href="/login">Get Started</Link>
      </Button>
    </section>
  );
}
