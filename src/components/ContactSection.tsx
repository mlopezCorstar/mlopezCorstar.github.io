import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ContactSection() {

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-slate-600">
            Ready to transform your IT infrastructure? Get in touch with our team
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-6 sm:p-8 lg:p-12 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800">
              <h3 className="text-3xl font-bold text-white mb-8">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600/30 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 mb-1">Phone</div>
                    <a href="tel:+19143472700" className="text-white font-semibold hover:text-blue-400 transition-colors">
                      (914) 347-2700
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600/30 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 mb-1">Email</div>
                    <a href="mailto:info@corstar.com" className="text-white font-semibold hover:text-blue-400 transition-colors">
                      info@corstar.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600/30 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 mb-1">Address</div>
                    <div className="text-white font-semibold">
                      22 Saw Mill River Road<br />
                      Suite 303<br />
                      Hawthorne, NY 10532
                    </div>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=22+Saw+Mill+River+Road+Suite+303+Hawthorne+NY+10532"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 text-sm font-medium mt-2 inline-block transition-colors"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-slate-700/50">
                <div className="flex items-center gap-2 text-slate-500 text-sm mb-4 font-semibold">
                  <Clock className="w-4 h-4" />
                  Business Hours
                </div>
                <div className="text-white">
                  <div className="flex justify-between mb-2">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Saturday</span>
                    <span className="font-semibold">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>24/7 Emergency</span>
                    <span className="font-semibold text-blue-400">Always Available</span>
                  </div>
                </div>
                <Link
                  to="/remote-support"
                  className="mt-6 block w-full px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300 text-center"
                >
                  Remote Support
                </Link>
              </div>
            </div>

            <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">
                Get in Touch
              </h3>
              <p className="text-slate-600 mb-8 text-center">
                Ready to transform your IT infrastructure? Contact us today for a free consultation.
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:info@corstar.com"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:scale-[1.02]"
                >
                  <Mail className="w-5 h-5" />
                  Email Us
                </a>
                <a
                  href="tel:+19143472700"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
                >
                  <Phone className="w-5 h-5" />
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
