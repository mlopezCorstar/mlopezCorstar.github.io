import LocationPage from '../../components/LocationPage';

const services = [
  { name: 'Network Security & Data Protection', description: "Firewall management, threat detection, and data loss prevention to safeguard client confidentiality and meet law firm cybersecurity obligations." },
  { name: 'NY DFS Compliance Support', description: 'For law firms subject to NY DFS 23 NYCRR 500, Corstar provides gap assessments, MFA implementation, incident response planning, and compliance documentation.' },
  { name: 'Managed IT Services', description: 'Proactive IT management with 24/7 monitoring, helpdesk support, and strategic planning for law firms across Westchester County.' },
  { name: 'Hosted Email & Archiving', description: 'Encrypted, litigation-ready email archiving and Microsoft 365 management for law firms with strict document retention requirements.' },
  { name: 'Cloud Solutions', description: 'Secure cloud migration and hybrid environments designed around the confidentiality and availability needs of legal practice management systems.' },
  { name: 'IT Consulting', description: 'Technology strategy and vendor management for law firms evaluating practice management software, document management systems, and remote work infrastructure.' },
];

const whyCorstar = [
  'Understanding of attorney-client privilege and legal data confidentiality requirements',
  'NY DFS 23 NYCRR 500 compliance expertise for covered law firms',
  'Serving Westchester County law firms and legal organizations since 1969',
  '24/7/365 monitoring and rapid incident response',
  'Litigation-hold and email archiving capabilities',
  'On-site support throughout Westchester County, NJ, and CT',
  'Confidential service with strong internal data handling practices',
  'Free initial security and compliance assessment',
];

export default function LegalFirms() {
  return (
    <LocationPage
      meta={{
        title: 'IT Services for Law Firms Westchester NY | Legal IT Support | Corstar',
        description: 'Corstar Communications provides managed IT services, cybersecurity, and compliance support for law firms across Westchester County, NY. Protecting client confidentiality since 1969. Call (914) 347-2700.',
      }}
      hero={{
        badge: 'Legal Industry IT',
        heading: 'IT Services & Cybersecurity for',
        headingAccent: 'Law Firms in Westchester County',
        subheading: 'Managed IT, network security, and compliance support for law firms and legal organizations across Westchester County — protecting client confidentiality and keeping your practice running.',
      }}
      intro="Law firms in Westchester County handle highly sensitive client data and operate under strict professional responsibility obligations around confidentiality and data security. At the same time, many are subject to New York DFS cybersecurity regulations and increasing threats from ransomware and phishing attacks targeting the legal industry. Corstar Communications has served businesses and professional services firms across Westchester County since 1969. We understand the unique IT needs of legal practices — from secure document management and email archiving to compliance support and 24/7 monitoring — and provide services designed to protect your clients and your firm."
      services={services}
      whyCorstar={whyCorstar}
      closingHeading="Protect Your Firm and Your Clients"
      closingBody="Contact Corstar Communications for a free security and compliance assessment for your law firm. We serve solo practitioners, boutique firms, and large practices throughout Westchester County with discreet, reliable IT services."
    />
  );
}
