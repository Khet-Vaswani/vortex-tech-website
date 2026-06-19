"use client";

import { useState } from "react";
import Link from "next/link";
import { BLOG_POSTS } from "../../data/posts";

export default function BlogList() {
  const [selectedTag, setSelectedTag] = useState("All");

  // Get all unique tags from posts
  const allTags = ["All", ...new Set(BLOG_POSTS.flatMap((post) => post.tags))];

  const filteredPosts =
    selectedTag === "All"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((post) => post.tags.includes(selectedTag));

  return (
    <div className="relative isolate py-20 lg:py-28 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-20 right-10 -z-10 h-72 w-72 rounded-full bg-vortex-blue/5 blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-10 left-10 -z-10 h-72 w-72 rounded-full bg-vortex-cyan/5 blur-3xl animate-pulse-glow" style={{ animationDelay: "2.5s" }}></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Vortex Tech{" "}
            <span className="bg-gradient-to-r from-vortex-blue to-vortex-cyan bg-clip-text text-transparent">
              Insights
            </span>
          </h1>
          <p className="mt-4 text-lg text-slate-400">
            Resources, development guides, and tech insights to help computer science students navigate the IT industry.
          </p>
        </div>

        {/* Tag Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold border transition-all ${
                selectedTag === tag
                  ? "bg-vortex-cyan/10 border-vortex-cyan text-vortex-cyan glow-text-cyan"
                  : "bg-slate-950 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Blog Post List */}
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col items-start justify-between rounded-2xl bg-card-bg p-6 border border-card-border hover:glow-border-cyan transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center gap-x-2 text-xs">
                  <span className="text-slate-500">{post.date}</span>
                  <span className="text-slate-700">&bull;</span>
                  <span className="text-slate-500">{post.readTime}</span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-bold leading-6 text-white group-hover:text-vortex-cyan transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-3 text-sm line-clamp-3 text-slate-400 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Tags & Read Link footer */}
              <div className="mt-6 w-full pt-4 border-t border-slate-800/65 flex items-center justify-between">
                <div className="flex gap-x-1.5">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-md bg-slate-900 px-2 py-0.5 text-xs font-medium text-slate-400 ring-1 ring-inset ring-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-xs font-bold text-vortex-cyan group-hover:underline inline-flex items-center space-x-1">
                  <span>Read more</span>
                  <span>&rarr;</span>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
