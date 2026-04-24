import { Helmet } from 'react-helmet-async';
import { Award, Users, Clock, Shield } from 'lucide-react';
import StatCard from '../components/StatCard';
import { handleCTAClick } from '../utils/cta';

export default function AboutPage() {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Helmet>
        <title>About Corstar | Local IT Company in Westchester County Since 1969</title>
        <meta name="description" content="Corstar Communications has served businesses across Westchester County, NY, NJ, and CT since 1969. Learn about our history, certified team, and commitment to local IT excellence." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
            Since 1969
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Your Local IT Partner in <span className="text-blue-600">Westchester County</span> Since 1969
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto no-underline">
            55+ years of excellence in IT services, serving businesses across Westchester County, New York, New Jersey, and Connecticut
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center mb-20">
          <StatCard mainStat="55+" subtext="Years of Excellence" />
          <StatCard mainStat="500+" subtext="Satisfied Clients" />
          <StatCard mainStat="24/7" subtext="Support Available" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">Our Story</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Founded in 1969, Corstar Communications has been at the forefront of technology services for over five decades.
              What started as a small telecommunications company in Hawthorne, NY has evolved into a full-service IT solutions provider
              serving hundreds of businesses throughout Westchester County and the tri-state area — including White Plains, Yonkers,
              New Rochelle, Mount Vernon, Tarrytown, and beyond.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Our longevity in the Westchester IT market speaks to our commitment to excellence, innovation, and customer satisfaction.
              We've adapted and grown alongside technological advances — from the earliest business networks to today's cloud, cybersecurity,
              and compliance challenges — always staying ahead of the curve to provide our clients with the solutions they need.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Today, we're proud to be a trusted IT partner for businesses of all sizes across New York, New Jersey, and Connecticut.
              Our team of certified engineers and technicians brings decades of combined experience to every project, with deep knowledge
              of the compliance requirements — including NY DFS 23 NYCRR 500, HIPAA, and PCI-DSS — that affect businesses throughout the region.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">55+ Years</h3>
              </div>
              <p className="text-slate-600">
                Of continuous service excellence and technological innovation in the IT industry
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Certified Team</h3>
              </div>
              <p className="text-slate-600">
                Expert engineers and technicians with industry-leading certifications and expertise
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">24/7/365 Monitoring</h3>
              </div>
              <p className="text-slate-600">
                Round-the-clock monitoring and support to keep your business running smoothly
              </p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
              <div className="inline-flex p-4 bg-blue-50 rounded-full mb-4">
                <Shield className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Trust & Security</h3>
              <p className="text-slate-600">
                Your data security and business continuity are our top priorities. We implement industry-leading
                security practices in everything we do.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
              <div className="inline-flex p-4 bg-blue-50 rounded-full mb-4">
                <Users className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Partnership</h3>
              <p className="text-slate-600">
                We view our clients as partners, working collaboratively to understand your unique needs and
                deliver tailored solutions that drive success.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
              <div className="inline-flex p-4 bg-blue-50 rounded-full mb-4">
                <Award className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Excellence</h3>
              <p className="text-slate-600">
                From initial consultation to ongoing support, we maintain the highest standards of technical
                expertise and customer service.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-xl mb-8 text-blue-50 max-w-2xl mx-auto">
            Let's discuss how our 55+ years of experience can help your business thrive in today's digital landscape.
          </p>
          <button
            id="cta-about-contact"
            onClick={() => handleCTAClick('cta-about-contact')}
            className="px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Us Today
          </button>
        </div>
      </div>
    </div>
  );
}
