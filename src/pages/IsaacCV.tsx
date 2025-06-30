import SectionHeader from "@/components/SectionHeader";
import TechGrid from "@/components/TechGrid";
import CVQRCode from "@/components/CVQRCode";
import { Mail, Linkedin, Globe, Phone, ExternalLink, Link as LinkIcon } from "lucide-react";

const PROFILE = {
  name: "Isaac Agabi",
  title: "Software Developer",
  location: "Mabushi, Abuja, Nigeria · Remote",
  email: "isaacwayneagabi@gmail.com",
  phone: "+234 9076599223",
  portfolio: "https://isaacwayneportfolio.netlify.app",
  summary: `Skilled software developer specializing in JavaScript, with expertise in web and mobile development, e-commerce solutions, and WordPress. Focused on building high-quality responsive applications using modern frameworks like React, React Native, and Node.js. Background in e-commerce and CMS platforms enables delivery of seamless, user-oriented experiences ensuring optimal performance and scalability across projects.`,
};

// Key Projects with focus on technical leadership and business impact
const KEY_PROJECTS = [
  {
    title: "E-commerce Platform Development",
    role: "Lead Frontend Developer",
    tech: "React, Node.js, Express, MongoDB, WordPress",
    outcome: "Architected and developed responsive e-commerce solutions; implemented modern UI/UX practices improving user engagement by 45%. Integrated payment gateways and optimized checkout processes reducing cart abandonment by 30%.",
    links: [
      {
        text: "View Project",
        url: "https://isaacwayneportfolio.netlify.app"
      }
    ]
  },
  {
    title: "Mobile Application Development",
    role: "Mobile Developer",
    tech: "React Native, Expo, Node.js, Express",
    outcome: "Developed cross-platform mobile applications with React Native and Expo; implemented efficient state management and API integration. Achieved 90% code reuse across platforms while maintaining native performance.",
    links: [
      {
        text: "View Project",
        url: "https://isaacwayneportfolio.netlify.app"
      }
    ]
  }
];

// Strategic tech stack organization for ATS optimization
const TECH_STACK = {
  "Core Development": [
    "JavaScript/TypeScript",
    "React/React Native",
    "Node.js/Express",
    "PHP/WordPress",
    "HTML5/CSS3",
    "Sass/SCSS"
  ],
  "Frontend & Mobile": [
    "React/Next.js",
    "React Native/Expo",
    "WordPress CMS",
    "Responsive Design",
    "UI/UX Implementation",
    "Mobile Testing"
  ],
  "Backend & CMS": [
    "Node.js/Express",
    "WordPress Development",
    "REST APIs",
    "MySQL/PostgreSQL",
    "E-commerce Solutions",
    "CMS Integration"
  ],
  "Tools & Platforms": [
    "Git/GitHub",
    "Chrome DevTools",
    "Mobile Testing",
    "SEO Optimization",
    "Web Analytics",
    "Figma/Adobe XD"
  ]
};

// Experience reordered by impact and recency
const EXPERIENCE = [
  {
    title: "Frontend/Mobile Application Developer",
    company: "SPICODEX",
    time: "October 2024 – April 2025",
    employment: "Full-Time",
    results: [
      "Maintained source code repositories by committing changes regularly according to best practices",
      "Resolved technical issues related to mobile application development and deployment processes",
      "Monitored application usage metrics and analytics to measure success rate of each release"
    ]
  },
  {
    title: "Web Developer",
    company: "Weblaunchguys",
    time: "January 2023 – August 2024",
    employment: "Full-Time",
    results: [
      "Managed website development, content, and SEO optimization for multiple client projects",
      "Developed web applications using HTML, CSS, JavaScript and jQuery; implemented responsive designs",
      "Collaborated with UX/UI designers to translate visual concepts into functional web applications",
      "Integrated third-party APIs and implemented front-end development best practices"
    ]
  },
  {
    title: "Web Developer / Mobile Developer",
    company: "LaunchFundr",
    time: "January 2023 – January 2024",
    employment: "Full-Time",
    results: [
      "Led website and mobile application development for crowdfunding platform",
      "Managed development team and implemented quality assurance processes",
      "Developed and maintained responsive web applications using modern frameworks"
    ]
  }
];

const EDUCATION = [
  {
    school: "Lincoln University College, Abuja",
    degree: "Bachelor of Science – Computer Science / Software Development",
    year: "2020 – 2024",
    focus: "Software Development & Web Technologies"
  }
];

const LANGUAGES = [
  {
    language: "English",
    level: "First Language"
  },
  {
    language: "Hausa",
    level: "Intermediate (B1)"
  }
];

const REFERENCES = [
  {
    name: "Charity Magani",
    role: "CEO, Weblaunchguys",
    contact: "+234 9168844592"
  },
  {
    name: "Chukwumaife Okoye",
    role: "CFO, LaunchFundr",
    contact: "+234 8122251171"
  }
];

const FOOTER_LINKS = [
  {
    icon: Mail,
    text: "isaacwayneagabi@gmail.com",
    href: "mailto:isaacwayneagabi@gmail.com"
  },
  {
    icon: Phone,
    text: "+234 9076599223",
    href: "tel:+2349076599223"
  },
  {
    icon: Globe,
    text: "isaacwayneportfolio.netlify.app",
    href: "https://isaacwayneportfolio.netlify.app"
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

const IsaacCV = () => {
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
              <a href={`tel:${PROFILE.phone}`} className="hover:text-accentpurple inline-flex items-center gap-0.5 underline decoration-1 underline-offset-2">
                <Phone className="w-3 h-3" aria-hidden="true" />
                <LinkIcon className="w-2.5 h-2.5 text-gray-400" aria-hidden="true" />
                {PROFILE.phone}
              </a>
              <span className="text-gray-400">•</span>
              <a href={PROFILE.portfolio} target="_blank" rel="noopener noreferrer" className="hover:text-accentpurple inline-flex items-center gap-0.5 underline decoration-1 underline-offset-2">
                <Globe className="w-3 h-3" aria-hidden="true" />
                <LinkIcon className="w-2.5 h-2.5 text-gray-400" aria-hidden="true" />
                Portfolio
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
            <img
              src="/iframe.svg"
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

        {/* Education & Languages - Enhanced impact */}
        <section
          aria-label="Education & Languages"
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
              <SectionHeader>Languages</SectionHeader>
              {LANGUAGES.map((lang) => (
                <article key={lang.language}>
                  <h3 className="font-semibold text-[9pt]">{lang.language}</h3>
                  <div className="text-gray-600 text-[8pt]">{lang.level}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* References - Minimal with contact info */}
        <section
          aria-label="Professional References"
          role="region"
          className="mb-1"
        >
          <SectionHeader>Professional References</SectionHeader>
          <div className="grid grid-cols-2 gap-x-3">
            {REFERENCES.map((ref) => (
              <article key={ref.name}>
                <h3 className="font-semibold text-[9pt]">{ref.name}</h3>
                <div className="text-gray-700 text-[8pt]">{ref.role}</div>
                <div className="text-gray-600 text-[8pt]">{ref.contact}</div>
              </article>
            ))}
          </div>
        </section>

        {/* Footer - Minimal with contact info */}
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
          </nav>
        </footer>
      </main>
    </>
  );
};

export default IsaacCV; 