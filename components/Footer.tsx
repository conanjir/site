import Link from "next/link";

import { siteSettings } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__inner">
        <p className="footer-meta">© 2026 Conan Richards</p>
        <div className="footer-links">
          <a href={`mailto:${siteSettings.email}`} className="footer-link">
            {siteSettings.email}
          </a>
          <Link href="/cv" className="footer-link">
            CV
          </Link>
        </div>
      </div>
    </footer>
  );
}
