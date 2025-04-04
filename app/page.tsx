import Background from "@/components/Background";
import Welcome from "@/components/home/Welcome";
import { ModeTogle } from "@/components/ModeTogle";

export default async function Home() {
  return (
    <main className="w-full min-h-svh flex  justify-center p-1">
      <ModeTogle />
      <Background />
      <Welcome />
    </main>
  );
}
