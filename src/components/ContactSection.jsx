import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Let’s Build Something Strong</h2>
            <p className="mt-3 text-gray-600">
              Request quotes, technical data sheets, or schedule a plant visit. Our team will get back within 24 hours.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-gray-900 text-white flex items-center justify-center">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Sales & Support</p>
                  <a href="tel:+1234567890" className="text-gray-600 hover:text-gray-900">+1 (234) 567-890</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-gray-900 text-white flex items-center justify-center">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <a href="mailto:info@steelco.com" className="text-gray-600 hover:text-gray-900">info@steelco.com</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-gray-900 text-white flex items-center justify-center">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Head Office</p>
                  <p className="text-gray-600">Industrial Estate, Sector 12, Metro City</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" required className="mt-1 w-full rounded-md border-gray-300 focus:border-gray-900 focus:ring-gray-900" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Company</label>
                  <input type="text" className="mt-1 w-full rounded-md border-gray-300 focus:border-gray-900 focus:ring-gray-900" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" required className="mt-1 w-full rounded-md border-gray-300 focus:border-gray-900 focus:ring-gray-900" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea rows="4" required className="mt-1 w-full rounded-md border-gray-300 focus:border-gray-900 focus:ring-gray-900" />
              </div>
              <button type="submit" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-gray-900 text-white font-semibold hover:bg-black transition w-full md:w-auto">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
