
import SectionHeader from "@/components/SectionHeader";
import TechGrid from "@/components/TechGrid";
import CVQRCode from "@/components/CVQRCode";
import { Mail, Linkedin, Globe } from "lucide-react";

const PROFILE = {
  name: "Alex Johnson",
  title: "Full-Stack Engineer",
  location: "San Francisco, CA · Remote",
  email: "alex.johnson@email.com",
  linkedin: "https://linkedin.com/in/alexjohnson",
  portfolio: "https://alexjohnson.dev",
  summary: `Results-driven Full-Stack Engineer with 6+ years' experience building scalable web and mobile apps. Specializes in React Native, JavaScript/TypeScript, Node.js, and Firebase. Combines deep technical know-how with design thinking for seamless, user-centric solutions.`,
};

const PROJECTS = [
  {
    name: "QuickTrack (React Native, Node.js, Firebase)",
    desc: "Shipped mobile logistics platform—reduced delivery times 18%. Real-time sync, push notifications, admin analytics dashboard.",
  },
  {
    name: "FitBuddy (React Native, Firebase, Figma)",
    desc: "Designed and built a social fitness app featured on Product Hunt. Drove 20K+ downloads with intuitive UI and viral sharing features.",
  },
  {
    name: "TradeDesk Web (React, Node.js, Redux)",
    desc: "Architected trading operations dashboard for fintech startup. Cut manual interventions by 35% and improved system observability.",
  },
];

const EXPERIENCE = [
  {
    title: "Senior Full-Stack Engineer",
    company: "Loop Apps",
    time: "2022 – Present",
    results: [
      "Led team of 5 to deliver React Native mobile suite, maintaining 99.99% uptime. Oversaw CI/CD with Firebase and GitHub Actions.",
      "Improved app store ratings by 0.7 (avg. 4.6), redesigning onboarding UI with Figma and user-testing.",
      "Refactored Node.js APIs; lowered response times by 43% using async workflows and database optimization.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "Vivid Labs",
    time: "2019 – 2022",
    results: [
      "Developed cross-platform (web/mobile) apps with React, React Native, Firebase auth, and Stripe payments.",
      "Automated deployment/release cycles—rolling out updates 2x faster.",
      "Collaborated with designers and PMs to launch 4+ successful B2B SaaS products.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Brightspace",
    time: "2018 – 2019",
    results: [
      "Engineered admin portal using Node.js and Material UI; improved platform accessibility and speed.",
      "Reduced bug backlog by 60% with test-driven refactoring.",
    ],
  },
];

const EDUCATION = [
  {
    school: "University of California, Berkeley",
    degree: "B.S. Computer Science",
    year: "2018",
  },
  {
    school: "Google",
    degree: "Associate Android Developer Certification",
    year: "2021",
  },
];

const FOOTER_LINKS = [
  {
    icon: Mail,
    text: "alex.johnson@email.com",
    href: "mailto:alex.johnson@email.com",
  },
  {
    icon: Linkedin,
    text: "linkedin.com/in/alexjohnson",
    href: "https://linkedin.com/in/alexjohnson",
  },
  {
    icon: Globe,
    text: "alexjohnson.dev",
    href: "https://alexjohnson.dev",
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
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <CVQRCode url={PROFILE.linkedin} />
            </a>
          </div>
          <div className="text-xs text-gray-400 hidden md:block mt-1">
            Scan for LinkedIn
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
      <SectionHeader>Tech Stack &amp; Tools</SectionHeader>
      <TechGrid />

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
          <span>© {new Date().getFullYear()} Alex Johnson · Resume</span>
        </div>
      </footer>
    </main>
  );
};

export default Index;
