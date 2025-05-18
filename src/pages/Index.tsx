
import SectionHeader from "@/components/SectionHeader";
import TechGrid from "@/components/TechGrid";
import CVQRCode from "@/components/CVQRCode";
import { Mail, Linkedin, Globe, Instagram } from "lucide-react";

const PROFILE = {
  name: "Japheth Oluwatimileyin Jerry",
  title: "Full-Stack Engineer · UI/UX & Graphic Designer",
  location: "Federal Capital Territory, Nigeria · Remote",
  email: "princejaphethjj@gmail.com",
  linkedin: "https://www.linkedin.com/in/japheth-jerry-34a513274/",
  portfolio: "https://yafetport.netlify.app",
  instagram: "https://www.instagram.com/_prince_yafet_/",
  summary: `Resourceful Full-Stack Engineer and Designer with 3+ years' experience delivering engaging, user-first digital products. Specialized in React/Next.js, Node.js, TypeScript, UI/UX design, and graphic design. Strong track record of building scalable web/mobile apps and crafting seamless interfaces.`,
};

const PROJECTS = [
  {
    name: "QuickTrack (React Native, Node.js, Firebase)",
    desc: "Built logistics platform with real-time sync and notifications; improved delivery speed by 18%.",
  },
  {
    name: "FitBuddy (React Native, Firebase, Figma)",
    desc: "Designed and launched social fitness app, driving 20K+ downloads with strong UI and viral features.",
  },
  {
    name: "TradeDesk Web (React, Node.js, Redux)",
    desc: "Architected trading dashboard to reduce manual ops by 35% and advance system reliability.",
  },
];

const EXPERIENCE = [
  {
    title: "Full-Stack Engineer & Designer",
    company: "Freelance & Remote Teams",
    time: "2021 – Present",
    results: [
      "Delivered multiple scalable web/mobile apps using React, Node.js, Next.js, and Firebase.",
      "Designed intuitive UI/UX and graphics for startups and small businesses, elevating engagement.",
      "Implemented modern design systems and responsive layouts with Figma and Tailwind CSS.",
    ],
  },
  // ... You can add other roles/companies as you grow!
];

const EDUCATION = [
  {
    school: "Self-Taught & Online Programs",
    degree: "Full-Stack Web Development (incl. UI/UX, Graphic Design)",
    year: "2021+",
  },
  {
    school: "Certifications & Workshops",
    degree: "JavaScript, React, Figma, Adobe Creative Suite",
    year: "2022+",
  },
];

const FOOTER_LINKS = [
  {
    icon: Globe,
    text: "yafetport.netlify.app",
    href: "https://yafetport.netlify.app",
  },
  {
    icon: Instagram,
    text: "_prince_yafet_",
    href: "https://www.instagram.com/_prince_yafet_/",
  },
  {
    icon: Mail,
    text: "princejaphethjj@gmail.com",
    href: "mailto:princejaphethjj@gmail.com",
  },
  {
    icon: Linkedin,
    text: "linkedin.com/in/japheth-jerry-34a513274",
    href: "https://www.linkedin.com/in/japheth-jerry-34a513274/",
  },
];

const Index = () => {
  return (
    <main className="a4 px-5 py-8 relative text-[15px] font-inter bg-white print:shadow-none print:bg-white print:px-0 print:py-0">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 border-b border-gray-200 pb-5 mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight mb-1">
            {PROFILE.name}
          </h1>
          <div className="text-xl text-accentpurple font-semibold mb-1">{PROFILE.title}</div>
          <div className="text-gray-500 text-base">{PROFILE.location}</div>
        </div>
        <div className="flex flex-col gap-2 items-end">
          <div className="flex gap-3">
            <a href={PROFILE.portfolio} target="_blank" rel="noopener noreferrer" aria-label="Portfolio QR">
              <CVQRCode url={PROFILE.portfolio} alt="Portfolio QR code" />
            </a>
          </div>
          <div className="text-xs text-gray-400 hidden md:block mt-1">
            Scan for Portfolio
          </div>
        </div>
      </header>

      {/* Professional Summary */}
      <section>
        <p className="text-[15px] leading-snug text-gray-700 max-w-3xl mb-4 font-medium">
          {PROFILE.summary}
        </p>
      </section>

      {/* Tech Stack / Tools */}
      <SectionHeader>Key Tech Stack &amp; Tools</SectionHeader>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-2 gap-y-1 font-medium text-gray-700 mt-1 mb-6" aria-label="Key tech stack and tools">
        {[
          "HTML5 / CSS3 / SASS",
          "Tailwind CSS",
          "JavaScript (ES6+), TypeScript",
          "React.js / Next.js",
          "Astro",
          "React Native",
          "Node.js",
          "MongoDB, SQL",
          "Bootstrap / Reactstrap",
          "PHP / Laravel",
          "Java, C#, C++",
          "Git & Command Line",
          "VS Code",
          "Figma / Adobe CC",
          "Webflow / CorelDRAW",
        ].map((label) => (
          <li key={label} className="flex items-center gap-2 text-sm">{label}</li>
        ))}
      </ul>

      {/* Notable Projects */}
      <SectionHeader>Notable Projects</SectionHeader>
      <ul className="mb-6 space-y-2">
        {PROJECTS.map((p) => (
          <li key={p.name} className="print:text-xs">
            <div className="font-semibold">{p.name}</div>
            <div className="text-gray-600">{p.desc}</div>
          </li>
        ))}
      </ul>

      {/* Professional Experience */}
      <SectionHeader>Professional Experience</SectionHeader>
      <section className="mb-6 space-y-5">
        {EXPERIENCE.map((role) => (
          <div key={role.title + role.company} className="print:break-inside-avoid">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-semibold text-lg">{role.title}</span>
              <span className="text-accentpurple font-semibold">@ {role.company}</span>
              <span className="ml-2 text-gray-400 text-sm">{role.time}</span>
            </div>
            <ul className="list-disc list-inside ml-1 text-gray-700 mt-2 [&>li]:mb-1">
              {role.results.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Education & Certifications */}
      <SectionHeader>Education &amp; Certifications</SectionHeader>
      <section className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
        {EDUCATION.map((ed) => (
          <div key={ed.school + ed.year}>
            <div className="font-semibold">{ed.school}</div>
            <div className="text-gray-700">{ed.degree}</div>
            <div className="text-gray-400 text-xs">{ed.year}</div>
          </div>
        ))}
      </section>

      {/* Minimalist Footer */}
      <footer className="border-t border-gray-200 pt-4 mt-8 flex flex-col md:flex-row gap-2 items-start md:items-center justify-between text-xs text-gray-500">
        <div className="flex gap-4 flex-wrap">
          {FOOTER_LINKS.map(({ icon: Icon, text, href }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-accentpurple transition-colors">
              <Icon className="w-4 h-4" aria-hidden="true" />
              <span className="underline">{text}</span>
            </a>
          ))}
        </div>
        <div className="mt-2 md:mt-0">
          <span>© {new Date().getFullYear()} Japheth Oluwatimileyin Jerry · Resume</span>
        </div>
      </footer>
    </main>
  );
};

export default Index;

