import SectionHeader from "@/components/SectionHeader";
import { Mail, MapPin, Link as LinkIcon } from "lucide-react";

const PROFILE = {
  name: "Adamu Adamu Manu",
  title: "Full-Stack Developer",
  location: "Asokoro, Abuja, Nigeria",
  email: "balaaadhamu45@gmail.com",
  address: "131 Yakubu Gowon Crescent Asokoro, Abuja",
  summary: `Full Stack Developer and Web Developer at Safekan Startup, currently studying Software Engineering at Lincoln University. Proficient in React, Laravel, PHP, HTML, CSS, and JavaScript, with experience in delivering dynamic and responsive web applications. As a public speaker, excels in clear communication and engaging presentations. Strong problem-solving skills, capable of working independently and as part of a team, with a commitment to continuous learning and innovation.`,
};

const KEY_PROJECTS = [
  {
    title: "School Management System",
    role: "Group Leader",
    tech: "PHP, Laravel, MySQL, HTML, CSS, JavaScript",
    outcome:
      "Developed and implemented a system for managing courses, attendance, and resources. Successfully deployed at school, gaining leadership and project management experience.",
  },
];

const TECH_STACK = {
  "Front-End": ["HTML5/CSS3", "JavaScript", "React", "Responsive Design", "UI Implementation"],
  "Back-End": ["PHP", "Laravel", "RESTful APIs", "Database Management", "MySQL"],
  Development: [
    "Cross-device Web Apps",
    "Debugging & Optimization",
    "Wireframes & Prototypes",
    "Usability Testing",
  ],
  Soft: [
    "Problem-Solving",
    "Team Collaboration",
    "Stakeholder Communication",
    "Public Speaking",
    "Continuous Learning",
  ],
};

const EXPERIENCE = [
  {
    title: "Front-end Developer",
    company: "Safekan Startup",
    time: "2024 – Present",
    employment: "Full-Time",
    results: [
      "Create visually stunning and responsive interfaces that align with luxury brand aesthetics",
      "Work closely with designers to ensure high-end brand representation and seamless user experience",
      "Develop and refine web applications to provide a smooth and engaging experience across devices",
      "Continuously learn and integrate the latest front-end technologies and trends",
    ],
  },
  {
    title: "UI/UX Designer",
    company: "Safekan Startup",
    time: "2023 – 2024",
    employment: "Full-Time",
    results: [
      "Gather and analyze user requirements to inform design decisions",
      "Create wireframes, mockups, and interactive prototypes",
      "Design intuitive user flows and journeys to enhance overall user experience",
      "Work closely with developers to ensure design feasibility",
      "Conduct usability tests and gather feedback to refine designs",
    ],
  },
  {
    title: "Web Developer",
    company: "Qafams Tech Fusion",
    time: "2023",
    employment: "Full-Time",
    results: [
      "Build and update websites using HTML, CSS, and JavaScript",
      "Identify and resolve bugs and issues to enhance performance",
      "Work alongside senior developers to learn and apply new techniques",
    ],
  },
];

const EDUCATION = [
  {
    school: "Lincoln University",
    degree: "Bachelor's Degree in Computer Software Engineering",
    year: "2023 – 2027",
    focus: "Software Engineering",
  },
  {
    school: "King's College Lagos",
    degree: "High School Diploma",
    year: "",
    focus: "Secondary Education",
  },
];

const FOOTER_LINKS = [
  {
    icon: Mail,
    text: "balaaadhamu45@gmail.com",
    href: "mailto:balaaadhamu45@gmail.com",
  },
  {
    icon: MapPin,
    text: "Asokoro, Abuja",
    href: "#",
  },
];

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

const AdamuCV = () => {
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
          width: "210mm",
          height: "297mm",
          fontFamily:
            'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        }}
      >
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
              <a
                href={`mailto:${PROFILE.email}`}
                className="hover:text-accentpurple inline-flex items-center gap-0.5 underline decoration-1 underline-offset-2"
              >
                <Mail className="w-3 h-3" aria-hidden="true" />
                <LinkIcon className="w-2.5 h-2.5 text-gray-400" aria-hidden="true" />
                {PROFILE.email}
              </a>
              <span className="text-gray-400">•</span>
              <span className="inline-flex items-center gap-0.5">
                <MapPin className="w-3 h-3" aria-hidden="true" />
                {PROFILE.address}
              </span>
            </div>
          </div>
        </header>

        <section aria-label="Professional Summary" role="region" className="mb-1.5">
          <p className="text-[10pt] leading-snug text-gray-700">{PROFILE.summary}</p>
        </section>

        <section aria-label="Professional Experience" role="region" className="mb-1.5">
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
                    <span className="text-accentpurple font-semibold text-[9pt]">
                      @ {role.company}
                    </span>
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
                    <li key={i} role="listitem">
                      {r}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section aria-label="Technical Skills" role="region" className="mb-1.5">
          <SectionHeader>Technical Skills</SectionHeader>
          <div className="grid grid-cols-4 gap-x-3 gap-y-0.5">
            {Object.entries(TECH_STACK).map(([category, skills]) => (
              <div key={category}>
                <h3 className="font-semibold text-gray-800 text-[9pt] mb-0.25">{category}</h3>
                <ul className="text-[8pt] text-gray-700" role="list">
                  {skills.map((skill) => (
                    <li key={skill} role="listitem">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section aria-label="Key Projects" role="region" className="mb-1.5">
          <SectionHeader>Key Projects</SectionHeader>
          <div className="space-y-1">
            {KEY_PROJECTS.map((project, idx) => (
              <article key={idx} className="print:break-inside-avoid">
                <div className="flex flex-wrap items-center gap-1">
                  <h3 className="font-semibold text-[10pt]">{project.title}</h3>
                  <span className="text-accentpurple font-medium text-[9pt]">
                    — {project.role}
                  </span>
                </div>
                <div className="text-gray-600 text-[8pt] mt-0.25">
                  <strong>Tech:</strong> {project.tech}
                </div>
                <div className="text-gray-700 text-[9pt] mt-0.25">{project.outcome}</div>
              </article>
            ))}
          </div>
        </section>

        <section aria-label="Education" role="region" className="mb-1">
          <SectionHeader>Education</SectionHeader>
          <div className="grid grid-cols-2 gap-x-3">
            {EDUCATION.map((ed) => (
              <article key={ed.school + ed.year}>
                <h3 className="font-semibold text-[9pt]">{ed.school}</h3>
                <div className="text-gray-700 text-[8pt]">{ed.degree}</div>
                <div className="text-gray-600 text-[8pt] italic">{ed.focus}</div>
                {ed.year && <time className="text-gray-400 text-[8pt]">{ed.year}</time>}
              </article>
            ))}
          </div>
        </section>

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
              {FOOTER_LINKS.map(({ icon: Icon, text, href }) =>
                href === "#" ? (
                  <span key={text} className="flex items-center gap-1 text-gray-600">
                    <Icon className="w-3 h-3" aria-hidden="true" />
                    <span>{text}</span>
                  </span>
                ) : (
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
                )
              )}
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

export default AdamuCV;
