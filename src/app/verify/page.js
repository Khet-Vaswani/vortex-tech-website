"use client";

import { useState } from "react";

// Mock Certificate Data
const MOCK_CERTIFICATES = [
  {
    id: "VT-2026-001",
    studentName: "Muhammad Ali",
    track: "Web Development",
    completionDate: "2026-05-15",
    grade: "A+",
    credentialUrl: "https://github.com/vortex-tech/portfolios/ali",
  },
  {
    id: "VT-2026-002",
    studentName: "Fatima Zahra",
    track: "AI & Data Science",
    completionDate: "2026-05-20",
    grade: "A",
    credentialUrl: "https://github.com/vortex-tech/portfolios/fatima",
  },
  {
    id: "VT-2026-003",
    studentName: "Zainab Bibi",
    track: "Software Engineering",
    completionDate: "2026-06-01",
    grade: "A+",
    credentialUrl: "https://github.com/vortex-tech/portfolios/zainab",
  },
  {
    id: "VT-2026-004",
    studentName: "Haris Khan",
    track: "Cybersecurity",
    completionDate: "2026-06-10",
    grade: "B+",
    credentialUrl: "https://github.com/vortex-tech/portfolios/haris",
  },
  {
    id: "VT-2026-005",
    studentName: "Aisha Ahmed",
    track: "UI/UX Design",
    completionDate: "2026-06-15",
    grade: "A+",
    credentialUrl: "https://github.com/vortex-tech/portfolios/aisha",
  },
];

export default function Verify() {
  const [certId, setCertId] = useState("");
  const [result, setResult] = useState(null); // 'valid', 'not-found', null
  const [certData, setCertData] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!certId.trim()) return;

    setHasSearched(true);
    const found = MOCK_CERTIFICATES.find(
      (c) => c.id.toUpperCase() === certId.trim().toUpperCase()
    );

    if (found) {
      setResult("valid");
      setCertData(found);
    } else {
      setResult("not-found");
      setCertData(null);
    }
  };

  const clearSearch = () => {
    setCertId("");
    setResult(null);
    setCertData(null);
    setHasSearched(false);
  };

  return (
    <div className="relative isolate py-20 lg:py-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-1/4 -z-10 h-72 w-72 rounded-full bg-vortex-blue/5 blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-10 right-1/4 -z-10 h-72 w-72 rounded-full bg-vortex-cyan/5 blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }}></div>

      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Verify{" "}
            <span className="bg-gradient-to-r from-vortex-blue to-vortex-cyan bg-clip-text text-transparent">
              Certificates
            </span>
          </h1>
          <p className="mt-4 text-base text-slate-400">
            Enter the unique credential identifier (e.g., VT-2026-001) to verify the authenticity of certificates issued by Vortex Tech.
          </p>
        </div>

        {/* Search Bar Form */}
        <div className="mx-auto max-w-md">
          <form onSubmit={handleSearch} className="flex gap-x-3">
            <label htmlFor="search-id" className="sr-only">
              Certificate ID
            </label>
            <input
              id="search-id"
              type="text"
              required
              value={certId}
              onChange={(e) => setCertId(e.target.value)}
              placeholder="e.g. VT-2026-001"
              className="min-w-0 flex-auto rounded-md border border-slate-800 bg-slate-950 px-4 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-vortex-cyan focus:border-transparent"
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-gradient-to-r from-vortex-blue to-vortex-cyan px-6 py-2.5 text-sm font-semibold text-white shadow-lg glow-button-blue"
            >
              Verify
            </button>
          </form>

          {/* Quick Helper */}
          {!hasSearched && (
            <p className="mt-3 text-center text-xs text-slate-500">
              Try testing with: <span className="text-slate-400 font-mono">VT-2026-001</span> or <span className="text-slate-400 font-mono">VT-2026-003</span>
            </p>
          )}
        </div>

        {/* Result Area */}
        <div className="mx-auto mt-12 max-w-2xl">
          {result === "valid" && certData && (
            <div className="rounded-2xl border border-emerald-500/30 bg-card-bg p-8 shadow-2xl relative overflow-hidden transition-all duration-300">
              {/* Green glow background */}
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-emerald-500/10 blur-xl"></div>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-800 pb-6 mb-6">
                <div>
                  <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400 ring-1 ring-inset ring-emerald-500/20">
                    ✓ Valid Credential
                  </span>
                  <p className="mt-2 text-xs text-slate-500 font-mono">ID: {certData.id}</p>
                </div>
                <button
                  onClick={clearSearch}
                  className="mt-4 sm:mt-0 text-xs text-slate-400 hover:text-white"
                >
                  Clear Results
                </button>
              </div>

              {/* Certificate details design */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">Recipient Name</h3>
                  <p className="mt-1 text-base font-bold text-white">{certData.studentName}</p>
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">Internship Track</h3>
                  <p className="mt-1 text-base font-bold text-vortex-cyan">{certData.track}</p>
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">Completion Date</h3>
                  <p className="mt-1 text-slate-300">{certData.completionDate}</p>
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">Grade Achieved</h3>
                  <p className="mt-1 font-semibold text-emerald-400">{certData.grade}</p>
                </div>
                <div className="md:col-span-2 pt-4 border-t border-slate-800/50 mt-2">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">GitHub Contributions</h3>
                  <a
                    href={certData.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 text-xs text-vortex-cyan hover:underline inline-flex items-center space-x-1"
                  >
                    <span>View verified repository fork</span>
                    <span>&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          )}

          {result === "not-found" && (
            <div className="rounded-2xl border border-red-500/30 bg-card-bg p-8 shadow-2xl text-center relative overflow-hidden transition-all duration-300">
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-red-500/10 blur-xl"></div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-500/10 text-red-400 mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-white">Certificate Not Found</h2>
              <p className="mt-2 text-sm text-slate-400">
                We could not find any credentials matching the ID <span className="font-mono text-slate-200">#{certId}</span>. Please verify that you entered the ID correctly.
              </p>
              <button
                onClick={clearSearch}
                className="mt-6 rounded-md border border-slate-800 bg-slate-950 px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
