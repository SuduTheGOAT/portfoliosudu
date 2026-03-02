export const metadata = {
  title: "Contact",
  description:
    "Contact Sri Sudarsan through a simple external form integration, email, or LinkedIn."
};

export default function ContactPage() {
  return (
    <div className="page">
      <header className="pageHeader">
        <h1 className="pageTitle">Contact</h1>
        <p className="lead">
          If my profile aligns with your hiring needs, I would be glad to
          connect.
        </p>
      </header>

      <section className="contactGrid" aria-label="Contact form and details">
        <form
          className="form"
          action="https://formspree.io/f/your-form-id"
          method="POST"
        >
          <div className="field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" required autoComplete="name" />
          </div>

          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required autoComplete="email" />
          </div>

          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required />
          </div>

          <button type="submit" className="buttonPrimary">
            Send Message
          </button>
          <p className="formNote">
            Replace the placeholder Formspree endpoint with your production
            form service URL.
          </p>
        </form>

        <aside>
          <h2 className="sectionTitle">Direct Contact</h2>
          <p className="contactMeta">Email: sri.sudarsan@example.com</p>
          <p className="contactMeta">
            LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/username" target="_blank" rel="noreferrer">
              linkedin.com/in/username
            </a>
          </p>
        </aside>
      </section>
    </div>
  );
}

