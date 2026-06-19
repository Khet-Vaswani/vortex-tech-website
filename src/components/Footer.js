import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-slate-900 bg-[#070b14] text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-lg font-bold tracking-tight text-white">
                VORTEX<span className="bg-gradient-to-r from-vortex-blue to-vortex-cyan bg-clip-text text-transparent">TECH</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 max-w-xs">
              Hands-on IT internships with real project work, individual review, and industry-standard certifications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200">Platform</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-vortex-cyan transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/tracks" className="hover:text-vortex-cyan transition-colors">Internship Tracks</Link>
              </li>
              <li>
                <Link href="/verify" className="hover:text-vortex-cyan transition-colors">Verify Certificate</Link>
              </li>
              <li>
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeG5BMlK39BVkMVnqvXkJhEVO98Kj1Mmz2fXNf9i55OxS08-A/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="hover:text-vortex-cyan transition-colors">Apply Now</Link>
              </li>
            </ul>
          </div>

          {/* About & Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200">Company</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-vortex-cyan transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-vortex-cyan transition-colors">Contact Support</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-vortex-cyan transition-colors">Insights Blog</Link>
              </li>
            </ul>
          </div>

          {/* Socials & Accents */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200">Connect</h3>
            <div className="flex space-x-4">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/vortextech77/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-slate-900 p-2 text-slate-400 hover:bg-slate-800 hover:text-vortex-cyan transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-slate-900 p-2 text-slate-400 hover:bg-slate-800 hover:text-vortex-cyan transition-colors"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-slate-900 p-2 text-slate-400 hover:bg-slate-800 hover:text-vortex-cyan transition-colors"
                aria-label="GitHub"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
            </div>
            <p className="text-xs text-slate-500">
              Empowering students in Pakistan & globally to launch successful IT careers.
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-900 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs">
          <p>&copy; {currentYear} Vortex Tech. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
