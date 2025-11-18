import React from "react";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";

// 1) Import all markdown posts from src/content/blog
const files = import.meta.glob("/src/content/blog/*.md", {
  eager: true,
  import: "default",
});



// 2) Parse each markdown file using gray-matter
const posts = Object.entries(files).map(([path, mod]: any) => {
  const { title, date, body } = mod;
  const slug = path.split("/").pop().replace(".md", "");

  return {
    title,
    date,
    slug,
    body,
  };
});


// 3) Sort posts newest → oldest
posts.sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

const BlogPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-4xl px-4 pb-16 pt-10 md:px-6">
        <header className="mb-10 border-b border-slate-200 pb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
            Insights & Updates
          </p>
        </header>

        {posts.length === 0 && (
          <p className="text-slate-600">
            No posts yet. Check back soon!
          </p>
        )}

        {/* Blog posts */}
        <div className="space-y-10">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
            >
              <h2 className="text-xl font-semibold text-slate-900">
                {post.title}
              </h2>

              <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">
                {new Date(post.date).toLocaleDateString()}
              </p>

              <div className="prose prose-slate mt-4 max-w-none text-sm">
                <ReactMarkdown>{post.body}</ReactMarkdown>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default BlogPage;

