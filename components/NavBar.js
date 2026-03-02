"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationLinks } from "../data/siteContent";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <header className="siteHeader">
      <div className="container navWrap">
        <Link href="/" className="wordmark" aria-label="Go to home page">
          Sri Sudarsan
        </Link>
        <nav aria-label="Primary">
          <ul className="navList">
            {navigationLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`navLink${isActive ? " active" : ""}`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

