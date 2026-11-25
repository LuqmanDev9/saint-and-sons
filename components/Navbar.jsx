
"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Crown, Menu, X } from "lucide-react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
});

const links = [
  { title: "HOME", href: "/", id: "home" },
  { title: "SERVICES", href: "/services", id: "services" },
  { title: "GALLERY", href: "/gallery", id: "gallery" },
  { title: "FIND US", href: "/#location", id: "location" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const pathname = usePathname();

  const active = pathname.startsWith("/services")
  ? "services"
  : pathname === "/gallery"
    ? "gallery"
    : pathname === "/"
      ? activeSection
      : "";

  useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => {
      const sections = ["home", "services", "booking", "location"];
      const position = window.scrollY + window.innerHeight * 0.35;

      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);

        if (section && section.offsetTop <= position) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/85 backdrop-blur-lg">

      <nav className="mx-auto flex w-full items-center justify-between px-5 py-4 text-white md:px-10 lg:px-14">

        {/* LOGO */}
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-3"
        >
          <Crown
            size={32}
            strokeWidth={1.6}
            className="text-[#C49D66]"
          />

          <span className={`${playfair.className} text-xl font-bold md:text-2xl`}>
            Saint & Sons
          </span>
        </Link>

        {/* DESKTOP LINKS */}
        <ul className="hidden items-center gap-10 md:flex">

          {links.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                aria-current={active === link.id ? "true" : undefined}
                className={`relative block py-2 text-xs font-semibold tracking-[0.12em] transition-colors duration-300 ${
                  active === link.id
                    ? "text-[#C49D66]"
                    : "text-gray-300 hover:text-[#C49D66]"
                }`}
              >
                {link.title}

                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-[#C49D66] transition-all duration-300 ${
                    active === link.id ? "w-full" : "w-0"
                  }`}
                />

              </Link>
            </li>
          ))}

        </ul>

        {/* BOOK NOW */}
        <Link
          href="/booking"
          className={`hidden rounded-md border border-[#C49D66] px-6 py-2.5 text-xs font-bold tracking-wider transition-all duration-300 md:block ${
            active === "booking"
              ? "bg-[#C49D66] text-black"
              : "text-[#C49D66] hover:bg-[#C49D66] hover:text-black"
          }`}
        >
          BOOK NOW
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen(!isOpen)}
          className="text-[#C49D66] md:hidden"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

      </nav>

      {/* MOBILE NAVIGATION */}
      <div
        id="mobile-menu"
        inert={!isOpen}
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          isOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 border-t border-white/10 bg-black/95 px-6 py-5">

          {links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`rounded-md px-4 py-3 text-sm font-semibold tracking-wider ${
                active === link.id
                  ? "bg-[#C49D66]/10 text-[#C49D66]"
                  : "text-white hover:text-[#C49D66]"
              }`}
            >
              {link.title}
            </Link>
          ))}

          <Link
            href="/booking"
            onClick={() => setIsOpen(false)}
            className="mt-3 rounded-md bg-[#C49D66] px-4 py-3 text-center text-sm font-bold text-black"
          >
            BOOK NOW
          </Link>

        </div>
      </div>

    </header>
  );
}
