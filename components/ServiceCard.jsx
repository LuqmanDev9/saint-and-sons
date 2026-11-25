
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock3 } from "lucide-react";

export default function ServiceCard({ service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block overflow-hidden rounded-xl
        border border-white/10 bg-[#101010]
        transition-all duration-300
        hover:-translate-y-1 hover:border-[#C49D66]/60"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={service.image}
          alt={service.alt}
          fill
          sizes="(max-width: 768px) 100vw,
                 (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform
            duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t
          from-[#101010] via-transparent to-transparent"
        />
      </div>

      <div className="relative px-6 pb-6">
        <h2 className="text-2xl font-bold uppercase
          tracking-wide text-white">
          {service.name}
        </h2>

        <p className="mt-3 text-sm leading-relaxed
          text-gray-400">
          {service.description}
        </p>

        <div className="mt-6 flex items-center gap-4
          text-sm">
          <span className="font-semibold text-[#C49D66]">
            From ${service.price}
          </span>

          <span className="flex items-center gap-1.5
            text-gray-400">
            <Clock3 size={15} />
            {service.duration} min
          </span>
        </div>

        <div className="mt-6 flex items-center
          justify-between border-t border-white/10 pt-5">
          <span className="text-sm font-medium
            text-[#C49D66]">
            EXPLORE SERVICE
          </span>

          <ArrowUpRight
            size={20}
            className="text-[#C49D66] transition-transform
              group-hover:-translate-y-1
              group-hover:translate-x-1"
          />
        </div>
      </div>
    </Link>
  );
}
