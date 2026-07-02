import Link from "next/link";

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden">
      {/* Decorative Background Glows */}
      <div className="absolute top-20 left-1/4 -z-10 h-72 w-72 rounded-full bg-vortex-blue/10 blur-3xl animate-pulse-glow"></div>
      <div className="absolute top-40 right-1/4 -z-10 h-96 w-96 rounded-full bg-vortex-cyan/10 blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }}></div>

      {/* Featured Banner/Strip */}
      <div className="bg-gradient-to-r from-vortex-blue/20 via-slate-900 to-vortex-cyan/20 border-b border-slate-800 py-3 px-4 text-center">
        <Link 
          href="/programs/challenges/design-challenge-2026"
          className="inline-flex items-center space-x-2 text-sm font-semibold text-vortex-cyan hover:text-white transition-colors"
        >
          <span className="flex h-2 w-2 rounded-full bg-vortex-cyan animate-ping"></span>
          <span>Featured: Vortex Tech Design Challenge 2026 — Register Now &rarr;</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative px-6 pt-16 pb-20 sm:pt-24 lg:px-8 lg:pb-24">
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

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400 sm:text-xl">
            Vortex Tech bridges the gap between talent and industry. Launch your career with hands-on IT internships, prove your capability in national design challenges, or partner with us for premium IT consulting and digital transformation services.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/apply"
              className="rounded-md bg-gradient-to-r from-vortex-blue to-vortex-cyan px-8 py-3.5 text-base font-semibold text-white shadow-lg glow-button-blue"
            >
              Apply Now
            </Link>
            <Link
              href="/programs/internships"
              className="rounded-md border border-slate-700 hover:border-vortex-cyan px-8 py-3.5 text-base font-semibold text-slate-300 hover:text-white transition-all bg-slate-900/50 backdrop-blur"
            >
              Explore Programs &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 border-t border-slate-900/80">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">What We Offer</h2>
          <p className="mt-4 text-base text-slate-400">
            Tailored pathways designed for students, developers, and businesses alike.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-3">
          {[
            {
              title: "Internships",
              desc: "Project-based tracks in software engineering, AI, cyber security, and design.",
              link: "/programs/internships",
              linkText: "Learn More",
              icon: (
                <svg className="h-8 w-8 text-vortex-cyan" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A5.905 5.905 0 018 3.988.49.49 0 018 4.5v.793c.026.009.051.02.076.032z" />
                </svg>
              ),
            },
            {
              title: "Challenges & Competitions",
              desc: "Compete in live coding and design challenges. Earn cash prizes and showcase your work.",
              link: "/programs/challenges",
              linkText: "Explore Challenges",
              icon: (
                <svg className="h-8 w-8 text-vortex-cyan" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.504-1.125-1.125-1.125h-.75a1.125 1.125 0 01-1.125-1.125V11.25M10.5 7.5a3 3 0 116 0c0 .332-.054.65-.154.949m-5.696-2.899c.3-.921.755-1.78 1.345-2.525M12 21a9.003 9.003 0 008.354-5.646 9.003 9.003 0 00-8.354.646V21z" />
                </svg>
              ),
            },
            {
              title: "IT Consulting & Services",
              desc: "Enterprise-grade development, systems architecture, and managed IT services.",
              link: "/services",
              linkText: "Our Services",
              icon: (
                <svg className="h-8 w-8 text-vortex-cyan" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h18v3H3V3z" />
                </svg>
              ),
            },
          ].map((card) => (
            <div
              key={card.title}
              className="flex flex-col justify-between rounded-2xl bg-card-bg p-6 border border-card-border hover:border-vortex-cyan/40 transition-all duration-300 group"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-900 border border-slate-800 mb-5">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-vortex-cyan transition-colors">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{card.desc}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800/60">
                <Link
                  href={card.link}
                  className="text-xs font-semibold text-vortex-cyan hover:text-white transition-colors flex items-center space-x-1"
                >
                  <span>{card.linkText}</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 border-t border-slate-900">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">How It Works</h2>
          <p className="mt-4 text-base text-slate-400">
            A structured project lifecycle (primarily designed for our student internships) to simulate production environment conditions.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {[
            {
              step: "01",
              title: "Apply",
              desc: "Select your track, submit details, and specify learning goals on our application page.",
            },
            {
              step: "02",
              title: "Get Project Brief",
              desc: "Receive structured repositories detailing industry-standard feature specifications.",
            },
            {
              step: "03",
              title: "Submit on GitHub",
              desc: "Write clean code, structure commits, and open pull requests for realistic code workflows.",
            },
            {
              step: "04",
              title: "Get Reviewed & Certified",
              desc: "Earn code reviews, a shareable digital certificate, and recommendation letters for top performers.",
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

      {/* Programs Preview Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 border-t border-slate-900">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Explore Vortex Programs</h2>
            <p className="mt-4 text-base text-slate-400 max-w-xl">
              Gain professional experience through guided internship tracks, or test your design capabilities in global challenges.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Internships Preview Card */}
          <div className="flex flex-col justify-between rounded-2xl bg-card-bg p-8 border border-card-border hover:glow-border-cyan transition-all duration-300">
            <div>
              <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Internships
              </span>
              <h3 className="mt-4 text-2xl font-bold text-white">IT Internship Tracks</h3>
              <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                Structured 8-to-16-week remote tracks designed to mimic modern development environments. Tracks include Web Dev, AI & Data, Software Engineering, Cyber Security, and UI/UX.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-slate-800">
              <Link
                href="/programs/internships"
                className="block text-center text-sm font-semibold text-vortex-cyan hover:text-white hover:bg-vortex-cyan/15 rounded-md py-2.5 border border-vortex-cyan/30 hover:border-vortex-cyan transition-all"
              >
                Browse Internship Tracks &rarr;
              </Link>
            </div>
          </div>

          {/* Challenges Preview Card */}
          <div className="flex flex-col justify-between rounded-2xl bg-card-bg p-8 border border-card-border hover:glow-border-cyan transition-all duration-300">
            <div>
              <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                Challenges
              </span>
              <h3 className="mt-4 text-2xl font-bold text-white">Design & Coding Competitions</h3>
              <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                Compete against designers and engineers globally to build stunning products and win cash prizes. Showcase your capabilities to top-tier employers.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-slate-800">
              <Link
                href="/programs/challenges"
                className="block text-center text-sm font-semibold text-vortex-cyan hover:text-white hover:bg-vortex-cyan/15 rounded-md py-2.5 border border-vortex-cyan/30 hover:border-vortex-cyan transition-all"
              >
                View Active Challenges &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
