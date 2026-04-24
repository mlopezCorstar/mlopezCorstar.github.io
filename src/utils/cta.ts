export type CTAAction =
  | { type: 'scroll'; targetId: string }
  | { type: 'link'; url: string; newTab?: boolean }
  | { type: 'tel'; phone: string }
  | { type: 'mailto'; email: string };

export const ctaMap: Record<string, CTAAction> = {
  'cta-hero-primary': {
    type: 'mailto',
    email: 'info@corstar.com'
  },
  'cta-hero-secondary': {
    type: 'scroll',
    targetId: 'services'
  },
  'cta-services-cabling': {
    type: 'mailto',
    email: 'info@corstar.com'
  },
  'cta-services-it': {
    type: 'mailto',
    email: 'info@corstar.com'
  },
  'cta-pricing-quote': {
    type: 'mailto',
    email: 'info@corstar.com'
  },
  'cta-compliance-assessment': {
    type: 'mailto',
    email: 'info@corstar.com'
  },
  'cta-about-contact': {
    type: 'mailto',
    email: 'info@corstar.com'
  },
  'cta-services-consultation': {
    type: 'mailto',
    email: 'info@corstar.com'
  },
  'cta-schedule': {
    type: 'link',
    url: import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com',
    newTab: true
  },
  'cta-call': {
    type: 'tel',
    phone: '+19143472700'
  },
  'cta-email': {
    type: 'mailto',
    email: 'info@corstar.com'
  },
  'cta-footer-contact': {
    type: 'mailto',
    email: 'info@corstar.com'
  },
};

export function handleCTAClick(ctaId: string) {
  const action = ctaMap[ctaId];
  if (!action) return;

  switch (action.type) {
    case 'scroll':
      const element = document.getElementById(action.targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      break;
    case 'link':
      if (action.newTab) {
        window.open(action.url, '_blank', 'noopener,noreferrer');
      } else {
        window.location.href = action.url;
      }
      break;
    case 'tel':
      window.location.href = `tel:${action.phone}`;
      break;
    case 'mailto': {
      const a = document.createElement('a');
      a.href = `mailto:${action.email}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      break;
    }
  }
}
