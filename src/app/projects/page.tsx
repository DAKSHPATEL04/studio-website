import ProjectGrid from "../../components/ProjectGrid";
import Navigation from "../../components/Navigation";
// import ConsoleBanner from "../../components/ConsoleBanner";
import MetadataPanel from "../../components/MetadataPanel";
import CookieConsent from "../../components/CookieConsent";
import Footer from "../../components/Footer";

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <div className="pt-16">
        <ProjectGrid />
      </div>
      <MetadataPanel />
      {/* <ConsoleBanner /> */}
      <Footer />
      <CookieConsent />
    </div>
  );
}