import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
    metadataBase: new URL("https://example.com"),

    title: {
        default: "Saint & Sons | Premium Barbershop",
        template: "%s | Saint & Sons",
    },

    description:
        "Experience premium men's grooming at Saint & Sons. Expert skin fades, beard trims and traditional hot towel shaves. Book your appointment online.",

    applicationName: "Saint & Sons",

    openGraph: {
        title: "Saint & Sons | Premium Barbershop",
        description:
            "Where timeless tradition meets modern craftsmanship.",
        siteName: "Saint & Sons",
        images: ["/hero.webp"],
        locale: "en_US",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Saint & Sons | Premium Barbershop",
        description: "A cut above the ordinary.",
        images: ["/hero.webp"],
    },

    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans"><Navbar />{children}<Footer /></body>
    </html>
  );
}
