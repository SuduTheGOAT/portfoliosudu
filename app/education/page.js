import { educationEntries } from "../../data/siteContent";

export const metadata = {
  title: "Education",
  description:
    "Educational background of Sri Sudarsan with degrees, institutions, durations, and optional notes."
};

export default function EducationPage() {
  return (
    <div className="page">
      <header className="pageHeader">
        <h1 className="pageTitle">Education</h1>
        <p className="lead">
          Academic background presented in a straightforward and professional
          format.
        </p>
      </header>

      <section aria-label="Education details">
        {educationEntries.map((entry) => (
          <article
            className="educationItem"
            key={`${entry.institution}-${entry.duration}`}
          >
            <h2 className="sectionTitle">{entry.degree}</h2>
            <p>{entry.institution}</p>
            <p className="cardMeta">{entry.duration}</p>
            <p className="educationNotes">{entry.notes}</p>
          </article>
        ))}
      </section>
    </div>
  );
}

