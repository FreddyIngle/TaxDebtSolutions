import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";

import gregPhoto from "../gregglenn.png"; // adjust path if needed

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


const resolutionServices = [
  {
    title: "Offers in Compromise",
    subtitle: "Settle eligible tax debt for less than the full amount owed.",
  },
  {
    title: "Installment Agreements",
    subtitle: "Arrange affordable monthly payment plans with the IRS.",
  },
  {
    title: "Penalty Abatement",
    subtitle: "Seek relief from certain IRS penalties where appropriate.",
  },
  {
    title: "Currently Not Collectible Status",
    subtitle: "Temporary protection when you cannot pay at this time.",
  },
  {
    title: "Wage Levy Release",
    subtitle: "Work to stop or release IRS wage garnishments.",
  },
  {
    title: "Bank Levy Release",
    subtitle: "Protect bank accounts from IRS levies where possible.",
  },
];
//Areas served
const southFloridaAreas = [
  "Boca Raton",
  "Palm Beach County",
  "Miami-Dade County",
  "Broward County",
  "Martin County",
  "St. Lucie County",
];

const widerAreas = ["Florida (statewide)", "United States (nationwide)"];


const whyFirmImage = "/images/tax-professional-image.jpeg";


const Homepage = () => {
  const [shrinkPhoto, setShrinkPhoto] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // fade / slide in on first render
    const timeout = setTimeout(() => setLoaded(true), 50);

    const handleScroll = () => {
      setShrinkPhoto(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      {/* Hero section */}
      <main className="bg-[#f5faff] mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6 md:pt-14">
        <section className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)] md:items-center bg-gradient-to-br from-[#e9f4ff] to-white ">
          {/* Photo / intro card */}
          <div
            className={[
              "flex justify-center md:justify-start",
              "transition-all duration-700 ease-out",
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            ].join(" ")}
          >
            <div
              className={[
                "relative rounded-2xl bg-white shadow-lg ring-1 ring-slate-200",
                "transition-transform duration-300 ease-out",
                shrinkPhoto ? "scale-80 md:scale-95" : "scale-100",
              ].join(" ")}
            >
     <div className="overflow-hidden rounded-2xl max-w-[260px] sm:max-w-[300px]">
  <img
    src={gregPhoto}
    alt="Gregory G. Glenn, Esq."
    className="w-full h-full object-cover"
  />
</div>

            </div>
          </div>

          {/* Text / primary content */}
          <div
            className={[
              "transition-all duration-700 ease-out",
              "md:delay-100",
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            ].join(" ")}
          >
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
          <div
            className={[
              "rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200",
              "transition-all duration-700 ease-out",
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            ].join(" ")}
            style={{ transitionDelay: loaded ? "150ms" : "0ms" }}
          >
            <h2 className="text-lg font-semibold">
              Have clients with IRS tax debt problems?
            </h2>
            <p className="mt-1 text-sm text-slate-700">
              We work to resolve IRS issues so your clients can move forward —
              from negotiated settlements to structured payment agreements.
            </p>

            <div className="mt-5 grid gap-6 sm:grid-cols-2">
              <ul className="space-y-1 text-sm text-slate-800">
                {servicesLeft.map((item, idx) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 transition-all duration-700 ease-out"
                    style={{ transitionDelay: `${200 + idx * 60}ms` }}
                  >
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-1 text-sm text-slate-800">
                {servicesRight.map((item, idx) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 transition-all duration-700 ease-out"
                    style={{ transitionDelay: `${200 + idx * 60}ms` }}
                  >
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Credentials card */}
          <aside
            className={[
              "rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200",
              "transition-all duration-700 ease-out",
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            ].join(" ")}
            style={{ transitionDelay: loaded ? "250ms" : "0ms" }}
          >
            <h3 className="text-base font-semibold">Why work with Greg?</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-800">
              {credentials.map((item, idx) => (
                <li
                  key={item}
                  className="flex items-start gap-2 transition-all duration-700 ease-out"
                  style={{ transitionDelay: `${260 + idx * 60}ms` }}
                >
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </section>
        {/* Image strip */}
        <section className="mt-16">
       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
  {[
    "/images/tax-image-1.jpeg",
    "/images/tax-image-2.jpeg",
    "/images/tax-image-3.jpeg",
  ].map((src) => (
    <div
      key={src}
      className="relative group overflow-hidden rounded-xl shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <img
        src={src}
        alt="Tax resolution related"
        className="h-64 w-full object-cover md:h-72 z-0"
      />

      {/* Much more visible overlay */}
      <div className="
        pointer-events-none absolute inset-0 z-10
        bg-gradient-to-t from-blue-900/40 via-blue-700/20 to-transparent
        opacity-60 group-hover:opacity-90
        transition-all duration-500
      "></div>
    </div>
  ))}
</div>



        </section>

                {/* Areas we serve + services grid */}
        <section className="mt-16 space-y-12">
          {/* Areas we serve */}
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
  {/* Header with subtle icon */}
  <div className="flex items-center gap-2">
    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-50">
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4 text-sky-700"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 21s-6-4.35-6-10a6 6 0 0 1 12 0c0 5.65-6 10-6 10z" />
        <circle cx="12" cy="11" r="2.5" />
      </svg>
    </div>
    <h2 className="text-lg font-semibold text-slate-900">
      Areas We Serve
    </h2>
  </div>

  <p className="mt-2 text-sm text-slate-700">
    Gregory Glenn represents clients throughout South Florida and across the
    United States in IRS tax debt matters.
  </p>

  <div className="mt-5 grid gap-6 md:grid-cols-2">
    {/* South Florida */}
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
        South Florida 
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {southFloridaAreas.map((area) => (
          <span
            key={area}
            className="inline-flex items-center rounded-full bg-slate-50 px-3 py-1 text-xs font-medium text-slate-800 ring-1 ring-slate-200 hover:bg-sky-50 hover:text-sky-800 hover:ring-sky-200 transition-colors"
          >
            {area}
          </span>
        ))}
      </div>
    </div>

    {/* Wider representation */}
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
        Wider Representation
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {widerAreas.map((area) => (
          <span
            key={area}
            className="inline-flex items-center rounded-full bg-slate-50 px-3 py-1 text-xs font-medium text-slate-800 ring-1 ring-slate-200 hover:bg-sky-50 hover:text-sky-800 hover:ring-sky-200 transition-colors"
          >
            {area}
          </span>
        ))}
      </div>
    </div>
  </div>
</div>

        

          {/* Tax resolution services grid */}
          <div>
            <h2 className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-slate-700">
              Tax Resolution Services
            </h2>

            <div className="mt-6 grid gap-6 md:grid-cols-3 sm:grid-cols-2">
              {resolutionServices.map((service) => (
                <div
                  key={service.title}
                  className="flex flex-col rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                >
                  {/* Simple check icon */}
                  <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-sky-100">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5 text-sky-700"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>

                  <h3 className="text-sm font-semibold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-600">
                    {service.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

                {/* Why our firm / professional representation */}
        <section className="mt-20 border-t border-slate-200 pt-14">
          <h2 className="mb-10 text-center text-lg font-semibold text-slate-900">
            Our Products
          </h2>

          <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-start">
            {/* Text columns */}
            <div className="space-y-8 text-sm text-slate-700">
              <div>
                <h3 className="text-base font-semibold text-slate-900">
                  Personalized, experienced representation
                </h3>
                <p className="mt-2">
                  You work directly with an experienced tax attorney. Gregory Glenn brings decades of experience resolving
                  tax issues for individuals and businesses, including work with
                  major accounting firms and complex government matters.
                </p>
                <p className="mt-3">
                  Proper representation can help protect you from aggressive
                  collection tactics, ensure your rights are respected, and
                  position your case for the best possible outcome.
                </p>
                <ul className="mt-3 list-disc space-y-1 pl-5">
                  <li>Protection from aggressive IRS collection efforts</li>
                  <li>Professional advocacy during negotiations</li>
                  <li>Deep knowledge of tax law and IRS procedure</li>
                  <li>Peace of mind knowing your case is handled correctly</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-semibold text-slate-900">
                  Why choose professional representation?
                </h3>
                <p className="mt-2">
                  Dealing with the IRS on your own can be stressful. An
                  experienced tax professional can serve as a buffer between you
                  and the IRS, helping protect your interests and presenting
                  your case in the strongest possible way.
                </p>
                <p className="mt-3">
                  With a seasoned spokesperson on your side, the IRS may view
                  and handle your case very differently than if you try to
                  navigate the process alone.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="order-first md:order-last">
              <div className="overflow-hidden rounded-2xl shadow-sm ring-1 ring-slate-200">
                <img
                  src={whyFirmImage}
                  alt="Attorney reviewing tax documents"
                  className="h-64 w-full object-cover md:h-80"
                />
              </div>
            </div>
          </div>
        </section>


      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
