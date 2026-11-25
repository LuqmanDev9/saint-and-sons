
import ServiceTemplate from "@/components/ServiceTemplate";

export const metadata = {
  title: "Beard Trim & Shape | Saint & Sons",
  description:
    "Professional beard trimming, shaping and precision detailing at Saint & Sons.",
};

export default function BeardTrimPage() {
  return (
    <ServiceTemplate
      title="Beard Trim & Shape"
      image="/beardtrim.webp"
      tagline="Defined. Balanced. Refined."
      description="Expert beard trimming and shaping tailored to your facial structure. From clean contours to fuller beard styles, every detail is carefully refined to complement your appearance."
      price="$30"
      duration="25 Minutes"
      includes={[
        "Personal beard consultation",
        "Precision beard trimming",
        "Professional beard shaping",
        "Cheek and neckline detailing",
        "Beard styling",
        "Finishing and grooming advice",
      ]}
    />
  );
}
