import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Vortex Tech | IT Internship Platform for Students",
  description: "Gain hands-on IT experience with real projects, expert review, GitHub portfolios, and industry-standard certificates at Vortex Tech.",
  keywords: "IT internships, Web development internship, Software engineering internship, AI internship, Pakistan students, student portfolio, tech internship",
  authors: [{ name: "Vortex Tech Team" }],
  openGraph: {
    title: "Vortex Tech | IT Internship Platform for Students",
    description: "Launch your IT career with hands-on projects, mentorship, and certficates.",
    url: "https://vortextech.com",
    siteName: "Vortex Tech",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="flex min-h-screen flex-col bg-background font-sans text-foreground antialiased selection:bg-vortex-cyan/35 selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

