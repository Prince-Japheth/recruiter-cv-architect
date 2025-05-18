
import { Laptop, Code, Server, Smartphone, Wand, Layers } from "lucide-react";

const stack = [
  { label: "JavaScript (ES6+)", icon: Code },
  { label: "TypeScript", icon: Code },
  { label: "React, React Native", icon: Smartphone },
  { label: "Node.js", icon: Server },
  { label: "Firebase", icon: Wand },
  { label: "UI/UX Design", icon: Layers },
  { label: "HTML5/CSS3", icon: Laptop },
  { label: "Tailwind CSS", icon: Layers },
  { label: "Redux / Zustand", icon: Code },
  { label: "RESTful & GraphQL APIs", icon: Server }
];

const TechGrid = () => (
  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-2 gap-y-1 font-medium text-gray-700 mt-1 mb-6" aria-label="Tech stack and tools">
    {stack.map(({ label, icon: Icon }) => (
      <li key={label} className="flex items-center gap-2 text-sm">
        <Icon className="w-4 h-4 text-accentpurple" aria-hidden="true" />
        <span>{label}</span>
      </li>
    ))}
  </ul>
);

export default TechGrid;
