import { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Lazy load route pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const AboutPage = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const RemoteSupport = lazy(() => import('./pages/RemoteSupport'));
const Admin = lazy(() => import('./pages/Admin'));

// Local landing pages
const WhitePlains = lazy(() => import('./pages/local/WhitePlains'));
const Yonkers = lazy(() => import('./pages/local/Yonkers'));
const NewRochelle = lazy(() => import('./pages/local/NewRochelle'));
const MountVernon = lazy(() => import('./pages/local/MountVernon'));
const Tarrytown = lazy(() => import('./pages/local/Tarrytown'));

// Industry pages
const FinancialServices = lazy(() => import('./pages/industry/FinancialServices'));
const Healthcare = lazy(() => import('./pages/industry/Healthcare'));
const LegalFirms = lazy(() => import('./pages/industry/LegalFirms'));
const Nonprofits = lazy(() => import('./pages/industry/Nonprofits'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function NotFound() {
  return (
    <div className="pt-20 min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-slate-900 mb-4">404</h1>
        <p className="text-xl text-slate-600 mb-8">Page not found</p>
        <Link
          to="/"
          className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Navigation />
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="flex flex-col items-center gap-4">
            <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            <span className="text-slate-500 text-sm">Loading...</span>
          </div>
        </div>
      }>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/remote-support" element={<RemoteSupport />} />
          <Route path="/admin" element={<Admin />} />

          {/* Local landing pages */}
          <Route path="/it-support-white-plains-ny" element={<WhitePlains />} />
          <Route path="/managed-it-services-yonkers" element={<Yonkers />} />
          <Route path="/it-services-new-rochelle" element={<NewRochelle />} />
          <Route path="/it-support-mount-vernon" element={<MountVernon />} />
          <Route path="/it-services-tarrytown-ny" element={<Tarrytown />} />

          {/* Industry pages */}
          <Route path="/financial-services-it-westchester" element={<FinancialServices />} />
          <Route path="/healthcare-it-support-westchester" element={<Healthcare />} />
          <Route path="/it-services-law-firms-westchester" element={<LegalFirms />} />
          <Route path="/nonprofit-it-support-westchester" element={<Nonprofits />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
