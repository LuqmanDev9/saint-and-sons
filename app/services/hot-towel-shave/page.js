
import ServiceTemplate from "@/components/ServiceTemplate";

export const metadata = {
  title: "Traditional Hot Towel Shave | Saint & Sons",
  description:
    "Experience traditional hot towel shaving, classic barbering and refined men's grooming at Saint & Sons.",
};

export default function HotTowelShavePage() {
  return (
    <ServiceTemplate
      title="Hot Towel Shave"
      image="/hottowel.webp"
      tagline="Tradition, perfected."
      description="Experience the timeless art of traditional shaving. Warm towels, rich shaving lather and careful craftsmanship come together for a smooth, refreshing and refined grooming experience."
      price="$35"
      duration="30 Minutes"
      includes={[
        "Personal shaving consultation",
        "Warm towel preparation",
        "Traditional shaving lather",
        "Precision shave",
        "Post-shave soothing treatment",
        "Finishing and skincare advice",
      ]}
    />
  );
}
