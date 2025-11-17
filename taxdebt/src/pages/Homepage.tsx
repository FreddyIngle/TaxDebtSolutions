import { useEffect, useState } from "react";
import gregPhoto from "../gregglenn.png";
import { Navbar } from "../components/Navbar";

const servicesLeft = [
  "Offers in Compromise",
  "Bank Account Levies",
  "Payroll Tax Debt Cases",
  "Innocent Spouse Cases",
];

const servicesRight = [
  "Installment Agreements",
  "Wage Garnishment Cases",
  "Penalty Abatement",
  "Currently Not Collectible Status",
];

const credentials = [
  "Over 30 years in practice",
  "Certified Tax Resolution Specialist",
  "Admitted to the U.S. Tax Court",
  "Former accountant with Coopers & Lybrand, CPAs",
];

const Homepage = () => {
  const [shrinkPhoto, setShrinkPhoto] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShrinkPhoto(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      {/* Hero section */}
      <main className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6 md:pt-14">
        <section className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)] md:items-center">
          {/* Photo / intro card */}
          <div className="flex justify-center md:justify-start">
            <div
              className={`relative rounded-2xl bg-white shadow-lg ring-1 ring-slate-200 transition-all duration-300 ease-out ${
                shrinkPhoto ? "scale-90 md:scale-95" : "scale-100"
              }`}
            >
              <div className="p-6 sm:p-7">
                <div className="overflow-hidden rounded-xl bg-slate-100">
                  {/* Replace src with real image later */}
                  <img
                    src={gregPhoto}
                    alt="Gregory G. Glenn, Esq."
                    className="h-64 w-56 object-cover sm:h-72 sm:w-60"
                  />
                </div>
                <p className="mt-4 text-center text-sm font-semibold">
                  Gregory G. Glenn, Esq.
                </p>
                <p className="mt-1 text-center text-xs text-slate-600">
                  Tax Resolution Attorney – Boca Raton, Florida
                </p>
              </div>
            </div>
          </div>

          {/* Text / primary content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
              IRS Tax Debt Resolution
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              We fight the IRS so your clients don&apos;t have to.
            </h1>
            <p className="mt-3 max-w-xl text-sm sm:text-base text-slate-700">
              The Tax Debt Solutions Group represents individuals and businesses
              facing complex IRS tax problems, from bank levies and wage
              garnishments to long-standing payroll tax debt.
            </p>

            {/* Phone + CTA */}
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  Call for an assessment
                </p>
                <p className="text-2xl font-bold text-sky-800 sm:text-3xl">
                  754-310-5100
                </p>
              </div>
              <a
                href="tel:17543105100"
                className="inline-flex items-center justify-center rounded-full bg-sky-700 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-800"
              >
                Call Now
              </a>
            </div>

            {/* Location */}
            <p className="mt-3 text-xs text-slate-500">
              Main office: 20283 State Road 7, Ste. 300, Boca Raton, FL 33498
            </p>
          </div>
        </section>

        {/* Services + credentials */}
        <section className="mt-12 grid gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          {/* IRS problems / services */}
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-lg font-semibold">
              Have clients with IRS tax debt problems?
            </h2>
            <p className="mt-1 text-sm text-slate-700">
              We work to resolve IRS issues so your clients can move forward —
              from negotiated settlements to structured payment agreements.
            </p>

            <div className="mt-5 grid gap-6 sm:grid-cols-2">
              <ul className="space-y-1 text-sm text-slate-800">
                {servicesLeft.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-1 text-sm text-slate-800">
                {servicesRight.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Credentials card */}
          <aside className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-base font-semibold">Why work with Greg?</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-800">
              {credentials.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </section>
      </main>
    </div>
  );
};

export default Homepage;
