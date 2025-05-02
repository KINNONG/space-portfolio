import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";

import { BACKEND_SKILL, FRONTEND_SKILL, FULLSTACK_SKILL, OTHER_SKILL } from "@/constants";

// Technology logos array
const logos = [
  { id: 1, src: "https://ext.same-assets.com/3645949495/1530675974.svg", alt: "Bing Logo" },
  { id: 2, src: "https://ext.same-assets.com/3645949495/1190823735.svg", alt: "Claude Logo" },
  { id: 3, src: "https://ext.same-assets.com/3645949495/378028958.svg", alt: "Component Logo" },
  { id: 4, src: "https://ext.same-assets.com/3645949495/1091855506.svg", alt: "DeepClaude Logo" },
  { id: 5, src: "https://ext.same-assets.com/3645949495/2527197843.svg", alt: "Google Logo" },
  { id: 6, src: "https://ext.same-assets.com/3645949495/1420570368.svg", alt: "Git Logo" },
  { id: 7, src: "https://ext.same-assets.com/3645949495/2161916673.svg", alt: "Llama Logo" },
  { id: 8, src: "https://ext.same-assets.com/3645949495/1555967254.svg", alt: "OpenAI Logo" },
  { id: 9, src: "https://ext.same-assets.com/3645949495/882457781.svg", alt: "Perplexity Logo" },
  { id: 10, src: "https://ext.same-assets.com/3645949495/3157492357.svg", alt: "Spider Logo" },
  { id: 11, src: "https://ext.same-assets.com/3645949495/3580434383.svg", alt: "Stable Diffusion Logo" },
  { id: 12, src: "https://ext.same-assets.com/3645949495/1101319498.svg", alt: "Twitter Logo" },
];

export const Skills = () => {
  return (
    <section
      id="skills"
      style={{ transform: "scale(0.9)" }}
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20 pb-0"
    >
      <SkillText />

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {logos.map((logo, i) => (
          <SkillDataProvider key={logo.id} src={logo.src} name={logo.alt} width={70} height={70} outSide index={i} />
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {FRONTEND_SKILL.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {BACKEND_SKILL.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {FULLSTACK_SKILL.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {OTHER_SKILL.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video className="w-full h-auto" preload="false" playsInline loop muted autoPlay>
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
