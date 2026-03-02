export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="siteFooter">
      <div className="container footerWrap">
        <p className="footerText">Sri Sudarsan {year}</p>
        <ul className="footerLinks" aria-label="Social links">
          <li>
            <a href="https://www.linkedin.com/in/username" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/username" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

