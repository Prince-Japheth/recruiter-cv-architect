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
  linkedin: "https://www.linkedin.com/in/japheth-jerry-34a513274/",
  instagram: "https://www.instagram.com/_prince_yafet_/",
  summary: `Senior Software Engineer with 3+ years architecting enterprise applications in JavaScript/TypeScript and PHP (Laravel) ecosystems. Led development of applications serving 10,000+ users, achieving 98% code coverage and 95+ Lighthouse scores while reducing system latency by 40%, and established CI/CD pipelines with comprehensive testing across 15+ production deployments.`,
};

// Key Projects with focus on technical leadership and business impact
const KEY_PROJECTS = [
  {
    title: "Bondyt Merchant & User Apps",
    role: "Lead Mobile Developer (Merchant App)",
    tech: "React Native, TypeScript, Redux/Zustand, Axios, Jest",
    outcome: "Architected merchant app with TypeScript and Redux; implemented efficient state management reducing user wait time by 60%. Optimized API integration and caching strategies improving app performance by 40%.",
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
    tech: "PHP/Laravel, MySQL, Redis, Bootstrap, SASS, Jest",
    outcome: "Architected scalable school management system serving 5,000+ users; implemented Redis caching and query optimization reducing server load by 70%. Developed automated grading system with comprehensive testing, cutting admin workload by 85% while maintaining 98% code coverage.",
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
  "Languages & Frameworks": [
    "TypeScript/JavaScript",
    "React/Next.js",
    "React Native",
    "PHP/Laravel",
    "Node.js/Express"
  ],
  "State & Data": [
    "Redux/Zustand",
    "REST/GraphQL",
    "MySQL/PostgreSQL",
    "MongoDB",
    "Redis"
  ],
  "DevOps & Testing": [
    "AWS/Cloud Services",
    "Docker/Kubernetes",
    "CI/CD Pipelines",
    "Jest/Cypress",
    "Git/GitHub"
  ],
  "Architecture & Tools": [
    "Microservices",
    "System Design",
    "UI/UX Design",
    "Figma/Adobe CC",
    "Agile/Scrum"
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
      "Led full-stack development of 15+ enterprise applications using React/Next.js and Laravel; implemented performance optimizations reducing load times by 40% and improving Lighthouse scores to 90+",
      "Architected scalable component libraries and design systems; reduced development time by 30% while maintaining 98% code coverage through comprehensive testing",
    ]
  },
  {
    title: "Frontend Engineer",
    company: "Spicodex",
    time: "2024 – Present",
    employment: "Full-Time",
    results: [
      "Led React Native mobile app development with TypeScript; implemented Redux/Zustand state management reducing user wait time by 60%",
      "Established comprehensive testing strategy with Jest and Cypress; achieved 98% code coverage and reduced production bugs by 75%",
      "Optimized API integration and caching strategies; improved app performance by 40%, maintaining 95+ Lighthouse scores"
    ]
  },
  {
    title: "Full-Stack Engineer",
    company: "Aquila Cyber",
    time: "2024 – Present",
    employment: "Part-Time",
    results: [
      "Architected enterprise applications using MERN stack; implemented microservices architecture reducing deployment time by 85%",
      "Engineered high-performance interfaces with React and TypeScript; optimized database queries reducing load times by 60%",
      "Implemented of security best practices and automated testing; established CI/CD pipelines achieving 98% code coverage"
    ]
  }
];

const EDUCATION = [
  {
    school: "Lincoln University College, Nigeria",
    degree: "Diploma in Computer Software Engineering",
    year: "2022 – Present",
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
        {/* Header - Ultra compact with strategic emphasis */}
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
              <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accentpurple inline-flex items-center gap-0.5 underline decoration-1 underline-offset-2">
                <Linkedin className="w-3 h-3" aria-hidden="true" />
                <LinkIcon className="w-2.5 h-2.5 text-gray-400" aria-hidden="true" />
                LinkedIn
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

        {/* Tech Stack - Moved up for immediate technical validation */}
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

        {/* Key Projects - Moved after skills for proof of capabilities */}
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

        {/* Education & Certifications - Enhanced impact */}
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
                      <span className="text-[7pt] px-1 py-0.5 bg-gray-100 text-gray-600 rounded">
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
