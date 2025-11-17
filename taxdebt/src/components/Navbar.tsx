import { useState } from "react";
import logo from "../logo-small.png";

const navItems = [
  { label: "Home", href: "#" },
  // add more links later if needed
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b bg-white/80 backdrop-blur">
      <nav className="mx-auto max-w-6xl px-4 py-3 md:px-6">
        <div className="flex items-center justify-between gap-4">
          {/* Left: Firm name */}
          <div className="flex items-center gap-2">
  <img
    src={logo}
    alt="Gregory Glenn logo"
    className="h-8 w-auto"
  />
  
</div>


          {/* Center: Logo / practice name (NOT clickable) */}
          <div className="hidden flex-1 items-center justify-center md:flex">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-700">
              Tax Debt Solutions Group
            </div>
          </div>

          {/* Right: desktop nav */}
          <div className="hidden items-center gap-6 text-sm font-medium md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-slate-700 hover:text-slate-900"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-slate-200 p-2 text-slate-700 hover:bg-slate-100 md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 6h18M3 12h18M3 18h18"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile: centered practice name under bar */}
        <div className="mt-2 flex items-center justify-center md:hidden">
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-700">
            Tax Debt Solutions Group
          </div>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {open && (
        <div className="border-t bg-white md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col space-y-2 px-4 py-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-700 hover:text-slate-900"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
