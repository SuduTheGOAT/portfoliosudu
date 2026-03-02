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
        <h1 className="pageTitle">Sri Sudarsan Tupil Ravi Desikan</h1>
        <p className="lead">
           Computer Engineer focused on digital design, computer architecture, and hardware verification, with interests in building and validating high-performance chips and computing systems.
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
          About Me
        </h2>
        <p className="sectionText">
          I’m a Computer Engineering graduate with strong fundamentals in digital design and computer architecture, and hands-on experience in Chip Design and Verification . I interned at Tenstorrent, working on UVM-based verification of a GPU command processor, formal coverage closure, and Python-based automation to improve verification efficiency. Academically, I’ve built cycle-accurate CPU and cache-coherent systems using SystemVerilog and gem5, including pipelined and out-of-order processors. I’m interested in RTL and design verification roles, with a focus on hardware, performance, and microarchitecture-level systems..
        </p>
      </section>

      <section className="section" aria-labelledby="highlights-heading">
        <h2 id="highlights-heading" className="sectionTitle">
          Highlights
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

