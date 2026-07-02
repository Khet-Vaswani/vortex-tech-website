import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return [
    { slug: "design-challenge-2026" }
  ];
}

export default async function ChallengeDetailPage({ params }) {
  const { slug } = await params;

  // We currently only support the 2026 Design Challenge
  if (slug !== "design-challenge-2026") {
    notFound();
  }

  return (
    <div className="relative isolate py-20 lg:py-28 overflow-hidden">
      {/* Decorative Background Glows */}
      <div className="absolute top-20 right-1/4 -z-10 h-96 w-96 rounded-full bg-vortex-blue/10 blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-20 left-1/4 -z-10 h-96 w-96 rounded-full bg-vortex-cyan/10 blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }}></div>

      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/programs/challenges"
          className="inline-flex items-center text-xs font-semibold text-vortex-cyan hover:underline mb-8"
        >
          &larr; Back to Challenges
        </Link>

        {/* Header/Banner */}
        <div className="rounded-2xl border border-card-border bg-[#0d1527] p-8 sm:p-12 mb-10 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-vortex-cyan/10 blur-2xl"></div>
          <div className="relative">
            <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-vortex-cyan/10 text-vortex-cyan border border-vortex-cyan/20 uppercase tracking-wider">
              Graphic & UI/UX Design
            </span>
            <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              🎨 Vortex Tech Design Challenge 2026
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
              Showcase your creative skills. Open to students, freelancers, and hobbyists. Design high-fidelity portfolio user interfaces or clean marketing campaign graphics using Canva, Photoshop, Illustrator, or Figma.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#"
                className="rounded-md bg-gradient-to-r from-vortex-blue to-vortex-cyan px-6 py-3 text-sm font-bold text-white shadow-lg glow-button-blue"
              >
                Register Here (₨ 299 Fee)
              </a>
              <div className="inline-flex items-center text-xs text-slate-400">
                Deadline: <span className="text-white ml-1 font-semibold">July 10, 2026</span>
              </div>
            </div>
          </div>
        </div>

        {/* Prize Structure & Fee Transparency */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Prize structure */}
          <div className="rounded-xl bg-card-bg p-6 border border-card-border">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🏆 Prize Structure
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-xl">🥇</span>
                <div>
                  <h4 className="text-sm font-semibold text-white">Top 3 Winners</h4>
                  <p className="text-xs text-slate-400">Cash Prizes (Funded by registration fees) + Certificate of Achievement</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">🥈</span>
                <div>
                  <h4 className="text-sm font-semibold text-white">Next 20 Performers</h4>
                  <p className="text-xs text-slate-400">Certificate of Achievement & featured placement on Vortex showcase</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">🎖️</span>
                <div>
                  <h4 className="text-sm font-semibold text-white">All Valid Entries</h4>
                  <p className="text-xs text-slate-400">Official Certificate of Participation for your GitHub/LinkedIn portfolio</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Fee transparency card */}
          <div className="rounded-xl bg-card-bg p-6 border border-card-border flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                💰 Registration Fee & Transparency
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                To keep our contests competitive and ensure premium reviews, a registration fee of <strong className="text-white">₨ 299</strong> is required.
              </p>
              <div className="rounded-lg bg-slate-950 p-4 border border-slate-900 text-xs text-slate-400 leading-relaxed">
                <strong className="text-vortex-cyan">Transparency Note:</strong> The prize pool is funded directly by registration fees. The more entries we receive, the bigger the cash rewards for the winners!
              </div>
            </div>
          </div>
        </div>

        {/* How It Works (4-Step Process) */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
            {[
              { step: "1", name: "Register", desc: "Pay the ₨ 299 entry fee and fill out the registration form." },
              { step: "2", name: "Receive Brief", desc: "Get an email with the UI design requirements and asset criteria." },
              { step: "3", name: "Submit", desc: "Upload and submit your design deliverables before the deadline." },
              { step: "4", name: "Get Scored", desc: "Top entries are reviewed, scored, and winners announced." }
            ].map((s) => (
              <div key={s.step} className="rounded-xl bg-[#090e1a] p-5 border border-slate-900 flex flex-col items-start">
                <span className="text-xs font-bold text-vortex-cyan bg-vortex-cyan/5 px-2 py-0.5 rounded border border-vortex-cyan/20 mb-3">
                  Step {s.step}
                </span>
                <h4 className="text-sm font-semibold text-white mb-1">{s.name}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Terms & FAQ */}
        <div className="rounded-xl bg-card-bg p-6 border border-card-border mb-12">
          <h2 className="text-xl font-bold text-white mb-4">Terms & FAQ</h2>
          <div className="space-y-4 text-xs text-slate-400 leading-relaxed">
            <p>
              <strong>Refund Policy:</strong> Registration fees are non-refundable, as they go directly into securing the reviewer schedules and funding the collective prize pool.
            </p>
            <p>
              <strong>Submission Rules:</strong> All designs must be original work. Submission templates and formats will be shared in the brief. Plagiarism results in immediate disqualification.
            </p>
            <p>
              <strong>Fee Usage:</strong> 100% of accumulated entry fees (minus payment portal processing charges) go directly towards the cash prize pool and operational cost of reviewer scorecards.
            </p>
          </div>
        </div>

        {/* Past Winners Showcase (Empty State) */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Past Winners</h2>
          <div className="rounded-xl border border-dashed border-slate-800 p-8 text-center">
            <svg className="mx-auto h-12 w-12 text-slate-600 mb-3" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
            </svg>
            <h4 className="text-sm font-semibold text-slate-400">No Winners Yet</h4>
            <p className="text-xs text-slate-500 mt-1">This is our inaugural design challenge for 2026. Register now to claim your spot on the leaderboard!</p>
          </div>
        </div>

      </div>
    </div>
  );
}
