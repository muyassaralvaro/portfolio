import Card from "./components/card";
import Navbar from "./components/navbar";

export default function Home() {
  var active = "Homepage";

  return (
    <main className="bg-base-100 bg-[url('/img/pattern.jpg')] bg-cover bg-repeat">
      <Navbar active={active} />
      <div className="hero bg-base-200 min-h-screen text-base-content">
        <div className="hero-content text-center">
          <div className="bg-blue-400 dark:bg-blue-300 rounded-lg">
            <h1 className="text-[350px] text-white dark:invert font-bold text-shadow-lg/30">
              ALVARO
            </h1>
          </div>
          <div className="max-h-screen overflow-hidden">
            <img
              className="max-h-screen z-1 absolute top-0 right-85 drop-shadow-lg"
              src="/img/me.png"
              alt="Alvaro Muyassar"
            />
          </div>
        </div>
      </div>

      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse w-screen items-center">
          <div className="aura w-full basis-2/4 text-blue-500 shadow-lg dark:shadow-white/30">
            <div className="mockup-code">
              <pre data-prefix="1">
                <code>
                  <span className="text-purple-400">
                    export default function
                  </span>{" "}
                  <span className="text-blue-400">AboutMe</span>() {"{"}
                </code>
              </pre>

              <pre data-prefix="2">
                <code>
                  {"  "}
                  <span className="text-purple-400">return</span> (
                </code>
              </pre>

              <pre data-prefix="3">
                <code>
                  {"    "}&lt;<span className="text-green-400">main</span>&gt;
                </code>
              </pre>

              <pre data-prefix="4">
                <code>
                  {"      "}&lt;<span className="text-green-400">h1</span>&gt;
                </code>
              </pre>

              <pre data-prefix="5">
                <code>
                  {"        "}Hi, I'm{" "}
                  <span className="text-blue-400 font-bold">Baro</span> 👋
                </code>
              </pre>

              <pre data-prefix="6">
                <code>
                  {"      "}&lt;/<span className="text-green-400">h1</span>&gt;
                </code>
              </pre>

              <pre data-prefix="7">
                <code>
                  {"      "}&lt;<span className="text-green-400">p</span>&gt;
                </code>
              </pre>

              <pre data-prefix="8">
                <code>
                  {"        "}Full Stack Developer building enterprise web
                  applications
                </code>
              </pre>

              <pre data-prefix="9">
                <code>
                  {"        "}from responsive interfaces to backend systems and
                  databases.
                </code>
              </pre>

              <pre data-prefix="10">
                <code>
                  {"      "}&lt;/<span className="text-green-400">p</span>&gt;
                </code>
              </pre>

              <pre data-prefix="11">
                <code>
                  {"      "}&lt;<span className="text-green-400">p</span>&gt;
                </code>
              </pre>

              <pre data-prefix="12">
                <code>
                  {"        "}I work with{" "}
                  <span className="text-red-400 underline">Laravel</span>,{" "}
                  <span className="text-cyan-400 underline">CodeIgniter 4</span>
                  ,{" "}
                  <span className="text-yellow-400 underline">JavaScript</span>,
                  and{" "}
                  <span className="text-blue-400 underline">TypeScript</span>.
                </code>
              </pre>

              <pre data-prefix="13">
                <code>
                  {"      "}&lt;/<span className="text-green-400">p</span>&gt;
                </code>
              </pre>

              <pre data-prefix="14">
                <code>
                  {"      "}&lt;<span className="text-green-400">p</span>&gt;
                </code>
              </pre>

              <pre data-prefix="15">
                <code>
                  {"        "}Experienced with ERP integration, REST APIs,
                </code>
              </pre>

              <pre data-prefix="16">
                <code>
                  {"        "}multi-database systems, RBAC, and workflow
                  automation.
                </code>
              </pre>

              <pre data-prefix="17">
                <code>
                  {"      "}&lt;/<span className="text-green-400">p</span>&gt;
                </code>
              </pre>

              <pre data-prefix="18">
                <code>
                  {"      "}&lt;<span className="text-green-400">p</span>&gt;
                </code>
              </pre>

              <pre data-prefix="19">
                <code>
                  {"        "}Databases: MySQL · PostgreSQL · Oracle · SQLite ·
                  Firebase
                </code>
              </pre>

              <pre data-prefix="20">
                <code>
                  {"      "}&lt;/<span className="text-green-400">p</span>&gt;
                </code>
              </pre>

              <pre data-prefix="21">
                <code>
                  {"    "}&lt;/<span className="text-green-400">main</span>&gt;
                </code>
              </pre>

              <pre data-prefix="22">
                <code>{"  "});</code>
              </pre>

              <pre data-prefix="23">
                <code>{"}"}</code>
              </pre>
            </div>
          </div>
          <div className="basis-2/4 text-start flex-col justify-between text-base-content">
            <h1 className="text-9xl font-bold leading-30 mb-10 text-shadow-lg/10">
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
            <div className="text-xl flex flex-col gap-5">
              <p className="">
                Hi! I'm a Junior Software Developer with a background in
                Automotive Industry Information Systems.
              </p>
              <p className="">
                I have experience in designing and optimizing web-based enterprise
                applications using PHP Frameworks like Laravel, CodeIgniter and integrating it with
                relational databases such as MySQL, PostgreSQL, Oracle, SQLite and Firebase.
              </p>
              <p>
                I am skilled in database optimization, Third-party
                API integration, responsive design slicing, and implementing secure, role-based access
                control user managements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
