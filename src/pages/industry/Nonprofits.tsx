import LocationPage from '../../components/LocationPage';

const services = [
  { name: 'Managed IT Services', description: 'Affordable, proactive IT management with 24/7 monitoring, helpdesk, and maintenance — priced for nonprofit budgets without sacrificing capability.' },
  { name: 'Microsoft 365 Nonprofit Licensing', description: 'Guidance on Microsoft 365 nonprofit pricing and implementation to help Westchester nonprofits maximize their technology budget.' },
  { name: 'Network Security', description: 'Cybersecurity solutions scaled for nonprofits — protecting donor data, financial records, and program data from threats.' },
  { name: 'Cloud Solutions & Backup', description: 'Cloud migration, data backup, and disaster recovery to ensure your mission-critical data is always protected and accessible.' },
  { name: 'Structured Cabling', description: 'Network infrastructure installation for nonprofit offices, community centers, and multi-site organizations across Westchester County.' },
  { name: 'IT Consulting', description: 'Technology needs assessments, IT budgeting, and roadmap development to help nonprofits plan technology investments strategically.' },
];

const whyCorstar = [
  'Flexible pricing structures designed to fit nonprofit budgets',
  'Guidance on nonprofit software licensing and cost reduction programs',
  'Serving Westchester County organizations since 1969',
  'Experience with multi-site nonprofits, social services, and community organizations',
  '24/7/365 monitoring and support',
  'On-site technicians available throughout Westchester County',
  'Support for grant-funded IT projects and technology upgrades',
  'Free initial IT assessment for nonprofits',
];

export default function Nonprofits() {
  return (
    <LocationPage
      meta={{
        title: 'Nonprofit IT Support Westchester NY | IT Services for Nonprofits | Corstar',
        description: 'Corstar Communications provides affordable managed IT services and IT consulting for nonprofits across Westchester County, NY. Protecting your mission since 1969. Call (914) 347-2700.',
      }}
      hero={{
        badge: 'Nonprofit IT',
        heading: 'IT Support & Managed IT Services for',
        headingAccent: 'Nonprofits in Westchester County',
        subheading: 'Affordable, reliable IT services for nonprofits and community organizations across Westchester County — managed IT, cybersecurity, cloud solutions, and strategic IT consulting.',
      }}
      intro="Nonprofits in Westchester County face the same cybersecurity threats and technology demands as for-profit businesses — but typically with smaller IT budgets and no dedicated IT staff. Corstar Communications has supported organizations across Westchester County since 1969, and we understand how to deliver enterprise-quality IT services at a cost structure that works for mission-driven organizations. From managed IT and Microsoft 365 implementation to network security and structured cabling, we help Westchester nonprofits run efficiently so their teams can focus on the communities they serve."
      services={services}
      whyCorstar={whyCorstar}
      closingHeading="IT Support That Fits Your Mission and Your Budget"
      closingBody="Contact Corstar Communications for a free IT assessment. We work with nonprofits, foundations, and community organizations throughout Westchester County to deliver reliable, affordable IT services that support your mission."
    />
  );
}
