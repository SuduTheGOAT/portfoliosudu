import { skillsByCategory } from "../../data/siteContent";

export const metadata = {
  title: "Skills",
  description:
    "Skills of Sri Sudarsan grouped by programming languages, tools and frameworks, and domains."
};

export default function SkillsPage() {
  return (
    <div className="page">
      <header className="pageHeader">
        <h1 className="pageTitle">Skills</h1>
        <p className="lead">
          Grouped for fast recruiter scanning and direct role matching.
        </p>
      </header>

      <section aria-label="Skills by category">
        {skillsByCategory.map((group) => (
          <article className="skillGroup" key={group.category}>
            <h2 className="sectionTitle">{group.category}</h2>
            <p className="skillItems">{group.items.join(", ")}</p>
          </article>
        ))}
      </section>
    </div>
  );
}

