
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Playfair_Display, Oswald } from "next/font/google";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

import {
  Crown,
  Menu,
  X,
  ArrowRight,
  Scissors,
  Zap,
  ShieldCheck,
  Clock3,
  Star,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// FONTS
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
});

// DATA
const services = [
  {
    title: "SKIN FADE",
    image: "/skinfade.webp",
    href: "/services/skin-fade",
  },
  {
    title: "BEARD TRIM & SHAPE",
    image: "/beardtrim.webp",
    href: "/services/beard-trim",
  },
  {
    title: "HOT TOWEL SHAVE",
    image: "/hottowel.webp",
    href: "/services/hot-towel-shave",
  },
];

const features = [
  {
    icon: Scissors,
    title: "THE CRAFT",
    description:
      "From timeless classics to sharp modern fades. Every cut gets the attention it deserves.",
  },
  {
    icon: Zap,
    title: "YOUR TIME MATTERS",
    description:
      "Less waiting, more living. Book your chair in just a few taps.",
  },
  {
    icon: ShieldCheck,
    title: "IN GOOD HANDS",
    description:
      "Barbers who listen, understand your style, and know exactly how to bring it to life.",
  },
  {
    icon: Clock3,
    title: "COME AS YOU ARE",
    description:
      "Got a free moment? Walk right in. There's always room for a fresh cut.",
  },
];

// Demo reviews - replace with genuine reviews
const testimonials = [
  {
    name: "ALEX R.",
    review:
      "Great atmosphere, sharp cut every time. The best barber in town, hands down.",
  },
  {
    name: "MICHAEL T.",
    review:
      "No waiting — just book and go. Professional service and great vibes.",
  },
  {
    name: "DAVID K.",
    review:
      "Finally found a barber who understands beard shaping. Highly recommended.",
  },
];

const navLinks = [
  { title: "HOME", href: "#home", id: "home" },
  { title: "SERVICES", href: "#services", id: "services" },
  { title: "FIND US", href: "#location", id: "location" },
];

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // ACTIVE NAVIGATION ON SCROLL
  useEffect(() => {
    const sectionIds = ["home", "services", "booking", "location"];

    let frameId = null;

    const updateActiveSection = () => {
      const position = window.scrollY + window.innerHeight * 0.35;
      let current = "home";

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);

        if (section && section.offsetTop <= position) {
          current = id;
        }
      });

      setActiveSection(current);
      frameId = null;
    };

    const onScroll = () => {
      if (frameId === null) {
        frameId = window.requestAnimationFrame(updateActiveSection);
      }
    };

    updateActiveSection();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <main className="overflow-x-clip bg-[#0D0D0D]">

      {/* SMOOTH SCROLLING */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
          scroll-padding-top: 85px;
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }
        }
      `}</style>

      {/* ================= HEADER ================= */}

        

        {/* MOBILE NAVIGATION */}
        <div
          id="mobile-menu"
          className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
            isOpen
              ? "max-h-72 opacity-100"
              : "max-h-0 opacity-0"
          }`}
          inert={!isOpen}
        >
          <div className="flex flex-col gap-1 border-t border-white/10 bg-black/95 px-6 py-5">

            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={closeMenu}
                aria-current={
                  activeSection === link.id ? "location" : undefined
                }
                className={`rounded-md px-4 py-3 text-sm font-semibold tracking-wider transition-colors ${
                  activeSection === link.id
                    ? "bg-[#C49D66]/10 text-[#C49D66]"
                    : "text-white hover:text-[#C49D66]"
                }`}
              >
                {link.title}
              </a>
            ))}

            <a
              href="/booking"
              onClick={closeMenu}
              className="mt-3 rounded-md bg-[#C49D66] px-4 py-3 text-center text-sm font-bold text-black"
            >
              BOOK NOW
            </a>

          </div>
        </div>

      {/* ================= HERO ================= */}
      <section
        id="home"
        className="relative flex min-h-svh w-full items-center justify-center overflow-hidden"
      >

        {/* BACKGROUND */}
        <Image
          src="/hero.webp"
          alt="Saint & Sons Barbershop Interior"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* CINEMATIC OVERLAY */}
        <div className="absolute inset-0 bg-black/65" />

        {/* SUBTLE BOTTOM FADE */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#0D0D0D]/50" />

        {/* HERO CONTENT */}
        <div className="relative z-10 w-full max-w-5xl px-6 pt-24 text-center">

          <FadeIn onLoad delay={0.1}>
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C49D66] md:text-xs">
              SAINT & SONS • THE ART OF GROOMING
            </p>
          </FadeIn>

          <FadeIn onLoad delay={0.2}>
            <h1
              className={`${playfair.className} mb-6 text-5xl font-bold leading-[1.12] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl`}
            >
              A Cut Above
              <br />
              the Ordinary.
            </h1>
          </FadeIn>

          <FadeIn onLoad delay={0.35}>
            <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-gray-300 md:text-xl">
              Where timeless tradition meets modern craftsmanship.
              Experience precision grooming, refined style,
              and attention to every detail.
            </p>
          </FadeIn>

          <FadeIn onLoad delay={0.45}>
            <div className="flex flex-wrap items-center justify-center gap-4">

              <a
                href="/booking"
                className="flex items-center gap-4 rounded-full bg-[#C49D66] px-8 py-4 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-[#d8b580]"
              >
                Book Your Appointment
                <ArrowRight size={18} />
              </a>

              <a
                href="#services"
                className="rounded-full border border-white/30 bg-black/30 px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:border-[#C49D66] hover:text-[#C49D66]"
              >
                Our Services
              </a>

            </div>
          </FadeIn>

        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section
        id="services"
        className="scroll-mt-20 bg-[#0D0D0D] px-5 py-16 text-white md:px-10 lg:px-14"
      >

        <FadeIn>
          <h2
            className={`${oswald.className} mb-10 text-center text-3xl font-semibold uppercase tracking-wide md:text-4xl`}
          >
            OUR SERVICES
          </h2>
        </FadeIn>

        {/* WIDER SERVICE CARDS */}
        
<div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-6 md:grid-cols-3">

  {services.map((service, index) => (
    <FadeIn
      key={service.title}
      delay={index * 0.12}
      className="h-full"
    >
      <Link
        href={service.href}
        className="group relative block h-72 overflow-hidden rounded-lg bg-[#0D0D0D] md:h-80"
      >
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105 [mask-image:linear-gradient(to_bottom,transparent_0%,black_22%,black_100%)]"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

        <div className="absolute bottom-0 left-0 flex w-full items-center justify-between border-t border-white/15 bg-black/50 px-5 py-4 backdrop-blur-sm">

          <h3 className={`${oswald.className} text-lg font-medium uppercase tracking-wide`}>
            {service.title}
          </h3>

          <ArrowRight
            size={19}
            className="text-[#C49D66] transition-transform duration-300 group-hover:translate-x-1"
          />

        </div>
      </Link>
    </FadeIn>
  ))}

</div>


        <FadeIn delay={0.1}>
          <div className="mt-10 flex justify-center">
            <a
              href="/services"
              className="rounded-md border border-[#C49D66] px-8 py-3 text-sm font-semibold uppercase text-[#C49D66] transition-all duration-300 hover:bg-[#C49D66] hover:text-black"
            >
              VIEW ALL SERVICES
            </a>
          </div>
        </FadeIn>

      </section>

      {/* ================= PRICING BANNER ================= */}
      <section className="bg-[#0D0D0D] px-5 pb-12 md:px-8 lg:px-10">

        <FadeIn>
          <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-6 rounded-lg border-l-[3px] border-[#C49D66] bg-[#202020] px-7 py-8 md:flex-row md:items-center md:justify-between md:px-10 md:py-9 lg:px-14">

            <div>
              <h2
                className={`${oswald.className} mb-2 text-2xl font-semibold uppercase tracking-wide text-white md:text-3xl`}
              >
                STARTING FROM{" "}
                <span className="text-[#C49D66]">$30</span>
              </h2>

              <p className="max-w-2xl text-sm leading-relaxed text-gray-400 md:text-base">
                Great style shouldn't come with surprises.
                Quality cuts, straightforward pricing,
                and service worth coming back for.
              </p>
            </div>

            <a
              href="/services"
              className="flex w-fit shrink-0 items-center gap-3 rounded-md bg-white px-7 py-4 text-xs font-bold uppercase tracking-wide text-black transition-colors duration-300 hover:bg-[#C49D66]"
            >
              VIEW FULL PRICE LIST
              <ArrowRight size={17} />
            </a>

          </div>
        </FadeIn>

      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-[#0D0D0D] px-5 pb-16 pt-12 text-white md:px-10 lg:px-14">

        <FadeIn>
          <div className="mb-10 text-center">

            <h2
              className={`${oswald.className} mb-3 text-3xl font-semibold uppercase tracking-wide md:text-4xl`}
            >
              MORE THAN JUST A HAIRCUT.
            </h2>

            <p className="text-sm text-gray-400 md:text-base">
              A good haircut changes how you look.
              A great one changes how you carry yourself.
            </p>

          </div>
        </FadeIn>

        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {features.map((feature, index) => (
            <FadeIn
              key={feature.title}
              delay={index * 0.1}
              className="h-full"
            >
              <div className="group flex min-h-[220px] h-full flex-col items-center justify-center rounded-lg border border-white/10 bg-[#101010] px-6 py-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#C49D66]/50">

                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#242424] transition-colors duration-300 group-hover:bg-[#C49D66]/15">
                  <feature.icon
                    size={25}
                    strokeWidth={1.8}
                    className="text-[#C49D66]"
                  />
                </div>

                <h3
                  className={`${oswald.className} mb-3 text-base font-medium uppercase tracking-wide`}
                >
                  {feature.title}
                </h3>

                <p className="max-w-xs text-[13px] leading-relaxed text-gray-400">
                  {feature.description}
                </p>

              </div>
            </FadeIn>
          ))}

        </div>
      </section>

      {/* ================= BOOKING ================= */}
      <section
        id="booking"
        className="scroll-mt-20 bg-[#C49D66] px-6 py-16 text-center text-black md:py-18"
      >

        <FadeIn>
          <div className="mx-auto flex max-w-4xl flex-col items-center">

            <h2
              className={`${oswald.className} mb-3 text-3xl font-semibold uppercase tracking-wide md:text-4xl`}
            >
              YOUR NEXT GREAT CUT STARTS HERE.
            </h2>

            <p className="mb-8 text-sm text-black/75 md:text-base">
              Your chair is waiting. Book in seconds,
              show up, and leave looking your best.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">

              <a
                href="https://wa.me/971XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-md bg-black px-7 py-3 text-sm font-bold uppercase text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#242424]"
              >
                BOOK VIA WHATSAPP
                <ArrowRight size={17} />
              </a>

              <a
                href="sms:+971XXXXXXXXX"
                className="rounded-md border border-black px-7 py-3 text-sm font-bold uppercase text-black transition-all duration-300 hover:bg-black hover:text-white"
              >
                SEND SMS
              </a>

            </div>

          </div>
        </FadeIn>

      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="bg-[#0D0D0D] px-5 pb-14 pt-16 text-white md:px-10 lg:px-14">

        <FadeIn>
          <div className="mb-10 text-center">

            <h2
              className={`${oswald.className} text-3xl font-semibold uppercase tracking-wide md:text-4xl`}
            >
              WORD GETS AROUND.
            </h2>

            <p className="mt-3 text-sm text-gray-400 md:text-base">
              Good cuts speak for themselves.
              So do the people who wear them.
            </p>

          </div>
        </FadeIn>

        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-6 md:grid-cols-3">

          {testimonials.map((client, index) => (
            <FadeIn
              key={client.name}
              delay={index * 0.12}
              className="h-full"
            >
              <div className="flex h-full min-h-[190px] flex-col justify-between rounded-lg border border-white/5 bg-[#202020] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#C49D66]/40">

                <div>
                  <div
                    className="mb-4 flex gap-1 text-[#C49D66]"
                    aria-label="5 out of 5 stars"
                  >
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill="currentColor"
                        strokeWidth={1}
                      />
                    ))}
                  </div>

                  <p className="mb-5 text-sm italic leading-relaxed text-gray-300">
                    &ldquo;{client.review}&rdquo;
                  </p>
                </div>

                <p
                  className={`${oswald.className} text-sm font-medium uppercase tracking-wider text-white`}
                >
                  — {client.name}
                </p>

              </div>
            </FadeIn>
          ))}

        </div>
      </section>

      {/* ================= FIND US ================= */}
      <section
        id="location"
        className="scroll-mt-20 bg-[#0D0D0D] px-5 pb-16 pt-12 text-white md:px-10 md:pb-20 md:pt-16 lg:px-14"
      >

        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* LOCATION DETAILS */}
          <FadeIn>
            <div>

              <h2
                className={`${oswald.className} mb-5 text-3xl font-semibold uppercase tracking-wide md:text-4xl`}
              >
                FIND US
              </h2>

              <p className="mb-9 max-w-md text-sm leading-relaxed text-gray-400 md:text-base">
                Good cuts. Good company.
                A place you'll want to come back to.
                Drop by and make yourself at home.
              </p>

              {/* ADDRESS */}
              <div className="mb-7 flex items-start gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#242424]">
                  <MapPin size={22} className="text-[#C49D66]" />
                </div>

                <div>
                  <h3
                    className={`${oswald.className} mb-1 text-base font-medium uppercase`}
                  >
                    ADDRESS
                  </h3>

                  <p className="text-sm text-gray-400">
                    Your Barbershop Address Here
                  </p>
                </div>

              </div>

              {/* OPENING HOURS */}
              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#242424]">
                  <Clock3 size={22} className="text-[#C49D66]" />
                </div>

                <div>
                  <h3
                    className={`${oswald.className} mb-1 text-base font-medium uppercase`}
                  >
                    OPENING HOURS
                  </h3>

                  <p className="text-sm leading-relaxed text-gray-400">
                    Mon – Fri: 10:00 AM – 8:00 PM
                    <br />
                    Saturday: 9:00 AM – 6:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>

              </div>

            </div>
          </FadeIn>

          {/* DARK GOOGLE MAP */}
          <FadeIn delay={0.15}>
            <div className="relative h-[320px] w-full overflow-hidden rounded-xl border border-white/10 bg-[#171717] shadow-xl md:h-[400px]">

              <iframe
                src="https://www.google.com/maps?q=Dallas&output=embed"
                title="Map - Barbershop Location Placeholder"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full grayscale invert-[0.9] contrast-125"
              />

            </div>
          </FadeIn>

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      

    </main>
  );
}
