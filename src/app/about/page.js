import Link from "next/link";

export default function About() {
  return (
    <div className="relative isolate py-20 lg:py-28 overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-20 left-1/4 -z-10 h-72 w-72 rounded-full bg-vortex-blue/5 blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-10 right-1/4 -z-10 h-72 w-72 rounded-full bg-vortex-cyan/5 blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }}></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header & Mission */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Our{" "}
            <span className="bg-gradient-to-r from-vortex-blue to-vortex-cyan bg-clip-text text-transparent">
              Mission
            </span>
          </h1>
          <p className="mt-6 text-lg text-slate-300 leading-relaxed">
            At Vortex Tech, we believe that real IT expertise is built by writing real code. Our mission is to bridge the gap between classroom computer science education and professional industry environments. We provide students in Pakistan and globally with realistic, project-focused internships that yield solid portfolios, verified git contributions, and the skills needed to launch successful tech careers.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mx-auto max-w-5xl mb-24 rounded-2xl bg-card-bg p-8 border border-card-border">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-3 text-center">
            <div className="flex flex-col items-center">
              <dt className="text-sm font-semibold leading-6 text-slate-400 uppercase tracking-wider">Active Interns</dt>
              <dd className="mt-2 text-4xl font-extrabold tracking-tight text-vortex-cyan glow-text-cyan">500+</dd>
            </div>
            <div className="flex flex-col items-center border-y border-slate-800 py-6 sm:border-y-0 sm:border-x sm:py-0 sm:px-8">
              <dt className="text-sm font-semibold leading-6 text-slate-400 uppercase tracking-wider">PRs Reviewed</dt>
              <dd className="mt-2 text-4xl font-extrabold tracking-tight text-white">4,200+</dd>
            </div>
            <div className="flex flex-col items-center">
              <dt className="text-sm font-semibold leading-6 text-slate-400 uppercase tracking-wider">Career Placement</dt>
              <dd className="mt-2 text-4xl font-extrabold tracking-tight text-vortex-cyan glow-text-cyan">85%</dd>
            </div>
          </dl>
        </div>

        {/* What Makes Us Different */}
        <div className="mx-auto max-w-5xl mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-white">What Makes Us Different</h2>
            <p className="mt-2 text-slate-400 text-sm">We focus on depth, quality, and realistic software practices.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "1. Real Projects, No Tutorials",
                desc: "We skip generic slide-show tasks. You are assigned to build functional features, debug database indexing, and write integration suites for real platforms.",
              },
              {
                title: "2. Personal Peer Review",
                desc: "Every line of code you submit is manually reviewed by experienced devs who look at efficiency, architecture patterns, and styling.",
              },
              {
                title: "3. Direct Git Workflows",
                desc: "All work is completed via GitHub fork-PR queues. You learn how to write commit summaries, isolate feature branches, and fix feedback.",
              },
            ].map((diff) => (
              <div
                key={diff.title}
                className="rounded-xl border border-card-border bg-slate-900/50 p-6 hover:border-vortex-cyan/35 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-white mb-3">{diff.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{diff.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Approach Section */}
        <div className="mx-auto max-w-5xl rounded-2xl bg-gradient-to-r from-slate-900 to-[#070b14] border border-slate-800 p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Our Approach</h2>
              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                We design our curriculums to match the expectations of top software engineering firms. Interns operate as junior software developers: receiving ticket specifications, coding independently, and incorporating constructive criticism.
              </p>
              <p className="mt-3 text-sm text-slate-400">
                This active-learning, feedback-driven structure builds self-reliance, technical articulation, and solid development habits.
              </p>
              <div className="mt-6">
                <Link
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeG5BMlK39BVkMVnqvXkJhEVO98Kj1Mmz2fXNf9i55OxS08-A/viewform?usp=header"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-vortex-blue to-vortex-cyan px-5 py-2.5 text-sm font-semibold text-white shadow-lg glow-button-blue"
                >
                  Join Vortex Tech &rarr;
                </Link>
              </div>
            </div>
            {/* Visual Grid representing code pipelines */}
            <div className="relative border border-slate-850 rounded-xl bg-slate-950 p-6 font-mono text-xs text-slate-400 shadow-inner">
              <div className="flex items-center space-x-2 border-b border-slate-900 pb-3 mb-3">
                <div className="h-3 w-3 rounded-full bg-red-500/80"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500/80"></div>
                <div className="h-3 w-3 rounded-full bg-green-500/80"></div>
                <span className="text-[10px] text-slate-600 pl-2">vortex-pipeline.yml</span>
              </div>
              <div className="space-y-1">
                <p><span className="text-vortex-cyan">stages:</span></p>
                <p className="pl-4"><span className="text-slate-500">- lint_checks</span></p>
                <p className="pl-4"><span className="text-slate-500">- project_build</span></p>
                <p className="pl-4"><span className="text-vortex-cyan">- peer_review</span></p>
                <p className="pl-4"><span className="text-slate-500">- cert_generation</span></p>
                <div className="h-2"></div>
                <p><span className="text-slate-500"># Pipeline Status</span></p>
                <p className="text-emerald-400"><span className="text-slate-400">Lint:</span> PASS</p>
                <p className="text-emerald-400"><span className="text-slate-400">Build:</span> SUCCESS</p>
                <p className="text-vortex-cyan"><span className="text-slate-400">Code Quality:</span> APPROVED (2 LGTM)</p>
                <p className="text-emerald-400"><span className="text-slate-400">Certificate ID:</span> VT-2026-VERIFIED</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
