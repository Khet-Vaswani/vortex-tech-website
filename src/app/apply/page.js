"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

// Toggle this to easily open or close internship registration
const IS_REGISTRATION_CLOSED = true;

function ApplyForm() {
  const searchParams = useSearchParams();
  
  // Pre-select track from query parameter synchronously during initial render
  const getInitialTrack = () => {
    const trackParam = searchParams.get("track");
    const validTracks = ["web-dev", "ai-ml", "data-science", "cyber-security", "ui-ux", "app-dev", "software-engineering"];
    return (trackParam && validTracks.includes(trackParam)) ? trackParam : "";
  };

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    track: getInitialTrack(),
    education: "",
    whyJoin: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // Waitlist form state
  const [waitlistEmail, setWaitlistEmail] = useState("");
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);
  const [waitlistError, setWaitlistError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const tempErrors = {};
    if (!formData.fullName.trim()) tempErrors.fullName = "Full name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) tempErrors.phone = "Phone number is required";
    if (!formData.location.trim()) tempErrors.location = "City and Country is required";
    if (!formData.track) tempErrors.track = "Please select an internship track";
    if (!formData.education) tempErrors.education = "Please select your education level";
    if (!formData.whyJoin.trim()) {
      tempErrors.whyJoin = "Please tell us why you want to join";
    } else if (formData.whyJoin.trim().length < 50) {
      tempErrors.whyJoin = "Must be at least 50 characters";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const handleWaitlistSubmit = (e) => {
    e.preventDefault();
    if (!waitlistEmail.trim()) {
      setWaitlistError("Email address is required");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(waitlistEmail)) {
      setWaitlistError("Please enter a valid email address");
      return;
    }
    setWaitlistError("");
    setWaitlistSubmitted(true);
  };

  // If registration is closed, show the closed / waitlist view
  if (IS_REGISTRATION_CLOSED) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="rounded-2xl bg-card-bg p-8 sm:p-12 border border-card-border shadow-2xl relative overflow-hidden text-center">
          <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-vortex-blue/10 blur-2xl"></div>
          <div className="absolute -left-16 -bottom-16 w-48 h-48 rounded-full bg-vortex-cyan/5 blur-2xl"></div>

          <div className="relative">
            {/* Status Badge */}
            <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold bg-rose-500/10 text-rose-400 border border-rose-500/20 uppercase tracking-wider mb-6">
              Batch 1 Cohort Closed
            </span>

            {/* Main Header */}
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Internship Registration{" "}
              <span className="bg-gradient-to-r from-vortex-blue to-vortex-cyan bg-clip-text text-transparent">
                Closed
              </span>
            </h1>

            {/* Explanatory Text */}
            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Thank you for your overwhelming interest! Applications for our inaugural project-based internship cohort (Batch 1) are officially closed. 
              Our admissions team is currently reviewing the profiles and will be contacting short-listed candidates soon.
            </p>

            <div className="mt-8 border-t border-slate-800/80 pt-8 max-w-md mx-auto">
              {waitlistSubmitted ? (
                <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-6 text-emerald-400">
                  <svg className="h-8 w-8 mx-auto mb-2 text-emerald-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                  <h4 className="font-bold text-white text-base">Added to Waitlist!</h4>
                  <p className="text-xs text-slate-400 mt-1">We will email you at <span className="text-slate-300 font-semibold">{waitlistEmail}</span> as soon as Batch 2 applications open.</p>
                </div>
              ) : (
                <div>
                  <h3 className="text-sm font-semibold text-white mb-2">Join the Waitlist for Batch 2</h3>
                  <p className="text-xs text-slate-400 mb-4">Be the first to get notified and receive early-bird benefits when our next cohort cohort registrations launch.</p>
                  <form onSubmit={handleWaitlistSubmit} className="flex flex-col sm:flex-row gap-2">
                    <div className="flex-grow">
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        value={waitlistEmail}
                        onChange={(e) => setWaitlistEmail(e.target.value)}
                        className={`w-full rounded-md border bg-slate-950 px-4 py-2.5 text-white placeholder-slate-600 text-sm focus:outline-none focus:ring-2 focus:ring-vortex-cyan focus:border-transparent ${
                          waitlistError ? "border-rose-500" : "border-slate-800"
                        }`}
                      />
                      {waitlistError && <p className="text-left text-xs text-rose-500 mt-1">{waitlistError}</p>}
                    </div>
                    <button
                      type="submit"
                      className="rounded-md bg-gradient-to-r from-vortex-blue to-vortex-cyan px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-vortex-blue/20 hover:brightness-110 transition-all shrink-0 h-fit"
                    >
                      Notify Me
                    </button>
                  </form>
                </div>
              )}
            </div>

            {/* Alternative Actions */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/programs/challenges"
                className="w-full sm:w-auto rounded-md bg-slate-900 border border-slate-850 px-6 py-2.5 text-sm font-semibold text-white hover:bg-slate-850 transition-all text-center"
              >
                Join Design Challenges
              </Link>
              <Link
                href="/programs/internships"
                className="w-full sm:w-auto text-sm font-semibold text-vortex-cyan hover:text-white px-6 py-2.5 text-center transition-all"
              >
                Browse Internship Tracks &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Original Form view when registration is open
  if (submitted) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-24 text-center">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-6">
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Application Submitted!
        </h2>
        <p className="mt-4 text-base text-slate-400">
          Thank you, <span className="text-white font-semibold">{formData.fullName}</span>. We have received your application for the{" "}
          <span className="text-vortex-cyan font-semibold">
            {formData.track === "web-dev" && "Web Development"}
            {formData.track === "ai-ml" && "AI&ML"}
            {formData.track === "data-science" && "Data Science & Analytics"}
            {formData.track === "cyber-security" && "Cyber Security"}
            {formData.track === "ui-ux" && "UI/UX"}
            {formData.track === "app-dev" && "App Development"}
            {formData.track === "software-engineering" && "Software Engineering"}
          </span>{" "}
          track.
        </p>
        <p className="mt-2 text-sm text-slate-500">
          Our admissions team will review your profile and contact you at <span className="text-slate-300">{formData.email}</span> within 3-5 business days.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-8 rounded-md bg-gradient-to-r from-vortex-blue to-vortex-cyan px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-vortex-blue/20"
        >
          Submit Another Application
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-2xl text-center mb-12">
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Start Your{" "}
          <span className="bg-gradient-to-r from-vortex-blue to-vortex-cyan bg-clip-text text-transparent">
            IT Journey
          </span>
        </h1>
        <p className="mt-4 text-base text-slate-400">
          Complete the details below to apply for our premium project-based internship program.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl bg-card-bg p-8 border border-card-border shadow-2xl">
        <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
          {/* Full Name */}
          <div className="sm:col-span-2">
            <label htmlFor="fullName" className="block text-sm font-medium text-slate-300">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Muhammad Ali"
              className={`mt-1.5 block w-full rounded-md border bg-slate-950 px-4 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-vortex-cyan focus:border-transparent ${
                errors.fullName ? "border-red-500" : "border-slate-800"
              }`}
            />
            {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-300">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@example.com"
              className={`mt-1.5 block w-full rounded-md border bg-slate-950 px-4 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-vortex-cyan focus:border-transparent ${
                errors.email ? "border-red-500" : "border-slate-800"
              }`}
            />
            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-300">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. +92 300 1234567"
              className={`mt-1.5 block w-full rounded-md border bg-slate-950 px-4 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-vortex-cyan focus:border-transparent ${
                errors.phone ? "border-red-500" : "border-slate-800"
              }`}
            />
            {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
          </div>

          {/* Location */}
          <div className="sm:col-span-2">
            <label htmlFor="location" className="block text-sm font-medium text-slate-300">
              City & Country
            </label>
            <input
              type="text"
              name="location"
              id="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g. Lahore, Pakistan"
              className={`mt-1.5 block w-full rounded-md border bg-slate-950 px-4 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-vortex-cyan focus:border-transparent ${
                errors.location ? "border-red-500" : "border-slate-800"
              }`}
            />
            {errors.location && <p className="mt-1 text-xs text-red-500">{errors.location}</p>}
          </div>

          {/* Track Selection */}
          <div>
            <label htmlFor="track" className="block text-sm font-medium text-slate-300">
              Internship Track
            </label>
            <select
              name="track"
              id="track"
              value={formData.track}
              onChange={handleChange}
              className={`mt-1.5 block w-full rounded-md border bg-slate-950 px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-vortex-cyan focus:border-transparent ${
                errors.track ? "border-red-500" : "border-slate-800"
              }`}
            >
              <option value="" disabled className="text-slate-600">Select a Track</option>
              <option value="web-dev">Web Development</option>
              <option value="ai-ml">AI&ML</option>
              <option value="data-science">Data Science & Analytics</option>
              <option value="cyber-security">Cyber Security</option>
              <option value="ui-ux">UI/UX</option>
              <option value="app-dev">App Development</option>
              <option value="software-engineering">Software Engineering</option>
            </select>
            {errors.track && <p className="mt-1 text-xs text-red-500">{errors.track}</p>}
          </div>

          {/* Education Level */}
          <div>
            <label htmlFor="education" className="block text-sm font-medium text-slate-300">
              Highest Education Level
            </label>
            <select
              name="education"
              id="education"
              value={formData.education}
              onChange={handleChange}
              className={`mt-1.5 block w-full rounded-md border bg-slate-950 px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-vortex-cyan focus:border-transparent ${
                errors.education ? "border-red-500" : "border-slate-800"
              }`}
            >
              <option value="" disabled className="text-slate-600">Select Education</option>
              <option value="matric-o">Matric / O-Levels</option>
              <option value="intermediate-a">Intermediate / A-Levels</option>
              <option value="bachelor-student">Bachelor&apos;s Student</option>
              <option value="bachelor-grad">Bachelor&apos;s Graduate</option>
              <option value="master-above">Master&apos;s or Above</option>
            </select>
            {errors.education && <p className="mt-1 text-xs text-red-500">{errors.education}</p>}
          </div>

          {/* Statement */}
          <div className="sm:col-span-2">
            <label htmlFor="whyJoin" className="block text-sm font-medium text-slate-300">
              Why do you want to join Vortex Tech? (Minimum 50 characters)
            </label>
            <textarea
              name="whyJoin"
              id="whyJoin"
              rows={4}
              value={formData.whyJoin}
              onChange={handleChange}
              placeholder="Tell us about your learning objectives, coding experience, and why project-based reviews appeal to you..."
              className={`mt-1.5 block w-full rounded-md border bg-slate-950 px-4 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-vortex-cyan focus:border-transparent ${
                errors.whyJoin ? "border-red-500" : "border-slate-800"
              }`}
            ></textarea>
            {errors.whyJoin && <p className="mt-1 text-xs text-red-500">{errors.whyJoin}</p>}
          </div>
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="w-full rounded-md bg-gradient-to-r from-vortex-blue to-vortex-cyan py-3 text-sm font-semibold text-white shadow-lg glow-button-blue"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
}

export default function ApplyPage() {
  return (
    <Suspense fallback={<div className="text-center py-20 text-slate-400">Loading form...</div>}>
      <ApplyForm />
    </Suspense>
  );
}
