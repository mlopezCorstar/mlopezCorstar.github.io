import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Phone, Mail } from 'lucide-react';
import { handleCTAClick } from '../utils/cta';

export interface LocationPageProps {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    badge: string;
    heading: string;
    headingAccent: string;
    subheading: string;
  };
  intro: string;
  services: { name: string; description: string }[];
  whyCorstar: string[];
  closingHeading: string;
  closingBody: string;
}

export default function LocationPage({
  meta,
  hero,
  intro,
  services,
  whyCorstar,
  closingHeading,
  closingBody,
}: LocationPageProps) {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>

      {/* Hero */}
      <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="inline-block px-4 py-2 bg-blue-500/20 text-blue-200 rounded-full text-sm font-semibold mb-6">
            {hero.badge}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 max-w-3xl">
            {hero.heading}{' '}
            <span className="text-blue-400">{hero.headingAccent}</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mb-8">{hero.subheading}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              id="cta-location-primary"
              onClick={() => handleCTAClick('cta-location-primary')}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg"
            >
              Get a Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="tel:+19143472700"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 hover:border-white text-white font-semibold rounded-lg transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              (914) 347-2700
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">

        {/* Intro */}
        <section>
          <p className="text-lg text-slate-600 leading-relaxed max-w-4xl">{intro}</p>
        </section>

        {/* Services */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">
            IT Services We Provide
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{s.name}</h3>
                <p className="text-slate-600 text-sm">{s.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Why Corstar */}
        <section className="bg-blue-50 rounded-2xl p-8 sm:p-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">
            Why Businesses Choose Corstar
          </h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {whyCorstar.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">{point}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Closing + CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-8 sm:p-12 text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">{closingHeading}</h2>
          <p className="text-blue-50 text-lg mb-8 max-w-2xl">{closingBody}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              id="cta-location-closing"
              onClick={() => handleCTAClick('cta-location-closing')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 font-semibold rounded-lg transition-all duration-300 shadow-lg"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </button>
            <a
              href="tel:+19143472700"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/40 hover:border-white text-white font-semibold rounded-lg transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              (914) 347-2700
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
