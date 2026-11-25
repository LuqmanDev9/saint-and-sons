
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display, Oswald } from "next/font/google";
import {
  Crown,
  ArrowRight,
  ArrowLeft,
  Clock3,
  Check,
} from "lucide-react";

const playfair = Playfair_Display({
  subsets: ["latin"],
});

const oswald = Oswald({
  subsets: ["latin"],
});

export default function ServiceTemplate({
  title,
  image,
  tagline,
  description,
  price,
  duration,
  includes,
}) {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white">

      {/* NAVBAR */}
      <header className="flex items-center justify-between border-b border-white/10 bg-black px-6 py-5 md:px-14">

        <Link href="/" className="flex items-center gap-3">
          <Crown size={30} className="text-[#C49D66]" />

          <span className={`${playfair.className} text-2xl font-bold`}>
            Saint & Sons
          </span>
        </Link>

        <Link
          href="/#booking"
          className="rounded-md border border-[#C49D66] px-5 py-2 text-xs font-bold text-[#C49D66] transition-colors hover:bg-[#C49D66] hover:text-black"
        >
          BOOK NOW
        </Link>

      </header>

      {/* SERVICE SECTION */}
      <section className="mx-auto max-w-[1440px] px-6 py-12 md:px-14 md:py-20">

        <Link
          href="/services"
          className="mb-10 inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-[#C49D66]"
        >
          <ArrowLeft size={17} />
          All Services
        </Link>

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* IMAGE */}
          <div className="relative h-[350px] overflow-hidden rounded-xl md:h-[500px]">

            <Image
              src={image}
              alt={title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

          </div>

          {/* SERVICE DETAILS */}
          <div>

            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#C49D66]">
              THE ART OF GROOMING
            </p>

            <h1 className={`${playfair.className} mb-5 text-5xl font-bold md:text-7xl`}>
              {title}.
            </h1>

            <p className="mb-5 text-lg text-[#C49D66]">
              {tagline}
            </p>

            <p className="max-w-xl leading-relaxed text-gray-400">
              {description}
            </p>

            {/* PRICE AND DURATION */}
            <div className="my-8 flex items-center gap-8 border-y border-white/10 py-6">

              <div>
                <p className="mb-1 text-xs uppercase tracking-wider text-gray-400">
                  Starting From
                </p>

                <p className="text-3xl font-bold text-[#C49D66]">
                  {price}
                </p>
              </div>

              <div className="h-12 w-px bg-white/10" />

              <div>
                <p className="mb-2 text-xs uppercase tracking-wider text-gray-400">
                  Duration
                </p>

                <p className="flex items-center gap-2 text-lg">
                  <Clock3 size={19} className="text-[#C49D66]" />
                  {duration}
                </p>
              </div>

            </div>

            <Link
              href="/#booking"
              className="inline-flex items-center gap-3 rounded-full bg-[#C49D66] px-8 py-4 text-sm font-bold text-black transition-all hover:-translate-y-1 hover:bg-[#d8b580]"
            >
              BOOK THIS SERVICE
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="border-y border-white/10 bg-[#101010] px-6 py-16 md:px-14">

        <div className="mx-auto max-w-[1440px]">

          <h2 className={`${oswald.className} mb-8 text-3xl font-semibold uppercase md:text-4xl`}>
            What's Included
          </h2>

          <div className="grid gap-5 md:grid-cols-2">

            {includes.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-lg border border-white/10 bg-[#0D0D0D] p-5"
              >
                <Check size={20} className="shrink-0 text-[#C49D66]" />

                <p className="text-sm text-gray-300">
                  {item}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* OTHER SERVICES */}
      <section className="px-6 py-16 text-center">

        <h2 className={`${oswald.className} mb-4 text-3xl font-semibold uppercase`}>
          Complete Your Look.
        </h2>

        <p className="mb-7 text-gray-400">
          Discover more of our signature grooming services.
        </p>

        <Link
          href="/services"
          className="inline-flex items-center gap-3 rounded-md border border-[#C49D66] px-7 py-3 text-sm font-semibold text-[#C49D66] transition-colors hover:bg-[#C49D66] hover:text-black"
        >
          VIEW ALL SERVICES
          <ArrowRight size={17} />
        </Link>

      </section>

    </main>
  );
}
