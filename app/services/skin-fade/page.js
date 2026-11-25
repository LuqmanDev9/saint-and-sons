
import ServiceTemplate from "@/components/ServiceTemplate";

export const metadata = {
  title: "Skin Fade Haircut | Saint & Sons",
  description:
    "Experience precision skin fade haircuts at Saint & Sons. Low, mid and high fades with seamless blending.",
};

export default function SkinFadePage() {
  return (
    <ServiceTemplate
      title="Skin Fade"
      image="/skinfade.webp"
      tagline="Sharp lines. Seamless transitions."
      description="A precision haircut that blends seamlessly from longer hair down to the skin. Every cut is tailored to your style, hair type and face shape."
      price="$30"
      duration="45 Minutes"
      includes={[
        "Personal style consultation",
        "Low, mid or high skin fade",
        "Precision clipper work",
        "Hairline and neckline detailing",
        "Professional styling",
        "Finishing and grooming advice",
      ]}
    />
  );
}
