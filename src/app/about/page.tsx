import Navigation from "../../components/Navigation";
// import ConsoleBanner from "../../components/ConsoleBanner";
import MetadataPanel from "../../components/MetadataPanel";
import CookieConsent from "../../components/CookieConsent";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <div className="pt-16 px-8 max-w-4xl mx-auto">
        <div className="py-20">
          <h1 className="text-4xl font-mono font-bold mb-8">ABOUT ORAGE</h1>
          
          <div className="space-y-6 font-mono text-lg">
            <p>
              Founded in 2015, ORAGE is a Paris-based directors and post-production studio 
              specializing in high-end visual effects, 3D animation, motion design, color grading, 
              and editorial services.
            </p>
            
            <p>
              Our team of creative technologists combines artistic vision with technical expertise 
              to deliver compelling visual narratives for film, television, advertising, and digital media.
            </p>
            
            <div className="mt-12">
              <h2 className="text-2xl font-mono font-bold mb-4">OUR APPROACH</h2>
              <ul className="space-y-3 ml-4">
                <li className="before:content-['•'] before:mr-2">Conceptual storytelling through visual innovation</li>
                <li className="before:content-['•'] before:mr-2">Seamless integration of practical and digital techniques</li>
                <li className="before:content-['•'] before:mr-2">Collaborative workflow with directors and producers</li>
                <li className="before:content-['•'] before:mr-2">Attention to detail in every frame</li>
              </ul>
            </div>
            
            <div className="mt-12">
              <h2 className="text-2xl font-mono font-bold mb-4">SERVICES</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="border border-white p-6">
                  <h3 className="text-xl font-mono font-bold mb-2">VFX & ANIMATION</h3>
                  <p>Photorealistic visual effects, creature animation, destruction simulations, and particle systems.</p>
                </div>
                <div className="border border-white p-6">
                  <h3 className="text-xl font-mono font-bold mb-2">MOTION DESIGN</h3>
                  <p>Cinematic title sequences, brand animations, and kinetic typography.</p>
                </div>
                <div className="border border-white p-6">
                  <h3 className="text-xl font-mono font-bold mb-2">COLOR GRADING</h3>
                  <p>Digital intermediate services and creative color correction.</p>
                </div>
                <div className="border border-white p-6">
                  <h3 className="text-xl font-mono font-bold mb-2">EDITORIAL</h3>
                  <p>Story-driven editing for commercials, films, and digital content.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MetadataPanel />
      {/* <ConsoleBanner /> */}
      <Footer />
      <CookieConsent />
    </div>
  );
}