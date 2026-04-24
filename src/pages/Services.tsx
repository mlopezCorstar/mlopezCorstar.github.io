import { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Network, Shield, Cloud, Cable, Phone, Video, Server, Mail, Users, Wrench, ChevronDown } from 'lucide-react';
import { handleCTAClick } from '../utils/cta';

const services = [
  {
    icon: Network,
    title: 'Managed IT Services',
    description: 'Fully managed IT support for Westchester County businesses — proactive monitoring, helpdesk, and strategic planning under one flat-rate agreement.',
    body: 'Corstar Communications delivers managed IT services to small and mid-sized businesses across Westchester County, including White Plains, Yonkers, New Rochelle, and the surrounding tri-state area. Our proactive monitoring and helpdesk support means issues are resolved — often before you notice them — so your team stays productive and your systems stay online. Whether you need complete IT outsourcing or co-managed support to supplement your internal team, our certified engineers are available 24/7/365.',
    details: [
      '24/7/365 Network Monitoring & Management',
      'Remote & On-site Helpdesk Support',
      'Endpoint Management & Patch Management',
      'Proactive Maintenance & System Updates',
      'IT Asset Management & Documentation',
      'Strategic IT Planning & Consulting'
    ]
  },
  {
    icon: Shield,
    title: 'Network Security',
    description: 'Enterprise-grade cybersecurity solutions built for Westchester businesses — including NY DFS 23 NYCRR 500 compliance support.',
    body: 'Cyber threats targeting small and mid-sized businesses in New York are increasing every year. Corstar provides layered network security services that protect your data, your clients, and your reputation. We specialize in NY DFS Cybersecurity Regulation (23 NYCRR 500) compliance for financial and legal firms in Westchester County, as well as HIPAA and PCI-DSS compliance for healthcare and retail organizations across NY, NJ, and CT.',
    details: [
      'Next-Generation Firewall Configuration',
      'Advanced Threat Detection & Response',
      'Security Compliance (HIPAA, PCI-DSS, SOC 2, NY DFS)',
      'Vulnerability Assessments & Penetration Testing',
      'Email Security & Anti-Phishing Protection',
      'Security Awareness Training'
    ]
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Secure cloud migration and management for Westchester businesses moving to Microsoft 365, Azure, and hybrid cloud environments.',
    body: 'Moving to the cloud should reduce complexity, not add it. Corstar guides Westchester County businesses through every stage of cloud adoption — from initial strategy and migration planning to ongoing management, cost optimization, and security hardening. We specialize in Microsoft 365 and Azure implementations and provide cloud backup and disaster recovery solutions that keep your business running through any disruption.',
    details: [
      'Cloud Migration & Strategy Consulting',
      'Microsoft 365 & Azure Implementation',
      'Cloud Backup & Disaster Recovery',
      'Hybrid Cloud Architecture',
      'Cloud Cost Optimization',
      'Cloud Security & Compliance'
    ]
  },
  {
    icon: Cable,
    title: 'Structured Cabling',
    description: 'Professional network cabling installation and certification for offices, data centers, and commercial buildings throughout Westchester County.',
    body: 'A reliable network starts with a solid physical foundation. Corstar's structured cabling teams serve commercial clients across Westchester County — from small office buildouts in Hawthorne and White Plains to large-scale data center installations. We install and certify Cat6, Cat6a, and fiber optic cabling to industry standards, ensuring your infrastructure is built for the speeds and workloads of today and tomorrow.',
    details: [
      'Cat6 & Cat6a Installation',
      'Fiber Optic Cabling & Termination',
      'Cable Certification & Testing',
      'Rack & Cabinet Installation',
      'Wireless Access Point Installation',
      'Data Center Cabling Solutions'
    ]
  },
  {
    icon: Phone,
    title: 'VoIP Phone Systems',
    description: 'Modern cloud-based and on-premise VoIP phone systems for Westchester businesses replacing legacy phone infrastructure.',
    body: 'Traditional phone systems are expensive to maintain and difficult to scale. Corstar helps Westchester County businesses upgrade to VoIP phone systems that reduce monthly costs, improve call quality, and integrate seamlessly with remote and hybrid work environments. From hosted cloud VoIP to on-premise solutions, we handle everything from number porting and auto-attendant configuration to mobile integration and ongoing support.',
    details: [
      'Cloud-based & On-premise VoIP Solutions',
      'Unified Communications Platforms',
      'Call Recording & Analytics',
      'Auto-Attendant & Call Routing',
      'Mobile Integration & Softphones',
      'SIP Trunking & Number Porting'
    ]
  },
  {
    icon: Server,
    title: 'Virtualization',
    description: 'VMware and Hyper-V virtualization solutions that reduce hardware costs and improve resilience for NY businesses.',
    body: 'Server virtualization allows Westchester businesses to consolidate hardware, reduce energy costs, and improve disaster recovery readiness. Corstar designs and implements VMware and Hyper-V environments tailored to your workload and budget. We also deliver virtual desktop infrastructure (VDI) for organizations that need secure, centrally managed workstations — ideal for remote teams and regulated industries across New York, New Jersey, and Connecticut.',
    details: [
      'VMware & Hyper-V Implementation',
      'Virtual Desktop Infrastructure (VDI)',
      'Server Consolidation & Migration',
      'High Availability & Disaster Recovery',
      'Performance Monitoring & Optimization',
      'Virtual Environment Management'
    ]
  },
  {
    icon: Video,
    title: 'Video Conferencing',
    description: 'Conference room design, AV installation, and platform setup for Zoom, Microsoft Teams, and Webex in Westchester offices.',
    body: 'Whether you\'re outfitting a single conference room or a multi-site Westchester office, Corstar designs and installs professional video conferencing systems that make remote collaboration feel effortless. We work with Zoom, Microsoft Teams, and Webex, providing end-to-end installation of audio/visual equipment, network configuration, and user training so your team can connect without technical friction.',
    details: [
      'Zoom, Microsoft Teams, & Webex Setup',
      'Conference Room System Design',
      'Audio/Visual Equipment Installation',
      'Screen Sharing & Collaboration Tools',
      'Video Conference Integration',
      'Training & User Support'
    ]
  },
  {
    icon: Mail,
    title: 'Hosted Email',
    description: 'Secure, compliant business email hosting and Microsoft 365 migration services for Westchester County organizations.',
    body: 'Reliable email is the backbone of business communication. Corstar manages hosted email environments for businesses across Westchester County, handling Microsoft 365 migrations, spam and malware filtering, email archiving for compliance, and mobile synchronization for on-the-go teams. We ensure your email infrastructure meets the security and retention requirements of regulated industries, including healthcare, financial services, and legal firms in New York.',
    details: [
      'Microsoft 365 Email Migration',
      'Email Encryption & Archiving',
      'Spam & Malware Filtering',
      'Mobile Device Synchronization',
      'Shared Calendars & Contacts',
      'Email Backup & Recovery'
    ]
  },
  {
    icon: Users,
    title: 'IT Consulting',
    description: 'Strategic IT consulting for Westchester businesses planning technology investments, digital transformation, and business continuity.',
    body: 'Technology decisions made today shape your business\'s capabilities for years to come. Corstar\'s IT consulting practice helps Westchester County businesses develop clear, actionable technology roadmaps aligned with their growth goals. From vendor selection and IT budgeting to digital transformation planning and business continuity strategy, our consultants bring 55+ years of practical experience to every engagement — with deep knowledge of the regulatory and competitive landscape facing NY, NJ, and CT organizations.',
    details: [
      'IT Strategy & Roadmap Development',
      'Technology Assessment & Audit',
      'Vendor Management & Negotiation',
      'IT Budgeting & Cost Analysis',
      'Digital Transformation Planning',
      'Business Continuity Planning'
    ]
  },
  {
    icon: Wrench,
    title: 'Staff Augmentation',
    description: 'On-demand IT professionals to fill skill gaps and support projects for businesses across Westchester County and the tri-state area.',
    body: 'When your internal IT team needs reinforcement — for a specific project, a temporary gap, or a specialized skill set — Corstar provides experienced IT professionals on a flexible basis. We place network engineers, system administrators, security specialists, and IT project managers with businesses throughout Westchester County and the tri-state area. Our staff augmentation model ensures seamless knowledge transfer so your team is stronger after every engagement.',
    details: [
      'Temporary & Project-based IT Staff',
      'Specialized Technical Expertise',
      'Network Engineers & System Admins',
      'Security Specialists & Consultants',
      'Flexible Engagement Models',
      'Knowledge Transfer & Documentation'
    ]
  }
];

function ServiceAccordion({ service, isOpen, onToggle }: { service: (typeof services)[0]; isOpen: boolean; onToggle: () => void }) {
  const Icon = service.icon;
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
      <button
        onClick={onToggle}
        className="w-full px-6 py-6 flex items-center justify-between bg-white hover:bg-slate-50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="p-3 bg-blue-50 rounded-lg">
            <Icon className="w-6 h-6 text-blue-600" />
          </div>
          <div className="text-left">
            <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
            <p className="text-slate-600 mt-1">{service.description}</p>
          </div>
        </div>
        <ChevronDown className={`w-6 h-6 text-slate-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <div
        ref={contentRef}
        className="transition-all duration-300 ease-in-out overflow-hidden"
        style={{ maxHeight: `${height}px`, opacity: isOpen ? 1 : 0 }}
      >
        <div className="px-6 py-6 bg-slate-50 border-t border-slate-200 space-y-4">
          <p className="text-slate-600 leading-relaxed">{service.body}</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
            {service.details.map((detail, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-slate-700">{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Helmet>
        <title>IT Services Westchester NY — Managed IT, Security, Cloud | Corstar</title>
        <meta name="description" content="Managed IT services, network security, structured cabling, cloud solutions, VoIP, and IT consulting for businesses across Westchester County, NY. Serving the tri-state area since 1969." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            IT Services in <span className="text-blue-600">Westchester County, NY</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive IT solutions for businesses across Westchester County, New York, New Jersey, and Connecticut.
            From managed IT and network security to structured cabling and cloud — backed by 55+ years of expertise.
          </p>
        </div>

        <div className="space-y-4">
          {services.map((service, idx) => (
            <ServiceAccordion
              key={idx}
              service={service}
              isOpen={openIndex === idx}
              onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
            />
          ))}
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-xl mb-6 text-blue-50">
            Every business is unique. Let's discuss how we can tailor our services to meet your specific needs.
          </p>
          <button
            id="cta-services-consultation"
            onClick={() => handleCTAClick('cta-services-consultation')}
            className="px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Schedule a Consultation
          </button>
        </div>
      </div>
    </div>
  );
}
