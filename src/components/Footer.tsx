"use client";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-xl font-mono font-bold">ORAGE</div>
            <div className="text-gray-500 text-sm mt-2">
              Directors & Post-Production Studio
            </div>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors font-mono text-sm">
              PROJECTS
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors font-mono text-sm">
              ABOUT
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors font-mono text-sm">
              CONTACT
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors font-mono text-sm">
              PRIVACY
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 font-mono text-xs">
            &copy; {new Date().getFullYear()} ORAGE STUDIO. ALL RIGHTS RESERVED.
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}