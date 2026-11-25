
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display, Oswald } from "next/font/google";
import { ArrowRight, Crown } from "lucide-react";

const playfair = Playfair_Display({
  subsets: ["latin"],
});

const oswald = Oswald({
  subsets: ["latin"],
});

export const metadata = {
  title: "Barber Services | Saint & Sons",
  description:
    "Explore our premium skin fades, beard trimming and traditional hot towel shaves at Saint & Sons.",
};

const services = [
  {
    title: "Skin Fade",
    image: "/skinfade.webp",
    href: "/services/skin-fade",
    description:
      "Sharp lines, seamless blends and precision in every detail.",
  },
  {
    title: "Beard Trim & Shape",
    image: "/beardtrim.webp",
    href: "/services/beard-trim",
    description:
      "Expert shaping for a clean, balanced and refined look.",
  },
  {
    title: "Hot Towel Shave",
    image: "/hottowel.webp",
    href: "/services/hot-towel-shave",
    description:
      "A timeless grooming ritual for the modern gentleman.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white">

      {/* TEMPORARY NAVBAR */}
      <header className="flex items-center justify-between border-b border-white/10 bg-black px-6 py-5 md:px-14">
        <Link href="/" className="flex items-center gap-3">
          <Crown size={30} className="text-[#C49D66]" />
          <span className={`${playfair.className} text-2xl font-bold`}>
            Saint & Sons
          </span>
        </Link>

        <Link
          href="/#booking"
          className="rounded-md border border-[#C49D66] px-5 py-2 text-xs font-bold text-[#C49D66] hover:bg-[#C49D66] hover:text-black"
        >
          BOOK NOW
        </Link>
      </header>

      {/* HEADING */}
      <section className="px-6 pb-14 pt-16 text-center md:pt-24">
        <p className="mb-5 text-xs tracking-[0.3em] text-[#C49D66]">
          THE ART OF GROOMING
        </p>

        <h1 className={`${playfair.className} text-5xl font-bold md:text-7xl`}>
          Our Services.
        </h1>

        <p className="mx-auto mt-6 max-w-xl leading-relaxed text-gray-400">
          Expert craftsmanship. Timeless style.
          Grooming without compromise.
        </p>
      </section>

      {/* SERVICES */}
      <section className="mx-auto grid max-w-[1440px] grid-cols-1 gap-6 px-6 pb-24 md:grid-cols-3 md:px-14">

        {services.map((service) => (
          <Link
            key={service.title}
            href={service.href}
            className="group overflow-hidden rounded-lg border border-white/10 bg-[#101010] transition-all duration-300 hover:border-[#C49D66]/60"
          >
            <div className="relative h-72 overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#101010] to-transparent" />
            </div>

            <div className="p-6">
              <h2 className={`${oswald.className} text-2xl font-semibold uppercase`}>
                {service.title}
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                {service.description}
              </p>

              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5 text-[#C49D66]">
                <span className="text-xs font-semibold tracking-wider">
                  EXPLORE SERVICE
                </span>

                <ArrowRight
                  size={19}
                  className="transition-transform group-hover:translate-x-1"
                />
              </div>
            </div>
          </Link>
        ))}

      </section>

      {/* BOOKING SECTION */}
      <section className="bg-[#C49D66] px-6 py-16 text-center text-black">

        <h2 className={`${oswald.className} text-3xl font-bold md:text-4xl`}>
          YOUR CHAIR IS WAITING.
        </h2>

        <p className="mt-4 text-sm">
          Great grooming starts with a great barber.
        </p>

        <Link
          href="/#booking"
          className="mt-7 inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 text-sm font-semibold text-white"
        >
          Book Your Appointment
          <ArrowRight size={18} />
        </Link>

      </section>

    </main>
  );
}
