import { experienceEntries } from "../../data/siteContent";

export const metadata = {
  title: "Experience",
  description:
    "Professional experience of Sri Sudarsan with impact-focused responsibilities and outcomes."
};

export default function ExperiencePage() {
  return (
    <div className="page">
      <header className="pageHeader">
        <h1 className="pageTitle">Experience</h1>
        <p className="lead">
          A concise view of roles, scope, and measurable impact across each
          stage of my career.
        </p>
      </header>

      <section className="timeline" aria-label="Experience timeline">
        {experienceEntries.map((entry) => (
          <article className="role" key={`${entry.company}-${entry.duration}`}>
            <div className="roleTop">
              <div>
                <h2 className="roleTitle">{entry.role}</h2>
                <p className="roleCompany">{entry.company}</p>
              </div>
              <p className="roleDuration">{entry.duration}</p>
            </div>
            <ul className="bulletList">
              {entry.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </div>
  );
}

