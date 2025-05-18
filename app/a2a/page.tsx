import Watermark from "@/components/sub/Watermark";
import { ConstructionIcon } from "lucide-react";

export default function A2APage() {
  return (
    <div className="pt-24 pb-16 text-white flex items-center justify-center min-h-screen">
      <Watermark text="Programmer Little White Dragon" />
      <div className="text-center max-w-2xl mx-auto px-4">
        <ConstructionIcon className="h-24 w-24 text-yellow-400 mx-auto mb-8 animate-bounce" />
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Shh... A2A feature is{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            secretly under development
          </span>
          !
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Our engineers are working day and night... Oh no, I mean coding! This awesome feature is like a spaceship
          journey, it needs some time to reach your screen.
        </p>
        <p className="text-md text-gray-400">Stay patient, surprises are coming! 🚀✨</p>
      </div>
    </div>
  );
}
