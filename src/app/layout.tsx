import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageWrapper from "./components/PageWrapper";
import Aurora from "./components/Aurora";
import AnimatedGrid from "./components/AnimatedGrid";
import Particles from "./components/Particles";
import ShootingStars from "./components/ShootingStars";
import Noise from "./components/Noise";
import CursorSpotlight from "./components/CursorSpotlight";

export const metadata = {
  title: "Thejaswi | Portfolio",
  description: "Projects, skills, and contact",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Background stack (furthest back first) */}
        <Noise />
        <AnimatedGrid />
        <Aurora />
        <Particles />
        <ShootingStars />
        <CursorSpotlight />

        <Navbar />
        <PageWrapper>{children}</PageWrapper>
        <Footer />
      </body>
    </html>
  );
}
