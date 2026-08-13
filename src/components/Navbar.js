"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Internships", href: "/programs/internships" },
    { name: "Challenges", href: "/programs/challenges" },
    { name: "Services", href: "/services" },
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
            {/* New Logo Image */}
            <div className="relative flex h-11 w-11 items-center justify-center rounded-lg bg-slate-900/50 overflow-hidden ring-1 ring-slate-800 transition-all duration-300 group-hover:ring-vortex-cyan/50">
              <img
                src="/logo.jpg"
                alt="Vortex Tech Logo"
                className="h-10 w-10 object-cover"
              />
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
              href="/apply"
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
              href="/apply"
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
