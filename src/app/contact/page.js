"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Invalid email address";
    }
    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
    } else if (formData.message.trim().length < 15) {
      tempErrors.message = "Message must be at least 15 characters";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Mock submit success
      setSubmitted(true);
    }
  };

  const clearForm = () => {
    setFormData({ name: "", email: "", message: "" });
    setSubmitted(false);
  };

  return (
    <div className="relative isolate py-20 lg:py-28 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-1/4 -z-10 h-72 w-72 rounded-full bg-vortex-blue/5 blur-3xl"></div>
      <div className="absolute bottom-10 left-1/4 -z-10 h-72 w-72 rounded-full bg-vortex-cyan/5 blur-3xl"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Get in{" "}
            <span className="bg-gradient-to-r from-vortex-blue to-vortex-cyan bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="mt-4 text-base text-slate-400">
            Have questions about our internship tracks, cohort schedules, or certification processes? Send us a message!
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Details Column */}
          <div className="flex flex-col justify-between space-y-8 rounded-2xl bg-card-bg p-8 border border-card-border">
            <div>
              <h2 className="text-xl font-bold text-white mb-6">Contact Information</h2>

              <div className="space-y-6">
                {/* Email Info */}
                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-vortex-cyan">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-300">Email Admissions</h3>
                    <p className="mt-1 text-sm text-slate-400 hover:text-white transition-colors">
                      <a href="mailto:vortextechnologies77@gmail.com">vortextechnologies77@gmail.com</a>
                    </p>
                  </div>
                </div>

                {/* Office Info */}
                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-vortex-cyan">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-300">Office Location</h3>
                    <p className="mt-1 text-sm text-slate-400 leading-relaxed">
                      Vortex Tech HQ, Gulshan-e-Iqbal,<br />
                      Karachi, Pakistan
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Socials card link */}
            <div className="pt-6 border-t border-slate-800">
              <h3 className="text-sm font-semibold text-slate-300 mb-3">Join our community</h3>
              <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                Connect with our mentors and past graduates on our social portals to get guidance and explore remote roles.
              </p>
              <div className="flex space-x-3 text-sm text-vortex-cyan">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
                <span className="text-slate-800">&bull;</span>
                {/* <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
                <span className="text-slate-800">&bull;</span>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub Org</a> */}
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="rounded-2xl bg-card-bg p-8 border border-card-border shadow-xl">
            {submitted ? (
              <div className="text-center py-12">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-4">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Message Dispatched</h3>
                <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                  Thank you for reaching out. A support coordinator will reply to your request at <span className="text-white">{formData.email}</span> within 24 hours.
                </p>
                <button
                  onClick={clearForm}
                  className="mt-6 rounded-md bg-gradient-to-r from-vortex-blue to-vortex-cyan px-5 py-2.5 text-xs font-semibold text-white shadow"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Fatima Ali"
                    className={`mt-1.5 block w-full rounded-md border bg-slate-950 px-4 py-2 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-vortex-cyan focus:border-transparent ${errors.name ? "border-red-500" : "border-slate-800"
                      }`}
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                </div>

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
                    className={`mt-1.5 block w-full rounded-md border bg-slate-950 px-4 py-2 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-vortex-cyan focus:border-transparent ${errors.email ? "border-red-500" : "border-slate-800"
                      }`}
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what you need help with..."
                    className={`mt-1.5 block w-full rounded-md border bg-slate-950 px-4 py-2 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-vortex-cyan focus:border-transparent ${errors.message ? "border-red-500" : "border-slate-800"
                      }`}
                  ></textarea>
                  {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full rounded-md bg-gradient-to-r from-vortex-blue to-vortex-cyan py-3 text-sm font-semibold text-white shadow-lg glow-button-blue"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
