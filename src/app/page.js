import Link from "next/link";

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden">
      {/* Decorative Background Glows */}
      <div className="absolute top-20 left-1/4 -z-10 h-72 w-72 rounded-full bg-vortex-blue/10 blur-3xl animate-pulse-glow"></div>
      <div className="absolute top-40 right-1/4 -z-10 h-96 w-96 rounded-full bg-vortex-cyan/10 blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }}></div>

      {/* Hero Section */}
      <section className="relative px-6 pt-20 pb-24 sm:pt-32 lg:px-8 lg:pb-32">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 rounded-full border border-vortex-cyan/30 bg-vortex-cyan/5 px-3 py-1 text-xs font-semibold tracking-wide text-vortex-cyan uppercase">
            <span>Now Accepting Applications for 2026</span>
          </div>

          <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Real Projects.{" "}
            <span className="block mt-2 bg-gradient-to-r from-vortex-blue via-vortex-cyan to-vortex-cyan bg-clip-text text-transparent">
              Real Skills. Real Growth.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">
            Vortex Tech provides hands-on IT internships with real project work, individual mentorship, and performance-based certificates. Build a portfolio that stands out.
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSeG5BMlK39BVkMVnqvXkJhEVO98Kj1Mmz2fXNf9i55OxS08-A/viewform?usp=header"
              target="_blank" rel="noopener noreferrer"
              className="rounded-md bg-gradient-to-r from-vortex-blue to-vortex-cyan px-8 py-3.5 text-base font-semibold text-white shadow-lg glow-button-blue"
            >
              Apply Now
            </Link>
            <Link
              href="/tracks"
              className="rounded-md border border-slate-700 hover:border-vortex-cyan px-8 py-3.5 text-base font-semibold text-slate-300 hover:text-white transition-all bg-slate-900/50 backdrop-blur"
            >
              Explore Tracks &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 border-t border-slate-900">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">How It Works</h2>
          <p className="mt-4 text-base text-slate-400">
            A comprehensive, 4-step project cycle designed to replicate actual IT workloads in top companies.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {[
            {
              step: "01",
              title: "Apply",
              desc: "Select your track (Web Dev, AI&ML, App Dev), submit your details, and state your learning goals.",
            },
            {
              step: "02",
              title: "Get Project Brief",
              desc: "Get assigned to a structured repository containing professional requirements and feature specs.",
            },
            {
              step: "03",
              title: "Submit on GitHub",
              desc: "Write clean code, structure commits, and open pull requests. Experience realistic workflow standards.",
            },
            {
              step: "04",
              title: "Get Reviewed & Certified",
              desc: "Get line-by-line code reviews from experts. Earn verification certificates and letters of recommendation.",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="flex flex-col rounded-2xl bg-card-bg p-6 border border-card-border hover:border-vortex-cyan/40 transition-all duration-300 group"
            >
              <span className="text-3xl font-extrabold text-vortex-cyan/35 group-hover:text-vortex-cyan transition-colors">
                {item.step}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-white group-hover:text-vortex-cyan transition-colors">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Vortex Tech Section */}
      <section className="bg-[#070b14]/50 py-20 border-t border-slate-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Why Vortex Tech?</h2>
            <p className="mt-4 text-base text-slate-400">
              We bridge the gap between academic theory and industry reality. Here is what makes us different:
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {[
              {
                title: "Real Client Projects",
                desc: "Work on functional products, APIs, and interfaces. Solve production issues, handle databases, and deploy live apps rather than doing standard homework exercises.",
                icon: (
                  <svg className="h-6 w-6 text-vortex-cyan" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                  </svg>
                ),
              },
              {
                title: "Individual Expert Reviews",
                desc: "No automated copy-paste grading. Senior developers manually inspect your commits and PRs, pointing out performance improvements, design flaws, and architectural tips.",
                icon: (
                  <svg className="h-6 w-6 text-vortex-cyan" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: "Verified GitHub Portfolio",
                desc: "Your code contributions are logged on public git repositories, proving to recruiters that you can write production-level logic, use branch management, and handle peer collaboration.",
                icon: (
                  <svg className="h-6 w-6 text-vortex-cyan" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.008 1.24l.885 1.77a2.25 2.25 0 002.007 1.24h1.98a2.25 2.25 0 002.007-1.24l.885-1.77a2.25 2.25 0 012.007-1.24h3.86m-18 0h18" />
                  </svg>
                ),
              },
              {
                title: "Top-Tier Certifications & Recommendations",
                desc: "Receive shareable digital certificates on completion. Outstanding performers (top 10%) are awarded direct letters of recommendation from our engineering leads.",
                icon: (
                  <svg className="h-6 w-6 text-vortex-cyan" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A5.905 5.905 0 018 3.988.49.49 0 018 4.5v.793c.026.009.051.02.076.032z" />
                  </svg>
                ),
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="flex items-start space-x-4 rounded-xl bg-card-bg p-6 border border-card-border hover:border-vortex-blue/30 transition-all duration-300"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-slate-900 border border-slate-800">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{benefit.title}</h3>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tracks Preview Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 border-t border-slate-900">
        <div className="flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Featured Tracks</h2>
            <p className="mt-4 text-base text-slate-400 max-w-xl">
              Apply to specific disciplines. Expand your skills under guidance with structured curriculums.
            </p>
          </div>
          <Link
            href="/tracks"
            className="mt-6 md:mt-0 text-sm font-semibold text-vortex-cyan hover:underline inline-flex items-center space-x-1"
          >
            <span>View All Tracks</span>
            <span>&rarr;</span>
          </Link>
        </div>

        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {[
            {
              title: "Web Development",
              desc: "Master modern frontend frameworks like React and Next.js, along with robust API endpoints and MongoDB/PostgreSQL integrations.",
              level: "Intermediate",
              badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
            },
            {
              title: "AI&ML",
              desc: "Work on neural networks, pipeline orchestration, natural language processing, and predictive models using TensorFlow and PyTorch.",
              level: "Advanced",
              badgeColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
            },
            {
              title: "App Development",
              desc: "Create cross-platform mobile apps for iOS and Android. Master state management, responsive UI, and robust API integrations.",
              level: "Intermediate",
              badgeColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
            },
          ].map((track) => (
            <div
              key={track.title}
              className="flex flex-col justify-between rounded-2xl bg-card-bg p-6 border border-card-border hover:glow-border-cyan transition-all duration-300"
            >
              <div>
                <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium border ${track.badgeColor}`}>
                  {track.level}
                </span>
                <h3 className="mt-4 text-xl font-bold text-white">{track.title}</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{track.desc}</p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-800">
                <Link
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeG5BMlK39BVkMVnqvXkJhEVO98Kj1Mmz2fXNf9i55OxS08-A/viewform?usp=header"
                  target="_blank" rel="noopener noreferrer"
                  className="block text-center text-sm font-semibold text-vortex-cyan hover:text-white hover:bg-vortex-cyan/15 rounded-md py-2 border border-vortex-cyan/30 hover:border-vortex-cyan transition-all"
                >
                  Apply For This Track
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

