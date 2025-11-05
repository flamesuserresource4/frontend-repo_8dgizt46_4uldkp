import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] overflow-hidden bg-black" id="home">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/JqBuM4DcZiGXqO-1/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays for readability (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
        <div className="text-white">
          <p className="uppercase tracking-widest text-sm text-gray-300">Premium TMT Steel</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-extrabold leading-tight">
            Strength You Can Trust.<br className="hidden md:block" /> Precision You Can Build On.
          </h1>
          <p className="mt-4 max-w-2xl text-gray-200">
            High-grade, corrosion-resistant TMT rebars engineered for durability and seismic safety.
            Delivering consistency and reliability for infrastructure, commercial, and residential projects.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#products" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-white text-black font-semibold hover:bg-gray-100 transition">
              Explore Products
            </a>
            <a href="#blog" className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-white/30 text-white hover:bg-white/10 transition">
              Read Our Blog
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
