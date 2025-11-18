import HeroSection from "../components/HeroSection";
import ProjectGrid from "../components/ProjectGrid";
// import ConsoleBanner from "../components/ConsoleBanner";
import Navigation from "../components/Navigation";
import MetadataPanel from "../components/MetadataPanel";
import CookieConsent from "../components/CookieConsent";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <HeroSection />
      <ProjectGrid />
      <MetadataPanel />
      {/* <ConsoleBanner /> */}
      <Footer />
      <CookieConsent />
    </div>
  );
}