import SectionHeader from "@/components/SectionHeader";
import { Mail, Linkedin, Globe, ExternalLink, Link as LinkIcon } from "lucide-react";

const PROFILE = {
  name: "Japheth Oluwatimileyin Jerry",
  title: "Frontend Engineer | React & React Native",
  location: "Federal Capital Territory, Nigeria · Remote",
  email: "princejaphethjj@gmail.com",
  portfolio: "https://yafetport.netlify.app",
  linkedin: "https://www.linkedin.com/in/japheth-jerry-34a513274/",
  instagram: "https://www.instagram.com/_prince_yafet_/",
  summary: `Frontend engineer building responsive web applications and cross-platform mobile interfaces with React, Next.js, React Native, and TypeScript. Combines UI/UX design experience with API integration, reusable components, and state management. Selected work spans analytics dashboards, developer tooling, and polished client websites.`,
};

// Key Projects with focus on technical leadership and business impact
const KEY_PROJECTS = [
  {
    "title": "PicaTip — a Popkup product",
    "role": "Frontend Development",
    "tech": "Next.js, React, TypeScript, Redux Toolkit, Tailwind CSS, Framer Motion",
    "outcome": "Built responsive analytics dashboards, prediction workflows, and live-match interfaces. Implemented typed Redux state management, authentication and subscription screens, and reusable UI components.",
    "links": [
      {
        "text": "Live site",
        "url": "https://picatip.com"
      }
    ]
  },
  {
    "title": "Periderm CLI & Dashboard",
    "role": "Full-Stack Development",
    "tech": "React, TypeScript, Vite, TanStack Router, Node.js, Supabase",
    "outcome": "Built a pre-launch scanning tool and companion web dashboard for reviewing scan histories and application issues. Connected developer tooling to a React interface for tracking project health and actionable findings.",
    "links": [
      {
        "text": "Live site",
        "url": "https://periderm-cli.vercel.app/"
      }
    ]
  }
];

// Strategic tech stack organization for ATS optimization
const TECH_STACK = {
  "Frontend": ["React", "Next.js", "TypeScript / JavaScript", "HTML5 / CSS3", "Tailwind CSS", "Responsive UI"],
  "State & Integration": ["Redux Toolkit", "REST APIs", "WebSockets", "TanStack Router"],
  "Mobile & Design": ["React Native", "Figma", "UI/UX Design", "Reusable Components"],
  "Backend & Delivery": ["Node.js", "PHP / Laravel", "MongoDB / MySQL", "Supabase", "Git / GitHub", "CI/CD", "Code Review"]
};

// Experience reordered by impact and recency
const EXPERIENCE = [
  {
    "title": "Lead Frontend Developer",
    "company": "Popkup",
    "time": "2025 – 2026",
    "employment": "Contract",
    "results": [
      "Led frontend development for Popkup’s commerce platform and PicaTip, a Popkup product, using Next.js and TypeScript.",
      "Built storefront, checkout, and admin interfaces; integrated payment and shipping APIs for the commerce platform."
    ]
  },
  {
    "title": "Frontend Developer",
    "company": "Witty",
    "time": "Jul – Oct 2026",
    "employment": "Contract",
    "results": [
      "Built Witty’s public-facing platform for its trade and cross-border payments business.",
      "Contributed frontend updates to existing trade and partner platforms at trade.wittytech.io and partners.wittytech.io."
    ]
  },
  {
    "title": "Web Developer & UI/UX Designer",
    "company": "Web Launch Guys",
    "time": "2020 – Present",
    "employment": "Part-Time",
    "results": [
      "Developed responsive React and Next.js websites, translating UI/UX designs and prototypes into reusable interface components.",
      "Integrated REST and GraphQL services and worked on website performance, SEO, and cross-device layouts."
    ]
  },
  {
    "title": "Full-Stack Engineer",
    "company": "Aquila Cyber",
    "time": "2024 – Present",
    "employment": "Part-Time",
    "results": [
      "Built React interfaces and REST APIs using Node.js and PHP, working with MongoDB and MySQL data layers.",
      "Contributed to application security and CI/CD workflows across full-stack projects."
    ]
  }
];

const EDUCATION = [
  {
    school: "Lincoln University College",
    degree: "BSc in Cybersecurity and Networking",
    year: "2025 – Present",
    focus: "Currently studying"
  },
  {
    school: "Lincoln University College, Nigeria",
    degree: "Diploma in Computer Software Engineering",
    year: "2022 – 2025",
    focus: "Software Architecture & Cloud Computing"
  }
];

const CERTIFICATIONS = [
  {
    cert: "Professional Scrum Master I (PSM I)",
    year: "2023",
    status: "Completed"
  },
  {
    cert: "Print Xpert – Professional Graphic Designer",
    year: "2021",
    status: "Completed"
  }
];

const FOOTER_LINKS = [
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
  {
    icon: Globe,
    text: "Portfolio",
    href: "https://yafetport.netlify.app"
  },
  {
    icon: Globe,
    text: "GitHub",
    href: "https://github.com/Prince-Japheth"
  }
];

// Optimize print styles for exact A4 fit
const PRINT_STYLES = `
  .a4 .text-accentpurple { color: #6d28d9; }
  @page {
    size: A4;
    margin: 0;
  }
  @media print {
    body {
      margin: 0;
      padding: 0;
      font-size: 10pt;
      line-height: 1.3;
    }
    .a4 {
      margin: 0;
      padding: 12mm 15mm;
      box-shadow: none;
      background: white;
      width: 210mm;
      height: 297mm;
      overflow: hidden;
    }
    .a4 * {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
  }
`;

const Index = () => {
  return (
    <>
      <style>{PRINT_STYLES}</style>
      <main
        className="
          a4 mx-auto w-[210mm] h-[297mm]
          px-[12mm] py-[10mm]
          text-[10pt] leading-[1.25]
          font-inter bg-white
          print:shadow-none print:bg-white
          print:mx-0 print:my-0 print:p-0
          print:w-[210mm] print:h-[297mm]
          relative
        "
        role="document"
        style={{
          width: '210mm',
          height: '297mm',
          fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        }}
      >
        {/* Header - Ultra compact with strategic emphasis */}
        <header
          className="
            flex flex-row items-center justify-between
            gap-1 border-b border-gray-200
            pb-1 mb-1.5
          "
          role="banner"
        >
          <div>
            <h1 className="text-xl font-bold text-gray-800 tracking-tight">
              {PROFILE.name}
            </h1>
            <div className="flex items-center gap-2">
              <div className="text-base text-accentpurple font-semibold">
                {PROFILE.title}
              </div>
              <span className="text-gray-400">•</span>
              <span className="text-[9pt] text-gray-600">{PROFILE.location}</span>
            </div>
            <div className="flex flex-wrap gap-1.5 text-[9pt] text-gray-600 mt-0.5">
              <a href={`mailto:${PROFILE.email}`} className="hover:text-accentpurple inline-flex items-center gap-0.5 underline decoration-1 underline-offset-2">
                <Mail className="w-3 h-3" aria-hidden="true" />
                <LinkIcon className="w-2.5 h-2.5 text-gray-400" aria-hidden="true" />
                {PROFILE.email}
              </a>
              <span className="text-gray-400">•</span>
              <a href={PROFILE.portfolio} target="_blank" rel="noopener noreferrer" className="hover:text-accentpurple inline-flex items-center gap-0.5 underline decoration-1 underline-offset-2">
                <Globe className="w-3 h-3" aria-hidden="true" />
                <LinkIcon className="w-2.5 h-2.5 text-gray-400" aria-hidden="true" />
                Portfolio
              </a>
              <span className="text-gray-400">•</span>
              <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accentpurple inline-flex items-center gap-0.5 underline decoration-1 underline-offset-2">
                <Linkedin className="w-3 h-3" aria-hidden="true" />
                <LinkIcon className="w-2.5 h-2.5 text-gray-400" aria-hidden="true" />
                LinkedIn
              </a>
            </div>
          </div>
          <a
            href={PROFILE.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-16 h-16 group"
            aria-label="Portfolio QR Code"
          >
            <img src="/portfolio-qr.svg" alt="Scan to open my portfolio" className="w-14 h-14" />
            <ExternalLink className="absolute -bottom-1 -right-1 w-3 h-3 text-accentpurple opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
          </a>
        </header>

        {/* Summary - Ultra concise */}
        <section
          aria-label="Professional Summary"
          role="region"
          className="mb-1.5"
        >
          <p className="text-[10pt] leading-snug text-gray-700">
            {PROFILE.summary}
          </p>
        </section>

        {/* Experience - Prioritized position */}
        <section
          aria-label="Professional Experience"
          role="region"
          className="mb-1.5"
        >
          <SectionHeader>Professional Experience</SectionHeader>
          <div className="space-y-1">
            {EXPERIENCE.map((role, idx) => (
              <article
                key={role.title + role.company + idx}
                className="print:break-inside-avoid"
              >
                <div className="flex flex-wrap items-center gap-1">
                  <h3 className="font-semibold text-[10pt]">{role.title}</h3>
                  {role.company && (
                    <span className="text-accentpurple font-semibold text-[9pt]">@ {role.company}</span>
                  )}
                  <time className="ml-1 text-gray-400 text-[8pt]">{role.time}</time>
                  {role.employment && (
                    <span className="ml-1 text-[8pt] text-gray-400 font-normal uppercase">
                      {role.employment}
                    </span>
                  )}
                </div>
                <ul
                  className="
                    list-disc list-inside ml-1 
                    text-gray-700 text-[9pt] mt-0.5
                    [&>li]:mb-0.25
                  "
                  role="list"
                >
                  {role.results.map((r, i) => (
                    <li key={i} role="listitem">{r}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Tech Stack - Reorganized for better impact */}
        <section
          aria-label="Technical Skills"
          role="region"
          className="mb-1.5"
        >
          <SectionHeader>Technical Skills</SectionHeader>
          <div className="grid grid-cols-4 gap-x-3 gap-y-0.5">
            {Object.entries(TECH_STACK).map(([category, skills]) => (
              <div key={category}>
                <h3 className="font-semibold text-gray-800 text-[9pt] mb-0.25">{category}</h3>
                <ul
                  className="text-[8pt] text-gray-700"
                  role="list"
                >
                  {skills.map((skill) => (
                    <li key={skill} role="listitem">{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Key Projects - Moved after skills for proof of capabilities */}
        <section
          aria-label="Key Projects"
          role="region"
          className="mb-1.5"
        >
          <SectionHeader>Key Projects</SectionHeader>
          <div className="space-y-1">
            {KEY_PROJECTS.map((project, idx) => (
              <article
                key={idx}
                className="print:break-inside-avoid"
              >
                <div className="flex flex-wrap items-center gap-1">
                  <h3 className="font-semibold text-[10pt]">
                    {project.title}
                  </h3>
                  <span className="text-accentpurple font-medium text-[9pt]">— {project.role}</span>
                  {project.links && (
                    <div className="flex gap-1 items-center">
                      {project.links.map((link, linkIdx) => (
                        <a
                          key={linkIdx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-accentpurple inline-flex items-center gap-0.5 underline decoration-1 underline-offset-2 text-[8pt] text-gray-600 group"
                        >
                          {link.text}
                          <LinkIcon className="w-2.5 h-2.5 text-gray-400" aria-hidden="true" />
                          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
                <div className="text-gray-600 text-[8pt] mt-0.25"><strong>Tech:</strong> {project.tech}</div>
                <div className="text-gray-700 text-[9pt] mt-0.25">{project.outcome}</div>
              </article>
            ))}
          </div>
        </section>

        {/* Education & Certifications - Enhanced impact */}
        <section
          aria-label="Education & Certifications"
          role="region"
          className="mb-1"
        >
          <div className="grid grid-cols-2 gap-x-3">
            <div>
              <SectionHeader>Education</SectionHeader>
              {EDUCATION.map((ed) => (
                <article key={ed.school + ed.year}>
                  <h3 className="font-semibold text-[9pt]">{ed.school}</h3>
                  <div className="text-gray-700 text-[8pt]">{ed.degree}</div>
                  <div className="text-gray-600 text-[8pt] italic">{ed.focus}</div>
                  <time className="text-gray-400 text-[8pt]">{ed.year}</time>
                </article>
              ))}
            </div>
            <div>
              <SectionHeader>Certifications</SectionHeader>
              {CERTIFICATIONS.map((c) => (
                <article key={c.cert + c.year}>
                  <h3 className="font-semibold text-[9pt]">{c.cert}</h3>
                  <div className="flex items-center gap-1">
                    <time className="text-gray-400 text-[8pt]">{c.year}</time>
                    {c.status && (
                      <span className="text-[7pt] px-1 py-0.25 bg-gray-100 text-gray-600 rounded">
                        {c.status}
                      </span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Footer - Minimal with references note */}
        <footer
          className="
            border-t border-gray-200 
            pt-1 mt-1
            text-[8pt]
          "
          role="contentinfo"
        >
          <nav
            className="flex flex-col items-center gap-1"
            aria-label="Contact Information"
          >
            <div className="flex gap-3 justify-center">
              {FOOTER_LINKS.map(({ icon: Icon, text, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center gap-1 
                    hover:text-accentpurple transition-colors
                    underline decoration-1 underline-offset-2
                  "
                >
                  <Icon className="w-3 h-3" aria-hidden="true" />
                  <LinkIcon className="w-2.5 h-2.5 text-gray-400" aria-hidden="true" />
                  <span>{text}</span>
                </a>
              ))}
            </div>
            <div className="text-gray-500 italic">
              Professional references available upon request
            </div>
          </nav>
        </footer>
      </main>
    </>
  );
};

export default Index;
