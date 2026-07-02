import Link from "next/link";

export default function InternshipsPage() {
  const tracksList = [
    {
      id: "web-dev",
      name: "Web Development",
      description: "Build production-ready web apps. Learn React, Next.js, Tailwind, Node.js, and how to construct, design, and deploy secure backend APIs.",
      level: "Intermediate",
      duration: "12 Weeks",
      skills: ["React", "Next.js", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
      badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      id: "ai-ml",
      name: "AI & Data",
      description: "Dive deep into artificial intelligence, machine learning, and data analytics. Build predictive models, analyze datasets, and deploy intelligent agents.",
      level: "Advanced",
      duration: "16 Weeks",
      skills: ["Python", "TensorFlow", "PyTorch", "Pandas", "SQL", "Model Deployment"],
      badgeColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    },
    {
      id: "software-engineering",
      name: "Software Engineering",
      description: "Master system design, algorithms, design patterns, and scalable architectures. Build production-grade backends and backend services.",
      level: "Advanced",
      duration: "14 Weeks",
      skills: ["System Design", "Go / Java", "Docker", "Algorithms", "CI/CD", "Redis"],
      badgeColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    },
    {
      id: "cyber-security",
      name: "Cybersecurity",
      description: "Learn how to secure corporate networks, analyze security log configurations, perform threat modeling, and write vulnerability audit documentation.",
      level: "Intermediate",
      duration: "10 Weeks",
      skills: ["Network Security", "Linux Systems", "Vulnerability Testing", "Wireshark", "Threat Analysis"],
      badgeColor: "text-rose-400 bg-rose-500/10 border-rose-500/20",
    },
    {
      id: "ui-ux",
      name: "UI/UX Design",
      description: "Design high-fidelity user experiences. Conduct user research interviews, sketch wireframes, and compile interactive design systems in Figma.",
      level: "Beginner",
      duration: "8 Weeks",
      skills: ["User Research", "Wireframing", "Figma Design", "Prototyping", "Design Systems", "Usability Testing"],
      badgeColor: "text-sky-400 bg-sky-500/10 border-sky-500/20",
    },
    {
      id: "app-dev",
      name: "App Development",
      description: "Create native and cross-platform mobile applications. Learn mobile UI principles, state management, and API integrations for iOS and Android.",
      level: "Intermediate",
      duration: "12 Weeks",
      skills: ["Flutter / React Native", "Mobile UI", "State Management", "API Integration", "App Deployment"],
      badgeColor: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    },
  ];

  return (
    <div className="relative isolate py-20 lg:py-28 overflow-hidden">
      {/* Background Decorative Circles */}
      <div className="absolute top-20 right-10 -z-10 h-72 w-72 rounded-full bg-vortex-blue/5 blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-10 left-10 -z-10 h-72 w-72 rounded-full bg-vortex-cyan/5 blur-3xl animate-pulse-glow" style={{ animationDelay: "3s" }}></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center space-x-2 rounded-full border border-vortex-blue/30 bg-vortex-blue/5 px-3 py-1 text-xs font-semibold tracking-wide text-vortex-cyan uppercase mb-4">
            <span>Remote Internship Programs 2026</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Our Internship{" "}
            <span className="bg-gradient-to-r from-vortex-blue to-vortex-cyan bg-clip-text text-transparent">
              Tracks
            </span>
          </h1>
          <p className="mt-4 text-lg text-slate-400">
            Select a specialized track. Each course is carefully mapped to present realistic corporate engineering workflows and features.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 md:max-w-none md:grid-cols-2 lg:grid-cols-3">
          {tracksList.map((track) => (
            <div
              key={track.id}
              className="flex flex-col justify-between rounded-2xl bg-card-bg p-6 border border-card-border hover:glow-border-cyan transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium border ${track.badgeColor}`}>
                    {track.level}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {track.duration}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-white">
                  {track.name}
                </h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                  {track.description}
                </p>

                {/* Skills tags */}
                <div className="mt-6">
                  <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Core Skills Covered
                  </h4>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {track.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center rounded-md bg-slate-900 px-2 py-1 text-xs font-medium text-slate-400 ring-1 ring-inset ring-slate-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800">
                <Link
                  href={`/apply?track=${track.id}`}
                  className="block text-center text-sm font-semibold text-vortex-cyan hover:text-white hover:bg-vortex-cyan/15 rounded-md py-2.5 border border-vortex-cyan/30 hover:border-vortex-cyan transition-all shadow-sm"
                >
                  Apply For This Track
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
