import { Shield, Truck, Award, Package } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'High Strength & Ductility',
    desc: 'Thermo-mechanically treated for superior tensile strength, elongation, and seismic resilience.'
  },
  {
    icon: Package,
    title: 'Corrosion Resistance',
    desc: 'Enhanced rib pattern and anti-corrosion treatment to perform in coastal and humid environments.'
  },
  {
    icon: Truck,
    title: 'On-Time Delivery',
    desc: 'Pan-region logistics and strict timelines to keep your projects running on schedule.'
  },
  {
    icon: Award,
    title: 'Certified Quality',
    desc: 'Manufactured to IS standards with rigorous QA/QC and heat-number traceability.'
  }
];

export default function Highlights() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose Our TMT</h2>
            <p className="mt-2 text-gray-600">Engineered for modern construction demands</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex items-center px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">Get a Quote</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, idx) => (
            <div key={idx} className="group rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition bg-white">
              <div className="h-12 w-12 rounded-lg bg-gray-900 text-white flex items-center justify-center mb-4">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-gray-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
