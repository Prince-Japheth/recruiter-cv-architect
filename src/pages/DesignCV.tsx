import SectionHeader from "@/components/SectionHeader";
import CVQRCode from "@/components/CVQRCode";
import { Mail, Linkedin, Globe, Instagram, ExternalLink, Link as LinkIcon } from "lucide-react";

const PROFILE = {
  name: "Japheth Oluwatimileyin Jerry",
  title: "UI/UX & Graphic Designer",
  location: "Federal Capital Territory, Nigeria · Remote",
  email: "princejaphethjj@gmail.com",
  portfolio: "https://yafetport.netlify.app/projects?category=UI%2FUX+DESIGN",
  instagram: "https://www.instagram.com/_prince_yafet_/",
  summary: `UI/UX & Graphic Designer with 4+ years crafting high-impact digital experiences and brand identities. Expert in Figma and Adobe Creative Suite, delivering user-centered solutions that drive engagement and conversion. Proven track record of elevating brand presence for 20+ clients through strategic design thinking and pixel-perfect execution across web, mobile, and print media.`,
};

const KEY_PROJECTS = [
  {
    title: "Computer Aided Instruction Dashboard",
    role: "UI/UX Designer",
    tech: "Figma, Adobe XD, User Research, Prototyping",
    outcome: "Designed intuitive educational analytics dashboard; implemented user research findings to improve data visualization clarity by 60%. Created comprehensive design system reducing development time by 40% while maintaining 95% user satisfaction.",
    link: "https://www.figma.com/design/MG9mnjpONtzH7MAdzaQyFx/Computer-aided-instruction-studies?node-id=0-1"
  },
  {
    title: "Villaco Real Estate Flyer",
    role: "Graphic Designer",
    tech: "Adobe Photoshop, Print Design, Layout Design",
    outcome: "A professional real estate flyer showcasing property listings; created visually appealing layout highlighting key property features and contact information.",
    link: "https://yafetport.netlify.app/projects?category=Graphic+Design"
  },
  {
    title: "Serene E-commerce Platform",
    role: "UI/UX Designer",
    tech: "Figma, User Research, Prototyping, Design Systems",
    outcome: "Architected modern e-commerce interface with focus on conversion optimization; implemented user-centered design principles. Created responsive design system supporting 10+ product categories.",
    link: "https://www.figma.com/design/nngiN0ih1qbsYJrYoYQZCf/Serene?node-id=0-1"
  }
];

const EXPERIENCE = [
  {
    title: "UI/UX & Brand Designer",
    company: "Web Launch Guys",
    time: "2020 – Present",
    results: [
      "Led design strategy for 15+ enterprise clients; established design systems and conducted user research improving conversion rates by 45% and satisfaction scores to 95%",
      "Architected brand identities and marketing strategies; increased client engagement by 60% through strategic design implementation and consistent brand application"
    ]
  },
  {
    title: "UI/UX Designer",
    company: "Safekan",
    time: "2022 – 2024",
    results: [
      "Led end-to-end design process for web/mobile platforms; established design system and conducted A/B testing increasing user engagement by 50%",
      "Developed brand guidelines and scalable templates ensuring consistent application across all digital touchpoints"
    ]
  },
  {
    title: "Graphic Designer",
    company: "Freelance",
    time: "2020 – Present",
    results: [
      "Delivered 30+ brand identity projects; developed strategic design solutions increasing client market visibility by 70%",
      "Created scalable design systems and marketing collateral enabling consistent brand implementation across all media"
    ]
  }
];

const TECH_SKILLS = {
  "Design Tools & Software": [
    "Figma",
    "Adobe Creative Suite",
    "Adobe XD",
    "Sketch",
    "InVision"
  ],
  "Design Methods & Process": [
    "User Research",
    "UX Strategy",
    "Design Systems",
    "Prototyping",
    "Usability Testing"
  ],
  "Brand & Visual Design": [
    "Brand Strategy",
    "Visual Identity",
    "Typography",
    "Color Theory",
    "Print Design"
  ]
};

const EDUCATION = [
  {
    school: "Lincoln University College, Nigeria",
    degree: "Diploma in Computer Software Engineering",
    year: "2022 – Present",
    focus: "UI/UX Design & Digital Media"
  }
];

const CERTIFICATIONS = [
  {
    cert: "Google UX Design Professional Certificate",
    year: "2024 (Expected)",
    status: "In Progress"
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
    icon: Instagram,
    text: "_prince_yafet_",
    href: "https://www.instagram.com/_prince_yafet_/"
  },
  {
    icon: Globe,
    text: "https://yafetport.netlify.app/projects?category=UI%2FUX+DESIGN",
    href: "https://yafetport.netlify.app/projects?category=UI%2FUX+DESIGN"
  }
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

const DesignCV = () => {
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
        {/* Header - Design-optimized with portfolio emphasis */}
        <header 
          className="flex flex-row items-center justify-between gap-1 border-b border-gray-200 pb-1.5 mb-2"
          role="banner"
        >
          <div>
            <h1 className="text-xl font-bold text-gray-800 tracking-tight">{PROFILE.name}</h1>
            <div className="flex items-center gap-2">
              <div className="text-base text-accentpurple font-semibold">{PROFILE.title}</div>
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

        {/* Summary */}
        <section aria-label="Professional Summary" role="region" className="mb-2">
          <p className="text-[10pt] leading-snug text-gray-700">{PROFILE.summary}</p>
        </section>

        {/* Key Projects - Moved before Experience for design roles */}
        <section aria-label="Key Projects" role="region" className="mb-2">
          <SectionHeader>Key Projects</SectionHeader>
          <div className="space-y-1.5">
            {KEY_PROJECTS.map((project, idx) => (
              <article key={idx} className="print:break-inside-avoid">
                <div className="flex flex-wrap items-center gap-1">
                  <h3 className="font-semibold text-[10pt]">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-accentpurple inline-flex items-center gap-0.5 underline decoration-1 underline-offset-2 group"
                    >
                      {project.title}
                      <LinkIcon className="w-2.5 h-2.5 text-gray-400" aria-hidden="true" />
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                    </a>
                  </h3>
                  <span className="text-accentpurple font-medium text-[9pt]">— {project.role}</span>
                </div>
                <div className="text-gray-600 text-[8pt] mt-0.5"><strong>Tools:</strong> {project.tech}</div>
                <div className="text-gray-700 text-[9pt] mt-0.5">{project.outcome}</div>
              </article>
            ))}
          </div>
        </section>

        {/* Professional Experience - Moved after Projects for design roles */}
        <section aria-label="Professional Experience" role="region" className="mb-2">
          <SectionHeader>Professional Experience</SectionHeader>
          <div className="space-y-1.5">
            {EXPERIENCE.map((role, idx) => (
              <article key={role.title + role.company + idx} className="print:break-inside-avoid">
                <div className="flex flex-wrap items-center gap-1">
                  <h3 className="font-semibold text-[10pt]">{role.title}</h3>
                  <span className="text-accentpurple font-semibold text-[9pt]">@ {role.company}</span>
                  <time className="ml-1 text-gray-400 text-[8pt]">{role.time}</time>
                </div>
                <ul className="list-disc list-inside ml-1 text-gray-700 text-[9pt] mt-0.5 [&>li]:mb-0.5" role="list">
                  {role.results.map((r, i) => (
                    <li key={i} role="listitem">{r}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Technical & Design Skills */}
        <section aria-label="Technical & Design Skills" role="region" className="mb-2">
          <SectionHeader>Technical & Design Skills</SectionHeader>
          <div className="grid grid-cols-3 gap-x-4 gap-y-0.5">
            {Object.entries(TECH_SKILLS).map(([category, skills]) => (
              <div key={category}>
                <h3 className="font-semibold text-gray-800 text-[9pt] mb-0.5">{category}</h3>
                <ul className="text-[8pt] text-gray-700" role="list">
                  {skills.map((skill) => (
                    <li key={skill} role="listitem">{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Certifications - Design-focused */}
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

        {/* Footer */}
        <footer className="border-t border-gray-200 pt-1.5 mt-1.5 text-[8pt]" role="contentinfo">
          <nav className="flex flex-col items-center gap-1" aria-label="Contact Information">
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
            <div className="text-gray-500 italic">Professional references available upon request</div>
          </nav>
        </footer>
      </main>
    </>
  );
};

export default DesignCV; 