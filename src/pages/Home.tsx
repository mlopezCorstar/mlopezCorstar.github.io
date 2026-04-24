import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import ValuePropositionCards from '../components/ValuePropositionCards';
import ComplianceSection from '../components/ComplianceSection';
import About from '../components/About';
import CablingHighlight from '../components/CablingHighlight';
import CTABanner from '../components/CTABanner';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <div className="pt-20">
      <Helmet>
        <title>Corstar Communications | IT Support &amp; Managed IT Services Westchester NY</title>
        <meta name="description" content="Corstar Communications has provided managed IT services, network security, and structured cabling to Westchester County businesses since 1969. 24/7 support. Call (914) 347-2700." />
      </Helmet>
      <Hero />
      <ValuePropositionCards />
      <ComplianceSection />
      <About />
      <CablingHighlight />
      <CTABanner />
      <ContactSection />
    </div>
  );
}
