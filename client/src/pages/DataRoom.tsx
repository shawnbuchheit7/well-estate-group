/*
 * DESIGN: "Cellular Renaissance" - Organic Futurism
 * Data Room page - Secure investor document access
 */

import { motion } from "framer-motion";
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
  Calendar
} from "lucide-react";
import Layout from "@/components/Layout";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";

export default function DataRoom() {
  const documentCategories = [
    {
      title: "Executive Summary",
      icon: FileText,
      documents: [
        { name: "Investment Memorandum", type: "PDF", size: "2.4 MB" },
        { name: "Executive Summary Deck", type: "PDF", size: "8.1 MB" },
        { name: "One-Pager Overview", type: "PDF", size: "1.2 MB" }
      ]
    },
    {
      title: "Financial Documents",
      icon: FileSpreadsheet,
      documents: [
        { name: "5-Year Financial Projections", type: "XLSX", size: "1.8 MB" },
        { name: "Unit Economics Model", type: "XLSX", size: "2.1 MB" },
        { name: "Use of Funds Breakdown", type: "PDF", size: "890 KB" },
        { name: "Cap Table Summary", type: "PDF", size: "420 KB" }
      ]
    },
    {
      title: "Legal & Compliance",
      icon: Scale,
      documents: [
        { name: "Term Sheet", type: "PDF", size: "340 KB" },
        { name: "Subscription Agreement Template", type: "PDF", size: "1.1 MB" },
        { name: "Operating Agreement Summary", type: "PDF", size: "780 KB" },
        { name: "Regulatory Compliance Overview", type: "PDF", size: "560 KB" }
      ]
    },
    {
      title: "Clinical & Operations",
      icon: FileCheck,
      documents: [
        { name: "Treatment Protocol Overview", type: "PDF", size: "3.2 MB" },
        { name: "Clinical Advisory Board Bios", type: "PDF", size: "1.5 MB" },
        { name: "Center Operations Manual (Summary)", type: "PDF", size: "2.8 MB" },
        { name: "Quality Assurance Framework", type: "PDF", size: "1.1 MB" }
      ]
    },
    {
      title: "Market Research",
      icon: FilePieChart,
      documents: [
        { name: "Market Analysis Report", type: "PDF", size: "4.2 MB" },
        { name: "Competitive Landscape", type: "PDF", size: "2.1 MB" },
        { name: "Target Demographics Study", type: "PDF", size: "1.8 MB" }
      ]
    },
    {
      title: "Team & Organization",
      icon: Users,
      documents: [
        { name: "Leadership Team Bios", type: "PDF", size: "1.2 MB" },
        { name: "Organizational Chart", type: "PDF", size: "450 KB" },
        { name: "Hiring Plan & Timeline", type: "PDF", size: "680 KB" }
      ]
    }
  ];

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
            <motion.span variants={fadeInUp} className="font-mono text-primary font-semibold text-sm tracking-wider uppercase">
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
                  conducting due diligence on Lumastem. By accessing these materials, you agree to maintain 
                  confidentiality and not distribute without prior written consent.
                </p>
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
            <div className="grid md:grid-cols-2 gap-8">
              {documentCategories.map((category, index) => (
                <motion.div 
                  key={index}
                  variants={scaleIn}
                  className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-colors"
                >
                  <div className="p-6 border-b border-border bg-muted/30">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                        <category.icon className="w-6 h-6 text-background" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-medium">{category.title}</h3>
                        <p className="font-body text-sm text-muted-foreground">{category.documents.length} documents</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <ul className="space-y-2">
                      {category.documents.map((doc, docIndex) => (
                        <li 
                          key={docIndex}
                          className="flex items-center justify-between p-3 rounded-xl hover:bg-muted/50 transition-colors group cursor-pointer"
                        >
                          <div className="flex items-center gap-3">
                            <FileText className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                            <div>
                              <p className="font-body text-sm font-medium group-hover:text-primary transition-colors">{doc.name}</p>
                              <p className="font-mono text-xs text-muted-foreground">{doc.type} • {doc.size}</p>
                            </div>
                          </div>
                          <Download className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
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
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white font-body font-medium shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule a Call
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 font-body font-medium"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact IR Team
              </Button>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-12 grid md:grid-cols-3 gap-6">
              {[
                { icon: Mail, label: "Email", value: "investors@lumastem.com" },
                { icon: Phone, label: "Phone", value: "(305) 555-0123" },
                { icon: Building2, label: "Office", value: "Miami, FL" }
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

      {/* FAQ Section */}
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
              <span className="font-mono text-primary font-semibold text-sm tracking-wider uppercase">
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
                  answer: "Access is limited to accredited investors and qualified institutional buyers who have signed our NDA and completed the investor verification process."
                },
                {
                  question: "How do I request additional documents?",
                  answer: "Contact our investor relations team via email or schedule a call. We're happy to provide additional materials based on your due diligence needs."
                },
                {
                  question: "Are the financial projections audited?",
                  answer: "The projections are management estimates based on our operating model. Historical financials will be provided upon request and are prepared in accordance with GAAP."
                },
                {
                  question: "Can I share these documents with my advisors?",
                  answer: "Yes, you may share with your legal, financial, and tax advisors who are bound by professional confidentiality obligations. Please do not distribute to other parties without our consent."
                }
              ].map((faq, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
                  <h4 className="font-display text-lg font-medium mb-2">{faq.question}</h4>
                  <p className="font-body text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
