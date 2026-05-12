/*
 * DESIGN: "Cellular Renaissance" - Organic Futurism
 * Data Room page - Secure investor document access
 * Enhanced with: access status, document previews, category filtering, proper CTAs
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FileText, 
  Download, 
  Lock, 
  Shield, 
  FolderOpen,
  FileSpreadsheet,
  FileCheck,
  FilePieChart,
  Users,
  Building2,
  Scale,
  Briefcase,
  Mail,
  Phone,
  Calendar,
  Eye,
  CheckCircle2,
  Clock,
  Filter,
  Search,
  ExternalLink,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/hooks/useAnalytics";

type AccessLevel = "preview" | "full" | "restricted";

interface Document {
  name: string;
  type: string;
  size: string;
  access: AccessLevel;
  description?: string;
  lastUpdated?: string;
}

interface DocumentCategory {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  documents: Document[];
}

export default function DataRoom() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const documentCategories: DocumentCategory[] = [
    {
      title: "Executive Summary",
      icon: FileText,
      description: "High-level investment thesis and company overview",
      documents: [
        { name: "Investment Memorandum", type: "PDF", size: "2.4 MB", access: "preview", description: "Comprehensive overview of the investment opportunity", lastUpdated: "May 2026" },
        { name: "Executive Summary Deck", type: "PDF", size: "8.1 MB", access: "preview", description: "Visual presentation of key metrics and strategy", lastUpdated: "May 2026" },
        { name: "One-Pager Overview", type: "PDF", size: "1.2 MB", access: "preview", description: "Quick-reference summary for initial evaluation", lastUpdated: "Apr 2026" }
      ]
    },
    {
      title: "Financial Documents",
      icon: FileSpreadsheet,
      description: "Projections, models, and financial analysis",
      documents: [
        { name: "5-Year Financial Projections", type: "XLSX", size: "1.8 MB", access: "full", description: "Detailed revenue, EBITDA, and cash flow projections", lastUpdated: "May 2026" },
        { name: "Unit Economics Model", type: "XLSX", size: "2.1 MB", access: "full", description: "Per-center economics with sensitivity analysis", lastUpdated: "May 2026" },
        { name: "Use of Funds Breakdown", type: "PDF", size: "890 KB", access: "preview", description: "Detailed allocation of Series A capital", lastUpdated: "Apr 2026" },
        { name: "Cap Table Summary", type: "PDF", size: "420 KB", access: "restricted", description: "Current ownership structure and dilution schedule", lastUpdated: "May 2026" }
      ]
    },
    {
      title: "Legal & Compliance",
      icon: Scale,
      description: "Term sheets, agreements, and regulatory documentation",
      documents: [
        { name: "Term Sheet", type: "PDF", size: "340 KB", access: "restricted", description: "Series A investment terms and conditions", lastUpdated: "May 2026" },
        { name: "Subscription Agreement Template", type: "PDF", size: "1.1 MB", access: "restricted", description: "Standard subscription documentation", lastUpdated: "Apr 2026" },
        { name: "Operating Agreement Summary", type: "PDF", size: "780 KB", access: "full", description: "Entity structure and governance overview", lastUpdated: "Mar 2026" },
        { name: "CPOM Compliance Framework", type: "PDF", size: "560 KB", access: "full", description: "Corporate Practice of Medicine compliance for TX/NY/CA", lastUpdated: "Apr 2026" }
      ]
    },
    {
      title: "Clinical & Operations",
      icon: FileCheck,
      description: "Treatment protocols, clinical team, and operations",
      documents: [
        { name: "Treatment Protocol Overview", type: "PDF", size: "3.2 MB", access: "preview", description: "MUSE Cell therapy and regenerative treatment protocols", lastUpdated: "Apr 2026" },
        { name: "Clinical Advisory Board Bios", type: "PDF", size: "1.5 MB", access: "preview", description: "Credentials and backgrounds of clinical advisors", lastUpdated: "Mar 2026" },
        { name: "Center Operations Manual (Summary)", type: "PDF", size: "2.8 MB", access: "full", description: "Operational playbook for center management", lastUpdated: "Apr 2026" },
        { name: "Quality Assurance Framework", type: "PDF", size: "1.1 MB", access: "full", description: "Clinical quality standards and monitoring protocols", lastUpdated: "Mar 2026" }
      ]
    },
    {
      title: "Market Research",
      icon: FilePieChart,
      description: "Industry analysis, competitive landscape, and demographics",
      documents: [
        { name: "Longevity Market Analysis Report", type: "PDF", size: "4.2 MB", access: "preview", description: "$624B longevity market sizing and growth projections", lastUpdated: "May 2026" },
        { name: "Competitive Landscape", type: "PDF", size: "2.1 MB", access: "preview", description: "Positioning vs. concierge medicine and wellness competitors", lastUpdated: "Apr 2026" },
        { name: "Target Demographics Study", type: "PDF", size: "1.8 MB", access: "full", description: "HNW population analysis by metro market", lastUpdated: "Mar 2026" }
      ]
    },
    {
      title: "Team & Organization",
      icon: Users,
      description: "Leadership bios, org structure, and hiring plans",
      documents: [
        { name: "Leadership Team Bios", type: "PDF", size: "1.2 MB", access: "preview", description: "Executive team backgrounds and track records", lastUpdated: "May 2026" },
        { name: "Organizational Chart", type: "PDF", size: "450 KB", access: "preview", description: "Current and planned organizational structure", lastUpdated: "Apr 2026" },
        { name: "Hiring Plan & Timeline", type: "PDF", size: "680 KB", access: "full", description: "Staffing roadmap aligned with center rollout", lastUpdated: "Apr 2026" }
      ]
    }
  ];

  const accessConfig = {
    preview: { label: "Preview", color: "text-emerald-500", bg: "bg-emerald-500/10", icon: Eye },
    full: { label: "Full Access", color: "text-primary", bg: "bg-primary/10", icon: CheckCircle2 },
    restricted: { label: "NDA Required", color: "text-amber-500", bg: "bg-amber-500/10", icon: Lock }
  };

  const filters = [
    { id: "all", label: "All Documents" },
    { id: "preview", label: "Preview Available" },
    { id: "full", label: "Full Access" },
    { id: "restricted", label: "NDA Required" }
  ];

  const filteredCategories = documentCategories.map(cat => ({
    ...cat,
    documents: cat.documents.filter(doc => {
      const matchesFilter = activeFilter === "all" || doc.access === activeFilter;
      const matchesSearch = searchQuery === "" || 
        doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (doc.description?.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesFilter && matchesSearch;
    })
  })).filter(cat => cat.documents.length > 0);

  const totalDocs = documentCategories.reduce((sum, cat) => sum + cat.documents.length, 0);
  const previewDocs = documentCategories.reduce((sum, cat) => sum + cat.documents.filter(d => d.access === "preview").length, 0);
  const fullDocs = documentCategories.reduce((sum, cat) => sum + cat.documents.filter(d => d.access === "full").length, 0);
  const restrictedDocs = documentCategories.reduce((sum, cat) => sum + cat.documents.filter(d => d.access === "restricted").length, 0);

  const handleDocClick = (doc: Document, category: string) => {
    trackEvent("data_room_doc_click", { document: doc.name, category, access: doc.access });
  };

  return (
    <Layout>
      {/* Page Header */}
      <section className="py-20 relative">
        <div className="container">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-primary font-semibold text-sm tracking-wider uppercase section-header-accent-center">
              INVESTOR ACCESS
            </motion.span>
            <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl font-medium mt-4 mb-6">
              Data Room
            </motion.h1>
            <motion.p variants={fadeInUp} className="font-body text-xl text-muted-foreground">
              Secure access to investment documents, financial models, and due diligence materials.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Access Summary Stats */}
      <section className="py-4">
        <div className="container">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <span className="font-mono text-2xl font-bold text-foreground">{totalDocs}</span>
                <p className="font-body text-xs text-muted-foreground mt-1">Total Documents</p>
              </div>
              <div className="bg-card border border-emerald-500/30 rounded-xl p-4 text-center">
                <span className="font-mono text-2xl font-bold text-emerald-500">{previewDocs}</span>
                <p className="font-body text-xs text-muted-foreground mt-1">Preview Available</p>
              </div>
              <div className="bg-card border border-primary/30 rounded-xl p-4 text-center">
                <span className="font-mono text-2xl font-bold text-primary">{fullDocs}</span>
                <p className="font-body text-xs text-muted-foreground mt-1">Full Access</p>
              </div>
              <div className="bg-card border border-amber-500/30 rounded-xl p-4 text-center">
                <span className="font-mono text-2xl font-bold text-amber-500">{restrictedDocs}</span>
                <p className="font-body text-xs text-muted-foreground mt-1">NDA Required</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security Notice */}
      <section className="py-8">
        <div className="container">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-primary/10 border border-primary/30 rounded-2xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-medium mb-2">Confidential Materials</h3>
                <p className="font-body text-muted-foreground">
                  The documents in this data room are confidential and intended solely for qualified investors 
                  conducting due diligence on Well Estate Group. By accessing these materials, you agree to maintain 
                  confidentiality and not distribute without prior written consent.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className="py-4">
        <div className="container">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="bg-card border border-border rounded-2xl p-4 flex flex-col md:flex-row gap-4 items-center">
              {/* Search */}
              <div className="relative flex-1 w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search documents..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-muted/50 border border-border rounded-lg font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
                />
              </div>
              
              {/* Filter Tabs */}
              <div className="flex gap-2 flex-wrap">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`px-3 py-1.5 rounded-lg font-body text-xs font-medium transition-all ${
                      activeFilter === filter.id 
                        ? "bg-primary text-white shadow-sm" 
                        : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Document Categories */}
      <section className="py-12">
        <div className="container">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeFilter + searchQuery}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="grid md:grid-cols-2 gap-8"
              >
                {filteredCategories.map((category, index) => (
                  <motion.div 
                    key={index}
                    variants={scaleIn}
                    className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-colors h-full"
                  >
                    <div className="p-6 border-b border-border bg-muted/30">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                          <category.icon className="w-6 h-6 text-background" />
                        </div>
                        <div>
                          <h3 className="font-display text-xl font-medium">{category.title}</h3>
                          <p className="font-body text-xs text-muted-foreground">{category.description}</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <ul className="space-y-2">
                        {category.documents.map((doc, docIndex) => {
                          const accessInfo = accessConfig[doc.access];
                          const AccessIcon = accessInfo.icon;
                          return (
                            <li 
                              key={docIndex}
                              onClick={() => handleDocClick(doc, category.title)}
                              className="flex items-center justify-between p-3 rounded-xl hover:bg-muted/50 transition-colors group cursor-pointer"
                            >
                              <div className="flex items-center gap-3 flex-1 min-w-0">
                                <FileText className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                                <div className="min-w-0">
                                  <p className="font-body text-sm font-medium group-hover:text-primary transition-colors truncate">{doc.name}</p>
                                  <div className="flex items-center gap-2 mt-0.5">
                                    <span className="font-mono text-[10px] text-muted-foreground">{doc.type} • {doc.size}</span>
                                    {doc.lastUpdated && (
                                      <span className="font-mono text-[10px] text-muted-foreground/60">• {doc.lastUpdated}</span>
                                    )}
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center gap-2 flex-shrink-0 ml-2">
                                <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium ${accessInfo.bg} ${accessInfo.color}`}>
                                  <AccessIcon className="w-3 h-3" />
                                  {accessInfo.label}
                                </span>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {filteredCategories.length === 0 && (
              <div className="text-center py-12">
                <FolderOpen className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
                <p className="font-body text-muted-foreground">No documents match your current filter.</p>
                <button 
                  onClick={() => { setActiveFilter("all"); setSearchQuery(""); }}
                  className="font-body text-sm text-primary hover:underline mt-2"
                >
                  Clear filters
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Access Levels Explanation */}
      <section className="py-12">
        <div className="container">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="bg-card border border-border rounded-2xl p-8">
              <h3 className="font-display text-xl font-medium mb-6 flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Document Access Levels
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                  <div className="flex items-center gap-2 mb-3">
                    <Eye className="w-5 h-5 text-emerald-500" />
                    <span className="font-display font-medium text-emerald-500">Preview</span>
                  </div>
                  <p className="font-body text-sm text-muted-foreground">
                    Summary versions available after initial investor call. Provides high-level overview for preliminary evaluation.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="font-display font-medium text-primary">Full Access</span>
                  </div>
                  <p className="font-body text-sm text-muted-foreground">
                    Complete documents available to verified accredited investors who have completed the qualification process.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
                  <div className="flex items-center gap-2 mb-3">
                    <Lock className="w-5 h-5 text-amber-500" />
                    <span className="font-display font-medium text-amber-500">NDA Required</span>
                  </div>
                  <p className="font-body text-sm text-muted-foreground">
                    Highly sensitive materials requiring a signed NDA. Includes term sheets, cap table, and legal agreements.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Request Access CTA */}
      <section className="py-20 bg-card/30">
        <div className="container">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mx-auto mb-6">
                <Lock className="w-8 h-8 text-background" />
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-medium mb-6">
                Request Full Access
              </h2>
              <p className="font-body text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                To download documents and access the complete data room, please schedule a call 
                with our investor relations team to verify your accredited investor status.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/longevity/contact">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white font-body font-medium shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule a Call
                </Button>
              </Link>
              <a href="mailto:invest@wellestategroup.com?subject=Data%20Room%20Access%20Request">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 font-body font-medium"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact IR Team
                </Button>
              </a>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-12 grid md:grid-cols-3 gap-6">
              {[
                { icon: Mail, label: "Email", value: "invest@wellestategroup.com" },
                { icon: Phone, label: "Phone", value: "(713) 555-0123" },
                { icon: Building2, label: "Office", value: "Houston, TX" }
              ].map((contact, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-6">
                  <contact.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                  <p className="font-body text-sm text-muted-foreground mb-1">{contact.label}</p>
                  <p className="font-display font-medium">{contact.value}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section with Expand/Collapse */}
      <section className="py-20">
        <div className="container">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <span className="font-mono text-primary font-semibold text-sm tracking-wider uppercase section-header-accent-center">
                COMMON QUESTIONS
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
                Data Room FAQ
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-4">
              {[
                {
                  question: "Who can access the data room?",
                  answer: "Access is limited to accredited investors and qualified institutional buyers who have signed our NDA and completed the investor verification process. Initial preview documents are available after an introductory call with our IR team."
                },
                {
                  question: "How do I request additional documents?",
                  answer: "Contact our investor relations team at invest@wellestategroup.com or schedule a call through the contact page. We're happy to provide additional materials based on your due diligence needs."
                },
                {
                  question: "Are the financial projections audited?",
                  answer: "The projections are management estimates based on our operating model and proven unit economics from the Houston flagship center. Historical financials will be provided upon request and are prepared in accordance with GAAP."
                },
                {
                  question: "Can I share these documents with my advisors?",
                  answer: "Yes, you may share with your legal, financial, and tax advisors who are bound by professional confidentiality obligations. Please do not distribute to other parties without our consent."
                },
                {
                  question: "What is the investment minimum?",
                  answer: "The minimum investment for the Series A round is discussed during the initial investor call. We work with both individual accredited investors and institutional investors."
                },
                {
                  question: "How often are documents updated?",
                  answer: "Financial models and projections are updated quarterly. Legal documents are updated as terms evolve. The 'Last Updated' date on each document reflects the most recent revision."
                }
              ].map((faq, i) => (
                <div 
                  key={i} 
                  className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors"
                >
                  <button 
                    onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                    className="w-full p-6 flex items-center justify-between text-left"
                  >
                    <h4 className="font-display text-lg font-medium pr-4">{faq.question}</h4>
                    {expandedFaq === i ? (
                      <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    )}
                  </button>
                  <AnimatePresence>
                    {expandedFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-0">
                          <p className="font-body text-muted-foreground">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
