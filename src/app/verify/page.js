"use client";

import { useState } from "react";

// Mock Certificate Data
const MOCK_CERTIFICATES = [
  {
    id: "VT-2026-07-01",
    studentName: "Muhammad Saad",
    track: "AI & ML",
    completionDate: "2026-07-31",
    grade: "A",
    credentialUrl: "https://github.com/vortex-tech",
  },
  {
    id: "VT-2026-07-02",
    studentName: "Muhammad Zaid Akram",
    track: "AI & ML",
    completionDate: "2026-07-31",
    grade: "A",
    credentialUrl: "https://github.com/vortex-tech",
  },
  {
    id: "VT-2026-07-03",
    studentName: "Haider Ud Din",
    track: "Web Development",
    completionDate: "2026-07-31",
    grade: "A",
    credentialUrl: "https://github.com/vortex-tech",
  },
  {
    id: "VT-2026-07-04",
    studentName: "Hazrat Umar",
    track: "Web Development",
    completionDate: "2026-07-31",
    grade: "A",
    credentialUrl: "https://github.com/vortex-tech",
  },
  {
    id: "VT-2026-07-05",
    studentName: "Abdul Rafey Hassan",
    track: "Cyber Security",
    completionDate: "2026-07-31",
    grade: "A",
    credentialUrl: "https://github.com/vortex-tech",
  },
  {
    id: "VT-2026-07-06",
    studentName: "Abdullah Zubair",
    track: "Cyber Security",
    completionDate: "2026-07-31",
    grade: "A",
    credentialUrl: "https://github.com/vortex-tech",
  },
  {
    id: "VT-2026-07-07",
    studentName: "Muhammad Umar Azeem",
    track: "App Development",
    completionDate: "2026-07-31",
    grade: "A",
    credentialUrl: "https://github.com/vortex-tech",
  },
  {
    id: "VT-2026-07-08",
    studentName: "Junaid Ali",
    track: "Web Development",
    completionDate: "2026-07-31",
    grade: "A",
    credentialUrl: "https://github.com/vortex-tech",
  },
  {
    id: "VT-2026-07-09",
    studentName: "Abdul Rehman",
    track: "AI & ML",
    completionDate: "2026-07-31",
    grade: "A",
    credentialUrl: "https://github.com/vortex-tech",
  },
  {
    id: "VT-2026-07-10",
    studentName: "Sarim Ahmed",
    track: "AI & ML",
    completionDate: "2026-07-31",
    grade: "A",
    credentialUrl: "https://github.com/vortex-tech",
  },
  {
    id: "VT-2026-07-11",
    studentName: "Muhammad Yasir",
    track: "AI & ML",
    completionDate: "2026-07-31",
    grade: "A",
    credentialUrl: "https://github.com/vortex-tech",
  },
  {
    id: "VT-2026-07-12",
    studentName: "Asad Ali",
    track: "AI & ML",
    completionDate: "2026-07-31",
    grade: "A",
    credentialUrl: "https://github.com/vortex-tech",
  },
  {
    id: "VT-2026-07-13",
    studentName: "Eashal Abdul Razzaq",
    track: "AI & ML",
    completionDate: "2026-07-31",
    grade: "A",
    credentialUrl: "https://github.com/vortex-tech",
  },
  {
    id: "VT-2026-07-14",
    studentName: "Muhammad Hanan",
    track: "AI & ML",
    completionDate: "2026-07-31",
    grade: "A",
    credentialUrl: "https://github.com/vortex-tech",
  },
  {
    id: "VT-2026-07-15",
    studentName: "Tayyaba Noor",
    track: "AI & ML",
    completionDate: "2026-07-31",
    grade: "A",
    credentialUrl: "https://github.com/vortex-tech",
  },
  {
    id: "VT-2026-07-16",
    studentName: "Muhammad Waqar Tahir",
    track: "AI & ML",
    completionDate: "2026-07-31",
    grade: "A",
    credentialUrl: "https://github.com/vortex-tech",
  },
  {
    id: "VT-2026-07-17",
    studentName: "Anfal Tanveer",
    track: "AI & ML",
    completionDate: "2026-07-31",
    grade: "A",
    credentialUrl: "https://github.com/vortex-tech",
  },
  {
    id: "VT-2026-07-18",
    studentName: "Maryam Omer",
    track: "Web Development",
    completionDate: "2026-07-31",
    grade: "A",
    credentialUrl: "https://github.com/vortex-tech",
  },
  {
    id: "VT-2026-07-19",
    studentName: "Muhammad Usman",
    track: "Web Development",
    completionDate: "2026-07-31",
    grade: "A",
    credentialUrl: "https://github.com/vortex-tech",
  },
  {
    id: "VT-2026-07-20",
    studentName: "Samreen Kanwal",
    track: "Web Development",
    completionDate: "2026-07-31",
    grade: "A",
    credentialUrl: "https://github.com/vortex-tech",
  },
  {
    id: "VT-2026-07-21",
    studentName: "Shahnzay Shahmir",
    track: "Web Development",
    completionDate: "2026-07-31",
    grade: "A",
    credentialUrl: "https://github.com/vortex-tech",
  },
  {
    id: "VT-2026-07-22",
    studentName: "Syeda Rida Masood",
    track: "App Development",
    completionDate: "2026-07-31",
    grade: "A",
    credentialUrl: "https://github.com/vortex-tech",
  },
  {
    id: "VT-2026-07-23",
    studentName: "Misbah Ul Haq",
    track: "App Development",
    completionDate: "2026-07-31",
    grade: "A",
    credentialUrl: "https://github.com/vortex-tech",
  },
  {
    id: "VT-2026-07-24",
    studentName: "Nomana Noor",
    track: "Data Science and Analytics",
    completionDate: "2026-07-31",
    grade: "A",
    credentialUrl: "https://github.com/vortex-tech",
  },
  {
    id: "VT-2026-07-25",
    studentName: "Hafsa Ahmed",
    track: "Data Science and Analytics",
    completionDate: "2026-07-31",
    grade: "A",
    credentialUrl: "https://github.com/vortex-tech",
  },
  {
    id: "VT-2026-07-26",
    studentName: "Muhammad Maaz Afridi",
    track: "Cyber Security",
    completionDate: "2026-07-31",
    grade: "A",
    credentialUrl: "https://github.com/vortex-tech",
  },
  {
    id: "VT-2026-07-27",
    studentName: "Muhammad Hammad Rauf",
    track: "Cyber Security",
    completionDate: "2026-07-31",
    grade: "A",
    credentialUrl: "https://github.com/vortex-tech",
  },
  {
    id: "VT-2026-07-28",
    studentName: "Anosha Nadeem",
    track: "Cyber Security",
    completionDate: "2026-07-31",
    grade: "A",
    credentialUrl: "https://github.com/vortex-tech",
  },
  {
    id: "VT-2026-07-29",
    studentName: "Muhammad Shahid Iqbal",
    track: "Web Development",
    completionDate: "2026-07-31",
    grade: "A",
    credentialUrl: "https://github.com/vortex-tech",
  },
  {
    id: "VT-2026-07-30",
    studentName: "Saad Khalid",
    track: "Web Development",
    completionDate: "2026-07-31",
    grade: "A",
    credentialUrl: "https://github.com/vortex-tech",
  },
  {
    id: "VT-2026-07-31",
    studentName: "Azka Rani",
    track: "UI & UX",
    completionDate: "2026-07-31",
    grade: "A",
    credentialUrl: "https://github.com/vortex-tech",
  },
  {
    id: "VT-2026-07-32",
    studentName: "Abdul Haseeb",
    track: "AI & ML",
    completionDate: "2026-07-31",
    grade: "A",
    credentialUrl: "",
  },
  {
    id: "VT-2026-07-33",
    studentName: "Malaika",
    track: "AI & ML",
    completionDate: "2026-07-31",
    grade: "A",
    credentialUrl: "https://github.com/vortex-tech",
  },
  {
    id: "VT-2026-07-34",
    studentName: "Rohit Kumar",
    track: "AI & ML",
    completionDate: "2026-07-31",
    grade: "A",
    credentialUrl: "https://github.com/vortex-tech",
  },
  {
    id: "VT-2026-07-35",
    studentName: "Hamza Naeem Ansari",
    track: "AI & ML",
    completionDate: "2026-07-31",
    grade: "A",
    credentialUrl: "https://github.com/vortex-tech",
  },
  {
    id: "VT-2026-07-36",
    studentName: "Muhammad Talha",
    track: "App Development",
    completionDate: "2026-07-31",
    grade: "A",
    credentialUrl: "https://github.com/vortex-tech",
  },
  {
    id: "VT-2026-07-37",
    studentName: "Minahil Rizwan",
    track: "App Development",
    completionDate: "2026-07-31",
    grade: "A",
    credentialUrl: "https://github.com/vortex-tech",
  },
  {
    id: "VT-2026-07-38",
    studentName: "Muhammad Daud",
    track: "App Development",
    completionDate: "2026-07-31",
    grade: "A",
    credentialUrl: "https://github.com/vortex-tech",
  },
  {
    id: "VT-2026-07-39",
    studentName: "Syed Numan Shah",
    track: "App Development",
    completionDate: "2026-07-31",
    grade: "A",
    credentialUrl: "https://github.com/vortex-tech",
  },
  {
    id: "VT-2026-07-40",
    studentName: "Ayesha",
    track: "Cyber Security",
    completionDate: "2026-07-31",
    grade: "A",
    credentialUrl: "https://github.com/vortex-tech",
  },
  {
    id: "VT-2026-07-41",
    studentName: "Muhammad Rayyan",
    track: "Cyber Security",
    completionDate: "2026-07-31",
    grade: "A",
    credentialUrl: "https://github.com/vortex-tech",
  },
  {
    id: "VT-2026-07-42",
    studentName: "Muhammad Hamza",
    track: "Cyber Security",
    completionDate: "2026-07-31",
    grade: "A",
    credentialUrl: "https://github.com/vortex-tech",
  },
  {
    id: "VT-2026-07-43",
    studentName: "Arooj Fatima Rizvi",
    track: "Cyber Security",
    completionDate: "2026-07-31",
    grade: "A",
    credentialUrl: "https://github.com/vortex-tech",
  },
  {
    id: "VT-2026-07-44",
    studentName: "Muhammad Zain Iftikhar",
    track: "Web Development",
    completionDate: "2026-07-31",
    grade: "A",
    credentialUrl: "https://github.com/vortex-tech",
  },
  {
    id: "VT-2026-07-45",
    studentName: "Arslan Ali",
    track: "UI/UX",
    completionDate: "2026-08-01",
    grade: "A",
    credentialUrl: "https://github.com/vortex-tech",
  }
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
            Enter the unique credential identifier (e.g., VT-2026-07-01) to verify the authenticity of certificates issued by Vortex Tech.
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
              placeholder="e.g. VT-2026-07-01"
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
              Try testing with: <span className="text-slate-400 font-mono">VT-2026-07-01</span> or <span className="text-slate-400 font-mono">VT-2026-07-03</span>
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
