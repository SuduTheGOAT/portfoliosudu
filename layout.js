import "./globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata = {
  title: {
    default: "Sri Sudarsan | Portfolio",
    template: "%s | Sri Sudarsan"
  },
  description:
    "Portfolio website for Sri Sudarsan featuring experience, projects, skills, education, and contact details.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Sri Sudarsan | Portfolio",
    description:
      "Professional portfolio and online CV for recruiters, with clear experience and easy contact details.",
    type: "website"
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=switzer@400&f[]=khand@700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a className="skipLink" href="#main-content">
          Skip to main content
        </a>
        <div className="siteShell">
          <NavBar />
          <main id="main-content" className="siteMain">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

