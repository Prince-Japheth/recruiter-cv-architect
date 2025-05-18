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
  summary: `Full-Stack Engineer, UI/UX & Graphic Designer with 3+ years' experience delivering impactful, user-first digital products across web and mobile. Highly skilled in React, React Native, Node.js, TypeScript, Firebase, and Figma. Adept at designing interfaces, building APIs, and leading end-to-end application development for startups and innovative teams.`,
};

// Hand-picked, cleaned up technologies (best mix for your role)
const TECH_STACK = [
  "HTML5 / CSS3 / SASS",
  "Tailwind CSS",
  "JavaScript (ES6+), TypeScript",
  "React.js / Next.js / Astro",
  "Node.js / Express.js",
  "React Native",
  "MongoDB, MySQL, SQL",
  "Bootstrap / Reactstrap",
  "Redux / Zustand",
  "PHP / Laravel",
  "Figma / Adobe CC",
  "Webflow / CorelDRAW",
  "VS Code / Command Line / Git",
];

// Experiences: Professional format, quantifiable impacts, ATS-friendly
const EXPERIENCE = [
  {
    title: "Full-Stack Engineer (Part-Time)",
    company: "Aquila Cyber",
    time: "2024 – Present",
    employment: "Part-Time",
    results: [
      "Developed scalable full-stack apps (MERN/XAMP); built and secured APIs with Node.js, Express, and PHP.",
      "Delivered responsive React.js interfaces; managed MongoDB & MySQL databases.",
      "Implemented CI/CD pipelines and security standards across projects."
    ]
  },
  {
    title: "Software Engineer",
    company: "Spicodex",
    time: "2024 – Present",
    employment: "Full-Time",
    results: [
      "Built cross-platform mobile apps with React Native and TypeScript.",
      "Created web dashboards and integrated third-party APIs/services.",
      "Led testing adoption and reviewed code to boost team reliability."
    ]
  },
  {
    title: "Web Developer, UI/UX & Graphic Designer",
    company: "Web Launch Guys",
    time: "2020 – Present",
    employment: "Part-Time",
    results: [
      "Shipped responsive web apps using React.js, Next.js, and Astro.",
      "Designed UI/UX, brand identities, and marketing assets for diverse clients.",
      "Optimized websites for SEO, performance, and accessibility.",
    ]
  },
  {
    title: "UI/UX & Web Developer",
    company: "Safekan",
    time: "2022 – 2024",
    employment: "Part-Time",
    results: [
      "Built pixel-perfect websites using HTML, CSS, Bootstrap, JavaScript.",
      "Produced user research, wireframes, and interactive Figma prototypes.",
      "Established brand guidelines and ran usability tests.",
    ]
  },
  {
    title: "Freelance & Remote Teams",
    company: "",
    time: "2021 – Present",
    employment: "Project-Based",
    results: [
      "Delivered SaaS platforms and mobile apps for industries (logistics, fitness, e-commerce).",
      "Mentored junior devs and collaborated on Git-driven projects.",
      "Partnered with startups to deliver MVPs from spec to launch.",
    ]
  },
];

const EDUCATION = [
  {
    school: "Lincoln University College, Malaysia",
    degree: "B.Sc. Computer Science (Hons) Networking & Cyber Security",
    year: "2025 – 2027 (Expected)"
  },
  {
    school: "Lincoln University College, Nigeria",
    degree: "Diploma, Computer Software Engineering",
    year: "2023 – Present"
  },
];

const CERTIFICATIONS = [
  {
    cert: "Print Xpert – Professional Graphic Designer",
    year: "March 2021",
  }
];

// Swapping order of portfolio/LinkedIn per your ATS & hiring logic.
// Instagram is present, LinkedIn still visible.
const FOOTER_LINKS = [
  {
    icon: Globe,
    text: "yafetport.netlify.app",
    href: "https://yafetport.netlify.app"
  },
  {
    icon: Instagram,
    text: "_prince_yafet_",
    href: "https://www.instagram.com/_prince_yafet_/"
  },
  {
    icon: Mail,
    text: "princejaphethjj@gmail.com",
    href: "mailto:princejaphethjj@gmail.com"
  },
  {
    icon: Linkedin,
    text: "linkedin.com/in/japheth-jerry-34a513274",
    href: "https://www.linkedin.com/in/japheth-jerry-34a513274/"
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
        {TECH_STACK.map((label) => (
          <li key={label} className="flex items-center gap-2 text-sm">{label}</li>
        ))}
      </ul>

      {/* Professional Experience */}
      <SectionHeader>Professional Experience</SectionHeader>
      <section className="mb-6 space-y-5">
        {EXPERIENCE.map((role, idx) => (
          <div key={role.title + role.company + idx} className="print:break-inside-avoid">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-semibold text-lg">{role.title}</span>
              {role.company && (
                <span className="text-accentpurple font-semibold">@ {role.company}</span>
              )}
              <span className="ml-2 text-gray-400 text-sm">{role.time}</span>
              {role.employment ? (
                <span className="ml-2 text-xs text-gray-400 font-normal uppercase">{role.employment}</span>
              ) : null}
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
      <SectionHeader>Education</SectionHeader>
      <section className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
        {EDUCATION.map((ed) => (
          <div key={ed.school + ed.year}>
            <div className="font-semibold">{ed.school}</div>
            <div className="text-gray-700">{ed.degree}</div>
            <div className="text-gray-400 text-xs">{ed.year}</div>
          </div>
        ))}
      </section>

      <SectionHeader>Certifications</SectionHeader>
      <section className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
        {CERTIFICATIONS.map((c) => (
          <div key={c.cert + c.year}>
            <div className="font-semibold">{c.cert}</div>
            <div className="text-gray-400 text-xs">{c.year}</div>
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
