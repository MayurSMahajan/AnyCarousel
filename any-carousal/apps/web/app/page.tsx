import { FeaturesSection } from "./sections/FeaturesSection";
import { HeroSection } from "./sections/HeroSection";
import { InstallationSection } from "./sections/InstallationSection";
import { PlaygroundSection } from "./sections/PlaygroundSection";

export default function Home() {

  return (
    <div className="bg-zinc-950">
      <HeroSection />
      <PlaygroundSection />
      <FeaturesSection />
      <InstallationSection />
    </div>
  );
}