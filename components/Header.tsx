"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { Route } from "next";

const navItems = [
  { href: "/work", label: "Work" },
  { href: "/fragments", label: "Fragments" },
  { href: "/info", label: "Info" },
  { href: "/contact", label: "Contact" }
] as const satisfies ReadonlyArray<{ href: Route; label: string }>;

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isWorkIndex = pathname === "/work";
  const isCurrent = (href: Route) =>
    href === "/work" ? pathname === "/work" || pathname.startsWith("/work/") : pathname === href;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={`site-header${isWorkIndex ? " site-header--overlay" : ""}`}>
        <div className="shell site-header__inner">
          <Link href="/work" className="wordmark" onClick={() => setOpen(false)}>
            Conan Richards
          </Link>

          <nav className="desktop-nav" aria-label="Primary">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="nav-link" aria-current={isCurrent(item.href) ? "page" : undefined}>
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            Menu
          </button>
        </div>
      </header>

      <div id="mobile-menu" className={`mobile-menu${isWorkIndex ? " mobile-menu--overlay" : ""}${open ? " is-open" : ""}`}>
        <nav className="mobile-menu__nav" aria-label="Mobile">
          <Link href="/work" className="mobile-link" onClick={() => setOpen(false)}>
            Conan Richards
          </Link>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="mobile-link"
              aria-current={isCurrent(item.href) ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
