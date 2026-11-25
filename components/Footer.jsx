
import Link from "next/link";
import { Crown, MapPin, Phone, Mail } from "lucide-react";
import { Playfair_Display, Oswald } from "next/font/google";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import FadeIn from "@/components/FadeIn";

const playfair = Playfair_Display({
  subsets: ["latin"],
});

const oswald = Oswald({
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0D0D0D] px-5 pt-14 text-white md:px-10 lg:px-14">

      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">

        {/* BRAND */}
        <FadeIn>
          <div>
            <Link href="/" className="mb-4 flex items-center gap-2">
              <Crown size={24} className="text-[#C49D66]" />

              <span className={`${playfair.className} text-xl font-bold`}>
                Saint & Sons
              </span>
            </Link>

            <p className="max-w-xs text-sm leading-relaxed text-gray-400">
              Good hair never goes out of style.
              Classic cuts, modern craftsmanship,
              and a chair worth coming back to.
            </p>
          </div>
        </FadeIn>

        {/* QUICK LINKS */}
        <FadeIn delay={0.1}>
          <div>
            <h3 className={`${oswald.className} mb-5 text-base font-medium uppercase tracking-wider`}>
              QUICK LINKS
            </h3>

            <ul className="flex flex-col gap-3 text-sm text-gray-400">

              <li>
                <Link href="/" className="transition-colors hover:text-[#C49D66]">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/services" className="transition-colors hover:text-[#C49D66]">
                  Services
                </Link>
              </li>

              <li>
                <Link href="/#location" className="transition-colors hover:text-[#C49D66]">
                  Find Us
                </Link>
              </li>

              <li>
                <Link href="/booking" className="transition-colors hover:text-[#C49D66]">
                  Book Now
                </Link>
              </li>

            </ul>
          </div>
        </FadeIn>

        {/* CONTACT */}
        <FadeIn delay={0.2}>
          <div>
            <h3 className={`${oswald.className} mb-5 text-base font-medium uppercase tracking-wider`}>
              CONTACT
            </h3>

            <div className="flex flex-col gap-4 text-sm text-gray-400">

              <div className="flex items-start gap-2">
                <MapPin size={17} className="shrink-0 text-[#C49D66]" />
                <p>Your Barbershop Address Here</p>
              </div>

              <div className="flex items-center gap-2">
                <Phone size={17} className="shrink-0 text-[#C49D66]" />

                <a
                  href="tel:+971XXXXXXXXX"
                  className="transition-colors hover:text-[#C49D66]"
                >
                  +971 XX XXX XXXX
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail size={17} className="shrink-0 text-[#C49D66]" />

                <a
                  href="mailto:hello@example.com"
                  className="transition-colors hover:text-[#C49D66]"
                >
                  hello@example.com
                </a>
              </div>

            </div>
          </div>
        </FadeIn>

        {/* OPENING HOURS */}
        <FadeIn delay={0.3}>
          <div>
            <h3 className={`${oswald.className} mb-5 text-base font-medium uppercase tracking-wider`}>
              OPENING HOURS
            </h3>

            <div className="flex max-w-xs flex-col gap-3 text-sm text-gray-400">

              <div className="flex justify-between gap-5">
                <span>Mon – Fri</span>
                <span>10:00 – 20:00</span>
              </div>

              <div className="flex justify-between gap-5">
                <span>Saturday</span>
                <span>09:00 – 18:00</span>
              </div>

              <div className="flex justify-between gap-5">
                <span>Sunday</span>
                <span>Closed</span>
              </div>

            </div>
          </div>
        </FadeIn>

      </div>

      {/* BOTTOM FOOTER */}
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-5 border-t border-white/10 py-6 sm:flex-row">

        <p className="text-center text-xs text-gray-500 sm:text-left">
          © 2026 Saint & Sons. All rights reserved.
        </p>

        <div className="flex items-center gap-5">

          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-gray-400 transition-colors hover:text-[#C49D66]"
          >
            <FaInstagram size={19} />
          </a>

          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-gray-400 transition-colors hover:text-[#C49D66]"
          >
            <FaFacebookF size={19} />
          </a>

          <a
            href="https://x.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="text-gray-400 transition-colors hover:text-[#C49D66]"
          >
            <FaXTwitter size={19} />
          </a>

        </div>
      </div>

    </footer>
  );
}
