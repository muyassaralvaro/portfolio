import Link from "next/link";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import CodeMockup from "./components/code-mockup";
import Hero from "./components/potraithero";
import ProjectShowcase from "./components/project-showcase";
import Reveal from "./components/reveal-animation";
import TimelinePoint from "./components/timeline-point";
import { projects } from "./data/projects";

const experiences = [
  {
    year: "2022",
    title: "Front-End Mentor",
    organization: "IT Club · SMKN 12 Jakarta",
    description:
      "Mentored junior students weekly, teaching frontend design principles, design slicing, HTML, CSS, Tailwind, and Bootstrap.",
    keyword: ["HTML", "CSS", "Tailwind", "Bootstrap", "Design Slicing"],
  },
  {
    year: "2023",
    title: "Automotive Industry Information Systems",
    organization: "Politeknik STMI Jakarta · 3.81 GPA",
    description:
      "Studying enterprise information systems and database management. Active in campus robotics community (HEXA) and national tournaments.",
    keyword: ["Systems Analysis", "ERD", "Robotics", "Hackathons"],
  },
  {
    year: "2026",
    title: "Full-Stack Developer Intern",
    organization: "PT. Kayaba Indonesia · Jan 2026–Present",
    description:
      "Developing enterprise applications using Laravel, Bootstrap, and MySQL, with multi-database architecture integrated with company ERP.",
    keyword: ["Laravel", "MySQL", "ERP Integration", "FPDI / mPDF"],
  },
  {
    year: "TODAY",
    title: "Continuous Growth",
    organization: "Open to new engineering challenges",
    description:
      "Building, learning, and actively seeking full-stack & backend opportunities to create impactful software solutions.",
    keyword: ["Enterprise Systems", "REST API", "Team Collaboration"],
  },
];

const skillGroups = [
  {
    title: "Frontend",
    icon: "fa-display",
    skills: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Bootstrap 5", "Responsive Design"],
  },
  {
    title: "Backend",
    icon: "fa-server",
    skills: ["PHP", "Laravel 12", "CodeIgniter 4", "REST APIs", "MVC Architecture"],
  },
  {
    title: "Databases",
    icon: "fa-database",
    skills: ["MySQL", "PostgreSQL", "Oracle DB", "SQLite", "Firebase", "Optimization"],
  },
  {
    title: "Tools & DevOps",
    icon: "fa-wrench",
    skills: ["Git", "GitHub", "Docker", "Postman", "VS Code"],
  },
  {
    title: "Design & Modeling",
    icon: "fa-diagram-project",
    skills: ["ERD", "UML", "System Design", "Draw.io", "Bizagi", "Design Slicing"],
  },
];

const majorAchievements = [
  {
    icon: "fa-trophy",
    title: "1st Place",
    subtitle: "Line Follower COKRO Competition",
    detail: "National Robotics Tournament · 2024",
  },
  {
    icon: "fa-medal",
    title: "3rd Place",
    subtitle: "Garuda Hacks 4.0 Hackathon",
    detail: "Youth Empowerment Category · 2023",
  },
  {
    icon: "fa-chart-simple",
    title: "TOEIC 945 / 990",
    subtitle: "Official English Proficiency",
    detail: "Listening 495 · Reading 450 · 2022",
  },
  {
    icon: "fa-certificate",
    title: "KKNI Level II Certified",
    subtitle: "Software Engineering Competence",
    detail: "LSP Official Certificate · 2023",
  },
];

const participantHonors = [
  {
    name: "NASA International Space Apps Challenge",
    role: "Participant Hackathon",
    year: "2023",
  },
  {
    name: "Garuda Hacks 5.0",
    role: "Participant Hackathon",
    year: "2024",
  },
  {
    name: "MAXY Impact National Hackathon",
    role: "Participant Hackathon",
    year: "2024",
  },
  {
    name: "Line Follower UNJ EOR & UNILA EEA",
    role: "Participant Robotics",
    year: "2024",
  },
  {
    name: "“Improve Your Potential Skill 2.0”",
    role: "Invited Seminar Speaker",
    year: "2024",
  },
  {
    name: "Campus Graduation Ceremony",
    role: "Commencement Announcer",
    year: "STMI Jakarta",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full overflow-x-hidden bg-base-100">
        <div id="top" className="scroll-mt-16">
          <Hero />
        </div>

        {/* ABOUT SECTION */}
        <section
          id="about"
          className="hero min-h-screen scroll-mt-16 bg-base-200 py-24 sm:py-32"
        >
          <div className="hero-content min-w-0 w-full max-w-7xl flex-col items-center gap-12 px-4 sm:px-6 lg:flex-row-reverse lg:px-8">
            <Reveal delay={0.2} className="min-w-0 w-full basis-2/4">
              <div className="aura w-full text-blue-500 shadow-xl dark:shadow-white/30">
                <CodeMockup />
              </div>
            </Reveal>

            <Reveal delay={0} className="min-w-0 w-full basis-2/4">
              <div className="flex flex-col justify-between text-start text-base-content">
                <h2 className="mb-10 text-center text-[clamp(3rem,15vw,4.5rem)] font-bold leading-none text-shadow-lg/10 sm:text-8xl lg:text-left lg:text-[clamp(5rem,8vw,8rem)]">
                  <span
                    className="
                      relative inline-block px-3 sm:px-6
                      before:content-['']
                      before:absolute
                      before:-inset-x-2 sm:before:-inset-x-6
                      before:-inset-y-2
                      before:border-3
                      before:border-current
                      before:rounded-[50%]
                      before:rotate-[2deg]
                      before:opacity-60
                      before:pointer-events-none
                      after:content-['']
                      after:absolute
                      after:-inset-x-2 sm:after:-inset-x-5
                      after:-inset-y-3
                      after:border-4
                      after:border-current
                      after:rounded-[50%]
                      after:rotate-[-3deg]
                      after:pointer-events-none
                    "
                  >
                    ABOUT
                  </span>
                </h2>

                <div className="flex flex-col gap-5 text-base sm:text-lg leading-relaxed text-base-content/90">
                  <p>
                    Hi! I&apos;m Alvaro Muyassar, a Junior Software Developer with a background in Automotive Industry Information Systems.
                  </p>
                  <p>
                    I have experience in designing and optimizing web-based enterprise applications using PHP Frameworks like Laravel, CodeIgniter and integrating it with relational databases such as MySQL, PostgreSQL, Oracle, SQLite and Firebase.
                  </p>
                  <p>
                    I am skilled in database optimization, Third-party API integration, responsive design slicing, and implementing secure, role-based access control user managements.
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-6">
                    <a
                      href="/files/cv-redacted.pdf"
                      target="_blank"
                      download="CV ATS Alvaro Muyassar V2 - Redacted.pdf"
                      className="btn btn-neutral rounded-lg px-6 transition ease-in-out duration-150 hover:-translate-y-0.5 hover:scale-105 dark:bg-white dark:text-black dark:shadow-md dark:shadow-white/30"
                    >
                      <i className="fa-solid fa-download mr-1.5" />
                      Download CV
                    </a>

                    <a
                      href="mailto:muyassaralvaro@gmail.com"
                      className="hand-note inline-flex items-center gap-1 text-xl text-base-content underline decoration-blue-500 decoration-2 underline-offset-4 transition hover:text-blue-500"
                    >
                      Let&apos;s connect! ↗
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section
          id="experience"
          className="relative min-h-screen scroll-mt-16 overflow-hidden bg-base-200 py-24 pb-36 sm:py-32 sm:pb-44"
        >
          <p
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-8 z-0 -translate-x-1/2 select-none whitespace-nowrap text-[16vw] font-black leading-none tracking-[-0.08em] text-base-content/[0.07]"
          >
            EXPERIENCE
          </p>

          <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal className="max-w-md lg:sticky lg:top-28 lg:self-start">
              <p className="text-base font-extrabold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                MY
              </p>
              <h2 className="mt-1 text-5xl font-[950] uppercase tracking-tight sm:text-6xl md:text-7xl">
                JOURNEY
              </h2>
              <span className="mt-4 block h-1.5 w-20 bg-base-content" />
              <p className="mt-6 text-lg sm:text-xl font-medium leading-relaxed text-base-content/80">
                A journey of continuous learning, building, and creating real impact.
              </p>
            </Reveal>

            <div className="relative">
              <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical text-base-content">
                {experiences.toReversed().map((item, index) => (
                  <TimelinePoint
                    key={item.year + item.title}
                    {...item}
                    side={index % 2 === 0 ? "start" : "end"}
                    isFirst={index === 0}
                    isLast={index === experiences.length - 1}
                    delay={index * 0.15}
                  />
                ))}
              </ul>

              <p
                aria-hidden="true"
                className="hand-note absolute -bottom-10 right-4 hidden rotate-[-8deg] text-xl text-base-content/75 xl:block"
              >
                More to come... ↙
              </p>
            </div>
          </div>
        </section>

        {/* FEATURED PROJECTS SECTION */}
        <section
          id="projects"
          className="scroll-mt-16 bg-base-300 py-20 sm:py-28"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal className="mb-12">
              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                <div>
                  <p className="text-base font-extrabold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                    FEATURED
                  </p>
                  <h2 className="text-5xl font-[950] uppercase tracking-tight sm:text-6xl">
                    PROJECTS
                  </h2>
                  <span className="mt-3 block h-1.5 w-20 bg-base-content" />
                  <p className="mt-4 text-base sm:text-lg text-base-content/80">
                    Real-world applications that solve actual problems.
                  </p>
                </div>

                <Link
                  href="/projects"
                  className="btn btn-primary inline-flex w-fit items-center gap-2 rounded-xl bg-blue-500 px-6 text-base text-white hover:bg-blue-600 shadow-md transition hover:-translate-y-0.5"
                >
                  <span>View All Projects</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </Reveal>

            <ProjectShowcase projects={projects.slice(0, 3)} />
          </div>
        </section>

        {/* SKILLS / TECH STACK SECTION */}
        <section id="skills" className="scroll-mt-16 bg-base-200 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal className="mb-12">
              <p className="text-base font-extrabold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                SKILLS /
              </p>
              <h2 className="text-5xl font-[950] uppercase tracking-tight sm:text-6xl">
                TECH STACK
              </h2>
              <span className="mt-3 block h-1.5 w-20 bg-base-content" />
              <p className="mt-4 text-base sm:text-lg text-base-content/80">
                Tools and technologies I work with.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {skillGroups.map((group, index) => (
                <Reveal key={group.title} delay={index * 0.08} className="h-full">
                  <article className="flex h-full flex-col rounded-2xl border border-base-content/10 bg-base-100 p-5 shadow-sm transition hover:shadow-md">
                    <div className="mb-4 flex items-center gap-3">
                      <i
                        aria-hidden="true"
                        className={`fa-solid ${group.icon} text-lg text-blue-500`}
                      />
                      <h3 className="font-extrabold text-base text-base-content">{group.title}</h3>
                    </div>
                    <ul className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <li
                          key={skill}
                          className="rounded-full bg-base-200 px-3 py-1 text-xs font-semibold text-base-content/85"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS SECTION */}
        <section
          id="achievements"
          className="scroll-mt-16 bg-base-300 py-20 sm:py-28"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal className="mb-12">
              <p className="text-base font-extrabold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                SELECTED
              </p>
              <h2 className="text-4xl font-[950] uppercase tracking-tight sm:text-6xl">
                ACHIEVEMENTS
              </h2>
              <span className="mt-3 block h-1.5 w-20 bg-base-content" />
              <p className="mt-4 text-base sm:text-lg text-base-content/80">
                Milestones that keep me moving forward.
              </p>
            </Reveal>

            {/* Major awards cards */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {majorAchievements.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.08} className="h-full">
                  <article className="flex h-full items-start gap-4 rounded-2xl border border-base-content/10 bg-base-100 p-6 shadow-sm transition hover:shadow-md">
                    <i
                      aria-hidden="true"
                      className={`fa-solid ${item.icon} mt-1 shrink-0 text-3xl text-blue-500`}
                    />
                    <div>
                      <h3 className="text-lg font-black text-base-content">{item.title}</h3>
                      <p className="mt-1 text-sm font-semibold text-base-content/85">{item.subtitle}</p>
                      <p className="mt-1 text-xs text-base-content/60">{item.detail}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            {/* Additional tournament / hackathon participations */}
            <Reveal delay={0.2} className="mt-8">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-base-content/60">
                Additional Participations & Activities
              </p>
              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                {participantHonors.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex h-11 items-center justify-between gap-3 rounded-xl border border-base-content/10 bg-base-100/70 px-4 text-xs text-base-content/80 shadow-2xs transition-all duration-200 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-base-100 hover:shadow-md"
                  >
                    <span className="truncate font-semibold text-base-content">
                      {item.name}
                    </span>
                    <span className="shrink-0 rounded-md bg-base-200 px-2 py-0.5 text-[11px] font-medium text-base-content/70">
                      {item.role} · {item.year}
                    </span>

                    {/* Floating tooltip displaying the full un-truncated title */}
                    <div className="pointer-events-none absolute -top-8 left-2 z-30 opacity-0 transition-opacity duration-150 group-hover:opacity-100">
                      <div className="rounded-md bg-neutral px-2.5 py-1 text-[11px] font-medium text-neutral-content shadow-lg whitespace-nowrap">
                        {item.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
