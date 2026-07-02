import Link from "next/link";

export default function ServicesPage() {
  const servicesList = [
    {
      name: "Web & App Development",
      description: "Custom enterprise software solutions, e-commerce applications, and bespoke web platforms built using modern technologies like Next.js, Node.js, and cloud ecosystems. We focus on scalability, clean architectures, and top-tier performance.",
      features: ["Full-Stack Applications", "API Design & Integrations", "Cross-Platform Mobile Apps", "Database Systems Optimization"]
    },
    {
      name: "IT Consulting",
      description: "Strategic advice on system design, cloud migrations, tech stack selection, and software architecture. We audit legacy systems and formulate action plans to improve reliability, speed, and engineering standards.",
      features: ["System Auditing", "Cloud Architecture Planning", "Technology Selection", "Engineering Workflow Optimization"]
    },
    {
      name: "IT Support & Managed Services",
      description: "Ensure your digital assets remain online and optimized around the clock. We manage hosting deployments, databases, security patches, backups, and offer real-time developer support.",
      features: ["Continuous Server Support", "Vulnerability Patches", "Database Administration", "Backup & Recovery Orchestration"]
    }
  ];

  return (
    <div className="relative isolate py-20 lg:py-28 overflow-hidden bg-[#050811]">
      {/* Decorative B2B Professional Background Accent */}
      <div className="absolute top-10 right-10 -z-10 h-96 w-96 rounded-full bg-slate-800/10 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 -z-10 h-96 w-96 rounded-full bg-vortex-blue/5 blur-3xl"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold bg-slate-900 text-slate-300 border border-slate-800 uppercase tracking-wider mb-4">
            B2B IT Solutions & Services
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Scalable Tech Solutions.{" "}
            <span className="block mt-2 bg-gradient-to-r from-vortex-blue to-slate-400 bg-clip-text text-transparent">
              Engineered for Enterprise.
            </span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            Vortex Tech delivers premium development and systems consulting. Partner with our engineering leads to accelerate your digital transformation and deploy stable production code.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mx-auto max-w-5xl grid grid-cols-1 gap-8 md:grid-cols-3 mb-16">
          {servicesList.map((service) => (
            <div
              key={service.name}
              className="flex flex-col justify-between rounded-xl bg-[#0b0f19] p-6 border border-slate-850 hover:border-slate-700 transition-all duration-350 shadow-lg group"
            >
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-vortex-cyan transition-colors mb-3">
                  {service.name}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">
                  Key Focus Areas
                </h4>
                <ul className="space-y-1.5 mb-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-xs text-slate-400 gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-vortex-cyan shrink-0"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA B2B Callout */}
        <div className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-r from-slate-900 to-[#0e1424] border border-slate-800 p-8 sm:p-12 text-center shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            Partner With Our Engineering Team
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto mb-8">
            Tell us about your technical requirements, product timelines, and infrastructure goals. Let&apos;s build software that stands out.
          </p>
          <a
            href="mailto:services@vortextech.co"
            className="inline-flex items-center justify-center rounded-md bg-white text-slate-950 px-8 py-3.5 text-base font-semibold hover:bg-slate-200 transition-all shadow-md"
          >
            Work With Us
          </a>
        </div>
      </div>
    </div>
  );
}
