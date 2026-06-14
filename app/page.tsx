import { About } from "@/components/about";
import { Hero } from "@/components/hero";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <main>
        <About />
      </main>
    </div>
  );
}
