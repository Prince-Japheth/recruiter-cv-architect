import SectionHeader from "@/components/SectionHeader";
import TechGrid from "@/components/TechGrid";
import CVQRCode from "@/components/CVQRCode";
import { Mail, Linkedin, Globe, Instagram, ExternalLink, Link as LinkIcon } from "lucide-react";

const PROFILE = {
  name: "Japheth Oluwatimileyin Jerry",
  title: "Senior Software Engineer",
  location: "Federal Capital Territory, Nigeria · Remote",
  email: "princejaphethjj@gmail.com",
  portfolio: "https://yafetport.netlify.app",
  instagram: "https://www.instagram.com/_prince_yafet_/",
  summary: `Senior Software Engineer with 3+ years architecting enterprise applications in JavaScript/TypeScript and PHP (Laravel) ecosystems. Led development of applications serving 10,000+ users, achieving 98% code coverage and 95+ Lighthouse scores while reducing system latency by 40%. Established CI/CD pipelines and comprehensive testing strategies across 15+ production deployments, combining scalable architecture with user-centered design.`,
};

// Key Projects with focus on technical leadership and business impact
const KEY_PROJECTS = [
  {
    title: "Bondyt Merchant & User Apps",
    role: "Lead Mobile Developer (Merchant App)",
    tech: "React Native, JavaScript, TypeScript, Axios, Redux, Zustand, Expo",
    outcome: "Architected and delivered merchant app in JavaScript and contributed to main app in TypeScript; Reduced user wait time by 60% through optimized state management with Redux/Zustand and efficient API calls with Axios",
    links: [
      {
        text: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.bondyt.merchant"
      },
      {
        text: "App Store",
        url: "https://apps.apple.com/ng/app/bondyt-merchant-list-earn/id6741894381"
      }
    ]
  },
  {
    title: "LCDP School Management System",
    role: "Lead Full-Stack Developer",
    tech: "PHP, MySQL, CSS, Bootstrap, SASS",
    outcome: "Designed and implemented scalable school management system serving 5,000+ users; reduced server load by 70% through query optimization, automated grading system cutting admin workload by 85%",
    links: [
      {
        text: "View Project",
        url: "https://gudu.lcpd.net/"
      }
    ]
  }
];

// Strategic tech stack organization for ATS optimization
const TECH_STACK = {
  "Languages & Core": [
    "JavaScript/TypeScript",
    "PHP/Laravel",
    "HTML5/CSS3/SASS",
    "SQL/MySQL/PostgreSQL"
  ],
  "Frontend & Mobile": [
    "React/Next.js",
    "React Native",
    "Redux/Zustand",
    "Tailwind/Bootstrap"
  ],
  "Backend & DevOps": [
    "Node.js/Express",
    "REST/GraphQL APIs",
    "AWS/Cloud Services",
    "Docker/CI/CD"
  ],
  "Design & Tools": [
    "UI/UX Design",
    "Figma/Adobe CC",
    "Git/GitHub",
    "Jest/Cypress"
  ]
};

// Experience reordered by impact and recency
const EXPERIENCE = [
  {
    title: "Web Developer & UI/UX Designer",
    company: "Web Launch Guys",
    time: "2020 – Present",
    employment: "Part-Time",
    results: [
      "Led development of 15+ enterprise web applications achieving 90+ Lighthouse scores; implemented performance optimizations improving conversion rates by 40%",
      "Architected comprehensive design systems for 20+ clients; established component libraries reducing development time by 30%",
      "Implemented WCAG 2.1 AA compliance across all projects; optimized SEO and performance improving organic traffic by 150%"
    ]
  },
  {
    title: "Frontend Engineer",
    company: "Spicodex",
    time: "2024 – Present",
    employment: "Full-Time",
    results: [
      "Led React Native mobile app development with comprehensive testing strategy; implemented automated testing reducing production bugs by 75%",
      "Implemented robust state management and caching strategies; reduced user wait time by 60% while maintaining 98% code coverage"
    ]
  },
  {
    title: "Full-Stack Engineer",
    company: "Aquila Cyber",
    time: "2024 – Present",
    employment: "Part-Time",
    results: [
      "Architected enterprise applications using MERN/XAMP stacks; implemented microservices architecture and CI/CD pipelines reducing deployment time by 85%",
      "Engineered high-performance interfaces achieving 95+ Lighthouse scores; optimized database architecture reducing load times by 60%",
      "Led implementation of SOC 2 compliance requirements; established security best practices and automated testing across development lifecycle"
    ]
  }
];

const EDUCATION = [
  {
    school: "Lincoln University College, Nigeria",
    degree: "Diploma in Computer Software Engineering",
    year: "2022 – Present"
  },
  // {
  //   school: "Lincoln University, Malaysia",
  //   degree: "B.Sc. Computer Science (Hons) Networking & Cyber Security",
  //   year: "2025 – 2027 (Expected)"
  // }
];

const CERTIFICATIONS = [
  {
    cert: "Print Xpert – Professional Graphic Designer",
    year: "2021"
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
    text: "yafetport.netlify.app",
    href: "https://yafetport.netlify.app"
  },
  {
    icon: Instagram,
    text: "_prince_yafet_",
    href: "https://www.instagram.com/_prince_yafet_/"
  }
];

// Optimize print styles for exact A4 fit
const PRINT_STYLES = `
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
          px-[15mm] py-[12mm]
          text-[10pt] leading-[1.3]
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
        {/* Header - Ultra compact */}
        <header 
          className="
            flex flex-row items-center justify-between
            gap-1 border-b border-gray-200
            pb-1.5 mb-2
          "
          role="banner"
        >
          <div>
            <h1 className="text-xl font-bold text-gray-800 tracking-tight">
              {PROFILE.name}
            </h1>
            <div className="text-base text-accentpurple font-semibold">
              {PROFILE.title}
            </div>
            <div className="flex flex-wrap gap-1 text-[9pt] text-gray-600 mt-0.5">
              <span>{PROFILE.location}</span>
              <span>•</span>
              <a href={`mailto:${PROFILE.email}`} className="hover:text-accentpurple inline-flex items-center gap-0.5 underline decoration-1 underline-offset-2">
                <Mail className="w-3 h-3" aria-hidden="true" />
                <LinkIcon className="w-2.5 h-2.5 text-gray-400" aria-hidden="true" />
                {PROFILE.email}
              </a>
              <span>•</span>
              <a href={PROFILE.portfolio} target="_blank" rel="noopener noreferrer" className="hover:text-accentpurple inline-flex items-center gap-0.5 underline decoration-1 underline-offset-2">
                <Globe className="w-3 h-3" aria-hidden="true" />
                <LinkIcon className="w-2.5 h-2.5 text-gray-400" aria-hidden="true" />
                Portfolio
              </a>
              <span>•</span>
              <a href={PROFILE.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-accentpurple inline-flex items-center gap-0.5 underline decoration-1 underline-offset-2">
                <Instagram className="w-3 h-3" aria-hidden="true" />
                <LinkIcon className="w-2.5 h-2.5 text-gray-400" aria-hidden="true" />
                Instagram
              </a>
            </div>
          </div>
          <a 
            href={PROFILE.portfolio} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="relative w-16 h-16 group"
            aria-label="Portfolio Website"
          >
            <img
              src="/frame.svg"
              alt=""
              className="absolute inset-0 w-full h-full group-hover:opacity-80 transition-opacity"
              aria-hidden="true"
            />
            <CVQRCode url={PROFILE.portfolio} />
            <ExternalLink className="absolute -bottom-1 -right-1 w-3 h-3 text-accentpurple opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
          </a>
        </header>

        {/* Summary - Ultra concise */}
        <section 
          aria-label="Professional Summary" 
          role="region"
          className="mb-2"
        >
          <p className="text-[10pt] leading-snug text-gray-700">
            {PROFILE.summary}
          </p>
        </section>

        {/* Experience - Prioritized position */}
        <section 
          aria-label="Professional Experience" 
          role="region"
          className="mb-2"
        >
          <SectionHeader>Professional Experience</SectionHeader>
          <div className="space-y-1.5">
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
                    [&>li]:mb-0.5
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

        {/* Key Projects - Condensed */}
        <section 
          aria-label="Key Projects" 
          role="region"
          className="mb-2"
        >
          <SectionHeader>Key Projects</SectionHeader>
          <div className="space-y-1.5">
            {KEY_PROJECTS.map((project, idx) => (
              <article 
                key={idx} 
                className="print:break-inside-avoid"
              >
                <div className="flex flex-wrap items-center gap-2">
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
                <div className="text-gray-600 text-[8pt] mt-0.5"><strong>Tech:</strong> {project.tech}</div>
                <div className="text-gray-700 text-[9pt] mt-0.5">{project.outcome}</div>
              </article>
            ))}
          </div>
        </section>

        {/* Tech Stack - Compact grid */}
        <section 
          aria-label="Technical Skills" 
          role="region"
          className="mb-2"
        >
          <SectionHeader>Technical Skills</SectionHeader>
          <div className="grid grid-cols-4 gap-x-4 gap-y-0.5">
            {Object.entries(TECH_STACK).map(([category, skills]) => (
              <div key={category}>
                <h3 className="font-semibold text-gray-800 text-[9pt] mb-0.5">{category}</h3>
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

        {/* Education & Certifications - Ultra compact */}
        <section 
          aria-label="Education & Certifications" 
          role="region"
          className="mb-1.5"
        >
          <div className="grid grid-cols-2 gap-x-4">
            <div>
              <SectionHeader>Education</SectionHeader>
              {EDUCATION.map((ed) => (
                <article key={ed.school + ed.year}>
                  <h3 className="font-semibold text-[9pt]">{ed.school}</h3>
                  <div className="text-gray-700 text-[8pt]">{ed.degree}</div>
                  <time className="text-gray-400 text-[8pt]">{ed.year}</time>
                </article>
              ))}
            </div>
            <div>
              <SectionHeader>Certifications</SectionHeader>
              {CERTIFICATIONS.map((c) => (
                <article key={c.cert + c.year}>
                  <h3 className="font-semibold text-[9pt]">{c.cert}</h3>
                  <time className="text-gray-400 text-[8pt]">{c.year}</time>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Footer - Minimal with references note */}
        <footer 
          className="
            border-t border-gray-200 
            pt-1.5 mt-1.5
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
