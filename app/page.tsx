import { Encryption } from "@/components/main/encryption";
import { Hero } from "@/components/main/hero";
import { Skills } from "@/components/main/skills";
import CategoriesSection from "@/components/sub/CategoriesSection";
import FaqSection from "@/components/sub/FaqSection";
import ShowcaseSection from "@/components/sub/ShowcaseSection";
import WorkflowSection from "@/components/sub/WorkflowSection";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <WorkflowSection />
        <Encryption />
        <CategoriesSection />
        {/* <Projects /> */}
        <ShowcaseSection />

        <FaqSection />
      </div>
    </main>
  );
}
