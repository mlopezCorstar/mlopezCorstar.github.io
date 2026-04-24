import LocationPage from '../../components/LocationPage';

const services = [
  { name: 'Managed IT Services', description: 'Complete IT management with proactive monitoring, helpdesk support, and patch management for Mount Vernon businesses.' },
  { name: 'Network Security', description: 'Firewall management, threat detection, vulnerability assessments, and security training for Mount Vernon organizations.' },
  { name: 'Cloud Solutions', description: 'Cloud migration, Microsoft 365 and Azure implementation, and business continuity planning for Mount Vernon companies.' },
  { name: 'Structured Cabling', description: 'Professional network cabling installation and certification for offices and commercial facilities throughout Mount Vernon, NY.' },
  { name: 'VoIP Phone Systems', description: 'Cloud-based and on-premise VoIP solutions for Mount Vernon businesses looking to modernize their communications.' },
  { name: 'IT Consulting', description: 'Technology assessments, IT roadmap development, and strategic planning for growing businesses in Mount Vernon.' },
];

const whyCorstar = [
  'Westchester-based IT company serving Mount Vernon since 1969',
  'Rapid on-site response across Mount Vernon and southern Westchester',
  '24/7/365 emergency IT support available',
  'Experience serving diverse industries including healthcare, nonprofits, and retail',
  'Compliance support for HIPAA, PCI-DSS, and NY DFS regulations',
  'Flat-rate managed IT pricing with no hidden fees',
  'Free initial network assessment for new clients',
  'No long-term contracts required',
];

export default function MountVernon() {
  return (
    <LocationPage
      meta={{
        title: 'IT Support Mount Vernon NY | Managed IT Services | Corstar Communications',
        description: 'Corstar Communications provides managed IT services, cybersecurity, and network support to businesses in Mount Vernon, NY. Local Westchester IT company since 1969. Call (914) 347-2700.',
      }}
      hero={{
        badge: 'Serving Mount Vernon, NY',
        heading: 'IT Support & Managed IT Services in',
        headingAccent: 'Mount Vernon, NY',
        subheading: 'Dependable IT support for Mount Vernon businesses — managed services, network security, cloud solutions, and structured cabling from a trusted local Westchester IT provider.',
      }}
      intro="Mount Vernon sits at the southern edge of Westchester County and is home to a wide range of businesses, nonprofits, healthcare providers, and service organizations. Corstar Communications has supported businesses throughout Westchester County from our Hawthorne, NY office since 1969. Our certified engineers deliver managed IT, cybersecurity, cloud migration, and structured cabling services to Mount Vernon businesses — with the local presence and 24/7 responsiveness that out-of-area IT vendors simply cannot match."
      services={services}
      whyCorstar={whyCorstar}
      closingHeading="Local IT Support for Mount Vernon Businesses"
      closingBody="Contact Corstar Communications today for a free consultation. We serve organizations throughout Mount Vernon and Westchester County with on-site and remote IT support, around the clock."
    />
  );
}
