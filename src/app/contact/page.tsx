import Navigation from "../../components/Navigation";
import ConsoleBanner from "../../components/ConsoleBanner";
import MetadataPanel from "../../components/MetadataPanel";
import CookieConsent from "../../components/CookieConsent";
import Footer from "../../components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <div className="pt-16 px-8 max-w-4xl mx-auto">
        <div className="py-20">
          <h1 className="text-4xl font-mono font-bold mb-8">CONTACT</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-mono font-bold mb-6">GET IN TOUCH</h2>
              
              <form className="space-y-6">
                <div>
                  <label className="block font-mono text-sm mb-2">NAME</label>
                  <input 
                    type="text" 
                    className="w-full bg-gray-900 border border-white p-3 font-mono text-white focus:outline-none focus:border-gray-400"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label className="block font-mono text-sm mb-2">EMAIL</label>
                  <input 
                    type="email" 
                    className="w-full bg-gray-900 border border-white p-3 font-mono text-white focus:outline-none focus:border-gray-400"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label className="block font-mono text-sm mb-2">MESSAGE</label>
                  <textarea 
                    rows={6}
                    className="w-full bg-gray-900 border border-white p-3 font-mono text-white focus:outline-none focus:border-gray-400"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="bg-white text-black px-6 py-3 font-mono font-bold hover:bg-gray-200 transition-colors"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
            
            <div>
              <h2 className="text-2xl font-mono font-bold mb-6">STUDIO INFO</h2>
              
              <div className="space-y-6 font-mono">
                <div>
                  <h3 className="text-lg font-bold mb-2">ADDRESS</h3>
                  <p>123 Creative Street</p>
                  <p>75001 Paris, France</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold mb-2">CONTACT</h3>
                  <p>hello@orage.studio</p>
                  <p>+33 1 23 45 67 89</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold mb-2">BUSINESS HOURS</h3>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold mb-2">SOCIAL</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="hover:text-gray-400 transition-colors">INSTAGRAM</a>
                    <a href="#" className="hover:text-gray-400 transition-colors">TWITTER</a>
                    <a href="#" className="hover:text-gray-400 transition-colors">VIMEO</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MetadataPanel />
      <ConsoleBanner />
      <Footer />
      <CookieConsent />
    </div>
  );
}