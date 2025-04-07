"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FloatingPaths } from "../animations/FloatingPaths";

export default function Welcome({
  title = "Fsegt Classroom",
}: {
  title?: string;
}) {
  const words = title.split(" ");

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950 ">
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-7xl md:text-8xl font-bold mb-3 tracking-tighter  bg-gradient-to-r from-blue-500 dark:to-white to-black/60 bg-clip-text text-transparent text-shadow-amber-200">
            Fsegt Classroom
          </h1>
          <p className="text-sm m-3 font-semibold z-30 text-gray-600 dark:text-white">
            Hello and thank you for joining Fsegt Classrom . your new hub for
            learning, collaboration, and growth! Whether you're a student,
            teacher, or lifelong learner, we’re here to make education simple,
            organized, and inspiring.
          </p>
          <div
            className="inline-block group relative bg-gradient-to-b from-black/10 to-white/10 
                        dark:from-white/10 dark:to-black/10 p-px rounded-2xl backdrop-blur-lg 
                        overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Button
              asChild
              variant="ghost"
              className="rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md 
                            bg-white/95 hover:bg-white/100 dark:bg-black/95 dark:hover:bg-black/100 
                            text-black dark:text-white transition-all duration-300 
                            group-hover:-translate-y-0.5 border border-black/10 dark:border-white/10
                            hover:shadow-md dark:hover:shadow-neutral-800/50"
            >
              <Link
                href={"/login"}
                className="opacity-90 group-hover:opacity-100 transition-opacity cursor-pointer"
              >
                Get Started{" "}
                <span
                  className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 
                                transition-all duration-300"
                >
                  →
                </span>
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
