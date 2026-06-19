"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Tracks", href: "/tracks" },
    { name: "Verify Certificate", href: "/verify" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-800 bg-background/85 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            {/* Custom SVG Spiral/Vortex Circuit-style Logo */}
            <div className="relative flex h-11 w-11 items-center justify-center rounded-lg bg-slate-900/50 p-1 ring-1 ring-slate-800 transition-all duration-300 group-hover:ring-vortex-cyan/50">
              <svg
                viewBox="0 0 100 100"
                className="h-9 w-9 animate-pulse-glow"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="vortexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0066ff" />
                    <stop offset="100%" stopColor="#00d4ff" />
                  </linearGradient>
                </defs>
                {/* Spiral Circuit paths */}
                <path
                  d="M50 15 C30 15, 15 30, 15 50 C15 70, 30 85, 50 85 C65 85, 78 75, 82 60 C83 55, 80 50, 75 50 C70 50, 68 53, 67 56 C64 66, 56 72, 47 70 C38 68, 30 58, 32 48 C34 38, 44 32, 53 34 C60 36, 65 42, 65 49 C65 53, 62 56, 58 56 C54 56, 52 53, 52 50 C52 47, 48 45, 45 47 C42 49, 42 53, 44 56 C47 60, 53 62, 58 60 C64 58, 70 50, 69 42 C68 32, 58 24, 47 26 C34 28, 24 40, 26 54 C28 68, 42 78, 56 76 C70 74, 80 62, 80 48"
                  stroke="url(#vortexGrad)"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
                {/* Circuit nodes (circles) */}
                <circle cx="50" cy="15" r="4.5" fill="#00d4ff" />
                <circle cx="58" cy="56" r="3.5" fill="#0066ff" />
                <circle cx="45" cy="47" r="3.5" fill="#00d4ff" />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-vortex-cyan transition-colors">
              VORTEX<span className="bg-gradient-to-r from-vortex-blue to-vortex-cyan bg-clip-text text-transparent">TECH</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${isActive(link.href)
                    ? "text-vortex-cyan glow-text-cyan font-semibold"
                    : "text-slate-300 hover:text-white"
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSeG5BMlK39BVkMVnqvXkJhEVO98Kj1Mmz2fXNf9i55OxS08-A/viewform?usp=header"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-vortex-blue to-vortex-cyan px-4 py-2 text-sm font-semibold text-white shadow-lg glow-button-blue"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-slate-800 hover:text-white focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100 border-t border-slate-800" : "max-h-0 opacity-0 pointer-events-none"
          }`}
      >
        <div className="space-y-1 px-4 py-3 bg-background">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block rounded-md px-3 py-2 text-base font-medium transition-colors ${isActive(link.href)
                  ? "bg-slate-900 text-vortex-cyan"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSeG5BMlK39BVkMVnqvXkJhEVO98Kj1Mmz2fXNf9i55OxS08-A/viewform?usp=header"
              target="_blank" rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center rounded-md bg-gradient-to-r from-vortex-blue to-vortex-cyan px-4 py-2.5 text-base font-semibold text-white shadow-lg shadow-vortex-blue/20"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
