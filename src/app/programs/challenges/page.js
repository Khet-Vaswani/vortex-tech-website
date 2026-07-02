import Link from "next/link";

export default function ChallengesPage() {
  const challenges = [
    {
      slug: "design-challenge-2026",
      title: "Vortex Tech Design Challenge 2026",
      pitch: "Showcase your UI/UX and graphic design talent. Design our next-gen developer portfolio interfaces or marketing creatives using Canva, Photoshop, Illustrator, or Figma.",
      prize: " Cash Prizes & Certificates",
      deadline: "July 31, 2026",
      status: "Active",
      statusColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    }
  ];

  return (
    <div className="relative isolate py-20 lg:py-28 overflow-hidden">
      {/* Decorative Background Glows */}
      <div className="absolute top-20 left-10 -z-10 h-72 w-72 rounded-full bg-vortex-blue/5 blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-20 right-10 -z-10 h-72 w-72 rounded-full bg-vortex-cyan/5 blur-3xl animate-pulse-glow" style={{ animationDelay: "2.5s" }}></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex items-center space-x-2 rounded-full border border-vortex-cyan/30 bg-vortex-cyan/5 px-3 py-1 text-xs font-semibold tracking-wide text-vortex-cyan uppercase mb-4">
            <span>Showcase & Compete</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Vortex Tech{" "}
            <span className="bg-gradient-to-r from-vortex-blue to-vortex-cyan bg-clip-text text-transparent">
              Challenges
            </span>
          </h1>
          <p className="mt-4 text-lg text-slate-400">
            Participate in design and coding hackathons, build outstanding prototypes, and earn cash prizes alongside expert certificates.
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-6">
          {challenges.map((challenge) => (
            <div
              key={challenge.slug}
              className="relative flex flex-col justify-between rounded-2xl bg-card-bg p-8 border border-card-border hover:glow-border-cyan transition-all duration-300"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold border ${challenge.statusColor}`}>
                  {challenge.status}
                </span>
                <span className="text-sm text-slate-500">
                  Deadline: <span className="text-slate-300 font-semibold">{challenge.deadline}</span>
                </span>
              </div>

              <h2 className="text-2xl font-extrabold text-white mb-3">
                {challenge.title}
              </h2>

              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {challenge.pitch}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 px-5 rounded-lg bg-slate-950/80 border border-slate-900 mb-6">
                <div>
                  <span className="block text-xs uppercase tracking-wider text-slate-500 font-semibold">Prize Highlight</span>
                  <span className="text-white text-base font-bold">{challenge.prize}</span>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-slate-500 font-semibold">Entry Requirement</span>
                  <span className="text-white text-base font-bold">Open to all (₨ 299 Registration)</span>
                </div>
              </div>

              <div className="flex justify-end">
                <Link
                  href={`/programs/challenges/${challenge.slug}`}
                  className="rounded-md bg-gradient-to-r from-vortex-blue to-vortex-cyan px-6 py-2.5 text-sm font-semibold text-white shadow-lg glow-button-blue"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
