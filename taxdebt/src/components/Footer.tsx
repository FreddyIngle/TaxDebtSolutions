const Footer = () => {
  return (
   <footer className="mt-16 border-t border-slate-200 bg-slate-900 text-slate-300">
  <div className="mx-auto max-w-6xl px-4 py-4 text-xs md:flex md:items-center md:justify-between md:px-6">
    
    {/* Left */}
    <div className="mb-3 md:mb-0">
      <p className="font-semibold text-slate-100">
        Gregory Glenn, P.A. – Tax Debt Solutions Group
      </p>
      <p className="text-slate-400">
        20283 State Road 7, Ste. 300, Boca Raton, FL 33498
      </p>
    </div>

    {/* Center */}
    <div className="mb-3 md:mb-0 text-slate-400 md:text-center">
      <p>© {new Date().getFullYear()} Gregory Glenn, P.A. All rights reserved.</p>
      <p className="text-slate-500">
        This website is for informational purposes only and does not constitute legal advice.
      </p>
    </div>

    {/* Right */}
    <div className="text-right text-slate-500">
      <a href="tel:17543105100" className="block hover:text-slate-200 transition-colors">
        754-310-5100
      </a>
      <a href="#top" className="inline-block hover:text-slate-200">
        Back to top ↑
      </a>
    </div>

  </div>

  {/* Centered credit */}
  <div className="py-3 w-full text-center text-[11px] text-slate-400
 border-t border-slate-800">
    Built by{" "}
    <a
      href="https://ingledigitalsolutions.com"
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium hover:text-white"
    >
      Ingle Digital Solutions
    </a>
  </div>
</footer>

  );
};

export default Footer;
