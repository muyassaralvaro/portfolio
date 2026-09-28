import Card from "./components/card";
import Navbar from "./components/navbar";
import CodeMockup from "./components/code-mockup";
import TimelinePoint from "./components/timeline-point";
import Hero from "./components/potraithero";
import Reveal from "./components/reveal-animation";
import ProjectCard from "./components/project-card";

const experiences = [
  {
    year: "TODAY",
    title: "Full-Stack Developer Intern | PT. Kayaba Indonesia",
    description:
      "The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh personal computer. It played a pivotal role in establishing desktop publishing as a general office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed in a beige case with integrated carrying handle; it came with a keyboard and single-button mouse.",
    keyword: ["Laravel", "MySQL", "Tailwind CSS", "Bootstrap", "Typescript"],
  },
  // {
  //   year: "2023",
  //   title: "Information Systems Student | Politeknik STMI Jakarta",
  //   description:
  //     "The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh personal computer. It played a pivotal role in establishing desktop publishing as a general office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed in a beige case with integrated carrying handle; it came with a keyboard and single-button mouse.",
  //   keyword: ["Python", "Laravel", "React", "Node.js", "Next.JS", "Javascript"],
  // },
  {
    year: "2022",
    title: "Front-End Mentor | IT Club SMKN 12 Jakarta",
    description:
      "The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh personal computer. It played a pivotal role in establishing desktop publishing as a general office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed in a beige case with integrated carrying handle; it came with a keyboard and single-button mouse.",
    keyword: ["JavaScript", "Bootstrap", "HTML", "CSS"],
  },
  {
    year: "2022",
    title: "Marketing Intern | PT. Dok Kodja Bahari",
    description:
      "The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh personal computer. It played a pivotal role in establishing desktop publishing as a general office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed in a beige case with integrated carrying handle; it came with a keyboard and single-button mouse.",
    keyword: ["Marketing", "Social Media", "Content Creation"],
  },
];

const projects = [
  {
    title: "Work Permit Management System",
    imageTitle: "workpermit",
    description: "Digitalized PT. Kayaba Indonesia permit-to-work management and creation flow using laravel, connecting internal company with external company's suppliers.."
  },
  {
    title: "EHS Academy",
    imageTitle: "ehs-academy",
    description: "Learning Management System for EHS Department at PT. Kayaba Indonesia featuring Courses, Lessons, and Quizes with additional Kiken Yochi; Hazard Identifying."
  },
  {
    title: "Genba Safety Compilance",
    imageTitle: "workpermit",
    description: "Learning Management System for EHS Department at PT. Kayaba Indonesia featuring Courses, Lessons, and Quizes with additional Kiken Yochi; Hazard Identifying."
  },
];

export default function Home() {
  var active = "Homepage";

  return (
    <main className="w-full overflow-x-hidden bg-base-100 bg-[url('/img/pattern.jpg')] bg-cover bg-repeat">
      <Navbar active={active} />

      {/* hero */}
      {/* <section className="hero bg-base-200 min-h-screen text-base-content">
        <div className="hero-content text-center">
          <div className="bg-blue-400 dark:bg-blue-300 rounded-lg">
            <h1 className="text-[350px] text-white dark:invert font-bold text-shadow-lg/30">
              ALVARO
            </h1>
          </div>
          <div className="max-h-screen">
            <img
              className="max-h-screen z-1 absolute top-0 right-85 drop-shadow-lg"
              src="/img/me.png"
              alt="Alvaro Muyassar"
            />
          </div>
        </div>
      </section> */}
      <Hero />

      {/* about */}
      <section className="hero bg-base-300 min-h-screen">
        <div className="hero-content flex-col lg:flex-row w-full items-center">
          <Reveal delay={0} className="w-full min-w-0 basis-2/4">
            <div className="flex min-w-0 flex-col justify-between text-start text-base-content">
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-tight lg:leading-30 mb-10 text-shadow-lg/10 text-center lg:text-left">
                <span
                  className="
                    relative inline-block px-6
                    before:content-['']
                    before:absolute
                    before:-inset-x-6
                    before:-inset-y-2
                    before:border-3
                    before:border-blue-base-content
                    before:rounded-[50%]
                    before:rotate-[2deg]
                    before:opacity-60
                    before:pointer-events-none
                    after:content-['']
                    after:absolute
                    after:-inset-x-5
                    after:-inset-y-3
                    after:border-4
                    after:border-blue-base-content
                    after:rounded-[50%]
                    after:rotate-[-3deg]
                    after:pointer-events-none
                    animation-ping
                  "
                >
                  ABOUT
                </span>
              </h1>
              <div className="text-xl flex flex-col gap-5 text-center lg:text-left">
                <p className="">
                  Hi! I'm a Junior Software Developer with a background in
                  Automotive Industry Information Systems.
                </p>
                <p className="">
                  I have experience in designing and optimizing web-based
                  enterprise applications using PHP Frameworks like Laravel,
                  CodeIgniter and integrating it with relational databases such
                  as MySQL, PostgreSQL, Oracle, SQLite and Firebase.
                </p>
                <p>
                  I am skilled in database optimization, Third-party API
                  integration, responsive design slicing, and implementing
                  secure, role-based access control user managements.
                </p>
                <a
                  href="/files/cv.pdf"
                  target="_blank"
                  download="CV ATS Alvaro Muyassar.pdf"
                  className="btn btn-neutral rounded-lg w-50 transition ease-in-out duration-150 hover:-translate-y-0.5 hover:scale-104 dark:shadow-md dark:shadow-white/50"
                >
                  <i className="fa fa-solid fa-download mr-1"></i> Download CV
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.25} className="w-full min-w-0 basis-2/4">
            <div className="aura block w-full min-w-0 overflow-hidden text-blue-500 shadow-lg dark:shadow-white/30">
              <CodeMockup />
            </div>
          </Reveal>
        </div>
      </section>

      {/* experience */}
      <section className="relative min-h-screen overflow-hidden bg-base-200 pt-32 pb-16">
        <p
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-1/2
            top-8
            z-0
            -translate-x-1/2
            whitespace-nowrap
            text-[16vw]
            font-black
            leading-none
            tracking-[-0.08em]
            text-base-content/[0.1]
            select-none
          "
        >
          EXPERIENCE
        </p>

        <div className="relative z-10 mx-auto max-w-7xl px-8">
          {/* experience content */}
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical text-base-content">
            {experiences.map((items, index) => (
              <TimelinePoint
                key={index}
                {...items}
                side={index % 2 === 0 ? "start" : "end"}
                isFirst={index === 0}
                isLast={index === experiences.length - 1}
                delay={index * 0.2}
              />
            ))}
          </ul>
        </div>
      </section>

      <section className="hero bg-base-300 py-16">
        <div className="flex hero-content flex-col md:flex-row w-full justify-between align-center">
          <Reveal delay={0.001} className="w-48">
            <div className="flex flex-col mr-auto align-stretch text-base-content">
              <h1 className="text-4xl font-[900] uppercase">Featured</h1>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-[1000] uppercase">Projects</h1>
              <span className="bg-base-content py-1 w-24"></span>
              {/* <p className="mt-3 p">Here are some of my projects that i've made</p> */}
              <a href="" className="btn mt-3 btn-neutral shadow-md px-4 transition ease-in-out duration-150 hover:-translate-y-0.5 hover:scale-104 dark:shadow-md dark:shadow-white/50">View All My Projects <i className="fa-solid fa-arrow-right ms-2"></i></a>
            </div>
          </Reveal>
          <div className="flex gap-2 flex-wrap align-stretch">
            {/* <ProjectCard
            imageTitle="workpermit"
            title="Work Permit Management System"
            description="Digitalized permit-to-work management and creation flow"
            /> */}
            {projects.map((items, index) => (
              <Reveal
              key={index}
              delay={0.2 * index}
              className=""
              >
                <ProjectCard
                // key={index}
                {...items}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
