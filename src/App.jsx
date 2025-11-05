import Hero from './components/Hero';
import Highlights from './components/Highlights';
import BlogPreview from './components/BlogPreview';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="font-extrabold text-xl tracking-tight">SteelTMT</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#products" className="hover:text-gray-600">Products</a>
            <a href="#blog" className="hover:text-gray-600">Blog</a>
            <a href="#contact" className="hover:text-gray-600">Contact</a>
          </nav>
          <a href="#contact" className="hidden md:inline-flex items-center px-4 py-2 rounded-md bg-gray-900 text-white hover:bg-black">Get Quote</a>
        </div>
      </header>

      {/* Offset for fixed header */}
      <div className="h-16" />

      <Hero />
      <Highlights />
      <BlogPreview />
      <ContactSection />

      {/* Footer */}
      <footer className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} SteelTMT Industries. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900">Quality Policy</a>
            <a href="#" className="hover:text-gray-900">Certifications</a>
            <a href="#" className="hover:text-gray-900">Careers</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
