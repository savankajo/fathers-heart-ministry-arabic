import React from 'react';
import SEO from '../components/SEO';

const DonationsPage: React.FC = () => {
  return (
    <div className="font-body bg-gray-50 min-h-screen">
      <SEO
        title="Donate — Give"
        description="Support Father's Heart Church. Give online through our secure donation platforms inside or outside Canada."
      />

      {/* Page Hero */}
      <div className="bg-[#1a3a5c] py-16 text-center">
        <p className="text-[#D4AF37] font-semibold tracking-[0.3em] text-sm uppercase mb-3">Partner With Us</p>
        <h1 className="text-5xl font-bold font-heading text-white">Support Our Ministry</h1>
        <div className="w-16 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full" />
      </div>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Intro */}
        <div className="text-center mb-14">
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Every gift helps spread the Father's love and transform lives. Thank you for your generosity and partnership in the Gospel — <strong>carrying it where it's never been before.</strong>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Inside Canada */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="bg-[#1a3a5c] p-6 text-center">
              <span className="text-4xl">🇨🇦</span>
              <h2 className="text-2xl font-bold font-heading text-white mt-3">Inside Canada</h2>
            </div>
            <div className="p-8 text-center">
              <p className="text-gray-600 mb-6 leading-relaxed">
                Canadian residents can give securely through Tithe.ly, our trusted giving platform.
              </p>
              <a
                href="https://tithe.ly/give_new/www/#/tithely/give-one-time/7590166"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#1a3a5c] text-white font-bold py-4 px-8 rounded-xl text-center hover:bg-[#0f2540] transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl text-lg"
              >
                Give Now
              </a>
              <p className="text-xs text-gray-400 mt-3">Powered by Tithe.ly — Secure giving platform</p>
            </div>
          </div>

          {/* Outside Canada */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="bg-[#D4AF37] p-6 text-center">
              <span className="text-4xl">🌍</span>
              <h2 className="text-2xl font-bold font-heading text-black mt-3">Outside Canada</h2>
            </div>
            <div className="p-8 text-center">
              <p className="text-gray-600 mb-6 leading-relaxed">
                International donors can give through CanadaHelps, supporting our global mission.
              </p>
              <a
                href="https://www.canadahelps.org/en/charities/fathers-heart-ministry/?fbclid=IwY2xjawG4f45leHRuA2FlbQIxMAABHe2srJ5VNPVAPPj-glPnNGZurDMa9PGvDt5PPRPddRxvQoM4K0_mfu0SJQ_aem_-XJ6oXUSvUS8vKYvRrlRhg"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#D4AF37] text-black font-bold py-4 px-8 rounded-xl text-center hover:bg-[#c49b2a] transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl text-lg"
              >
                Give Now
              </a>
              <p className="text-xs text-gray-400 mt-3">Powered by CanadaHelps — Trusted charity platform</p>
            </div>
          </div>
        </div>

        {/* Security note */}
        <div className="mt-10 text-center bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-center gap-2 mb-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
            </svg>
            <span className="font-semibold text-gray-700">Secure &amp; Safe</span>
          </div>
          <p className="text-sm text-gray-500">
            You will be redirected to our secure donation platform. All transactions are encrypted and protected.
          </p>
        </div>

        {/* Tax Deductible notice */}
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm">
            Father's Heart Church is a registered charity. Gifts may be tax-deductible where applicable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonationsPage;