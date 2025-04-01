import Background from "@/components/Background";
import Welcome from "@/components/home/Welcome";

export default function Home() {
  return (
    <main className="w-full min-h-svh flex  justify-center">
      <Background />
      <Welcome />
    </main>
  );
}
