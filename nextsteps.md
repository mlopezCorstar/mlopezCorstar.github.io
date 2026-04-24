# Month 3 — Content Marketing Infrastructure
## The Phase That Separates Corstar From Every Competitor in Westchester

---

Most IT companies in Westchester County have a website. Very few have a content engine. Month 3 is where Corstar stops playing defense and starts owning the conversation — capturing search demand before competitors even know it exists, establishing Corstar as the undisputed authority on IT for Westchester businesses, and building a compounding asset that generates leads 24 hours a day without additional ad spend.

This is not a blog. This is a lead generation machine disguised as education.

---

## Initiative 1 — Blog / Resource Center

### What Needs to Be Built

Add a `/resources` route to the React app backed by a content pipeline. The recommended approach for this stack (React + Vite) is **MDX with static generation** — write articles in Markdown with embedded React components, build them at deploy time as static HTML. This gives full SEO indexability, zero runtime cost, and no CMS dependency.

Alternative if a non-technical editor needs to own content: connect a headless CMS (Sanity or Contentful) to the existing Vite/React frontend via their APIs. Higher setup cost, but allows the Corstar team to publish without touching code.

**Decision required before implementation:** Does Corstar's team want to own content publishing themselves, or will content be developer-managed? This determines MDX vs. headless CMS.

---

### Article Pipeline — Year 1 Priority Queue

These are not generic IT blog posts. Every article is engineered around a specific keyword from the playbook, a specific Westchester audience, and a specific point in the buying cycle. Each one exists to rank, capture an email, or convert a phone call.

---

#### Tier 1 — Commercial Intent (Readers Are Ready to Buy)

These articles target people actively evaluating IT vendors. They should be published first.

**1. "How to Choose a Managed IT Services Provider in Westchester County"**
- Target keyword: `managed it services westchester ny`
- Buying stage: Bottom of funnel
- Angle: A buyer's guide framed around the 8 questions every Westchester business should ask before signing an MSP contract — with Corstar's 55-year track record woven throughout as the implicit answer to every question.
- Length: 1,800–2,200 words
- CTA: Free network assessment

**2. "What Does Managed IT Actually Cost? Pricing Guide for Westchester Small Businesses"**
- Target keyword: `small business it support westchester`
- Buying stage: Bottom of funnel
- Angle: Transparent breakdown of per-user, per-device, and flat-rate pricing models. Most Westchester IT companies hide pricing — this article wins trust by showing the math. Corstar doesn't need to publish its own rates; explaining the market builds authority.
- Length: 1,500–2,000 words
- CTA: Free consultation call

**3. "Break-Fix vs. Managed IT: Which Model Is Right for Your Westchester Business?"**
- Target keyword: `westchester it services`
- Buying stage: Middle of funnel
- Angle: Honest comparison. Corstar is an MSP, but this article doesn't pretend break-fix is always wrong — it shows the math on when break-fix becomes more expensive and why businesses over 10 users almost universally benefit from managed services.
- Length: 1,400–1,800 words
- CTA: Free assessment

---

#### Tier 2 — Compliance & Regulatory (High-Value, Low-Competition)

These articles target CFOs, GCs, compliance officers, and business owners in regulated industries. The compliance angle is Corstar's strongest differentiator — no competitor in Westchester is producing this content at depth.

**4. "NY DFS 23 NYCRR 500: A Plain-English Compliance Checklist for Westchester Financial Firms (2026)"**
- Target keyword: `cybersecurity services westchester` + `ny dfs compliance westchester`
- Buying stage: Top/middle of funnel, but extremely high purchase intent
- Angle: Line-by-line breakdown of what the regulation actually requires, written for a CFO or COO — not a CISO. Include a downloadable PDF checklist as a lead magnet (see Initiative 2).
- Length: 2,500–3,000 words
- CTA: Free compliance gap assessment
- **This article alone can generate the highest-quality leads of any content Corstar publishes.** Financial firms with a compliance deadline are buyers, not browsers.

**5. "HIPAA Compliance for Medical Practices in Westchester County: What Your IT Provider Must Do"**
- Target keyword: `healthcare it support westchester ny`
- Buying stage: Bottom of funnel
- Angle: What a HIPAA-compliant IT setup actually looks like — BAAs, encryption, access controls, audit logging. Written for practice managers and administrators who need to evaluate whether their current IT provider is actually protecting them.
- Length: 2,000–2,500 words
- CTA: Free HIPAA IT assessment

**6. "What Westchester Law Firms Need to Know About Cybersecurity in 2026"**
- Target keyword: `it services for law firms westchester`
- Buying stage: Top/middle of funnel
- Angle: The ethical and regulatory obligations of attorneys around client data security, the specific threats targeting law firms (ransomware, business email compromise), and what a security-first IT partner looks like. Ties directly to NY DFS coverage for covered law firms.
- Length: 1,800–2,200 words
- CTA: Free security assessment for law firms

---

#### Tier 3 — Informational / Pain Point (Top of Funnel, Volume Play)

These articles target business owners and operations managers who are not yet in the market but will be. They generate awareness and email captures.

**7. "The True Cost of IT Downtime for Westchester Small Businesses"**
- Target keyword: `westchester it services` (secondary)
- Buying stage: Top of funnel
- Angle: Data-driven article on the average cost of downtime per hour for SMBs (use published Gartner/IDC stats), translated into the Westchester context. One hour of downtime for a 20-person firm costs more than a month of managed IT.
- Length: 1,200–1,600 words
- CTA: Free network assessment

**8. "VoIP vs. Traditional Phone Systems: A Decision Guide for Westchester Businesses"**
- Target keyword: `voip phone systems westchester ny`
- Buying stage: Middle of funnel
- Angle: Side-by-side cost and feature comparison. Most Westchester businesses are still on legacy PBX or POTS lines. This article captures readers at the moment they start asking the question — before they call a vendor.
- Length: 1,400–1,800 words
- CTA: Free VoIP assessment

**9. "Structured Cabling 101: What Westchester Businesses Need to Know Before an Office Move or Buildout"**
- Target keyword: `structured cabling westchester county`
- Buying stage: Top/middle of funnel
- Angle: Educational guide for business owners and office managers who are about to sign a lease or renovate. Explains Cat6 vs. Cat6a vs. fiber, what a cabling quote should include, and why it matters to get it right the first time.
- Length: 1,500–2,000 words
- CTA: Request a cabling quote

**10. "Data Backup vs. Disaster Recovery: Why Westchester Businesses Need Both"**
- Target keyword: `data backup and recovery westchester`
- Buying stage: Top of funnel
- Angle: Most business owners believe they have backup in place. This article reveals the gap between backup and actual recovery — RTOs, RPOs, and the reality of what happens when a Westchester business gets hit with ransomware and discovers their backup hasn't been tested in 18 months.
- Length: 1,400–1,800 words
- CTA: Free backup and DR assessment

---

### Publishing Cadence

- **Month 3:** Publish Articles 1, 4, and 5 (highest commercial value)
- **Month 4:** Publish Articles 2, 6, and 7
- **Month 5:** Publish Articles 3, 8, 9, and 10
- **Month 6+:** Refresh top performers with updated data; begin second content wave targeting additional Westchester towns and service combinations

---

## Initiative 2 — Lead Magnet Landing Page

### The Page

**Route:** `/free-network-assessment`

**Target keyword:** `free it assessment westchester` / `free network assessment westchester ny`

This is a dedicated conversion page — not a section on the homepage. A standalone URL can rank independently, be linked from every article as the primary CTA, and be tracked as a distinct conversion event in analytics.

### Page Structure

**H1:** Free Network Security Assessment for Westchester Businesses

**What the assessment covers** (bullet list):
- Network vulnerability scan and risk identification
- Review of current backup and disaster recovery posture
- Firewall and endpoint protection evaluation
- Compliance gap check (NY DFS, HIPAA, PCI-DSS as applicable)
- IT cost benchmarking vs. comparable Westchester businesses

**Who it's for:**
- Businesses with 5–200 employees in Westchester County, NY, NJ, or CT
- Organizations without a dedicated internal IT team
- Businesses unsatisfied with their current IT provider
- Companies facing an upcoming compliance deadline

**What happens next:**
1. Submit your name, company, phone, and email
2. A Corstar engineer calls within 1 business hour to schedule
3. 30-minute on-site or remote assessment — no obligation

**Form fields required:** Name, Company, Phone, Email, "Biggest IT concern" (dropdown or free text)

### Form Backend Decision Required

The form requires a backend to receive and route submissions. Options:
- **Calendly** (already configured in the CTA utility) — embed a scheduling widget instead of a form; zero backend needed, immediate booking
- **HubSpot Free CRM** — free tier captures leads, sends notification emails, logs contacts; integrates with most email platforms
- **Formspree / Netlify Forms** — simple form-to-email with no CMS overhead; dead simple to implement
- **Supabase** (already in the project dependencies) — submissions go directly to the existing Supabase database; Corstar team views leads in a dashboard or receives email notifications via Supabase Edge Functions

**Recommendation:** Use Supabase since it is already installed and configured in the project. Build a leads table, submit the form via the existing Supabase client, and trigger an email notification via a Supabase Edge Function or webhook to an email address Corstar monitors. No third-party dependency, no monthly SaaS cost, full ownership of lead data.

---

## Downstream Impact of Month 3

Months 1 and 2 optimized existing content and created new pages. Month 3 creates compounding velocity:

- Each article targets a keyword cluster that the local and industry pages cannot rank for alone
- The lead magnet gives every article a single, trackable conversion action
- Internal links from articles to local pages and industry pages pass authority to those pages, strengthening their rankings
- Over 12–18 months, this content library becomes a moat — competitors cannot replicate 55 years of expertise and 10+ location-specific, compliance-specific articles overnight

The businesses that win search in local markets are not the ones with the best-designed website. They are the ones that answer the questions their customers are already asking — before those customers ever pick up the phone.

---

## Decisions Needed Before Month 3 Can Begin

| Decision | Options | Recommendation |
|---|---|---|
| Blog content pipeline | MDX (developer-managed) vs. Headless CMS (team-managed) | MDX if content is developer-managed; Sanity if Corstar team publishes independently |
| Form backend for lead magnet | Supabase, Calendly, HubSpot, Formspree | Supabase — already in the stack |
| Content author | Internal, ghostwriter, or AI-assisted draft + human review | AI-assisted drafts (Claude) reviewed and approved by Corstar team for accuracy |
| Publishing approval workflow | Who reviews and approves articles before publish? | Define one owner at Corstar before the pipeline is built |
