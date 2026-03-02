import { projectEntries } from "../../data/siteContent";

export const metadata = {
  title: "Projects",
  description:
    "Selected projects by Sri Sudarsan with technical stack and placeholder source/demo links."
};

export default function ProjectsPage() {
  return (
    <div className="page">
      <header className="pageHeader">
        <h1 className="pageTitle">Projects</h1>
        <p className="lead">
          A focused snapshot of technical work with emphasis on engineering
          outcomes.
        </p>
      </header>

      <section className="cardGrid" aria-label="Project list">
        {projectEntries.map((project) => (
          <article key={project.title} className="card">
            <h2 className="cardTitle">{project.title}</h2>
            <p className="sectionText">{project.description}</p>
            <p className="cardMeta">Tech Stack: {project.stack}</p>
            <div className="cardLinks">
              <a href={project.githubUrl} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={project.demoUrl} target="_blank" rel="noreferrer">
                Demo
              </a>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

