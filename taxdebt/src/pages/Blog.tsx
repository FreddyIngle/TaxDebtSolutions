import React from "react";

const BlogPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-4xl px-4 pb-16 pt-10 md:px-6">
        <header className="mb-10 border-b border-slate-200 pb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
            Insights & Updates
          </p>
          
         
        </header>

        {/* For now, just a placeholder. We'll wire these to CMS posts next. */}
        <div className="rounded-xl border border-dashed border-slate-300 bg-white/70 p-6 text-center text-sm text-slate-500">
          No posts yet. Check back soon!
        </div>
      </div>
    </main>
  );
};

export default BlogPage;
