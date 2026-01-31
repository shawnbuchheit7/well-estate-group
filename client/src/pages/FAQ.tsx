/**
 * FAQ Page - Investor Frequently Asked Questions
 * 
 * Design: Accordion-style FAQ organized by category
 * Answers common investor questions about membership model, regulatory, and competitive positioning
 */

import { motion } from "framer-motion";
import { ChevronDown, HelpCircle, Building2, Scale, Users, TrendingUp, Shield, DollarSign } from "lucide-react";
import { useState } from "react";
import Layout from "@/components/Layout";
import { Link } from "wouter";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

interface FAQItem {
  question: string;
  answer: string;
  links?: { text: string; href: string }[];
}

interface FAQCategory {
  title: string;
  icon: React.ElementType;
  color: string;
  items: FAQItem[];
}

const faqData: FAQCategory[] = [
  {
    title: "Membership Model",
    icon: Users,
    color: "primary",
    items: [
      {
        question: "Why do you open each center with 3 ELITE physician teams?",
        answer: "Opening with 3 ELITE teams (12 staff) ensures we have capacity for member growth from day one. Each physician can onboard up to 15 new members per month, giving us capacity for 45 new ELITE members monthly. This prevents waitlists and ensures a premium member experience. New teams are added when existing physicians reach 50% capacity (60 members), ensuring seamless scaling.",
        links: [{ text: "View Team Structure", href: "/hiring" }]
      },
      {
        question: "What's the difference between CHECK and ELITE memberships?",
        answer: "CHECK ($12,500) is our entry-level diagnostic membership focused on comprehensive testing and baseline establishment. ELITE ($29,500) includes everything in CHECK plus ongoing physician-led care, quarterly consultations, unlimited access to ancillary services, and personalized health optimization. ELITE represents 85% of our projected membership mix.",
        links: [{ text: "View Membership Details", href: "/memberships" }]
      },
      {
        question: "How do you ensure quality with a 120-member panel per physician?",
        answer: "Our 120-member cap is significantly lower than traditional primary care (2,000+ patients). Combined with our 15 new members/month onboarding limit, physicians have time to build deep relationships. Each physician is supported by a dedicated MA and 2 Care Coordinators, allowing them to focus on clinical care while the team handles coordination and follow-up.",
      },
      {
        question: "What happens when a member's physician reaches capacity?",
        answer: "We proactively hire new ELITE teams when existing physicians reach 50% capacity (60 members). This ensures there's always availability for new members without waitlists. Members are matched with physicians based on health goals and preferences, not just availability.",
      },
      {
        question: "How do ancillary services contribute to revenue?",
        answer: "Ancillary services (IV therapy, injections, stem cell treatments) generate approximately 50% of membership value at 60% margins. These are delivered by the Center Operations Team, separate from the ELITE care teams, ensuring efficient utilization of clinical resources.",
        links: [{ text: "View Unit Economics", href: "/performance" }]
      },
      {
        question: "Can members upgrade from CHECK to ELITE?",
        answer: "Yes, CHECK members can upgrade to ELITE at any time by paying the difference in membership fees. We expect 20-30% of CHECK members to upgrade within the first year after experiencing our diagnostic capabilities. This creates a natural upsell pathway and demonstrates value before commitment to ongoing care."
      },
      {
        question: "What's the member retention strategy?",
        answer: "Our retention strategy centers on the physician-member relationship and proactive care coordination. Each ELITE member has a dedicated Care Coordinator who maintains regular contact. Quarterly physician consultations, personalized health optimization plans, and exclusive member events create multiple touchpoints. We target 85%+ annual retention for ELITE members."
      }
    ]
  },
  {
    title: "Regulatory & Compliance",
    icon: Scale,
    color: "amber-500",
    items: [
      {
        question: "How is Lumastem regulated?",
        answer: "Lumastem operates as a membership-based medical practice, not as an insurance provider. Our services are delivered by licensed physicians and clinical staff under standard medical practice regulations. We maintain full compliance with state medical board requirements, HIPAA, and clinical laboratory regulations (CLIA).",
      },
      {
        question: "Are stem cell treatments FDA approved?",
        answer: "We use autologous (patient's own) stem cells under the FDA's same surgical procedure exemption when applicable. For other applications, we follow FDA guidance on minimal manipulation and homologous use. Our medical director ensures all treatments comply with current regulatory frameworks.",
      },
      {
        question: "What about state-by-state medical licensing?",
        answer: "Each center operates under the medical license of our Medical Director and employed physicians in that state. Our ELITE physicians providing ongoing care are licensed in the state where the member's home center is located. We do not practice telemedicine across state lines without proper licensing.",
      },
      {
        question: "How do you handle medical malpractice liability?",
        answer: "We maintain comprehensive medical malpractice insurance for all clinical staff. Our D&O insurance provides $5M primary coverage plus $10M excess for directors and officers. All physicians are credentialed and maintain their own malpractice coverage as well.",
        links: [{ text: "View Governance", href: "/hiring" }]
      }
    ]
  },
  {
    title: "Competitive Positioning",
    icon: TrendingUp,
    color: "primary",
    items: [
      {
        question: "How does Lumastem compare to Forward Health or Parsley Health?",
        answer: "Forward and Parsley focus on primary care with technology enhancement. Lumastem is fundamentally different: we're a diagnostics and regenerative medicine company with hospitality-grade service. Our GeneMetrics™ platform provides proprietary insights, and our stem cell/regenerative capabilities are unique in the membership medicine space.",
      },
      {
        question: "What about traditional concierge medicine practices?",
        answer: "Traditional concierge practices charge $5,000-$25,000 annually for enhanced access to a single physician. Lumastem offers comprehensive diagnostics, regenerative treatments, and ongoing care at comparable pricing but with far more clinical capability. Our vertically integrated model (diagnostics, biologics, treatments) creates value traditional practices can't match.",
      },
      {
        question: "Why can't a hospital system replicate this model?",
        answer: "Hospital systems are optimized for volume and insurance reimbursement, not luxury membership experiences. Their cost structures, union labor, and institutional overhead make our model economically unviable for them. Additionally, our proprietary GeneMetrics™ platform and biologics manufacturing capabilities would require significant investment to replicate.",
      },
      {
        question: "What's your moat against new entrants?",
        answer: "Our competitive moat includes: (1) Proprietary GeneMetrics™ diagnostic platform, (2) Vertically integrated biologics manufacturing, (3) Hospitality-trained clinical staff, (4) First-mover advantage in luxury regenerative medicine, and (5) Network effects from member referrals and physician relationships.",
        links: [{ text: "View Technology", href: "/technology" }]
      },
      {
        question: "How does Lumastem compare to Human Longevity Institute (HLI)?",
        answer: "HLI focuses primarily on diagnostics and data analysis without the ongoing care component. Lumastem differentiates through our ELITE membership model with dedicated physician relationships, proprietary MUSE Cell technology, and vertically integrated biologics manufacturing. We offer both comprehensive diagnostics AND ongoing regenerative care, not just testing.",
        links: [{ text: "View Competitive Analysis", href: "/opportunity" }]
      }
    ]
  },
  {
    title: "Financial Model",
    icon: DollarSign,
    color: "amber-500",
    items: [
      {
        question: "What's the path to profitability?",
        answer: "Each center reaches cash flow positive at approximately 150 ELITE members (Year 2). With 3 physician teams at launch supporting up to 360 members, we have significant capacity for growth. Corporate overhead is amortized across multiple centers as we scale.",
        links: [{ text: "View Projections", href: "/projections" }]
      },
      {
        question: "What are the two expansion pathways?",
        answer: "We have two distinct growth strategies: (1) Center Development - owned centers, franchises, and joint ventures delivering the full Lumastem experience, and (2) Therapeutics Product Licensing - licensing our MUSE Cell technology and biologics to medical providers worldwide. The licensing pathway represents a massive additional opportunity with a comprehensive business plan in development.",
        links: [{ text: "View Growth Strategy", href: "/projections" }]
      },
      {
        question: "How does the unit economics work?",
        answer: "ELITE membership generates $29,500 in revenue with ~$8,000 in direct costs (diagnostics, treatments, physician time), yielding ~73% gross margin. Ancillary services add approximately 50% of membership value at 60% margins. Blended contribution margin exceeds 65%.",
        links: [{ text: "View Unit Economics", href: "/performance" }]
      },
      {
        question: "What's the customer acquisition cost (CAC)?",
        answer: "We project CAC of $2,500-$3,500 per member, primarily through physician referral networks, high-net-worth events, and targeted digital marketing. With LTV exceeding $75,000 (3+ year retention), our LTV:CAC ratio exceeds 20:1.",
      },
      {
        question: "How is the $50M Series A being allocated?",
        answer: "Approximately 40% for flagship center buildout and equipment, 25% for working capital and initial operations (including staffing ramp), 15% for technology and GeneMetrics™ platform development, 10% for marketing and member acquisition, and 10% for corporate infrastructure and reserves. This funds us through profitability at the first center and initial expansion planning.",
        links: [{ text: "View Use of Funds", href: "/use-of-funds" }]
      }
    ]
  },
  {
    title: "Team & Operations",
    icon: Building2,
    color: "primary",
    items: [
      {
        question: "Why 14 staff for Center Operations vs 12 for ELITE teams?",
        answer: "Center Operations (14 staff) handles all diagnostics, imaging, and ancillary services for ALL members—both CHECK and ELITE. This team is fixed per center regardless of membership. ELITE teams (12 staff at launch, 4 per team × 3 teams) focus exclusively on ongoing ELITE member care and scale with membership growth.",
      },
      {
        question: "How do you recruit physicians for the ELITE model?",
        answer: "We partner with Witt/Kieffer, a leading healthcare executive search firm with 50+ years of experience. We target physicians seeking to escape insurance-driven medicine who want to practice relationship-based care. Our compensation includes competitive base salary ($300K for ELITE physicians, $400K for Medical Directors) plus 30% MBO bonus opportunity.",
        links: [{ text: "View Hiring Plan", href: "/hiring" }]
      },
      {
        question: "What is the MBO compensation structure?",
        answer: "Eligible team members (C-suite, management, and physicians) can earn up to 30% of base salary through Management by Objectives bonuses. Three metrics are defined annually combining individual and company goals, reviewed quarterly. For example, a physician earning $300K base could achieve total OTE of $390K with full MBO attainment.",
        links: [{ text: "View Compensation Details", href: "/hiring" }]
      },
      {
        question: "What's the role of the Medical Director vs ELITE Physicians?",
        answer: "The Medical Director oversees all clinical operations at the center, including diagnostics, quality assurance, and regulatory compliance. ELITE Physicians report to the Medical Director and focus on ongoing member care. This structure ensures clinical excellence while allowing ELITE physicians to focus on member relationships.",
      },
      {
        question: "How do Care Coordinators support the member experience?",
        answer: "Each Care Coordinator manages up to 60 ELITE members, serving as the primary point of contact for scheduling, follow-up, and care navigation. They ensure members receive timely responses, coordinate between specialists, and proactively reach out for wellness check-ins. This high-touch model is central to our retention strategy.",
      }
    ]
  },
  {
    title: "Investment Terms",
    icon: Shield,
    color: "amber-500",
    items: [
      {
        question: "What are the Series A terms?",
        answer: "We're raising $50M at a $150M pre-money valuation (25% ownership). Investors receive preferred shares with 1x non-participating liquidation preference, pro-rata rights, and standard protective provisions. The lead investor receives 1 board seat, with the board capped at 5 members maximum. Minimum investment is $1M.",
        links: [{ text: "View Investment Details", href: "/investors" }]
      },
      {
        question: "What's the equity allocation for the team?",
        answer: "12% total equity pool reserved for executive team. Phase 1 executives (CEO, CFO, COO, CPO, CLO) receive the majority with 4-year vesting and 1-year cliff. Phase 2 executives (CMO Medical, CCO, CMO Marketing, CTO) receive allocations as they join. Specific individual allocations are determined at hiring based on experience and negotiation.",
        links: [{ text: "View Equity Structure", href: "/hiring" }]
      },
      {
        question: "What's the expected timeline to Series B?",
        answer: "We anticipate raising Series B 18-24 months post-Series A close, after demonstrating unit economics at the flagship center and beginning expansion to centers 2-3. Series B will fund expansion to 5+ centers.",
      },
      {
question: "What are the key milestones for investors?",
        answer: "Key milestones include: (1) Flagship center opening and first 100 members, (2) Cash flow positive at single center, (3) Second center opening, (4) Series B raise, and (5) Path to 5+ centers. Each milestone de-risks the investment and validates our model.",
        links: [{ text: "View Projections", href: "/projections" }]
      },
      {
        question: "What are the potential exit scenarios?",
        answer: "Primary exit paths include: (1) Strategic acquisition by a healthcare system, private equity, or luxury wellness brand seeking regenerative medicine capabilities, (2) IPO once we reach scale with 10+ centers and proven unit economics, or (3) Merger with complementary longevity/wellness companies. We project 8-45x MOIC depending on exit timing and scenario."
      },
      {
        question: "What are the key investment risks?",
        answer: "Key risks include: (1) Regulatory changes affecting stem cell treatments, (2) Execution risk in scaling to multiple centers, (3) Physician recruitment in competitive markets, (4) Economic downturn affecting high-net-worth discretionary spending, and (5) Competitive response from well-funded entrants. We mitigate these through diversified revenue streams, strong governance, and first-mover advantage."
      },
      {
        question: "Is there international expansion potential?",
        answer: "Yes, we've identified significant international opportunities in UAE, Singapore, UK, and Switzerland where regulatory environments are favorable and high-net-worth populations seek premium healthcare. International expansion will follow domestic proof of concept, potentially through joint ventures or licensing arrangements to manage regulatory complexity.",
        links: [{ text: "View Expansion Strategy", href: "/projections" }]
      }
    ]
  }
];

function FAQAccordion({ category }: { category: FAQCategory }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const Icon = category.icon;

  return (
    <motion.div variants={fadeInUp} className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <div 
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: category.color === 'amber-500' ? 'rgba(245, 158, 11, 0.1)' : 'hsl(var(--primary) / 0.1)' }}
        >
          <Icon 
            className="w-5 h-5" 
            style={{ color: category.color === 'amber-500' ? '#f59e0b' : 'hsl(var(--primary))' }}
          />
        </div>
        <h2 className="font-display text-2xl font-medium">{category.title}</h2>
      </div>

      <div className="space-y-3">
        {category.items.map((item, index) => (
          <div 
            key={index}
            className="bg-card border border-border rounded-xl overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/30 transition-colors"
            >
              <span className="font-display font-medium pr-4">{item.question}</span>
              <ChevronDown 
                className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
              />
            </button>
            {openIndex === index && (
              <div className="px-5 pb-5 border-t border-border">
                <p className="font-body text-muted-foreground mt-4 leading-relaxed">
                  {item.answer}
                </p>
                {item.links && item.links.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.links.map((link, i) => (
                      <Link key={i} href={link.href}>
                        <span className="inline-flex items-center gap-1 text-sm text-primary hover:underline cursor-pointer">
                          {link.text} →
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-amber-500/5" />
        <div className="container relative">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8">
              <HelpCircle className="w-4 h-4 text-primary" />
              <span className="font-mono text-sm text-primary">INVESTOR FAQ</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-6xl font-medium mb-6">
              Frequently Asked
              <span className="block text-primary">Questions</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive answers to common investor questions about the Lumastem model, 
              regulatory environment, and investment opportunity.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20">
        <div className="container">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {faqData.map((category, index) => (
              <FAQAccordion key={index} category={category} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-card/30">
        <div className="container">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl font-medium mb-6">
              Have More Questions?
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-lg text-muted-foreground mb-8">
              Our team is available to discuss any aspects of the investment opportunity in detail.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <span className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-xl font-display font-medium hover:bg-primary/90 transition-colors cursor-pointer">
                  Schedule a Call
                </span>
              </Link>
              <Link href="/investors">
                <span className="inline-flex items-center justify-center px-8 py-4 bg-card border border-border rounded-xl font-display font-medium hover:bg-muted/50 transition-colors cursor-pointer">
                  View Investment Terms
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
