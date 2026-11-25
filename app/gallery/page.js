
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display, Oswald } from "next/font/google";
import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const playfair = Playfair_Display({
  subsets: ["latin"],
});

const oswald = Oswald({
  subsets: ["latin"],
});

export const metadata = {
  title: "Gallery | Saint & Sons",
  description:
    "Explore precision haircuts, beard grooming and the luxury barbershop experience at Saint & Sons.",
};

// GALLERY IMAGES
const images = [
  {
    src: "/skinfade.webp",
    alt: "Precision Skin Fade",
    size: "col-span-2 md:row-span-2",
  },
  {
    src: "/hero.webp",
    alt: "The Saint & Sons Experience",
    size: "col-span-2",
  },
  {
    src: "/beardtrim.webp",
    alt: "Beard Trim & Shape",
    size: "col-span-1",
  },
  {
    src: "/hottowel.webp",
    alt: "Traditional Hot Towel Shave",
    size: "col-span-1",
  },
  {
    src: "/barber1.webp",
    alt: "Barbering Craftsmanship",
    size: "col-span-1",
  },
  {
    src: "/barber2.webp",
    alt: "Precision Grooming",
    size: "col-span-1 md:col-span-2",
  },
  {
    src: "/barber3.webp",
    alt: "The Art of Barbering",
    size: "col-span-2 md:col-span-1 md:row-span-2",
  },
  {
    src: "/barber4.webp",
    alt: "Signature Styling",
    size: "col-span-2 md:col-span-3",
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#0D0D0D] pt-20 text-white">

      {/* PAGE HEADING */}
      <section className="px-6 pb-10 pt-12 text-center md:pt-16">

        <FadeIn onLoad>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#C49D66]">
            THE ART OF GROOMING
          </p>

          <h1
            className={`${playfair.className} text-5xl font-bold md:text-6xl`}
          >
            Our Gallery.
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-gray-400 md:text-base">
            Every cut tells a story. Explore our craft,
            our space, and the details that make the difference.
          </p>
        </FadeIn>

      </section>

      {/* BENTO GALLERY */}
      <section className="mx-auto max-w-[1440px] px-5 pb-14 md:px-10">

        <div className="grid grid-cols-2 auto-rows-[180px] gap-3 md:grid-cols-4 md:auto-rows-[220px] md:gap-4">

          {images.map((image, index) => (
            <div
              key={image.src}
              className={`relative min-h-0 ${image.size}`}
            >

              {/* SCROLL ANIMATION */}
              <div className="absolute inset-0 [&>*]:h-full">

                <FadeIn delay={(index % 4) * 0.1}>

                  <div className="group relative h-full w-full overflow-hidden rounded-xl border border-white/10">

                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes={
                        image.size.includes("md:col-span-3")
                          ? "(max-width: 768px) 100vw, 75vw"
                          : image.size.includes("col-span-2")
                            ? "(max-width: 768px) 100vw, 50vw"
                            : "(max-width: 768px) 50vw, 25vw"
                      }
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* DARK OVERLAY */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                    {/* IMAGE CAPTION */}
                    <div className="absolute bottom-0 left-0 p-3 md:p-5">

                      <p
                        className={`${oswald.className} text-sm font-medium uppercase tracking-wide text-white md:text-lg`}
                      >
                        {image.alt}
                      </p>

                    </div>

                  </div>

                </FadeIn>

              </div>

            </div>
          ))}

        </div>

        <FadeIn>
          <p className="mt-7 text-center text-xs uppercase tracking-[0.25em] text-gray-500">
            The Craft. The Detail. The Experience.
          </p>
        </FadeIn>

      </section>

      {/* BOOKING CTA */}
      <section className="bg-[#C49D66] px-6 py-12 text-center text-black">

        <FadeIn>
          <h2
            className={`${oswald.className} text-3xl font-semibold uppercase md:text-4xl`}
          >
            LOOK GOOD. FEEL BETTER.
          </h2>

          <p className="mt-3 text-sm md:text-base">
            Your next great cut is just an appointment away.
          </p>

          <Link
            href="/#booking"
            className="mt-6 inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#242424]"
          >
            BOOK YOUR APPOINTMENT
            <ArrowRight size={18} />
          </Link>
        </FadeIn>

      </section>

    </main>
  );
}
