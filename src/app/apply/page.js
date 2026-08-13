"use client";

export default function ApplyPage() {
  const track = {
    id: "video-editing",
    name: "Video Editing",
    description: "Master video post-production, motion graphics, and audio editing. Edit high-quality promotional materials, educational content, and corporate reels.",
    level: "Beginner",
    duration: "12 Weeks",
    skills: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Color Grading", "Audio Design", "Visual Storytelling"],
    badgeColor: "text-teal-400 bg-teal-500/10 border-teal-500/20",
  };

  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSehVgrR9dUh521Tae9VV1-T0AUg_S8oyJYYcTrQJdQA4sJ6Rw/viewform?usp=header";

  return (
    <div className="relative isolate py-16 sm:py-24 overflow-hidden">
      {/* Background Decorative Circles */}
      <div className="absolute top-20 right-10 -z-10 h-72 w-72 rounded-full bg-vortex-blue/5 blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-10 left-10 -z-10 h-72 w-72 rounded-full bg-vortex-cyan/5 blur-3xl animate-pulse-glow" style={{ animationDelay: "3s" }}></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <div className="inline-flex items-center space-x-2 rounded-full border border-vortex-blue/30 bg-vortex-blue/5 px-3 py-1 text-xs font-semibold tracking-wide text-vortex-cyan uppercase mb-4">
            <span>Vortex Tech Admissions 2026</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Start Your{" "}
            <span className="bg-gradient-to-r from-vortex-blue to-vortex-cyan bg-clip-text text-transparent">
              Application
            </span>
          </h1>
          <p className="mt-4 text-lg text-slate-400">
            Admissions are currently open exclusively for the Video Editing Internship track.
          </p>
        </div>

        {/* Centered Available Program Card */}
        <div className="flex justify-center">
          <div className="rounded-2xl bg-card-bg p-8 border border-card-border shadow-2xl relative overflow-hidden max-w-lg w-full transition-all duration-300 hover:border-vortex-cyan/40">
            <div className="absolute -right-16 -top-16 w-32 h-32 rounded-full bg-vortex-blue/10 blur-2xl"></div>
            
            <div className="flex items-center justify-between mb-4">
              <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border ${track.badgeColor}`}>
                {track.level}
              </span>
              <span className="text-xs text-slate-500 font-medium">
                {track.duration}
              </span>
            </div>

            <h2 className="text-2xl font-bold text-white mb-2">{track.name}</h2>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              {track.description}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">
                Core Skills Covered
              </h4>
              <div className="flex flex-wrap gap-1.5">
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

            <div className="pt-6 border-t border-slate-800">
              <a
                href={googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center rounded-md bg-gradient-to-r from-vortex-blue to-vortex-cyan py-3.5 text-sm font-semibold text-white shadow-lg glow-button-blue hover:brightness-110 transition-all"
              >
                Apply Now &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
