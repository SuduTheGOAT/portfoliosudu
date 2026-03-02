import Link from "next/link";
import { homeHighlights } from "../data/siteContent";

export const metadata = {
  title: "Home",
  description:
    "Recruiter-focused overview of Sri Sudarsan with key highlights and quick navigation to experience and contact."
};

export default function HomePage() {
  return (
    <div className="page">
      <header className="pageHeader">
        <hr className="accentRule" />
        <h1 className="pageTitle">Sri Sudarsan</h1>
        <p className="lead">
          Frontend engineer building reliable, performant digital products for
          modern teams.
        </p>
        <div className="ctaRow">
          <Link href="/experience" className="buttonPrimary">
            View Experience
          </Link>
          <Link href="/contact" className="buttonSecondary">
            Get in Touch
          </Link>
        </div>
      </header>

      <section className="section" aria-labelledby="intro-heading">
        <h2 id="intro-heading" className="sectionTitle">
          Intro
        </h2>
        <p className="sectionText">
          I build accessible interfaces with a clear product lens and a strong
          focus on maintainability. My work prioritizes readable architecture,
          measurable performance, and practical collaboration across teams.
        </p>
      </section>

      <section className="section" aria-labelledby="highlights-heading">
        <h2 id="highlights-heading" className="sectionTitle">
          Quick Highlights
        </h2>
        <ul className="highlights">
          {homeHighlights.map((item) => (
            <li key={item.label}>
              <span className="highlightLabel">{item.label}:</span>
              <span>{item.value}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

