export const metadata = {
  title: "About",
  description:
    "Professional background and interests of Sri Sudarsan in a focused, non-casual tone."
};

export default function AboutPage() {
  return (
    <div className="page">
      <header className="pageHeader">
        <h1 className="pageTitle">About</h1>
        <p className="lead">
          A short narrative that provides context beyond the resume.
        </p>
      </header>

      <section className="aboutStack" aria-label="Background narrative">
        <p>
          My background combines hands-on frontend development with product
          thinking. I value clear interfaces, stable architecture, and
          collaboration that keeps delivery steady without sacrificing quality.
        </p>
        <p>
          I am especially interested in building platforms that scale across
          teams and use cases. This includes creating reusable UI systems,
          improving developer workflows, and maintaining strong accessibility
          standards from the start.
        </p>
        <p>
          Outside of core implementation, I enjoy turning ambiguous requirements
          into practical technical plans and helping teams ship with confidence.
        </p>
      </section>
    </div>
  );
}

