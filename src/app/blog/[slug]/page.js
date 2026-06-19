import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "../../../data/posts";

// Helper function to render simple markdown content safely
function renderMarkdown(content) {
  const lines = content.trim().split("\n");
  let inCodeBlock = false;
  let inList = false;
  const elements = [];

  lines.forEach((line, idx) => {
    const trimmedLine = line.trim();

    // Code blocks
    if (trimmedLine.startsWith("```")) {
      inCodeBlock = !inCodeBlock;
      return;
    }

    if (inCodeBlock) {
      elements.push(
        <pre key={idx} className="bg-slate-950 p-4 rounded-md text-xs font-mono text-vortex-cyan border border-slate-800 overflow-x-auto my-4">
          <code>{line}</code>
        </pre>
      );
      return;
    }

    // Headers
    if (trimmedLine.startsWith("# ")) {
      elements.push(
        <h1 key={idx} className="text-3xl sm:text-4xl font-extrabold text-white mt-8 mb-4 border-b border-slate-800 pb-2">
          {trimmedLine.replace("# ", "")}
        </h1>
      );
      return;
    }

    if (trimmedLine.startsWith("## ")) {
      elements.push(
        <h2 key={idx} className="text-2xl font-bold text-white mt-6 mb-3">
          {trimmedLine.replace("## ", "")}
        </h2>
      );
      return;
    }

    if (trimmedLine.startsWith("### ")) {
      elements.push(
        <h3 key={idx} className="text-xl font-bold text-white mt-5 mb-2">
          {trimmedLine.replace("### ", "")}
        </h3>
      );
      return;
    }

    // Lists
    if (trimmedLine.startsWith("* ") || trimmedLine.startsWith("- ")) {
      const itemText = trimmedLine.substring(2);
      // Simple inline bold replacement (**text** to <strong>text</strong>)
      const parts = itemText.split("**");
      const formattedText = parts.map((part, pIdx) =>
        pIdx % 2 === 1 ? <strong key={pIdx} className="text-white font-semibold">{part}</strong> : part
      );

      elements.push(
        <li key={idx} className="list-disc pl-2 ml-6 my-1.5 text-slate-300 text-sm sm:text-base leading-relaxed">
          {formattedText}
        </li>
      );
      return;
    }

    // Paragraphs
    if (trimmedLine === "") {
      elements.push(<div key={idx} className="h-4"></div>);
    } else {
      // Simple inline bold replacement for standard lines
      const parts = line.split("**");
      // Check if it's code highlights e.g. `code`
      const formattedText = parts.map((part, pIdx) => {
        if (pIdx % 2 === 1) {
          return <strong key={pIdx} className="text-white font-semibold">{part}</strong>;
        }
        
        // Render inline code highlights
        const subparts = part.split("`");
        return subparts.map((sub, sIdx) => 
          sIdx % 2 === 1 ? <code key={sIdx} className="bg-slate-900 px-1.5 py-0.5 rounded text-xs text-vortex-cyan font-mono">{sub}</code> : sub
        );
      });

      elements.push(
        <p key={idx} className="text-slate-300 text-sm sm:text-base leading-relaxed my-3">
          {formattedText}
        </p>
      );
    }
  });

  return elements;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="relative isolate py-16 sm:py-24 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-20 left-1/4 -z-10 h-72 w-72 rounded-full bg-vortex-blue/5 blur-3xl"></div>
      <div className="absolute bottom-10 right-1/4 -z-10 h-72 w-72 rounded-full bg-vortex-cyan/5 blur-3xl"></div>

      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center text-xs font-semibold text-vortex-cyan hover:underline mb-8"
        >
          &larr; Back to Insights Blog
        </Link>

        {/* Post Metadata Header */}
        <header className="border-b border-slate-800 pb-8">
          <div className="flex flex-wrap items-center gap-x-3 text-xs text-slate-500 mb-4">
            <span>{post.date}</span>
            <span>&bull;</span>
            <span>{post.readTime}</span>
            <span>&bull;</span>
            <div className="flex gap-x-1.5">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-slate-900 border border-slate-800 px-2 py-0.5 text-xs text-slate-400 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {post.title}
          </h1>
          <p className="mt-4 text-xs text-slate-400">
            By <span className="text-white font-medium">{post.author}</span>
          </p>
        </header>

        {/* Post Content Body */}
        <article className="mt-8 prose prose-invert max-w-none">
          {renderMarkdown(post.content)}
        </article>
      </div>
    </div>
  );
}
